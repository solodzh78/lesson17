window.addEventListener('DOMContentLoaded', () => {

  // Timer
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
  countTimer('22 august 2021');

  // Меню
  const toggleMenu = () => {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');

      // eslint-disable-next-line indent
/*       if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {
        menu.style.transform = 'translate(0)';
      } else {
        menu.style.transform = 'translate(-100%)';
      }
 */    };

    menuBtn.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));

  };

  toggleMenu();

  // Popup

  const togglePopup = () => {
    const popup = document.querySelector('.popup');
    console.log('popup: ', popup);
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupClose = document.querySelector('.popup-close');

    // Popup animation
    const popupOpenAnim = () => {
      let count = 0;
      popup.style.opacity = '0';
      const timer = requestAnimationFrame(function popOpen() {
        count += 0.05;
        popup.style.opacity = count.toString();
        if (popup.style.opacity === '1') {
          cancelAnimationFrame(timer);
        } else {
          requestAnimationFrame(popOpen);
        }
      });
    };

    const popupCloseAnim = () => {
      let count = 1;
      popup.style.opacity = '1';
      const timer = requestAnimationFrame(function popClose() {
        count -= 0.05;
        popup.style.opacity = count.toString();
        if (popup.style.opacity <= 0) {
          clearInterval(timer);
          popup.style.opacity = '1';
          popup.style.display = 'none';
        } else {
          requestAnimationFrame(popClose);
        }
      });
    };


    popupBtn.forEach((elem => {
      elem.addEventListener('click', () => {

        if (screen.width < 768) {
          popup.style.display = 'block';
        } else {
          popupOpenAnim();
          popup.style.display = 'block';
        }
      });
    }));

    popupClose.addEventListener('click', () => {

      if (screen.width < 768) {
        popup.style.display = 'none';
      } else {
        popupCloseAnim();
      }
    });


  };

  togglePopup();

});
