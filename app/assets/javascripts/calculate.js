//query selector for buttons class (include equal/clear/symbols?)
//query selector for div rectangle's element inside div rectangle '0'
//event listener on click event listening for click event inside buttons class
//variable function to store value of the event click and replace 0 with that value (show button click)
//variable function to keep ongoing string of what is occuring
//variable function to calculate total when equal button is pressed (turn string into math equation)
console.log('Javascript loaded');

let buttonValues = [];

let total = [];

let transformation = [];

const calcButtons = document.querySelectorAll('.buttons button');

calcButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    if (['+', '-', '*', '/'].includes(buttonValue)) {
      // If the buttonValue is an operator, do something
      console.log('Operator button clicked');
      // combine buttonValues
      calculateInputValues(buttonValues);
      transformation.push(buttonValue);
      buttonValues.length = 0;
      console.log(transformation);
    } else if (buttonValue === '=') {
      // If the buttonValue is the equal sign, do the calculation
      console.log('Equal button clicked');
      calculateInputValues(buttonValues);
      total = calculateTotal(transformation);
      buttonValues.length = 0;
      transformation.length = 0;
      buttonValues.push(total)
      console.log(transformation);
      console.log(total);
      console.log(buttonValues);
    } else {
      // If the buttonValue is not an operator, do something else
      console.log('Non-operator button clicked');
      //add buttonValues to array
      buttonValues.push(buttonValue);
    }
  });
});

function calculateInputValues(buttonValues) {
  const concatenatedValue = buttonValues.join('');
  const numericValue = Number(concatenatedValue);
  transformation.push(numericValue);
};

function calculateTotal(transformation) {
  console.log(transformation);
  let result = transformation[0];
  for (let i = 1; i < transformation.length; i += 2) {
    const operator = transformation[i];
    const operand = transformation[i + 1];

    if (operator === '+') {
      result += operand;
    } else if (operator === '-') {
      result -= operand;
    } else if (operator === '*') {
      result *= operand;
    } else if (operator === '/') {
      result /= operand;
    }
  };
  console.log(result);
}