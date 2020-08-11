'use strict';
let weekday = [
  [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ],
  [
    'Monday',
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday',
    'Sunday'],
];

let langList = ['ru', 'en'];

let lang = 'ru';
if (lang === 'ru') {
  console.log(weekday[0]);
} else if (lang === 'en') {
  console.log(weekday[1]);
}

switch (lang) {
  case 'ru': 
    console.log(weekday[0]);
    break;
  case 'en':
    console.log(weekday[1]);
    break;
}

console.log(weekday[langList.indexOf(lang)]);

let namePerson = 'Максим';
let result = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';
console.log(result);