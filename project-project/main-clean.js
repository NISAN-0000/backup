const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");

// Settings toggle
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// Play/Pause audio
function playpause() {
    if (document.getElementById("switchforsound").checked) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Toggle visual mode (light/dark)
function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(el => {
        el.classList.toggle("invertapplied");
    });
}

// Hide preloader on page load
window.addEventListener("load", () => {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

// Mobile hamburger menu
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Hide mobile menu
function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Active tab highlighting on scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThistab");
        }
    });
});

// Scroll to top button
const mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = scrollFunction;

// Prevent right-click on images
document.addEventListener("contextmenu", (e) => {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
});

// Eye tracking for footer avatars
const pupils = document.getElementsByClassName("footer-pupil");
const pupilsArr = Array.from(pupils);
const pupilStartPoint = -10;
const pupilRangeX = 20;
const pupilRangeY = 15;
const mouseXStartPoint = 0;
const mouseXEndPoint = window.innerWidth;
const mouseYEndPoint = window.innerHeight;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;
let currentXPosition = 0;
let fracXValue = 0;
let currentYPosition = 0;
let fracYValue = 0;

const mouseMove = (e) => {
    fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;

    let x = pupilStartPoint + fracXValue * pupilRangeX;
    let y = pupilStartPoint + fracYValue * pupilRangeY;

    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
};

const windowResize = () => {
    mouseXRange = window.innerWidth - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// Developer credit
console.log("%c Designed and Developed by Nishan Bhattarai.", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");
