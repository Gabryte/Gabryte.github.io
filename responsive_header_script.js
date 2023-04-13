window.addEventListener('resize', function(event) {
    let width = window.innerWidth;
    if(width <= 910){
        document.getElementsByClassName("menu-icon")[0].style.display = "flex";
        document.getElementById("title_caption").style.alignSelf = "flex-start";
        document.getElementById("title_caption").style.marginRight = "0";
    }else {
        document.getElementsByClassName("menu-icon")[0].style.display = "none";
        document.getElementById("overlay").classList.remove("active");
        document.getElementById("menuContainer").classList.remove("active");
        document.getElementsByClassName("menu-icon")[0].classList.remove("active");
        document.getElementById("title_caption").style.alignSelf = "center";
        document.getElementById("title_caption").style.marginRight = "10%";

    }
    if(width <= 794){
        document.getElementById("mail_header_box").style.display = "none";
    }else {
        document.getElementById("mail_header_box").style.display = "flex";
    }

    if(width <= 630){
        document.getElementById("title_caption").style.display = "none";
    }else {
        document.getElementById("title_caption").style.display = "flex";
    }

    if(width <= 400){
        document.getElementById("front_header_title").style.display = "none";
    }else {
        document.getElementById("front_header_title").style.display = "flex";
    }

    if(width <= 300){
        let menuTitles = document.querySelectorAll(".menuTitle");
        menuTitles.forEach((title) => {
            title.style.fontsize = "50%";
        });
        let options = document.querySelectorAll(".menuOption");
        options.forEach((option) => {
            option.style.fontsize = "50%";
        });
    }else{
        let menuTitles = document.querySelectorAll(".menuTitle");
        menuTitles.forEach((title) => {
            title.style.fontsize = "100%";
        });
        let options = document.querySelectorAll(".menuOption");
        options.forEach((option) => {
            option.style.fontsize = "80%";
        });
    }

    if(width <= 200){
        document.getElementById("header_drop_down").style.display = "none";
    }else {
        document.getElementById("header_drop_down").style.display = "flex";
    }

}, true);