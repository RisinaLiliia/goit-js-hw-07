const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // Створюємо контейнер
  const container = document.createElement("div");
  container.classList.add("container");

  // Створюємо стилі для контейнера за допомогою JavaScript
  const style = document.createElement("style");
  style.innerHTML = `
    .container {
      border-radius: 8px;
      padding: 24px;
      width: 408px;
      height: 136px;
      background: #fff;
    }
  `;
  document.head.appendChild(style); // Додаємо стилі на сторінку

  // Отримуємо елементи, які потрібно помістити в контейнер
  const input = document.getElementById("name-input");
  const h1 = document.querySelector("h1");

  // Додаємо ці елементи до контейнера
  container.append(input, h1);

  // Отримуємо елемент <p> для того, щоб додати контейнер після нього
  const goBackLink = document.querySelector("p");

  // Додаємо контейнер після елемента <p><a href="./index.html">Go back</a></p>
  goBackLink.insertAdjacentElement("afterend", container);
});
