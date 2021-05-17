const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// первый способ
// const galleryList = document
//   .querySelector("#gallery")
//   .insertAdjacentHTML(
//     "afterBegin",
//     images
//       .map(
//         ({ url, alt }) =>
//           `<li><img src="${url}" width="300" alt="${alt}"/></li>`
//       )
//       .join(" ")
//   );

// второй способ
const galleryList = document.querySelector("#gallery");

const makeGalleryList = ({ url, alt }) => {
  const listItem = document.createElement("li");
  console.log(listItem);
  const imgItem = document.createElement("img");
  imgItem.src = url;
  imgItem.alt = alt;
  imgItem.width = 150;

  listItem.appendChild(imgItem);

  return listItem;
};

const renderCard = images.map(makeGalleryList);
galleryList.append(...renderCard);
