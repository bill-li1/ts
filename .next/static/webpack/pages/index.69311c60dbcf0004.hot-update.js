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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/quotes.json */ \"./util/quotes.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Quote = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    }), quote = ref[0], setQuotes = ref[1];\n    var getQuotes = function() {\n        var quoteIndex = Math.floor(Math.random() * _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        if (_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex].text !== \"\" && _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex].author !== \"\") {\n            setQuotes(_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex]);\n        } else {\n            getQuotes;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        __source: {\n            fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                onClick: getQuotes,\n                p: 4,\n                pb: 6,\n                textAlign: \"center\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"whiteAlpha.800\", \"whiteAlpha.300\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.text\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                onClick: getQuotes,\n                mr: 0,\n                ml: \"auto\",\n                pb: 2,\n                pt: 2,\n                maxW: \"250px\",\n                overflow: \"hidden\",\n                textOverflow: \"ellipsis\",\n                whiteSpace: \"nowrap\",\n                textAlign: \"center\",\n                transform: \"auto\",\n                translateY: \"-25%\",\n                translateX: \"-25%\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#FFDDCD\", \"whiteAlpha.300\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.author\n            })\n        ]\n    }));\n};\n_s(Quote, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Quote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);\nvar _c;\n$RefreshReg$(_c, \"Quote\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1b3Rlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlEO0FBQ3pCO0FBQ1c7OztBQUUzQyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBc0JGLEdBQW9CLEdBQXBCQSwrQ0FBUSxDQUFTLENBQUM7SUFBQSxDQUFDLEdBQXZDRyxLQUFLLEdBQWVILEdBQW9CLEtBQWpDSSxTQUFTLEdBQUlKLEdBQW9CO0lBQy9DLEdBQUssQ0FBQ0ssU0FBUyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7UUFDdkIsR0FBSyxDQUFDQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sS0FBS1IscURBQWdCO1FBQzlELEVBQUUsRUFDQUEsOENBQVMsQ0FBQ0ssVUFBVSxFQUFFSyxJQUFJLEtBQUssQ0FBRSxLQUNqQ1YsOENBQVMsQ0FBQ0ssVUFBVSxFQUFFTSxNQUFNLEtBQUssQ0FBRSxHQUNuQyxDQUFDO1lBQ0RSLFNBQVMsQ0FBQ0gsOENBQVMsQ0FBQ0ssVUFBVTtRQUNoQyxDQUFDLE1BQU0sQ0FBQztZQUNORCxTQUFTO1FBQ1gsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLHVFQUNIUCxpREFBRzs7Ozs7Ozs7aUZBQ0RBLGlEQUFHO2dCQUNGZSxZQUFZLEVBQUMsQ0FBSTtnQkFDakJDLE9BQU8sRUFBRVQsU0FBUztnQkFDbEJVLENBQUMsRUFBRSxDQUFDO2dCQUNKQyxFQUFFLEVBQUUsQ0FBQztnQkFDTEMsU0FBUyxFQUFDLENBQVE7Z0JBQ2xCQyxFQUFFLEVBQUVuQixtRUFBaUIsQ0FBQyxDQUFnQixpQkFBRSxDQUFnQjs7Ozs7OzswQkFFdkRJLEtBQUssQ0FBQ1EsSUFBSTs7aUZBRVpiLGlEQUFHO2dCQUNGZSxZQUFZLEVBQUMsQ0FBSTtnQkFDakJDLE9BQU8sRUFBRVQsU0FBUztnQkFDbEJjLEVBQUUsRUFBRSxDQUFDO2dCQUNMQyxFQUFFLEVBQUUsQ0FBTTtnQkFDVkosRUFBRSxFQUFFLENBQUM7Z0JBQ0xLLEVBQUUsRUFBRSxDQUFDO2dCQUNMQyxJQUFJLEVBQUMsQ0FBTztnQkFDWkMsUUFBUSxFQUFDLENBQVE7Z0JBQ2pCQyxZQUFZLEVBQUMsQ0FBVTtnQkFDdkJDLFVBQVUsRUFBQyxDQUFRO2dCQUNuQlIsU0FBUyxFQUFDLENBQVE7Z0JBQ2xCUyxTQUFTLEVBQUMsQ0FBTTtnQkFDaEJDLFVBQVUsRUFBQyxDQUFNO2dCQUNqQkMsVUFBVSxFQUFDLENBQU07Z0JBQ2pCVixFQUFFLEVBQUVuQixtRUFBaUIsQ0FBQyxDQUFTLFVBQUUsQ0FBZ0I7Ozs7Ozs7MEJBRWhESSxLQUFLLENBQUNTLE1BQU07Ozs7QUFJckIsQ0FBQztHQTlDS1YsS0FBSztLQUFMQSxLQUFLO0FBcURYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcXVvdGVzLnRzeD8xNmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYWxsUXVvdGVzIGZyb20gXCIuLi91dGlsL3F1b3Rlcy5qc29uXCJcblxuY29uc3QgUXVvdGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdW90ZSwgc2V0UXVvdGVzXSA9IHVzZVN0YXRlPElRdW90ZT4oe30pXG4gIGNvbnN0IGdldFF1b3RlcyA9ICgpID0+IHtcbiAgICBjb25zdCBxdW90ZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsUXVvdGVzLmxlbmd0aClcbiAgICBpZiAoXG4gICAgICBhbGxRdW90ZXNbcXVvdGVJbmRleF0udGV4dCAhPT0gXCJcIiAmJlxuICAgICAgYWxsUXVvdGVzW3F1b3RlSW5kZXhdLmF1dGhvciAhPT0gXCJcIlxuICAgICkge1xuICAgICAgc2V0UXVvdGVzKGFsbFF1b3Rlc1txdW90ZUluZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0UXVvdGVzXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxCb3hcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxuICAgICAgICBvbkNsaWNrPXtnZXRRdW90ZXN9XG4gICAgICAgIHA9ezR9XG4gICAgICAgIHBiPXs2fVxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCJ3aGl0ZUFscGhhLjgwMFwiLCBcIndoaXRlQWxwaGEuMzAwXCIpfVxuICAgICAgPlxuICAgICAgICB7cXVvdGUudGV4dH1cbiAgICAgIDwvQm94PlxuICAgICAgPEJveFxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgIG9uQ2xpY2s9e2dldFF1b3Rlc31cbiAgICAgICAgbXI9ezB9XG4gICAgICAgIG1sPXtcImF1dG9cIn1cbiAgICAgICAgcGI9ezJ9XG4gICAgICAgIHB0PXsyfVxuICAgICAgICBtYXhXPVwiMjUwcHhcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIHRleHRPdmVyZmxvdz1cImVsbGlwc2lzXCJcbiAgICAgICAgd2hpdGVTcGFjZT1cIm5vd3JhcFwiXG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIHRyYW5zZm9ybT1cImF1dG9cIlxuICAgICAgICB0cmFuc2xhdGVZPVwiLTI1JVwiXG4gICAgICAgIHRyYW5zbGF0ZVg9XCItMjUlXCJcbiAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwiI0ZGRERDRFwiLCBcIndoaXRlQWxwaGEuMzAwXCIpfVxuICAgICAgPlxuICAgICAgICB7cXVvdGUuYXV0aG9yfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuaW50ZXJmYWNlIElRdW90ZSB7XG4gIHRleHQ6IFN0cmluZ1xuICBhdXRob3I6IFN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBRdW90ZVxuIl0sIm5hbWVzIjpbIkJveCIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlU3RhdGUiLCJhbGxRdW90ZXMiLCJRdW90ZSIsInF1b3RlIiwic2V0UXVvdGVzIiwiZ2V0UXVvdGVzIiwicXVvdGVJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInRleHQiLCJhdXRob3IiLCJib3JkZXJSYWRpdXMiLCJvbkNsaWNrIiwicCIsInBiIiwidGV4dEFsaWduIiwiYmciLCJtciIsIm1sIiwicHQiLCJtYXhXIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/quotes.tsx\n");

/***/ })

});