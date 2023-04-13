// get the menu button element
let menuButton = document.getElementsByClassName("menu-icon")[0];


let overlay = document.getElementById("overlay");
let menuContainer = document.getElementById("menuContainer");
let menuTitles = document.querySelectorAll(".menuTitle");
let menuOptions = document.querySelectorAll(".menuOptions");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuButton.classList.toggle("active");
    overlay.classList.toggle("active");
    menuContainer.classList.toggle("active");
}


menuTitles.forEach((title) => {
    let options = title.nextElementSibling;

    title.addEventListener("mouseover", () => {
        options.style.display = "flex";
    });

    title.addEventListener("mouseout", () => {
        options.style.display = "none";
    });
});
menuOptions.forEach((options) => {
    options.addEventListener("mouseover", () => {
        options.style.display = "flex";
    });

    options.addEventListener("mouseout", () => {
        options.style.display = "none";
    });
});