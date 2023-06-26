import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

// Додаємо розмітку елементів галереї на основі масиву даних
list.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));
list.addEventListener("click", openModal);
list.addEventListener("keydown", handleKeyPress);

// Функція для створення розмітки елементів галереї
function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            data-source="${original}"
          />
        </a>
      </li>`
    )
    .join("");
}

// Функція для відкриття модального вікна
function openModal(event) {
  event.preventDefault();
  const imageUrl = event.target.dataset.source;
  if (imageUrl) {
    // Створюємо об'єкт модального вікна та відображаємо його
    modal = basicLightbox.create(`<img src="${imageUrl}">`);
    modal.show();
  }
}

let modal; // Змінна для збереження об'єкту модального вікна

// Функція для обробки натискання клавіші та закриття модального вікна
function handleKeyPress(event) {
  if (event.code === "Escape" && modal) {
    // Закриваємо модальне вікно, якщо воно відкрите
    modal.close();
  }
}
