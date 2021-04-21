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

// const listElement = ingredients.forEach((ing) => console.log(ing));

const ingredientsListRef = document
  .querySelector("#ingredients")
  .insertAdjacentHTML(
    "beforeend",
    ingredients.forEach((ing) => document.createElement("li"))
  );
// const ingredientListEl = document.createElement("li");

// console.log(ingredientListEl);
