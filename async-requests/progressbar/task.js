const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", (event) => {
    const file = Math.round(event.total / event.loaded);
    progress.value = file;
  });
  const formDATA = new FormData(form);
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(formDATA);
});
