// 1. Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.;

// 2. Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// 3.Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxesEl = document.querySelector("#boxes");
const inputAmount = document.querySelector("#controls>input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div");

    divBox.style.width = `${30 + 10 * i}px`;
    divBox.style.height = `${30 + 10 * i}px`;
    divBox.style.backgroundColor = getRandomHexColor();

    boxesArray.push(divBox);
  }
  return boxesArray;
}

createBtn.addEventListener("click", () => {
  boxesEl.append(...createBoxes(inputAmount.value));
});

destroyBtn.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});
