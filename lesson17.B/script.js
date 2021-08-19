'use strict';

let timer;
const input = document.querySelector('.input');
const out = document.querySelector('.out');
const printResult = (text) => {
  out.textContent = text;
};

input.addEventListener('input', (e) => {

  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {out.textContent = e.target.value;}, 300);
});