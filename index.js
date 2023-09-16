const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
mainAudio = wrapper.querySelector("#main-audio"),
playPauseBtn = wrapper.querySelector(".bx-play");

let musicIndex = 2;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNum){
    musicName.innerHTML = allMusic[indexNum - 1].name;
    musicArtist.innerHTML = allMusic[indexNum - 1].artist;
    musicImg.src = `${allMusic[indexNum - 1].img}`;
    mainAudio.src = `${allMusic[indexNum - 1].src}.mp3`;
}

playPauseBtn.addEventListener("click", () => {
    let isMusicPaused = wrapper.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
});

function playMusic(){
    wrapper.classList.add("paused");
    mainAudio.play();
}

function pauseMusic(){
    wrapper.classList.remove("paused");
    mainAudio.pause();
}