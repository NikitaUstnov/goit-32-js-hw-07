const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
  "Хлеб",
];

const ingredientsListRef = document
  .querySelector("#ingredients")
  .insertAdjacentHTML(
    "afterbegin",
    ingredients.map((ing) => `<li>${ing}</li>`).join(" ")
  );
