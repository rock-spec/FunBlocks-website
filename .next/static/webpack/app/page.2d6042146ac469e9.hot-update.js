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

/***/ "(app-pages-browser)/./src/components/SingleCardItem/SingleCardItem.tsx":
/*!**********************************************************!*\
  !*** ./src/components/SingleCardItem/SingleCardItem.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_joy_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/joy/Button */ \"(app-pages-browser)/./node_modules/@mui/joy/Button/Button.js\");\n/* harmony import */ var _Tag_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tag/Tag */ \"(app-pages-browser)/./src/components/Tag/Tag.tsx\");\n\n\n\n\n\nconst SingleCardItem = (props)=>{\n    const { variant, imageUrl, title, description = \"\", details, onFirstButtonClick, onSecondButtonClick, tags, author } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-start gap-6  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative rounded-md border border-[#161616] overflow-hidden h-fit\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"\",\n                    src: imageUrl,\n                    alt: \"Image\",\n                    width: 272,\n                    height: 153,\n                    layout: \"fixed\",\n                    objectFit: \"cover\",\n                    objectPosition: \"center\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2 self-stretch\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-[#161616] font-bold text-lg leading-[120%] tracking-[-0.32px] line-clamp-2\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[563px] h-[49px] text-neutral-900 text-base font-normal font-['Cabin'] leading-normal overflow-hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"line-clamp-2\",\n                                    children: description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            variant === \"event\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/date-icon.svg\",\n                                        alt: \"Date\",\n                                        width: 12,\n                                        height: 12\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[#161616] font-bold text-lg leading-[120%] tracking-[0.36px] ml-2\",\n                                        children: details\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-1\",\n                                children: [\n                                    tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tag_Tag__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n                                            text: tag,\n                                            type: \"relevance\"\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"justify-start items-center gap-2 flex\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"opacity-80 text-neutral-900 text-sm font-normal font-['Cabin'] leading-[16.80px]\",\n                                                children: [\n                                                    \"By \",\n                                                    author\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-[5px] h-[5px] opacity-80 bg-neutral-900\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-neutral-900 text-opacity-80 text-sm font-normal font-['Cabin'] leading-[16.80px]\",\n                                                children: details\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                color: \"primary\",\n                                variant: \"solid\",\n                                onClick: onFirstButtonClick,\n                                children: variant === \"event\" ? \"Watch Video\" : \"Join Event\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                color: \"neutral\",\n                                variant: \"solid\",\n                                onClick: onSecondButtonClick,\n                                children: variant === \"event\" ? \"More\" : \"Details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ani\\\\Desktop\\\\FunBlocks-website\\\\src\\\\components\\\\SingleCardItem\\\\SingleCardItem.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SingleCardItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCardItem);\nvar _c;\n$RefreshReg$(_c, \"SingleCardItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNhcmRJdGVtL1NpbmdsZUNhcmRJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNNO0FBQ0o7QUFlakMsTUFBTUksaUJBQWlCLENBQUNDO0lBQ3RCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsY0FBYyxFQUFFLEVBQUVDLE9BQU8sRUFBRUMsa0JBQWtCLEVBQUVDLG1CQUFtQixFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHVDtJQUN2SCxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDZixtREFBS0E7b0JBQ0plLFdBQVU7b0JBQ1ZDLEtBQUtWO29CQUNMVyxLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxRQUFPO29CQUNQQyxXQUFVO29CQUNWQyxnQkFBZTs7Ozs7Ozs7Ozs7MEJBZW5CLDhEQUFDUjtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1pSOzs7Ozs7MENBTUgsOERBQUNPO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWlA7Ozs7Ozs7Ozs7OzRCQVFKSCxZQUFZLHdCQUNYLDhEQUFDUztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNmLG1EQUFLQTt3Q0FBQ2dCLEtBQUk7d0NBQWlCQyxLQUFJO3dDQUFPQyxPQUFPO3dDQUFJQyxRQUFROzs7Ozs7a0RBQzFELDhEQUFDSTt3Q0FBS1IsV0FBVTtrREFDYk47Ozs7Ozs7Ozs7OzBEQUlMLDhEQUFDSztnQ0FBSUMsV0FBVTs7b0NBQ1pILEtBQUtZLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDZCw4REFBQ3hCLHlDQUFHQTs0Q0FBQ3lCLE1BQU1GOzRDQUFpQkcsTUFBTTsyQ0FBYkY7Ozs7O2tEQUV2Qiw4REFBQ1o7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTs7b0RBQW1GO29EQUFJRjs7Ozs7OzswREFDdEcsOERBQUNDO2dEQUFJQyxXQUFVOzs7Ozs7MERBQ2YsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUF5Rk47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPaEgsOERBQUNLO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2QsdURBQU1BO2dDQUFDNEIsT0FBTTtnQ0FBVXhCLFNBQVE7Z0NBQVF5QixTQUFTcEI7MENBQzlDTCxZQUFZLFVBQVUsZ0JBQWdCOzs7Ozs7MENBRXpDLDhEQUFDSix1REFBTUE7Z0NBQUM0QixPQUFNO2dDQUFVeEIsU0FBUTtnQ0FBUXlCLFNBQVNuQjswQ0FDOUNOLFlBQVksVUFBVSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUM7S0FuRk1GO0FBcUZOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNhcmRJdGVtL1NpbmdsZUNhcmRJdGVtLnRzeD81YTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9qb3kvQnV0dG9uXCI7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJy4uL1RhZy9UYWcnO1xyXG5cclxuLy8gRGVmaW5lIHRoZSBwcm9wcyBpbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDYXJkSXRlbVByb3BzIHtcclxuICB2YXJpYW50OiAnZXZlbnQnIHwgJ2FydGljbGUnO1xyXG4gIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBhdXRob3I6IHN0cmluZztcclxuICBkZXRhaWxzOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICB0YWdzOiBzdHJpbmdbXTtcclxuICBvbkZpcnN0QnV0dG9uQ2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAgb25TZWNvbmRCdXR0b25DbGljazogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgU2luZ2xlQ2FyZEl0ZW0gPSAocHJvcHM6IFNpbmdsZUNhcmRJdGVtUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHZhcmlhbnQsIGltYWdlVXJsLCB0aXRsZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBkZXRhaWxzLCBvbkZpcnN0QnV0dG9uQ2xpY2ssIG9uU2Vjb25kQnV0dG9uQ2xpY2ssIHRhZ3MsIGF1dGhvciB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNiAgXCI+XHJcbiAgICAgIHsvKiBGaXJzdCBDb2x1bW46IEltYWdlICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1bIzE2MTYxNl0gb3ZlcmZsb3ctaGlkZGVuIGgtZml0XCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjbGFzc05hbWU9JydcclxuICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICBhbHQ9XCJJbWFnZVwiXHJcbiAgICAgICAgICB3aWR0aD17MjcyfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNTN9XHJcbiAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Lyoge3ZhcmlhbnQgPT09ICd2aWRlbycgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNSBsZWZ0LTVcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL3BsYXktYnV0dG9uLnN2Z1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUGxheVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfSAqL31cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogU2Vjb25kIENvbHVtbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxyXG4gICAgICAgIHsvKiBGaXJzdCBSb3cgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHNlbGYtc3RyZXRjaFwiPlxyXG4gICAgICAgICAgey8qIFRpdGxlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjMTYxNjE2XSBmb250LWJvbGQgdGV4dC1sZyBsZWFkaW5nLVsxMjAlXSB0cmFja2luZy1bLTAuMzJweF0gbGluZS1jbGFtcC0yXCI+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgey8qIERldGFpbHMgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzU2M3B4XSBoLVs0OXB4XSB0ZXh0LW5ldXRyYWwtOTAwIHRleHQtYmFzZSBmb250LW5vcm1hbCBmb250LVsnQ2FiaW4nXSBsZWFkaW5nLW5vcm1hbCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLWNsYW1wLTJcIj5cclxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgey8qIERhdGVzICAqL31cclxuICAgICAgICAgIHt2YXJpYW50ID09PSAnZXZlbnQnID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9kYXRlLWljb24uc3ZnXCIgYWx0PVwiRGF0ZVwiIHdpZHRoPXsxMn0gaGVpZ2h0PXsxMn0gLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMTYxNjE2XSBmb250LWJvbGQgdGV4dC1sZyBsZWFkaW5nLVsxMjAlXSB0cmFja2luZy1bMC4zNnB4XSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsc31cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XHJcbiAgICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8VGFnIHRleHQ9e3RhZ30ga2V5PXtpbmRleH0gdHlwZT17J3JlbGV2YW5jZSd9IC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktODAgdGV4dC1uZXV0cmFsLTkwMCB0ZXh0LXNtIGZvbnQtbm9ybWFsIGZvbnQtWydDYWJpbiddIGxlYWRpbmctWzE2LjgwcHhdXCI+Qnkge2F1dGhvcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNXB4XSBoLVs1cHhdIG9wYWNpdHktODAgYmctbmV1dHJhbC05MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtOTAwIHRleHQtb3BhY2l0eS04MCB0ZXh0LXNtIGZvbnQtbm9ybWFsIGZvbnQtWydDYWJpbiddIGxlYWRpbmctWzE2LjgwcHhdXCI+e2RldGFpbHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFNlY29uZCBSb3c6IEJ1dHRvbnMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJzb2xpZFwiIG9uQ2xpY2s9e29uRmlyc3RCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgIHt2YXJpYW50ID09PSAnZXZlbnQnID8gJ1dhdGNoIFZpZGVvJyA6ICdKb2luIEV2ZW50J31cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIm5ldXRyYWxcIiB2YXJpYW50PVwic29saWRcIiBvbkNsaWNrPXtvblNlY29uZEJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAge3ZhcmlhbnQgPT09ICdldmVudCcgPyAnTW9yZScgOiAnRGV0YWlscyd9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2FyZEl0ZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiQnV0dG9uIiwiVGFnIiwiU2luZ2xlQ2FyZEl0ZW0iLCJwcm9wcyIsInZhcmlhbnQiLCJpbWFnZVVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZXRhaWxzIiwib25GaXJzdEJ1dHRvbkNsaWNrIiwib25TZWNvbmRCdXR0b25DbGljayIsInRhZ3MiLCJhdXRob3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwic3BhbiIsIm1hcCIsInRhZyIsImluZGV4IiwidGV4dCIsInR5cGUiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SingleCardItem/SingleCardItem.tsx\n"));

/***/ })

});