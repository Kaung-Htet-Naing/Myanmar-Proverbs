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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/khn/Desktop/Myanmar Proverbs/components/proverbs_detail.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst proverbsDetail = ({\n  proverb\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, proverb === null ? \"\" : proverb.short), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }, proverb === null ? \"\" : proverb.creator));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (proverbsDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb3ZlcmJzX2RldGFpbC5qcz9jMTI4Il0sIm5hbWVzIjpbInByb3ZlcmJzRGV0YWlsIiwicHJvdmVyYiIsInNob3J0IiwiY3JlYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFpQjtBQUN0QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLE9BQU8sS0FBSyxJQUFaLEdBQW1CLEVBQW5CLEdBQXdCQSxPQUFPLENBQUNDLEtBQXJDLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELE9BQU8sS0FBSyxJQUFaLEdBQW1CLEVBQW5CLEdBQXdCQSxPQUFPLENBQUNFLE9BQXJDLENBRkYsQ0FERjtBQU1ELENBUEQ7O0FBVWVILDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm92ZXJic19kZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm92ZXJic0RldGFpbCA9ICh7IHByb3ZlcmIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+e3Byb3ZlcmIgPT09IG51bGwgPyBcIlwiIDogcHJvdmVyYi5zaG9ydH08L2gyPlxuICAgICAgPGg0Pntwcm92ZXJiID09PSBudWxsID8gXCJcIiA6IHByb3ZlcmIuY3JlYXRvcn08L2g0PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcHJvdmVyYnNEZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/proverbs_detail.js\n");

/***/ }),

/***/ "./components/proverbs_index.js":
/*!**************************************!*\
  !*** ./components/proverbs_index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/khn/Desktop/Myanmar Proverbs/components/proverbs_index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst proverbsList = ({\n  data,\n  selectProverb\n}) => {\n  let i = 1;\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 5\n    }\n  }, data.map(d => __jsx(\"div\", {\n    className: \"ui huge list\",\n    key: i++,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"header\",\n    onClick: () => selectProverb(d),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, d.short)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (proverbsList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb3ZlcmJzX2luZGV4LmpzPzJkZDkiXSwibmFtZXMiOlsicHJvdmVyYnNMaXN0IiwiZGF0YSIsInNlbGVjdFByb3ZlcmIiLCJpIiwibWFwIiwiZCIsInNob3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBNkI7QUFDaEQsTUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsSUFBSSxDQUFDRyxHQUFMLENBQVNDLENBQUMsSUFDVDtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLE9BQUcsRUFBRUYsQ0FBQyxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsUUFBYjtBQUNFLFdBQU8sRUFBRSxNQUFNRCxhQUFhLENBQUNHLENBQUQsQ0FEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHQSxDQUFDLENBQUNDLEtBRkwsQ0FERixDQURGLENBREQsQ0FESCxDQURGO0FBZUQsQ0FqQkQ7O0FBbUJlTiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvdmVyYnNfaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm92ZXJic0xpc3QgPSAoeyBkYXRhLCBzZWxlY3RQcm92ZXJiIH0pID0+IHtcbiAgbGV0IGkgPSAxO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YS5tYXAoZCA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaHVnZSBsaXN0XCIga2V5PXtpKyt9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UHJvdmVyYihkKX0+XG4gICAgICAgICAgICAgIHtkLnNob3J0fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvdmVyYnNMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/proverbs_index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_proverbs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/proverbs_index */ \"./components/proverbs_index.js\");\n/* harmony import */ var _components_proverbs_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/proverbs_detail */ \"./components/proverbs_detail.js\");\n/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/counterActions */ \"./redux/actions/counterActions.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/home/khn/Desktop/Myanmar Proverbs/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      text: \"\",\n      proverb: null\n    });\n\n    _defineProperty(this, \"onChange\", event => {\n      this.setState({\n        text: event.target.value\n      });\n    });\n\n    _defineProperty(this, \"onSelectProverb\", data => {\n      this.setState({\n        proverb: data\n      });\n    });\n  }\n\n  static async getInitialProps() {\n    let response, data;\n\n    try {\n      response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3001/proverbs');\n      data = await response.json();\n    } catch (error) {\n      console.log(error);\n    }\n\n    return {\n      data\n    };\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      className: \"jsx-2790899829\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-2790899829\" + \" \" + \"ui grid center aligned\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-2790899829\" + \" \" + \"twelve wide column header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-2790899829\" + \" \" + \"ui action input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, __jsx(\"input\", {\n      onChange: this.onChange,\n      type: \"text\",\n      placeholder: \"Search...\",\n      className: \"jsx-2790899829\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }\n    }), __jsx(\"button\", {\n      className: \"jsx-2790899829\" + \" \" + \"ui button\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }\n    }, \"Search\"))), __jsx(\"div\", {\n      className: \"jsx-2790899829\" + \" \" + \"six wide column\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }\n    }, __jsx(_components_proverbs_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      data: this.props.data,\n      selectProverb: this.onSelectProverb,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    })), __jsx(\"div\", {\n      className: \"jsx-2790899829\" + \" \" + \"ten wide column\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }\n    }, __jsx(_components_proverbs_detail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      proverb: this.state.proverb,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }\n    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"2790899829\",\n      __self: this\n    }, \"@font-face{font-family:MMfont;src:url('../NotoSansMyanmar-Regular.ttf');}body{font-family:'MMtfont',sans-serif !important;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tobi9EZXNrdG9wL015YW5tYXIgUHJvdmVyYnMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURXLEFBR2dDLEFBSXlCLG1CQUhGLHlCQUk1QyxpQkFIQSIsImZpbGUiOiIvaG9tZS9raG4vRGVza3RvcC9NeWFubWFyIFByb3ZlcmJzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3ZlcmJzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Byb3ZlcmJzX2luZGV4JztcbmltcG9ydCBQcm92ZXJic0RldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL3Byb3ZlcmJzX2RldGFpbCc7XG5pbXBvcnQgeyBnZXRQcm92ZXJicyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cbiAgICBsZXQgcmVzcG9uc2UsIGRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb3ZlcmJzJyk7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG5cbiAgICByZXR1cm4geyBkYXRhIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHRleHQ6IFwiXCIsXG4gICAgcHJvdmVyYjogbnVsbFxuICB9XG5cblxuXG4gIG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgb25TZWxlY3RQcm92ZXJiID0gKGRhdGEpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvdmVyYjogZGF0YSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWQgY2VudGVyIGFsaWduZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3ZWx2ZSB3aWRlIGNvbHVtbiBoZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgYWN0aW9uIGlucHV0XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXggd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgICAgIDxQcm92ZXJic0xpc3QgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBzZWxlY3RQcm92ZXJiPXt0aGlzLm9uU2VsZWN0UHJvdmVyYn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbiB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgPFByb3ZlcmJzRGV0YWlsIHByb3ZlcmI9e3RoaXMuc3RhdGUucHJvdmVyYn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgQGZvbnQtZmFjZXtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNTWZvbnQ7XG4gICAgICAgICAgICBzcmM6IHVybCgnLi4vTm90b1NhbnNNeWFubWFyLVJlZ3VsYXIudHRmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01NdGZvbnQnLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcHJvdmVyYnMgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3ZlcmJzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgZ2V0UHJvdmVyYnNcbn0pKEluZGV4KTsiXX0= */\\n/*@ sourceURL=/home/khn/Desktop/Myanmar Proverbs/pages/index.js */\"));\n  }\n\n}\n\nconst mapStateToProps = ({\n  proverbs\n}) => {\n  return {\n    proverbs\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps, {\n  getProverbs: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_4__[\"getProverbs\"]\n})(Index));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0ZXh0IiwicHJvdmVyYiIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsIm9uQ2hhbmdlIiwicHJvcHMiLCJvblNlbGVjdFByb3ZlcmIiLCJzdGF0ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInByb3ZlcmJzIiwiY29ubmVjdCIsImdldFByb3ZlcmJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CQyw0Q0FBSyxDQUFDQyxTQUExQixDQUFvQztBQUFBO0FBQUE7O0FBQUEsbUNBZ0IxQjtBQUNOQyxVQUFJLEVBQUUsRUFEQTtBQUVOQyxhQUFPLEVBQUU7QUFGSCxLQWhCMEI7O0FBQUEsc0NBdUJ0QkMsS0FBRCxJQUFXO0FBQ3BCLFdBQUtDLFFBQUwsQ0FBYztBQUFFSCxZQUFJLEVBQUVFLEtBQUssQ0FBQ0UsTUFBTixDQUFhQztBQUFyQixPQUFkO0FBQ0QsS0F6QmlDOztBQUFBLDZDQTJCZkMsSUFBRCxJQUFVO0FBQzFCLFdBQUtILFFBQUwsQ0FBYztBQUFFRixlQUFPLEVBQUVLO0FBQVgsT0FBZDtBQUNELEtBN0JpQztBQUFBOztBQUVsQyxlQUFhQyxlQUFiLEdBQStCO0FBRTdCLFFBQUlDLFFBQUosRUFBY0YsSUFBZDs7QUFFQSxRQUFJO0FBQ0ZFLGNBQVEsR0FBRyxNQUFNQyx1REFBSyxDQUFDLGdDQUFELENBQXRCO0FBQ0FILFVBQUksR0FBRyxNQUFNRSxRQUFRLENBQUNFLElBQVQsRUFBYjtBQUNELEtBSEQsQ0FHRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDs7QUFFRCxXQUFPO0FBQUVMO0FBQUYsS0FBUDtBQUNEOztBQWlCRFEsUUFBTSxHQUFHO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGNBQVEsRUFBRSxLQUFLQyxRQURqQjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBRWMsaUJBQVcsRUFBQyxXQUYxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUlFO0FBQUEsMENBQWtCLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsQ0FERixDQURGLEVBU0U7QUFBQSwwQ0FBZSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrRUFBRDtBQUFjLFVBQUksRUFBRSxLQUFLQyxLQUFMLENBQVdWLElBQS9CO0FBQXFDLG1CQUFhLEVBQUUsS0FBS1csZUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBVEYsRUFZRTtBQUFBLDBDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG1FQUFEO0FBQWdCLGFBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdqQixPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FaRixDQURGO0FBQUE7QUFBQTtBQUFBLG1vR0FERjtBQStCRDs7QUEvRGlDOztBQWtFcEMsTUFBTWtCLGVBQWUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUN4QyxTQUFPO0FBQ0xBO0FBREssR0FBUDtBQUdELENBSkQ7O0FBTWVDLDBIQUFPLENBQUNGLGVBQUQsRUFBa0I7QUFDdENHLHdGQUFXQTtBQUQyQixDQUFsQixDQUFQLENBRVp6QixLQUZZLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm92ZXJic0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wcm92ZXJic19pbmRleCc7XG5pbXBvcnQgUHJvdmVyYnNEZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy9wcm92ZXJic19kZXRhaWwnO1xuaW1wb3J0IHsgZ2V0UHJvdmVyYnMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXG4gICAgbGV0IHJlc3BvbnNlLCBkYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wcm92ZXJicycpO1xuICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGF0YSB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB0ZXh0OiBcIlwiLFxuICAgIHByb3ZlcmI6IG51bGxcbiAgfVxuXG5cblxuICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIG9uU2VsZWN0UHJvdmVyYiA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb3ZlcmI6IGRhdGEgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBncmlkIGNlbnRlciBhbGlnbmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2VsdmUgd2lkZSBjb2x1bW4gaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGFjdGlvbiBpbnB1dFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b25cIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4IHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICA8UHJvdmVyYnNMaXN0IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gc2VsZWN0UHJvdmVyYj17dGhpcy5vblNlbGVjdFByb3ZlcmJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW4gd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgICAgIDxQcm92ZXJic0RldGFpbCBwcm92ZXJiPXt0aGlzLnN0YXRlLnByb3ZlcmJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgIEBmb250LWZhY2V7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTU1mb250O1xuICAgICAgICAgICAgc3JjOiB1cmwoJy4uL05vdG9TYW5zTXlhbm1hci1SZWd1bGFyLnR0ZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNTXRmb250JyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHByb3ZlcmJzIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm92ZXJic1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG4gIGdldFByb3ZlcmJzXG59KShJbmRleCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: GET_PROVERBS, getProverbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PROVERBS\", function() { return GET_PROVERBS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProverbs\", function() { return getProverbs; });\n//Action Types\nconst GET_PROVERBS = \"GET_PROVERBS\"; //Action Creator\n\nconst getProverbs = () => {\n  {\n    type: GET_PROVERBS;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zLmpzPzkzMmMiXSwibmFtZXMiOlsiR0VUX1BST1ZFUkJTIiwiZ2V0UHJvdmVyYnMiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1BLFlBQVksR0FBRyxjQUFyQixDLENBRVA7O0FBQ08sTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDN0I7QUFBRUMsUUFBSSxFQUFFRixZQUFZO0FBQUU7QUFDekIsQ0FGTSIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0FjdGlvbiBUeXBlc1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9WRVJCUyA9IFwiR0VUX1BST1ZFUkJTXCI7XG5cbi8vQWN0aW9uIENyZWF0b3JcbmV4cG9ydCBjb25zdCBnZXRQcm92ZXJicyA9ICgpID0+IHtcbiAgICB7IHR5cGU6IEdFVF9QUk9WRVJCUyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/counterActions.js\n");

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

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });