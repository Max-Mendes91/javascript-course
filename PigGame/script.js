'use strict';

// Selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scrore0El = document.querySelector('#score--0');
const scrore1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


//Game state variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true; //state variable

// Challange code for the pig game WRITTEN BY ME
function init(){
    player0El.classList.remove(`player--winner`)
    player0El.classList.add('player--active');
    player1El.classList.remove(`player--winner`)
    player1El.classList.remove('player--active');
    scrore0El.textContent = 0;
    scrore1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores[0] = 0;
    scores[1] = 0;
}
//reset the game 
btnNew.addEventListener('click', init);


// <---------CODE BELLOW WRITTEN WITH JONAS NOT MADE BY ME ------>


// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;// building ID name
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        //1. Add current score of the active player
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore; 
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2. Check score is >=100
        if (scores[activePlayer] >= 100) {
            //Finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);

        } else {//Switch to next player
            switchPlayer();
        }
    }
})

init()