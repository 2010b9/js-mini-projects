'use strict';

// HTML Elements
const scorePlayer1Element = document.getElementById('score--0');
const scorePlayer2Element = document.getElementById('score--1');
const currentScorePlayer1Element = document.getElementById('current--0');
const currentScorePlayer2Element = document.getElementById('current--1');
const diceImgElement = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
const player1Element = document.querySelector('.player--0');
const player2Element = document.querySelector('.player--1');

let currentScore, currentPlayer, totalScores, isPlaying;

const init = function () {
  currentScore = 0;
  currentPlayer = 0;
  totalScores = [0, 0];
  isPlaying = true;

  // Starting conditions
  // The values will be converted to a string to be displayed on the page
  scorePlayer1Element.textContent = 0;
  scorePlayer2Element.textContent = 0;
  currentScorePlayer1Element.textContent = 0;
  currentScorePlayer2Element.textContent = 0;

  diceImgElement.classList.add('hidden');

  player1Element.classList.add('player--active');
  player1Element.classList.remove('player--winner');
  player2Element.classList.remove('player--active');
  player2Element.classList.remove('player--winner');
};

init();

// Useful functions

const resetCurrentScore = () => {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;
};

const changePlayer = function () {
  resetCurrentScore();
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player1Element.classList.toggle('player--active');
  player2Element.classList.toggle('player--active');
};

// Roll Dice button functionality

const generateRandomIntegerInRange = (minimumValue, maximumValue) => {
  const rangeSize = maximumValue - minimumValue;
  return minimumValue + Math.trunc(Math.random() * (rangeSize + 1));
};

const displayDiceImage = function (diceValue) {
  diceImgElement.classList.remove('hidden');
  diceImgElement.src = `dice-${diceValue}.png`;
};

const increaseCurrentScore = function (diceValue) {
  currentScore += diceValue;
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;
};

const rollDice = function () {
  if (isPlaying) {
    const diceValue = generateRandomIntegerInRange(1, 6);
    displayDiceImage(diceValue);
    diceValue === 1 ? changePlayer() : increaseCurrentScore(diceValue);
  }
};

rollDiceButton.addEventListener('click', rollDice);

// Hold button functionality

const hold = function () {
  if (isPlaying) {
    totalScores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      totalScores[currentPlayer];

    if (totalScores[currentPlayer] >= 20) {
      isPlaying = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      diceImgElement.classList.add('hidden');
    } else changePlayer();
  }
};

holdButton.addEventListener('click', hold);

// Reset button functionality

newGameButton.addEventListener('click', init);
