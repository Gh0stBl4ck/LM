// Carrossel de imagens
let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
let index = 0;

function changeSlide(newIndex) {
  index = newIndex;
  const slides = document.querySelectorAll(".carousel-img");
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none'; // Exibe a imagem atual, oculta as demais
  });
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Intervalo de troca de imagens a cada 3 segundos
setInterval(() => {
  index = (index + 1) % images.length;
  changeSlide(index);
}, 3000);

// Contador
function updateCounter(startDate) {
  const now = new Date();
  const diff = now - new Date(startDate);

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('years').innerText = years;
  document.getElementById('months').innerText = months;
  document.getElementById('weeks').innerText = weeks;
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}
setInterval(() => updateCounter('2023-12-03'), 1000);

// Corações flutuantes
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.getElementById('hearts-container').appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Controle da música (Play/Pause)
const music = document.getElementById("background-music");
const playPauseBtn = document.getElementById("play-pause-btn");

let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    playPauseBtn.textContent = "Tocar Música";
  } else {
    music.play();
    playPauseBtn.textContent = "Pausar Música";
  }
  isPlaying = !isPlaying;
});
