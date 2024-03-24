let time = Number((document.getElementById('timer').textContent));
const timer = setInterval(() => {
  const countdownElement = document.getElementById('timer');
  if (time > 0) {
    countdownElement.textContent = `${time--}`;
  } else {
    clearInterval(timer);
    alert('Вы победили в конкурсе');
  }
}, 1000);
