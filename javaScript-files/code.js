var popUpScreen = document.getElementsByClassName("pop-up-screen")
var privacyButton = document.getElementById("privacy")

privacyButton.onclick = function () {
    if (privacyButton === ispressed()) {
        popUpScreen.style.display = "block";

    }
}

var span = document.getElementsByClassName("close-button")[0];
span.onclick = function () {
    popUpScreen.style.display = "none";
}