/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _js_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/menu.js */ \"./src/js/menu.js\");\n/* harmony import */ var _js_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_cerrarredes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/cerrarredes.js */ \"./src/js/cerrarredes.js\");\n/* harmony import */ var _js_cerrarredes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_cerrarredes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_fondoabout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/fondoabout.js */ \"./src/js/fondoabout.js\");\n/* harmony import */ var _js_fondoabout_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_fondoabout_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_modals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modals.js */ \"./src/js/modals.js\");\n/* harmony import */ var _js_modals_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_modals_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animate.css/animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var joshjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! joshjs */ \"./node_modules/joshjs/es6_module/josh.js\");\n//import 'bootstrap';\n//import 'bootstrap/scss/bootstrap.scss';\n//import 'normalize.css/normalize.css';\n\n\n\n\n\n\n\nconst josh = new joshjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n\n//# sourceURL=webpack://portafolio/./src/index.js?");

/***/ }),

/***/ "./src/js/cerrarredes.js":
/*!*******************************!*\
  !*** ./src/js/cerrarredes.js ***!
  \*******************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  let cerrarRedes = document.getElementById('cerrar-redes');\n\n  if (cerrarRedes) {\n    cerrarRedes.addEventListener('click', function (event) {\n      document.getElementById('redes').classList.toggle('quitar-redes');\n      event.preventDefault();\n    });\n  }\n});\n\n//# sourceURL=webpack://portafolio/./src/js/cerrarredes.js?");

/***/ }),

/***/ "./src/js/fondoabout.js":
/*!******************************!*\
  !*** ./src/js/fondoabout.js ***!
  \******************************/
/***/ (() => {

eval("let foto = document.getElementById('foto');\nlet about = document.getElementById('about');\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  about.addEventListener('mousemove', function (e) {\n    foto.style.right = e.clientX / 2 + 1 + 'px'; //  foto.style.top = e.clientY / 1 + 'px';\n  });\n});\n\n//# sourceURL=webpack://portafolio/./src/js/fondoabout.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  window.addEventListener('scroll', function () {\n    if (window.scrollY > 50) {\n      document.getElementById('header').classList.add('header-down');\n      document.getElementById('fondo').classList.add('fondo-down');\n    } else {\n      document.getElementById('header').classList.remove('header-down');\n      document.getElementById('fondo').classList.remove('fondo-down');\n    }\n  });\n});\n\n//# sourceURL=webpack://portafolio/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/modals.js":
/*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
/***/ (() => {

eval("const openEls = document.querySelectorAll(\"[data-open]\");\nconst closeEls = document.querySelectorAll(\"[data-close]\");\nconst isVisible = \"is-visible\";\nlet body = document.getElementsByTagName(\"body\")[0];\n\nfor (const el of openEls) {\n  el.addEventListener(\"click\", function () {\n    console.log(\"clicked\");\n    const modalId = this.dataset.open;\n    document.getElementById(modalId).classList.add(isVisible);\n    body.style.position = \"static\";\n    body.style.height = \"100%\";\n    body.style.overflow = \"hidden\";\n  });\n}\n\nfor (const el of closeEls) {\n  el.addEventListener(\"click\", function () {\n    this.parentElement.parentElement.parentElement.classList.remove(isVisible);\n    body.style.position = \"inherit\";\n    body.style.height = \"auto\";\n    body.style.overflow = \"visible\";\n  });\n}\n/* document.addEventListener(\"click\", e => {\n  if (e.target == document.querySelector(\".modals.is-visible\")) {\n    document.querySelector(\".modals.is-visible [data-close]\").click();\n  }\n}); */\n\n\ndocument.addEventListener(\"keyup\", e => {\n  // if we press the ESC\n  if (e.key == \"Escape\" && document.querySelector(\".modals.is-visible\")) {\n    document.querySelector(\".modals.is-visible [data-close]\").click();\n  }\n});\n/* Adaptado de:\n  https://webdesign.tutsplus.com/es/tutorials/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500, 2022.\n\n*/\n\n//# sourceURL=webpack://portafolio/./src/js/modals.js?");

/***/ }),

/***/ "./node_modules/joshjs/es6_module/josh.js":
/*!************************************************!*\
  !*** ./node_modules/joshjs/es6_module/josh.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Josh)\n/* harmony export */ });\n/**\n * Josh.js - A JavaScript library to animate content on page scroll.\n * Version: 1.0.8\n * Author: Al Mamun\n * License: MIT\n * Repo: https://github.com/mamunhpath/josh.js\n * Demo: https://mamunhpath.github.io/josh.js\n */\nclass Josh {\n  constructor(options = {}) {\n    // DOM Class for initialize Josh. Default class is josh-js\n    this.initClass = options.initClass || \"josh-js\";\n    // Selecting DOM element\n    this.initDom = document.querySelectorAll(\".\" + this.initClass);\n    // Animation library class. Default class is 'animate__animated'\n    this.animClass = options.animClass || \"animate__animated\";\n    // Number 0 to 1, 0.2 means if the element come to 20% percent of view it will animate. Default value is 0.2\n    this.offset = options.offset || 0.2;\n    // Boolean value to animate in mobile or not. Default value is true\n    this.animateInMobile =\n      typeof options.animateInMobile === \"undefined\"\n        ? true\n        : options.animateInMobile;\n    //To run on DOM change you need to pass the true value. Default value is false\n    this.onDOMChange =\n      typeof options.onDOMChange === \"undefined\" ? false : options.onDOMChange;\n    //Call intersectOnScroll method on constructor run\n    this.intersectOnScroll(this.initDom);\n    //Call callOnDOMChange method on constructor run\n    this.callOnDOMChange();\n    //Adding css in constructor run\n    this.addCss(this.initDom);\n  }\n  // Callback function for intersection observer\n  intersectionObserverCallback(entries, observer) {\n    const notMobile = !this.animateInMobile && this.isMobile();\n    entries.forEach((entry) => {\n      //Selecting target element\n      const targetElm = entry.target;\n      //Taking data from data attribute\n      const name = targetElm.dataset.joshAnimName, // Class name from animate.css\n        iteration = targetElm.dataset.joshIteration, // Animation iteration count\n        duration = targetElm.dataset.joshDuration, // Animation duration\n        delay = targetElm.dataset.joshAnimDelay; // Animation delay\n\n      if (entry.isIntersecting) {\n        let styles = `\n          visibility: visible;\n          animation-name: ${name};\n          animation-duration: ${duration};\n          animation-iteration-count: ${iteration};\n          animation-delay: ${delay};\n        `;\n        if (!notMobile) {\n          targetElm.style = targetElm.style.cssText + styles;\n        }\n\n        //Removing observer\n        observer.unobserve(targetElm);\n      }\n    });\n  }\n  //Adding css to DOM\n  addCss(targetElm) {\n    if (targetElm.length > 0) {\n      targetElm.forEach((elm) => {\n        this.cssUtil(elm);\n      });\n    } else {\n      this.cssUtil(targetElm);\n    }\n  }\n  //Css utility\n  cssUtil(targetNode) {\n    const notMobile = !this.animateInMobile && this.isMobile();\n    targetNode.classList.add(this.animClass);\n    if (!notMobile) {\n      // Initial time content will not show if that content not in the view.\n      targetNode.style = targetNode.style.cssText + \"visibility: hidden\";\n    }\n  }\n  // intersectOnScroll function to run animation in consturctor call\n  intersectOnScroll(domElement) {\n    //Checking is IntersectionObserver supported by browser\n    if (\"IntersectionObserver\" in window) {\n      const intetsectObserver = new IntersectionObserver(\n        this.intersectionObserverCallback.bind(this),\n        {\n          root: null,\n          rootMargin: \"0px\",\n          threshold: this.offset,\n        }\n      );\n      if (domElement.length > 0) {\n        //Observing every element\n        domElement.forEach((animItem) => {\n          intetsectObserver.observe(animItem);\n        });\n      } else {\n        //Observing single element\n        intetsectObserver.observe(domElement);\n      }\n    } else {\n      //If IntersectionObserver not supported by browser thowing error\n      throw new Error(\n        \"IntersectionObserver is not support by this browser. Try by adding pollyfil or use other library.\"\n      );\n    }\n  }\n\n  // checking the DOM change and re-run the IntersectionObserver\n  callOnDOMChange() {\n    window.addEventListener(\"DOMContentLoaded\", () => {\n      if (this.onDOMChange) {\n        // Using MutationObserver to check DOM change\n        const domChangeObserver = new MutationObserver((mutations) => {\n          mutations.forEach((mutation) => {\n            const newNodes = mutation.addedNodes; // DOM NodeList\n            if (newNodes !== null) {\n              newNodes.forEach((node) => {\n                //Calling IntersectionObserver again for DOM change\n                this.addCss(node);\n                this.intersectOnScroll(node);\n              });\n            }\n          });\n        });\n        // Options for the observer (which mutations to observe)\n        const config = {\n          childList: true,\n          subtree: true,\n        };\n\n        // Start observing the target node for configured mutations\n        domChangeObserver.observe(document.body, config);\n      }\n    });\n  }\n  //Check mobile device\n  isMobile() {\n    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(\n      navigator.userAgent\n    );\n  }\n}\n\n\n//# sourceURL=webpack://portafolio/./node_modules/joshjs/es6_module/josh.js?");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portafolio/./node_modules/animate.css/animate.css?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portafolio/./src/sass/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;