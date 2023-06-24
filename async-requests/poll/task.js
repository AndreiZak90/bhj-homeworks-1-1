const titleText = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");
const buttonn = Array.from(document.querySelectorAll(".poll__answer"));

function fun() {
  fetch("https://students.netoservices.ru/nestjs-backend/poll")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const one = data.data;
      const dataText = one.title;
      const dataList = one.answers;
      titleText.textContent = dataText;
      for (let i = 0; i < dataList.length; i++) {
        const but = document.createElement("button");
        but.classList.add("poll__answer");
        but.textContent = dataList[i];
        answers.append(but);
        but.addEventListener("click", () => {
          alert("Спасибо, ваш голос засчитан!");
        });
      }
    });
}
fun();
