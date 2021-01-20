var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex +=n)
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-holder");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slides[slideIndex-1].style.display = "block";
}

function toggleLanguageOptions() {
    var languages = document.getElementsByClassName("hidden-language");
    if (languages[0].style.display && languages[1].style.display === "none") {
        languages[0].style.display = "inline";
        languages[1].style.display = "inline";
    } else {
    languages[0].style.display = "none";
    languages[1].style.display = "none";
    }
}

function touchScreen() {
    if ("ontouchstart" in document.documentElement) {
        toggleLanguageOptions()
    }
} 
/*
function lang() {
    if (screen.width < 480) {
        document.getElementById('cir').innerText = "Ћир"
        document.getElementById('lat').innerText = "Lat"
        document.getElementById('eng').innerText = "Eng"
    } else {
        document.getElementById('cir').innerText = "Ћирилица"
        document.getElementById('lat').innerText = "Latinica"
        document.getElementById('eng').innerText = "English"
    }
}*/