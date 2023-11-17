'use strict';

const getRandomIntegerInRange = (minimumValue, maximumValue) => {
  const rangeSize = maximumValue - minimumValue;
  return minimumValue + Math.trunc(Math.random() * (rangeSize + 1));
};

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
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = null;
}

const checkEventHandler = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please insert a number 🔢';
  } else if (guess > correctNumber) {
    setHTMLElementsWhenGuessIsHigherThanScore();
  } else if (guess < correctNumber) {
    setHTMLElementsWhenGuessIsLowerThanScore();
  } else {
    setHTMLElementsWhenGameIsWon();
  }

  document.querySelector('.score').textContent = score;
};

const setHTMLElementsWhenGameIsWon = function () {
  highScore = highScore >= score ? highScore : score;

  document.querySelector('.message').textContent = 'Correct Number! 🙌';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '25rem';
  document.querySelector('.number').textContent = correctNumber;
  document.querySelector('.highscore').textContent = highScore;
};

const setHTMLElementsWhenGuessIsHigherThanScore = function () {
  if (score > 1) {
    document.querySelector('.message').textContent = 'To high!';
    score--;
  } else if (score === 1) {
    score--;
    document.querySelector('.message').textContent = 'You lose!';
  } else document.querySelector('.message').textContent = 'You lose!';
};

const setHTMLElementsWhenGuessIsLowerThanScore = function () {
  if (score > 1) {
    document.querySelector('.message').textContent = 'To low!';
    score--;
  } else if (score === 1) {
    score--;
    document.querySelector('.message').textContent = 'You lose!';
  } else document.querySelector('.message').textContent = 'You lose!';
};

document.querySelector('.check').addEventListener('click', checkEventHandler);
document.querySelector('.again').addEventListener('click', againEventHandler);
