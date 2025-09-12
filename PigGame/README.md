# Pig Game

A two-player dice game built with HTML, CSS, and vanilla JavaScript.

## How to Run

- Open `index.html` in your browser.
- No build steps or servers required.

## Gameplay Rules (Quick)

- Players take turns rolling a die.
- Roll 2–6: the value is added to your current turn score.
- Roll 1: you lose your current turn score and it becomes the other player's turn.
- Click "Hold" to add the current turn score to your total and pass the turn.
- First to reach 100 points wins.

## What I implemented (challenge)

The following code was written by me as the challenge solution:

- Full game reset logic and wiring to the New Game button
  - Function `init()` to restore the initial game state.
  - Resets UI and state: scores, current scores, active player, winner/active classes, dice visibility, and `playing` flag.
  - Binds the New Game button to call `init()`.

```js
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
```

## Instructor‑guided code (with Jonas)

The remaining logic was implemented while following the instructor:

- Rolling the dice, updating the current score, and switching players on a 1
- Holding to add current score to total score
- Determining the winner at 100+ points and updating UI
- Helper `switchPlayer()` and DOM selections

```js
// <---------CODE BELLOW WRITTEN WITH JONAS NOT MADE BY ME ------>

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
        } else {
            switchPlayer();
        }
    }
});
```

## Files

- `index.html` — Markup for the game UI
- `style.css` — Styles
- `script.js` — Game logic (challenge and instructor‑guided sections annotated in comments)

