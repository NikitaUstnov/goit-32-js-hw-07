const refs = {
  inputQuontity: document.querySelector("#quontity"),
  renderBtnEl: document.querySelector('[data-action="render"]'),
  destroyBtnEl: document.querySelector('[data-action="destroy"]'),
  createArea: document.querySelector("#boxes"),
};

refs.inputQuontity.addEventListener("change", (e) => {
  Number(e.target.value);
});

console.log(total);

function createBoxes(amount) {
  for (let i = 0; i <= amount; i += 1) {
    refs.createArea.insertAdjacentElement(
      "beforeend",
      document.createElement("div")
    );
  }
}

// createBoxes(value);

refs.renderBtnEl.addEventListener("click", createBoxes);
