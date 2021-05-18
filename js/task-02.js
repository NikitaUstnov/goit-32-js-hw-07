const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const ingredientsListRef = document
//   .querySelector("#ingredients")
//   .insertAdjacentHTML(
//     "afterbegin",
//     ingredients.map((ing) => `<li>${ing}</li>`).join(" ")
//   );
const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((el) => {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = el;

  return ingredientElement;
});

console.log(ingredientsList);
ingredientsListRef.append(...ingredientsList);
