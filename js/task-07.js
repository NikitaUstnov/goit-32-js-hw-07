const rangeredTextEl = document.querySelector("#text");
const inptRangerEl = document
  .querySelector("#font-size-control")
  .addEventListener("input", (e) => {
    rangeredTextEl.style.fontSize = e.target.value + "px";
  });
