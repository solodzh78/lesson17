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

export default changePic;
