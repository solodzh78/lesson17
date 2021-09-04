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

export default slider;
