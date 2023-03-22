// cards.js

// Landing page
const menuList = [{
    title: "Articles",
    overlayText: "Explore the articles I have written... so far.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "/pages/articles/index.html",
},
{
    title: "Projects",
    overlayText: "Explore the projects I have — and am — still creating.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "/pages/projects/index.html",
},
{
    title: "Badges",
    overlayText: "View my certificates of completion and other achievements.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "/pages/achievements/index.html",
}];

// Achievements page
const achievementsList = [{
    title: "Fundamentals of Accounting",
    type: "Specialization",
    summary: "Summary of the learning objectives and what I did. Fit it all onto three lines so that the cards can all occupy the same space.",
    grade: "100%",
    banner: "first-place",
    cardImage: "/assets/images/cards/blue-ribbon.svg",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    institution: "GIES University",
    host: "Coursera",
    linkURL: "./projects/project-a.html",
},
{
    title: "Bookkeeping",
    type: "Certificate Program",
    summary: "Summary of the learning objectives and what I did. Fit it all onto three lines so that the cards can all occupy the same space.",
    grade: "100%",
    banner: "first-place",
    cardImage: "/assets/images/cards/blue-ribbon.svg",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    institution: "GIES University",
    host: "Coursera",
    linkURL: "./projects/project-a.html",
},
{
    title: "Creative Writing",
    type: "Specialization",
    summary: "Summary of the learning objectives and what I did. Fit it all onto three lines so that the cards can all occupy the same space.",
    grade: "75%",
    banner: "third-place",
    cardImage: "/assets/images/cards/blue-ribbon.svg",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    institution: "GIES University",
    host: "Coursera",
    linkURL: "./projects/project-a.html",
},
{
    title: "Fundamentals of Accounting",
    type: "Specialization",
    summary: "Summary of the learning objectives and what I did. Fit it all onto three lines so that the cards can all occupy the same space.",
    grade: "90%",
    banner: "second-place",
    cardImage: "/assets/images/cards/red-ribbon.svg",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    institution: "GIES University",
    host: "Coursera",
    linkURL: "./projects/project-a.html",
}];

// Projects page
const projectsList = [{
    title: "Project A",
    overlayText: "View the contents of Project A.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "/pages/projects/project-a.html",
},
{
    title: "Project B",
    overlayText: "View the contents of Project B.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "/pages/projects/project-b.html",
},
{
    title: "Project C",
    overlayText: "View the contents of Project C.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "/pages/projects/project-c.html",
},
{
    title: "Project D",
    overlayText: "View the contents of Project D.",
    cardImage: "https://www.kasandbox.org/programming-images/landscapes/lake.png",
    imageAltText: "A beautiful landscape from Khan Academy's sandbox.",
    linkURL: "/pages/projects/project-d.html",
}];

// Hobbies page
const hobbiesList = [{
    title: "Books",
    overlayText: "View the books I have written so far.",
    cardImage: "/assets/images/open-book.PNG",
    imageAltText: "A cartoon book.",
    linkURL: "books/index.html",
},
{
    title: "Coding",
    overlayText: "View a collection of other projects.",
    cardImage: "/assets/images/hammer-and-wrench.png",
    imageAltText: "A cartoon crossed hammer and wrench.",
    linkURL: "coding/index.html",
}];

// Books page
const booksList = [{
    cardImage: "/assets/images/alfred-cutler-the-backwoods-boy.jpg",
    imageAltText: "Alfred Cutler seated beside Sammy, the family sheep dog.",
    linkURL: "../books/alfred-cutler-the-backwoods-boy/index.html",
},
{
    cardImage: "/assets/images/sneak-peeks.jpg",
    imageAltText: "A large white question mark against a blue background.",
    linkURL: "../books/sneak-peeks/index.html",
}];

// Coding page
const codingList = [{
    title: "Tour My Repositories",
    overlayText: "Follow the yellow brick road... <em>to GitHub!</em>",
    cardImage: "/assets/images/doctorLightbulb.JPG",
    imageAltText: "A portrait of Doctor Ignatius Quincy Lightbulb",
    linkURL: "https://github.com/doctorLightbulb",
},
{
    title: "Accomplishments",
    overlayText: "View my profile and certificates on LinkedIn.",
    cardImage: "/assets/images/doctorLightbulb.JPG",
    imageAltText: "A portrait of Doctor Ignatius Quincy Lightbulb",
    linkURL: "https://www.linkedin.com/in/joshua-nolan-38a7a2203?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bq9r%2FrRPoTbivCxCG9SwxDw%3D%3D",
},
{
    title: "Math Hopper",
    overlayText: "View the <strong>Game of Math</strong>—a work in progress.",
    cardImage: "/assets/images/doctorLightbulb.JPG",
    imageAltText: "A portrait of Doctor Ignatius Quincy Lightbulb",
    linkURL: "https://www.khanacademy.org/computer-programming/math-hopper-scratch-pad/4803421651288064",
},
{
    title: "Around the Milky Way and Back",
    overlayText: "View the toy website on Khan Academy.",
    cardImage: "/assets/images/doctorLightbulb.JPG",
    imageAltText: "A picture of the main screen of the website project on Khan Academy Around the Milky Way and Back.",
    linkURL: "https://www.khanacademy.org/computer-programming/around-the-milky-way-and-back/6603926433447936",
}];


// Control which cards to show depending on which page is loaded.
var fullURL = window.location.pathname.split(/[\s/]+/); // Load the pathname
var localPathname = fullURL.slice(-2).join("/");
console.log(localPathname); //  Present for testing.

const container = document.getElementById("row");

if (localPathname === "/index.html") {
    var listedItems = menuList;
} else if (localPathname === "hobbies/index.html") {
    var listedItems = hobbiesList;
} else if (localPathname === "coding/index.html") {
    var listedItems = codingList;
} else if (localPathname === "projects/index.html") {
    var listedItems = projectsList;
}

if (localPathname === "/index.html" ||
    localPathname === "projects/index.html" ||
    localPathname === "hobbies/index.html" ||
    localPathname === "coding/index.html") {

    listedItems.forEach((item) => {
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
    });

} else if (localPathname === "books/index.html") {
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
    });

} else if (localPathname === "achievements/index.html") {
    achievementsList.forEach((item) => {
        // Create card element:
        const card = document.createElement("div");
        card.classList = "card-body";

        // Define card content:
        const content = `
                <div class="quad-column">
                    <div class="badge-card-body" data-parent="#row">
                        <div class="card-header">
                            <h3>${item.title}</h3>
                            <h4><em>${item.type}</em></h4>
                        </div>
                        <div class="card-status">
                            <div class="${item.banner}">
                                <img class="ribbon" src="${item.cardImage}" alt="${item.imageAltText}">
                            </div>
                        </div>
                        <p class="grade">Grade: ${item.grade}</p>
                        <div class="card-body2">
                            <a href="${item.linkURL}">
                                <div class="card-overlay">
                                    <p class="card-overlay-text">Click for more details.</p>
                                </div>
                            </a>
                            <p>${item.summary}</p>
                        </div>
                        <div class="card-footer">
                            <p>Authorized by: ${item.institution}</p>
                            <p>Hosted by: ${item.host}</p>
                        </div>
                    </div>
                </div>
            `;
        // Append each created element to the container:
        container.innerHTML += content;
    });

} else if (localPathname === "about/index.html") {
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
                <img id="author-portrait" src="/assets/images/author-portrait.jpg" alt="Joshua Nolan smiling delightedly.">
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
    });
}

// Attempt to eleviate the sudden jump of the page when the navigation bar becomes fixed to the top of the page.
window.onscroll = function () { addSpace(); };
var externalNav = document.getElementById("nav");
var externalSticky = externalNav.offsetTop;
var textContainer = document.getElementById("text-container");
console.log(externalSticky);


function addSpace() {
    if (window.pageYOffset >= externalSticky) {
        textContainer.style.paddingTop = "120px";
    } else {
        textContainer.style.paddingTop = "0px";
    }
};
