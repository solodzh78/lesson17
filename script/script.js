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

  // Меню =========================================================================================
  const toggleMenu = () => {

    const menu = document.querySelector('menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', e => {
      const target = e.target;
      if (target.classList.contains('close-btn') ||
      target.closest('menu>ul>li>a') ||
      target.closest('.menu') ||
      (menu.classList.contains('active-menu') && !target.closest('menu'))) {
        handlerMenu();
      }
    });
  };

  toggleMenu();

  // Popup

  const togglePopup = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');

    // Popup animation
    const popupOpenAnim = () => {

      if (screen.width < 768) {
        popup.style.display = 'block';
      } else {
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
          popup.style.display = 'block';
        });
      }
    };

    const popupCloseAnim = () => {

      if (screen.width < 768) {
        popup.style.display = 'none';
      } else {
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
      }
    };


    popupBtn.forEach(elem => {
      elem.addEventListener('click', popupOpenAnim);
    });

    popup.addEventListener('click', e => {
      let target = e.target;

      if (target.classList.contains('popup-close')) {
        popupCloseAnim();
      } else {
        target = target.closest('.popup-content');

        if (!target) { popupCloseAnim(); }
      }
    });

  };

  togglePopup();

  // Табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header');
    const tab = tabHeader.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = index => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tabContent[i].classList.add('d-none');
          tab[i].classList.remove('active');
        }
      }
    };
    tabHeader.addEventListener('click', e => {
      let target = e.target;
      target = target.closest('.service-header-tab');

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };

  tabs();

});
