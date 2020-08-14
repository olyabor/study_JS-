'use strict';
let main = document.querySelector('.main');
let date = new Date();
console.log(date);

let week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

for (let i = 0; i < week.length; i++) {
  main.innerHTML += `<div class = ${
      i > 4 ? 'weekend' : 'weekday'
    }> ${week[i]}</div>`;
  if (i === date.getDay() - 1) {
    main.querySelectorAll('div')[i].classList.add('today');
  }
}

