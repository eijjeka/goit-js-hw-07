import { galleryItems } from './gallery-items.js';
// Change code below this line
const parentEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}" onclick="event.preventDefault()">
  <img class="gallery__image" src="${preview}"  alt="Image description" title = "${description}" />
</a>`).join('');

parentEl.innerHTML = markup;

let lightbox =  new SimpleLightbox('.gallery a', { /* options */ });
