const rotator = document.querySelectorAll(".rotator__case");

let summ = 0;
const lastElement = rotator.length - 1;

function loop() {
  let nextElement = summ + 1;
  if (nextElement > lastElement) nextElement = 0;
  setTimeout(function () {
    rotator[nextElement].classList.add("rotator__case_active");
    rotator[summ].classList.remove("rotator__case_active");
    summ++;
    if (summ > nextElement) summ = 0;
    loop();
  }, 1000);
}
loop();
