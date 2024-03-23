// fire base ka kaam shuru

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getDatabase , set , ref ,onChildAdded   } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhCs-g_YZvVZ09ninxEGQlzwWEcuelay0",
  authDomain: "quiz-app-007.firebaseapp.com",
  projectId: "quiz-app-007",
  storageBucket: "quiz-app-007.appspot.com",
  messagingSenderId: "1000700907876",
  appId: "1:1000700907876:web:da21388a56411ef9516a71",
  measurementId: "G-MWX3MPYG9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

function getDataFromDatabase(){
    const reference = ref(db, 'questions/')
    onChildAdded(reference,function(data){
        console.log(data.val());
        questions.push(data.val())
        renderQuestion()
    })
}
getDataFromDatabase();

///////////////////////////////////////////////////////////////////////
let questions = [];
// Questions Section
var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');
var question = document.getElementById('question');
var answerParent = document.getElementById('answerParent');


var indexNum = 0;
var score = 0;
// Result Section

let resultDiv = document.getElementById('result');
let resultMarks = document.getElementById('marks');
let percent = document.getElementById('percentage');
let grade = document.getElementById('grade');
let status = document.getElementById('status');
let totalMarks = questions.length;
////////////////////////////////////////////
window.checkQuestion = function (a, b) {
    if (a == b) {
        score++
    }
    nextQuestion()
}
window.nextQuestion = function() {
    indexNum++;
    if(indexNum == questions.length){
        alert("Questions Completed")
        indexNum = 0
    }
    
    renderQuestion();
}

function renderQuestion(){

    console.log(questions)
    // console.log(questions[.options)
    currentQuestion.innerHTML = indexNum + 1;
    totalQuestion.innerHTML = questions.length;
    console.log(questions[indexNum]);
    console.log(questions[indexNum].options);
    var obj = questions[indexNum].options;
    console.log(questions[indexNum])
    console.log(obj)
    question.innerHTML = questions[indexNum].question;
    answerParent.innerHTML = ""
    for(var i = 0; i < obj.length; i++){
        console.log(i,"test")
        answerParent.innerHTML += `<div class = "col-md-4">
        <div class = "py-2">
        <button onclick = "checkQuestion('${questions.options[i]}','${questions.correctAnswer}')" class = "btn btn-danger fs-4 rounded-pill w-100> 
        ${"test"}
        </button>
        </div>
        </div>`
    }
}
renderQuestion();



window.result = function () {
    
    if (currentIndex + 1 == questions.length) {
        // console.log("done");
        mainDiv.style.display = 'none';
        resultDiv.style.display = "flex"
        // mainDiv.style.background="green";
        resultMarks.innerHTML = `MARKS : ${marks + 1}`; 
        let percentage = (marks + 1) / totalMarks * 100 
        percent.innerHTML = `PERCENTAGE : ${percentage}`;
        console.log(percent.innerHTML, typeof percent.innerHTML);
        console.log(percentage)

        if (percentage > 45) {

            grade.innerHTML = "A";
            console.log('aaaaaaaaaa')
        }
        else if (percentage <= 79 || percentage >= 40) {
            grade.innerHTML = "B"

        }
        else if (percentage <= 39) {
            grade.innerText = 'C'

        }
    }
    else {
        currentIndex++
        showQuest()
    }


}





window.restart = function () {

    currentIndex = 0;
    marks = 0;
    resultDiv.style.display = 'none'; 
    mainDiv.style.display = "block" 
    showQuest();
}