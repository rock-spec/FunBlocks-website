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

/***/ "(app-pages-browser)/./src/components/SingleCard/SingleCard.tsx":
/*!**************************************************!*\
  !*** ./src/components/SingleCard/SingleCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Tag/Tag */ \"(app-pages-browser)/./src/components/Tag/Tag.tsx\");\n/* harmony import */ var _mui_joy_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/joy/Button */ \"(app-pages-browser)/./node_modules/@mui/joy/Button/Button.js\");\n/* harmony import */ var _components_SingleCardItem_SingleCardItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SingleCardItem/SingleCardItem */ \"(app-pages-browser)/./src/components/SingleCardItem/SingleCardItem.tsx\");\n\n\n\n\n\nconst SingleCard = (props)=>{\n    const { name, singleCardItemDetails, buttonText, onButtonClick } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-1 items-start gap-10 p-5 border border-[#161616] bg-[#FFFCF9]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__.Tag, {\n                text: name + \"s\",\n                type: \"section\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-6\",\n                children: singleCardItemDetails.map((detail, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleCardItem_SingleCardItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...detail\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined) // Replace '...detail' with actual props\n                )\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    color: \"neutral\",\n                    variant: \"solid\",\n                    onClick: onButtonClick,\n                    children: buttonText\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCard\\\\SingleCard.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNhcmQvU2luZ2xlQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDaUI7QUFDTjtBQUM0RDtBQVVqRyxNQUFNSSxhQUFhLENBQUNDO0lBQ2xCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxxQkFBcUIsRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUUsR0FBR0o7SUFDbkUscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDVixvREFBR0E7Z0JBQUNXLE1BQU1OLE9BQU87Z0JBQUtPLE1BQU07Ozs7OzswQkFHN0IsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaSixzQkFBc0JPLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDbEMsOERBQUNiLGlGQUFjQTt3QkFBYyxHQUFHWSxNQUFNO3VCQUFqQkM7Ozs7a0NBQXNCLHdDQUF3Qzs7Ozs7OzswQkFLdkYsOERBQUNOO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDVCx1REFBTUE7b0JBQUNlLE9BQU07b0JBQVVDLFNBQVE7b0JBQVFDLFNBQVNWOzhCQUM5Q0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7S0F0Qk1KO0FBd0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNhcmQvU2luZ2xlQ2FyZC50c3g/NTFhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWcgfSBmcm9tIFwiQC9jb21wb25lbnRzL1RhZy9UYWdcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9qb3kvQnV0dG9uXCI7XHJcbmltcG9ydCBTaW5nbGVDYXJkSXRlbSwgeyBTaW5nbGVDYXJkSXRlbVByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TaW5nbGVDYXJkSXRlbS9TaW5nbGVDYXJkSXRlbVwiO1xyXG5cclxuLy8gRGVmaW5lIHRoZSBwcm9wcyBpbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDYXJkUHJvcHMge1xyXG4gIG5hbWU6ICd2aWRlbycgfCAnZXZlbnQnO1xyXG4gIHNpbmdsZUNhcmRJdGVtRGV0YWlsczogQXJyYXk8U2luZ2xlQ2FyZEl0ZW1Qcm9wcz47IC8vIERlZmluZSBvciBpbXBvcnQgRXZlbnRDYXJkRGV0YWlsIGludGVyZmFjZVxyXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcclxuICBvbkJ1dHRvbkNsaWNrOiAoKSA9PiB2b2lkOyAvLyBGdW5jdGlvbiB0eXBlIGZvciBidXR0b24gY2xpY2tcclxufVxyXG5cclxuY29uc3QgU2luZ2xlQ2FyZCA9IChwcm9wczogU2luZ2xlQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBzaW5nbGVDYXJkSXRlbURldGFpbHMsIGJ1dHRvblRleHQsIG9uQnV0dG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC0xIGl0ZW1zLXN0YXJ0IGdhcC0xMCBwLTUgYm9yZGVyIGJvcmRlci1bIzE2MTYxNl0gYmctWyNGRkZDRjldXCI+XHJcbiAgICAgIHsvKiBGaXJzdCBSb3c6IFRhZyAqL31cclxuICAgICAgPFRhZyB0ZXh0PXtuYW1lICsgJ3MnfSB0eXBlPXsnc2VjdGlvbid9IC8+XHJcblxyXG4gICAgICB7LyogU2Vjb25kIFJvdzogRXZlbnQgQ2FyZHMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNlwiPlxyXG4gICAgICAgIHtzaW5nbGVDYXJkSXRlbURldGFpbHMubWFwKChkZXRhaWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U2luZ2xlQ2FyZEl0ZW0ga2V5PXtpbmRleH0gey4uLmRldGFpbH0gLz4gLy8gUmVwbGFjZSAnLi4uZGV0YWlsJyB3aXRoIGFjdHVhbCBwcm9wc1xyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBUaGlyZCBSb3c6IEJ1dHRvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJuZXV0cmFsXCIgdmFyaWFudD1cInNvbGlkXCIgb25DbGljaz17b25CdXR0b25DbGlja30+XHJcbiAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFnIiwiQnV0dG9uIiwiU2luZ2xlQ2FyZEl0ZW0iLCJTaW5nbGVDYXJkIiwicHJvcHMiLCJuYW1lIiwic2luZ2xlQ2FyZEl0ZW1EZXRhaWxzIiwiYnV0dG9uVGV4dCIsIm9uQnV0dG9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0IiwidHlwZSIsIm1hcCIsImRldGFpbCIsImluZGV4IiwiY29sb3IiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SingleCard/SingleCard.tsx\n"));

/***/ })

});