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
    // squidstack = quiz
    const quizBtn = document.getElementById("quiz-btn");
    const weatherRepoBtn = document.getElementById("weather-repo");
    const PWRepoBtn = document.getElementById("pw-repo");
    const cocktailRepoBtn = document.getElementById("cocktail-repo");
    const quizRepoBtn = document.getElementById("quiz-repo");

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
        window.open("https://squidstack.herokuapp.com/")
    }

    function weatherRepoOpen (e) {
        e.preventDefault()
        window.open("https://github.com/Knzmck/weather-dashboard.git")
    }

    function PWRepoOpen (e) {
        e.preventDefault()
        window.open("https://github.com/Knzmck/password-generator.git")
    }

    function cockTailRepoOpen (e) {
        e.preventDefault()
        window.open("https://github.com/Knzmck/Drinking-At-Home.git")
    }

    function QuizRepoOpen (e) {
        e.preventDefault()
        window.open("https://github.com/Knzmck/project2")
    }

    weatherBtn.addEventListener('click', weatherF);
    passBtn.addEventListener('click', passF);
    cocktailBtn.addEventListener('click', drinkingF);
    quizBtn.addEventListener('click', quizF);
    weatherRepoBtn.addEventListener('click', weatherRepoOpen);
    PWRepoBtn.addEventListener('click', PWRepoOpen);
    cocktailRepoBtn.addEventListener('click', cockTailRepoOpen);
    quizRepoBtn.addEventListener('click', QuizRepoOpen);

    // Facebook and Linkedin Buttons
    var linkedinBtn = document.getElementById("linkedin");
    var fbBtn = document.getElementById("facebook");
    var githubBtn = document.getElementById("github");

    function linkedinBtnF(e) {
        e.preventDefault()
        window.open("www.linkedin.com/in/mackenzie-schutz")
    }

    function fbBtnF(e) {
        e.preventDefault()
        window.open("https://www.facebook.com/mackenzie.schutz")
    }
    function githubBtnF(e) {
        e.preventDefault() 
        window.open("https://github.com/Knzmck")
    }

    linkedinBtn.addEventListener('click', linkedinBtnF);
    fbBtn.addEventListener('click', fbBtnF);
    githubBtn.addEventListener('click', githubBtnF)


})
