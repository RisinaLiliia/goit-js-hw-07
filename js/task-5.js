function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Отримуємо посилання на елементи
  const body = document.body;
  const changeColorButton = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");

  // Додаємо слухач події для кнопки
  changeColorButton.addEventListener("click", () => {
    const randomColor = getRandomHexColor(); // Генеруємо випадковий колір
    body.style.backgroundColor = randomColor; // Змінюємо колір фону <body>
    colorSpan.textContent = randomColor; // Вставляємо значення кольору в <span>
  });
});
