const form = document.querySelector("form");

form.addEventListener("input", (evt) => {
  console.log(evt.target.value);
});
