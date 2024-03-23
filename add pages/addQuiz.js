// fire base ka kaam shuru

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getDatabase , set , ref , push } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
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


// firebase ka kaam khatam 


var question = document.getElementById("question");
var option = document.getElementById("option");
var optionsParent = document.getElementById("optionsParent");
var correctAnswerElem = document.getElementById("correctAnswer");

var options = [];
var correctAnswer;

function renderOptions(){
    optionsParent.innerHTML = '';
    for(var i = 0; i < options.length; i++){
        optionsParent.innerHTML += `<li onclick = "setCorrectAnswer('${options[i]}')" class = 'p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li>`
    }
}

window.addOptions = function () {
    options.push(option.value);
    console.log(options);
    renderOptions();
}

window.setCorrectAnswer = function (a){
    correctAnswer = a;
    correctAnswerElem.innerHTML = correctAnswer;
}

window.submitQuestion = function (){
    var obj = {
        question : question.value,
        options : options,
        correctAnswer : correctAnswer
    }

    obj.id = push(ref(db,'questions/')).key
    const reference =  ref(db,`questions/${obj.id}`)
    set(reference,obj)
    console.log(obj);
}