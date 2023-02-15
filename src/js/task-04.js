let counterValue = 0;

const counterEl = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

console.log(decrementBtn.dataset.action);
console.log(incrementBtn.dataset.action);
console.log(counterEl.textContent);
