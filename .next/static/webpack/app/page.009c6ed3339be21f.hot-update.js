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

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"94c4c179234f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjk0YzRjMTc5MjM0ZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomButton: function() { return /* binding */ CustomButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n\n\n\n\nconst CustomButton = (props)=>{\n    const { onClick, text, type = \"primary\", height = \"100px\", width = \"350px\", icon } = props;\n    const primaryImageSrc = \"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010723%20(1)%202-uu1e39irGGWhvZYyNWKcHykOFrV02R.svg\";\n    const secondaryImageSrc = \"https://p5ajxprussnpxvbu.public.blob.vercel-storage.com/Group%2010723%20(1)%201-DrIKz8IZYKwkbEiGowfHc2iWdhmweB.svg\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: primaryImageSrc,\n                alt: \"\",\n                width: 1,\n                height: 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\Button\\\\Button.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: secondaryImageSrc,\n                alt: \"\",\n                width: 1,\n                height: 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\Button\\\\Button.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: onClick,\n                className: \"text-center text-neutral-900 text-lg font-bold font-['OffBit Trial'] tracking-tight flex justify-center items-center\",\n                style: {\n                    color: type === \"primary\" ? \"#FFFCF9\" : \"#161616\",\n                    fontSize: \"18px\",\n                    fontFamily: '\"Press Start 2P\", cursive',\n                    backgroundImage: 'url(\"'.concat(type === \"primary\" ? primaryImageSrc : secondaryImageSrc, '\")'),\n                    backgroundSize: \"contain\",\n                    backgroundRepeat: \"no-repeat\",\n                    backgroundPosition: \"center\",\n                    width: width,\n                    height: height\n                },\n                children: [\n                    icon,\n                    \" \",\n                    text\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\Button\\\\Button.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n}; // // Usage example:\n // <CustomButton\n //   onClick={() => console.log('Button clicked')}\n //   text=\"Click me\"\n //   icon={<IoIosArrowDown />} // Pass the icon as a prop\n // />\n_c = CustomButton;\nvar _c;\n$RefreshReg$(_c, \"CustomButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1Y7QUFFQTtBQVd4QixNQUFNRSxlQUFlLENBQUNDO0lBQzNCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sU0FBUyxFQUFFQyxTQUFTLE9BQU8sRUFBRUMsUUFBUSxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFHTjtJQUVyRixNQUFNTyxrQkFBa0I7SUFDeEIsTUFBTUMsb0JBQW9CO0lBRTFCLHFCQUNFOzswQkFFRSw4REFBQ1YsbURBQUtBO2dCQUFDVyxLQUFLRjtnQkFBaUJHLEtBQUk7Z0JBQUdMLE9BQU87Z0JBQUdELFFBQVE7Ozs7OzswQkFDdEQsOERBQUNOLG1EQUFLQTtnQkFBQ1csS0FBS0Q7Z0JBQW1CRSxLQUFJO2dCQUFHTCxPQUFPO2dCQUFHRCxRQUFROzs7Ozs7MEJBR3hELDhEQUFDTztnQkFDQ1YsU0FBU0E7Z0JBQ1RXLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xDLE9BQU9YLFNBQVMsWUFBWSxZQUFZO29CQUN4Q1ksVUFBVTtvQkFDVkMsWUFBWTtvQkFDWkMsaUJBQWlCLFFBQWlFLE9BQXpEZCxTQUFTLFlBQVlJLGtCQUFrQkMsbUJBQWtCO29CQUNsRlUsZ0JBQWdCO29CQUNoQkMsa0JBQWtCO29CQUNsQkMsb0JBQW9CO29CQUNwQmYsT0FBT0E7b0JBQ1BELFFBQVFBO2dCQUNWOztvQkFFQ0U7b0JBQUs7b0JBQ0xKOzs7Ozs7Ozs7QUFJVCxFQUFFLENBRUYsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixrREFBa0Q7Q0FDbEQsb0JBQW9CO0NBQ3BCLHlEQUF5RDtDQUN6RCxLQUFLO0tBeENRSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeD9mMzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0Rvd24gfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCAnLi4vLi4vYXBwL2dsb2JhbHMuY3NzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xyXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHR5cGU/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JztcclxuICBoZWlnaHQ/OiBzdHJpbmc7XHJcbiAgd2lkdGg/OiBzdHJpbmc7XHJcbiAgaWNvbj86IFJlYWN0Tm9kZTsgLy8gQWRkIGEgbmV3IHByb3AgZm9yIHRoZSBpY29uXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21CdXR0b24gPSAocHJvcHM6IEJ1dHRvblByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBvbkNsaWNrLCB0ZXh0LCB0eXBlID0gJ3ByaW1hcnknLCBoZWlnaHQgPSBcIjEwMHB4XCIsIHdpZHRoID0gXCIzNTBweFwiLCBpY29uIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJpbWFyeUltYWdlU3JjID0gJ2h0dHBzOi8vcDVhanhwcnVzc25weHZidS5wdWJsaWMuYmxvYi52ZXJjZWwtc3RvcmFnZS5jb20vR3JvdXAlMjAxMDcyMyUyMCgxKSUyMDItdXUxZTM5aXJHR1dodlpZeU5XS2NIeWtPRnJWMDJSLnN2Zyc7XHJcbiAgY29uc3Qgc2Vjb25kYXJ5SW1hZ2VTcmMgPSAnaHR0cHM6Ly9wNWFqeHBydXNzbnB4dmJ1LnB1YmxpYy5ibG9iLnZlcmNlbC1zdG9yYWdlLmNvbS9Hcm91cCUyMDEwNzIzJTIwKDEpJTIwMS1EcklLejhJWllLd2tiRWlHb3dmSGMyaVdkaG13ZUIuc3ZnJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiBQcmVsb2FkIGltYWdlcyAqL31cclxuICAgICAgPEltYWdlIHNyYz17cHJpbWFyeUltYWdlU3JjfSBhbHQ9XCJcIiB3aWR0aD17MX0gaGVpZ2h0PXsxfSAvPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzZWNvbmRhcnlJbWFnZVNyY30gYWx0PVwiXCIgd2lkdGg9ezF9IGhlaWdodD17MX0gLz5cclxuXHJcbiAgICAgIHsvKiBSZW5kZXIgYnV0dG9uICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LW5ldXRyYWwtOTAwIHRleHQtbGcgZm9udC1ib2xkIGZvbnQtWydPZmZCaXQgVHJpYWwnXSB0cmFja2luZy10aWdodCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGNvbG9yOiB0eXBlID09PSBcInByaW1hcnlcIiA/IFwiI0ZGRkNGOVwiIDogXCIjMTYxNjE2XCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICAgICAgICBmb250RmFtaWx5OiAnXCJQcmVzcyBTdGFydCAyUFwiLCBjdXJzaXZlJyxcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7dHlwZSA9PT0gJ3ByaW1hcnknID8gcHJpbWFyeUltYWdlU3JjIDogc2Vjb25kYXJ5SW1hZ2VTcmN9XCIpYCxcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICB3aWR0aDogd2lkdGgsIC8vIFNldCB3aWR0aCBvZiB0aGUgZGl2IGluIHB4XHJcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCwgLy8gU2V0IGhlaWdodCBvZiB0aGUgZGl2IHB4XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpY29ufSB7LyogUmVuZGVyIHRoZSBpY29uICovfVxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyAvLyBVc2FnZSBleGFtcGxlOlxyXG4vLyA8Q3VzdG9tQnV0dG9uXHJcbi8vICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ0J1dHRvbiBjbGlja2VkJyl9XHJcbi8vICAgdGV4dD1cIkNsaWNrIG1lXCJcclxuLy8gICBpY29uPXs8SW9Jb3NBcnJvd0Rvd24gLz59IC8vIFBhc3MgdGhlIGljb24gYXMgYSBwcm9wXHJcbi8vIC8+XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiQ3VzdG9tQnV0dG9uIiwicHJvcHMiLCJvbkNsaWNrIiwidGV4dCIsInR5cGUiLCJoZWlnaHQiLCJ3aWR0aCIsImljb24iLCJwcmltYXJ5SW1hZ2VTcmMiLCJzZWNvbmRhcnlJbWFnZVNyYyIsInNyYyIsImFsdCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Button/Button.tsx\n"));

/***/ })

});