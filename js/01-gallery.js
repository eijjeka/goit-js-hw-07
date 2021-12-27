import { galleryItems } from './gallery-items.js';
// Change code below this line

const parentEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
`<div class="gallery__item">
<a class="gallery__link" href="${original}"
onclick="event.preventDefault()">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</div>`).join('');

parentEl.innerHTML = markup;


const onGalleryItem = event => {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`).show()

}

const onClickEscape = event => {
    if (event.key !== 'Escape') {
        return
    }
    const div = document.querySelector('.basicLightbox');
    div.classList.remove('basicLightbox--visible');
}
parentEl.addEventListener('click', onGalleryItem);
window.addEventListener('keydown', onClickEscape);

