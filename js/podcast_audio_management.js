let audiosTot = 6;
let activeSong = new Array(audiosTot);
for (let i = 0; i < audiosTot; i++) {
    activeSong[i] = document.getElementById("podcast" + i);
}
let play_button;
function playPause(id,index){
    for(let i = 0; i < audiosTot; i++){
        if(i !== index && !activeSong[i].paused){
            activeSong[i].pause();
            play_button.setAttribute("src", "img/play1.png")
            play_button.style.boxShadow = "black 0 0 45px 1px";
        }
    }
    activeSong[index] = document.getElementById(id);
    play_button = document.getElementById(id).parentElement.children[0];

    if (activeSong[index].paused){
        activeSong[index].play();
        play_button.setAttribute("src", "img/pause1.png")
        play_button.style.boxShadow = "darkcyan 0 0 45px 1px";
    }else{
        activeSong[index].pause();
        play_button.setAttribute("src", "img/play1.png")
        play_button.style.boxShadow = "black 0 0 45px 1px";
    }
}
function stop(id,index){
    if(!activeSong[index].paused) {
        playPause(id,index);
    }
    activeSong[index].currentTime = 0;
    activeSong[index].pause();
}
function setLocation(percentage,index){
    activeSong[index].currentTime = activeSong[index].duration * percentage;
}
function setSongPosition(obj,e,index){
    //Gets the offset from the left so it gets the exact location.
    let songSliderWidth = obj.offsetWidth;
    let evtobj=window.event? event : e;
    clickLocation = evtobj.layerX - obj.offsetLeft;

    let percentage = (clickLocation/songSliderWidth);
    //Sets the song location with the percentage.
    setLocation(percentage,index);
}

let audios = Array(audiosTot);
audios = document.getElementsByTagName("audio");
let progressBar = Array(audiosTot);
progressBar = document.getElementsByClassName("songTracker");
let inner = Array(audiosTot);
inner = document.getElementsByClassName("songTimer");
for (let i = 0; i < audiosTot; i++) {
    audios[i].addEventListener("timeupdate", function() {
        let progress = (audios[i].currentTime / audios[i].duration) * 100;
        if (progress === 100) {
            progressBar[i].style.width = 0 + "%";
            inner[i].innerHTML = "00:00/-:--";
            play_button.setAttribute("src", "img/play1.png")
            play_button.style.boxShadow = "black 0 0 45px 1px";
        } else {
            progressBar[i].style.width = progress + "%";
            let currentSeconds = (Math.floor(audios[i].currentTime % 60) < 10 ? '0' : '') + Math.floor(audios[i].currentTime % 60);
            let currentMinutes = Math.floor(audios[i].currentTime / 60);
            inner[i].innerHTML = currentMinutes + ":" + currentSeconds + '/' + Math.floor(audios[i].duration / 60) + ":" + (Math.floor(audios[i].duration % 60) < 10 ? '0' : '') + Math.floor(audios[i].duration % 60);
        }
    });
}