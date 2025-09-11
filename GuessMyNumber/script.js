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
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
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
        document.querySelector('.message').textContent = '🛑 No number';

        // when player wins    
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;// state variable - all the data that is relevant for the app



        // set css styles when player wins 
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        // implement the highscore to stay in the result saved 
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is to high    
    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📈 To High!'
            document.querySelector('.score').textContent = score--;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game'
            document.querySelector('.score').textContent = 0;
        }

        // when guess is to low    
    } else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📉 To Low!'
            document.querySelector('.score').textContent = score--;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game'
            document.querySelector('.score').textContent = 0;
        }
    }
});




