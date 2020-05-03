$(document).ready(function() {
    // nav bar buttons 

    $("#about-btn").on("click", function () {
        $("#container0").removeClass("d-none");
        $("#container1").addClass("d-none");
        $("#container2").addClass("d-none");
    })

    $("#portfolio-btn").on("click", function () {
        $("#container1").removeClass("d-none");
        $("#container0").addClass("d-none");
        $("#container2").addClass("d-none");
    })

    $("#contact-btn").on("click", function () {
        $("#container2").removeClass("d-none");
        $("#container0").addClass("d-none");
        $("#container1").addClass("d-none");
    })

    const aboutBtn = document.getElementById("about-btn");
    const portfolioBtn = document.getElementById("portfolio-btn");
    const contactBtn = document.getElementById("contact-btn");

    function aboutF() {
        document.getElementById("container0").classList.remove("d-none");
        document.getElementById("container1").classList.add("d-none");
        document.getElementById("container2").classList.add("d-none");
    }

    function portfolioF() {
        document.getElementById("container1").classList.remove("d-none");
        document.getElementById("container0").classList.add("d-none");
        document.getElementById("container2").classList.add("d-none");
    }

    function contactF() {
        document.getElementById("container2").classList.remove("d-none");
        document.getElementById("container1").classList.add("d-none");
        document.getElementById("container0").classList.add("d-none");
    }

    aboutBtn.addEventListener('click', aboutF);
    portfolioBtn.addEventListener('click', portfolioF);
    contactBtn.addEventListener('click', contactF);


    // Portfolio Buttons
    const weatherBtn = document.getElementById("weather-btn");
    const passBtn = document.getElementById("password-btn");
    const cocktailBtn = document.getElementById("cocktail-btn");
    const quizBtn = document.getElementById("quiz-btn");

    function weatherF(e) {
        e.preventDefault()
        window.open("https://knzmck.github.io/weather-dashboard/")
    }

    function passF(e) {
        e.preventDefault()
        window.open("https://knzmck.github.io/password-generator/")
    }


    function drinkingF(e) {
        e.preventDefault()
        window.open("https://knzmck.github.io/Drinking-At-Home/")
    }

    function quizF(e) {
        e.preventDefault()
        window.open("https://knzmck.github.io/code-quiz/")
    }

    weatherBtn.addEventListener('click', weatherF);
    passBtn.addEventListener('click', passF);
    cocktailBtn.addEventListener('click', drinkingF);
    quizBtn.addEventListener('click', quizF);

    // Facebook and Linkedin Buttons
    var linkedinBtn = document.getElementById("linkedin");
    var fbBtn = document.getElementById("facebook");

    function linkedinBtnF(e) {
        e.preventDefault()
        window.open("https://www.linkedin.com/in/mackenzie-schutz-2560a6199")
    }

    function fbBtnF(e) {
        e.preventDefault()
        window.open("https://www.facebook.com/mackenzie.schutz")
    }

    linkedinBtn.addEventListener('click', linkedinBtnF);
    fbBtn.addEventListener('click', fbBtnF);


}
