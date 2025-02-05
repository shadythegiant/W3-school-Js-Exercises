//Write a JavaScript program to calculate multiplication and division of two numbers (input from the user) Sample form :

const firstNum  = document.querySelector('.Number1'); 
const secondNum = document.querySelector('.Number2')
const multiplyButton = document.querySelector('.multiply')
const devideButton = document.querySelector('.divide'); 
const result = document.querySelector('.result'); 


function multiply(e) {
    e.preventDefault(); 
    const num1 = +firstNum.value;
    const num2 = +secondNum.value;
    
    const total = num1 * num2; 
    if (total === NaN) return;

    result.innerHTML = 'Result :' + total; 
 
}

function devid(e) {
   e.preventDefault(); 

    const num1 = +firstNum.value;
    const num2 = +secondNum.value;
    
    const total = num1 / num2; 

    if (total === NaN) {
        return null
    } else result.innerHTML = 'Result :' + total; 
 
    
 
}


multiplyButton.addEventListener('click', multiply)
devideButton.addEventListener('click', devid)