let moon = document.getElementById("moon");
let text = document.getElementById("text");
let cityRight = document.getElementById("ciyRight");
let cityLeft = document.getElementById("cityLeft");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    let screenWidth = window.innerWidth;
    moon.style.top = value * .75 + "px"
    cityLeft.style.left = value * -1.5 + "px";
    cityRight.style.left = value * 1.5 + "px";

    if (screenWidth > 1356) {
        text.style.marginTop = value * 1.5 + "px";
    }
    else {
        text.style.marginTop = value * .7 + "px";
    }
});