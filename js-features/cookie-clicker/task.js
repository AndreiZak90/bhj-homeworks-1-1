const clicker__counter = document.getElementById("clicker__counter");

const cookie = document.getElementById("cookie");

let count = 0;

cookie.onclick = function () {
  if (cookie.width === 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }
  clicker__counter.textContent = count++;
};
