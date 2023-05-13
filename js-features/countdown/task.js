const numberTime = document.getElementById("timer");

let count = 59;
let message = "Вы победили в конкурсе!";
let timer = setInterval(() => {
  count--;
  numberTime.innerHTML = count;
  if (count <= 0) {
    result = alert(message);
    clearInterval(timer);
  }
}, 1000);
