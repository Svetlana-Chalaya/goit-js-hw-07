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
  const isGalleryEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryEl) {
    return;
  }
  const variable = evt.target.dataset.source;
  console.log(variable);

  const instance = basicLightbox.create(`
    <img src="${variable}" width="800" height="600">
`);
  instance.show();
}

galleryContainer.addEventListener("Escape", offclickKeydown);

function offclickKeydown() {
  preventDefault();
  if (offclickKeydown.key === "Escape") {
    offclickKeydown();
  }
}

// galleryContainer.addEventListener("Escape", offclick);
// function offclick(event) {
//   console.log(event);
// }
// const instance = basicLightbox.create(`
//     <img src=""${preview}" width="800" height="600">
// `);
// instance.show();

// galleryContainer.addEventListener("click", onclick);

// function onclick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__item")) {
//     return;
//   }

//   const resourceUrl = evt.target.dataset.source;
//   console.log(resourceUrl);
// }

// galleryContainer.addEventListener("click", offclick);

// function offclick(event) {
//   event.preventDefault();
//   const instance = basicLightbox.create(`
//     <img src="gallery__item" width="800" height="600">
// `);
//   instance.show();
//   console.log(event);
// }

// galleryContainer.addEventListener("click", onOffclick);

// function onOffclick() {
//   if (document.getElementById("styleSwitch").checked) {
//     document.getElementById("gallery").classList.add("custom");
//     document.getElementById("exampleModal").classList.add("custom");
//   } else {
//     document.getElementById("gallery").classList.remove("custom");
//     document.getElementById("exampleModal").classList.remove("custom");
//   }
// }

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

// galleryContainer.addEventListener("click", onOffclick);

// function onOffclick(evt) {
//   evt.preventDefault();
//   if (evt.target.dataset.classList.toggle === ".gallery__item") {
//     return;
//     // gallery.show();
//   }
// }
