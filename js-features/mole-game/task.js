const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const hole = document.querySelectorAll(".hole");

let winGame = 0;
let dedGame = 0;

function newGame() {
  winGame = 0;
  dedGame = 0;
  dead.innerHTML = winGame;
  lost.innerHTML = dedGame;
}

hole.forEach((holes) => {
  holes.addEventListener("click", function () {
    const plus = holes.className.includes("hole_has-mole");
    if (plus) {
      winGame++;
      dead.innerHTML = winGame;
    } else {
      dedGame++;
      lost.innerHTML = dedGame;
    }
    if (winGame > 9) {
      alert("Победа!!!");
      newGame();
    } else if (dedGame > 4) {
      alert("Вы проиграли((((");
      newGame();
    }
  });
});
