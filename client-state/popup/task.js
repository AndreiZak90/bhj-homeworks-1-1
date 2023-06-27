const modal = document.getElementById("subscribe-modal");
const closeButton = document.querySelector(".modal__close");
const itsClose = document.cookie.includes("closeModal");

const closeModal = () => {
  modal.classList.remove("modal_active");
  document.cookie = "closeModal = true";
};

if (!itsClose) {
  modal.classList.add("modal_active");
}

closeButton.addEventListener("click", closeModal);
