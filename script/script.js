'use strict';
let main = document.querySelector('.main');
//Для минут и секунд
function end1(n) {
  if (n % 10 === 1 && n !== 11) {
    return 'a ';
  } else if ((n % 10 > 4)||(n > 10 && n < 20) || n % 10 === 0) {
    return ' ';
  } else {
    return 'ы ';
  }
}
//Для часов
function end2(n) {
  if (n % 10 === 1 && n !== 11) {
    return ' ';
  } else   if (n % 10 > 4 || (n > 4 && n < 20) || n % 10 === 0) {
             return 'ов ';
           } else {
             return 'а ';
           }
}

let writeDataA = () => {
  let date = new Date();
  let year = date.getFullYear(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds();

  return 'Сегодня ' +
    date.toLocaleString('ru', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }) + ' ' +
    year + ' года, ' +
    hours + ' час' + end2(hours) +
    minutes + ' минут' + end1(minutes) +
    seconds + ' секунд' + end1(seconds);
};
// let writeDataB = () => {
//   let date = new Date();
//   return date.toLocaleDateString() + ' - ' + date.toLocaleTimeString();
// };
let addNull = n => n < 10 ? '0' + n : n;
let writeDataB = () => {
  let date = new Date();
  let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDay(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  return addNull(day)+'.'+addNull(month)+'.'+year+' - '+addNull(hours)+':'+addNull(minutes)+':'+addNull(seconds);
};

setInterval(() => {
  main.innerHTML = `<p>${writeDataA()}</p><p>${writeDataB()}</p>`;
}, 1000);


