'use strict';
//Вывести в консоль только те числа, что начинаются с цифры 2 или 4
let arr = ['276', '1538', '289', '1111', '476', '358', '67965'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === '2' || arr[i][0] === '4') {
    console.log(arr[i]);
  }
}
//Вывести в столбик все простые числа от 1 до 100
//Проверить, является ли число простым
let isPrime = function(n) {
  let flag = true;
  for (let i = 2; i <= Math.round(n ** 0.5); i++) {
    if (i > 10 && (i % 2 === 0 || i % 10 === 5)) {
      continue;
    } else if (n % i === 0) {
      flag = false;
    }
  }
  return flag;
};
//Выыести простые числа в консоль
for (let i = 2; i < 100; i++) {
  if (isPrime(i)) {
    console.log(i + ' делится только на 1 и ' + i);
  }
}