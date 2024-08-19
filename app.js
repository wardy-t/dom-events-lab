

/*
As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.
*/



//FIRST ATTEMPT

/*-------------------------------- Constants --------------------------------*/

/*
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
/*
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      //console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
      const buttonValue = event.target.innerText;
        if (!isNaN(buttonValue) || buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      display.textContent += buttonValue; 
  }     else if (buttonValue === 'C') {
      display.textContent = '';
  }     else if (buttonValue === '=') {
          try {
          display.textContent = eval(display.textContent);
          }
          catch (e) {
          display.textContent = 'Error';
      }
  }
});


    
  
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);

      // Example
      if (event.target.innerText === '*') {
        // Do something with this operator
      }
        // Example
    if (event.target.classList.contains('number')) {
      // Do something with a number
    }
  
  });
});
/*-------------------------------- Functions --------------------------------*/

//BUGS: Seems fine!



//SECOND ATTEMPT


const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

let firstNumber ='';
let secondNumber ='';
let operator ='';

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {

const buttonValue = event.target.innerText;
    if (display.innerText ==='0') {
      display.innerText = buttonValue;
    } else {
      display.innerText += buttonValue;
    } if (buttonValue ==='C') {
      firstNumber = '';
      secondNumber = '';
      operator = '';
      display.innerText = ''; 
    
    } if (event.target.classList.contains ('number')) {
        if (operator ==='') {
        firstNumber += buttonValue;
        display.innerText = firstNumber;
      } else {
        secondNumber += buttonValue;
        display.innerText = secondNumber;
        } 
    
    } if (['+', '-', '/', '*'].includes(buttonValue)) {  //must review this code :)
        operator = buttonValue;
        
    
    } else if (buttonValue === '=') {
        let result;
          if (operator ==='+') {
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
          } else if (operator ==='-') {
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
          } else if (operator ==='/') {
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
          } else if (operator ==='*') {
            result = parseFloat(firstNumber) * (secondNumber);
          } 
          display.innerText = result;  
    }

  });
});


//BUGS: Does not show full sum on display prior to outputting result. Can't compute more than two numbers. 
