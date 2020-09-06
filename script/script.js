'use strict';

const img = document.querySelector('.img'),
  start = document.querySelector('.start'),
  reset = document.querySelector('.reset');

let count = 0,
  flyInterval;

let flyAnimate = function() {
  flyInterval = requestAnimationFrame(flyAnimate);
  count++;
  if (count < 18000) {
    img.style.cssText = `top: ${200 * Math.cos(count / 100) + 200}px;
    left: ${200 * Math.sin(count / 100) + 600}px`;
  } else {
    count = 0;
  }
};

let animate = true;

start.addEventListener('click', () => {
  if (animate) {
    flyInterval = requestAnimationFrame(flyAnimate);
    animate = false;
  } else {
    cancelAnimationFrame(flyInterval);
    animate = true;
  }
});

reset.addEventListener('click', () => {
  animate = true;
  cancelAnimationFrame(flyInterval);
  count = 0;
  img.style.cssText = `left: 600px; top: 400px`;
});

