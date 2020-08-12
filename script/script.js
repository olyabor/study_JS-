'use strict';

let stringFunction = function (argument) {
  if (typeof argument !== 'string') {
    return 'В качестве аргумента передана не строка';
  } else {
    let start = 0,
        end = argument.length;
    while (argument.substr(start, end).startsWith(' ')) {
      start++;
    }
    while (argument.substr(start, end)  .endsWith(' ')) {
      end--;
    }
    argument = argument.substr(start, end);
  return (argument.length > 30) ? argument.substr(0, 30) + '...' : argument;
  }
};

console.log(stringFunction('       Короткая строка   '));
console.log(stringFunction('                '));
console.log(stringFunction(23));
console.log(stringFunction([0, 1]));
console.log(stringFunction('       Строка, которая содержит более 30 знаков   '));