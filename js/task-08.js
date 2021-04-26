const refs = {
  inputQuontity: document.querySelector("#quontity"),
  renderBtnEl: document.querySelector('[data-action="render"]'),
  destroyBtnEl: document.querySelector('[data-action="destroy"]'),
  createArea: document.querySelector("#boxes"),
};

const divs = refs.inputQuontity.addEventListener("input", getQuontity);

function getQuontity(e) {
  let total = 0;

  return (total += Number(e.target.value));
}

console.log(divs);

function createBoxes(amount) {
  for (let i = 0; i <= amount; i += 1) {
    refs.createArea.insertAdjacentElement(
      "beforeend",
      document.createElement("div")
    );
  }
}



refs.renderBtnEl.addEventListener("click", createBoxes);
