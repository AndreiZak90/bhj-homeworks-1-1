document.addEventListener("DOMContentLoaded", () => {
  const Form = document.getElementById("signin__form");
  const welcome = document.getElementById("welcome");
  const user = document.getElementById("user_id");
  const signin = document.getElementById("signin");

  const userId = localStorage.getItem("user_id");
  if (userId) {
    welcome.classList.remove("welcome_active");
    user.textContent = userId;
  }

  Form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(Form);

    fetch(Form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ошибка HTTP: " + response.status);
        }
      })
      .then((data) => {
        if (data.success) {
          const userIdnew = data.user_id;
          localStorage.setItem("user_id", userId);
          signin.classList.remove("signin_active");
          welcome.classList.add("welcome_active");
          user.textContent = userIdnew;
        } else {
          alert("Неверный логин/пароль");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Произошла ошибка при отправке запроса");
      });
  });
});
