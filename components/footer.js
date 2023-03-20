footer.attachShadow({ mode: "open" });
footer.shadowRoot.innerHTML = `
    <style>
    #footer-container a {
        color: black;
        transition: 0.5s ease-in-out;
    }
    
    #footer-container a:hover {
        color: yellow;
        cursor: pointer;
    }

    #footer-container {
        text-align: center;
        width: 100%;
        color: black;
        height: fit-content;
        background-color: rgb(133, 153, 179);
        border-top: solid 4px white;
        box-shadow: 0px -0px 4px black;
    }

    .tooltip {
        position: relative;
        display: inline-block;
    }
    
    .tooltip .tooltiptext {
        opacity: 0;
        height: 0;
        transition: 0.5s;
        width: 120px;
        background-color: rgb(144, 161, 184);
        color: whitesmoke;
        text-align: center;
        padding: 5px 0;
        left: 50%;
        bottom: 100%;
        margin-left: -60px;
        border-radius: 10px;
        position: absolute;
        z-index: 2;
    }
    
    .tooltip:hover .tooltiptext {
        opacity: 100%;
        height: 20%;
    }
    
    .tooltip-below {
        position: relative;
        display: inline-block;
    }
    
    .tooltip-below .tooltiptext-below {
        opacity: 0;
        transition: 0.5s;
        width: 200px;
        background-color: rgb(144, 161, 184);
        color: whitesmoke;
        text-align: center;
        padding: 5px 0;
        left: 50%;
        top: 100%;
        margin-left: -100px;
        border-radius: 10px;
        position: absolute;
        z-index: 1;
    }
    
    .tooltip-below:hover .tooltiptext-below {
        opacity: 100%;
    }
    
    .tooltip-right {
        position: relative;
        display: inline-block;
    }
    
    .tooltiptext-right {
        background-image: linear-gradient(to left, rgba(95, 95, 146, 0), rgb(95, 95, 146));
        visibility: hidden;
        text-overflow: clip;
        ;
        line-height: 2em;
        width: 0px;
        text-align: center;
        border-radius: 10%;
        padding: 5px 0;
        opacity: 0;
    
        /* Position the tooltip */
        position: absolute;
        z-index: 0;
        top: -0px;
        right: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    
        transition: 0.5s;
    }
    
    .tooltip-right:hover .tooltiptext-right {
        visibility: visible;
        opacity: 100%;
        width: 120px;
        top: -70px;
    }
    
    .tooltip-left {
        position: relative;
        display: inline-block;
    }
    
    .tooltip-left .tooltiptext-left {
        visibility: hidden;
        width: 120px;
        line-height: 2em;
        background-image: linear-gradient(to right, rgba(95, 95, 146, 0), rgb(95, 95, 146));
        text-align: center;
        border-radius: 10%;
        padding: 5px 0;
    
        /* Position the tooltip */
        position: absolute;
        z-index: 2;
        top: -60px;
        right: 50%;
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    }
    
    .tooltip-left:hover .tooltiptext-left {
        visibility: visible;
    }

    #quill-pen {
        display: block;
        width: 15%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        background-color: rgb(255, 255, 224);
        border: solid 4px rgb(61, 71, 85);
    }
    /*
    #quill-pen {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 15%;
        background-color: rgb(255, 255, 224);
        border-radius: 50%;
        box-shadow: 0px 2px 4px black;
        transition: 0.5s;
    }
    
    #quill-pen:hover {
        opacity: 0.7;
        transform: scale(1.05);
    } */

    #inner-footer {
        margin-left: auto;
        margin-right: auto;
        padding: 5px;
        text-align: center;
        max-width: 100%;
        color: whitesmoke;
    }

    .centered-list a {
        display: inline;
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
    }

    #cookies-screen,
    #privacy-screen {
        position: fixed;
        z-index: 11;
        height: 0%;
        top: 50%;
        opacity: 0%;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        overflow-y: hidden;
        background-color: #b0c4de;
        transition: 0.5s;
    }

    #cookies-screen .pop-up-screen-caption,
    #privacy-screen .pop-up-screen-caption {
        font-size: x-large;
        margin-top: 10%;
        display: block;
        max-width: 100%;
        text-align: center;
        color: white;
        padding: 10% 10%;
        animation-name: caption-zoom-in;
        animation-duration: 0.25s;
    }

    #cookies-screen #close-cookies,
    #privacy-screen #close-privacy {
        position: absolute;
        top: 15px;
        right: 35px;
        color: rgb(95, 95, 146);
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    #cookies-screen #close-cookies:hover,
    #privacy-screen #close-privacy:hover {
        opacity: 0.9;
        color: whitesmoke;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {

        .tooltip-below .tooltiptext-below {
            margin-left: -150px;
        }

        .tooltip .tooltiptext {
            line-height: 0.75em;
        }

        #quill-pen {
            width: 20%;
        }

        .centered-list {
            display: inline;
            width: 100%;
            padding-left: 5%;
            padding-right: 5%;
            padding-top: 5%;
        }

        #cookies-screen,
        #privacy-screen {
            width: 100%;
            left: 0;
            top: 0;
        }

        #cookies-screen .pop-up-screen-caption,
        #privacy-screen .pop-up-screen-caption {
            margin-top: 25%;
        }
    }   

    @media only screen and (min-width: 700px) {
        #quill-pen {
            width: 18%;
        }

        
    }

    @media only screen and (min-width: 1000px) {
        #quill-pen {
            width: 10%;
        }   
    }
    </style>
    <div id="footer-container">
        <br>
        <div class="tooltip">
            <span class="tooltiptext">Return to top.</span>
            <a href="#changing-display">
                <img id="quill-pen" src="/assets/images/site-logo.png" alt="The initials of the author - J. N.">
            </a>
        </div>
        <br>
        <div id="inner-footer">
            <div class="centered-list">
                <a id="cookies">Cookies</a>
                <a id="privacy">Privacy</a>
            </div>
        </div>
        <div id="cookies-screen">
            <span id="close-cookies"">&times;</span>
            <div class="pop-up-screen-caption">
                Good news! This site has no cookies as yet! When it
                does, the option you selected will take you to a comprehensive
                description of what information is stored for statistical and
                operational purposes.
            </div>
        </div>
        <div id="privacy-screen">
            <span id="close-privacy">&times;</span>
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

var openCookies = footer.shadowRoot.getElementById("cookies");
openCookies.addEventListener("click", openCookiesScreen);

var closeCookies = footer.shadowRoot.getElementById("close-cookies");
closeCookies.addEventListener("click", closeCookiesScreen);

var cookiesScreen = footer.shadowRoot.getElementById("cookies-screen");

function openCookiesScreen() {
    var y = cookiesScreen;
    y.style.height = "100%";
    y.style.top = "0%";
    y.style.opacity = "100%";
};

function closeCookiesScreen() {
    var y = cookiesScreen;
    y.style.height = "0%";
    y.style.top = "50%";
    y.style.opacity = "0%";
};

var openPrivacy = footer.shadowRoot.getElementById("privacy");
openPrivacy.addEventListener("click", openPrivacyScreen);

var closePrivacy = footer.shadowRoot.getElementById("close-privacy");
closePrivacy.addEventListener("click", closePrivacyScreen);

var privacyScreen = footer.shadowRoot.getElementById("privacy-screen");

function openPrivacyScreen() {
    var y = privacyScreen;
    y.style.height = "100%";
    y.style.top = "0%";
    y.style.opacity = "100%";
};

function closePrivacyScreen() {
    var y = privacyScreen;
    y.style.height = "0%";
    y.style.top = "50%";
    y.style.opacity = "0%";
};