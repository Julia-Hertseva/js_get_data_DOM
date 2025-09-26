'use strict';

const populationsMap = document.querySelectorAll('.population');

const numbersPopulation = [...populationsMap]
  .map((element) => {
    const normalized = element.textContent.trim().split(',').join('');
    const num = Number(normalized);

    return Number.isFinite(num) ? num : null;
  })
  .filter((num) => num !== null);

const validNumbers = numbersPopulation.filter(Number.isFinite);
const totalPopulation = validNumbers.reduce(
  (acc, currentValue) => acc + currentValue,
  0,
);

const averagePopulation =
  validNumbers.length > 0
    ? Math.round(totalPopulation / validNumbers.length)
    : 0;

const totalPopulationElement = document.querySelector('.total-population');

if (totalPopulationElement) {
  totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');
}

const averagePopulationElement = document.querySelector('.average-population');

if (averagePopulationElement) {
  averagePopulationElement.textContent =
    averagePopulation.toLocaleString('en-US');
}
