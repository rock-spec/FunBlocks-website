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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4a034f20ee6e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjRhMDM0ZjIwZWU2ZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/SingleCard/SingleCard.tsx":
/*!**************************************************!*\
  !*** ./src/components/SingleCard/SingleCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Tag/Tag */ \"(app-pages-browser)/./src/components/Tag/Tag.tsx\");\n/* harmony import */ var _components_SingleCardItem_SingleCardItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SingleCardItem/SingleCardItem */ \"(app-pages-browser)/./src/components/SingleCardItem/SingleCardItem.tsx\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ \"(app-pages-browser)/./src/components/Button/Button.tsx\");\n\n\n\n\n\nconst SingleCard = (props)=>{\n    const { name, singleCardItemDetails, buttonText, onButtonClick } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-1 items-start gap-10 p-5 border border-[#161616] bg-[#FFFCF9]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__.Tag, {\n                text: name + \"s\",\n                type: \"section\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-5\",\n                children: singleCardItemDetails.map((detail, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleCardItem_SingleCardItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...detail\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined) // Replace '...detail' with actual props\n                )\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.CustomButton, {\n                    onClick: onButtonClick,\n                    text: buttonText,\n                    width: \"350px\",\n                    height: \"100px\",\n                    type: \"secondary\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNhcmQvU2luZ2xlQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDaUI7QUFDc0Q7QUFDakQ7QUFVaEQsTUFBTUksYUFBYSxDQUFDQztJQUNsQixNQUFNLEVBQUVDLElBQUksRUFBRUMscUJBQXFCLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFLEdBQUdKO0lBQ25FLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ1Ysb0RBQUdBO2dCQUFDVyxNQUFNTixPQUFPO2dCQUFLTyxNQUFNOzs7Ozs7MEJBRzdCLDhEQUFDSDtnQkFBSUMsV0FBVTswQkFDWkosc0JBQXNCTyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ2xDLDhEQUFDZCxpRkFBY0E7d0JBQWMsR0FBR2EsTUFBTTt1QkFBakJDOzs7O2tDQUFzQix3Q0FBd0M7Ozs7Ozs7MEJBS3ZGLDhEQUFDTjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1Isd0RBQVlBO29CQUFDYyxTQUFTUjtvQkFBZUcsTUFBTUo7b0JBQVlVLE9BQU07b0JBQVFDLFFBQU87b0JBQVFOLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxHO0tBcEJNVDtBQXNCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDYXJkL1NpbmdsZUNhcmQudHN4PzUxYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSBcIkAvY29tcG9uZW50cy9UYWcvVGFnXCI7XHJcbmltcG9ydCBTaW5nbGVDYXJkSXRlbSwgeyBTaW5nbGVDYXJkSXRlbVByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TaW5nbGVDYXJkSXRlbS9TaW5nbGVDYXJkSXRlbVwiO1xyXG5pbXBvcnQgeyBDdXN0b21CdXR0b24gfSBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcclxuXHJcbi8vIERlZmluZSB0aGUgcHJvcHMgaW50ZXJmYWNlXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ2FyZFByb3BzIHtcclxuICBuYW1lOiAndmlkZW8nIHwgJ2FydGljbGUnO1xyXG4gIHNpbmdsZUNhcmRJdGVtRGV0YWlsczogQXJyYXk8U2luZ2xlQ2FyZEl0ZW1Qcm9wcz47IC8vIERlZmluZSBvciBpbXBvcnQgRXZlbnRDYXJkRGV0YWlsIGludGVyZmFjZVxyXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcclxuICBvbkJ1dHRvbkNsaWNrOiAoKSA9PiB2b2lkOyAvLyBGdW5jdGlvbiB0eXBlIGZvciBidXR0b24gY2xpY2tcclxufVxyXG5cclxuY29uc3QgU2luZ2xlQ2FyZCA9IChwcm9wczogU2luZ2xlQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBzaW5nbGVDYXJkSXRlbURldGFpbHMsIGJ1dHRvblRleHQsIG9uQnV0dG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC0xIGl0ZW1zLXN0YXJ0IGdhcC0xMCBwLTUgYm9yZGVyIGJvcmRlci1bIzE2MTYxNl0gYmctWyNGRkZDRjldXCI+XHJcbiAgICAgIHsvKiBGaXJzdCBSb3c6IFRhZyAqL31cclxuICAgICAgPFRhZyB0ZXh0PXtuYW1lICsgJ3MnfSB0eXBlPXsnc2VjdGlvbid9IC8+XHJcblxyXG4gICAgICB7LyogU2Vjb25kIFJvdzogRXZlbnQgQ2FyZHMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNVwiPlxyXG4gICAgICAgIHtzaW5nbGVDYXJkSXRlbURldGFpbHMubWFwKChkZXRhaWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U2luZ2xlQ2FyZEl0ZW0ga2V5PXtpbmRleH0gey4uLmRldGFpbH0gLz4gLy8gUmVwbGFjZSAnLi4uZGV0YWlsJyB3aXRoIGFjdHVhbCBwcm9wc1xyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBUaGlyZCBSb3c6IEJ1dHRvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgIDxDdXN0b21CdXR0b24gb25DbGljaz17b25CdXR0b25DbGlja30gdGV4dD17YnV0dG9uVGV4dH0gd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjEwMHB4XCIgdHlwZT0nc2Vjb25kYXJ5JyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWciLCJTaW5nbGVDYXJkSXRlbSIsIkN1c3RvbUJ1dHRvbiIsIlNpbmdsZUNhcmQiLCJwcm9wcyIsIm5hbWUiLCJzaW5nbGVDYXJkSXRlbURldGFpbHMiLCJidXR0b25UZXh0Iiwib25CdXR0b25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsInRleHQiLCJ0eXBlIiwibWFwIiwiZGV0YWlsIiwiaW5kZXgiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SingleCard/SingleCard.tsx\n"));

/***/ })

});