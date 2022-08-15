import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const cardsGallery = containerGalleryCardsItems(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);

function containerGalleryCardsItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
          <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title = "how long takes the slide animation"/>
</a>
</li>`;
    })
    .join("");
}
console.log(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {});

lightbox.show();

// const titleEl = document.querySelector("title");
// titleEl.insertAdjacentHTML(
//   "beforeend",
//   '<a href="">how long takes the slide animation</a>'
// );

// , animationSpeed = 250
// , {}

// , function () {
// Do something…
// galleryContainer.addEventListener("click", onclick);
// function onclick(evt) {
//   evt.preventDefault();
//   const isGalleryEl = evt.target.classList.contains("gallery__image");
//   if (!isGalleryEl) {
//     return;
//   }
//   const variable = evt.target.dataset.source;
//   console.log(variable);

//   const instance = simpleLightbox.create(`
//     <img src="${variable}" width="800" height="600">
// `);
//   instance.show();
// }

// data-source="${original}"
