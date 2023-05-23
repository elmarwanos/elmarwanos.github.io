var back;
var img;
var btns;
var compContent;
var body;
var outOfZoom;

window.onload = function () {
    back = document.querySelector("#back");
    img = document.querySelector("#bkg-bottle");
    btns = document.querySelectorAll(".buttons");
    compContent = document.querySelector("#comp-content");
    offerContent = document.querySelector("#offer-content");
    benefitsContent = document.querySelector("#benefits-content");
    body = document.querySelector("body");
    outOfZooms = document.querySelectorAll(".out-of-zoom");
}

function buttonClick(btnNum) {
    //Hide other elements
    outOfZooms.forEach(outOfZoom => {
        outOfZoom.style.opacity = 0;
    })

    //Stop Scrolling
    body.style.overflowY = "hidden";

    switch (btnNum) {
        case 1:
            // Zoom in to top right
            img.style.transformOrigin = "100% 20%";
            img.style.transform = "scale(1.8)";
            btns.forEach(btn => {
                btn.style.transform = "translate(-50vw, 25vh)";
            });
            compContent.style.display = "flex";
            break;

        case 2:
            // Zoom in to top right
            img.style.transformOrigin = "right";
            img.style.transform = "scale(1.8)";
            btns.forEach(btn => {
                btn.style.transform = "translate(-50vw, 25vh)";
            });
            offerContent.style.display = "flex";
            break;

        case 3:
            // Zoom in to top right
            img.style.transformOrigin = "bottom right";
            img.style.transform = "scale(1.9)";
            btns.forEach(btn => {
                btn.style.transform = "translate(-50vw, 25vh)";
            });
            benefitsContent.style.display = "flex";
            break;

        default:
            break;
    }
    // Hide buttons
    btns[0].style.opacity = 0;
    btns[1].style.opacity = 0;
    btns[2].style.opacity = 0;
    // Back button appear
    back.style.display = "block";
}

function goBack() {
    // Hide other elements
    outOfZooms.forEach(outOfZoom => {
        outOfZoom.style.opacity = 1;
    })

    // Resume Scrolling
    body.style.overflowY = "scroll";

    img.style.transform = "scale(1)";
    img.style.zIndex = "0";
    btns.forEach(btn => {
        btn.style.transform = "translate(0vw, 0vh)";
    })
    compContent.style.display = "none";
    offerContent.style.display = "none";
    benefitsContent.style.display = "none";

    // Show buttons
    btns[0].style.opacity = 1;
    btns[1].style.opacity = 1;
    btns[2].style.opacity = 1;
    // Hide Back button
    back.style.display = "none";
}