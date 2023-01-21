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

const projectsList = [{
    title: "Project A",
    overlayText: "View the contents of Project A.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "./projects/project-a.html",
},
{
    title: "Project B",
    overlayText: "View the contents of Project B.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "./projects/project-b.html",
},
{
    title: "Project C",
    overlayText: "View the contents of Project C.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "./projects/project-c.html",
},
{
    title: "Project D",
    overlayText: "View the contents of Project D.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "./projects/project-d.html",
}];

const container = document.getElementById("row");

projectsList.forEach((item, itemID) => {
    // Create card element:
    const card = document.createElement("div");
    card.classList = "card-body";

    // Define card content:
    const content = `
        <div class="quad-column">
            <div class="card-body" data-parent="#row">
                <a href="${item.linkURL}">
                    <div class="card-overlay">
                        <p class="card-overlay-text">${item.overlayText}</p>
                    </div>
                </a>
                <img class="centered" src="${item.cardImage}" alt="${item.imageAltText}">
                <h2>${item.title}</h2>
            </div>
        </div>
    `;
    // Append each created element to the container:
    container.innerHTML += content;
})