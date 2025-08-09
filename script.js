let timer;
let totalSeconds = 0;
let originalSeconds = 0;

function updateCustomTime(val) {
  document.getElementById('customTimeLabel').textContent = val;
}

function selectPreset(minutes) {
  clearInterval(timer);
  totalSeconds = minutes * 60;
  originalSeconds = totalSeconds;
  updateDisplay();
  updateProgress();
  hideDoneMessage();
}

function startTimer() {
  if (totalSeconds <= 0) {
    alert("Pilih preset atau set waktu terlebih dahulu!");
    return;
  }
  clearInterval(timer);
  timer = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
      updateProgress();
    } else {
      clearInterval(timer);
      document.getElementById('alarm').play();
      showDoneMessage();
      animateDisplay();
      crackEggAnimation();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  totalSeconds = 0;
  originalSeconds = 0;
  updateDisplay();
  updateProgress();
  hideDoneMessage();
}

function updateDisplay() {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById('display').textContent = `${mins}:${secs}`;
}

function updateProgress() {
  const progressBar = document.getElementById('progress');
  if (originalSeconds === 0) {
    progressBar.style.width = '0%';
    return;
  }
  const percentage = ((originalSeconds - totalSeconds) / originalSeconds) * 100;
  progressBar.style.width = `${percentage}%`;
}

function animateDisplay() {
  const display = document.getElementById('display');
  display.classList.add('shake');
  setTimeout(() => display.classList.remove('shake'), 700);
}

function showDoneMessage() {
  const msg = document.getElementById('done-message');
  msg.classList.remove('hidden');
  msg.classList.add('fadeIn');
}

function hideDoneMessage() {
  const msg = document.getElementById('done-message');
  msg.classList.add('hidden');
  msg.classList.remove('fadeIn');
}

/* Efek telur retak */
function crackEggAnimation() {
  const display = document.getElementById('display');
  const crack = document.createElement('div');
  crack.className = 'crack-egg';
  crack.textContent = '🥚💥';
  display.appendChild(crack);
  setTimeout(() => crack.remove(), 1500);
}

/* Buat telur melayang banyak */
window.onload = function () {
  const eggContainer = document.getElementById('eggBackground');
  for (let i = 0; i < 15; i++) {
    const egg = document.createElement('span');
    egg.className = 'floating-egg';
    egg.textContent = '🥚';
    egg.style.left = Math.random() * 100 + '%';
    egg.style.top = Math.random() * 100 + '%';
    egg.style.fontSize = (Math.random() * 2 + 2) + 'rem';
    egg.style.animationDuration = (Math.random() * 5 + 5) + 's';
    egg.style.animationDelay = Math.random() * 5 + 's';
    eggContainer.appendChild(egg);
  }
};
