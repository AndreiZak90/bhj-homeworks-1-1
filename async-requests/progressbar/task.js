const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", (e) => {
    const file = Math.round(e.total / e.loaded);
    progress.value = file;
  });
  const formDATA = new FormData(form);
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(formDATA);
});
