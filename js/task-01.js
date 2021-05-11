const categoriesList = document.querySelector("#categories");
const categoriesListItem = document.querySelectorAll(".item");

categoriesListItem.forEach((el) => {
  console.log(
    `Категрия: ${el.children[0].textContent}\nКоличество элементов: ${el.children[1].childElementCount}`
  );
});
