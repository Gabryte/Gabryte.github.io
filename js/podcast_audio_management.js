let audiosTot = 6;

let headerPlayButton = document.getElementsByClassName("podcastHeaderPlay")[0];
let progressHeaderBar = document.getElementsByClassName("songTracker_pod")[0];
let innerTimingHeader = document.getElementsByClassName("songTimer_pod")[0];
let headerSlider = document.getElementsByClassName("songSlider_pod")[0];
let previousSongPaused = -1;
let activeSong = new Array(audiosTot);
for (let i = 0; i < audiosTot; i++) {
    activeSong[i] = document.getElementById("podcast" + i);
}
let play_button;
function playPause(id,index){
    for(let i = 0; i < audiosTot; i++){
        if(i !== index && !activeSong[i].paused){
            activeSong[i].pause();
            play_button.setAttribute("src", "img/play1.png");
            play_button.style.boxShadow = "black 0 0 45px 1px";

        }
    }
    activeSong[index] = document.getElementById(id);

    play_button = document.getElementById(id).parentElement.children[0];

    if (activeSong[index].paused){
        activeSong[index].play();
        play_button.setAttribute("src", "img/pause1.png")
        play_button.style.boxShadow = "darkcyan 0 0 45px 1px";
        //mirroring the play button in the header
        headerPlayButton.setAttribute("src", "img/pause-button50X50.png");
        headerPlayButton.style.boxShadow = "darkcyan 0 0 45px 1px";
    }else{
        activeSong[index].pause();
        play_button.setAttribute("src", "img/play1.png")
        play_button.style.boxShadow = "black 0 0 45px 1px";
        //mirroring the play button in the header
        headerPlayButton.setAttribute("src", "img/play50X50.png");
        headerPlayButton.style.boxShadow = "black 0 0 45px 1px";
    }
}
function stop(id,index){

    //searching the current active song before stopping it.
    let index_current_active_song = -1;
    for (let j = 0; j < activeSong.length; j++) {
        if(!activeSong[j].paused){
            index_current_active_song = j;
            break;
        }
    }
    if(index_current_active_song === index){ //mirroring the header only if the active song is stopped.
        //mirroring the progress bar in the header
        progressHeaderBar.style.width = "0" + "%";
        //mirroring the inner timing in the header
        innerTimingHeader.innerHTML = "0" + ":" + "00" + '/' + Math.floor(activeSong[index_current_active_song].duration / 60) + ":" + (Math.floor(activeSong[index_current_active_song].duration % 60) < 10 ? '0' : '') + Math.floor(activeSong[index_current_active_song].duration % 60);
    }else if(previousSongPaused !== -1){
        //mirroring the progress bar in the header
        progressHeaderBar.style.width = "0" + "%";
        //mirroring the inner timing in the header
        innerTimingHeader.innerHTML = "0" + ":" + "00" + '/' + Math.floor(activeSong[previousSongPaused].duration / 60) + ":" + (Math.floor(activeSong[previousSongPaused].duration % 60) < 10 ? '0' : '') + Math.floor(activeSong[previousSongPaused].duration % 60);
    }



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

    //Gets the percentage of the click location.
    let percentage = (clickLocation/songSliderWidth);
    //Sets the song location with the percentage.

    setLocation(percentage,index);
}



function checkForActiveSong(){
    //searching the current active song before stopping it.
    let index_current_active_song = -1;
    for (let j = 0; j < activeSong.length; j++) {
        if(!activeSong[j].paused){
            index_current_active_song = j;
            break;
        }
    }
    if(index_current_active_song !== -1){
        playPause("podcast" + index_current_active_song,index_current_active_song,index_current_active_song);
        previousSongPaused = index_current_active_song;
    }else if(index_current_active_song === -1 && previousSongPaused !== -1){
        playPause("podcast" + previousSongPaused,previousSongPaused,previousSongPaused);
    }else {
        let randomSong = Math.floor(Math.random() * audiosTot);
        playPause("podcast"+randomSong,randomSong,randomSong);
        previousSongPaused = randomSong;
    }
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

        //searching the current active song.
        let index_current_active_song = -1;
        for (let j = 0; j < activeSong.length; j++) {
            if(!activeSong[j].paused){
                index_current_active_song = j;
                break;
            }
        }

        if (progress === 100) {
            progressBar[i].style.width = 0 + "%";
            inner[i].innerHTML = "00:00/-:--";
            play_button.setAttribute("src", "img/play1.png")
            play_button.style.boxShadow = "black 0 0 45px 1px";

            if(index_current_active_song === i) { //only if the active song is changed the header mirrors it.
                //mirroring the progress bar in the header
                progressHeaderBar.style.width = 0 + "%";
                //mirroring the inner timing in the header
                innerTimingHeader.innerHTML = "00:00/-:--";
                //mirroring the play button in the header
                headerPlayButton.setAttribute("src", "img/play50X50.png");
                //mirroring the play button in the header
                headerPlayButton.style.boxShadow = "black 0 0 45px 1px";
            }

        } else {
            progressBar[i].style.width = progress + "%";

            let currentSeconds = (Math.floor(audios[i].currentTime % 60) < 10 ? '0' : '') + Math.floor(audios[i].currentTime % 60);
            let currentMinutes = Math.floor(audios[i].currentTime / 60);
            inner[i].innerHTML = currentMinutes + ":" + currentSeconds + '/' + Math.floor(audios[i].duration / 60) + ":" + (Math.floor(audios[i].duration % 60) < 10 ? '0' : '') + Math.floor(audios[i].duration % 60);

            if(index_current_active_song === i) {
                //mirroring the progress bar in the header
                progressHeaderBar.style.width = progress + "%";
                //mirroring the inner timing in the header
                innerTimingHeader.innerHTML = currentMinutes + ":" + currentSeconds + '/' + Math.floor(audios[i].duration / 60) + ":" + (Math.floor(audios[i].duration % 60) < 10 ? '0' : '') + Math.floor(audios[i].duration % 60);
            }
        }
    });
}