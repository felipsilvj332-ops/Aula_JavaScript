/*const songName = document.getElementById('song-name');
const song = document.getElementById('audio');

songName.innerText = "não definido";
song.play();*/
const songName = document.getElementById('song-name');
const song = document.getElementById('audio');
const playButton = document.getElementById('play');

songName.innerText = "Não definido";

playButton.addEventListener("click", () => {
    song.play();
});