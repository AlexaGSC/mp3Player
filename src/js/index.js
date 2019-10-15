const songs = [
  'https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3',
  'https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3',
  'https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3'
];

let currentSong = 0;
let audio = new Audio(songs[currentSong]); // Descarga la primera canción
audio.volume = 0.5;

const divText = document.querySelector('.text');
const buttons = {
  play: document.querySelector('.play'),
  pause: document.querySelector('.pause'),
  prev: document.querySelector('.prev'),
  next: document.querySelector('.next'),
  stop: document.querySelector('.stop'),
  volume: document.querySelector('.volume')
};

function fnPlay() {
  prepareSong();
  audio.play();
  putText();
}

function prepareSong() {
  fnPause();
  audio = new Audio(songs[currentSong]);
  audio.volume = 0.5;
}

function fnPause() {
  audio.pause();
}

function fnPrev() {
  currentSong--;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  fnPlay();
}

function fnNext() {
  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  fnPlay();
}

function fnStop() {
  audio.currentTime = 0;
  fnPause();
}

function changeVolume(vol, name) {
  audio.volume = vol;
  buttons.volume.innerHTML = `<i class="fas fa-volume-${name}"></i>`;
}

function fnVolume() {

  // Way 3 (Refactor)
  // En nuestro caso, se puede eliminar el último if

  if (audio.volume == 0.5)
    changeVolume(1, 'up');
  else if (audio.volume == 1)
    changeVolume(0, 'mute');
  else if (audio.volume == 0)
    changeVolume(0.5, 'down');

}

function fnReplay() {
  auto.loop = fnPlay();
}


function putText() {
  const nameSong = songs[currentSong];
  const cleanName = unescape(nameSong);
  const pos = cleanName.lastIndexOf('/') + 1;
  const shortName = cleanName.substring(pos);
  const miniName = shortName.replace('.mp3', '');
  divText.innerHTML = miniName;
}

buttons.play.addEventListener('click', fnPlay);
buttons.pause.addEventListener('click', fnPause);
buttons.prev.addEventListener('click', fnPrev);
buttons.next.addEventListener('click', fnNext);
buttons.stop.addEventListener('click', fnStop);
buttons.volume.addEventListener('click', fnVolume);