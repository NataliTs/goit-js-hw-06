// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputSlider = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");
const inputSliderValue = inputSlider.value;

inputSlider.addEventListener("input", onInputSlider);

function onInputSlider(event) {
  spanText.style.fontSize = `${event.target.value}px`;
}
