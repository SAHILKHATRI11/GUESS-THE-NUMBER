'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'keep guessing🏆...';
document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number⛔️';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct guess🏆';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNumber && score > 1) {
    document.querySelector('.message').textContent =
      'Hint: The guess is too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score > 1) {
    document.querySelector('.message').textContent =
      'Hint: The guess is too low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score == 1) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'You lost the game!😢';
    document.querySelector('body').style.backgroundColor = '#FF0000';
    document.querySelector('.number').style.width = '12rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100 + 1);
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
