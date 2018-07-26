(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://illulli-1e5a.com/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Container.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position:fixed;\n    top: 0;\n    left:0;\n    bottom:0;\n    right:0;\n    width: 100vw;\n    height: 100vh;\n    width: ', ';\n    margin: ', ';\n    padding: ', ';\n    z-index: ', ';\n    overflow: ', '\n    background-color: ', '\n'], ['\n    position:fixed;\n    top: 0;\n    left:0;\n    bottom:0;\n    right:0;\n    width: 100vw;\n    height: 100vh;\n    width: ', ';\n    margin: ', ';\n    padding: ', ';\n    z-index: ', ';\n    overflow: ', '\n    background-color: ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: relative;\n    width: ', ';\n    margin: ', ';\n    height: ', ';\n    padding: ', ';\n    background-color: ', '\n'], ['\n    position: relative;\n    width: ', ';\n    margin: ', ';\n    height: ', ';\n    padding: ', ';\n    background-color: ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = __webpack_require__(59);

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UiBg = function (_React$Component) {
    _inherits(UiBg, _React$Component);

    function UiBg(props) {
        _classCallCheck(this, UiBg);

        return _possibleConstructorReturn(this, (UiBg.__proto__ || Object.getPrototypeOf(UiBg)).call(this, props));
        //if fill is true, fills 100% of space
        //takes zindex as a prop, defaults to 1
        //overflow property as prop, defaults to scroll
        //  console.log("Container UI constructor props", props);
    }

    _createClass(UiBg, [{
        key: 'render',
        value: function render() {
            // console.log("rendering game a");
            if (this.props.fixed) {
                return _react2.default.createElement(
                    Bg,
                    { z: this.props.z, colorKey: this.props.colorKey, color: this.props.color, width: this.props.width, height: this.props.height,
                        padding: this.props.padding, margin: this.props.margin, overflow: this.props.overflow, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    this.props.children
                );
            } else {
                return _react2.default.createElement(
                    Box,
                    { z: this.props.z, colorKey: this.props.colorKey, height: this.props.height, color: this.props.color, width: this.props.width,
                        padding: this.props.padding, margin: this.props.margin, overflow: this.props.overflow, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    },
                    this.props.children
                );
            }
        }
    }]);

    return UiBg;
}(_react2.default.Component);

exports.default = UiBg;


var Bg = _styledComponents2.default.div(_templateObject, function (props) {
    return props.width ? props.width : 'inherit';
}, function (props) {
    return props.margin ? props.margin : '0 0 0 0';
}, function (props) {
    return props.padding ? props.padding : '0 0 0 0';
}, function (props) {
    return props.z ? props.z : 1;
}, function (props) {
    return props.overflow ? props.overflow : 'scroll-y';
}, function (props) {
    if (props.color) {
        return props.color;
    } else if (props.colorKey) {
        return props.theme[props.theme.theme][props.colorKey];
    } else {
        return props.theme[props.theme.theme].neutral;
    }
    //props.color? props.color:props.theme[props.theme.theme].neutral
});
var Box = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.width ? props.width : '100%';
}, function (props) {
    return props.margin ? props.margin : '0 0 0 0';
}, function (props) {
    return props.height ? props.height : '100%';
}, function (props) {
    return props.padding ? props.padding : '0 0 0 0';
}, function (props) {
    if (props.color) {
        return props.color;
    } else if (props.colorKey) {
        return props.theme[props.theme.theme][props.colorKey];
    } else {
        return props.theme[props.theme.theme].neutral;
    }
});

//background-color: #330033;
//lime #C6FF00   green #B2FF59   yellow #FFEB3B
//dark blue #1A237E   dark cyan  #006064

/*
const PostBox = styled.div`
  width: 50%;
  background-color: rgb(255,255,255,0.5);
  margin-top: 100px;
  margin-left: 55px;
`
*/

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\layout\\MainMenu.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: absolute;\n    z-index: 100; \n    padding: 10px; \n    background-color: white;\n    .active {\n        h4 {\n            color: ', ' !important;\n        }\n    }\n    .drop-item{\n        display:block;\n        h4 {\n            color: ', ';\n        }\n        &:hover{\n            background-color: grey;\n        }\n    }\n\n'], ['\n    position: absolute;\n    z-index: 100; \n    padding: 10px; \n    background-color: white;\n    .active {\n        h4 {\n            color: ', ' !important;\n        }\n    }\n    .drop-item{\n        display:block;\n        h4 {\n            color: ', ';\n        }\n        &:hover{\n            background-color: grey;\n        }\n    }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    color: ', ';\n    padding-left: ', 'px;\n    display: inline-block;\n'], ['\n    font-size: ', ';\n    color: ', ';\n    padding-left: ', 'px;\n    display: inline-block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: inline;\n    padding: 0px 10px;\n    a{\n        color: ', ';\n    }\n    a.active{\n        color: ', ';\n    }\n'], ['\n    display: inline;\n    padding: 0px 10px;\n    a{\n        color: ', ';\n    }\n    a.active{\n        color: ', ';\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: inline-block;\n    flex: 1;\n    transition: all ', ' ease;\n'], ['\n    display: inline-block;\n    flex: 1;\n    transition: all ', ' ease;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    vertical-align: bottom;\n    transition: all ', ' ease;\n    h1, h2, p, h4, a{\n        line-height:50px;\n        height: 100%;\n        margin:0px auto;\n        padding:0px;\n        display: inline-block;\n        vertical-align: middle;\n        color: ', ';\n    }\n    .title{\n        h2:{\n            color: ', '\n        }\n        &:hover{\n            background-color: white;\n        }\n    }\n    a{\n        padding:0 10px;\n        color: ', ';\n        transition: all ', ' ease;\n        &:hover{\n            background-color: ', ';\n        }\n    }\n    a.active{\n        background-color: ', ';\n        color: ', '\n        &:hover{\n            background-color: ', ';\n        }\n    }  \n'], ['\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    vertical-align: bottom;\n    transition: all ', ' ease;\n    h1, h2, p, h4, a{\n        line-height:50px;\n        height: 100%;\n        margin:0px auto;\n        padding:0px;\n        display: inline-block;\n        vertical-align: middle;\n        color: ', ';\n    }\n    .title{\n        h2:{\n            color: ', '\n        }\n        &:hover{\n            background-color: white;\n        }\n    }\n    a{\n        padding:0 10px;\n        color: ', ';\n        transition: all ', ' ease;\n        &:hover{\n            background-color: ', ';\n        }\n    }\n    a.active{\n        background-color: ', ';\n        color: ', '\n        &:hover{\n            background-color: ', ';\n        }\n    }  \n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    background-color: ', ';\n'], ['\n    background-color: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    width:100%;\n    height: 50px;\n    display: flex;\n    padding:0 0px;\n    margin:0 0 10px 0;\n   \n'], ['\n    width:100%;\n    height: 50px;\n    display: flex;\n    padding:0 0px;\n    margin:0 0 10px 0;\n   \n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    width:100%;\n    height: auto;\n    background: ', ';\n    padding:0px;\n    margin:0;\n    border-bottom: 2px solid ', ';\n'], ['\n    width:100%;\n    height: auto;\n    background: ', ';\n    padding:0px;\n    margin:0;\n    border-bottom: 2px solid ', ';\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n    verticalAlign: middle; \n    transform-origin: 50%;\n    transition: transform ', ' ease;\n    display: inline-block; \n'], ['\n    verticalAlign: middle; \n    transform-origin: 50%;\n    transition: transform ', ' ease;\n    display: inline-block; \n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(49);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Animate = __webpack_require__(23);

var _Animate2 = _interopRequireDefault(_Animate);

var _d3Ease = __webpack_require__(12);

var _recompose = __webpack_require__(24);

var _IconButton = __webpack_require__(13);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.state = {
            path: _this.setPath(props.location.pathname),
            categories: ['games', 'posts', 'about', 't1'],
            cat: false
        };
        return _this;
    }

    _createClass(Menu, [{
        key: 'setPath',
        value: function setPath(pathname) {
            var path = pathname.split('/');
            path = path.filter(function (p) {
                return p !== '';
            });
            return path;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // console.log(`MainMenu componentDidUpdate prev ${prevProps
            //     .location.pathname} this ${this.props.location.pathname}`);
            if (this.props.location.pathname !== prevProps.location.pathname) {
                this.setState({
                    path: this.setPath(this.props.location.pathname),
                    cat: false
                });
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(key, value) {
            this.setState(_defineProperty({}, key, value));
        }
    }, {
        key: 'renderOpenButton',
        value: function renderOpenButton() {
            var _this2 = this;

            if (this.state.cat) {
                return _react2.default.createElement(
                    Wrapper,
                    { style: { transform: 'rotate(90deg)' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        }
                    },
                    _react2.default.createElement(_IconButton2.default, { icon: "arrow", bg: 'transparent', hover: 'transparent', onInput: function onInput() {
                            _this2.handleClick('cat', false);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    })
                );
            } else {
                return _react2.default.createElement(
                    Wrapper,
                    { style: { transform: 'rotate(0deg)' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    },
                    _react2.default.createElement(_IconButton2.default, { icon: "arrow", bg: 'transparent', hover: 'transparent', onInput: function onInput() {
                            _this2.handleClick('cat', true);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    })
                );
            }
        }
    }, {
        key: 'renderDrop',
        value: function renderDrop() {
            if (this.state.cat) {
                return _react2.default.createElement(
                    Drop,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    this.state.categories.map(function (c) {
                        return _react2.default.createElement(
                            _reactStatic.Link,
                            { className: 'drop-item', to: '/' + c, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 61
                                }
                            },
                            _react2.default.createElement(
                                'h4',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 62
                                    }
                                },
                                c
                            )
                        );
                    })
                );
            }
            return null;
        }
    }, {
        key: 'renderTags',
        value: function renderTags() {
            var _this3 = this;

            if (this.props.tags) {
                return _react2.default.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    },
                    this.props.tags.map(function (t) {
                        //  console.log(`tags rendering ${t} with target tag ${this.props.tag} does it match? ${t === this.props.tag}`);
                        if (_this3.props.tag && t === _this3.props.tag) {
                            return _react2.default.createElement(
                                Tag,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 74
                                    }
                                },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + t, className: 'active', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 74
                                        }
                                    },
                                    t
                                )
                            );
                        } else {
                            return _react2.default.createElement(
                                Tag,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 76
                                    }
                                },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + t, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 76
                                        }
                                    },
                                    t
                                )
                            );
                        }
                    })
                );
            }
        }
    }, {
        key: 'renderPostHeading',
        value: function renderPostHeading() {
            if (this.state.path[1] && this.state.path[1] === 'page') {
                return _react2.default.createElement(
                    'p',
                    { style: { fontSize: '1em', paddingLeft: '10px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    },
                    this.state.path[1] ? this.state.path[1] : '',
                    ' ',
                    this.state.path[2] ? ' ' + this.state.path[2] : ''
                );
            } else {
                return _react2.default.createElement(
                    PostTitle,
                    { style: { fontSize: '1em' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 88
                        }
                    },
                    this.state.path[1] ? this.state.path[1] : ''
                );
            }
        }
    }, {
        key: 'renderCat',
        value: function renderCat() {
            if (this.state.path[0]) {
                return _react2.default.createElement(
                    Outer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                        }
                    },
                    _react2.default.createElement(
                        Container,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 95
                            }
                        },
                        _react2.default.createElement(
                            FlexChild,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 96
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { exact: true, to: '/', className: 'title', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 96
                                    }
                                },
                                _react2.default.createElement(
                                    'h2',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 96
                                        }
                                    },
                                    'Title'
                                )
                            )
                        ),
                        _react2.default.createElement(Mid, { key: "mid", style: { flex: '0' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        }),
                        _react2.default.createElement(
                            FlexChild,
                            { key: this.state.path[0] ? this.state.path[0] : '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 98
                                }
                            },
                            _react2.default.createElement(
                                Selected,
                                { style: { height: '50px', margin: 'auto' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 99
                                    }
                                },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + (this.state.path[0] ? this.state.path[0] : ''), __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 100
                                        }
                                    },
                                    _react2.default.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 101
                                            }
                                        },
                                        this.state.path[0] ? this.state.path[0] : ''
                                    )
                                ),
                                this.renderOpenButton()
                            ),
                            this.renderDrop()
                        ),
                        _react2.default.createElement(
                            FlexChild,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 108
                                }
                            },
                            this.renderPostHeading()
                        )
                    ),
                    this.renderTags(),
                    _react2.default.createElement(
                        'p',
                        { style: { textAlign: 'center', margin: '0px', color: 'grey' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 113
                            }
                        },
                        'double tap screen to change theme colors'
                    )
                );
            } else {
                return _react2.default.createElement(
                    Outer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118
                        }
                    },
                    _react2.default.createElement(
                        Container,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 119
                            }
                        },
                        _react2.default.createElement(
                            FlexChild,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 120
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { exact: true, to: '/', className: 'title', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 120
                                    }
                                },
                                _react2.default.createElement(
                                    'h2',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 120
                                        }
                                    },
                                    'Title'
                                )
                            )
                        ),
                        _react2.default.createElement(Mid, { key: "mid", style: { flex: '1' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 121
                            }
                        }),
                        _react2.default.createElement(
                            FlexChild,
                            { key: "games", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 122
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/games', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 122
                                    }
                                },
                                _react2.default.createElement(
                                    'h4',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 122
                                        }
                                    },
                                    'Games'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            FlexChild,
                            { key: "posts", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 123
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/posts', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 123
                                    }
                                },
                                _react2.default.createElement(
                                    'h4',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 123
                                        }
                                    },
                                    'Posts'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            FlexChild,
                            { key: "about", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 124
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/about', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 124
                                    }
                                },
                                _react2.default.createElement(
                                    'h4',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 124
                                        }
                                    },
                                    'About'
                                )
                            )
                        )
                    ),
                    this.renderTags(),
                    _react2.default.createElement(
                        'p',
                        { style: { textAlign: 'center', margin: '0px', color: 'grey' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 127
                            }
                        },
                        'double tap screen to change theme colors'
                    )
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderCat();
        }
    }]);

    return Menu;
}(_react2.default.Component);

/*
                <Switch>
                    <Route path="/games" exact component={() => {return <p>games route match</p>}} />
                    <Route path="/posts" exact component={() => {return <p>posts route match</p>}} />
                    <Route path="/" component={() => {return <p>no match</p>}} />
                </Switch>

                        return(
            <Container>
                <FlexChild><Link exact to="/" ><h1>Title</h1></Link></FlexChild>
                <Mid />
                <FlexChild><Link to="/games"><h4>Games</h4></Link></FlexChild>
                <FlexChild><Link to="/posts"><h4>Posts</h4></Link></FlexChild>
                <FlexChild><Link to="/about"><h4>About</h4></Link></FlexChild>
            </Container>
        )
*/

var e = (0, _reactStatic.withRouter)(Menu);
exports.default = (0, _reactStatic.withRouteData)(e);

var Drop = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme[props.theme.theme].textInverted;
}, function (props) {
    return props.theme[props.theme.theme].text;
});
var PostTitle = _styledComponents2.default.h1(_templateObject2, function (props) {
    return props.theme[props.theme.theme].textSizeM;
}, function (props) {
    return props.theme[props.theme.theme].primaryL;
}, function (props) {
    return props.theme[props.theme.theme].spaceM;
});
var Tag = _styledComponents2.default.h4(_templateObject3, function (props) {
    return props.theme[props.theme.theme].neutralL;
}, function (props) {
    return props.theme[props.theme.theme].accent;
});
var Mid = _styledComponents2.default.span(_templateObject4, function (props) {
    return props.theme[props.theme.theme].animS;
});

var FlexChild = _styledComponents2.default.span(_templateObject5, function (props) {
    return props.theme[props.theme.theme].animS;
}, function (props) {
    return props.theme[props.theme.theme].textInverted;
}, function (props) {
    return props.theme[props.theme.theme].primaryL;
}, function (props) {
    return props.theme[props.theme.theme].text;
}, function (props) {
    return props.theme[props.theme.theme].animS;
}, function (props) {
    return props.theme[props.theme.theme].neutral;
}, function (props) {
    return props.theme[props.theme.theme].accent;
}, function (props) {
    return props.theme[props.theme.theme].textInverted;
}, function (props) {
    return props.theme[props.theme.theme].accentL;
});
var Selected = _styledComponents2.default.div(_templateObject6, function (props) {
    return props.theme[props.theme.theme].accent;
});
var Container = _styledComponents2.default.div(_templateObject7);
var Outer = _styledComponents2.default.div(_templateObject8, function (props) {
    return props.theme[props.theme.theme].neutral;
}, function (props) {
    return props.theme[props.theme.theme].neutralL;
});

var Wrapper = _styledComponents2.default.div(_templateObject9, function (props) {
    return props.theme[props.theme.theme].animM;
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(6);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(7);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(8);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Post.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    margin:auto;\n'], ['\n    margin:auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    text-transformation: capitalize;\n    text-align: center;\n'], ['\n    text-transformation: capitalize;\n    text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _MainMenu = __webpack_require__(9);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _IconButton = __webpack_require__(13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TalkitGame = __webpack_require__(58);

var _TalkitGame2 = _interopRequireDefault(_TalkitGame);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _Loading = __webpack_require__(25);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import katex from 'react-katex';
var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        //iterate through content, create talkit for each game node
        //   console.log("Post constructor", props);
        var _this = _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));

        var games = {};
        if (props.post.content) {
            props.post.content.map(function (c, i) {
                if (c.type == "game") {
                    games[i] = _react2.default.createElement(_TalkitGame2.default, { tree: c.content, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    });
                }
            });
        }

        _this.state = {
            games: games
        };
        return _this;
    }

    _createClass(Games, [{
        key: 'importKatex',
        value: function importKatex() {
            (0, _universalImport3.default)({
                id: 'react-katex',
                file: 'D:/websites/react-static/static-site-2/4/src/containers/Post.jsx',
                load: function load() {
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('react-katex', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'react-katex');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(16);
                },
                chunkName: function chunkName() {
                    return 'mykatex';
                }
            }).then(function (r) {}).catch(function (e) {});
        }
    }, {
        key: 'importGraph',
        value: function importGraph() {
            (0, _universalImport3.default)({
                id: 'recharts',
                file: 'D:/websites/react-static/static-site-2/4/src/containers/Post.jsx',
                load: function load() {
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(5);
                },
                chunkName: function chunkName() {
                    return 'mygraph';
                }
            }).then(function (r) {}).catch(function (e) {});
        }
    }, {
        key: 'renderTags',
        value: function renderTags() {
            //    console.log("indi post render tags", this.props);
            if (this.props.post.tags) {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    },
                    this.props.post.tags.map(function (t) {
                        return _react2.default.createElement(
                            'span',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52
                                }
                            },
                            ' ',
                            t,
                            ' '
                        );
                    })
                );
            }
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var _this2 = this;

            if (this.props.post.content) {
                return this.props.post.content.map(function (c, i) {
                    if (c.type == "text") {
                        return _react2.default.createElement(
                            'p',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            c.content
                        );
                    } else if (c.type == "game") {
                        return _this2.state.games[i];
                        // return <Game>{this.renderGame()}</Game>;
                    }
                });
            }
        }
        /*
           let size = this.props.size? this.props.size:24;
           let icon = this.props.iconColor? this.props.iconColor:'white';
           let bg = this.props.bg? this.props.bg:'grey';
           let bgHover = this.props.bgHover? this.props.bgHover: 'red';
        */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Container2.default,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                    }
                },
                _react2.default.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        }
                    },
                    _react2.default.createElement(_Loading2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 90
                        }
                    })
                )
            );
        }
    }]);

    return Games;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Games);


var Shareable = _styledComponents2.default.div(_templateObject);
var Title = _styledComponents2.default.h2(_templateObject2);
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\IconButton.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width:36px;\n    height:36px;\n    padding:0;\n    margin: 0px;\n    background-color: ', '; /* Blue background */\n    border: none; /* Remove borders */\n    cursor: pointer; /* Mouse pointer on hover */\n    outline: none;\n    border-radius:50%;\n    vertical-align: middle;\n    transition: background-color ', ' ease-in;\n    &:hover {\n        background-color: ', ';\n    };\n    img{  \n        margin: 0;\n        padding: 0;\n        border: none;\n        vertical-align: middle;\n    }\n'], ['\n    width:36px;\n    height:36px;\n    padding:0;\n    margin: 0px;\n    background-color: ', '; /* Blue background */\n    border: none; /* Remove borders */\n    cursor: pointer; /* Mouse pointer on hover */\n    outline: none;\n    border-radius:50%;\n    vertical-align: middle;\n    transition: background-color ', ' ease-in;\n    &:hover {\n        background-color: ', ';\n    };\n    img{  \n        margin: 0;\n        padding: 0;\n        border: none;\n        vertical-align: middle;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _baselineDelete24px = __webpack_require__(50);

var _baselineDelete24px2 = _interopRequireDefault(_baselineDelete24px);

var _baselineDone24px = __webpack_require__(51);

var _baselineDone24px2 = _interopRequireDefault(_baselineDone24px);

var _baselineCached24px = __webpack_require__(52);

var _baselineCached24px2 = _interopRequireDefault(_baselineCached24px);

var _baselineKeyboard_arrow_right24px = __webpack_require__(53);

var _baselineKeyboard_arrow_right24px2 = _interopRequireDefault(_baselineKeyboard_arrow_right24px);

var _baselineSave24px = __webpack_require__(54);

var _baselineSave24px2 = _interopRequireDefault(_baselineSave24px);

var _baselineSettings20px = __webpack_require__(55);

var _baselineSettings20px2 = _interopRequireDefault(_baselineSettings20px);

var _baselineKeyboard_arrow_up24px = __webpack_require__(56);

var _baselineKeyboard_arrow_up24px2 = _interopRequireDefault(_baselineKeyboard_arrow_up24px);

var _baselinePlay_arrow24px = __webpack_require__(57);

var _baselinePlay_arrow24px2 = _interopRequireDefault(_baselinePlay_arrow24px);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon(props) {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));
        //console.log("IconButton constructor props", props)
    }

    _createClass(Icon, [{
        key: 'getColor',
        value: function getColor(img) {
            switch (img) {
                case 'delete':
                    return 'black';
                case 'done':
                    return 'green';
                case 'cached':
                    return 'blue';
                case 'arrow':
                    return 'yellow';
                case 'save':
                    return 'green';
                case 'settings':
                    return 'pink';
                default:
                    return 'orange';
            }
        }
    }, {
        key: 'getImg',
        value: function getImg(img) {
            switch (img) {
                case 'delete':
                    return _baselineDelete24px2.default;
                case 'done':
                    return _baselineDone24px2.default;
                case 'cached':
                    return _baselineCached24px2.default;
                case 'arrow':
                    return _baselineKeyboard_arrow_right24px2.default;
                case 'save':
                    return _baselineSave24px2.default;
                case 'settings':
                    return _baselineSettings20px2.default;
                case 'up':
                    return _baselineKeyboard_arrow_up24px2.default;
                case 'play':
                    return _baselinePlay_arrow24px2.default;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            //themeprovider provides base theme, can be overridden
            return _react2.default.createElement(
                Btn,
                { bg: this.props.bg, hover: this.props.hover ? this.props.hover : this.getColor(this.props.icon), onClick: this.props.onInput, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                },
                _react2.default.createElement('img', { src: this.getImg(this.props.icon), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                })
            );
        }
    }]);

    return Icon;
}(_react2.default.Component);

exports.default = Icon;

//${props => props.primary ? 'blue' : props.theme.main}

var Btn = _styledComponents2.default.button(_templateObject, function (props) {
    return props.bg ? props.bg : 'grey';
}, function (props) {
    return props.theme[props.theme.theme].animS;
}, function (props) {
    //console.log("icon btn props", props);
    return props.hover ? props.hover : props.theme[props.theme.theme].primaryL;
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-katex");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("samplegame");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var isListening = false;
var errors = [];
var catchError = function catchError(error) {
    //console.log("catchError", error);
    if (isListening) {
        //log error to google analytics

        //throw error;
    } else {
        if (errors.length < 10) {
            errors.push(error);
        }
    }
};

if (typeof window !== 'undefined') {
    console.log("error, window is defined, adding listener");
    window.onerror = function (message, source, lineNum, colNum, errorObj) {
        //can bubble up without explicit MyError call()
        console.warn('onerror details: message ' + message + ' source: ' + source + ' lineNum ' + lineNum, errorObj);
        // window.location.href = (
        //     `http://stackoverflow.com/search?q=[js]${message}`
        // )
        return true; //prevents users from seeing in console
        //false creates uncaught error and a stack trace
    };
    window.addEventListener('error', function (event) {
        console.warn("addEventListener caught ", event);
        return true;
    });
    isListening = true;
    //catch any stored errors now that they will be caught
    errors.map(function (e) {
        catchError(e);
    });
    errors = [];
} else {
    console.log("error, window is undefined, cannot listen");
}

exports.default = catchError;

/*
    successfully bubbles up an error from inside a react component
    setTimeout(()=>{
      console.log("timeout, divide by zero now");
      try{
        let fail = 10/0;
        console.log("app try succeeded in dividing by 0 " + fail);
        throw new Error('divided by zero');
      }catch(e){
        console.log("app catch block failed to divide by 0", e);
        //throw obvious error, shouldnt show up in production build?
        throw e;
      }
    }, 5000);

*/

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-move/Animate");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\animations\\Loading.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n    background-color: transparent;\n    height: 168px;\n    width: 168px;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n    div{\n        animation-name: example;\n        animation-duration: 1.5s;\n        animation-iteration-count: infinite;\n        animation-direction: alternate;\n        animation-timing-function: ease-in-out;\n        border-radius: 50%; \n        border: 2px solid #7A17A880;\n        background-color: transparent;\n    }\n    ', '\n    @keyframes example {\n        from {\n            transform: scale(1, 1);\n            border: 2px solid #7A17A880;\n        }\n        to {\n            transform: scale(2, 2);\n            border: 2px solid #7A17A8FF;\n        }\n    }\n'], ['\n    position: relative;\n    background-color: transparent;\n    height: 168px;\n    width: 168px;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n    div{\n        animation-name: example;\n        animation-duration: 1.5s;\n        animation-iteration-count: infinite;\n        animation-direction: alternate;\n        animation-timing-function: ease-in-out;\n        border-radius: 50%; \n        border: 2px solid #7A17A880;\n        background-color: transparent;\n    }\n    ', '\n    @keyframes example {\n        from {\n            transform: scale(1, 1);\n            border: 2px solid #7A17A880;\n        }\n        to {\n            transform: scale(2, 2);\n            border: 2px solid #7A17A8FF;\n        }\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Animate = __webpack_require__(23);

var _Animate2 = _interopRequireDefault(_Animate);

var _NodeGroup = __webpack_require__(26);

var _NodeGroup2 = _interopRequireDefault(_NodeGroup);

var _d3Ease = __webpack_require__(12);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createCircle(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = 16;
}
var circles = [];
function drawCircles() {
    var radius = 50;
    var offset = 68;
    for (var i = 0; i < 2 * Math.PI; i += Math.PI / 6) {
        //for(var i = 0; i<360; i+=30){
        console.log('creating circle i:' + i + ' cos: ' + Math.cos(i) * radius + ' sin: ' + Math.sin(i) * radius);
        circles.push(new createCircle(i, Math.cos(i) * radius + offset, Math.sin(i) * radius + offset));
    }
}
drawCircles();

var Loading = function (_React$PureComponent) {
    _inherits(Loading, _React$PureComponent);

    function Loading(props) {
        _classCallCheck(this, Loading);

        //let c = new createCircle(50, 50);
        var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));

        _this.state = {
            // animation: this.getAnimation(),
            forward: true
        };
        return _this;
    }

    _createClass(Loading, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Load,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                },
                circles.map(function (c) {
                    return _react2.default.createElement('div', { className: 'load-circle', style: { position: 'absolute', width: c.r * 2 + 'px', height: c.r * 2 + 'px',
                            left: c.x + 'px', top: c.y + 'px', backgroundColor: 'transparent'
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                        }
                    });
                })
            );
        }
    }]);

    return Loading;
}(_react2.default.PureComponent);

exports.default = Loading;


var Load = _styledComponents2.default.div(_templateObject, circles.map(function (c, i) {
    return '\n            div:nth-child(' + i + '){\n                animation-delay: ' + i * 0.25 + 's;\n            }\n            ';
}));

/*


div:nth-child(1){
        animation-delay: 1s;
    }
    div:nth-child(2){
        animation-delay: 2s;
    }
    div:nth-child(3){
        animation-delay: 3s;
    }

return <div style={{position: 'relative', backgroundColor: 'yellow', height: '300px', width: '300px'}}>
                <button onClick={()=>{this.setState({forward:!this.state.forward, 
                    circles: [...this.state.circles, new createCircle(this.state.circles.length, 
                    Math.random()*200, Math.random()*200)]}
                )}}>scale</button>
                <NodeGroup
                        data={this.state.circles}
                        keyAccessor={(p) => p.id}
                        start={() => ({
                            scale: [1],
                            events: { 
                                end: () => {this.restartAnimation('enter', e)}
                            }
                        })}

                        enter={(e, i) => ({
                            scale: [2],
                            timing: { duration: 1000, delay: i*350 },
                            events: { 
                                end: () => {this.restartAnimation('enter', e)}
                            }
                        })}
                        update={(c, i) => ({
                            scale: () => {
                               // console.log('loading restartAnimation  update scale called, ' + this.state.forward);
                                return this.state.forward? [1]:[2]
                            },
                            timing: {duration: 1000, delay: i*350 },
                            events: { 
                                end: () => {this.restartAnimation('update', c)}
                            }
                        })}
                        >
                        {(nodes) => {
                            console.log("loading nodes", nodes);
                            return(
                                <div>
                                    {   
                                        nodes.map((node) => {
                                            const { state, data } = node;
                                            const {scale} = state;
                                            console.log(`loading animation circles scale: ${scale}`, node);
                                            data.scale = scale;
                                            return <div style={{position: 'absolute', width: `${data.r*2}px`, height: `${data.r*2}px`, 
                                            left: `${data.x}px`, top: `${data.y}px`, backgroundColor: 'transparent', 
                                            transform: `scale(${scale})`,
                                            borderRadius: '50%', border: '5px solid red'}} ></div>
                                        })
                                    }
                                </div>
                            )
                        }}
                </NodeGroup>
            </div>






















return <div>
                <Animate
                        start={() => ({
                            rotate: [0]
                        })}

                        enter={() => ({
                            rotate: [360],
                            timing: { duration: 2000, ease: easeExpOut },
                            events: { 
                                start: () => {this.restartAnimation('enter', 0)}
                            }
                        })}
                        update={() => ({
                            rotate: [this.state.angle],
                            timing: {duration: 2000, ease: easeExpOut },
                            events: { 
                                end: () => {this.restartAnimation('update', this.state.angle === 360? 0: 360)}
                            }
                        })}
                        >
                        {(state) => {
                            const { rotate } = state;
                            console.log(`loading animation rotate: ${rotate}`);
                            return (
                                <div
                                    style={{
                                        position: 'absolute',
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                        backgroundColor: '#00cf77',
                                        WebkitTransform: `rotate(${rotate}deg)`,
                                        transform: `rotate(${rotate}deg)`,
                                    }}
                            >
                            loading 
                            </div>
                            );
                        }}
                </Animate>
            </div>
*/

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-move/NodeGroup");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Posts.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    height: 90%;\n    width: 100%;\n    flex-direction: column;\n'], ['\n    display: flex;\n    height: 90%;\n    width: 100%;\n    flex-direction: column;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: relative;\n    height: 100%;\n    width: 100%;\n    flex: 1;\n'], ['\n    position: relative;\n    height: 100%;\n    width: 100%;\n    flex: 1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    text-transform: capitalize;\n    color: white;\n    background: grey;\n    text-align: center;\n    width: 100%;\n    padding: 0px;\n    display: inline-block;\n'], ['\n    text-transform: capitalize;\n    color: white;\n    background: grey;\n    text-align: center;\n    width: 100%;\n    padding: 0px;\n    display: inline-block;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MainMenu = __webpack_require__(9);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _Tags = __webpack_require__(60);

var _Tags2 = _interopRequireDefault(_Tags);

var _Translate = __webpack_require__(28);

var _Translate2 = _interopRequireDefault(_Translate);

var _PostItem = __webpack_require__(29);

var _PostItem2 = _interopRequireDefault(_PostItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import PostList from './../components/layout/PostList.jsx';


// const Post = (arg) => {
//     console.log("Post function arg1 ", arg);
//     return <p>Post item</p>
// }

var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        var _this = _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));

        console.log("posts constructor", props);
        _this.state = {
            render: false
        };
        return _this;
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             render: true
    //         })
    //     }, 3000);
    // }


    _createClass(Games, [{
        key: 'renderPagination',
        value: function renderPagination() {
            if (this.props.totalPages > 1) {
                var pagination = [];
                if (this.props.currentPage > 1) {
                    //there is a previous page, add a link to it
                    //pagination.push(<p>go to prev page {this.props.currentPage-1}</p>)
                    pagination.push(_react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/' + this.props.base + '/' + this.props.pageToken + '/' + (this.props.currentPage - 1), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        },
                        'Previous'
                    ));
                }
                if (this.props.currentPage < this.props.totalPages) {
                    //there is a previous page, add a link to it
                    // pagination.push(<p>go to next page {this.props.currentPage+1}</p>)
                    pagination.push(_react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/' + this.props.base + '/' + this.props.pageToken + '/' + (this.props.currentPage + 1), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 42
                            }
                        },
                        'Next'
                    ));
                }
                return pagination;
            }
            return null;
        }
    }, {
        key: 'redirect',
        value: function redirect() {
            if (this.props.totalPages > 1 && this.props.match.url == '/' + this.props.base) {
                return _react2.default.createElement(_reactStatic.Redirect, { to: this.props.base + '/' + this.props.pageToken + '/1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                });
            }
        }
    }, {
        key: 'renderPosts',
        value: function renderPosts() {
            //if exiting, don't bother with translate this.props.animationState === 1
            //parent animations don't seem to restart child transitions
            if (this.props.animationState === 1) {
                console.log("renderPosts called with state 1");
                return _react2.default.createElement(_Translate2.default, { items: this.props.posts, itemKey: _PostItem2.default.key, itemId: 'id',
                    component: _PostItem2.default.component, y: { start: -2000, enter: 0 }, x: { start: -500, enter: 0 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                });
            } else {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    'Not rendering that when leaving!!'
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Container2.default,
                { fixed: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                },
                _react2.default.createElement(
                    FlexBox,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    this.redirect(),
                    _react2.default.createElement(_Tags2.default, { tags: this.props.tags, tag: this.props.tag, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    }),
                    this.renderPagination(),
                    _react2.default.createElement(
                        PostBox,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        _react2.default.createElement(_Translate2.default, { items: this.props.posts, itemKey: _PostItem2.default.key, itemId: 'id',
                            component: _PostItem2.default.component, y: { start: -200, enter: 0, unit: 'vh' },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Games;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Games);


var FlexBox = _styledComponents2.default.div(_templateObject);

var PostBox = _styledComponents2.default.div(_templateObject2);
var Title = _styledComponents2.default.h2(_templateObject3);
// const Container = styled.div`
//     background: black;
//     width:100%;
//     height:100vh;
//     overflow: hidden;
// `

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\animations\\Translate.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width:100%;\n    top:0; left: 0; right:0; bottom: 0;\n    padding: 10px;\n    position: absolute;\n    overflow-y: auto;\n'], ['\n    width:100%;\n    top:0; left: 0; right:0; bottom: 0;\n    padding: 10px;\n    position: absolute;\n    overflow-y: auto;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NodeGroup = __webpack_require__(26);

var _NodeGroup2 = _interopRequireDefault(_NodeGroup);

var _d3Ease = __webpack_require__(12);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//translates (x or y) a list of items
//passes item as data with itemKey, and props.other to props.component
var Translate = function (_React$Component) {
    _inherits(Translate, _React$Component);

    function Translate(props) {
        _classCallCheck(this, Translate);

        var _this = _possibleConstructorReturn(this, (Translate.__proto__ || Object.getPrototypeOf(Translate)).call(this, props));

        console.log("renderPosts called Translate constructor", props);
        return _this;
    }

    _createClass(Translate, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.items) {
                var inject = _defineProperty({}, this.props.itemKey, null);
                return _react2.default.createElement(
                    Wrapper,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    _react2.default.createElement(
                        _NodeGroup2.default,
                        {
                            data: this.props.items,
                            keyAccessor: function keyAccessor(p) {
                                return p[_this2.props.itemId];
                            }
                            // start={(d, i) => ({
                            //     transY: [-2000],
                            //     timing: { duration: 800, delay: i*300,  ease: easeExpInOut },
                            // })}
                            // enter={(d, i) => ({
                            //     transY: [0],
                            //     timing: { duration: 800, delay: i*300,  ease: easeExpInOut },
                            // })}
                            , start: function start(d, i) {
                                var s = {
                                    timing: { duration: 800, delay: i * 150, ease: _d3Ease.easePolyOut }
                                };
                                if (_this2.props.y) {
                                    s.y = _this2.props.y.start ? [_this2.props.y.start] : [0];
                                };
                                if (_this2.props.x) {
                                    s.x = _this2.props.x.start ? [_this2.props.x.start] : [0];
                                };
                                //if(this.props.x) {s.x = this.props.x.start? [this.props.x.start]:[0]};
                                console.log("Translate start obj ", s);
                                return s;
                            },
                            enter: function enter(d, i) {
                                var e = {
                                    timing: { duration: 800, delay: i * 150, ease: _d3Ease.easePolyOut }
                                };
                                if (_this2.props.y) {
                                    e.y = _this2.props.y.enter ? [_this2.props.y.enter] : [0];
                                };
                                if (_this2.props.x) {
                                    e.x = _this2.props.x.enter ? [_this2.props.x.enter] : [0];
                                };
                                console.log("Translate enter obj ", e);
                                return e;
                            },
                            update: function update(d, i) {
                                var u = {
                                    timing: { duration: 800, delay: i * 150, ease: _d3Ease.easePolyOut }
                                };
                                if (_this2.props.y) {
                                    u.y = _this2.props.y.update ? [_this2.props.y.update] : [0];
                                };
                                if (_this2.props.x) {
                                    u.x = _this2.props.x.update ? [_this2.props.x.update] : [0];
                                };
                                console.log("Translate update obj ", u);
                                return u;
                            },
                            leave: function leave(d, i) {
                                var l = {
                                    timing: { duration: 800, delay: i * 150, ease: _d3Ease.easePolyOut }
                                };
                                if (_this2.props.y) {
                                    l.y = _this2.props.y.leave ? [_this2.props.y.leave] : [0];
                                };
                                if (_this2.props.x) {
                                    l.x = _this2.props.x.leave ? [_this2.props.x.leave] : [0];
                                };
                                console.log("Translate update obj ", l);
                                return l;
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        function (nodes) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 71
                                    }
                                },
                                nodes.map(function (node) {
                                    var key = node.key,
                                        data = node.data,
                                        state = node.state;

                                    var y = state.y,
                                        x = state.x,
                                        rest = _objectWithoutProperties(state, ['y', 'x']);

                                    inject[_this2.props.itemKey] = data;
                                    console.log('translate data', node);
                                    return _react2.default.createElement(
                                        'div',
                                        { style: { display: 'block', translate: 'all 1s ease',
                                                transform: 'translate(' + (x ? x : 0) + (_this2.props.x && _this2.props.x.unit ? _this2.props.x.unit : 'px') + '\n                                                            , ' + (y ? y : 0) + (_this2.props.y && _this2.props.y.unit ? _this2.props.y.unit : 'px') + ')' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 78
                                            }
                                        },
                                        _react2.default.createElement(_this2.props.component, _extends({}, inject, _this2.props.other, {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 81
                                            }
                                        }))
                                    );
                                })
                            );
                        }
                    )
                );
            } else {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 91
                        }
                    },
                    'Translate has no items to animate'
                );
            }
        }
    }]);

    return Translate;
}(_react2.default.Component);

exports.default = Translate;


Translate.PropTypes = {
    itemId: _propTypes2.default.string,
    itemKey: _propTypes2.default.string,
    items: _propTypes2.default.array,
    component: _propTypes2.default.object
};

var Wrapper = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\layout\\PostItem.jsx';

var _templateObject = _taggedTemplateLiteral(['\n  width:100%;\n  opacity:1;\n  margin: 10px 0px 0px 0px;\n  padding:20px 20px 5px 20px;\n  border-radius: 5px;\n  background-color:  ', ';\n  transition: all  ', ' ease-in;\n  &:hover{\n    background-color: ', ';\n  }\n  h2{\n    font-size: 1.7em;\n    display: inline;\n    color: ', ';\n    opacity:1;\n    text-transform: capitalize;\n    margin:0\n    line-height: 75px;\n    vartical-align: bottom;\n  }\n  p{\n    font-size: 1em;\n    color: ', ';\n    opacity:1;\n    display: inline;\n    text-align: right;\n    float: right;\n    margin:0\n    line-height: 75px;\n    vartical-align: bottom;\n  }\n  @media only screen and (min-width: 500px) {\n    width:100%;\n    max-width:400px;\n    background-color: ', ';\n    margin: 10px auto 0px auto;\n  }\n'], ['\n  width:100%;\n  opacity:1;\n  margin: 10px 0px 0px 0px;\n  padding:20px 20px 5px 20px;\n  border-radius: 5px;\n  background-color:  ', ';\n  transition: all  ', ' ease-in;\n  &:hover{\n    background-color: ', ';\n  }\n  h2{\n    font-size: 1.7em;\n    display: inline;\n    color: ', ';\n    opacity:1;\n    text-transform: capitalize;\n    margin:0\n    line-height: 75px;\n    vartical-align: bottom;\n  }\n  p{\n    font-size: 1em;\n    color: ', ';\n    opacity:1;\n    display: inline;\n    text-align: right;\n    float: right;\n    margin:0\n    line-height: 75px;\n    vartical-align: bottom;\n  }\n  @media only screen and (min-width: 500px) {\n    width:100%;\n    max-width:400px;\n    background-color: ', ';\n    margin: 10px auto 0px auto;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var key = 'post';

var component = function component(props) {
  // return <p>post {props.post.id}</p>
  return _react2.default.createElement(
    _reactStatic.Link,
    { to: '/posts/' + props[key].id, key: props[key].id, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    _react2.default.createElement(
      Post,
      { key: props[key].id, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      _react2.default.createElement(
        'h2',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        props[key].title
      ),
      _react2.default.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        props[key].tags.map(function (t, i) {
          return i === 0 ? "" + t : ", " + t;
        })
      )
    )
  );
};
var Post = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme[props.theme.theme].primary;
}, function (props) {
  return props.theme[props.theme.theme].animS;
}, function (props) {
  return props.theme[props.theme.theme].primaryL;
}, function (props) {
  return props.theme[props.theme.theme].text;
}, function (props) {
  return props.theme[props.theme.theme].textInverted;
}, function (props) {
  return props.theme[props.theme.theme].primary;
});

exports.default = {
  component: component,
  key: key
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Home.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size:1em;\n  color: rgb(255,255,255,1);\n  width:100%;\n  padding: 10px;\n  padding-bottom:0px;\n\n'], ['\n  font-size:1em;\n  color: rgb(255,255,255,1);\n  width:100%;\n  padding: 10px;\n  padding-bottom:0px;\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  width: 100%;\n  height: 50vh;\n'], ['\n  position: relative;\n  width: 100%;\n  height: 50vh;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 50%;\n  background-color: rgb(255,255,255,0.5);\n  margin-top: 100px;\n  margin-left: 55px;\n\n'], ['\n  width: 50%;\n  background-color: rgb(255,255,255,0.5);\n  margin-top: 100px;\n  margin-left: 55px;\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _Text = __webpack_require__(61);

var _Text2 = _interopRequireDefault(_Text);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Translate = __webpack_require__(28);

var _Translate2 = _interopRequireDefault(_Translate);

var _PostItem = __webpack_require__(29);

var _PostItem2 = _interopRequireDefault(_PostItem);

var _Trends = __webpack_require__(62);

var _Trends2 = _interopRequireDefault(_Trends);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'renderGraph',
    value: function renderGraph() {
      console.log("home component renderGraph animationState " + this.props.animationState);
      if (this.props.animationState === 1) {
        return _react2.default.createElement(_Trends2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        _react2.default.createElement(
          _Container2.default,
          { fixed: true, colorKey: 'neutral', z: -1000, padding: '10px 0px 100px 0px', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          _react2.default.createElement(_Text2.default, { tag: 'h3', display: 'block', colorKey: 'textInverted', text: 'Google Search Trends for Subjects', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }),
          _react2.default.createElement(
            _Container2.default,
            { fixed: false, width: '100%', height: '90%', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            this.renderGraph()
          )
        ),
        _react2.default.createElement(
          _Container2.default,
          { fixed: true, color: 'transparent', z: 1, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          _react2.default.createElement(
            PostBox,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            _react2.default.createElement(
              Message,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ),
            _react2.default.createElement(
              PostWrapper,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              _react2.default.createElement(_Translate2.default, { items: this.props.posts, itemKey: _PostItem2.default.key, itemId: 'id',
                component: _PostItem2.default.component, y: { start: -800, enter: 0, unit: 'px' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              })
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Home);

var Message = _styledComponents2.default.h4(_templateObject);
var PostWrapper = _styledComponents2.default.div(_templateObject2);
var PostBox = _styledComponents2.default.div(_templateObject3);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Games.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _MainMenu = __webpack_require__(9);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _GameListItem = __webpack_require__(64);

var _GameListItem2 = _interopRequireDefault(_GameListItem);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Dynamic from './../components/DynamicComponent.jsx';


//import Katex from './../components/UI/math/Katex.jsx';
//pulling katex out of games removed it from most modules and from sample game
//referencing katex at top of file brings katex into 1 templates/Games
//dynamic component put katex in template/game-samplegame bundle, templates/ui-math-katex
//knocking out payload, and just importing Dynamic component brings katex in??
//taking out trends removed any visible sources of chartist and lodash
//referencing something in App.js pulls it into main
//referencing katex in 2 seperate routes, eg posts and games causes duplication
// import(/* webpackChunkName: "mykatex" */ 'react-katex') can pull into own bundle that can be shared between
//referencing directly in game and post duplicates module
//referencing direct in 1, and dynamic in other, causes duplication


var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        return _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));
    }
    // dynamic(){
    //     return <Dynamic payload={'./../components/UI/math/Katex.jsx'}/>
    // }


    _createClass(Games, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Container2.default,
                { fixed: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                _react2.default.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        }
                    },
                    this.props.games.map(function (post) {
                        return _react2.default.createElement(_GameListItem2.default, { game: post, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        });
                    })
                )
            );
        }
    }]);

    return Games;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withSiteData)((0, _reactStatic.withRouteData)(Games));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Accordion.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline-block;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    h3, p{\n        margin: 3px;\n    }\n'], ['\n    display: inline-block;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    h3, p{\n        margin: 3px;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: 0px;\n    padding: 0px;\n    .open{\n        max-height: 400px;\n        opacity: 1;\n        padding: 10px;\n        margin: 0px;\n        transition: all 1s ease;\n    }\n    .closed{\n        max-height: 0;\n        overflow: hidden;\n        opacity: 0;\n        padding: 0px 10px 0px 10px;\n        margin: 0px;\n        transition: all 1s ease;\n    }\n\n'], ['\n    margin: 0px;\n    padding: 0px;\n    .open{\n        max-height: 400px;\n        opacity: 1;\n        padding: 10px;\n        margin: 0px;\n        transition: all 1s ease;\n    }\n    .closed{\n        max-height: 0;\n        overflow: hidden;\n        opacity: 0;\n        padding: 0px 10px 0px 10px;\n        margin: 0px;\n        transition: all 1s ease;\n    }\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    padding: 0;\n    margin: 0;\n    transition: transform ', ' ease;\n    display: \'inline-block\'; \n'], ['\n    padding: 0;\n    margin: 0;\n    transition: transform ', ' ease;\n    display: \'inline-block\'; \n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    border-radius: 50px;\n    background-color: ', ';\n    padding: 10px;\n    margin: auto;\n'], ['\n    border-radius: 50px;\n    background-color: ', ';\n    padding: 10px;\n    margin: auto;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    align-items: baseline;  \n    display: flex;\n'], ['\n    align-items: baseline;  \n    display: flex;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    display: inline-block;\n    flex: 1;\n'], ['\n    display: inline-block;\n    flex: 1;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    align-self: center  \n'], ['\n    align-self: center  \n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _IconButton = __webpack_require__(13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _reactGa = __webpack_require__(17);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactRedux = __webpack_require__(3);

var _Button = __webpack_require__(65);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import themes from './../theme.js';

var FoldOut = function (_React$Component) {
    _inherits(FoldOut, _React$Component);

    function FoldOut(props) {
        _classCallCheck(this, FoldOut);

        //console.log("Accordion constructor", props);
        var _this = _possibleConstructorReturn(this, (FoldOut.__proto__ || Object.getPrototypeOf(FoldOut)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.state = {
            open: false,
            iOpen: 'open',
            iSelect: 'select'
        };
        return _this;
    }

    _createClass(FoldOut, [{
        key: 'handleClick',
        value: function handleClick(type) {
            //console.log("handleClick type ", type);
            if (type == this.state.iOpen) {
                //aTheme.theme = aTheme.theme == 'a'? 'b':'a';
                this.setState({
                    open: !this.state.open
                });
                //console.log("accordion gapi? " + this.props.gapi.gapiReady + " event? ", this.props.event);
                if (this.props.gapi.gapiReady && this.props.event) {
                    //ReactGa.event({...this.props.event, action: 'accordion'});
                }
            } else if (type == this.state.iSelect) {
                //open the game save/load page
            }
        }
    }, {
        key: 'renderOpenButton',
        value: function renderOpenButton() {
            var _this2 = this;

            if (this.state.open) {
                return _react2.default.createElement(
                    Wrapper,
                    { style: { display: 'inline-block', transform: 'rotate(180deg)' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    },
                    _react2.default.createElement(_IconButton2.default, { icon: "up", onInput: function onInput() {
                            _this2.handleClick(_this2.state.iOpen);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        }
                    })
                );
            } else {
                return _react2.default.createElement(
                    Wrapper,
                    { style: { display: 'inline-block', transform: 'rotate(0deg)' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    _react2.default.createElement(_IconButton2.default, { icon: "up", onInput: function onInput() {
                            _this2.handleClick(_this2.state.iOpen);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        }
                    })
                );
            }
        }
    }, {
        key: 'renderFoldOut',
        value: function renderFoldOut() {
            if (this.state.open) {
                return _react2.default.createElement(
                    Accordion,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    },
                    _react2.default.createElement(
                        'p',
                        { className: 'open', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 52
                            }
                        },
                        this.props.children
                    )
                );
            } else {
                return _react2.default.createElement(
                    Accordion,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    },
                    _react2.default.createElement(
                        'p',
                        { className: 'closed', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            }
                        },
                        this.props.children
                    )
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { width: '100%', padding: '10px', overflow: 'hidden' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                },
                _react2.default.createElement(
                    Pill,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    _react2.default.createElement(
                        Panel,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        _react2.default.createElement(
                            FlexChild,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            this.renderOpenButton()
                        ),
                        _react2.default.createElement(
                            FlexChild,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                }
                            },
                            _react2.default.createElement(
                                Stack,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 64
                                    }
                                },
                                _react2.default.createElement(
                                    'h3',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 65
                                        }
                                    },
                                    this.props.title
                                ),
                                _react2.default.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 66
                                        }
                                    },
                                    this.props.subtitle
                                )
                            )
                        ),
                        _react2.default.createElement(Mid, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        }),
                        _react2.default.createElement(
                            FlexChild,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 71
                                }
                            },
                            this.props.callToAction()
                        )
                    ),
                    this.renderFoldOut()
                )
            );
        }
    }]);

    return FoldOut;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { gapi: state.gapi };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(FoldOut);

var Stack = _styledComponents2.default.ul(_templateObject);
var Accordion = _styledComponents2.default.div(_templateObject2);
var Wrapper = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.theme[props.theme.theme].animM;
});
var Pill = _styledComponents2.default.div(_templateObject4, function (props) {
    //  console.log("accordion props theme " + props.theme.theme + " main = " + props.theme[props.theme.theme].main, props.theme);
    return props.theme[props.theme.theme].main;
});
var Panel = _styledComponents2.default.div(_templateObject5);

var Mid = _styledComponents2.default.span(_templateObject6);

var FlexChild = _styledComponents2.default.span(_templateObject7);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(6);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(7);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(8);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Game.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Index = __webpack_require__(66);

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import samplegame from 'samplegame';
//import katex from 'react-katex';
// import Dynamic from './../components/DynamicComponent.jsx';
//<Dynamic payload="./UI/math/Katex.jsx" />

var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        //   console.log("game post constructor props", props);
        var _this = _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));

        _this.loadGame = _this.loadGame.bind(_this);
        _this.getImport = _this.getImport.bind(_this);
        _this.state = {
            game: null
        };
        return _this;
    }
    // importKatex(){
    //     import(/* webpackChunkName: "mykatex" */ 'react-katex')
    //     .then(r=>{

    //     })
    //     .catch(e=>{

    //     })
    // }


    _createClass(Games, [{
        key: 'getImport',
        value: function getImport(game) {
            switch (game) {
                case 'samplegame':
                    return (0, _universalImport3.default)({
                        id: 'samplegame',
                        file: 'D:/websites/react-static/static-site-2/4/src/containers/Game.jsx',
                        load: function load() {
                            return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('samplegame', {
                                disableWarnings: true
                            })]).then(function (proms) {
                                return proms[0];
                            });
                        },
                        path: function path() {
                            return _path3.default.join(__dirname, 'samplegame');
                        },
                        resolve: function resolve() {
                            return /*require.resolve*/(18);
                        },
                        chunkName: function chunkName() {
                            return 'samplegame';
                        }
                    });
                default:
                    console.warn('game ' + game + ' unknown, cannot import');
                    this.setState({
                        error: 'unknown game'
                    });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var getImport = this.getImport(this.props.game.import);
            if (getImport) {
                getImport.then(function (res) {
                    //  console.log("import of game files complete, promise:", res);
                    _this2.loadGame(res);
                }).catch(function (e) {
                    //  console.log("error importing game", e);
                });
            }
        }
    }, {
        key: 'loadGame',
        value: function loadGame(game) {
            this.setState({
                game: game
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.game) {
                return _react2.default.createElement(_Index2.default, { game: this.state.game, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                });
            } else if (this.state.error) {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    'error loading game: ',
                    this.state.error
                );
            } else {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    },
                    'loading game files...'
                );
            }
        }
    }]);

    return Games;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Games);
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\math\\Katex.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(71);

var _reactKatex = __webpack_require__(16);

var _reactDom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import css from './katex.css';

//import ReactKaTeX from 'react-katex';


//import {guid} from './../../../utilities/ids.js';
//import styled from 'styled-components';
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var Katex = function (_React$Component) {
    _inherits(Katex, _React$Component);

    function Katex(props) {
        _classCallCheck(this, Katex);

        var _this = _possibleConstructorReturn(this, (Katex.__proto__ || Object.getPrototypeOf(Katex)).call(this, props));

        console.log("katex website katex constructor", props);
        console.log(props);
        _this.state = {
            id: guid()
        };
        return _this;
    }

    _createClass(Katex, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("katex did mount", this.props);
            // render(<BlockMath math={"c = \\pm\\sqrt{a^2 + b^2}"}/>,
            //         document.getElementById('math'));
            (0, _reactDom.render)(_react2.default.createElement(_reactKatex.InlineMath, { math: this.props.latex, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), document.getElementById(this.state.id));
            // const top = "m";
            // const bottom = "s";
            // ReactDOM.render(<InlineMath>{String.raw`\frac{\text{${top}}}{\text{${bottom}}^2}`}</InlineMath>,
            //                 document.getElementById(this.state.id));
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log("katex did update", this.props);
            if (prevProps.latex !== this.props.latex) {
                (0, _reactDom.render)(_react2.default.createElement(_reactKatex.InlineMath, { math: this.props.latex, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }), document.getElementById(this.state.id));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            //var InlineMathV = ReactKaTeX.InlineMath;
            return _react2.default.createElement('span', { id: this.state.id, key: this.state.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            })
            // <span id={this.state.id} />
            ;
        }
    }]);

    return Katex;
}(_react2.default.Component);

exports.default = Katex;

// const Container = styled.span`
//     display: inline
// `


// import React from 'react';
// import 'katex/dist/katex.min.css';
// //import css from './katex.css';
// import { InlineMath, BlockMath } from 'react-katex';
// //import ReactKaTeX from 'react-katex';
// import {render} from 'react-dom'
// //import {guid} from './../../../utilities/ids.js';
// //import styled from 'styled-components';
// function guid() {
//     function s4() {
//       return Math.floor((1 + Math.random()) * 0x10000)
//         .toString(16)
//         .substring(1);
//     }
//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
// }
// class Katex extends React.Component{
//     constructor(props){
//         super(props);
//         console.log("fat component constructor");
//         console.log(props);
//         this.state = {
//             id: guid()
//         }
//     }
//     componentDidMount(){
//         console.log("katex did mount", this.props);
//         // render(<BlockMath math={"c = \\pm\\sqrt{a^2 + b^2}"}/>,
//         //         document.getElementById('math'));
//         render(<InlineMath math={this.props.latex}/>,
//             document.getElementById(this.state.id));
//         // const top = "m";
//         // const bottom = "s";
//         // ReactDOM.render(<InlineMath>{String.raw`\frac{\text{${top}}}{\text{${bottom}}^2}`}</InlineMath>,
//         //                 document.getElementById(this.state.id));
//     }
//     componentDidUpdate(prevProps, prevState){
//         console.log("katex did update", this.props);
//         if(prevProps.latex !== this.props.latex){
//             render(<InlineMath math={this.props.latex}/>,
//                 document.getElementById(this.state.id));
//         }
//     }
//     render(){
//         //var InlineMathV = ReactKaTeX.InlineMath;
//         return(
//             <span id={this.state.id} key={this.state.id}/>
//             // <span id={this.state.id} />
//         )
//     }
// }

// export default Katex;

// // const Container = styled.span`
// //     display: inline
// // `

// // import React from 'react';
// // import 'katex/dist/katex.min.css';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import ReactDOM from 'react-dom'
// // import {guid} from './../../../utilities/ids.js';
// // import styled from 'styled-components';

// // class Katex extends React.Component{
// //     constructor(props){
// //         super(props);
// //         console.log("fat component constructor");
// //         console.log(props);
// //         this.state = {
// //             id: guid()
// //         }
// //     }
// //     componentDidMount(){
// //         // ReactDOM.render(<BlockMath math={"c = \\pm\\sqrt{a^2 + b^2}"}/>,
// //         //         document.getElementById('math'));
// //         const top = "m";
// //         const bottom = "s";
// //         ReactDOM.render(<InlineMath>{String.raw`\frac{\text{${top}}}{\text{${bottom}}^2}`}</InlineMath>,
// //                         document.getElementById(this.state.id));
// //     }
// //     render(){
// //         return(
// //             <Container id={this.state.id} />
// //         )
// //     }
// // }

// // export default Katex;

// // const Container = styled.span`
// //     display: inline
// // `

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\About.jsx';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _MainMenu = __webpack_require__(9);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// /////////////////////////////////////////////////////////
// Redux components
// From http://redux.js.org/docs/basics/UsageWithReact.html
// Display component
var Counter = function Counter(_ref) {
  var count = _ref.count,
      increment = _ref.increment,
      reset = _ref.reset;
  return _react2.default.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      'Value: ',
      count
    ),
    _react2.default.createElement(
      'button',
      { onClick: increment, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      'Increment'
    ),
    _react2.default.createElement(
      'button',
      { onClick: reset, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      'Reset'
    )
  );
};
// Connexion with redux
// const CounterConnected = connect(
//   ({ counter: { count } }) => ({ count }),
//   dispatch => ({
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     reset: () => dispatch({ type: 'RESET' }),
//   }),
// )(Counter)

// const mapStateToProps = (state) => {
//   console.log("mapStateToProps");
//   console.log(state);
//   return {
//     count: state.counter
//   }
// }

var mapStateToProps = function mapStateToProps(_ref2) {
  var count = _ref2.counter.count;
  return { count: count };
};

// const mapDispatchToProps = (dispatch) => {
//   console.log("mapDispatchToProps");
//   console.log(dispatch);
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     reset: () => dispatch({ type: 'RESET' }),
//   }
// }
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    increment: function increment() {
      return dispatch({ type: 'INCREMENT' });
    },
    reset: function reset() {
      return dispatch({ type: 'RESET' });
    }
  };
};
var CounterConnected = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);

// /////////////////////////////////////////////////////////
// Actual container

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About(props) {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
    // console.log("about constructor", props);
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          },
          'This is what we\'re all about.1'
        ),
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          'React, static sites, performance, speed. It\'s the stuff that makes us tick.'
        ),
        _react2.default.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          'Here is a redux counter:'
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withSiteData)(About);

// export default withSiteData((data) => {
//   console.log("about fn", data);
//   return(
//     <div>
//       <h1>This is what we're all about.1</h1>
//       <p>
//       React, static sites, performance, speed. It's the stuff that makes us
//       tick.
//       </p>
//       <h2>Here is a redux counter:</h2>
//   </div>
//   )
// })
//   console.log("about fn", data);
//   return(

// )}
// )

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\404.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _reactGa = __webpack_require__(17);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import My404 from './../components/layout/404.jsx';

//undecorated - match, history, location
//does not work with route data - hypoth: route data relates to making child posts of something

var Lost = function (_React$Component) {
  _inherits(Lost, _React$Component);

  function Lost(props) {
    _classCallCheck(this, Lost);

    var _this = _possibleConstructorReturn(this, (Lost.__proto__ || Object.getPrototypeOf(Lost)).call(this, props));

    console.log("Lost 404 constructor", props);
    _this.sendError = _this.sendError.bind(_this);
    _this.state = {
      errorSent: false
    };
    return _this;
  }

  _createClass(Lost, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.sendError();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.sendError();
    }
  }, {
    key: 'sendError',
    value: function sendError() {
      console.log("lost, componentDidUpdate, gapi? " + this.props.gapi.gapiReady + " state: ", this.state);
      if (!this.state.errorSent && this.props.gapi.gapiReady) {
        _reactGa2.default.event({
          category: 'Error',
          action: '404',
          label: '' + this.props.match.url
        });
        this.setState({
          errorSent: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          'That page doesn\'t exist. We have made a note of the problem.'
        ),
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          'In the meantime, here are some pages that definitely exist'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          'Home'
        )
      );
    }
  }]);

  return Lost;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    gapi: state.gapi
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Lost);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setGapi = setGapi;
exports.setOnline = setOnline;
exports.setSignedIn = setSignedIn;
var initialState = {
  gapiReady: false,
  isSignedIn: false,
  isOnline: false
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'SET_GAPI':
      return _extends({}, state, {
        gapiReady: action.payload.ready
      });
    case 'SET_ONLINE':
      return _extends({}, state, {
        isOnline: action.payload.online
      });
    case 'IS_SIGNED_IN':
      return _extends({}, state, {
        isSignedIn: action.payload.signedIn
      });
    default:
      return state;
  }
};

function setGapi(ready) {
  return {
    type: 'SET_GAPI',
    payload: {
      ready: ready
    }
  };
}
function setOnline(online) {
  return {
    type: 'SET_ONLINE',
    payload: {
      online: online
    }
  };
}
function setSignedIn(signedIn) {
  return {
    type: 'IS_SIGNED_IN',
    payload: {
      signedIn: signedIn
    }
  };
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\index.js';

// Your top level component

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Error = __webpack_require__(20);

var _Error2 = _interopRequireDefault(_Error);

var _ErrorBoundary = __webpack_require__(40);

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

var _App = __webpack_require__(41);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _ErrorBoundary2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      _react2.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\ErrorBoundary.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Error = __webpack_require__(20);

var _Error2 = _interopRequireDefault(_Error);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBoundary = function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    _classCallCheck(this, ErrorBoundary);

    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

    _this.state = { hasError: false };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      console.log("ErrorBoundary componentDidCatch");
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
      (0, _Error2.default)(error, info); //if an error is thrown here, breaks app, no error boundary to catch
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          'Something went wrong.'
        );
      }
      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(_react2.default.Component);

ErrorBoundary.displayName = 'errorboundary';
exports.default = ErrorBoundary;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\App.js';
//


//import MyError from './Error.js';

var _templateObject = _taggedTemplateLiteral(['\n      /* width */\n      ::-webkit-scrollbar {\n          width: 10px;\n      }\n\n      /* Track */\n      ::-webkit-scrollbar-track {\n          background:  ', '; \n      }\n\n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n          background:  ', '; \n          border-radius: 5px;\n      }\n\n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n          background: ', '; \n      }\n      ::-webkit-scrollbar-button{\n        background: ', '; \n        color: white;\n      }\n    '], ['\n      /* width */\n      ::-webkit-scrollbar {\n          width: 10px;\n      }\n\n      /* Track */\n      ::-webkit-scrollbar-track {\n          background:  ', '; \n      }\n\n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n          background:  ', '; \n          border-radius: 5px;\n      }\n\n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n          background: ', '; \n      }\n      ::-webkit-scrollbar-button{\n        background: ', '; \n        color: white;\n      }\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n'], ['\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _reactHotLoader = __webpack_require__(42);

var _reactStaticRoutes = __webpack_require__(43);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _redux = __webpack_require__(72);

var _redux2 = _interopRequireDefault(_redux);

__webpack_require__(75);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(76);

var _theme2 = _interopRequireDefault(_theme);

var _Analytics = __webpack_require__(77);

var _Analytics2 = _interopRequireDefault(_Analytics);

var _Gapi = __webpack_require__(78);

var _Gapi2 = _interopRequireDefault(_Gapi);

var _d3Ease = __webpack_require__(12);

var _reactMove = __webpack_require__(79);

var _recompose = __webpack_require__(24);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MainMenu = __webpack_require__(9);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var startTheme = (0, _theme2.default)();

function myAnimate() {
  var _this = this;

  this.state = 1;
  this.update = function (type, phase) {
    if (type === 'enter' && phase === 'end' || type === 'leave' && phase === 'end' || type === 'update' && phase === 'end') {
      _this.state = 1;
    } else if (_this.state === 1) {
      _this.state = 0;
    }
    console.log('animationUpdate type: ' + type + ' phase: ' + phase + ' state: ' + _this.state);
  };
}
var animationState = new myAnimate();
//console.log("AnimationUpdate obj ", animationState);
// animationUpdate = animationUpdate();
//var animationUpdate = () => {};

var AnimatedRoutes = (0, _recompose.getContext)({
  // We have to preserve the router context for each route
  // otherwise, a component may rerender with the wrong data
  // during animation
  router: _propTypes2.default.object,
  // We'll also look for the staticURL, so we can disable the animation during static render
  staticURL: _propTypes2.default.string
})(function (_ref) {
  var getComponentForPath = _ref.getComponentForPath,
      router = _ref.router,
      staticURL = _ref.staticURL;
  return _react2.default.createElement(_reactStatic.Route, {
    path: '*',
    render: function render(props) {
      // Get the component for this path
      var Comp = getComponentForPath((0, _reactStatic.cleanPath)(props.location.pathname));
      if (!Comp) {
        Comp = getComponentForPath('404');
      }
      //  console.log("App animated route " + props.location.pathname, props);
      // When we're rendering for static HTML, be sure to NOT animate in.
      if (staticURL) {
        return (
          // This relative wrapper is necessary for accurate rehydration :)
          _react2.default.createElement(
            'div',
            { style: { position: 'relative' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            _react2.default.createElement(Comp, _extends({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            }))
          )
        );
      }

      // Use React-Move to animate the different components coming in and out
      return _react2.default.createElement(
        _reactMove.NodeGroup
        // React-move will handle the entry and exit of any items we pass in `data`
        ,
        { data: [{
            // pass the current Comp, props, ID and router
            id: props.location.pathname,
            Comp: Comp,
            props: props,
            router: router
          }],
          keyAccessor: function keyAccessor(d) {
            return d.id;
          },
          start: function start() {
            return {
              opacity: [0],
              scale: [1.2],
              translateY: [20],
              timing: { duration: 800, delay: 200, ease: _d3Ease.easeQuadOut },
              events: {
                start: function start() {
                  animationState.update('start', 'start');
                },
                end: function end() {
                  animationState.update('start', 'end');
                } }
            };
          },
          enter: function enter() {
            return {
              opacity: [1],
              translateY: [0],
              scale: [1],
              timing: { duration: 800, delay: 200, ease: _d3Ease.easeQuadOut },
              events: {
                start: function start() {
                  animationState.update('enter', 'start');
                },
                end: function end() {
                  animationState.update('enter', 'end');
                }
              }
            };
          },
          update: function update() {
            return {
              opacity: [1],
              scale: [1],
              timing: { duration: 800, delay: 200, ease: _d3Ease.easeQuadOut },
              events: {
                start: function start() {
                  animationState.update('update', 'start');
                },
                end: function end() {
                  animationState.update('update', 'end');
                } }
            };
          },
          leave: function leave() {
            return {
              opacity: [0],
              translateY: [-0],
              scale: [0.2],
              timing: { duration: 800, ease: _d3Ease.easeQuadOut },
              events: {
                start: function start() {
                  animationState.update('leave', 'start');
                },
                end: function end() {
                  animationState.update('leave', 'end');
                }
              }
            };
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        },
        function (nodes) {
          return _react2.default.createElement(
            'div',
            { style: { position: 'relative' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            },
            nodes.map(function (props) {
              var key = props.key,
                  data = props.data,
                  type = props.type,
                  _props$state = props.state,
                  opacity = _props$state.opacity,
                  translateY = _props$state.translateY,
                  scale = _props$state.scale;

              console.log("pageRendering props anim state " + animationState.state, props);
              // Here, we override the router context with the one that was
              // passed with each route scale(${scale}, ${scale}) 
              //console.log(`animating map ${key} with opacity ${opacity} and scaleY ${scale} and rotate ${rotate}`);
              var PreservedRouterContext = (0, _recompose.withContext)({
                router: _propTypes2.default.object
              }, function () {
                return {
                  router: data.router
                };
              })(function (props) {
                return _react2.default.createElement('div', _extends({}, props, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                  }
                }));
              });

              return _react2.default.createElement(
                PreservedRouterContext,
                {
                  key: key,
                  style: {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    transform: 'translateY(' + translateY + 'px) scale(' + scale + ', ' + scale + ')',
                    opacity: opacity
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                  }
                },
                _react2.default.createElement(data.Comp, _extends({}, data.props, { animationState: animationState.state, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                  }
                }))
              );
            })
          );
        }
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  });
});

//${props=>props.theme[props.theme.theme].accent}


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    //let startTheme = theme();
    // startTheme.theme = startTheme.setTheme(); //set to default for consistent static package class names?
    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.state = {
      myTheme: startTheme,
      themeKey: startTheme.theme
    };

    _this2.injectStyles();
    //console.log("my random theme ", this.state.myTheme);
    return _this2;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(function () {
        console.log("timeout, divide by zero now");
        try {
          var fail = 10 / 0;
          console.log("app try succeeded in dividing by 0 " + fail);
          throw new Error('divided by zero');
        } catch (e) {
          console.log("app catch block failed to divide by 0", e);
          //throw obvious error, shouldnt show up in production build?
          throw e;
        }
      }, 5000);
      // try{
      //   let fail = 10/0;
      //   console.log("app try succeeded in dividing by 0 " + fail);
      //   throw new Error('divided by zero');
      // }catch(e){
      //   console.log("app catch block failed to divide by 0", e);
      //   //throw obvious error, shouldnt show up in production build?
      //   throw e;
      // }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.themeKey !== this.state.myTheme.theme) {
        this.injectStyles();
      }
    }
  }, {
    key: 'injectStyles',
    value: function injectStyles() {
      (0, _styledComponents.injectGlobal)(_templateObject, this.state.myTheme[this.state.myTheme.theme].neutral, this.state.myTheme[this.state.myTheme.theme].accent, this.state.myTheme[this.state.myTheme.theme].accentL, this.state.myTheme[this.state.myTheme.theme].neutralL);
    }
    // renderThing(){
    //   if(this.state.mounted){
    //     return this.state.none.prop;
    //   }
    //   return null;
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _redux2.default, __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          }
        },
        _react2.default.createElement(
          _reactStatic.Router,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 252
            }
          },
          _react2.default.createElement(
            'div',
            { style: { position: 'relative' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 253
              }
            },
            _react2.default.createElement(_Analytics2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 254
              }
            }),
            _react2.default.createElement(_Gapi2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 255
              }
            }),
            _react2.default.createElement(
              _styledComponents.ThemeProvider,
              { theme: this.state.myTheme, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 256
                }
              },
              _react2.default.createElement(
                Root,
                { className: 'content', style: { backgroundColor: this.state.myTheme[this.state.myTheme.theme].neutral }, onDoubleClick: function onDoubleClick() {
                    var nTheme = _this3.state.myTheme;
                    nTheme.setTheme(nTheme);
                    _this3.setState({
                      myTheme: _extends({}, nTheme),
                      themeKey: nTheme.theme
                    });
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257
                  }
                },
                _react2.default.createElement(
                  _reactStatic.Switch,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 265
                    }
                  },
                  _react2.default.createElement(_reactStatic.Route, { path: '/games/:game', exact: true, component: function component() {
                      return null;
                    }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 266
                    }
                  }),
                  _react2.default.createElement(_reactStatic.Route, { path: '/', component: function component() {
                      return _react2.default.createElement(_MainMenu2.default, {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 267
                        }
                      });
                    }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 267
                    }
                  })
                ),
                _react2.default.createElement(_reactStaticRoutes2.default, { component: AnimatedRoutes, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 269
                  }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

var Root = _styledComponents2.default.div(_templateObject2);

/*
  
 <Analytics />
            <Gapi />
              <ThemeProvider theme={this.state.myTheme}>
                      <Root className="content" style={{backgroundColor: this.state.myTheme[this.state.myTheme.theme].neutral}} onDoubleClick={()=>{
                                let nTheme = this.state.myTheme;
                                nTheme.setTheme(nTheme);
                                this.setState({
                                  myTheme: {...nTheme},
                                  themeKey: nTheme.theme
                              })
                      }}>
                      <Switch>
                        <Route path="/games/:game" exact component={() => {return null}} />
                        <Route path="/" component={() => {return <Menu />}} />
                      </Switch>
                      <Routes component={AnimatedRoutes} />
                    </Root>
              </ThemeProvider>
*/
// const App = () => (
//   <Provider store={store}>
//     <Router >
//       <div>
//         <Analytics />
//         <Gapi />
//         <div className="content" onDoubleClick={()=>{
//                   this.setState({
//                     myTheme: theme()
//                 })
//         }}>
//           <ThemeProvider theme={this.state.myTheme}>

//               <Routes />

//           </ThemeProvider>
//         </div>
//       </div>
//     </Router>
//   </Provider>
// )

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(6);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(7);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(8);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\dist\\react-static-routes.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(44);

var _reactUniversalComponent = __webpack_require__(45);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Posts.jsx',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 27)), (0, _importCss3.default)('src/containers/Posts.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Posts.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return 'src/containers/Posts.jsx';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post.jsx',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Post.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post.jsx';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home.jsx',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 30)), (0, _importCss3.default)('src/containers/Home.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home.jsx';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Games',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 31)), (0, _importCss3.default)('src/containers/Games', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Games');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return 'src/containers/Games';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Game',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 33)), (0, _importCss3.default)('src/containers/Game', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Game');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return 'src/containers/Game';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About.jsx',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 36)), (0, _importCss3.default)('src/containers/About.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return 'src/containers/About.jsx';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404.jsx',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 37)), (0, _importCss3.default)('src/containers/404.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return 'src/containers/404.jsx';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 7

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {}, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          })) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, _extends({}, renderProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }));
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(46);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(47);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(48);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(21);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0eiIvPgogICAgPHBhdGggIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNOSAxNi4yTDQuOCAxMmwtMS40IDEuNEw5IDE5IDIxIDdsLTEuNC0xLjRMOSAxNi4yeiIvPgo8L3N2Zz4K"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTkgOGwtNCA0aDNjMCAzLjMxLTIuNjkgNi02IDYtMS4wMSAwLTEuOTctLjI1LTIuOC0uN2wtMS40NiAxLjQ2QzguOTcgMTkuNTQgMTAuNDMgMjAgMTIgMjBjNC40MiAwIDgtMy41OCA4LThoM2wtNC00ek02IDEyYzAtMy4zMSAyLjY5LTYgNi02IDEuMDEgMCAxLjk3LjI1IDIuOC43bDEuNDYtMS40NkMxNS4wMyA0LjQ2IDEzLjU3IDQgMTIgNGMtNC40MiAwLTggMy41OC04IDhIMWw0IDQgNC00SDZ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo="

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik04LjU5LDE2LjU5TDEzLjE3LDEyTDguNTksNy40MUwxMCw2bDYsNmwtNiw2TDguNTksMTYuNTl6Ii8+Cgk8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTcgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWN2wtNC00em0tNSAxNmMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDN6bTMtMTBINVY1aDEwdjR6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjB2MjBIMFYweiIvPgogICAgPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNS45NSAxMC43OGMuMDMtLjI1LjA1LS41MS4wNS0uNzhzLS4wMi0uNTMtLjA2LS43OGwxLjY5LTEuMzJjLjE1LS4xMi4xOS0uMzQuMS0uNTFsLTEuNi0yLjc3Yy0uMS0uMTgtLjMxLS4yNC0uNDktLjE4bC0xLjk5LjhjLS40Mi0uMzItLjg2LS41OC0xLjM1LS43OEwxMiAyLjM0Yy0uMDMtLjItLjItLjM0LS40LS4zNEg4LjRjLS4yIDAtLjM2LjE0LS4zOS4zNGwtLjMgMi4xMmMtLjQ5LjItLjk0LjQ3LTEuMzUuNzhsLTEuOTktLjhjLS4xOC0uMDctLjM5IDAtLjQ5LjE4bC0xLjYgMi43N2MtLjEuMTgtLjA2LjM5LjEuNTFsMS42OSAxLjMyYy0uMDQuMjUtLjA3LjUyLS4wNy43OHMuMDIuNTMuMDYuNzhMMi4zNyAxMi4xYy0uMTUuMTItLjE5LjM0LS4xLjUxbDEuNiAyLjc3Yy4xLjE4LjMxLjI0LjQ5LjE4bDEuOTktLjhjLjQyLjMyLjg2LjU4IDEuMzUuNzhsLjMgMi4xMmMuMDQuMi4yLjM0LjQuMzRoMy4yYy4yIDAgLjM3LS4xNC4zOS0uMzRsLjMtMi4xMmMuNDktLjIuOTQtLjQ3IDEuMzUtLjc4bDEuOTkuOGMuMTguMDcuMzkgMCAuNDktLjE4bDEuNi0yLjc3Yy4xLS4xOC4wNi0uMzktLjEtLjUxbC0xLjY3LTEuMzJ6TTEwIDEzYy0xLjY1IDAtMy0xLjM1LTMtM3MxLjM1LTMgMy0zIDMgMS4zNSAzIDMtMS4zNSAzLTMgM3oiLz4KPC9zdmc+Cg=="

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICA8cGF0aCBkPSJNNy40MSAxNS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6Ii8+DQogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPg0KPC9zdmc+DQo="

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICA8cGF0aCBkPSJNOCA1djE0bDExLTd6Ii8+DQogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPg0KPC9zdmc+DQo="

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\TalkitGame.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    padding: 20px;\n    background: orange;\n'], ['\n    padding: 20px;\n    background: orange;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//plays games made by talkit dialogue tree
var Talkit = function (_React$Component) {
    _inherits(Talkit, _React$Component);

    function Talkit(props) {
        _classCallCheck(this, Talkit);

        //   console.log("Talkit props", props);
        //let game = this.props.tree.content;
        var _this = _possibleConstructorReturn(this, (Talkit.__proto__ || Object.getPrototypeOf(Talkit)).call(this, props));

        if (_this.props.tree) {
            var ids = _this.extractGameIds(_this.props.tree);
            //  console.log("extracted game info", ids);
            _this.onInput = _this.onInput.bind(_this);
            _this.getVariableValue = _this.getVariableValue.bind(_this);
            _this.getComparisonValue = _this.getComparisonValue.bind(_this);
            if (ids) {
                _this.state = {
                    ids: ids.map,
                    id: ids.id,
                    gamePlaying: true
                    // console.log("indi post has a game", this.state);
                };var first = ids.map.get(ids.id);
                _this.playNodes(first);
            }
        }
        return _this;
    }

    _createClass(Talkit, [{
        key: 'getVariableValue',
        value: function getVariableValue(variable, value) {
            //takes in the variable and valye, and best of text code, determines if is a number, and if should be relative, absolute or string
            //if is relative, checks if answer is in state, and adds to if so
            var type = variable.substr(0, 1);
            var tValue = value;
            var current = this.state[variable] ? this.state[variable] : 0;
            //   console.log(`getVariableValue variable: ${variable} type ${type} value: ${value} current: ${current}`);
            if (type == "a") {
                tValue = parseInt(value);
                return tValue;
            } else if (type == "r") {
                tValue = parseInt(value);
                return tValue + current;
            } else {
                return tValue;
            }
        }
    }, {
        key: 'getComparisonValue',
        value: function getComparisonValue(variable, comparison) {
            //comparison assumed same type as variable;
            var type = variable.substr(0, 1);
            var tValue = comparison;
            // console.log(`getComparisonValue variable ${variable} type ${type} comparison ${comparison}`);
            if (type == "a" || type == "r") {
                tValue = parseInt(comparison);
                return tValue;
            } else {
                return tValue;
            }
        }
    }, {
        key: 'playNodes',
        value: function playNodes(next) {
            var _this2 = this;

            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            //  console.log("playNodes next node", next);
            //state === updates to make to setState when hits input
            //if next is auto, complete
            if (next.type == 'Set') {
                //set state as variable:value
                var nValue = this.getVariableValue(next.variable, next.value);
                state[next.variable] = nValue; //if first char is 
                var n = this.state.ids.get(next.next);
                //  console.log("Set variable state", state);
                this.setState(_defineProperty({}, next.variable, nValue));
                this.playNodes(n, state);
            } else if (next.type == 'Branch') {
                //compare the branches state, if none are true, select _default value:id
                var branch = next.branches.filter(function (b) {
                    //split the first 2 letters off, get variable with remainder, apply check
                    if (b.state == "_default") {
                        return false;
                    }
                    var comparison = b.state.substr(0, 2);
                    var variable = next.variable;
                    var value = _this2.getComparisonValue(variable, b.state.substr(2));
                    var cVal = _this2.state[variable] ? _this2.state[variable] : state[variable];
                    // console.log(`branch comparison ${comparison}  value ${value}, is ${variable} cVal ${cVal} in state?`, this.state);
                    if (comparison == "gt" && cVal) {
                        return cVal > value;
                    } else if (comparison == "lt" && cVal) {
                        return cVal < value;
                    } else if (comparison == "eq" && cVal) {
                        return cVal == value;
                    }
                });
                if (branch.length <= 0) {
                    branch = next.branches.filter(function (b) {
                        return b.state == "_default";
                    });
                    //  console.log("branch not chosen, selecting default", branch);
                }
                // console.log("selected branch ", branch);
                var b = this.state.ids.get(branch[0].value);
                this.playNodes(b, state);
            } else {
                //is an input type, set id and finish
                if (!next.next && !next.choices) {
                    this.setState({
                        gamePlaying: false
                    });
                } else {
                    state.id = next.id;
                    //  console.log("playNodes updating state", state);
                    this.setState({
                        id: next.id
                    });
                }
            }
        }
    }, {
        key: 'extractGameIds',
        value: function extractGameIds(game) {
            var map = new Map();
            var id = null;
            if (game) {
                game.map(function (g, i) {
                    if (i === 0) {
                        id = g.id;
                    }
                    map.set(g.id, g);
                });
                // console.log("extracted ids", map);
            }
            if (id) {
                return { map: map, id: id };
            } else {
                return null;
            }
        }
    }, {
        key: 'onInput',
        value: function onInput(id) {
            //get the selected node by id, pass to playNodes
            var game = this.state.ids.get(id);
            //  console.log("onInput " + id + " node ", game);
            this.playNodes(game);
        }
    }, {
        key: 'renderGame',
        value: function renderGame() {
            var _this3 = this;

            //render node id points to
            var game = this.state.ids.get(this.state.id);
            //  console.log("renderGame node", game);
            var views = [];
            if (this.state.gamePlaying && game) {
                if (game.name) {
                    views.push(_react2.default.createElement(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 147
                            }
                        },
                        game.name
                    ));
                }
                if (game.choices) {
                    game.choices.map(function (c) {
                        //  console.log("rendering choice", c);
                        views.push(_react2.default.createElement(
                            'button',
                            { onClick: function onClick() {
                                    _this3.onInput(c.id);
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 152
                                }
                            },
                            c.title
                        ));
                    });
                }
                if (game.next) {
                    //   console.log("rendering next", game.next);
                    views.push(_react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this3.onInput(game.next);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 157
                            }
                        },
                        game.name
                    ));
                }
                // else if(!game.next && game.type === "Node"){
                //     views.push(<p>game finished</p>)
                // }
            } else {
                //game is finished
                views.push(_react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 164
                        }
                    },
                    'game finished'
                ));
            }
            return views;
        }
    }, {
        key: 'render',
        value: function render() {
            // console.log("Talking game render", this.state);
            if (this.state.ids) {
                return _react2.default.createElement(
                    Game,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 172
                        }
                    },
                    this.renderGame()
                );
            } else {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 177
                        }
                    },
                    'no ids found'
                );
            }
            // return <p>no ids found</p>
        }
    }]);

    return Talkit;
}(_react2.default.Component);

exports.default = Talkit;


var Game = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var colors = {
    p: '#101856',
    pDark: '#040615',
    pLight: '#2b39d4',
    s: '#C6FF00',
    sDark: '#8cb300',
    sLight: '#e9ff99',
    a1Light: '#69F0AE',
    a1Dark: '#10a25c',
    a2Light: '#FFEB3B',
    a2Dark: '#F9A825',
    transparent: 'transparent',
    text: 'white',
    accent: '#cc00cc',
    accentHighlight: '#ffccff',
    accentShadow: '#660066',
    shadow: '#f2f2f2',
    menu: 'white',
    series0: '#cc66ff',
    series1: '#99ccff',
    series2: '#99ffcc',
    series3: '#ffffcc',
    series4: '#ffcce6'
};

exports.default = colors;

// export const timing= {
//     mini: 0.3
// };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\layout\\Tags.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline;\n    padding: 0px 10px;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n'], ['\n    display: inline;\n    padding: 0px 10px;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width:100%;\n    padding: 10px;\n'], ['\n    width:100%;\n    padding: 10px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_React$Component) {
    _inherits(Tags, _React$Component);

    function Tags() {
        _classCallCheck(this, Tags);

        return _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).apply(this, arguments));
    }

    _createClass(Tags, [{
        key: 'render',
        value: function render() {
            if (this.props.tags) {
                return _react2.default.createElement(Container, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                });
            } else {
                return _react2.default.createElement(
                    Container,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    },
                    _react2.default.createElement(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        'no tags to be found'
                    )
                );
            }
        }
    }]);

    return Tags;
}(_react2.default.Component);

exports.default = Tags;


var Tag = _styledComponents2.default.h4(_templateObject);
var Container = _styledComponents2.default.div(_templateObject2);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Text.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: ', ';\n    margin: auto;\n    h1, h2, h3, h4, h5, h6, p{\n        display: ', ';\n        text-align: ', ';\n        color: ', ';\n        font-size: ', ';\n    }\n'], ['\n    display: ', ';\n    margin: auto;\n    h1, h2, h3, h4, h5, h6, p{\n        display: ', ';\n        text-align: ', ';\n        color: ', ';\n        font-size: ', ';\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_React$Component) {
    _inherits(Text, _React$Component);

    function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
    }

    _createClass(Text, [{
        key: 'render',
        value: function render() {
            switch (this.props.tag) {
                case 'h1':
                    return _react2.default.createElement(
                        Wrapper,
                        { align: this.props.align, size: this.props.size, display: this.props.display, color: this.props.color, colorKey: this.props.colorKey, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        _react2.default.createElement(
                            'h1',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 8
                                }
                            },
                            this.props.text
                        )
                    );
                case 'h2':
                    return _react2.default.createElement(
                        Wrapper,
                        { align: this.props.align, size: this.props.size, display: this.props.display, color: this.props.color, colorKey: this.props.colorKey, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        },
                        _react2.default.createElement(
                            'h2',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 10
                                }
                            },
                            this.props.text
                        )
                    );
                case 'h3':
                    return _react2.default.createElement(
                        Wrapper,
                        { align: this.props.align, size: this.props.size, display: this.props.display, color: this.props.color, colorKey: this.props.colorKey, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        _react2.default.createElement(
                            'h3',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            },
                            this.props.text
                        )
                    );
                case 'h4':
                    return _react2.default.createElement(
                        Wrapper,
                        { align: this.props.align, size: this.props.size, display: this.props.display, color: this.props.color, colorKey: this.props.colorKey, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        _react2.default.createElement(
                            'h4',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                }
                            },
                            this.props.text
                        )
                    );
                case 'h5':
                    return _react2.default.createElement(
                        Wrapper,
                        { align: this.props.align, size: this.props.size, display: this.props.display, color: this.props.color, colorKey: this.props.colorKey, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        _react2.default.createElement(
                            'h5',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 16
                                }
                            },
                            this.props.text
                        )
                    );
                case 'h6':
                    return _react2.default.createElement(
                        Wrapper,
                        { align: this.props.align, size: this.props.size, display: this.props.display, color: this.props.color, colorKey: this.props.colorKey, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        _react2.default.createElement(
                            'h6',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 18
                                }
                            },
                            this.props.text
                        )
                    );
                default:
                    return _react2.default.createElement(
                        Wrapper,
                        { align: this.props.align, size: this.props.size, display: this.props.display, color: this.props.color, colorKey: this.props.colorKey, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        _react2.default.createElement(
                            'p',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                }
                            },
                            this.props.text
                        )
                    );
            }
        }
    }]);

    return Text;
}(_react2.default.Component);

exports.default = Text;


var Wrapper = _styledComponents2.default.span(_templateObject, function (props) {
    return props.display ? props.display : 'inline-block';
}, function (props) {
    return props.display ? props.display : 'inline-block';
}, function (props) {
    return props.align ? props.align : 'center';
}, function (props) {
    if (props.color) {
        return props.color;
    } else if (props.colorKey) {
        return props.theme[props.theme.theme][props.colorKey];
    } else {
        return props.theme[props.theme.theme].text;
    }
}, function (props) {
    return props.size ? props.size : '1em';
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(6);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(7);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(8);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\Trends.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _trends = __webpack_require__(63);

var _trends2 = _interopRequireDefault(_trends);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Loading = __webpack_require__(25);

var _Loading2 = _interopRequireDefault(_Loading);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import {ResponsiveContainer, LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
/*
      "Month": "2004-01",
      "math: (Worldwide)": 35,
      "physics: (Worldwide)": 20,
      "chemistry: (Worldwide)": 21,
      import { error } from 'util';
"biology: (Worldwide)": 18,
      "science: (Worldwide)": 100

      tick={{ fill: 'red' }}
*/
var Graph = function (_React$Component) {
    _inherits(Graph, _React$Component);

    function Graph(props) {
        _classCallCheck(this, Graph);

        var _this = _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, props));

        _this.state = {
            recharts: null,
            error: null
        };
        return _this;
    }

    _createClass(Graph, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            (0, _universalImport3.default)({
                id: 'recharts',
                file: 'D:/websites/react-static/static-site-2/4/src/components/Trends.jsx',
                load: function load() {
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(5);
                },
                chunkName: function chunkName() {
                    return 'mygraph';
                }
            }).then(function (r) {
                _this2.setState({
                    recharts: r
                });
            }).catch(function (e) {
                _this2.setState({
                    error: 'unable to load graph'
                });
            });
        }
    }, {
        key: 'renderGraph',
        value: function renderGraph() {
            var _state$recharts = this.state.recharts,
                ResponsiveContainer = _state$recharts.ResponsiveContainer,
                LineChart = _state$recharts.LineChart,
                Line = _state$recharts.Line,
                Area = _state$recharts.Area,
                XAxis = _state$recharts.XAxis,
                YAxis = _state$recharts.YAxis,
                CartesianGrid = _state$recharts.CartesianGrid,
                Tooltip = _state$recharts.Tooltip,
                Legend = _state$recharts.Legend;

            return (
                // <p>graph</p>
                _react2.default.createElement(
                    ResponsiveContainer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    },
                    _react2.default.createElement(
                        LineChart,
                        { width: 600, height: 300, data: _trends2.default,
                            margin: { top: 10, right: 20, left: -20, bottom: 50 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            }
                        },
                        _react2.default.createElement(XAxis, { dataKey: 'Month', label: { value: "Year-Month", offset: 25, angle: 0, position: 'bottom' },
                            tickFormatter: function tickFormatter(t) {
                                return t.slice(2);
                            }, angle: -45, textAnchor: 'end', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                            }
                        }),
                        _react2.default.createElement(YAxis, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 48
                            }
                        }),
                        _react2.default.createElement(CartesianGrid, { strokeDasharray: '1 6', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 49
                            }
                        }),
                        _react2.default.createElement(Tooltip, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                            }
                        }),
                        _react2.default.createElement(Legend, { verticalAlign: 'top', height: 36, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            }
                        }),
                        _react2.default.createElement(Line, { type: 'monotone', dot: false, dataKey: 'math: (Worldwide)', fill: '#8884d8', stroke: '#8884d8', strokeWidth: 3, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 52
                            }
                        }),
                        _react2.default.createElement(Line, { type: 'monotone', dot: false, dataKey: 'physics: (Worldwide)', stroke: '#82ca9d', strokeWidth: 3, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 53
                            }
                        })
                    )
                )
            );
        }
        //runs a loading animation until data and graph are imported

    }, {
        key: 'render',
        value: function render() {

            if (this.state.recharts) {
                return this.renderGraph();
            } else if (this.state.error) {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    this.state.error
                );
            } else {
                return _react2.default.createElement(
                    _Container2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                        }
                    },
                    _react2.default.createElement(_Loading2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        }
                    })
                );
            }
        }
    }]);

    return Graph;
}(_react2.default.Component);

exports.default = Graph;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = [{"Month":"2004-01","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":100},{"Month":"2004-02","math: (Worldwide)":37,"physics: (Worldwide)":22,"chemistry: (Worldwide)":22,"biology: (Worldwide)":18,"science: (Worldwide)":98},{"Month":"2004-03","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":20,"biology: (Worldwide)":17,"science: (Worldwide)":90},{"Month":"2004-04","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":20,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-05","math: (Worldwide)":33,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":15,"science: (Worldwide)":77},{"Month":"2004-06","math: (Worldwide)":27,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":68},{"Month":"2004-07","math: (Worldwide)":21,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2004-08","math: (Worldwide)":24,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":68},{"Month":"2004-09","math: (Worldwide)":37,"physics: (Worldwide)":19,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":87},{"Month":"2004-10","math: (Worldwide)":37,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":17,"science: (Worldwide)":86},{"Month":"2004-11","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-12","math: (Worldwide)":30,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":13,"science: (Worldwide)":72},{"Month":"2005-01","math: (Worldwide)":34,"physics: (Worldwide)":18,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":87},{"Month":"2005-02","math: (Worldwide)":35,"physics: (Worldwide)":18,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":88},{"Month":"2005-03","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":79},{"Month":"2005-04","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-05","math: (Worldwide)":32,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":71},{"Month":"2005-06","math: (Worldwide)":28,"physics: (Worldwide)":15,"chemistry: (Worldwide)":16,"biology: (Worldwide)":12,"science: (Worldwide)":63},{"Month":"2005-07","math: (Worldwide)":20,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2005-08","math: (Worldwide)":24,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2005-09","math: (Worldwide)":36,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":74},{"Month":"2005-10","math: (Worldwide)":35,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":76},{"Month":"2005-11","math: (Worldwide)":33,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-12","math: (Worldwide)":27,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":63},{"Month":"2006-01","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":76},{"Month":"2006-02","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":74},{"Month":"2006-03","math: (Worldwide)":32,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":70},{"Month":"2006-04","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":64},{"Month":"2006-05","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":61},{"Month":"2006-06","math: (Worldwide)":26,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2006-07","math: (Worldwide)":18,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2006-08","math: (Worldwide)":23,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":55},{"Month":"2006-09","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":69},{"Month":"2006-10","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":65},{"Month":"2006-11","math: (Worldwide)":30,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":61},{"Month":"2006-12","math: (Worldwide)":26,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2007-01","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":65},{"Month":"2007-02","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":62},{"Month":"2007-03","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":62},{"Month":"2007-04","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2007-05","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2007-06","math: (Worldwide)":24,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2007-07","math: (Worldwide)":18,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":44},{"Month":"2007-08","math: (Worldwide)":21,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2007-09","math: (Worldwide)":31,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":57},{"Month":"2007-10","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":60},{"Month":"2007-11","math: (Worldwide)":29,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2007-12","math: (Worldwide)":25,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-01","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-02","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-03","math: (Worldwide)":27,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2008-04","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2008-05","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-06","math: (Worldwide)":24,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2008-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2008-08","math: (Worldwide)":21,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2008-09","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2008-10","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":51},{"Month":"2008-11","math: (Worldwide)":29,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2008-12","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2009-01","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":53},{"Month":"2009-02","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2009-03","math: (Worldwide)":32,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2009-04","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2009-05","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2009-06","math: (Worldwide)":26,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":44},{"Month":"2009-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":38},{"Month":"2009-08","math: (Worldwide)":22,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2009-09","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2009-10","math: (Worldwide)":34,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-11","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-12","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2010-01","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2010-02","math: (Worldwide)":35,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-03","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-04","math: (Worldwide)":35,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2010-05","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2010-06","math: (Worldwide)":30,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2010-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":39},{"Month":"2010-08","math: (Worldwide)":23,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2010-09","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2010-10","math: (Worldwide)":38,"physics: (Worldwide)":13,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-11","math: (Worldwide)":39,"physics: (Worldwide)":13,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-12","math: (Worldwide)":34,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2011-01","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2011-02","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":47},{"Month":"2011-03","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2011-04","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2011-05","math: (Worldwide)":42,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2011-06","math: (Worldwide)":33,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2011-07","math: (Worldwide)":20,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":36},{"Month":"2011-08","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2011-09","math: (Worldwide)":40,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":48},{"Month":"2011-10","math: (Worldwide)":43,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2011-11","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2011-12","math: (Worldwide)":41,"physics: (Worldwide)":10,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2012-01","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2012-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2012-03","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-05","math: (Worldwide)":59,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-06","math: (Worldwide)":40,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2012-07","math: (Worldwide)":26,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2012-08","math: (Worldwide)":31,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2012-09","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":47},{"Month":"2012-10","math: (Worldwide)":50,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2012-12","math: (Worldwide)":48,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":35},{"Month":"2013-01","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-02","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-03","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2013-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2013-05","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":40},{"Month":"2013-06","math: (Worldwide)":37,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2013-07","math: (Worldwide)":23,"physics: (Worldwide)":7,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2013-08","math: (Worldwide)":28,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2013-09","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2013-10","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2013-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2013-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":36},{"Month":"2014-01","math: (Worldwide)":45,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2014-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":42},{"Month":"2014-04","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-05","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-06","math: (Worldwide)":37,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2014-07","math: (Worldwide)":22,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2014-08","math: (Worldwide)":29,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2014-09","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2014-10","math: (Worldwide)":56,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2014-11","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-12","math: (Worldwide)":47,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2015-01","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-02","math: (Worldwide)":53,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2015-04","math: (Worldwide)":51,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2015-05","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2015-06","math: (Worldwide)":36,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2015-07","math: (Worldwide)":21,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2015-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2015-09","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2015-10","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-11","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-01","math: (Worldwide)":43,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2016-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2016-03","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-04","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-05","math: (Worldwide)":49,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-06","math: (Worldwide)":31,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2016-07","math: (Worldwide)":18,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":33},{"Month":"2016-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-09","math: (Worldwide)":55,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2016-10","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-11","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":44},{"Month":"2016-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2017-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2017-02","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2017-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2017-04","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2017-05","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-06","math: (Worldwide)":30,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2017-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2017-08","math: (Worldwide)":32,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2017-09","math: (Worldwide)":53,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":45},{"Month":"2017-10","math: (Worldwide)":55,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-11","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2017-12","math: (Worldwide)":46,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2018-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-02","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2018-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-04","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":42},{"Month":"2018-05","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2018-06","math: (Worldwide)":33,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38}]

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\layout\\GameListItem.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Accordion = __webpack_require__(32);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _IconButton = __webpack_require__(13);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameItem = function (_React$Component) {
    _inherits(GameItem, _React$Component);

    function GameItem(props) {
        _classCallCheck(this, GameItem);

        var _this = _possibleConstructorReturn(this, (GameItem.__proto__ || Object.getPrototypeOf(GameItem)).call(this, props));

        var subtitle = _this.props.game.tags.map(function (t, i) {
            return i <= 0 ? '' + t : ', ' + t;
        });
        _this.state = {
            subtitle: subtitle
        };
        return _this;
    }

    _createClass(GameItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Accordion2.default,
                {
                    key: this.props.game.id,
                    event: { category: 'GamesPage', label: this.props.game.id },
                    title: this.props.game.title,
                    subtitle: this.state.subtitle,
                    callToAction: function callToAction() {
                        return _react2.default.createElement(
                            _reactStatic.Link,
                            { key: _this2.props.game.id,
                                to: '/games/' + _this2.props.game.id, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 25
                                }
                            },
                            _react2.default.createElement(_IconButton2.default, { icon: "play", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            })
                        );
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                },
                this.props.game.desc
            );
        }
    }]);

    return GameItem;
}(_react2.default.Component);

exports.default = GameItem;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Button.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    padding: 10px;\n    color: white;\n    background-color: ', ';\n    border-radius: 5px;\n    outline: 0;\n    border: 0;\n    text-decoration: none;\n    display: inline-block;\n    transition: all 0.3s ease;\n    a{\n        color: white !important;\n    }\n    &:hover{\n        background-color: ', ';\n    }\n'], ['\n    padding: 10px;\n    color: white;\n    background-color: ', ';\n    border-radius: 5px;\n    outline: 0;\n    border: 0;\n    text-decoration: none;\n    display: inline-block;\n    transition: all 0.3s ease;\n    a{\n        color: white !important;\n    }\n    &:hover{\n        background-color: ', ';\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.handleInput = _this.handleInput.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: 'handleInput',
        value: function handleInput() {
            //fire event if available
            //pass input up to parents
            //this.props.onInput();
            console.log("button clicked");
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Btn,
                { onClick: this.handleInput, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                },
                this.props.children
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

exports.default = Button;


var Btn = _styledComponents2.default.button(_templateObject, function (props) {
    return props.theme[props.theme.theme].accent;
}, function (props) {
    return props.theme[props.theme.theme].accentD;
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\game\\Index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Store = __webpack_require__(67);

var _Store2 = _interopRequireDefault(_Store);

var _Game = __webpack_require__(68);

var _Game2 = _interopRequireDefault(_Game);

var _samplegame = __webpack_require__(18);

var _samplegame2 = _interopRequireDefault(_samplegame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Load from './Load.jsx';

//import SampleGame from './SampleGame.jsx';


if (typeof window === 'undefined') {
  global.window = {};
}

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      game: null
    };
    console.log("website: index of game, reducers: ", _samplegame2.default.getReducers()());
    return _this;
  }
  // renderPersistStore(){
  //   return(
  //     <Load gamename={'g5'}>
  //       <Game game={this.props.game}/>
  //     </Load>
  //   )
  // }


  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //  console.log("index mounted", samplegame);
      this.setState({
        game: _samplegame2.default.getComponent(),
        reducers: _samplegame2.default.getReducers()
      });
    }
  }, {
    key: 'renderStore',
    value: function renderStore() {
      if (this.state.game) {
        return _react2.default.createElement(
          _Store2.default,
          { reducers: this.state.reducers, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          _react2.default.createElement(_Game2.default, { game: this.state.game, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          })
        );
        //return null;
      } else {
        return _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          'loading game...'
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderStore();
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\game\\Store.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(14);

var _reduxLogger = __webpack_require__(34);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import reducers from './../../games/g5/reducers.js';

if (typeof window === 'undefined') {
    global.window = {};
}

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.store = (0, _redux.createStore)(props.reducers, {}, (0, _redux.applyMiddleware)(_reduxLogger2.default));
        return _this;
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: this.store, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                },
                this.props.children
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(6);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(7);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(8);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\game\\Game.jsx';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _all = __webpack_require__(69);

var _all2 = _interopRequireDefault(_all);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _Accordion = __webpack_require__(32);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mygamelibs = __webpack_require__(70);

var _mygamelibs2 = _interopRequireDefault(_mygamelibs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Katex from './../UI/math/Katex.jsx';
//import {ResponsiveContainer, LineChart, ScatterChart, Scatter, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


var Game = function (_React$Component) {
    _inherits(Game, _React$Component);

    function Game(props) {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

        console.log("game constructor, sample game: ", _this.props.game);
        _this.state = {
            checkIn: {
                katex: null,
                recharts: null
            },
            tools: {
                views: _extends({}, _mygamelibs2.default.views, {
                    container: _Container2.default,
                    styled: _styledComponents2.default,
                    accordion: _Accordion2.default,
                    nerdamer: _all2.default
                    //katex: Katex,
                    // recharts: {
                    //     ResponsiveContainer,
                    //     LineChart,
                    //     ScatterChart,
                    //     Scatter,
                    //     ComposedChart,
                    //     Line,
                    //     Area,
                    //     Bar,
                    //     XAxis,
                    //     YAxis,
                    //     CartesianGrid,
                    //     Tooltip,
                    //     Legend
                    // },

                }) }
        };
        return _this;
    }

    _createClass(Game, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.importKatex();
            this.importGraph();
        }
    }, {
        key: 'areToolsReady',
        value: function areToolsReady() {
            var _this2 = this;

            console.log("game tools ready? ");
            var ready = true;
            var keys = Object.keys(this.state.checkIn);
            keys.map(function (k) {
                if (!_this2.state.checkIn[k]) {
                    ready = false;
                }
            });
            console.log("game tools ready? " + ready, this.state);
            return ready;
        }
    }, {
        key: 'importKatex',
        value: function importKatex() {
            var _this3 = this;

            (0, _universalImport3.default)({
                id: './../UI/math/Katex.jsx',
                file: 'D:/websites/react-static/static-site-2/4/src/components/game/Game.jsx',
                load: function load() {
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 35)), (0, _importCss3.default)('UI/math/Katex.jsx', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, './../UI/math/Katex.jsx');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(35);
                },
                chunkName: function chunkName() {
                    return 'UI/math/Katex.jsx';
                }
            }).then(function (r) {
                console.log("game tools katex checking in", r);
                _this3.setState({
                    checkIn: _extends({}, _this3.state.checkIn, {
                        katex: true
                    }),
                    tools: _extends({}, _this3.state.tools, {
                        views: _extends({}, _this3.state.tools.views, {
                            katex: r.default
                        })
                    })
                });
            }).catch(function (e) {
                console.log("game tools error");
                _this3.setState({
                    error: 'failed to fetch katex'
                });
            });
        }
    }, {
        key: 'importGraph',
        value: function importGraph() {
            var _this4 = this;

            (0, _universalImport3.default)({
                id: 'recharts',
                file: 'D:/websites/react-static/static-site-2/4/src/components/game/Game.jsx',
                load: function load() {
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(5);
                },
                chunkName: function chunkName() {
                    return 'recharts';
                }
            }).then(function (r) {
                console.log("game tools graph checking in, ", r);
                var ResponsiveContainer = r.ResponsiveContainer,
                    LineChart = r.LineChart,
                    ScatterChart = r.ScatterChart,
                    Scatter = r.Scatter,
                    ComposedChart = r.ComposedChart,
                    Line = r.Line,
                    Area = r.Area,
                    Bar = r.Bar,
                    XAxis = r.XAxis,
                    YAxis = r.YAxis,
                    CartesianGrid = r.CartesianGrid,
                    Tooltip = r.Tooltip,
                    Legend = r.Legend;

                _this4.setState({
                    //katex: Katex,
                    checkIn: _extends({}, _this4.state.checkIn, {
                        recharts: true
                    }),
                    tools: _extends({}, _this4.state.tools, {
                        views: _extends({}, _this4.state.tools.views, {
                            recharts: {
                                ResponsiveContainer: ResponsiveContainer,
                                LineChart: LineChart,
                                ScatterChart: ScatterChart,
                                Scatter: Scatter,
                                ComposedChart: ComposedChart,
                                Line: Line,
                                Area: Area,
                                Bar: Bar,
                                XAxis: XAxis,
                                YAxis: YAxis,
                                CartesianGrid: CartesianGrid,
                                Tooltip: Tooltip,
                                Legend: Legend
                            }
                        })
                    })
                });
            }).catch(function (e) {
                console.log("game tools error");
                _this4.setState({
                    error: 'failed to fetch graph'
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('rendering game with tools: ', this.state);
            if (this.areToolsReady()) {
                return _react2.default.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 134
                        }
                    },
                    _react2.default.createElement(this.props.game, { tools: this.state.tools, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 135
                        }
                    })
                );
            } else {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 139
                        }
                    },
                    'loading tools...'
                );
            }
        }
    }]);

    return Game;
}(_react2.default.Component);

exports.default = Game;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("nerdamer/all");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("mygamelibs");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("katex/dist/katex.min.css");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _reduxLogger = __webpack_require__(34);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(73);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window === 'undefined') {
  global.window = {};
}

/* eslint-disable no-underscore-dangle */
var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxLogger2.default));

//store.dispatch({type: 'INCREMENT', payload: 1})
// const store = createStore(
//   reducer,
//   {}, // initial state
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )
//applyMiddleware(logger)
/* eslint-enable */

exports.default = store;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _counter = __webpack_require__(74);

var _counter2 = _interopRequireDefault(_counter);

var _apiReducer = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  counter: _counter2.default,
  gapi: _apiReducer.reducer
});

exports.default = reducer;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  count: 0
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'INCREMENT':
      return _extends({}, state, {
        count: state.count + 1
      });
    case 'RESET':
      return _extends({}, state, {
        count: 0
      });
    default:
      return state;
  }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "*{-webkit-box-sizing:border-box;box-sizing:border-box}body{font-family:Raleway,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}a{text-decoration:none;color:#108db8;font-weight:700}img{max-width:100%}.recharts-legend-item-text{color:grey}", ""]);

// exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var themes = [{
    main: 'orange',
    animS: '0.3s',
    animM: '0.5s',
    neutral: '#383838',
    neutralD: '#141414',
    neutralL: '#C4C4C4',
    text: '#141414',
    textInverted: '#DEDEDE',
    textSizeS: '0.8em',
    textSizeM: '1.2em',
    textSizeL: '1.8em',
    transparent: 'transparent',
    primary: '#E07831',
    primaryL: '#FFA638',
    primaryD: '#A64E20',
    accent: '#24C2C7',
    accentD: '#157275',
    accentL: '#7ACFDB',
    spaceXS: '3',
    spaceS: '5',
    spaceM: '10',
    spaceL: '20'
}, {
    main: '#FFA508',
    animS: '0.3s',
    animM: '0.5s',
    neutral: '#2E2547',
    neutralD: '#1C162B',
    neutralL: '#392E59',
    text: '#150E19',
    textInverted: '#C39BE3',
    transparent: 'transparent',
    textSizeS: '0.8em',
    textSizeM: '1.2em',
    textSizeL: '1.8em',
    primary: '#FFA508',
    primaryL: '#FFD377',
    primaryD: '#9C2E0F',
    accent: '#E3658B',
    accentD: '#9E3A50',
    accentL: '#F791B2',
    spaceXS: '3',
    spaceS: '5',
    spaceM: '10',
    spaceL: '20'
}, {
    main: '#89C939',
    animS: '0.3s',
    animM: '0.5s',
    neutral: '#061333',
    neutralD: '#030A19',
    neutralL: '#081C4A',
    text: '#303030',
    textInverted: '#D1D1D1',
    transparent: 'transparent',
    textSizeS: '0.8em',
    textSizeM: '1.2em',
    textSizeL: '1.8em',
    primary: '#89C939',
    primaryL: '#C3ED92',
    primaryD: '#3B611B',
    accent: '#F2E451',
    accentD: '#978623',
    accentL: '#F2E291',
    spaceXS: '3',
    spaceS: '5',
    spaceM: '10',
    spaceL: '20'
}];

// const pick = () => {
//     let r = Math.random();
//     console.log("pick theme, r = " + r);
//         switch(true){
//             case (r < 0.25):
//                 return 'day'
//             case (r < 0.5):
//                 return 'night'
//             case (r < 0.75):
//                 return 'other'
//             default: 
//                 return 'default'
//         }
// }
var themeNames = ['default', 'day', 'night', 'other'];
var theme = function theme() {
    var counter = 0;
    return {
        setTheme: function setTheme(theme) {
            //caller passes in the theme object, this method sets a prop theme with name on it
            counter++;
            var name = themeNames[counter % (themeNames.length - 1)];
            console.log("theme counter " + counter + " name " + name);
            theme.theme = name;
        },
        theme: 'default',
        default: themes[0],
        day: themes[1],
        night: themes[2],
        other: themes[3]
    };
};

exports.default = theme;

// export default {
//     main: 'orange',
//     animS: '0.3s',
//     animM: '0.5s',
//     neutral: '#303030',
//     neutralD: '#C4C4C4',
//     neutralL: '#C4C4C4',
//     text: '#303030',
//     textInverted: '#D1D1D1',
//     transparent: 'transparent',
//     primary: '#E07831',
//     primaryL: '#FFA638',
//     primaryD: '#A64E20',
//     accent: '#24C2C7',
//     accentD: '#157275',
//     accentL: '#7ACFDB'
// };


/*
neutral: '#CFC4A9',
F7E9A8
153F4C
black and grey: 2B284C   F7EBA8
limey green: 86BF33 L B0FC43 D 608A25
dull yellow: D4AF2C
aqua blue: 38B1C7
purple looks good for info
pink C75DB7 L EB8CE9
orange: E07831 L FFA638
*/

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGa = __webpack_require__(17);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Analytics = function (_React$Component) {
    _inherits(Analytics, _React$Component);

    function Analytics(props) {
        _classCallCheck(this, Analytics);

        var _this = _possibleConstructorReturn(this, (Analytics.__proto__ || Object.getPrototypeOf(Analytics)).call(this, props));

        console.log("analytics constructor");
        return _this;
    }

    _createClass(Analytics, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("init react-ga");
            _reactGa2.default.initialize('UA-59498836-3', { debug: true });
            // ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Analytics;
}(_react2.default.Component);

exports.default = Analytics;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(14);

var _apiReducer = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API_KEY = 'AIzaSyBc2-uDprThmL1avRG6W0BHLqVVhOoxcF0';
var CLIENT_ID = '640363567361-na8ad159n3hsoa0tugsves1o8n6crsti.apps.googleusercontent.com';
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appfolder';

var Gapi = function (_React$Component) {
    _inherits(Gapi, _React$Component);

    function Gapi(props) {
        _classCallCheck(this, Gapi);

        var _this = _possibleConstructorReturn(this, (Gapi.__proto__ || Object.getPrototypeOf(Gapi)).call(this, props));

        _this.loadApi = _this.loadApi.bind(_this);
        _this.initClient = _this.initClient.bind(_this);

        _this.updateSigninStatus = _this.updateSigninStatus.bind(_this);

        _this.state = {
            loaded: false,
            authorizeButton: true,
            list: 'no files'
            //  console.log("gapi constructor", props);
        };return _this;
    }

    _createClass(Gapi, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadApi();
        }
    }, {
        key: 'loadApi',
        value: function loadApi() {
            var _this2 = this;

            var script = document.createElement("script");
            script.src = 'https://apis.google.com/js/api.js';
            script.onload = function () {
                gapi.load('client', function () {
                    _this2.initClient();
                });
            };
            document.body.appendChild(script);
        }
    }, {
        key: 'updateSigninStatus',
        value: function updateSigninStatus(isSignedIn) {
            // console.log("update sign in status, " + isSignedIn)
            this.props.setSignedIn(isSignedIn);
        }
    }, {
        key: 'initClient',
        value: function initClient() {
            var _this3 = this;

            // console.log("init client");
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(function (r) {
                console.log("setting up gapi ");
                _this3.props.setGapi(true);
                gapi.auth2.getAuthInstance().isSignedIn.listen(_this3.updateSigninStatus);
                _this3.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Gapi;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ setSignedIn: _apiReducer.setSignedIn, setGapi: _apiReducer.setGapi }, dispatch);
};
var mapStateToProps = function mapStateToProps(state) {
    return {
        gapi: state.gapi
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Gapi);
//export default Gapi;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-move");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.1c7f34ca.js.map