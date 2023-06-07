const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveal.length; i++) {
    let element = reveal[i];
    let el = element.getBoundingClientRect();
    if (el.top < window.innerHeight) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  }
});
