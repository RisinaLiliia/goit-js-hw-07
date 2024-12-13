// Отримуємо всі елементи li з класом 'item' у списку #categories
const categories = document.querySelectorAll("#categories .item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Проходимо по кожній категорії
categories.forEach((category) => {
  // Знаходимо заголовок h2 для поточної категорії
  const title = category.querySelector("h2").textContent;

  // Знаходимо всі елементи li всередині поточної категорії
  const items = category.querySelectorAll(".item-discr .item-input");

  // Виводимо назву категорії та кількість елементів у ній
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items.length}`);
});
