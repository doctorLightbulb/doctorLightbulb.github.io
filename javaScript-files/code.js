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
}

// function openOverlay(IDTag, height = "0%", top = "50%", opacity = "0%") {
//     // This function opens the overlay by default 
//     // but can also be used to close an overlay.
//     var y = document.getElementById(IDTag);
//     y.style.height = "0%";
//     y.style.top = "50%";
//     y.style.opacity = "0%";
// };

// function menuOverlay() {
//     openOverlay("menu-overlay")
// };

function closeMenuOverlay() {
    var y = document.getElementById("menu-overlay");
    y.style.height = "0%";
    y.style.top = "50%";
    y.style.opacity = "0%";
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

// Landing page
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

// Hobbies page
const hobbiesList = [{
    title: "Books",
    overlayText: "View the books I have written so far.",
    cardImage: "../Images/open-book.PNG",
    imageAltText: "A cartoon book.",
    linkURL: "books/index.html",
},
{
    title: "Coding",
    overlayText: "View a collection of other projects.",
    cardImage: "../Images/hammer-and-wrench.png",
    imageAltText: "A cartoon crossed hammer and wrench.",
    linkURL: "coding/index.html",
}];

// Books page
const booksList = [{
    cardImage: "../../Images/alfred-cutler-the-backwoods-boy.jpg",
    imageAltText: "Alfred Cutler seated beside Sammy, the family sheep dog.",
    linkURL: "../books/alfred-cutler-the-backwoods-boy/index.html",
},
{
    cardImage: "../../Images/sneak-peeks.jpg",
    imageAltText: "A large white question mark against a blue background.",
    linkURL: "../books/sneak-peeks/index.html",
}];

// Coding page
const codingList = [{
    title: "Tour My Repositories",
    overlayText: "Follow the yellow brick road... <em>to GitHub!</em>",
    cardImage: "../../Images/doctorLightbulb.JPG",
    imageAltText: "A portrait of Doctor Ignatius Quincy Lightbulb",
    linkURL: "https://github.com/doctorLightbulb",
},
{
    title: "Accomplishments",
    overlayText: "View my profile and certificates on LinkedIn.",
    cardImage: "../../Images/doctorLightbulb.JPG",
    imageAltText: "A portrait of Doctor Ignatius Quincy Lightbulb",
    linkURL: "https://www.linkedin.com/in/joshua-nolan-38a7a2203?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bq9r%2FrRPoTbivCxCG9SwxDw%3D%3D",
},
{
    title: "Math Hopper",
    overlayText: "View the <strong>Game of Math</strong>—a work in progress.",
    cardImage: "../../Images/doctorLightbulb.JPG",
    imageAltText: "A portrait of Doctor Ignatius Quincy Lightbulb",
    linkURL: "https://www.khanacademy.org/computer-programming/math-hopper-scratch-pad/4803421651288064",
},
{
    title: "Around the Milky Way and Back",
    overlayText: "View the toy website on Khan Academy.",
    cardImage: "../../Images/doctorLightbulb.JPG",
    imageAltText: "A picture of the main screen of the website project on Khan Academy Around the Milky Way and Back.",
    linkURL: "https://www.khanacademy.org/computer-programming/around-the-milky-way-and-back/6603926433447936",
}];


// Control which cards to show depending on which page is loaded.
var pathname = window.location.pathname; // Load the pathname
var pieces = pathname.split(/[\s/]+/)
// var lastTwo = pieces.slice(-2);
var last = pieces[pieces.length - 1]
var secondToLast = pieces[pieces.length - 2]
var local_pathname = secondToLast + "/" + last

const container = document.getElementById("row");

if (local_pathname === "doctorLightbulb.github.io/index.html") {
    projectsList.forEach((item) => {
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

} else if (local_pathname === "hobbies/index.html") {
    hobbiesList.forEach((item) => {
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
} else if (local_pathname === "about/index.html") {
    hobbiesList.forEach((item) => {
        // Create card element:
        const card = document.createElement("div");
        card.classList = "card-body";

        // Define card content:
        const content = `
        <div class="column">
            <div class="moved-right">
                <div class="heading">
                    <h1 class="about-heading">HELLO!</h1>
                    <h3 class="signature">I am Joshua Nolan</h3>
                    <h5 class="caption-2">USER EXPERIENCE DESIGNER</h5>
                </div>
                <img id="author-portrait" src="../Images/author-portrait.jpg">
                <h2 class="about-heading-2">CONTACT</h2>
                <a href="mailto:contactjoshuanolan@icloud.com" class="about-paragraph">Email</a>
                <a href="https://www.linkedin.com/in/joshua-nolan-38a7a2203?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE%2FcpA92ZQQ673MGP00cflQ%3D%3D"
                    class="about-paragraph">LinkedIn</a>
            </div>
        </div>
        <div class="column">
            <div class="moved-left">
                <br>
                <br>
                <br>
                <br>
                <br>
                <p class="about-paragraph">Joshua is known for his dedication and
                    creativity. He believes a life should be meaningful, motivated by God,
                    family and country
                </p>
                <h2 class="fancy-heading">Skills</h2>
                <p class="about-paragraph">
                    Writing, graphic design, Microsoft Word, Visual Studio Code,
                    Keynote, Internet research.
                </p>
                <h2 class="fancy-heading">Interests</h2>
                <p class="about-paragraph">
                    Designing, story-writing, learning, creating, coding and poetry.
                </p>
                <h2 class="fancy-heading">Goals</h2>
                <p class="about-paragraph">
                    To be a professional author, user experience
                    designer, coder and poet.
                </p>
            </div>
        </div>
        `;
        // Append each created element to the container:
        container.innerHTML = content;
    })
} else if (local_pathname === "books/index.html") {
    booksList.forEach((item) => {
        // Create card element:
        const card = document.createElement("div");
        card.classList = "card-body";

        // Define card content:
        const content = `
        <div class="column">
            <div class="card-body">
                <a href=${item.linkURL}>
                    <img class="centered" src=${item.cardImage}
                        alt=${item.imageAltText}>
                </a>
                <br>
            </div>
        </div>
        `;
        // Append each created element to the container:
        container.innerHTML += content;
    })
} else if (local_pathname === "coding/index.html") {
    codingList.forEach((item) => {
        // Create card element:
        const card = document.createElement("div");
        card.classList = "card-body";

        // Define card content:
        const content = `
            <div class="quad-column">
                <div class="card-body">
                    <a href="${item.linkURL}" target="_blank">
                        <div class="card-overlay">
                            <p class="card-overlay-text">${item.overlayText}</p>
                        </div>
                    </a>
                    <img class="centered" src="${item.cardImage}"
                        alt="${item.imageAltText}" style="border-radius: 50%;">
                    <h5>${item.title}</h5>
                </div>
            </div>
        `;
        // Append each created element to the container:
        container.innerHTML += content;
    })
}



const footerContainer = document.getElementById("footer-container")

footerist.forEach((item) => {
    // Create card element:
    const card = document.createElement("div");
    card.classList = "card-body";

    // Define card content:
    const content = `
        <br>
        <div class="tooltip">
            <span class="tooltiptext">Return to top.</span>
            <a href="#">
                <img id="footer-quill-pen" src="../../Images/joshua-nolan-logo.png" alt="">
            </a>
        </div>
        <br>
        <div id="inner-footer">
            <div class="centered-list">
                <a id="cookies" onclick="cookiesPopUp()">Cookies</a>
                <a id="privacy" onclick="privacyPopUp()">Privacy</a>
            </div>
        </div>
        <div id="cookies-screen">
            <span class="close-button" onclick="closeCookiesPopUp()">&times;</span>
            <div class="pop-up-screen-caption">
                Good news! This site has no cookies as yet! When it
                does, the option you selected will take you to a comprehensive
                description of what information is stored for statistical and
                operational purposes.
            </div>
        </div>
        <div id="privacy-screen">
            <span class="close-button" onclick="closePrivacyPopUp()">&times;</span>
            <div class="pop-up-screen-caption">
                Your privacy is very important to us! Currently no data about you
                of any kind, not even your browser or machine, is stored by this
                website, not even for performance reasons.
            </div>
        </div>
        <hr>
        <h5>© 2021 Joshua Nolan. All Rights Reserved.</h5>
        <br>
    </div>
    `;
    // Append each created element to the container:
    footerContainer.innerHTML += content;
})