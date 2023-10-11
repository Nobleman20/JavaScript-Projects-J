'use strict';

let messageEl = document.querySelector('.message');
let winColor = document.querySelector('body');
let winSize = document.querySelector('.number');
let numberEl = document.querySelector('.number');
let scoreEl = document.querySelector('.score');
let highScore = 0;

let startScore = 20;
let secretNumber = Math.floor(Math.random() * 20 + 1);

let checkEl = document.querySelector('.check');
checkEl.addEventListener('click', getGuess);

// What happens when the check button is clicked
function getGuess() {
  //get the guess element
  let guessEl = Number(document.querySelector('.guess').value);
  console.log(guessEl, typeof guessEl);

  // when there is no guess
  if (!guessEl) {
    messageEl.textContent = 'No number';

    //when player wins
  } else if (guessEl === secretNumber) {
    messageEl.textContent = 'Correct number!';
    numberEl.textContent = secretNumber;

    // color turns green when there is a win
    winColor.style.backgroundColor = '#60b347';

    // size grows bigger when player wins
    winSize.style.width = '30rem';

    if (startScore > highScore) {
      highScore = startScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is too high
  } else if (guessEl > secretNumber) {
    if (startScore > 1) {
      messageEl.textContent = 'Too high!';
      startScore--;
      scoreEl.textContent = startScore;
    } else {
      messageEl.textContent = 'you lose!';
      scoreEl.textContent = 0;
    }

    // when guess is too low
  } else if (guessEl < secretNumber) {
    if (startScore > 1) {
      messageEl.textContent = 'Too low!';
      startScore--;
      scoreEl.textContent = startScore;
    } else {
      messageEl.textContent = 'you lose!';
      scoreEl.textContent = 0;
    }
  }
}

document.querySelector('.again').addEventListener('click', restartGame);

function restartGame() {
  // Restore initial values of startScore and secretNumber
  startScore = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);

  // Restore the initial conditions of the message
  messageEl.textContent = 'Start guessing...';

  // Restore the original background color (#222)
  winColor.style.backgroundColor = '#222';

  // Restore the original number width (15rem)
  winSize.style.width = '15rem';

  // Clear the input field
  document.querySelector('.guess').value = '';

  numberEl.textContent = '?';

  // Reset the score
  scoreEl.textContent = startScore;
}
