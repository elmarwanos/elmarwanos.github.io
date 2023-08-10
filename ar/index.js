// Declare Variables
var bkgBack;
var bkgFront;
var mainScreenElements;
var btns;
var competitionSection;
var differentSection;
var tryItSection;
var qualitySection;

window.onload = () => {
    // Initialize Variables
    bkgBack = document.querySelector("#bkg-back");
    bkgFront = document.querySelector("#bkg-front");
    mainScreenElements = document.querySelectorAll(".main-screen");
    btns = document.querySelectorAll(".buttons");
    competitionSection = document.querySelector("#competition-section");
    differentSection = document.querySelector("#different-section");
    tryItSection = document.querySelector("#try-it-section");
    qualitySection = document.querySelector("#quality-section");

    //Background Videos Sync
    bkgBack.onended = () => {
        bkgBack.style.display = "none";
        bkgFront.style.display = "block";
        bkgFront.play();
    }
}

function buttonClick(btnNum) {
    //Hide other elements
    mainScreenElements.forEach(outOfZoom => {
        outOfZoom.style.opacity = 0;
    })

    switch (btnNum) {
        case 1: //Competition Section
            // Scale Video
            bkgBack.style.filter = "blur(3px) brightness(0.6)";
            bkgBack.style.transformOrigin = "0% 30%";
            bkgBack.style.transform = "scale(1.8)";
            bkgFront.style.filter = "blur(3px) brightness(0.6)";
            bkgFront.style.transformOrigin = "0% 30%";
            bkgFront.style.transform = "scale(1.8)";
            // Hide Buttons
            btns[1].style.opacity = 0;
            btns[2].style.opacity = 0;
            btns[3].style.opacity = 0;
            // Move Selected Button
            btns[0].style.transform = "translate(calc(10.5vw + 25%), -10.5vh)";
            btns[0].style.scale = "2";
            btns[0].style.backgroundPosition = "left";
            btns[0].style.borderBottom = "none";
            // Display Section
            competitionSection.style.display = "block";
            break;

        case 2: //Different Section
            // Scale Video
            bkgBack.style.filter = "blur(3px) brightness(0.6)";
            bkgBack.style.transformOrigin = "start center";
            bkgBack.style.transform = "scale(1.8)";
            bkgFront.style.filter = "blur(3px) brightness(0.6)";
            bkgFront.style.transformOrigin = "start center";
            bkgFront.style.transform = "scale(1.8)";
            // Hide Buttons
            btns[0].style.opacity = 0;
            btns[2].style.opacity = 0;
            btns[3].style.opacity = 0;
            // Move Selected Button
            btns[1].style.transform = "translate(calc(-9.5vw - 25%), -15vh)";
            btns[1].style.scale = "2";
            btns[1].style.backgroundPosition = "right";
            btns[1].style.borderBottom = "none";
            // Display Section
            differentSection.style.display = "block";
            break;

        case 3: //Try It Section
            // Scale Video
            bkgBack.style.filter = "blur(3px) brightness(0.6)";
            bkgBack.style.transformOrigin = "100% 50%";
            bkgBack.style.transform = "scale(1.8)";
            bkgFront.style.filter = "blur(3px) brightness(0.6)";
            bkgFront.style.transformOrigin = "100% 50%";
            bkgFront.style.transform = "scale(1.8)";
            // Hide Buttons
            btns[0].style.opacity = 0;
            btns[1].style.opacity = 0;
            btns[3].style.opacity = 0;
            // Move Selected Button
            btns[2].style.transform = "translate(calc(10vw + 25%), -25vh)";
            btns[2].style.scale = "2";
            btns[2].style.backgroundPosition = "left";
            btns[2].style.borderBottom = "none";
            // Display Section
            tryItSection.style.display = "block";
            break;

        case 4: //Quality Section
            // Scale Video
            bkgBack.style.filter = "blur(3px) brightness(0.6)";
            bkgBack.style.transformOrigin = "100% 50%";
            bkgBack.style.transform = "scale(1.8)";
            bkgFront.style.filter = "blur(3px) brightness(0.6)";
            bkgFront.style.transformOrigin = "100% 50%";
            bkgFront.style.transform = "scale(1.8)";
            // Hide Buttons
            btns[0].style.opacity = 0;
            btns[1].style.opacity = 0;
            btns[2].style.opacity = 0;
            // Move Selected Button
            btns[3].style.transform = "translate(calc(-10vw - 25%), -30vh)";
            btns[3].style.scale = "2";
            btns[3].style.backgroundPosition = "right";
            btns[3].style.borderBottom = "none";
            // Display Section
            qualitySection.style.display = "block";
            break;

        default:
            break;
    }

    // Back button appear
    back.style.display = "block";
}

// FUNCTION NEEDED FOR SETTIMEOUT IN goBack Function
function showElement(mainScreenElement) {
    mainScreenElement.style.opacity = 1;
}

function goBack() {
    // Show other elements
    mainScreenElements.forEach(mainScreenElement => {
        if (mainScreenElement.tagName == 'svg') {
            setTimeout(showElement, 800, mainScreenElement);
        } else {
            mainScreenElement.style.opacity = 1;
        }
    })

    // Zoom out background video
    bkgBack.style.filter = "blur(0px) brightness(1)";
    bkgBack.style.transform = "scale(1)";
    bkgBack.style.zIndex = "0";
    bkgFront.style.filter = "blur(0px) brightness(1)";
    bkgFront.style.transform = "scale(1)";
    bkgFront.style.zIndex = "0";
    // Hide hidden sections
    competitionSection.style.display = "none";
    differentSection.style.display = "none";
    tryItSection.style.display = "none";
    qualitySection.style.display = "none";
    // return all buttons
    btns[0].style.backgroundPosition = "left";
    btns[1].style.backgroundPosition = "right";
    btns[2].style.backgroundPosition = "left";
    btns[3].style.backgroundPosition = "right";
    btns.forEach(btn => {
        btn.style.transform = "translate(0%, -50%)";
        btn.style.scale = "1";
        btn.style.borderBottom = "2px solid white";
        setTimeout(showElement, 1000, btn)
    })

    // Hide Back button
    back.style.display = "none";
}