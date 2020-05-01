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