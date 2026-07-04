/*=========================================================
ST. JOSEPH SECONDARY SCHOOL NYAMITYOBORA
DEBATE CLUB WEBSITE

Main JavaScript File
Version 1.0

=========================================================*/


/*=========================================================
PRELOADER
=========================================================*/

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    preloader.style.visibility = "hidden";

    preloader.style.transition = "0.8s";

});


/*=========================================================
MOBILE NAVIGATION
=========================================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/*=========================================================
CLOSE MENU AFTER CLICKING A LINK
=========================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*=========================================================
STICKY HEADER EFFECT
=========================================================*/

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.1)";

    }

});


/*=========================================================
SCROLL TO TOP BUTTON
=========================================================*/

const scrollBtn = document.createElement("div");

scrollBtn.className = "scrollTop";

scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================================
REVEAL ON SCROLL
=========================================================*/

const reveals = document.querySelectorAll("section");

function revealSections() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            section.classList.add("active");

            section.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


/*=========================================================
ACTIVE NAVIGATION LINK
=========================================================*/

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});


/*=========================================================
CURRENT YEAR IN FOOTER
=========================================================*/

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${year} St. Joseph Secondary School Nyamityobora Debate Club. All Rights Reserved.`;

}


/*=========================================================
WELCOME MESSAGE
=========================================================*/

console.log("Welcome to the Official St. Joseph Secondary School Nyamityobora Debate Club Website!");
/*=========================================================
ANIMATED STATISTICS COUNTER
=========================================================*/

const counters = document.querySelectorAll(".stat-box h2");

const speed = 200;

function runCounters() {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / speed);

            if (count < target) {

                count += increment;

                counter.innerText = count + "+";

                setTimeout(updateCounter, 15);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

}

window.addEventListener("load", runCounters);


/*=========================================================
GALLERY LIGHTBOX
=========================================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("show");

        lightbox.innerHTML = `
            <img src="${image.src}" alt="">
        `;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


/*=========================================================
IMAGE HOVER EFFECT
=========================================================*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.03)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/*=========================================================
SMOOTH BUTTON ANIMATION
=========================================================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});


/*=========================================================
WELCOME POPUP
=========================================================*/

window.setTimeout(()=>{

alert("Welcome to the Official St. Joseph Secondary School Nyamityobora Debate Club Website!");

},1200);


/*=========================================================
KEYBOARD SHORTCUT
Press H to return Home
=========================================================*/

document.addEventListener("keydown",function(e){

if(e.key==="h" || e.key==="H"){

window.location.href="index.html";

}

});


/*=========================================================
COPY EMAIL TO CLIPBOARD
=========================================================*/

function copyEmail(){

navigator.clipboard.writeText("st.josephthejust@gmail.com");

alert("Email copied successfully!");

}


/*=========================================================
COPY PHONE NUMBER
=========================================================*/

function copyPhone(){

navigator.clipboard.writeText("0704050747");

alert("Phone number copied successfully!");

}


/*=========================================================
COPY WHATSAPP NUMBER
=========================================================*/

function copyWhatsApp(){

navigator.clipboard.writeText("0764578583");

alert("WhatsApp number copied successfully!");

}


/*=========================================================
RANDOM QUOTE OF THE DAY
=========================================================*/

const quotes=[

"Confidence begins when preparation ends.",

"Every great speaker was once afraid to speak.",

"Knowledge speaks, wisdom listens.",

"Debate sharpens the mind and strengthens character.",

"Without Jesus, What can the world give you?"

];

const quoteBox=document.querySelector(".quote blockquote");

if(quoteBox){

const random=Math.floor(Math.random()*quotes.length);

quoteBox.innerText=quotes[random];

}
/*=========================================================
DARK MODE TOGGLE
=========================================================*/

const darkToggle = document.createElement("button");

darkToggle.innerHTML = "🌙 Dark Mode";

darkToggle.style.position = "fixed";

darkToggle.style.top = "100px";

darkToggle.style.right = "20px";

darkToggle.style.padding = "10px 15px";

darkToggle.style.border = "none";

darkToggle.style.borderRadius = "20px";

darkToggle.style.cursor = "pointer";

darkToggle.style.zIndex = "9999";

document.body.appendChild(darkToggle);

darkToggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {

document.body.style.background = "#0b1220";

document.body.style.color = "white";

darkToggle.innerHTML = "☀ Light Mode";

} else {

document.body.style.background = "#f5f7fa";

document.body.style.color = "#333";

darkToggle.innerHTML = "🌙 Dark Mode";

}

});


/*=========================================================
LIVE CLOCK (HEADER SUPPORT)
=========================================================*/

function updateClock() {

const now = new Date();

const time = now.toLocaleTimeString();

const date = now.toLocaleDateString();

let clock = document.querySelector(".live-clock");

if (!clock) {

clock = document.createElement("div");

clock.className = "live-clock";

clock.style.position = "fixed";

clock.style.bottom = "90px";

clock.style.right = "20px";

clock.style.background = "#003366";

clock.style.color = "white";

clock.style.padding = "10px 15px";

clock.style.borderRadius = "10px";

clock.style.fontSize = "14px";

clock.style.zIndex = "9999";

document.body.appendChild(clock);

}

clock.innerHTML = `🕒 ${time}<br>📅 ${date}`;

}

setInterval(updateClock, 1000);

updateClock();


/*=========================================================
AUTO HIDE ALERTS (TOAST STYLE SIMULATION)
=========================================================*/

function showToast(message) {

const toast = document.createElement("div");

toast.innerText = message;

toast.style.position = "fixed";

toast.style.bottom = "20px";

toast.style.left = "50%";

toast.style.transform = "translateX(-50%)";

toast.style.background = "#003366";

toast.style.color = "white";

toast.style.padding = "15px 25px";

toast.style.borderRadius = "30px";

toast.style.zIndex = "99999";

toast.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

document.body.appendChild(toast);

setTimeout(() => {

toast.remove();

}, 3000);

}


/*=========================================================
REPLACE ALERTS WITH TOAST NOTIFICATIONS
=========================================================*/

window.alert = function (msg) {

showToast(msg);

};


/*=========================================================
SCROLL PROGRESS BAR
=========================================================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";

progressBar.style.top = "0";

progressBar.style.left = "0";

progressBar.style.height = "5px";

progressBar.style.background = "#FFD700";

progressBar.style.width = "0%";

progressBar.style.zIndex = "99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

const scrollTop = document.documentElement.scrollTop;

const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;

progressBar.style.width = progress + "%";

});


/*=========================================================
AUTO HIGHLIGHT ACTIVE SECTION
=========================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if (pageYOffset >= sectionTop - 150) {

current = section.getAttribute("class");

}

});

document.querySelectorAll(".nav-links a").forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href").includes(current)) {

link.classList.add("active");

}

});

});


/*=========================================================
FINAL CONSOLE MESSAGE
=========================================================*/

console.log("%c Debate Club Website Loaded Successfully 🚀",

"color:#FFD700; font-size:16px; font-weight:bold;");