var popUpScreen = document.getElementsByClassName("pop-up-screen")
var privacyButton = document.getElementById("privacy")

privacyButton = function () {
    popUpScreen.style.display = "block";
}

var span = document.getElementsByClassName("close-button")[0];
span = function () {
    popUpScreen.style.display = "none";
}