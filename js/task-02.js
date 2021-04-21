const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
  "xfdlfh",
];

// const ingredientsListRef = document
//   .querySelector("#ingredients")
//   .insertAdjacentHTML(
//     "afterbegin",
//     ingredients.map((ing) => `<li>${ing}</li>`).join(" ")
//   );
const ingredientsListRef = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const list = (ingredientsListRef.appendChild(
    document.createElement("li")
  ).innerHTML = el);
});
