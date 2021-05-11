const categoriesListItem = document
  .querySelectorAll(".item")
  .forEach((el) =>
    console.log(
      `Категрия: ${el.children[0].textContent}\nКоличество элементов: ${el.children[1].childElementCount}`
    )
  );
