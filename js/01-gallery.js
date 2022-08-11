"use strict";

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

container.addEventListener("click", onclick);

function onclick(evt) {
  console.log(evt);
}

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

// div.gallery;

console.log(galleryItems);
