// Build a custom header.

const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
    <style>
        nav {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0a0a23;
        }

        ul {
            padding: 0;
        }

        ul li {
            list-style: none;
            display: inline;
        }

        a {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
        }

        a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
        }
    </style>
    <div class="nav-bar" id="topnav">
        <img id="quill-pen" src="/assets/images/joshua-nolan-logo.png" alt="A quill pen in an ink well">
        <a href="about/index.html" style="font-family: monospace; font-size: large;">Joshua Nolan</a>
        <a href="index.html" class="active-page">Work</a>
        <a href="./hobbies/index.html">Hobbies</a>
        <a href="./about/index.html">About</a>
        <a href="contact/index.html">Contact</a>
        <a href="javascript:void(0);" class="icon" onclick="menuOverlay()">Menu</a>
    </div>
    <div id="menu-overlay">
        <a href="index.html" class="active-page">Work</a>
        <a href="./hobbies/index.html">Hobbies</a>
        <a href="./about/index.html">About</a>
        <a href="contact/index.html">Contact</a>
        <span class="close-button" onclick="closeMenuOverlay()">&times;</span>
    </div>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define("header-component", Header);