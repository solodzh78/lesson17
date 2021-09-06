"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelocalhost"]("main",{

/***/ "./src/modules/fieldsValidation.js":
/*!*****************************************!*\
  !*** ./src/modules/fieldsValidation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable camelcase */\nvar fieldsValidation = function fieldsValidation() {\n  // eslint-disable-next-line no-undef\n  var validForm1 = new Validator({\n    selector: '#form1',\n    pattern: {\n      user_name: /^[А-Яа-яёЁ ]+$/,\n      user_phone: /^\\+?[78]([ ()-]*\\d){10}$/\n    },\n    method: {\n      'user_phone': [['notEmpty'], ['pattern', 'user_phone']],\n      'user_email': [['notEmpty'], ['pattern', 'email']],\n      'user_name': [['notEmpty'], ['pattern', 'user_name']]\n    }\n  });\n  validForm1.init(); // =========================================================================================\n\n  function maskPhone(selector) {\n    var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';\n    var elem = selector;\n\n    function mask(event) {\n      var keyCode = event.keyCode;\n      var template = masked,\n          def = template.replace(/\\D/g, ''),\n          val = this.value.replace(/\\D/g, '');\n      var i = 0,\n          newValue = template.replace(/[_\\d]/g, function (a) {\n        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n      });\n      i = newValue.indexOf('_');\n\n      if (i !== -1) {\n        newValue = newValue.slice(0, i);\n      }\n\n      var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n        return '\\\\d{1,' + a.length + '}';\n      }).replace(/[+()]/g, '\\\\$&');\n      reg = new RegExp('^' + reg + '$');\n      console.log(reg);\n\n      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n        this.value = newValue;\n      }\n\n      if (event.type === 'blur' && this.value.length < 5) {\n        console.log('this.value.length: ', this.value.length);\n        this.value = '';\n      }\n    }\n\n    elem.addEventListener('input', mask);\n    elem.addEventListener('focus', mask);\n    elem.addEventListener('blur', mask);\n  } // use\n  // maskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__');\n  // eslint-disable-next-line no-undef\n\n\n  var validForm2 = new Validator({\n    selector: '#form2',\n    pattern: {\n      user_name: /^[А-Яа-яёЁ ]+$/,\n      user_phone: /^\\+?[78]\\d{10}$/,\n      user_message: /^[А-Яа-яёЁ \\-,.!?:;\\d]+$/\n    },\n    method: {\n      'user_phone': [['notEmpty'], ['pattern', 'user_phone']],\n      'user_email': [['notEmpty'], ['pattern', 'email']],\n      'user_name': [['notEmpty'], ['pattern', 'user_name']],\n      'user_message': [['notEmpty'], ['pattern', 'user_message']]\n    }\n  });\n  validForm2.init(); // eslint-disable-next-line no-undef\n\n  var validForm3 = new Validator({\n    selector: '#form3',\n    pattern: {\n      user_name: /^[А-Яа-яёЁ ]+$/,\n      user_phone: /^\\+?[78]\\d{10}$/\n    },\n    method: {\n      'user_phone': [['notEmpty'], ['pattern', 'user_phone']],\n      'user_email': [['notEmpty'], ['pattern', 'email']],\n      'user_name': [['notEmpty'], ['pattern', 'user_name']]\n    }\n  });\n  validForm3.init();\n  var numericFields = document.querySelectorAll('[type=\"text\"].calc-item');\n  var userName = document.querySelectorAll('[name=\"user_name\"]');\n  var userMessage = document.querySelectorAll('[name=\"user_message\"]');\n  var email = document.querySelectorAll('[name=\"user_email\"]');\n  var telefon = document.querySelectorAll('[name=\"user_phone\"]');\n  numericFields.forEach(function (elem) {\n    elem.addEventListener('input', function (e) {\n      e.target.value = e.target.value.replace(/\\D/g, '');\n    });\n    elem.addEventListener('blur', function (e) {\n      e.target.value = e.target.value.replace(/\\D/g, '');\n    });\n  });\n  userName.forEach(function (elem) {\n    elem.addEventListener('input', function (e) {\n      e.target.value = e.target.value.replace(/[^А-Яа-яёЁ ]/g, '');\n    });\n    elem.addEventListener('blur', function (e) {\n      e.target.value = e.target.value.replace(/^-+|^ +|-+$| +$|[^А-Яа-яёЁ -]/g, '');\n      e.target.value = e.target.value.replace(/--+/g, '-');\n      e.target.value = e.target.value.replace(/ +/g, ' ');\n\n      if (e.target.matches('#form2-name') && e.target.value) {\n        e.target.value = e.target.value.split(' ').map(function (elem) {\n          return elem[0].toUpperCase() + elem.slice(1).toLowerCase();\n        }).join(' ');\n      }\n    });\n  });\n  userMessage.forEach(function (elem) {\n    elem.addEventListener('input', function (e) {\n      e.target.value = e.target.value.replace(/[^А-Яа-яёЁ ,.!?]/g, '');\n    });\n    elem.addEventListener('blur', function (e) {\n      e.target.value = e.target.value.replace(/^-+|^ +|-+$| +$|[^А-Яа-яёЁ ,.!?]/g, '');\n      e.target.value = e.target.value.replace(/--+/g, '-');\n      e.target.value = e.target.value.replace(/ +/g, ' ');\n\n      if (e.target.matches('#form2-name')) {\n        e.target.value = e.target.value.split(' ').map(function (elem) {\n          return elem[0].toUpperCase() + elem.slice(1).toLowerCase();\n        }).join(' ');\n      }\n    });\n  });\n  email.forEach(function (elem) {\n    elem.addEventListener('input', function (e) {\n      e.target.value = e.target.value.replace(/[^A-Za-z-_@~.!*']/g, '');\n    });\n    elem.addEventListener('blur', function (e) {\n      e.target.value = e.target.value.replace(/^-+|-+$|[^A-Za-z-_@~.!*']/g, '');\n    });\n  });\n  telefon.forEach(function (elem) {\n    maskPhone(elem);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fieldsValidation);\n\n//# sourceURL=webpack://localhost/./src/modules/fieldsValidation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0c4094fea657067fb6ee")
/******/ })();
/******/ 
/******/ }
);