"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcaligrafia"] = self["webpackChunkcaligrafia"] || []).push([["scrabble"],{

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://caligrafia/./src/main.css?");

/***/ }),

/***/ "./src/scrabble.css":
/*!**************************!*\
  !*** ./src/scrabble.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://caligrafia/./src/scrabble.css?");

/***/ }),

/***/ "./src/scrabble.js":
/*!*************************!*\
  !*** ./src/scrabble.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _scrabble_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrabble.css */ \"./src/scrabble.css\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sorted_combinations_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sorted_combinations.txt */ \"./src/sorted_combinations.txt\");\n\n\n\n\n\nfunction partition(size, coll, pad = []) {\n    if (size <= 0) throw new Error(\"Partition size must be greater than 0\");\n    \n    let result = [];\n    for (let i = 0; i < coll.length; i += size) {\n      let chunk = coll.slice(i, i + size);\n      if (chunk.length < size) {\n        chunk = chunk.concat(pad.slice(0, size - chunk.length));\n      }\n      result.push(chunk);\n    }\n    \n    return result;\n  }\n\njquery__WEBPACK_IMPORTED_MODULE_2___default().when((jquery__WEBPACK_IMPORTED_MODULE_2___default().ready)).then(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()('main').append(`<h1 class=\"is-size-3-mobile is-size-1 has-text-centered mb-6\">Sílabas</h1>`)\n    /** @type {string} */\n    let combinations = _sorted_combinations_txt__WEBPACK_IMPORTED_MODULE_3__\n\n    jquery__WEBPACK_IMPORTED_MODULE_2___default()('main').append('<div class=\"syllables-container\"></div>')\n\n    let partitionSize = 15;\n    /** @type {string[]} */\n    let combinationsColl = combinations\n        .trim()\n        .split(' ')\n    /** @type {string[][]} */\n    let coll = partition(partitionSize, combinationsColl, ['a', 'e', 'i', 'o', 'u'])\n    coll.forEach((syllables, idx) => {\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.syllables-container').append(`<div class=\"row-${idx + 1}\"></div>`)\n        let container = jquery__WEBPACK_IMPORTED_MODULE_2___default()(`.syllables-container .row-${idx + 1}`)\n        syllables.forEach(syllable => {\n            container.append(`<div class=\"syllable\">\n                        <span>${syllable}</span>\n                    </div>`)\n        })\n    })\n})\n\n//# sourceURL=webpack://caligrafia/./src/scrabble.js?");

/***/ }),

/***/ "./src/sorted_combinations.txt":
/*!*************************************!*\
  !*** ./src/sorted_combinations.txt ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = \"ba be bi bla ble bli blo blu bo bra bre bri bro bru bu ca ce cha che chi cho chu ci cla cle cli clo clu co cu da de di do du fa fe fi fo fu ga ge gi go gu ha he hi ho hu ja je ji jo ju ka ke ki ko ku la le li lo lu ma me mi mo mu na ña ne ñe ni ñi no ño nu ñu pa pe pi po pu que qui ra re ri ro rra rre rri rro rru ru sa se si so su ta te ti to tu va ve vi vo vu wa we wi wo wu xa xe xi xo xu ya ye yi yo yu za ze zi zo zu\\n\";\n\n//# sourceURL=webpack://caligrafia/./src/sorted_combinations.txt?");

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scrabble.js"));
/******/ }
]);