'use strict';

const populationsMap = document.querySelectorAll('.population');

const numbersPopulation = [...populationsMap].map((element) => {
  return Number(element.textContent.replaceAll(',', ''));
});

const totalPopulation = numbersPopulation.reduce(
  (acc, currentValue) => acc + currentValue,
  0,
);
const averagePopulation = Math.round(
  totalPopulation / numbersPopulation.length,
);

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent =
  averagePopulation.toLocaleString('en-US');
