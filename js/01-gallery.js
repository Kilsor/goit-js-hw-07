import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Генеруємо розмітку для кожного елемента галереї і додаємо її до списку
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
            data-source="${item.original}"
          />
        </a>
      </li>
    `
  )
  .join("");

// Додаємо обробники подій кліку та натискання на клавішу
galleryList.addEventListener("click", openModal);
document.addEventListener("keydown", handleKeyPress);

// Функція для відкриття модального вікна
function openModal(event) {
  event.preventDefault();
  const imageUrl = event.target.dataset.source;
  if (imageUrl) {
    modal = basicLightbox.create(`<img src="${imageUrl}">`);
    modal.show();
  }
}

let modal; // Змінна для збереження модального об'єкту

// Функція для обробки натискання на клавішу та закриття модалки
function handleKeyPress(event) {
  if (event.code === "Escape" && modal) {
    modal.close();
  }
}
