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

export default toggleMenu;
