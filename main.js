"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcaligrafia"] = self["webpackChunkcaligrafia"] || []).push([["main"],{

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://caligrafia/./src/main.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar s0 = 'Mi nombre es Elizabeth Victoria'\nvar s1 = 'Mi mano toma el mapa'\nvar s2 = 'Mi mamita me ama'\nvar s3 = 'Mi mama me mima'\nvar s4 = 'Mi nana me cuida'\nvar s5 = 'Me tomo mi agua'\nvar s6 = 'Me tomo mi jugo'\nvar s7 = 'Me como mi merienda'\nvar words = [\n    'mano',\n    'mesa',\n    'misa',\n    'moto',\n    'música',\n    'moneda',\n    'mama',\n    'mapa',\n    'mono',\n]\n\njquery__WEBPACK_IMPORTED_MODULE_1___default().when((jquery__WEBPACK_IMPORTED_MODULE_1___default().ready)).then(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('main').append(\n        `\n            <div class=\"calligraphy-row\">\n                <p class=\"wording\">Elizabeth Victoria</p>\n            </div>\n        `\n    )\n    for (let i = 0; i <= 5; i++) {\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('main').append(\n            `\n                <div class=\"calligraphy-row\">\n                    <p class=\"faded wording\">Elizabeth Victoria</p>\n                </div>\n            `\n        )\n    }\n\n    /* $('main').append('<aside></aside>')\n    for (let i = 0; i <= 10; i++) {\n        $('main > aside').append(\n            `<p class=\"faded\">Elizabeth Victoria</p>`\n        )\n    } */\n})\n\n//# sourceURL=webpack://caligrafia/./src/main.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);