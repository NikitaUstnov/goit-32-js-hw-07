const inputEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  if (!e.target.value) {
    return (outputNameEl.innerHTML = "незнакомец");
  }

  outputNameEl.innerHTML = e.target.value;
});
