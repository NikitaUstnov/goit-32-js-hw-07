const categoriesList = document.querySelector("#categories");
const categoriesListItem = document.querySelectorAll(".item");

categoriesListItem.forEach((el) => {
  console.log("категрия", el.children[0].textContent);
  console.log("Количество элементов", el.children[1].childElementCount);
});
