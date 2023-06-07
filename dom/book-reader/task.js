const size = document.querySelectorAll(".font-size");
const content = document.querySelector(".book");

size.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();

    let sizeAttr = elem.dataset.size;
    content.classList = "book";
    size.forEach((e) => e.classList.remove("font-size_active"));
    if (sizeAttr) {
      content.classList.add("book_fs-" + sizeAttr);
      elem.classList.add("font-size_active");
    } else {
      elem.classList.add("font-size_active");
      return;
    }
  });
});
