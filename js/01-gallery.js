"use strict";

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsGallery = containerGalleryCardsItems(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);

function containerGalleryCardsItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

// galleryContainer.addEventListener("click", onclick);

// function onclick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__item")) {
//     return;
//   }

//   console.log(evt.target.dataset.source);
// }

// console.log(galleryItems);

// galleryContainer.addEventListener("keydown", offclick);

// function offclick(event) {
//   event.preventDefault();
//   const instance = basicLightbox.create(`
//     <img src="${original}" width="800" height="600">
// `);
//   instance.show();
//   console.log(event);
// }

// galleryContainer.addEventListener("Escape", offclickKeydown);

// function offclickKeydown() {
//   preventDefault();
//   if (offclick.key === "Escape") {
//     offclickKeydown();
//   }
// }

// galleryContainer.addEventListener("click", onOffclick);

// function onOffclick(evt) {
//   evt.preventDefault();
//   if (evt.target.dataset.classList.toggle === ".gallery__item") {
//     return;
//     // gallery.show();
//   }
// }
