import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

// Додаємо розмітку елементів галереї на основі масиву даних
list.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));

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

// Додавання прослуховувачів подій
list.addEventListener("click", handleImageClick);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keydown", handleKeyPress);

// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true, // Включення підписів до зображень
  captionsData: "alt", // Використання значення атрибуту "alt" для підпису
  captionPosition: "bottom", // Позиція підпису (bottom, top)
  captionDelay: 250, // Затримка перед з'явленням підпису (мс)
});

// Функція-колбек для обробки кліку по зображенню
function handleImageClick(event) {
  event.preventDefault(); // Перешкоджаємо переходу за посиланням

  if (event.target.classList.contains("gallery__image")) {
    // Отримуємо посилання на зображення
    const imageSource = event.target.dataset.source;

    // Відкриття модального вікна з зображенням
    lightbox.open({ source: imageSource });
  }
}

// Функція-колбек для обробки натискання клавіші "Escape" для закриття модального вікна
function handleKeyDown(event) {
  if (event.key === "Escape") {
    lightbox.close(); // Закриття модального вікна
  }
}

// Функція-колбек для обробки натискання клавіш "ArrowLeft" та "ArrowRight" для гортання зображень
function handleKeyPress(event) {
  if (event.key === "ArrowLeft") {
    lightbox.prev(); // Перехід до попереднього зображення
  }

  if (event.key === "ArrowRight") {
    lightbox.next(); // Перехід до наступного зображення
  }
}
