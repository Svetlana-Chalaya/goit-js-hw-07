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

galleryContainer.addEventListener("click", onclick);

function onclick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains(".gallery__item")) {
    return;
  }

  console.log(evt.target.dataset.source);
}

console.log(galleryItems);

galleryContainer.addEventListener("Escape", offclick);

function offclick(event) {
  console.log(event);
}

document.addEventListener("keydown", function (offclick) {
  if (offclick.key === "Escape") {
    offclick.hideModal();
  }
});

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src=""${preview}" width="800" height="600">
// `);

// instance.show();
