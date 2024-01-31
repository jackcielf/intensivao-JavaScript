const btnPlayPause = document.querySelector(".play-pause");
const audioCurrent = document.querySelector(".audio");
const btnNext = document.querySelector(".after");
const btnBefore = document.querySelector(".before");
const txtNumCapCurrent = document.querySelector(".num-cap");

const numMaxCap = 10;
let isPlaying = false;
let capCurrent = 1;

const playTrack = () => {
  audioCurrent.play();

  isPlaying = true;
  btnPlayPause.classList.remove("bi-play-circle-fill");
  btnPlayPause.classList.add("bi-pause-circle-fill");
};

const pauseTrack = () => {
  audioCurrent.pause();

  isPlaying = false;
  btnPlayPause.classList.add("bi-play-circle-fill");
  btnPlayPause.classList.remove("bi-pause-circle-fill");
};

const playOrPause = () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
};

const nextTrack = () => {
  capCurrent++;
  
  if (capCurrent > 10) {
    capCurrent = 1;
  }

  txtNumCapCurrent.innerText = capCurrent;
  audioCurrent.src = `./books/dom-casmurro/${capCurrent}.mp3`;
  playTrack();
};

const beforeTrack = () => {
  capCurrent--;

  if (capCurrent === 0) {
    capCurrent = 10;
  }

  txtNumCapCurrent.innerText = capCurrent;
  audioCurrent.src = `./books/dom-casmurro/${capCurrent}.mp3`;
  playTrack();
};

btnPlayPause.addEventListener("click", playOrPause);
btnNext.addEventListener("click", nextTrack);
btnBefore.addEventListener("click", beforeTrack);
