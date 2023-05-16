const clicker__counter = document.getElementById("clicker__counter");

const cookie = document.getElementById("cookie");

let count = 0;

cookie.onclick = function () {
  cookie.width = ++clicker__counter.textContent % 2 ? 250 : 200;
};
