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

  // Слайдер

  const slider = () => {

    const slide = document.querySelectorAll('.portfolio-item');
    // const btn = document.querySelectorAll('.portfolio-btn');
    const slider = document.querySelector('.portfolio-content');

    let currentSlide = 0;
    let timer;


    const addDots = () => {
      slide.forEach((elem, index) => {
        const dot = document.createElement('li');
        dot.classList.add('dot');

        if (index === 0) {
          dot.classList.add('dot-active');
        }
        slider.querySelector('.portfolio-dots').append(dot);
      });
    };

    addDots();
    const dot = document.querySelectorAll('.dot');

    const prevtSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };


    const autoPlaySlide = () => {

      prevtSlide(slide, currentSlide, 'portfolio-item-active');
      prevtSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide > slide.length - 1) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    };

    const startSlide = (time = 1500) => {

      timer = setInterval(autoPlaySlide, time);

    };

    const stopSlide = () => {
      clearInterval(timer);
    };

    slider.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevtSlide(slide, currentSlide, 'portfolio-item-active');
      prevtSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;

        if (currentSlide >= slide.length) {
          currentSlide = 0;
        }
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = slide.length - 1;
        }
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', e => {
      if (e.target.matches('.portfolio-btn, .dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', e => {
      if (e.target.matches('.portfolio-btn, .dot')) {
        startSlide();
      }
    });


    startSlide(1500);

  };

  slider();

  // Смена фото
  const changePic = () => {
    const commandFotos = document.querySelectorAll('.command__photo');
    commandFotos.forEach(elem => {
      let firstPic;
      elem.addEventListener('mouseenter', e => {
        firstPic = e.target.src;
        e.target.src = e.target.dataset.img;
      });
      elem.addEventListener('mouseleave', e => {
        e.target.src = firstPic;
      });
    });
  };

  changePic();

  // Валидация полей ввода
  const validForm1 = new Validator({
    selector: '#form1',
    pattern: {
      user_name: /^[А-Яа-яёЁ ]+$/,
      user_phone: /^\+?[78]\d{10}$/
    },
    method: {
      'user_phone': [
        ['notEmpty'],
        ['pattern', 'user_phone']
      ],
      'user_email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'user_name': [
        ['notEmpty'],
        ['pattern', 'user_name']
      ]
    }
  });
  validForm1.init();

  const validForm2 = new Validator({
    selector: '#form2',
    pattern: {
      user_name: /^[А-Яа-яёЁ ]+$/,
      user_phone: /^\+?[78]\d{10}$/,
      user_message: /^[А-Яа-яёЁ \-,.!?:;\d]+$/
    },
    method: {
      'user_phone': [
        ['notEmpty'],
        ['pattern', 'user_phone']
      ],
      'user_email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'user_name': [
        ['notEmpty'],
        ['pattern', 'user_name']
      ],
      'user_message': [
        ['notEmpty'],
        ['pattern', 'user_message']
      ]
    }
  });
  validForm2.init();

  const validForm3 = new Validator({
    selector: '#form3',
    pattern: {
      user_name: /^[А-Яа-яёЁ ]+$/,
      user_phone: /^\+?[78]\d{10}$/
    },
    method: {
      'user_phone': [
        ['notEmpty'],
        ['pattern', 'user_phone']
      ],
      'user_email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'user_name': [
        ['notEmpty'],
        ['pattern', 'user_name']
      ]
    }
  });
  validForm3.init();

  const fieldsValidation = () => {
    const numericFields = document.querySelectorAll('[type="text"].calc-item');
    const textFields = document.querySelectorAll('#form2-name, #form2-message');
    const email = document.getElementById('form2-email');
    const telefon = document.getElementById('form2-phone');

    numericFields.forEach(elem => {
      elem.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/\D/g, '');
      });
      elem.addEventListener('blur', e => {
        e.target.value = e.target.value.replace(/\D/g, '');
      });
    });

    textFields.forEach(elem => {
      elem.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^А-Яа-яёЁ -]/g, '');
      });
      elem.addEventListener('blur', e => {
        e.target.value = e.target.value.replace(/^-+|^ +|-+$| +$|[^А-Яа-яёЁ -]/g, '');
        e.target.value = e.target.value.replace(/--+/g, '-');
        e.target.value = e.target.value.replace(/ +/g, ' ');
        if (e.target.matches('#form2-name')) {
          e.target.value = e.target.value.split(' ').
            map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).
            join(' ');
        }
      });
    });


    email.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^A-Za-z-_@~.!*']/g, '');
    });
    email.addEventListener('blur', e => {
      e.target.value = e.target.value.replace(/^-+|-+$|[^A-Za-z-_@~.!*']/g, '');
      e.target.value = e.target.value.replace(/--+/g, '-');
    });

    telefon.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^\d()-]/g, '');
    });
    telefon.addEventListener('blur', e => {
      e.target.value = e.target.value.replace(/^-+|-+$|[^\d()-]/g, '');
      e.target.value = e.target.value.replace(/--+/g, '-');
    });

  };

  // fieldsValidation();

  // Калькулятор

  const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalValue = document.getElementById('total');

    const showResult = total => {
      let startValue = +totalValue.textContent;
      const endValue = total;
      const step = Math.round((endValue - startValue) / 60);

      const animResult = () => {
        startValue += step;

        if (startValue < endValue) {
          requestAnimationFrame(() => {
            totalValue.textContent = Math.round(startValue);
            return animResult();
          });
        } else {
          totalValue.textContent = Math.round(endValue);
        }
      };
      animResult();
    };

    const countSum = () => {
      let total = 0;
      let countValue = 1;
      let dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      const squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      showResult(total);
    };

    calcBlock.addEventListener('change', e => {
      const target = e.target;

      if (target === calcType || calcSquare || calcCount || calcDay) {
        countSum();
      }
    });
  };

  calc();

  // Ajax запрос

  const sendForm = id => {
    const errorMassage = 'Что-то пошло не так...';
    const loadMassage = 'Загрузка...';
    const successMassage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById(id);
    console.dir(form);

    const statusMessage = document.createElement('div');
    const preloader = document.createElement('img');
    preloader.src = "./images/preloader.svg";
    statusMessage.append(preloader);
    statusMessage.style.cssText = 'font-size: 2rem; color: white;';

    form.addEventListener('submit', e => {
      if (form.classList.contains('validation-error')) {
        return;
      }
      e.preventDefault();
      form.append(preloader, statusMessage);
      statusMessage.textContent = loadMassage;
      const formData = new FormData(form);
      const body = {};
      for (const val of formData.entries()) {
        body[val[0]] = val[1];
      }

      const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
            outputData();
          } else {
            errorData(request.status);
          }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'aplication/json');
        request.send(JSON.stringify(body));
      };

      postData(body,
        () => {
          form.reset();
          preloader.remove();
          statusMessage.textContent = successMassage;
        },
        error => {
          preloader.remove();
          statusMessage.textContent = errorMassage;
          console.error(error);
        }
      );
    });

  };

  sendForm('form1');
  sendForm('form2');
  sendForm('form3');

});
