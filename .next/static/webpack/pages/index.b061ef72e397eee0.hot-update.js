"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/quotes.tsx":
/*!*******************************!*\
  !*** ./components/quotes.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/quotes.json */ \"./util/quotes.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Quote = function() {\n    _s();\n    var quoteIndex = Math.floor(Math.random() * _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex]), quote = ref[0], setQuotes = ref[1];\n    var getQuotes = function() {\n        var quoteIndex = Math.floor(Math.random() * _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        setQuotes(_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex]);\n    };\n    var x = 25;\n    var y = 50;\n    var styles = {\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        __source: {\n            fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                onClick: getQuotes,\n                // p={3}\n                textAlign: \"center\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"whiteAlpha.800\", \"whiteAlpha.300\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.text\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                display: \"inline-block\",\n                onClick: getQuotes,\n                mb: 6,\n                pt: 3,\n                maxW: \"400px\",\n                overflow: \"hidden\",\n                textOverflow: \"ellipsis\",\n                whiteSpace: \"nowrap\",\n                textAlign: \"center\",\n                marginLeft: 500,\n                transform: \"auto\",\n                translateX: 500,\n                position: \"absolute\",\n                r: 0,\n                b: 0,\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#FFDDCD\", \"whiteAlpha.300\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.author\n            })\n        ]\n    }));\n};\n_s(Quote, \"rIR+agvXCKGn4tQPYPyac7eQYIA=\");\n_c = Quote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);\nvar _c;\n$RefreshReg$(_c, \"Quote\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1b3Rlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlEO0FBQ3pCO0FBQ1c7OztBQUUzQyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBQ0MsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEtBQUtMLHFEQUFnQjtJQUM5RCxHQUFLLENBQXNCRCxHQUF1QyxHQUF2Q0EsK0NBQVEsQ0FBU0MsOENBQVMsQ0FBQ0UsVUFBVSxJQUF6REssS0FBSyxHQUFlUixHQUF1QyxLQUFwRFMsU0FBUyxHQUFJVCxHQUF1QztJQUNsRSxHQUFLLENBQUNVLFNBQVMsR0FBRyxRQUNwQixHQUQwQixDQUFDO1FBQ3ZCLEdBQUssQ0FBQ1AsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEtBQUtMLHFEQUFnQjtRQUM5RFEsU0FBUyxDQUFDUiw4Q0FBUyxDQUFDRSxVQUFVO0lBQ2hDLENBQUM7SUFDRCxHQUFLLENBQUNRLENBQUMsR0FBRyxFQUFFO0lBQ1osR0FBSyxDQUFDQyxDQUFDLEdBQUcsRUFBRTtJQUNaLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFBQSxDQUFDO0lBQ2pCLE1BQU0sdUVBQ0hmLGlEQUFHOzs7Ozs7OztpRkFDREEsaURBQUc7Z0JBQ0ZnQixZQUFZLEVBQUMsQ0FBSTtnQkFDakJDLE9BQU8sRUFBRUwsU0FBUztnQkFDbEIsRUFBUTtnQkFDUk0sU0FBUyxFQUFDLENBQVE7Z0JBQ2xCQyxFQUFFLEVBQUVsQixtRUFBaUIsQ0FBQyxDQUFnQixpQkFBRSxDQUFnQjs7Ozs7OzswQkFFdkRTLEtBQUssQ0FBQ1UsSUFBSTs7aUZBRVpwQixpREFBRztnQkFDRmdCLFlBQVksRUFBQyxDQUFJO2dCQUNqQkssT0FBTyxFQUFDLENBQWM7Z0JBQ3RCSixPQUFPLEVBQUVMLFNBQVM7Z0JBQ2xCVSxFQUFFLEVBQUUsQ0FBQztnQkFDTEMsRUFBRSxFQUFFLENBQUM7Z0JBQ0xDLElBQUksRUFBQyxDQUFPO2dCQUNaQyxRQUFRLEVBQUMsQ0FBUTtnQkFDakJDLFlBQVksRUFBQyxDQUFVO2dCQUN2QkMsVUFBVSxFQUFDLENBQVE7Z0JBQ25CVCxTQUFTLEVBQUMsQ0FBUTtnQkFDbEJVLFVBQVUsRUFBRSxHQUFHO2dCQUNmQyxTQUFTLEVBQUMsQ0FBTTtnQkFDaEJDLFVBQVUsRUFBRSxHQUFHO2dCQUNmQyxRQUFRLEVBQUMsQ0FBVTtnQkFDbkJDLENBQUMsRUFBRSxDQUFDO2dCQUNKQyxDQUFDLEVBQUUsQ0FBQztnQkFDSmQsRUFBRSxFQUFFbEIsbUVBQWlCLENBQUMsQ0FBUyxVQUFFLENBQWdCOzs7Ozs7OzBCQUVoRFMsS0FBSyxDQUFDd0IsTUFBTTs7OztBQUlyQixDQUFDO0dBNUNLOUIsS0FBSztLQUFMQSxLQUFLO0FBbURYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcXVvdGVzLnRzeD8xNmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYWxsUXVvdGVzIGZyb20gXCIuLi91dGlsL3F1b3Rlcy5qc29uXCJcblxuY29uc3QgUXVvdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHF1b3RlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGxRdW90ZXMubGVuZ3RoKVxuICBjb25zdCBbcXVvdGUsIHNldFF1b3Rlc10gPSB1c2VTdGF0ZTxJUXVvdGU+KGFsbFF1b3Rlc1txdW90ZUluZGV4XSlcbiAgY29uc3QgZ2V0UXVvdGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHF1b3RlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGxRdW90ZXMubGVuZ3RoKVxuICAgIHNldFF1b3RlcyhhbGxRdW90ZXNbcXVvdGVJbmRleF0pXG4gIH1cbiAgY29uc3QgeCA9IDI1XG4gIGNvbnN0IHkgPSA1MFxuICBjb25zdCBzdHlsZXMgPSB7fVxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgb25DbGljaz17Z2V0UXVvdGVzfVxuICAgICAgICAvLyBwPXszfVxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCJ3aGl0ZUFscGhhLjgwMFwiLCBcIndoaXRlQWxwaGEuMzAwXCIpfVxuICAgICAgPlxuICAgICAgICB7cXVvdGUudGV4dH1cbiAgICAgIDwvQm94PlxuICAgICAgPEJveFxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICBvbkNsaWNrPXtnZXRRdW90ZXN9XG4gICAgICAgIG1iPXs2fVxuICAgICAgICBwdD17M31cbiAgICAgICAgbWF4Vz1cIjQwMHB4XCJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICB0ZXh0T3ZlcmZsb3c9XCJlbGxpcHNpc1wiXG4gICAgICAgIHdoaXRlU3BhY2U9XCJub3dyYXBcIlxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBtYXJnaW5MZWZ0PXs1MDB9XG4gICAgICAgIHRyYW5zZm9ybT1cImF1dG9cIlxuICAgICAgICB0cmFuc2xhdGVYPXs1MDB9XG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICByPXswfVxuICAgICAgICBiPXswfVxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCIjRkZERENEXCIsIFwid2hpdGVBbHBoYS4zMDBcIil9XG4gICAgICA+XG4gICAgICAgIHtxdW90ZS5hdXRob3J9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5pbnRlcmZhY2UgSVF1b3RlIHtcbiAgdGV4dDogU3RyaW5nXG4gIGF1dGhvcjogU3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlXG4iXSwibmFtZXMiOlsiQm94IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VTdGF0ZSIsImFsbFF1b3RlcyIsIlF1b3RlIiwicXVvdGVJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInF1b3RlIiwic2V0UXVvdGVzIiwiZ2V0UXVvdGVzIiwieCIsInkiLCJzdHlsZXMiLCJib3JkZXJSYWRpdXMiLCJvbkNsaWNrIiwidGV4dEFsaWduIiwiYmciLCJ0ZXh0IiwiZGlzcGxheSIsIm1iIiwicHQiLCJtYXhXIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwibWFyZ2luTGVmdCIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZVgiLCJwb3NpdGlvbiIsInIiLCJiIiwiYXV0aG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/quotes.tsx\n");

/***/ })

});