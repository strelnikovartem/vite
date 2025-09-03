const form = document.querySelector("form");

const obj = {};

form.addEventListener("input", (evt) => {
  const textInput = evt.target;
  console.log(textInput);
});
