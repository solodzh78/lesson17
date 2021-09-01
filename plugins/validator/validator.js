class Validator {
  constructor({ selector, pattern = {}, method }) {
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
    this.error = new Set();
    this.elementsForm = [...this.form.elements].
      filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button');
  }

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsForm.forEach(elem => elem.addEventListener('change', e => this.checkIt(e)));
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.elementsForm.forEach(elem => {
        this.checkIt({ target: elem });
      }, this);
      if (this.error.size) {
        e.preventDefault();
        this.form.classList.add('validation-error');
      } else {
        this.form.classList.remove('validation-error');
      }
    });
  }

  isValid(elem) {

    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      }
    };

    if (this.method) {
      const method = this.method[elem.name];

      if (method) {
        return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
      }
    } else {
      console.warn('Необходимо передать id полей ввода и методы проверки этих полей');
    }

    return true;
  }

  checkIt(e) {
    const target = e.target;

    if (this.isValid(target)) {
      this.showSuccess(target);
      this.error.delete(target);
    } else {
      this.showError(target);
      this.error.add(target);
    }
  }

  showError(elem) {
    elem.classList.remove('success');
    elem.classList.add('error');

    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    }
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      elem.nextElementSibling.remove();
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
      input.success {
        border: 2px solid green
      }
      input.error {
        border: 2px solid red
      }
      .validator-error {
        font-size: 12px;
        font-family: sans-serif;
        color: red;
      }
      `;
    document.head.append(style);
  }

  setPattern() {

    if (!this.pattern.phone) {
      this.pattern.phone = /^\+?[78]([-() ]*\d){10}$/;
    }

    if (!this.pattern.email) {
      this.pattern.email = /^\w+@\w+\.\w{2,}$/;
    }

    if (!this.pattern.user_name) {
      this.pattern.email = /^[А-Яа-яёЁ ,.:;\-\d]+$/g;
    }
  }
}
