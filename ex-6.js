//Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
const el = document.querySelector('.str'); 
function inputGusser() {
    // SHOW the input where the user can insert a guess! 
    const userInput = window.prompt('guess a number bewteen 1 and 10'); 
    const num = Math.ceil(Math.random() * 10 ) ; 

    if(userInput === num) {

        
        el.textContent = "matched"; 

    } else {
        el.textContent = 'not matched' ; 
    }
}

inputGusser()