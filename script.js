// Facebook and Linkedin Buttons
var linkedinBtn = document.getElementById("linkedin");
var fbBtn = document.getElementById("facebook");

linkedinBtn.addEventListener('click',linkedinBtnF);
fbBtn.addEventListener('click', fbBtnF);

function linkedinBtnF () {
    window.open("https:/www.linkedin.com/in/mackenzie-schutz-2560a6199")
}

function fbBtnF () {
    window.open("https://www.facebook.com/mackenzie.schutz")
}

// Portfolio Buttons
const weatherBtn = document.getElementById("weather-btn");
const passBtn = document.getElementById("password-btn");
const cocktailBtn = document.getElementById("cocktail-btn");
const quizBtn = document.getElementById("quiz-btn");

weatherBtn.addEventListener('click', weatherF);
passBtn.addEventListener('click', passF);
cocktailBtn.addEventListener('click', drinkingF);
quizBtn.addEventListener('click', quizF);


function weatherF () {
    window.open("https://knzmck.github.io/weather-dashboard/")
}

function passF () {
    window.open("https://knzmck.github.io/password-generator/")
}


function drinkingF () {
    window.open("https://knzmck.github.io/Drinking-At-Home/")
}

function quizF () {
    window.open("https://knzmck.github.io/code-quiz/")
}