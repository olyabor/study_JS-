'use strict';
let weekday = {
  'ru': [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ],
  'en': [
    'Monday',
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday',
    'Sunday'],
};

let lang = 'ru';
if (lang === 'ru') {
  console.log(weekday.ru);
} else if (lang === 'en') {
  console.log(weekday.en);
}

lang = 'en';
switch (lang) {
  case 'ru': 
    console.log(weekday.ru);
    break;
  case 'en':
    console.log(weekday.en);
    break;
}

console.log(weekday[lang]);

let namePerson = 'Максим';
let result = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';
console.log(result);