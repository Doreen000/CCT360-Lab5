const audio = document.getElementById('bgAudio');
const playBtn = document.getElementById('playBtn');
const volumeSlider = document.getElementById('volumeSlider');
const larryImg = document.getElementById('larryImg');
const meowAudio = document.getElementById('meowAudio');


playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playBtn.textContent = 'Play';
  }
});


volumeSlider.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});


larryImg.addEventListener('click', () => {
  meowAudio.currentTime = 0;
  meowAudio.play();
  

  larryImg.style.transform = 'scale(1.08)';
  setTimeout(() => {
    larryImg.style.transform = 'scale(1)';
  }, 150);
});