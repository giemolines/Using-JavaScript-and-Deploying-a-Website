/********* create variables *********/
var dailyRate = 35;
var dayCounter = 0;
var totalCost = 0;
var dayButtons = document.querySelectorAll('.day-selector li');
var fullButton = document.getElementById('full');
var halfButton = document.getElementById('half');
var calculatedCostElement = document.getElementById('calculated-cost');
var clearButton = document.getElementById('clear-button');

/********* colour change days of week *********/
dayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            dayCounter++;
            calculateTotalCost();
        }
    });
});

/********* clear days *********/
clearButton.addEventListener('click', function() {
    dayButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    dayCounter = 0;
    totalCost = 0;
    calculatedCostElement.textContent = totalCost;
});

/********* change rate *********/
halfButton.addEventListener('click', function() {
    dailyRate = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateTotalCost();
});

fullButton.addEventListener('click', function() {
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
