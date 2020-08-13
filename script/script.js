'use strict';
const attemptNumber = 10;
let count = attemptNumber;
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let guessingNumber = function () {
  let correctAnswer = Math.ceil(Math.random() * 100);
  let startGame = confirm('Угадай число от 1 до 100');
  let userAnswer;

  let attempt = function() {
    userAnswer = prompt('Введи число');
    if (count > 1) {
      if (userAnswer !== null) {
        if (!isNumber(userAnswer)) {
          alert('Введи число!');
          attempt();
        } else if (+userAnswer === correctAnswer) {
          startGame = confirm(
            'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'
          );
          if (startGame) {
            correctAnswer = Math.ceil(Math.random() * 100);
            count = attemptNumber;
            attempt();
          }
        } else if (+userAnswer > correctAnswer) {
          count--;
          alert('Загаданное число меньше, осталось попыток ' + count);
          attempt();
        } else {
          count--;
          alert('Загаданное число больше, осталось попыток ' + count);
          attempt();
        }
      }
    } else {
      startGame = confirm('Попытки закончились, хотите сыграть еще?');
      if (startGame) {
        correctAnswer = Math.ceil(Math.random() * 100);
        count = attemptNumber;
        attempt();
      }
    }
  };

  if (startGame) {
    attempt();
  }
};

guessingNumber();