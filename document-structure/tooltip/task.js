const has = document.querySelectorAll(".has-tooltip");

has.forEach((e) => {
  const rect = e.getBoundingClientRect();
  const tool = document.createElement("div");
  tool.classList.add("tooltip");
  tool.style.left = `${rect.x}px`;
  tool.textContent = e.title;
  e.insertAdjacentElement("beforeend", tool);
  e.addEventListener("click", () => {
    tool.classList.add("tooltip_active");
    e.preventDefault();
  });
});
