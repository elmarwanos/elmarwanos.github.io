var back;
var img;
var btns;
var compContent;
var body;
var outOfZoo;
var benefitsIsClicked = false;
var scrollers;
var scrollContent;
var currVisibleContent

window.onload = function () {
    back = document.querySelector("#back");
    img = document.querySelector("#bkg-bottle");
    btns = document.querySelectorAll(".buttons");
    compContent = document.querySelector("#comp-content");
    offerContent = document.querySelector("#offer-content");
    benefitsContent = document.querySelector("#benefits-content");
    qualityContent = document.querySelector("#quality-content");
    body = document.querySelector("body");
    outOfZooms = document.querySelectorAll(".out-of-zoom");
    scrollers = document.querySelectorAll(".scroll-content > div")
    scrollContent = document.querySelector(".scroll-content");

    // -------------------------------------- SCROLL LISTENER ----------------------------------------
    scrollContent.addEventListener("scroll", (event) => {
        if (benefitsIsClicked === true) {
            var yPos = scrollContent.scrollTop;

            if (yPos < 100) {
                showCurrContent(0);
            } else if (yPos > 100 && yPos < 200) {
                showCurrContent(1);
            } else if (yPos > 200 && yPos < 300) {
                showCurrContent(2);
            } else if (yPos > 300) {
                showCurrContent(3);
                scrollContent.scrollTo(0, 300);
            }
        }
    })
}

function showCurrContent(order) {
    for (let i = 0; i < scrollers.length; i++) {
        if (i === order) {
            continue;
        }
        const scroller = scrollers[i];
        scroller.style.animationName = "none";
        scroller.style.opacity = "0";
        scroller.style.position = "static";
    }

    scrollers[order].style.animationName = "appearUp";
    scrollers[order].style.opacity = "1";
    scrollers[order].style.position = "fixed";
}

function buttonClick(btnNum) {
    //Hide other elements
    outOfZooms.forEach(outOfZoom => {
        outOfZoom.style.opacity = 0;
    })

    switch (btnNum) {
        case 1:
            img.style.filter = "blur(5px)";
            img.style.transformOrigin = "100% 20%";
            img.style.transform = "scale(1.8)";
            btns.forEach(btn => {
                btn.style.transform = "translate(-50vw, 25vh)";
            });
            compContent.style.display = "flex";
            break;

        case 2:
            img.style.filter = "blur(5px)";
            img.style.transformOrigin = "right";
            img.style.transform = "scale(1.8)";
            btns.forEach(btn => {
                btn.style.transform = "translate(-50vw, 25vh)";
            });
            offerContent.style.display = "flex";
            break;

        case 3:
            img.style.filter = "blur(5px)";
            img.style.transformOrigin = "bottom right";
            img.style.transform = "scale(1.9)";
            btns.forEach(btn => {
                btn.style.transform = "translate(-50vw, 25vh)";
            });
            benefitsContent.style.display = "flex";
            benefitsIsClicked = true;
            showCurrContent(0)
            break;

        case 4:
            img.style.filter = "blur(5px)";
            img.style.transformOrigin = "bottom right";
            img.style.transform = "scale(1.9)";
            btns.forEach(btn => {
                btn.style.transform = "translate(-50vw, 25vh)";
            });
            qualityContent.style.display = "flex";
            break;

        default:
            break;
    }
    // Hide buttons
    btns[0].style.opacity = 0;
    btns[1].style.opacity = 0;
    btns[2].style.opacity = 0;
    btns[3].style.opacity = 0;
    // Back button appear
    back.style.display = "block";
}

function goBack() {
    img.style.filter = "blur(0px)";
    benefitsIsClicked = false;

    // Hide other elements
    outOfZooms.forEach(outOfZoom => {
        outOfZoom.style.opacity = 1;
    })

    img.style.transform = "scale(1)";
    img.style.zIndex = "0";
    btns.forEach(btn => {
        btn.style.transform = "translate(0vw, 0vh)";
    })
    compContent.style.display = "none";
    offerContent.style.display = "none";
    benefitsContent.style.display = "none";
    qualityContent.style.display = "none";

    // Show buttons
    btns[0].style.opacity = 1;
    btns[1].style.opacity = 1;
    btns[2].style.opacity = 1;
    btns[3].style.opacity = 1;
    // Hide Back button
    back.style.display = "none";
}

function order(num, direction) {
    switch (num) {
        case 0:
            if (direction === "back") {
                //disable
            } else if (direction === "next") {
                showCurrContent(1)
            }
            break;
        case 1:
            if (direction === "back") {
                showCurrContent(0)
            } else if (direction === "next") {
                showCurrContent(2)
            }
            break;
        case 2:
            if (direction === "back") {
                showCurrContent(1)
            } else if (direction === "next") {
                showCurrContent(3)
            }
            break;
        case 3:
            if (direction === "back") {
                showCurrContent(2)
            } else if (direction === "next") {
                //disable
            }
            break;

        default:
            break;
    }
}