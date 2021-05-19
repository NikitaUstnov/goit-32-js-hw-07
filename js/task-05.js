const inputEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  let inputString = e.target.value;

  if (inputString.trim().length === 0 || inputString.length === 0) {
    return (outputNameEl.innerHTML = "незнакомец");
  }

  outputNameEl.innerHTML = e.target.value;
});
