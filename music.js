const audio = new Audio();

// PLAYLIST (change titles + files)
const playlist = [
  { title: "Song 1", src: "music/song1.mp3" },
  { title: "Song 2", src: "music/song2.mp3" },
  { title: "Song 3", src: "music/song3.mp3" }
];

let currentIndex = 0;

// ELEMENTS
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const songTitle = document.getElementById("song-title");

// LOAD SONG
function loadSong(index) {
  audio.src = playlist[index].src;
  songTitle.textContent = playlist[index].title;
}

loadSong(currentIndex);

// PLAY / PAUSE
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

// NEXT SONG
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
  audio.play();
  playBtn.textContent = "⏸";
});

// PREVIOUS SONG
prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentIndex);
  audio.play();
  playBtn.textContent = "⏸";
});

// AUTO NEXT WHEN SONG ENDS
audio.addEventListener("ended", () => {
  nextBtn.click();
});

// 💗 AUTOPLAY AFTER FIRST CLICK (IMPORTANT PART)
document.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
    }
  },
  { once: true }
);
