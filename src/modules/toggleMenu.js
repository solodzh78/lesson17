const toggleMenu = () => {

  const anchors = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchors) {
    const blockID = anchor.getAttribute('href');

    anchor.addEventListener('click', e => {
      e.preventDefault();
    });

    if (blockID === '#') continue;

    if (document.querySelector(blockID)) {
      anchor.addEventListener('click', () => {
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  }

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

export default toggleMenu;
