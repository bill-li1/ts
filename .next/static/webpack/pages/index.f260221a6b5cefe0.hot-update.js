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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/quotes.json */ \"./util/quotes.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Quote = function() {\n    _s();\n    var quoteIndex = Math.floor(Math.random() * _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex]), quote = ref[0], setQuotes = ref[1];\n    var getQuotes = function() {\n        var quoteIndex = Math.floor(Math.random() * _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        setQuotes(_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex]);\n    };\n    var x = 25;\n    var y = 50;\n    var styles = {\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        __source: {\n            fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                onClick: getQuotes,\n                p: 3,\n                // pb={3}\n                textAlign: \"center\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"whiteAlpha.800\", \"whiteAlpha.300\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.text\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                display: \"inline-block\",\n                onClick: getQuotes,\n                pb: 3,\n                pt: 3,\n                pl: 6,\n                pr: 6,\n                maxW: \"400px\",\n                overflow: \"hidden\",\n                textOverflow: \"ellipsis\",\n                whiteSpace: \"nowrap\",\n                textAlign: \"center\",\n                transform: \"auto\",\n                translateY: \"-25%\",\n                translateX: \"525px\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#FFDDCD\", \"whiteAlpha.300\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.author\n            })\n        ]\n    }));\n};\n_s(Quote, \"rIR+agvXCKGn4tQPYPyac7eQYIA=\");\n_c = Quote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);\nvar _c;\n$RefreshReg$(_c, \"Quote\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1b3Rlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlEO0FBQ3pCO0FBQ1c7OztBQUUzQyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBQ0MsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEtBQUtMLHFEQUFnQjtJQUM5RCxHQUFLLENBQXNCRCxHQUF1QyxHQUF2Q0EsK0NBQVEsQ0FBU0MsOENBQVMsQ0FBQ0UsVUFBVSxJQUF6REssS0FBSyxHQUFlUixHQUF1QyxLQUFwRFMsU0FBUyxHQUFJVCxHQUF1QztJQUNsRSxHQUFLLENBQUNVLFNBQVMsR0FBRyxRQUNwQixHQUQwQixDQUFDO1FBQ3ZCLEdBQUssQ0FBQ1AsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEtBQUtMLHFEQUFnQjtRQUM5RFEsU0FBUyxDQUFDUiw4Q0FBUyxDQUFDRSxVQUFVO0lBQ2hDLENBQUM7SUFDRCxHQUFLLENBQUNRLENBQUMsR0FBRyxFQUFFO0lBQ1osR0FBSyxDQUFDQyxDQUFDLEdBQUcsRUFBRTtJQUNaLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFBQSxDQUFDO0lBQ2pCLE1BQU0sdUVBQ0hmLGlEQUFHOzs7Ozs7OztpRkFDREEsaURBQUc7Z0JBQ0ZnQixZQUFZLEVBQUMsQ0FBSTtnQkFDakJDLE9BQU8sRUFBRUwsU0FBUztnQkFDbEJNLENBQUMsRUFBRSxDQUFDO2dCQUNKLEVBQVM7Z0JBQ1RDLFNBQVMsRUFBQyxDQUFRO2dCQUNsQkMsRUFBRSxFQUFFbkIsbUVBQWlCLENBQUMsQ0FBZ0IsaUJBQUUsQ0FBZ0I7Ozs7Ozs7MEJBRXZEUyxLQUFLLENBQUNXLElBQUk7O2lGQUVackIsaURBQUc7Z0JBQ0ZnQixZQUFZLEVBQUMsQ0FBSTtnQkFDakJNLE9BQU8sRUFBQyxDQUFjO2dCQUN0QkwsT0FBTyxFQUFFTCxTQUFTO2dCQUNsQlcsRUFBRSxFQUFFLENBQUM7Z0JBQ0xDLEVBQUUsRUFBRSxDQUFDO2dCQUNMQyxFQUFFLEVBQUUsQ0FBQztnQkFDTEMsRUFBRSxFQUFFLENBQUM7Z0JBQ0xDLElBQUksRUFBQyxDQUFPO2dCQUNaQyxRQUFRLEVBQUMsQ0FBUTtnQkFDakJDLFlBQVksRUFBQyxDQUFVO2dCQUN2QkMsVUFBVSxFQUFDLENBQVE7Z0JBQ25CWCxTQUFTLEVBQUMsQ0FBUTtnQkFDbEJZLFNBQVMsRUFBQyxDQUFNO2dCQUNoQkMsVUFBVSxFQUFDLENBQU07Z0JBQ2pCQyxVQUFVLEVBQUMsQ0FBTztnQkFDbEJiLEVBQUUsRUFBRW5CLG1FQUFpQixDQUFDLENBQVMsVUFBRSxDQUFnQjs7Ozs7OzswQkFFaERTLEtBQUssQ0FBQ3dCLE1BQU07Ozs7QUFJckIsQ0FBQztHQTVDSzlCLEtBQUs7S0FBTEEsS0FBSztBQW1EWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3F1b3Rlcy50c3g/MTZiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGFsbFF1b3RlcyBmcm9tIFwiLi4vdXRpbC9xdW90ZXMuanNvblwiXG5cbmNvbnN0IFF1b3RlID0gKCkgPT4ge1xuICBjb25zdCBxdW90ZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsUXVvdGVzLmxlbmd0aClcbiAgY29uc3QgW3F1b3RlLCBzZXRRdW90ZXNdID0gdXNlU3RhdGU8SVF1b3RlPihhbGxRdW90ZXNbcXVvdGVJbmRleF0pXG4gIGNvbnN0IGdldFF1b3RlcyA9ICgpID0+IHtcbiAgICBjb25zdCBxdW90ZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsUXVvdGVzLmxlbmd0aClcbiAgICBzZXRRdW90ZXMoYWxsUXVvdGVzW3F1b3RlSW5kZXhdKVxuICB9XG4gIGNvbnN0IHggPSAyNVxuICBjb25zdCB5ID0gNTBcbiAgY29uc3Qgc3R5bGVzID0ge31cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEJveFxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgIG9uQ2xpY2s9e2dldFF1b3Rlc31cbiAgICAgICAgcD17M31cbiAgICAgICAgLy8gcGI9ezN9XG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlQWxwaGEuODAwXCIsIFwid2hpdGVBbHBoYS4zMDBcIil9XG4gICAgICA+XG4gICAgICAgIHtxdW90ZS50ZXh0fVxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXG4gICAgICAgIG9uQ2xpY2s9e2dldFF1b3Rlc31cbiAgICAgICAgcGI9ezN9XG4gICAgICAgIHB0PXszfVxuICAgICAgICBwbD17Nn1cbiAgICAgICAgcHI9ezZ9XG4gICAgICAgIG1heFc9XCI0MDBweFwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgdGV4dE92ZXJmbG93PVwiZWxsaXBzaXNcIlxuICAgICAgICB3aGl0ZVNwYWNlPVwibm93cmFwXCJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgdHJhbnNmb3JtPVwiYXV0b1wiXG4gICAgICAgIHRyYW5zbGF0ZVk9XCItMjUlXCJcbiAgICAgICAgdHJhbnNsYXRlWD1cIjUyNXB4XCJcbiAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwiI0ZGRERDRFwiLCBcIndoaXRlQWxwaGEuMzAwXCIpfVxuICAgICAgPlxuICAgICAgICB7cXVvdGUuYXV0aG9yfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuaW50ZXJmYWNlIElRdW90ZSB7XG4gIHRleHQ6IFN0cmluZ1xuICBhdXRob3I6IFN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBRdW90ZVxuIl0sIm5hbWVzIjpbIkJveCIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlU3RhdGUiLCJhbGxRdW90ZXMiLCJRdW90ZSIsInF1b3RlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJxdW90ZSIsInNldFF1b3RlcyIsImdldFF1b3RlcyIsIngiLCJ5Iiwic3R5bGVzIiwiYm9yZGVyUmFkaXVzIiwib25DbGljayIsInAiLCJ0ZXh0QWxpZ24iLCJiZyIsInRleHQiLCJkaXNwbGF5IiwicGIiLCJwdCIsInBsIiwicHIiLCJtYXhXIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVgiLCJhdXRob3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/quotes.tsx\n");

/***/ })

});