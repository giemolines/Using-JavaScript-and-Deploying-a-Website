/********* create variables *********/
let dailyRate = 35;
let dayCounter = 0;
let totalCost = 0;
const dayButtons = document.querySelectorAll('.day-selector li');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');

/********* colour change days of week *********/
dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            dayCounter++;
            calculateTotalCost();
        }
    });
});

/********* clear days *********/
clearButton.addEventListener('click', () => {
    dayButtons.forEach(button => {
        button.classList.remove('clicked');
    });
    dayCounter = 0;
    totalCost = 0;
    calculatedCostElement.textContent = totalCost;
});

/********* change rate *********/
halfButton.addEventListener('click', () => {
    dailyRate = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateTotalCost();
});

fullButton.addEventListener('click', () => {
    dailyRate = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculateTotalCost();
});

/********* calculate *********/
function calculateTotalCost() {
    totalCost = dayCounter * dailyRate;
    calculatedCostElement.textContent = totalCost;
}
