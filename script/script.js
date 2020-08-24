'use strict';
let color = document.getElementById('color'),
  change = document.getElementById('change'),
  wrapper = document.querySelector('.wrapper');

change.addEventListener('click', function() {
  let randomColor = '#' +
    Math.floor(Math.random() * 256).toString(16) +
    Math.floor(Math.random() * 256).toString(16) +
    Math.floor(Math.random() * 256).toString(16);
  wrapper.style.backgroundColor = randomColor;
  change.style.color = randomColor;
  color.textContent = randomColor;
});


