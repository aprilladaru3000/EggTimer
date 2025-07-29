let timer;
let totalSeconds = 0;
let originalSeconds = 0;

// Custom time slider
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
    alert("Pilih preset terlebih dahulu!");
    return;
  }
  clearInterval(timer);
  timer = setInterval(() => {
    totalSeconds--;
    updateDisplay();
    updateProgress();
    if (totalSeconds <= 0) {
      clearInterval(timer);
      document.getElementById('alarm').play();
      showDoneMessage();
      animateDisplay();
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

// Animasi shake pada display
function animateDisplay() {
  const display = document.getElementById('display');
  display.classList.add('shake');
  setTimeout(() => display.classList.remove('shake'), 700);
}

// Notifikasi visual selesai
function showDoneMessage() {
  const msg = document.getElementById('done-message');
  msg.classList.remove('hidden');
  msg.classList.add('animated');
  setTimeout(() => msg.classList.remove('animated'), 1200);
}
function hideDoneMessage() {
  const msg = document.getElementById('done-message');
  msg.classList.add('hidden');
}
