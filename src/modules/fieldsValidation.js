/* eslint-disable camelcase */
const fieldsValidation = () => {

  // eslint-disable-next-line no-undef
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

  // eslint-disable-next-line no-undef
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

  // eslint-disable-next-line no-undef
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

  const numericFields = document.querySelectorAll('[type="text"].calc-item');
  const userName = document.querySelectorAll('[name="user_name"]');
  const userMessage = document.querySelectorAll('[name="user_message"]');
  const email = document.querySelectorAll('[name="user_email"]');
  const telefon = document.querySelectorAll('[name="user_phone"]');

  numericFields.forEach(elem => {
    elem.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
    elem.addEventListener('blur', e => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  });

  userName.forEach(elem => {
    elem.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^А-Яа-яёЁ ]/g, '');
    });
    elem.addEventListener('blur', e => {
      e.target.value = e.target.value.replace(/^-+|^ +|-+$| +$|[^А-Яа-яёЁ -]/g, '');
      e.target.value = e.target.value.replace(/--+/g, '-');
      e.target.value = e.target.value.replace(/ +/g, ' ');
      if (e.target.matches('#form2-name') && e.target.value) {
        e.target.value = e.target.value.split(' ').
          map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).
          join(' ');
      }
    });
  });

  userMessage.forEach(elem => {
    elem.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^А-Яа-яёЁ ,.!?]/g, '');
    });
    elem.addEventListener('blur', e => {
      e.target.value = e.target.value.replace(/^-+|^ +|-+$| +$|[^А-Яа-яёЁ ,.!?]/g, '');
      e.target.value = e.target.value.replace(/--+/g, '-');
      e.target.value = e.target.value.replace(/ +/g, ' ');
      if (e.target.matches('#form2-name')) {
        e.target.value = e.target.value.split(' ').
          map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).
          join(' ');
      }
    });
  });

  email.forEach(elem => {
    elem.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^A-Za-z-_@~.!*']/g, '');
    });
    elem.addEventListener('blur', e => {
      e.target.value = e.target.value.replace(/^-+|-+$|[^A-Za-z-_@~.!*']/g, '');
    });
  });


  telefon.forEach(elem => {
    elem.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^\d+]/g, '');
    });
    // elem.addEventListener('blur', e => {
    //   e.target.value = e.target.value.replace(/^-+|-+$|[^\d()-]/g, '');
    //   e.target.value = e.target.value.replace(/--+/g, '-');
    // });
  });

};

export default fieldsValidation;
