const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];
const listOfImages = document.querySelector("ul");
function createGallary(arr) {
  const arrayOfImg = arr
    .map(({ url, alt }) => {
      return `<li class="gallery-item"><img class="gallery-item-img" src="${url}" alt ="${alt}" width="300"/></li>`;
    })
    .join("");
  console.log(arrayOfImg);
  listOfImages.insertAdjacentHTML("beforeend", arrayOfImg);
}
console.log(createGallary(images));

// const topList = document.createElement("li");
// topList.classList.toggle("gallery-item");
// const bottomList = document.createElement("li");
// bottomList.classList.toggle("gallery-item");
// listOfImages.appendChild(topList);
// listOfImages.appendChild(bottomList);
// const firstUl = document.createElement("ul");
// firstUl.classList.toggle("gallery-item-list");
// const secondUl = document.createElement("ul");
// secondUl.classList.toggle("gallery-item-list");
// topList.append(firstUl);
// bottomList.append(secondUl);
// createGallary(images).forEach((one, index) => {
//   if (index <= 2) {
//     const li = document.createElement("li");
//     li.classList.toggle("gal-item-list-item");
//     li.appendChild(one);
//     firstUl.appendChild(li);
//   } else if (index > 2) {
//     const li = document.createElement("li");
//     li.classList.toggle("gal-item-list-item");
//     li.appendChild(one);
//     secondUl.appendChild(li);
//   }
// });
// console.log(listOfImages);
//<li class="gallery-item">
//   <ul class="gallery-item-list">
//     <li class="gallery-item-list-item"><img class="list-item-img" src="${picture.src}" alt="${image.alt}"></li>
//     <li class="gallery-item-list-item"><img class="list-item-img" src="${picture.src}" alt="${image.alt}"></li>
//     <li class="gallery-item-list-item"><img class="list-item-img" src="${picture.src}" alt="${image.alt}"></li>
//   </ul>
// </li>
// <li class="gallery-item">
//   <ul class="gallery-item-list">
//     <li class="gallery-item-list-item"><img class="list-item-img" src="${picture.src}" alt="${image.alt}"></li>
//     <li class="gallery-item-list-item"><img class="list-item-img" src="${picture.src}" alt="${image.alt}"></li>
//     <li class="gallery-item-list-item"><img class="list-item-img" src="${picture.src}" alt="${image.alt}"></li>
//   </ul>
// </li>
