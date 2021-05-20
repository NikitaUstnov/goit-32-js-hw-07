const inputEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  let inputString = e.target.value;

  if (inputString.trim().length !== "") {
    outputNameEl.textContent = inputString;
  }
  if (inputString.trim().length === 0) {
    outputNameEl.textContent = "незнакомец";
  }
});
