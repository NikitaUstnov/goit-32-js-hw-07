const refs = {
  inputQuontity: document.querySelector("#quontity"),
  renderBtnEl: document.querySelector('[data-action="render"]'),
  destroyBtnEl: document.querySelector('[data-action="destroy"]'),
  createArea: document.querySelector("#boxes"),
};
function randomColor() {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}

function createBoxes(amount) {
  let total = Number(refs.inputQuontity.value);

  for (let i = 0; i < total; i++) {
    refs.createArea.insertAdjacentElement(
      "beforeend",
      document.createElement("div")
    ).style.cssText = `
       background-color: ${randomColor()};
    width: 100px;
    height: 100px;
      `;
  }
}

function destroyBoxes() {
  refs.createArea.innerHTML = "";
}

refs.renderBtnEl.addEventListener("click", createBoxes);

refs.destroyBtnEl.addEventListener("click", destroyBoxes);
