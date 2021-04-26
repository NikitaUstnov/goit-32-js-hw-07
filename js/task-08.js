const refs = {
  inputQuontity: document.querySelector("#quontity"),
  renderBtnEl: document.querySelector('[data-action="render"]'),
  destroyBtnEl: document.querySelector('[data-action="destroy"]'),
  createArea: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  let total = Number(refs.inputQuontity.value);

  for (let i = 0; i < total; i++) {
    refs.createArea.insertAdjacentElement(
      "beforeend",
      document.createElement("div")
    );
  }
}

function destroyBoxes() {
  refs.createArea.innerHTML = "";
}

refs.renderBtnEl.addEventListener("click", createBoxes);

refs.destroyBtnEl.addEventListener("click", destroyBoxes);
