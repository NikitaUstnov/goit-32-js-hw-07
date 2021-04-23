const refs = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  counterUiValue: document.querySelector("#value"),
};

let total = 0;

refs.increment.addEventListener(
  "click",
  () => (refs.counterUiValue.innerHTML = total += 1)
);
refs.decrement.addEventListener(
  "click",
  () => (refs.counterUiValue.innerHTML = total -= 1)
);
