const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const cover = document.getElementById('cover');
const song = document.getElementById('audio');
const play = document.getElementById("play");
const next = document.getElementById("next");
const skip = document.getElementById("skip");

const SAO = {
    songName: "Sword Art Online",
    bandName: "Yuki Kajiura",
    cover: "imagens/gess.png",  /* cover e song podem ser unificados por um objeto tipo "file" 
    contanto que ambos tenham a mesma descrição */
    song: "songs/redux_sword-art-crossing-field.mp3"
}
const Nagato = {
    songName: "Nagato Itami o kanjiro",
    bandName: "Naruto Shippuden",
    cover: "imagens/Makima.png",
    song: "songs/redux_nagato-itami-o-kanjiro.mp3"
}
const NarutoSAD = {
    songName: "Naruto SAD",
    bandName: "Naruto Shippuden",
    cover: "imagens/sangris.png",
    song: "songs/redux_naruto-sad.mp3"
}
let isPlaying = false;
const playlist = [SAO, Nagato, NarutoSAD]; /* o array pode ser definido como uma lista de objetos, ou seja é uma "mega variável" que armazena outras variáveis*/
let index = 0;

function playsong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill"); /*querySelector significa "selecionar o primeiro elemento que corresponde ao seletor" ou seja o botão de play busca o ícone dentro dele*/
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

function pausesong() {
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if (isPlaying === true){
        pausesong();
    }
    else {
        playsong();
    }
}

function initializeSong() {
    cover.src = `imagens/${playlist[index].cover}.png`;
    song.src = `songs/${playlist[index].song}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].bandName;
}

function skipSong() {
    if (index===0) {
    index = playlist.length - 1;  /* ou index = index - 1 */
    }
    else {
    index -= 1;
    }
    initializeSong();
    playsong();
}

function nextSong() {
    if (index===playlist.length - 1) {
    index = 0;  /* ou index = index - 1 */
    }
    else {
    index += 1;
    }
    initializeSong();
    playsong();
}

initializeSong();

play.addEventListener("click", playPauseDecider); /* Aqui estamos adicionando um evento de clique ao botão de play, que chama a função playsong quando clicado */
skip.addEventListener("click", skipSong);
next.addEventListener("click", nextSong);

/*

Tentei colocar o botão de play e pause no mesmo botão, mas não consegui fazer funcionar.
então criei dois botões separados, um para play e outro para pause, entretanto apesar de funcionar, não é a melhor solução, pois ocupa mais espaço na tela.

No html, foi isseri a seguite linha de código:

    <button id="pause" class="button button-navigate"><i class="bi bi-pause-circle-fill"></i></button>

No javascript, foi inserido o seguinte código:

    const pause = document.getElementById("pause"); que cria uma constante para o botão de pause.

Depois inseri a função pausesong() que pausa a música.

    function pausesong() {
        song.pause();
    }

Em seguida, adicionei o evento de click para o botão de pause, que chama a função pausesong().

    pause.addEventListener("click", pausesong);
*/