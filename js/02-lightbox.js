import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Generate the markup for each gallery item and add it to the list
const galleryList = document.querySelector(".gallery");
galleryList.innerHTML = galleryItems
  .map(
    (item) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>
      </li>
    `
  )
  .join("");

// Initialize SimpleLightbox with options
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Add event listener for 'beforeShow' event to add custom caption styling
lightbox.on("beforeShow.simplelightbox", function (instance) {
  const caption = instance.$caption;
  caption.addClass("custom-caption");
});

// Add event listener for 'shown.simplelightbox' event to remove custom caption styling
lightbox.on("shown.simplelightbox", function (instance) {
  const caption = instance.$caption;
  setTimeout(function () {
    caption.removeClass("custom-caption");
  }, 250);
});
