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

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup');\n  var popupBtn = document.querySelectorAll('.popup-btn'); // Popup animation\n\n  var popupOpenAnim = function popupOpenAnim() {\n    if (screen.width < 768) {\n      popup.style.display = 'block';\n    } else {\n      var count = 0;\n      popup.style.opacity = '0';\n      var timer = requestAnimationFrame(function popOpen() {\n        count += 0.05;\n        popup.style.opacity = count.toString();\n\n        if (popup.style.opacity === '1') {\n          cancelAnimationFrame(timer);\n        } else {\n          requestAnimationFrame(popOpen);\n        }\n\n        popup.style.display = 'block';\n      });\n    }\n  };\n\n  var popupCloseAnim = function popupCloseAnim() {\n    if (screen.width < 768) {\n      popup.style.display = 'none';\n    } else {\n      var count = 1;\n      popup.style.opacity = '1';\n      var timer = requestAnimationFrame(function popClose() {\n        count -= 0.05;\n        popup.style.opacity = count.toString();\n\n        if (popup.style.opacity <= 0) {\n          clearInterval(timer);\n          popup.style.opacity = '1';\n          popup.style.display = 'none';\n        } else {\n          requestAnimationFrame(popClose);\n        }\n      });\n    }\n  };\n\n  var f = debounce(debounce(function () {\n    if (screen.width < 768) {\n      popup.style.display = 'none';\n    } else {\n      var count = 1;\n      popup.style.opacity = '1';\n      var timer = requestAnimationFrame(function popClose() {\n        count -= 0.05;\n        popup.style.opacity = count.toString();\n\n        if (popup.style.opacity <= 0) {\n          clearInterval(timer);\n          popup.style.opacity = '1';\n          popup.style.display = 'none';\n        } else {\n          requestAnimationFrame(popClose);\n        }\n      });\n    }\n  }), 1000);\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', f);\n  });\n  popup.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.classList.contains('popup-close')) {\n      popupCloseAnim();\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popupCloseAnim();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://localhost/./src/modules/togglePopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37aa181de3c2157b7f6b")
/******/ })();
/******/ 
/******/ }
);