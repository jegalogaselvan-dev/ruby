const effects = document.getElementById('effects');
const surpriseBtn = document.getElementById('surpriseBtn');
const letter = document.getElementById('letter');
const symbols = ['❤️', '💗', '💕', '💖', '✨', '🌸'];

function makeFloatingHeart() {
  const item = document.createElement('span');
  item.className = 'floaty';
  item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  item.style.left = Math.random() * 100 + 'vw';
  item.style.fontSize = (16 + Math.random() * 22) + 'px';
  item.style.animationDuration = (5 + Math.random() * 5) + 's';
  effects.appendChild(item);
  window.setTimeout(() => item.remove(), 10500);
}

function burst() {
  for (let i = 0; i < 24; i++) {
    const item = document.createElement('span');
    item.className = 'spark';
    item.textContent = ['✨', '💖', '💕', '🌟'][Math.floor(Math.random() * 4)];
    item.style.left = (10 + Math.random() * 80) + 'vw';
    item.style.top = (15 + Math.random() * 65) + 'vh';
    item.style.fontSize = (14 + Math.random() * 18) + 'px';
    effects.appendChild(item);
    window.setTimeout(() => item.remove(), 1500);
  }
}

window.setInterval(makeFloatingHeart, 320);
surpriseBtn.addEventListener('click', () => {
  letter.hidden = false;
  surpriseBtn.textContent = 'A little more love for you 💗';
  burst();
});
