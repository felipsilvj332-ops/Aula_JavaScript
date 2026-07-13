const songName = document.getElementById('song-name');
const song = document.getElementById('audio');

songName.innerText = "não definido";
song.play();


/*

O código acima é um exemplo de como manipular elementos de áudio em uma página web usando JavaScript. Ele seleciona elementos do DOM (Document Object Model) com os IDs 'song-name' e 'audio', define o texto do nome da música como "não definido" e inicia a reprodução da música automaticamente.

No entanto, é importante observar que a reprodução automática de áudio pode ser bloqueada por navegadores modernos devido a políticas de autoplay. Para garantir que o áudio seja reproduzido apenas quando o usuário interagir com a página, é recomendável adicionar um botão de reprodução conforme mostrado no código comentado abaixo:

const songName = document.getElementById('song-name');
const song = document.getElementById('audio');
const playButton = document.getElementById('play');

songName.innerText = "Não definido";

playButton.addEventListener("click", () => {
    song.play();
});

*/