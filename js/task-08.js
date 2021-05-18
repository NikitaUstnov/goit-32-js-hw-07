const refs = {
  inputQuontity: document.querySelector("#quontity"),
  renderBtnEl: document.querySelector('[data-action="render"]'),
  destroyBtnEl: document.querySelector('[data-action="destroy"]'),
  createArea: document.querySelector("#boxes"),
};
function randomColor() {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}

// function randomSize() {
//   return 50 - 0.5 + Math.random() * (150 - 50 + 1);
// }

function createBoxes() {
  let total = Number(refs.inputQuontity.value);

  for (let i = 0; i < total; i += 1) {
    refs.createArea.insertAdjacentElement(
      "beforeend",
      document.createElement("div")
    ).style.cssText = `
    background-color: ${randomColor()};
    width: 30px;
    height: 30px;
    margin: 10px;
      `;
  }

  refs.inputQuontity.value = "";
}

function destroyBoxes() {
  refs.createArea.innerHTML = "";
}

refs.renderBtnEl.addEventListener("click", createBoxes);

refs.destroyBtnEl.addEventListener("click", destroyBoxes);
