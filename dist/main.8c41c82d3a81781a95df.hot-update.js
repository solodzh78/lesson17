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

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block');\n  var calcType = document.querySelector('.calc-type');\n  var calcSquare = document.querySelector('.calc-square');\n  var calcCount = document.querySelector('.calc-count');\n  var calcDay = document.querySelector('.calc-day');\n  var totalValue = document.getElementById('total');\n\n  var showResult = function showResult(total) {\n    var startValue = +totalValue.textContent;\n    var endValue = total;\n    var step = Math.round((endValue - startValue) / 15);\n\n    var animResult = function animResult() {\n      console.log('Запуск Анимации');\n      startValue += step;\n\n      if (startValue < endValue) {\n        requestAnimationFrame(function () {\n          totalValue.textContent = Math.round(startValue);\n          return animResult();\n        });\n      } else {\n        totalValue.textContent = Math.round(endValue);\n      }\n    };\n\n    animResult();\n  };\n\n  var countSum = function countSum() {\n    var total = 0;\n    var countValue = 1;\n    var dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value;\n    var squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    showResult(total);\n  };\n\n  calcBlock.addEventListener('change', function (e) {\n    var target = e.target;\n\n    if (target === calcType || calcSquare || calcCount || calcDay) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://localhost/./src/modules/calc.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b9231b3896d2c7bea396")
/******/ })();
/******/ 
/******/ }
);