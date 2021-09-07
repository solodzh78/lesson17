const togglePopup = () => {
  const popup = document.querySelector('.popup');
  const popupBtn = document.querySelectorAll('.popup-btn');




  function debounce(f, ms) {
    let isCooldown = false;
    return function(...args) {
      if (isCooldown) return;
      f.apply(this, args);
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
    };
  }

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
    elem.addEventListener('click', debounce(popupOpenAnim, 250));
  });

  popup.addEventListener('click', debounce(e => {
    let target = e.target;

    if (target.classList.contains('popup-close')) {
      popupCloseAnim();
    } else {
      target = target.closest('.popup-content');

      if (!target) { popupCloseAnim(); }
    }
  }, 250));

};

export default togglePopup;
