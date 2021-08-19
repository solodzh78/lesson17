'use strict';
let dayTime;
let day;
const now = new Date();
console.log('now: ', now);
const newYear = new Date('01 january 2022')
console.log('newYear: ', newYear);
const dt = now.getHours();
console.log(now.getHours());
console.log(now.toLocaleString('ru-ru', { weekday: 'long' }));
console.log(now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
console.log(Math.floor((newYear - now)/1000/3600/24));
const dayRemaining = (Math.floor((newYear - now)/1000/3600/24));
const dr = dayRemaining % 100;
console.log('dr: ', dr);


if (dr % 10 === 1) {
  day = 'день';
} else if (dr % 10 > 1 && dr % 10 < 5) {
  day = 'дня';
} else {
  day = 'дней';
}

// ===================================================
const addSecond = (second) => {

  if (second > 4 && second < 21 || second%10 > 4 && second%10 < 10|| second%10 === 0){
    return '';
  } else if (second%10 === 1) {
    return 'а';
  } else if (second%10 > 1 && second%10 < 5) {
    return 'ы';
  }  
};



if (dt >= 5 && dt < 11) {
  dayTime = 'Доброе утро';
} else if (dt >= 11 && dt < 17 ) {
  dayTime = 'Добрый день';
} else if (dt >= 17 && dt < 23 ) {
  dayTime = 'Добрый вечер';
} else {
  dayTime = 'Доброй ночи';
}
let str = `${dayTime}` + '</br>' +
`Сегодня: ${now.toLocaleString('ru-ru', { weekday: 'long' })}` + '</br>' +
`Текущее время:${now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}` + '</br>' +
`До нового года осталось ${Math.floor((newYear - now)/1000/3600/24)} ${day}`;
const out = document.createElement('div');
out.innerHTML = str;
document.body.append(out);