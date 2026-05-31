/*
  Você pode trocar a mensagem.
*/

function showLoveMessage() {
  alert('Eu te amo ❤️ e esse site contem 4 cartas secretas,boa sorte pra achar');
}


// =========================================
// SISTEMA DE MÚSICA
// =========================================

// =========================================
// SISTEMA DE MÚSICA COM ESCOLHA
// =========================================

const music = document.getElementById('music');
const musicModal = document.getElementById('musicModal');

function openMusicModal() {
  musicModal.style.display = "flex";
}

function closeMusicModal() {
  musicModal.style.display = "none";
}

function chooseSong(songFile) {

  music.src = songFile;

  music.play();

  closeMusicModal();
}

function pauseMusic() {
  music.pause();
}


// =========================================
// CARTAS SECRETAS
// =========================================

const letters = {

  1: {
    title: "🦇 Carta do Batman",
    text: "Se Gotham tivesse alguém como você, talvez o trabalho do Batman fosse mais fácil. Você tem essa capacidade estranha de melhorar qualquer ambiente só por estar nele."
  },

  3: {
    title: "Para a unica garota que já amei",
    text: "– O que escrevo no contrato de um namoro de verdade?– Nada. Precisa confiar."
  },

  2: {
    title: "❤️ Carta Especial",
    text: "Obrigado por todas as conversas, por todos os momentos e por cada vez que você conseguiu me fazer sorrir mesmo sem perceber."
  },

  4: {
    title: "🌹 Carta Secreta",
    text: "Se você encontrou essa carta, significa que explorou tudo. Então aqui vai um segredo: eu faria esse site mil vezes só para ver você sorrir."
  }

};


function openLetter(id) {

  document.getElementById("letterTitle").innerText = letters[id].title;

  document.getElementById("letterText").innerText = letters[id].text;

  document.getElementById("letterModal").style.display = "flex";

}


function closeLetter() {

  document.getElementById("letterModal").style.display = "none";

}


// =========================================
// ANIMAÇÃO AO DESCER A PÁGINA
// =========================================

const cards = document.querySelectorAll(
  '.timeline-card, .gallery-card, .reference-card'
);

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {

      card.style.opacity = '1';
      card.style.transform = 'translateY(0px)';

    }

  });

});


// =========================================
// ESTADO INICIAL DOS CARDS
// =========================================

cards.forEach(card => {

  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = '0.6s';

});