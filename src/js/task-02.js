// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("#ingredients");
console.log(ulEl);
const list = [];

ingredients.forEach((ingredientItem) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = ingredientItem;
  list.push(ingredient);
});

ulEl.append(...list);

// ingredients.forEach((ingredientItem) => {
//   const ingredient = document.createElement("li");
//   ingredient.classList.add("item");
//   ingredient.textContent = ingredientItem;
//   ulEl.append(ingredient);
// });
