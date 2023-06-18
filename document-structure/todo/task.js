const input = document.getElementById("task__input");
const form = document.getElementById("tasks__form");
const list = document.getElementById("tasks__list");
const add = document.getElementById("tasks__add");

function valid(e) {
  e.preventDefault();
  if (input.value != 0) {
    const newInp = document.createElement("div");
    newInp.classList.add("task");
    const titl = document.createElement("div");
    titl.classList.add("task__title");
    titl.textContent = input.value;
    newInp.append(titl);
    newInp.insertAdjacentHTML(
      "beforeend",
      '<a href="#" class="task__remove">&times;</a>'
    );
    list.insertBefore(newInp, list.firstElementChild);
  }
  input.value = "";

  remInput();
}

add.addEventListener("click", valid);

function remInput() {
  const remove = document.querySelectorAll(".task__remove");
  remove.forEach((el) => {
    el.addEventListener("click", dell);
    function dell() {
      const res = el.closest(".task");
      res.remove();
    }
  });
}
