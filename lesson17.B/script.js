const valid = new Validator({
  selector: '#myform',
  pattern: { phone: /^[А-Яа-яёЁ ,.:;\-\d]+$/g },
  method: {
    'phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'email': [
      ['notEmpty'],
      ['pattern', 'email']
    ]
  }
});
valid.init();
