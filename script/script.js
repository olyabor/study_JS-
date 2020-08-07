let num = 266219;
//Количество цифр для положительного числа num
let numLength = Math.floor(Math.log10(num) + 1);
let productOfNumbers = 1;
let n = num;
for (let i = 1; i <= numLength; i++) {
  let r = n % 10;
  n = (n - r) / 10;
  productOfNumbers *= r;
}
console.log(productOfNumbers);
// console.log(productOfNumbers**3); => 2176782336
// Вывести на экран первые 2 цифры полученного числа
console.log((productOfNumbers ** 3).toString().substring(0, 2));