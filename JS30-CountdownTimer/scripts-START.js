const buttons = Array.from(
  document.querySelectorAll('.timer__controls > button')
);
const countdown = document.querySelector('.display__time-left');
const returnAt = document.querySelector('.display__end-time');
const customForm = document.getElementById('custom');
const alert = document.getElementById('alert');
let interval;

function timeReturn(then) {
  const returnTime = new Date(then).toLocaleTimeString();
  returnAt.textContent = `Will be back at ${returnTime}`;
}

function displayTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;
  countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function timer(seconds) {
  clearInterval(interval);
  displayTime(seconds);
  const now = Date.now();
  const then = now + seconds * 1000;
  timeReturn(then);
  interval = setInterval(() => {
    const timeLeft = Math.floor((then - Date.now()) / 1000);
    if (timeLeft < 0) {
      clearInterval(interval);
      alert('Times up!');
      return;
    }
    displayTime(timeLeft);
  }, 1000);
}

buttons.forEach(button =>
  button.addEventListener('click', e => {
    const seconds = e.target.dataset.time;
    timer(seconds);
  })
);

customForm.addEventListener('submit', e => {
  e.preventDefault();
  const seconds = Number(e.target[0].value) * 60;
  timer(seconds);
});
