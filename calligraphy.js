"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcaligrafia"] = self["webpackChunkcaligrafia"] || []).push([["calligraphy"],{

/***/ "./src/styles/calligraphy.scss":
/*!*************************************!*\
  !*** ./src/styles/calligraphy.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://caligrafia/./src/styles/calligraphy.scss?");

/***/ }),

/***/ "./src/calligraphy.js":
/*!****************************!*\
  !*** ./src/calligraphy.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_calligraphy_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/calligraphy.scss */ \"./src/styles/calligraphy.scss\");\n\n\n$.when($.ready).then(function () {\n    try {\n        $('main').append(`<h1 class=\"page-name is-size-3-mobile is-size-1 has-text-centered mb-6\">Caligrafía</h1>`)\n        document.querySelector('.page-name').contentEditable = 'false'\n        document.querySelector('main').contentEditable = 'plaintext-only'\n        let fontRadioButtons = $('.radios.font input')\n        let colorRadioButtons = $('.radios.color input')\n\n        let currentFont = [...document.querySelectorAll('.radios.font input')]\n            .filter(el => {\n                /** @type {HTMLInputElement} */\n                let element = el\n                return element.hasAttribute('checked')\n            })\n            .pop()\n            .value;\n\n        let colorsOptions = [...document.querySelectorAll('.radios.color input')]\n        let currentColor = colorsOptions\n            .filter(el => {\n                /** @type {HTMLInputElement} */\n                let element = el\n                return element.hasAttribute('checked')\n            })\n            .pop()\n            .value;\n\n        let currentFontSize = 40\n            \n        document\n            .querySelectorAll('.radios.color input')\n            .forEach(item => {\n                try {\n                    /** @type {HTMLInputElement} */\n                    let el = item\n                    let span = el.nextElementSibling\n                    span.classList.add('color-choice', 'ml-2')\n                    span.style.display = 'inline-block'\n                    span.style.backgroundColor = '#' + el.value\n                    span.style.width = '30px'\n                    span.style.height = '30px'\n                    span.style.border = '1px solid #000'\n                } catch (err) {\n                    console.log(err)\n                }\n            });\n    \n        fontRadioButtons.on('change', function (ev) {\n            /** @type {HTMLInputElement} */\n            let input = ev.target\n            \n            $('.calligraphy-row .wording')\n                .removeClass(`f-${currentFont}`)\n                .addClass(`f-${input.value}`)\n    \n            currentFont = input.value\n        })\n\n        colorRadioButtons.on('change', function(ev) {\n            document\n                .querySelectorAll('.calligraphy-row .wording')\n                .forEach(item => {\n                    /** @type {HTMLElement} */\n                    let el = item\n                    el.style.color = '#' + ev.target.value\n                })\n        })\n    \n        for (let i = 0; i <= 5; i++) {\n            $('main').append(\n                `\n                    <div class=\"calligraphy-row\">\n                        <p style=\"color: #${currentColor}; font-size: ${currentFontSize}px;\" class=\"cursive fs-40 faded wording f-${currentFont}\">Elizabeth Victoria</p>\n                    </div>\n                `\n            )\n        }\n    \n        let dropdown = $('#controls')\n    \n        dropdown.on('click', function () {\n            dropdown.toggleClass('is-active', 'has-background-primary')\n        })\n\n        $('#font-size').on('change', function(ev) {\n            /** @type {HTMLInputElement} */\n            let target = ev.target\n            let v = target.value\n            document\n                .querySelectorAll('.calligraphy-row .wording')\n                .forEach(item => {\n                    /** @type {HTMLElement} */\n                    let el = item\n                    el.style.fontSize = v + 'px'\n                    currentFontSize = v\n                })\n        })\n\n        $('#valignment').on('change', function(ev) {\n            /** @type {HTMLInputElement} */\n            let target = ev.target\n            let v = target.value\n            document\n                .querySelectorAll('.calligraphy-row .wording')\n                .forEach(item => {\n                    /** @type {HTMLElement} */\n                    let el = item\n                    el.style.top = v + 'px'\n                })\n        })\n\n        $(\"#print\").on('click', function() {\n            window.print()\n        })\n\n    } catch (err) {\n        console.log({err})\n    }\n    \n})\n\n//# sourceURL=webpack://caligrafia/./src/calligraphy.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/calligraphy.js"));
/******/ }
]);