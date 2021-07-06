// The menu functions.

function menu() {
    var x = document.getElementById("topnav");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

function menuOverlay() {
    var y = document.getElementById("menu-overlay");
    y.style.height = "100%";
    y.style.top = "0%";
    y.style.opacity = "100%";
    y.style.backgroundColor = "100%";
}

function closeMenuOverlay() {
    var y = document.getElementById("menu-overlay");
    y.style.height = "0%";
    y.style.top = "50%";
    y.style.opacity = "0%";
    y.style.backgroundColor = "0%";
}

// The footer functions.
function cookiesPopUp() {
    var y = document.getElementById("cookies-screen");
    y.style.height = "100%";
    y.style.top = "0%";
    y.style.opacity = "100%";
}

function closeCookiesPopUp() {
    var y = document.getElementById("cookies-screen");
    y.style.height = "0%";
    y.style.top = "50%";
    y.style.opacity = "0%";
}

function privacyPopUp() {
    var y = document.getElementById("privacy-screen");
    y.style.height = "100%";
    y.style.top = "0%";
    y.style.opacity = "100%";
}

function closePrivacyPopUp() {
    var y = document.getElementById("privacy-screen");
    y.style.height = "0%";
    y.style.top = "50%";
    y.style.opacity = "0%";
}