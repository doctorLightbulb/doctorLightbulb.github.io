// root/components/header3.js

var fullURL = window.location.pathname.split(/[\s/]+/); // Load the pathname
var relativeURL = fullURL.slice(-2).join("/"); // Use last two URL names
// console.log(relativeURL); //  Present for testing.

if (relativeURL === "hobbies/index.html" || relativeURL === "books/index.html" || relativeURL === "alfred-cutler-the-backwoods-boy/index.html" || relativeURL === "sneak-peeks/index.html" || relativeURL === "coding/index.html") {
    workIsActivePage = "inactive-page";
    hobbiesIsActivePage = "active-page";
    aboutIsActivePage = "inactive-page";
    contactIsActivePage = "inactive-page";
} else if (relativeURL === "about/index.html") {
    workIsActivePage = "inactive-page";
    hobbiesIsActivePage = "inactive-page";
    aboutIsActivePage = "active-page";
    contactIsActivePage = "inactive-page";
} else if (relativeURL === "contact/index.html") {
    workIsActivePage = "inactive-page";
    hobbiesIsActivePage = "inactive-page";
    aboutIsActivePage = "inactive-page";
    contactIsActivePage = "active-page";
} else {
    workIsActivePage = "active-page";
    hobbiesIsActivePage = "inactive-page";
    aboutIsActivePage = "inactive-page";
    contactIsActivePage = "inactive-page";
}

const nav = document.getElementById("nav");
const navContent = `
    <nav id="nav">
        <a href="/index.html" class="nav-left">
            <img id="logo" src="/assets/images/site-logo.png" alt="Test logo">
        </a>
        <a href="/index.html" class="middle-item ${workIsActivePage}">Work</a>
        <a href="/pages/hobbies/index.html" class="middle-item ${hobbiesIsActivePage}">Hobbies</a>
        <a href="/pages/about/index.html" class="middle-item ${aboutIsActivePage}">About</a>
        <a href="/pages/contact/index.html" class="nav-right contact ${contactIsActivePage}">Contact</a>
        <a href="javascript:void(0);" id="menu-icon">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </a> 
    </nav>
`;
nav.innerHTML = navContent;

const navOverlay = document.getElementById("nav-overlay");
const navOverlayContent = `
    <div id="menu-overlay">
        <a href="/index.html" class="${workIsActivePage}">Work</a>
        <a href="/pages/hobbies/index.html" class="${hobbiesIsActivePage}">Hobbies</a>
        <a href="/pages/about/index.html" class="${aboutIsActivePage}">About</a>
        <a href="/pages/contact/index.html" class="${contactIsActivePage}">Contact</a>
        <span id="close-menu">&times;</span>
    </div>
`;
navOverlay.innerHTML = navOverlayContent;

var openButton = document.getElementById("menu-icon");
openButton.addEventListener("click", openMenu);

var closeButton = document.getElementById("close-menu");
closeButton.addEventListener("click", closeMenu);

var mobileMenu = document.getElementById("menu-overlay");

function openMenu() {
    var y = mobileMenu;
    y.style.height = "100%";
    y.style.top = "0%";
    y.style.opacity = "100%";
}

function closeMenu() {
    var y = mobileMenu;
    y.style.height = "0%";
    y.style.top = "50%";
    y.style.opacity = "0%";
}

// Allow the mobile menu bars to change colors in sync with
// hovering the mouse over the menu-icon id.
var menuIcon = document.getElementById("menu-icon");
var bar = document.getElementsByClassName("bar");

menuIcon.addEventListener("mouseenter", changeBackgroundColor);
menuIcon.addEventListener("mouseleave", revertBackgroundColor);

function changeBackgroundColor() {
    for (var i = 0; i < bar.length; i++) {
        bar.item(i).style.backgroundColor = "var(--text-highlight-color)";
    }
}

function revertBackgroundColor() {
    for (var i = 0; i < bar.length; i++) {
        bar.item(i).style.backgroundColor = "var(--text-color)";
    }
}