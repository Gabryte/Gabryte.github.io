window.onscroll = function() {checkStickyFrontBar()};
let disappearedMail = false;
let disappearedButtons = false;
let frontBar = document.getElementById("drop-menu");
let sticky;
sticky = frontBar.offsetTop + 10;
let tr_li = document.getElementsByClassName("transparent_wrapper")[0];
let tr_a = document.getElementsByClassName("transparent_wrapper")[0].getElementsByTagName("a")[0];
let tr_img = document.getElementsByClassName("transparent_wrapper")[0].getElementsByTagName("img")[0];

let div_sub = document.getElementsByClassName("transparent_wrapper")[1];




function checkStickyFrontBar() {
    if (window.pageYOffset >= sticky) {
        frontBar.classList.add("sticky")
        if (!disappearedMail) {
            tr_li.style.display = "inline-block";
            tr_a.style.display = "inline-block";
            tr_img.style.display = "inline-block";
        }
        if(!disappearedButtons){
            div_sub.style.display = "inline-block";
        }


        let width = window.innerWidth;
        if(width < 1210){
            document.getElementsByClassName("last_tend")[0].style.margin = "5px 0 0 -35%";
            document.getElementsByClassName("header_tend")[0].style.margin ="-45% 0 0 -202%";

        }else{
            document.getElementsByClassName("last_tend")[0].style.margin = "5px 0 0";
            document.getElementsByClassName("header_tend")[0].style.margin ="-45% 0 0";
        }

        if(width < 1581){
            document.getElementsByClassName("header_tend_for_bar")[0].style.margin ="-45% 0 0 -34%";
        }else{
            document.getElementsByClassName("header_tend_for_bar")[0].style.margin ="-45% 0 0";
        }
        if (width < 1400) {
            document.getElementsByClassName("transparent_wrapper")[1].style.display = "none";
            disappearedButtons = true;
        } else {
            disappearedButtons = true;
            if (window.pageYOffset >= sticky) {
                document.getElementsByClassName("transparent_wrapper")[1].style.display = "inline-block";
                disappearedButtons = false;
            }
        }
        if (width < 1120) {
            disappearedMail = true;
            document.getElementsByClassName("transparent_wrapper")[0].style.display = "none";
        } else {
            disappearedMail = true;
            if (window.pageYOffset >= sticky) {
                disappearedMail = false;
                document.getElementsByClassName("transparent_wrapper")[0].style.display = "inline-block";
            }
        }
    } else {
        frontBar.classList.remove("sticky");
        tr_li.style.display = "none";
        tr_a.style.display = "none";
        tr_img.style.display = "none";
        div_sub.style.display = "none";
    }
}

window.addEventListener('resize', function(event) {

    let width = window.innerWidth;
    if (width < 1210) {
        document.getElementsByClassName("last_tend")[0].style.margin = "5px 0 0 -35%";
        document.getElementsByClassName("header_tend")[0].style.margin = "-45% 0 0 -202%";

    } else {
        document.getElementsByClassName("last_tend")[0].style.margin = "5px 0 0";
        document.getElementsByClassName("header_tend")[0].style.margin = "-45% 0 0";
    }

    if (width < 1581) {
        document.getElementsByClassName("header_tend_for_bar")[0].style.margin = "-45% 0 0 -34%";
    } else {
        document.getElementsByClassName("header_tend_for_bar")[0].style.margin = "-45% 0 0";
    }

    if (width < 1400) {
        document.getElementsByClassName("transparent_wrapper")[1].style.display = "none";
        disappearedButtons = true;
    } else {
        disappearedButtons = true;
        if (window.pageYOffset >= sticky) {
            document.getElementsByClassName("transparent_wrapper")[1].style.display = "inline-block";
            disappearedButtons = false;
        }
    }
    if (width < 1120) {
        disappearedMail = true;
        document.getElementsByClassName("transparent_wrapper")[0].style.display = "none";
    } else {
        if (window.pageYOffset >= sticky) {
            disappearedMail = false;
            document.getElementsByClassName("transparent_wrapper")[0].style.display = "inline-block";
        }
    }
},true);