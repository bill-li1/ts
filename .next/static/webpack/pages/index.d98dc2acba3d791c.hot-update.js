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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/quotes.json */ \"./util/quotes.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Quote = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        text: \"\",\n        author: \"\"\n    }), quote = ref[0], setQuotes = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getQuotes;\n    }, []);\n    var getQuotes = function() {\n        var quoteIndex = Math.floor(Math.random() * _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        if (_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex].text !== null && _util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex].author !== null) {\n            setQuotes(_util_quotes_json__WEBPACK_IMPORTED_MODULE_2__[quoteIndex]);\n        } else {\n            getQuotes;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        __source: {\n            fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n            lineNumber: 28,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                onClick: getQuotes,\n                p: 3,\n                pb: 5,\n                textAlign: \"center\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"whiteAlpha.800\", \"whiteAlpha.200\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.text\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                onClick: getQuotes,\n                mr: 0,\n                ml: \"auto\",\n                pb: 2,\n                pt: 2,\n                maxW: \"250px\",\n                overflow: \"hidden\",\n                textOverflow: \"ellipsis\",\n                whiteSpace: \"nowrap\",\n                textAlign: \"center\",\n                transform: \"auto\",\n                translateY: \"-25%\",\n                translateX: \"-15%\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#FFDDCD\", \"#5C4033\"),\n                __source: {\n                    fileName: \"/Users/bill.li/Projects/ts/components/quotes.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quote.author\n            })\n        ]\n    }));\n};\n_s(Quote, \"EV4mO7BVq2Yhqo546mBnzfLoVvk=\");\n_c = Quote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);\nvar _c;\n$RefreshReg$(_c, \"Quote\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1b3Rlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlEO0FBQ2Q7QUFDQTs7O0FBRTNDLEdBQUssQ0FBQ0ssS0FBSyxHQUFHLFFBQ2QsR0FEb0IsQ0FBQzs7SUFDbkIsR0FBSyxDQUFzQkgsR0FHekIsR0FIeUJBLCtDQUFRLENBQVMsQ0FBQztRQUMzQ0ksSUFBSSxFQUFFLENBQUU7UUFDUkMsTUFBTSxFQUFFLENBQUU7SUFDWixDQUFDLEdBSE1DLEtBQUssR0FBZU4sR0FHekIsS0FIWU8sU0FBUyxHQUFJUCxHQUd6QjtJQUVGQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmTyxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ0EsU0FBUyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7UUFDdkIsR0FBSyxDQUFDQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sS0FBS1YscURBQWdCO1FBQzlELEVBQUUsRUFDQUEsOENBQVMsQ0FBQ08sVUFBVSxFQUFFTCxJQUFJLEtBQUssSUFBSSxJQUNuQ0YsOENBQVMsQ0FBQ08sVUFBVSxFQUFFSixNQUFNLEtBQUssSUFBSSxFQUNyQyxDQUFDO1lBQ0RFLFNBQVMsQ0FBQ0wsOENBQVMsQ0FBQ08sVUFBVTtRQUNoQyxDQUFDLE1BQU0sQ0FBQztZQUNORCxTQUFTO1FBQ1gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLHVFQUNIVixpREFBRzs7Ozs7Ozs7aUZBQ0RBLGlEQUFHO2dCQUNGZ0IsWUFBWSxFQUFDLENBQUk7Z0JBQ2pCQyxPQUFPLEVBQUVQLFNBQVM7Z0JBQ2xCUSxDQUFDLEVBQUUsQ0FBQztnQkFDSkMsRUFBRSxFQUFFLENBQUM7Z0JBQ0xDLFNBQVMsRUFBQyxDQUFRO2dCQUNsQkMsRUFBRSxFQUFFcEIsbUVBQWlCLENBQUMsQ0FBZ0IsaUJBQUUsQ0FBZ0I7Ozs7Ozs7MEJBRXZETyxLQUFLLENBQUNGLElBQUk7O2lGQUVaTixpREFBRztnQkFDRmdCLFlBQVksRUFBQyxDQUFJO2dCQUNqQkMsT0FBTyxFQUFFUCxTQUFTO2dCQUNsQlksRUFBRSxFQUFFLENBQUM7Z0JBQ0xDLEVBQUUsRUFBRSxDQUFNO2dCQUNWSixFQUFFLEVBQUUsQ0FBQztnQkFDTEssRUFBRSxFQUFFLENBQUM7Z0JBQ0xDLElBQUksRUFBQyxDQUFPO2dCQUNaQyxRQUFRLEVBQUMsQ0FBUTtnQkFDakJDLFlBQVksRUFBQyxDQUFVO2dCQUN2QkMsVUFBVSxFQUFDLENBQVE7Z0JBQ25CUixTQUFTLEVBQUMsQ0FBUTtnQkFDbEJTLFNBQVMsRUFBQyxDQUFNO2dCQUNoQkMsVUFBVSxFQUFDLENBQU07Z0JBQ2pCQyxVQUFVLEVBQUMsQ0FBTTtnQkFDakJWLEVBQUUsRUFBRXBCLG1FQUFpQixDQUFDLENBQVMsVUFBRSxDQUFTOzs7Ozs7OzBCQUV6Q08sS0FBSyxDQUFDRCxNQUFNOzs7O0FBSXJCLENBQUM7R0F2REtGLEtBQUs7S0FBTEEsS0FBSztBQThEWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3F1b3Rlcy50c3g/MTZiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYWxsUXVvdGVzIGZyb20gXCIuLi91dGlsL3F1b3Rlcy5qc29uXCJcblxuY29uc3QgUXVvdGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdW90ZSwgc2V0UXVvdGVzXSA9IHVzZVN0YXRlPElRdW90ZT4oe1xuICAgIHRleHQ6IFwiXCIsXG4gICAgYXV0aG9yOiBcIlwiLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UXVvdGVzXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGdldFF1b3RlcyA9ICgpID0+IHtcbiAgICBjb25zdCBxdW90ZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsUXVvdGVzLmxlbmd0aClcbiAgICBpZiAoXG4gICAgICBhbGxRdW90ZXNbcXVvdGVJbmRleF0udGV4dCAhPT0gbnVsbCAmJlxuICAgICAgYWxsUXVvdGVzW3F1b3RlSW5kZXhdLmF1dGhvciAhPT0gbnVsbFxuICAgICkge1xuICAgICAgc2V0UXVvdGVzKGFsbFF1b3Rlc1txdW90ZUluZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0UXVvdGVzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEJveFxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgIG9uQ2xpY2s9e2dldFF1b3Rlc31cbiAgICAgICAgcD17M31cbiAgICAgICAgcGI9ezV9XG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlQWxwaGEuODAwXCIsIFwid2hpdGVBbHBoYS4yMDBcIil9XG4gICAgICA+XG4gICAgICAgIHtxdW90ZS50ZXh0fVxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgb25DbGljaz17Z2V0UXVvdGVzfVxuICAgICAgICBtcj17MH1cbiAgICAgICAgbWw9e1wiYXV0b1wifVxuICAgICAgICBwYj17Mn1cbiAgICAgICAgcHQ9ezJ9XG4gICAgICAgIG1heFc9XCIyNTBweFwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgdGV4dE92ZXJmbG93PVwiZWxsaXBzaXNcIlxuICAgICAgICB3aGl0ZVNwYWNlPVwibm93cmFwXCJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgdHJhbnNmb3JtPVwiYXV0b1wiXG4gICAgICAgIHRyYW5zbGF0ZVk9XCItMjUlXCJcbiAgICAgICAgdHJhbnNsYXRlWD1cIi0xNSVcIlxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCIjRkZERENEXCIsIFwiIzVDNDAzM1wiKX1cbiAgICAgID5cbiAgICAgICAge3F1b3RlLmF1dGhvcn1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmludGVyZmFjZSBJUXVvdGUge1xuICB0ZXh0OiBTdHJpbmdcbiAgYXV0aG9yOiBTdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVcbiJdLCJuYW1lcyI6WyJCb3giLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWxsUXVvdGVzIiwiUXVvdGUiLCJ0ZXh0IiwiYXV0aG9yIiwicXVvdGUiLCJzZXRRdW90ZXMiLCJnZXRRdW90ZXMiLCJxdW90ZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiYm9yZGVyUmFkaXVzIiwib25DbGljayIsInAiLCJwYiIsInRleHRBbGlnbiIsImJnIiwibXIiLCJtbCIsInB0IiwibWF4VyIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVYIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/quotes.tsx\n");

/***/ })

});