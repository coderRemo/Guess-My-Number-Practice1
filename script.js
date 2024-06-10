'use strict';

/*
// console.log((document.querySelector('.message').textContent = 'sayan!'));

// before manipulating, initial value
console.log(document.querySelector('.message').textContent);

// manipulating elements
document.querySelector('.message').textContent = 'Start Guessing!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// in order to set value of any input then .value property is used
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   document.querySelector('.message').textContent = 'Start Guessing!'; // works in line with check! box when clicked on it, as addevent listner is added

  //   when no input is given
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!!!';
    displayMessage('Correct Number!!!');
    document.querySelector('.number').textContent = secretNumber;

    // manipulating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // manipulating highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the Game!';
      displayMessage('You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }

    /* // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    } */
  }
});

// implementing game reset functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
