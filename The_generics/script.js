const songs = [
  { title: "Chadahgui", artist: "Vandebo", path: "Chadahgui.mp3" },
  {
    title: "Galzuu Durlal (feat. Enerel)",
    artist: "Vandebo",
    path: "GalzuuDurlal.mp3",
  },
  {
    title: "Dursamj",
    artist: "Vandebo",
    path: "vandebo-dursamj live [ ezmp3.cc ].mp3",
  },
  {
    title: "Haraarai (feat. Lil Thug E)",
    artist: "Vandebo",
    path: "VANDEBO feat. lil thug e - haraarai (2nd album) [ ezmp3.cc ].mp3",
  },
  {
    title: "Sain Bodoj Uzsen Uu",
    artist: "Vandebo",
    path: "Vandebo - Sain Bodoj Uzsen Uu (Official Music Video) [ ezmp3.cc ].mp3",
  },
  {
    title: "Stillgoing",
    artist: "Vandebo",
    path: "Vandebo - stillgoing (audio) [ ezmp3.cc ].mp3",
  },
  { title: "Top", artist: "Vandebo", path: "Vandebo - Top [ ezmp3.cc ].mp3" },
  {
    title: "Unuudruus Hoish",
    artist: "Vandebo",
    path: "Vandebo - Unuudruus hoish [ ezmp3.cc ].mp3",
  },
  {
    title: "Yu Huseew",
    artist: "Vandebo",
    path: "Vandebo-юу хүсэв [ ezmp3.cc ].mp3",
  },
  {
    title: "Herwee",
    artist: "Vandebo",
    path: "Vandebo- herveelyrics [ ezmp3.cc ].mp3",
  },
  {
    title: "Haltar Tsaas",
    artist: "Vandebo",
    path: "Vandebo - Haltar tsaas [ ezmp3.cc ].mp3",
  },
];

let currentIndex = 0;

function loadSongs() {
  const songButtons = document.getElementById("songButtons");
  const audioSource = document.getElementById("audioSource");
  const songPlayer = document.getElementById("songPlayer");
  const currentSong = document.createElement("div");
  currentSong.className = "text-xl font-bold mt-3 text-gray-800";
  songPlayer.parentNode.insertBefore(currentSong, songPlayer);

  songs.forEach((song, index) => {
    const button = document.createElement("button");
    button.className =
      "text-xl font-bold text-gray-700 bg-gray-400 px-4 py-2 rounded hover:bg-gray-500 w-full my-1";
    button.textContent = `${song.title}`;

    button.addEventListener("click", () => {
      currentIndex = index;
      playSong(song);
    });

    songButtons.appendChild(button);
  });

  document.getElementById("prevBtn").addEventListener("click", playPrevious);
  document.getElementById("nextBtn").addEventListener("click", playNext);
  document.getElementById("shuffleBtn").addEventListener("click", shuffleSongs);
}

function playSong(song) {
  const audioSource = document.getElementById("audioSource");
  const songPlayer = document.getElementById("songPlayer");
  const currentSong = document.querySelector(".text-xl.font-bold.mt-3.text-gray-800");

  audioSource.src = song.path;
  songPlayer.load();
  songPlayer.play();
  currentSong.textContent = `${song.title}`;
}

function playPrevious() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(songs[currentIndex]);
}

function playNext() {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(songs[currentIndex]);
}

function shuffleSongs() {
  currentIndex = Math.floor(Math.random() * songs.length);
  playSong(songs[currentIndex]);
}

document.addEventListener("DOMContentLoaded", loadSongs);
