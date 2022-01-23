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

parentEl.insertAdjacentHTML('beforeend', markup);


function onImgContainerClick(event) {
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(
        `
        <img src="${event.target.dataset.source}" width="800" height="600">
        `,
        {
            onShow: (instance) => {
                window.addEventListener("keydown", onClickEscape);
            },
            onClose: (instance) =>
            window.removeEventListener("keydown", onClickEscape),
        }
        );
        const onClickEscape = (event) => {
            if (event.key === "Escape") {
                instance.close();
            }
        };
        instance.show();
    }
    
    parentEl.addEventListener('click', onImgContainerClick);

////////////////////////

// Change code below this line
// console.log(galleryItems);

// const mainGalleryList = document.querySelector('.gallery');

// mainGalleryList.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));


// function createGalleryItemsMarkup(items) {
//     return items.map(({ preview, original, description }) => {
//         return `
//         <div class="gallery__item">
//         <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
//         <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//         />
//         </a>
//         </div>
//         `}).join('');
// }
    
//     mainGalleryList.addEventListener('click', onImageClick);

// function onImageClick(event) {
//     if (event.target.nodeName !== 'IMG') {
//         return;
//     }
//     const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
//     `);
//     instance.show();
// }
    
    // const onGalleryItem = event => {
    //     if (event.target.nodeName !== 'IMG') {
    //         return;
    //     }
    //     const instance = basicLightbox.create(`
    //     <img src="${event.target.dataset.source}" width="800" height="600">
    // `).show()
    
    // }
    
// const onClickEscape = event => {
//     if (event.key !== 'Escape') {
//         return
//     }
//     const div = document.querySelector('.basicLightbox');
//     div.classList.remove('basicLightbox--visible');
// }

// window.addEventListener('keydown', onClickEscape);

// const instance = basicLightbox.create(
// `<img class='${event.target.dataset.source}' width="800" height="600">`,
// {
// onShow: (instance) => {
// window.addEventListener("keydown", onKeydown);
// },
// onClose: (instance) => {
// window.removeEventListener("keydown", onKeydown);
// },
// }
// );