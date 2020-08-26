module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/proverbs_detail.js":
/*!***************************************!*\
  !*** ./components/proverbs_detail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/mgyaykal/Desktop/Myanmar Proverbs/components/proverbs_detail.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst proverbsDetail = ({\n  proverb\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, proverb === null ? \"\" : proverb.short), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }, proverb === null ? \"\" : proverb.creator));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (proverbsDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb3ZlcmJzX2RldGFpbC5qcz9jMTI4Il0sIm5hbWVzIjpbInByb3ZlcmJzRGV0YWlsIiwicHJvdmVyYiIsInNob3J0IiwiY3JlYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFpQjtBQUN0QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLE9BQU8sS0FBSyxJQUFaLEdBQW1CLEVBQW5CLEdBQXdCQSxPQUFPLENBQUNDLEtBQXJDLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELE9BQU8sS0FBSyxJQUFaLEdBQW1CLEVBQW5CLEdBQXdCQSxPQUFPLENBQUNFLE9BQXJDLENBRkYsQ0FERjtBQU1ELENBUEQ7O0FBVWVILDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm92ZXJic19kZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm92ZXJic0RldGFpbCA9ICh7IHByb3ZlcmIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+e3Byb3ZlcmIgPT09IG51bGwgPyBcIlwiIDogcHJvdmVyYi5zaG9ydH08L2gyPlxuICAgICAgPGg0Pntwcm92ZXJiID09PSBudWxsID8gXCJcIiA6IHByb3ZlcmIuY3JlYXRvcn08L2g0PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcHJvdmVyYnNEZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/proverbs_detail.js\n");

/***/ }),

/***/ "./components/proverbs_index.js":
/*!**************************************!*\
  !*** ./components/proverbs_index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/mgyaykal/Desktop/Myanmar Proverbs/components/proverbs_index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst proverbsList = ({\n  data,\n  selectProverb\n}) => {\n  let i = 1;\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 5\n    }\n  }, data.map(d => __jsx(\"div\", {\n    className: \"ui huge list\",\n    key: i++,\n    onClick: () => selectProverb(d),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, d.short)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (proverbsList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb3ZlcmJzX2luZGV4LmpzPzJkZDkiXSwibmFtZXMiOlsicHJvdmVyYnNMaXN0IiwiZGF0YSIsInNlbGVjdFByb3ZlcmIiLCJpIiwibWFwIiwiZCIsInNob3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBNkI7QUFDaEQsTUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsSUFBSSxDQUFDRyxHQUFMLENBQVNDLENBQUMsSUFDVDtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLE9BQUcsRUFBRUYsQ0FBQyxFQUFwQztBQUNFLFdBQU8sRUFBRSxNQUFNRCxhQUFhLENBQUNHLENBQUQsQ0FEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxDQUFDLENBQUNDLEtBREwsQ0FERixDQUZGLENBREQsQ0FESCxDQURGO0FBZUQsQ0FqQkQ7O0FBbUJlTiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvdmVyYnNfaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm92ZXJic0xpc3QgPSAoeyBkYXRhLCBzZWxlY3RQcm92ZXJiIH0pID0+IHtcbiAgbGV0IGkgPSAxO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YS5tYXAoZCA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaHVnZSBsaXN0XCIga2V5PXtpKyt9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UHJvdmVyYihkKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAge2Quc2hvcnR9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgKX1cbiAgICA8L2RpdiA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvdmVyYnNMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/proverbs_index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_proverbs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/proverbs_index */ \"./components/proverbs_index.js\");\n/* harmony import */ var _components_proverbs_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/proverbs_detail */ \"./components/proverbs_detail.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/mgyaykal/Desktop/Myanmar Proverbs/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst MyContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      text: \"\",\n      proverb: null\n    });\n\n    _defineProperty(this, \"onChange\", event => {\n      this.setState({\n        text: event.target.value\n      });\n    });\n\n    _defineProperty(this, \"onSelectProverb\", data => {\n      this.setState({\n        proverb: data\n      });\n    });\n  }\n\n  static async getInitialProps() {\n    let response, data;\n\n    try {\n      response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3001/proverbs');\n      data = await response.json();\n    } catch (error) {\n      console.log(error);\n    }\n\n    return {\n      data\n    };\n  }\n\n  render() {\n    return __jsx(MyContext.Provider, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      className: \"ui grid center aligned\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      className: \"twelve wide column header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: \"ui action input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    }, __jsx(\"input\", {\n      onChange: this.onChange,\n      type: \"text\",\n      placeholder: \"Search...\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }), __jsx(\"button\", {\n      className: \"ui button\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 15\n      }\n    }, \"Search\"))), __jsx(\"div\", {\n      className: \"six wide column\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }\n    }, __jsx(_components_proverbs_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      data: this.props.data,\n      selectProverb: this.onSelectProverb,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }\n    })), __jsx(\"div\", {\n      className: \"ten wide column\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }\n    }, __jsx(_components_proverbs_detail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      proverb: this.state.proverb,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }\n    }))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk15Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwidGV4dCIsInByb3ZlcmIiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJvbkNoYW5nZSIsInByb3BzIiwib25TZWxlY3RQcm92ZXJiIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BQU1BLFNBQVMsR0FBR0MsMkRBQWEsRUFBL0I7O0FBRUEsTUFBTUMsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1DQWUxQjtBQUNOQyxVQUFJLEVBQUUsRUFEQTtBQUVOQyxhQUFPLEVBQUU7QUFGSCxLQWYwQjs7QUFBQSxzQ0FvQnRCQyxLQUFELElBQVc7QUFDcEIsV0FBS0MsUUFBTCxDQUFjO0FBQUVILFlBQUksRUFBRUUsS0FBSyxDQUFDRSxNQUFOLENBQWFDO0FBQXJCLE9BQWQ7QUFDRCxLQXRCaUM7O0FBQUEsNkNBd0JmQyxJQUFELElBQVU7QUFDMUIsV0FBS0gsUUFBTCxDQUFjO0FBQUVGLGVBQU8sRUFBRUs7QUFBWCxPQUFkO0FBQ0QsS0ExQmlDO0FBQUE7O0FBRWxDLGVBQWFDLGVBQWIsR0FBK0I7QUFDN0IsUUFBSUMsUUFBSixFQUFjRixJQUFkOztBQUVBLFFBQUk7QUFDRkUsY0FBUSxHQUFHLE1BQU1DLHVEQUFLLENBQUMsZ0NBQUQsQ0FBdEI7QUFDQUgsVUFBSSxHQUFHLE1BQU1FLFFBQVEsQ0FBQ0UsSUFBVCxFQUFiO0FBQ0QsS0FIRCxDQUdFLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEOztBQUVELFdBQU87QUFBRUw7QUFBRixLQUFQO0FBQ0Q7O0FBZURRLFFBQU0sR0FBRztBQUNQLFdBQ0UsTUFBQyxTQUFELENBQVcsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxjQUFRLEVBQUUsS0FBS0MsUUFEakI7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUVjLGlCQUFXLEVBQUMsV0FGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBSUU7QUFBUSxlQUFTLEVBQUMsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixDQURGLENBREYsRUFTRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrRUFBRDtBQUFjLFVBQUksRUFBRSxLQUFLQyxLQUFMLENBQVdWLElBQS9CO0FBQXFDLG1CQUFhLEVBQUUsS0FBS1csZUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBVEYsRUFZRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtRUFBRDtBQUFnQixhQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXakIsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBWkYsQ0FERixDQURGO0FBb0JEOztBQWpEaUM7O0FBbURyQkosb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm92ZXJic0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wcm92ZXJic19pbmRleCc7XG5pbXBvcnQgUHJvdmVyYnNEZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy9wcm92ZXJic19kZXRhaWwnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuY29uc3QgTXlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBsZXQgcmVzcG9uc2UsIGRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb3ZlcmJzJyk7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG5cbiAgICByZXR1cm4geyBkYXRhIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHRleHQ6IFwiXCIsXG4gICAgcHJvdmVyYjogbnVsbFxuICB9XG5cbiAgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBvblNlbGVjdFByb3ZlcmIgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm92ZXJiOiBkYXRhIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNeUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZ3JpZCBjZW50ZXIgYWxpZ25lZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdlbHZlIHdpZGUgY29sdW1uIGhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBhY3Rpb24gaW5wdXRcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgYnV0dG9uXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpeCB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgPFByb3ZlcmJzTGlzdCBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IHNlbGVjdFByb3ZlcmI9e3RoaXMub25TZWxlY3RQcm92ZXJifSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVuIHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICA8UHJvdmVyYnNEZXRhaWwgcHJvdmVyYj17dGhpcy5zdGF0ZS5wcm92ZXJifSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTXlDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCI/NzNhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJpc29tb3JwaGljLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-fetch\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });