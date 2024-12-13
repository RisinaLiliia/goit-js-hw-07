document.addEventListener("DOMContentLoaded", () => {
  // Отримуємо посилання на <p><a href="./index.html">Go back</a></p>
  const goBackLink = document.querySelector("p");

  // Створюємо контейнер
  const container = document.createElement("div");
  container.classList.add("container-form");

  // Додаємо стилі до контейнера
  const style = document.createElement("style");
  style.textContent = `
    .container-form {
      border-radius: 8px;
      padding: 24px;
      width: 408px;
      height: 256px;
      background: #fff;
    }
  `;
  document.head.appendChild(style); // Додаємо стилі до сторінки

  // Отримуємо форму
  const form = document.querySelector(".login-form");

  // Додаємо форму до контейнера
  container.appendChild(form);

  // Додаємо контейнер після <p><a href="./index.html">Go back</a></p>
  goBackLink.insertAdjacentElement("afterend", container);

  // Слухач для обробки відправлення форми
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    // Перевірка, чи всі поля заповнені
    if (email === "" || password === "") {
      alert("All form fields must be filled in");
      return;
    }

    // Створення об'єкта з введеними даними
    const formData = {
      email: email,
      password: password,
    };

    // Виведення об'єкта з даними в консоль
    console.log(formData);

    // Очищення форми
    form.reset();
  });
});
