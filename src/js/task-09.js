// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetEl = document.querySelector(".widget");
const textColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

btnChangeColor.addEventListener("click", onChangeColor);
function onChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColor.textContent = `${getRandomHexColor()}`;
}
console.log(textColor.textContent);
console.log(widgetEl);
console.log(btnChangeColor);
console.log(getRandomHexColor());
console.log(bodyEl);
