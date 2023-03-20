// header.js

var fullURL = window.location.pathname.split(/[\s/]+/); // Load the pathname
var relativeURL = fullURL.slice(-2).join("/");
console.log(relativeURL); //  Present for testing.

if (relativeURL === "hobbies/index.html") {
    workIsActivePage = "";
    hobbiesIsActivePage = 'class="active-page"';
    aboutIsActivePage = "";
    contactIsActivePage = "";
} else if (relativeURL === "about/index.html") {
    workIsActivePage = "";
    hobbiesIsActivePage = "";
    aboutIsActivePage = 'class="active-page"';
    contactIsActivePage = "";
} else if (relativeURL === "contact/index.html") {
    workIsActivePage = "";
    hobbiesIsActivePage = "";
    aboutIsActivePage = "";
    contactIsActivePage = 'class="active-page"';
} else {
    workIsActivePage = 'class="active-page"';
    hobbiesIsActivePage = "";
    aboutIsActivePage = "";
    contactIsActivePage = "";
}

// Define the header CSS/HTML:
nav.attachShadow({ mode: "open" });
nav.shadowRoot.innerHTML = `
    <style>
        #nav {
            width: 100%;
            z-index: 10;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #b0c4de;
            border-bottom: solid 4px;
            border-color: white;
            font-weight: 700;
            font-family: serif;
            box-shadow: 0px 2px 4px black;
            animation-name: menuBar;
            animation-duration: 5s;
        }

        .sticky {
            position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
        }

        a {
            color: black;
            margin: 0 25px;
            text-decoration: none;
            transition: 0.5s;
            position: relative; /* <- This code makes the three center links work. */
        }

        a:hover {
            color: yellow;
        }

        #nav a#icon {
            display: none;
            transition: 0.5s;
        }

        #logo {
            position: absolute;
            left: 0px;
            width: 35px;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 2px;
            margin-bottom: 2px;
            transition: 1s;
            display: block;
            background-color: lightyellow;
            border-radius: 50%;
            box-shadow: 0px 2px 4px black;
        }

        #logo:hover {
            opacity: 0.7;
            cursor: pointer;
        }

        #contact {
            position: absolute;
            right: 0px;
        }

        ul {
            padding: 0;
        }

        ul li {
            list-style: none;
            display: inline;
        }

        #menu-overlay {
            position: fixed;
            opacity: 0%;
            z-index: 12;
            left: 0;
            height: 0%;
            top: 50%;
            width: 100%;
            overflow-y: hidden;
            background-color: #b0c4de;
            transition: 0.5s;
        }
        #nav a.active-page,
        #menu-overlay a.active-page {
            background-color: white;
            padding: 8px 18px;
            box-shadow: 0px 2px 4px black;
        }

        #menu-overlay a {
            padding: 2% 0;
            font-size: x-large;
            text-align: center;
            color: black;
            top: 35%;
            position: relative;
            display: block;
            transition: 0.5s ease-in-out;

        }

        #menu-overlay a:hover {
            color: yellow;
        }

        #menu-overlay #close-menu {
            position: absolute;
            top: 15px;
            right: 35px;
            color: rgb(95, 95, 146);
            font-size: 40px;
            font-weight: bold;
            transition: 0.3s;
        }

        #menu-overlay #close-menu:hover {
            opacity: 0.9;
            color: whitesmoke;
            text-decoration: none;
            cursor: pointer;
        }

        @media only screen and (max-width: 700px) {
            #nav a:not(:nth-child(2)) {
                display: none;
            }

            #nav a#icon {    
                display: block;
                position: absolute;
                right: 0px;
            }
        }
        @media only screen and (min-width: 700px) {
            
        }
        @media only screen and (min-width: 1000px) {
            
        }
    </style>
    <header>
        <nav id="nav">
            <img id="logo" src="/assets/images/site-logo.png" alt="The initials of the author - J. N.">
            <ul>
                <li><a href="/index.html" ${workIsActivePage}>Work</a></li>
                <li><a href="/pages/hobbies/index.html" ${hobbiesIsActivePage}>Hobbies</a></li>
                <li><a href="/pages/about/index.html" ${aboutIsActivePage}>About</a><li>
            </ul> 
            <a href="/pages/contact/index.html" id="contact" ${contactIsActivePage}>Contact</a>
            <a href="javascript:void(0);" id="icon">Menu</a> 
        </nav>
    </header>
    <div id="menu-overlay">
        <a href="/index.html" ${workIsActivePage}>Work</a>
        <a href="/pages/hobbies/index.html" ${hobbiesIsActivePage}>Hobbies</a>
        <a href="/pages/about/index.html" ${aboutIsActivePage}>About</a>
        <a href="/pages/contact/index.html" ${contactIsActivePage}>Contact</a>
        <span id="close-menu">&times;</span>
    </div>
`;

var openButton = nav.shadowRoot.getElementById("icon");
openButton.addEventListener("click", openMenu);

var closeButton = nav.shadowRoot.getElementById("close-menu");
closeButton.addEventListener("click", closeMenu);

var mobileMenu = nav.shadowRoot.getElementById("menu-overlay");

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

// Enable the sticky menu on scroll.
window.onscroll = function () { stickMenu() };
var navBar = nav.shadowRoot.getElementById("nav");
var externalNav = document.getElementById("nav");
var sticky = navBar.offsetTop;

function stickMenu() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky");
        externalNav.classList.add(sticky);
    } else {
        navBar.classList.remove("sticky");
        externalNav.classList.remove("sticky");
    }
};