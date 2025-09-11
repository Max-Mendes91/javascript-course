'use strict';


/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // get the value of input
*/

// state variable - all the data that is relevant for the app

let highScore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}


// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

*/
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    displayScore(score);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    displayNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})


// <-----code bellow done with Jonas------>

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when is no input
    if (!guess) {
        displayMessage('🛑 No number')

    // when player wins    
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!')
        displayNumber(secretNumber);// state variable - all the data that is relevant for the app



        // set css styles when player wins 
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        

        // implement the highscore to stay in the result saved
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    //when guess is wrong  (cleaning code with the dry rule - NO REPEATED CODE) 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 To High!' : '📉 To Low!')
            displayScore(score--);
        } else {
            displayMessage('💥 You lost the game')
            displayScore('0');
        }
    }
});