'use strict';

const getRandomIntegerInRange = (minimumValue, maximumValue) => {
  const rangeSize = maximumValue - minimumValue;
  return minimumValue + Math.trunc(Math.random() * (rangeSize + 1));
};

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const maximumValue = 20;
const minimumValue = 1;
let correctNumber = getRandomIntegerInRange(minimumValue, maximumValue);
let score = maximumValue;
let highScore = 0;

function againEventHandler() {
  score = maximumValue;
  correctNumber = getRandomIntegerInRange(1, 20);

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = null;
}

const checkEventHandler = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Please insert a number 🔢');
  } else if (guess !== correctNumber) {
    setHTMLElementsWhenGuessIsDifferentThanScore(guess);
  } else {
    setHTMLElementsWhenGameIsWon();
  }

  document.querySelector('.score').textContent = score;
};

const setHTMLElementsWhenGameIsWon = function () {
  highScore = highScore >= score ? highScore : score;

  displayMessage('Correct Number! 🙌');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '25rem';
  document.querySelector('.number').textContent = correctNumber;
  document.querySelector('.highscore').textContent = highScore;
};

const setHTMLElementsWhenGuessIsDifferentThanScore = function (guess) {
  if (score > 1) {
    displayMessage(guess > correctNumber ? 'To high' : 'To low');
    score--;
  } else {
    score = 0;
    displayMessage('You lose!');
  }
};

document.querySelector('.check').addEventListener('click', checkEventHandler);
document.querySelector('.again').addEventListener('click', againEventHandler);
