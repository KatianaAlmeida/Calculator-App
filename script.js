let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value){
  calculation += value;
  displayResult(calculation);
  localStorage.setItem('calculation', calculation);
}

const paragraphElement = document.querySelector('.js-paragraph');
paragraphElement.innerHTML = localStorage.getItem('calculation');

function displayResult(message){
  const paragraphElement = document.querySelector('.js-paragraph');
  paragraphElement.innerHTML = message;
}