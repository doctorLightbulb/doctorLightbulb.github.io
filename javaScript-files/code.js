function menu() {
    var x = document.getElementById("topnav");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

var popUpScreen = document.getElementsByClassName("pop-up-screen")
var privacyButton = document.getElementById("privacy")

privacyButton.onclick = function () {
    if (privacyButton === ispressed()) {
        popUpScreen.style.display = "block";

    }
}

var span = document.getElementById("close-button")[0];

span.onclick = function () {
    popUpScreen.style.display = "none";
}