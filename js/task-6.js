// Функція для отримання випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для створення колекції елементів
function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; // Розмір елемента з урахуванням порядку
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); // Випадковий колір фону
    elements.push(box);
  }

  // Очищаємо контейнер та додаємо нові елементи
  boxesContainer.innerHTML = "";
  boxesContainer.append(...elements);
}

// Функція для очищення колекції
function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; // Очищаємо вміст контейнера
}

// Додаємо стилі до контейнера через JavaScript
const style = document.createElement("style");
style.textContent = `
  .container-script {
    border-radius: 8px;
    padding: 24px;
    width: 534px;
    height: 302px;
    background: #fff;
  }

`;
document.head.appendChild(style); // Додаємо стилі до сторінки

// Знаходимо елемент <p><a href="./index.html">Go back</a></p>
const goBackLink = document.querySelector("p a");

// Створюємо контейнер для скрипта
const container = document.createElement("div");
container.classList.add("container-script");

// Отримуємо вже існуючі елементи з HTML
const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");

// Додаємо ці елементи в контейнер
container.appendChild(controls);
container.appendChild(boxes);

// Додаємо контейнер після <p><a href="./index.html">Go back</a></p>
goBackLink.insertAdjacentElement("afterend", container);

// Обробник для кнопки Create
document.querySelector("[data-create]").addEventListener("click", () => {
  const input = document.querySelector("input");
  const amount = parseInt(input.value);

  // Валідація введеного значення
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; // Очищаємо значення в інпуті
  } else {
    alert("Будь ласка, введіть число від 1 до 100");
  }
});

// Обробник для кнопки Destroy
document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
