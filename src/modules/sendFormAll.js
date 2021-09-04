const sendFormAll = () => {

  const sendForm = id => {
    const errorMassage = 'Что-то пошло не так...';
    const loadMassage = 'Загрузка...';
    const successMassage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById(id);

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
      // Fetch=====================================================================
      const postData = body => fetch('./server.php', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const showMessage = msg => {
        preloader.remove();
        statusMessage.textContent = msg;
        setTimeout(() => {
          form.reset();
          statusMessage.remove();
          if (form.id === 'form3') {
            form.parentElement.parentElement.parentElement.style.display = 'none';
          }
        }, 2000);
      };

      postData(body)
        .then(response => {

          if (response.status !== 200) {
            throw new Error('Status network not 200');
          }
          showMessage(successMassage);
        })
        .catch(error => {
          console.error(error);
          showMessage(errorMassage);
        });
    });
  };

  sendForm('form1');
  sendForm('form2');
  sendForm('form3');

};

export default sendFormAll;
