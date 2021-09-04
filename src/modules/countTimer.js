const countTimer = deadline => {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');
  // eslint-disable-next-line prefer-const
  let timer1;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor(timeRemaining / 60 % 60),
      hours = Math.floor(timeRemaining / 60 / 60);
    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    const timer = getTimeRemaining();

    if (timer.timeRemaining > 0) {
      timerHours.textContent = timer.hours > 9 ?  timer.hours : `0${timer.hours}`;
      timerMinutes.textContent = timer.minutes > 9 ?  timer.minutes : `0${timer.minutes}`;
      timerSeconds.textContent = timer.seconds > 9 ?  timer.seconds : `0${timer.seconds}`;
    } else {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';

      if (timer1) {
        clearInterval(timer1);
      }
    }
  };
  updateClock();
  timer1 = setInterval(updateClock, 1000);
};

export default countTimer;
