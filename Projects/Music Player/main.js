//Songs Object
let songs = [
  {
    artistName: "Arman Malik",
    songName: "Kuch Toh Hai",
    Duration: "4:05",
    image: "images/img1.jpg",
    url: "songs/Kuch_Toh_Hai.mp3",
  },
  {
    artistName: "Sonu Nigam",
    songName: "Sooraj Hua Madaam",
    Duration: "4:51",
    image: "images/img2.jpg",
    url: "songs/sooraj_hua_madaam.mp3",
  },
  {
    artistName: "Atif Aslam",
    songName: "Tera Hone Laga Hoon",
    Duration: "5:00",
    image: "images/img3.jpg",
    url: "songs/Tera_Hone_Laga_Hoon.mp3",
  },
  {
    artistName: "Jubin Nautiyal",
    songName: "Tum Hi Aana",
    Duration: "1:23",
    image: "images/img4.jpg",
    url: "songs/Tum_Hi_Aana.mp3",
  },
  {
    artistName: "Darshan Raval",
    songName: "Pehli Mohabbat",
    Duration: "2:47",
    image: "images/img5.jpg",
    url: "songs/Pehli_Mohabbat.mp3",
  },
  {
    artistName: "Arijit Singh",
    songName: "Aaj Phir Tum Pe Pyar Aya Hai",
    Duration: "3:00",
    image: "images/img6.jpg",
    url: "songs/aaj-phir-tum-pe-pyar-aya-hai.mp3",
  },
];

//Javascript Variables
let audio = new Audio(songs[0].url);
let previousButton = document.querySelector(".previous");
let playButton = document.querySelector(".play");
let pauseButton = document.querySelector(".pause");
let nextButton = document.querySelector(".next");
let dtime = document.querySelector(".duration");
let artist = document.querySelector(".artist");
let song = document.querySelector(".song");
let image = document.querySelector(".img");
let currentSongIndex = 0;

//Play Button Event Listener
playButton.addEventListener("click", function () {
  audio.play();
  artist.innerText = currentSong().artistName;
  song.innerHTML = currentSong().songName;
  dtime.innerHTML = currentSong().Duration;
  image.setAttribute('src',currentSong().image);
  audio.loop = "true";
//   console.log(audio.duration);
});

//Pause Button Event Listener
pauseButton.addEventListener("click", function () {
  audio.pause();
});

//Current Song Function to calculate Index
const currentSong = (index) => {
  if (index === undefined) {
	currentSongIndex=0;
    return songs[currentSongIndex];
  } else if (index < songs.length) {
    artist.innerText = songs[index].artistName;
	image.setAttribute('src',songs[index].image);
    song.innerHTML = songs[index].songName;
    dtime.innerHTML = songs[index].Duration;
  }
};

//Next Song Function will be triggered on Clicking Next button
const nextSong = () => {
  newSongIndex = currentSongIndex + 1;
  currentSong(newSongIndex);
  if (newSongIndex < songs.length) {
    audio.pause();
    audio = new Audio(songs[newSongIndex].url);
    audio.play();
    audio.loop = "true";
    return (currentSongIndex = newSongIndex);
  } 
  else
  {
	currentSongIndex = 0;
	audio.pause();
    audio = new Audio(songs[currentSongIndex].url);
    audio.play();
    audio.loop = "true";
	artist.innerText = songs[currentSongIndex].artistName;
	image.setAttribute('src',songs[currentSongIndex].image);
    song.innerHTML = songs[currentSongIndex].songName;
    dtime.innerHTML = songs[currentSongIndex].Duration;
    return currentSongIndex;
  }
};

//Previous Song Function will be triggered on Clicking Previous button
const previousSong = () => {
  newSongIndex = currentSongIndex - 1;
  if (newSongIndex < 0) {
	currentSongIndex = songs.length-1;
	console.log(songs.length-1)
	audio.pause();
	audio = new Audio(songs[currentSongIndex].url);
    audio.play();
    audio.loop = "true";
	artist.innerText = songs[currentSongIndex].artistName;
	image.setAttribute('src',songs[currentSongIndex].image);
    song.innerHTML = songs[currentSongIndex].songName;
    dtime.innerHTML = songs[currentSongIndex].Duration;
    return currentSongIndex;
  } else {
    audio.pause();
    currentSong(newSongIndex);
    audio = new Audio(songs[newSongIndex].url);
    audio.play();
    audio.loop = "true";
    return (currentSongIndex = newSongIndex);
  }
};

//Next Button Event Listener
nextButton.addEventListener("click", function () {
  nextSong();
});

//Previous Button Event Listener
previousButton.addEventListener("click", function () {
  previousSong();
});
