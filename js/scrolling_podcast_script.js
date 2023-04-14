let UpperElementOverPodcastSectionBar = document.getElementById("overPodcast")
let podcastSectionBar = document.getElementById("podcast_sticky");
let footerBlock = document.getElementById("footer_content");


window.addEventListener("scroll", function () {
    checkForPodcastPosition();
});

window.addEventListener("resize", function () {
    checkForPodcastPosition();
});

function checkForPodcastPosition(){
    let width = window.innerWidth;
    let spacer = document.getElementById("grow");
    if(width > 1046) {
        let originalCoordinates = UpperElementOverPodcastSectionBar.offsetTop + UpperElementOverPodcastSectionBar.offsetHeight;


        if (window.pageYOffset >= originalCoordinates) {

            if (window.pageYOffset + podcastSectionBar.offsetHeight + 0.1*podcastSectionBar.offsetHeight <= footerBlock.offsetTop) {
                spacer.style.removeProperty("padding-top");
                podcastSectionBar.classList.add("sticky_podcast");
                podcastSectionBar.style.width = UpperElementOverPodcastSectionBar.offsetWidth + "px";
            } else {
                podcastSectionBar.style.removeProperty("width");
                podcastSectionBar.classList.remove("sticky_podcast");
                spacer.style.paddingTop = footerBlock.offsetTop - UpperElementOverPodcastSectionBar.offsetTop - UpperElementOverPodcastSectionBar.offsetHeight -podcastSectionBar.offsetHeight - 0.1*podcastSectionBar.offsetHeight + "px";

            }

        } else {
            spacer.style.removeProperty("padding-top");
            podcastSectionBar.classList.remove("sticky_podcast");
            podcastSectionBar.style.removeProperty("width");
        }

    }else{
        spacer.style.removeProperty("padding-top");
        podcastSectionBar.classList.remove("sticky_podcast");
        podcastSectionBar.style.removeProperty("width");
    }
}