// Função para cadastrar músicas
function cadastrarMusica(event) {
    event.preventDefault(); // Evita o envio do formulário

    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const genre = document.getElementById('genre').value;
    const duration = document.getElementById('duration').value;
    const link = document.getElementById('link').value;

    const music = { title, artist, genre, duration, link };

    // Recupera a lista de músicas do localStorage
    const musicList = JSON.parse(localStorage.getItem('musicas')) || [];

    // Adiciona a nova música à lista
    musicList.push(music);

    // Armazena a lista atualizada no localStorage
    localStorage.setItem('musicas', JSON.stringify(musicList));

    // Limpa o formulário
    document.getElementById('musicForm').reset();
}

// Função para exibir músicas
function exibirMusicas() {
    const musicList = JSON.parse(localStorage.getItem('musicas')) || [];
    const musicListElement = document.getElementById('musicList');

    musicListElement.innerHTML = ''; // Limpa a lista antes de exibir

    musicList.forEach(music => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Título:</strong> ${music.title} <br>
            <strong>Artista:</strong> ${music.artist} <br>
            <strong>Gênero:</strong> ${music.genre} <br>
            <strong>Duração:</strong> ${music.duration} min <br>
            <strong>Link:</strong> <a href="${music.link}" target="_blank">Ouvir</a>
            <hr>
        `;
        musicListElement.appendChild(li);
    });
}

// Adiciona o evento de submit ao formulário
document.getElementById('musicForm')?.addEventListener('submit', cadastrarMusica);

// Chama a função para exibir músicas na home.html
if (document.getElementById('musicList')) {
    exibirMusicas();
}