"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Tag/Tag.tsx":
/*!************************************!*\
  !*** ./src/components/Tag/Tag.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tag: function() { return /* binding */ Tag; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Tag = (prop)=>{\n    const { text, type = \"section\", numberOfMore = 0 } = prop;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            type === \"section\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inline-flex items-center justify-center bg-merino p-2.5  text-nero uppercase\",\n                style: {\n                    fontSize: \"18px\",\n                    lineHeight: \"120%\",\n                    letterSpacing: \"0.36px\",\n                    fontFamily: '\"Press Start 2P\", cursive'\n                },\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\Tag\\\\Tag.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            type === \"relevance\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inline-flex items-center justify-center bg-merino p-[5px]  text-nero uppercase   border-solid    border-nero border-[1px]\",\n                style: {\n                    fontSize: \"1.1250em\",\n                    lineHeight: \"120%\",\n                    letterSpacing: \"0.36px\"\n                },\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\Tag\\\\Tag.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined),\n            type === \"more\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inline-flex items-center justify-center bg-merino p-[5px]  text-nero uppercase   border-solid    border-nero border-[1px]\",\n                style: {\n                    fontSize: \"18px\",\n                    lineHeight: \"120%\",\n                    letterSpacing: \"0.36px\"\n                },\n                children: [\n                    numberOfMore,\n                    \"+\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\Tag\\\\Tag.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Tag;\nvar _c;\n$RefreshReg$(_c, \"Tag\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RhZy9UYWcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBUW5CLE1BQU1DLE1BQU0sQ0FBQ0M7SUFDbEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sU0FBUyxFQUFFQyxlQUFlLENBQUMsRUFBRSxHQUFHSDtJQUNyRCxxQkFDRTs7WUFDR0UsU0FBUywyQkFDUiw4REFBQ0U7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xDLFVBQVU7b0JBQ1ZDLFlBQVk7b0JBQ1pDLGVBQWU7b0JBQ2ZDLFlBQVk7Z0JBQ2Q7MEJBQ0NUOzs7Ozs7WUFJSkMsU0FBUyw2QkFDUiw4REFBQ0U7Z0JBQ0NDLFdBQVU7Z0JBRVZDLE9BQU87b0JBQ0xDLFVBQVU7b0JBQ1ZDLFlBQVk7b0JBQ1pDLGVBQWU7Z0JBQ2pCOzBCQUNDUjs7Ozs7O1lBR0pDLFNBQVMsd0JBQ1IsOERBQUNFO2dCQUNDQyxXQUFVO2dCQUVWQyxPQUFPO29CQUNMQyxVQUFVO29CQUNWQyxZQUFZO29CQUNaQyxlQUFlO2dCQUNqQjs7b0JBQ0NOO29CQUFhOzs7Ozs7Ozs7QUFLeEIsRUFBRTtLQTNDV0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFnL1RhZy50c3g/ZTRlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFRhZ1Byb3BzIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgdHlwZT86ICdzZWN0aW9uJyB8ICdyZWxldmFuY2UnIHwgJ21vcmUnO1xyXG4gIG51bWJlck9mTW9yZT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZyA9IChwcm9wOiBUYWdQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGV4dCwgdHlwZSA9ICdzZWN0aW9uJywgbnVtYmVyT2ZNb3JlID0gMCB9ID0gcHJvcDtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3R5cGUgPT09ICdzZWN0aW9uJyAmJlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1tZXJpbm8gcC0yLjUgIHRleHQtbmVybyB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEyMCUnLFxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4zNnB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1wiUHJlc3MgU3RhcnQgMlBcIiwgY3Vyc2l2ZSdcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge3RleHR9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB9XHJcbiAgICAgIHt0eXBlID09PSAncmVsZXZhbmNlJyAmJlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1tZXJpbm8gcC1bNXB4XSAgdGV4dC1uZXJvIHVwcGVyY2FzZSAgIGJvcmRlci1zb2xpZCBcclxuICAgICAgICAgIGJvcmRlci1uZXJvIGJvcmRlci1bMXB4XVwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzEuMTI1MGVtJyxcclxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEyMCUnLFxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4zNnB4JyxcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge3RleHR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAge3R5cGUgPT09ICdtb3JlJyAmJlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1tZXJpbm8gcC1bNXB4XSAgdGV4dC1uZXJvIHVwcGVyY2FzZSAgIGJvcmRlci1zb2xpZCBcclxuICAgICAgICAgIGJvcmRlci1uZXJvIGJvcmRlci1bMXB4XVwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMTIwJScsXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjM2cHgnLFxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7bnVtYmVyT2ZNb3JlfStcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhZyIsInByb3AiLCJ0ZXh0IiwidHlwZSIsIm51bWJlck9mTW9yZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImZvbnRGYW1pbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Tag/Tag.tsx\n"));

/***/ })

});