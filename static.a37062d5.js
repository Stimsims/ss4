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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Text.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\n    .my-text{\n        margin: 0;\n        display: ', ';\n        position: ', ';\n    \n        margin: 0;\n        z-index: ', ';\n        height: ', ';\n        width: ', ';\n        text-align: ', ';\n        line-height: ', ';\n        display: ', ';\n        text-align: ', ';\n        color: ', ';\n        padding: ', ';\n        \n        @media only screen and (min-width: ', ') {\n            padding: ', ';\n        }\n    }\n'], ['\n\n    .my-text{\n        margin: 0;\n        display: ', ';\n        position: ', ';\n    \n        margin: 0;\n        z-index: ', ';\n        height: ', ';\n        width: ', ';\n        text-align: ', ';\n        line-height: ', ';\n        display: ', ';\n        text-align: ', ';\n        color: ', ';\n        padding: ', ';\n        \n        @media only screen and (min-width: ', ') {\n            padding: ', ';\n        }\n    }\n']);

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
        key: 'wrapText',
        value: function wrapText(text) {
            return _react2.default.createElement(
                Wrapper,
                { lineHeight: this.props.lineHeight, position: this.props.position, padding: this.props.padding,
                    margin: this.props.margin, zIndex: this.props.zIndex,
                    align: this.props.align, size: this.props.size, height: this.props.height, width: this.props.width,
                    display: this.props.display, color: this.props.color, colorKey: this.props.colorKey, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                text
            );
        }
    }, {
        key: 'render',
        value: function render() {
            switch (this.props.tag) {
                case 'h1':
                    return this.wrapText(_react2.default.createElement(
                        'h1',
                        { className: 'my-text', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        this.props.text
                    ));
                case 'h2':
                    return this.wrapText(_react2.default.createElement(
                        'h2',
                        { className: 'my-text', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        this.props.text
                    ));
                case 'h3':
                    return this.wrapText(_react2.default.createElement(
                        'h3',
                        { className: 'my-text', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        this.props.text
                    ));
                case 'h4':
                    return this.wrapText(_react2.default.createElement(
                        'h4',
                        { className: 'my-text', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        this.props.text
                    ));
                case 'h5':
                    return this.wrapText(_react2.default.createElement(
                        'h5',
                        { className: 'my-text', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        this.props.text
                    ));
                case 'h6':
                    return this.wrapText(_react2.default.createElement(
                        'h6',
                        { className: 'my-text', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        this.props.text
                    ));
                default:
                    return this.wrapText(_react2.default.createElement(
                        'p',
                        { className: 'my-text', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            }
                        },
                        this.props.text
                    ));
            }
        }
    }]);

    return Text;
}(_react2.default.Component);

exports.default = Text;


var Wrapper = _styledComponents2.default.span(_templateObject, function (props) {
    return props.display ? props.display : 'inline-block';
}, function (props) {
    return props.position ? props.position : 'static';
}, function (props) {
    return props.zIndex ? props.zIndex : '1';
}, function (props) {
    return props.height ? props.height : 'auto';
}, function (props) {
    return props.width ? props.width : 'auto';
}, function (props) {
    return props.align ? props.align : 'center';
}, function (props) {
    return props.lineHeight ? props.lineHeight : 'normal';
}, function (props) {
    return props.display ? props.display : 'inline-block';
}, function (props) {
    return props.align ? props.align : 'center';
}, function (props) {
    // return 'pink';
    if (props.color) {
        return props.color;
    } else if (props.colorKey) {
        return props.theme[props.theme.theme][props.colorKey];
    } else {
        return props.theme[props.theme.theme].text;
    }
}, function (props) {
    return props.padding ? props.padding : '5px';
}, function (props) {
    return props.theme[props.theme.theme].mediaMinWidth;
}, function (props) {
    return props.padding ? props.padding : '10px';
});
//font-size: ${props => props.size? props.size:'1em'};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validate = __webpack_require__(21);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var levels = ['log', 'warn', 'error'];
var MyLog = function MyLog(level, log, obj) {
    if (_validate2.default.contains(levels, level)) {
        if (_validate2.default.isDefined(obj)) {
            console[level](log, obj);
        } else {
            console[level](log);
        }
    }
};
exports.default = MyLog;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/TextBox.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ', ';\n    width: ', ';\n    margin: ', ';\n    padding: ', ';\n    @media only screen and (min-width: ', ') {\n        padding: ', ';\n    }\n'], ['\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ', ';\n    width: ', ';\n    margin: ', ';\n    padding: ', ';\n    @media only screen and (min-width: ', ') {\n        padding: ', ';\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textbox = function (_React$Component) {
    _inherits(Textbox, _React$Component);

    function Textbox(props) {
        _classCallCheck(this, Textbox);

        return _possibleConstructorReturn(this, (Textbox.__proto__ || Object.getPrototypeOf(Textbox)).call(this, props));
    }

    _createClass(Textbox, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Box,
                { width: this.props.width, padding: this.props.padding, margin: this.props.margin, index: this.props.index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                this.props.children
            );
        }
    }]);

    return Textbox;
}(_react2.default.Component);

exports.default = Textbox;


var Box = _styledComponents2.default.div(_templateObject, function (props) {
    var i = props.index % props.theme[props.theme.theme].bgCount;
    console.log('bg color index ' + props.index + ' count ' + props.theme[props.theme.theme].bgCount + ' i ' + i);
    switch (i) {
        case 1:
            return props.theme[props.theme.theme].bg2;
        case 2:
            return props.theme[props.theme.theme].bg3;
        case 3:
            return props.theme[props.theme.theme].bg4;
        case 4:
            return props.theme[props.theme.theme].bg5;
        case 5:
            return props.theme[props.theme.theme].bg6;
        case 0:
        default:
            return props.theme[props.theme.theme].bg1;
    }
}, function (props) {
    return props.width ? props.width : '100%';
}, function (props) {
    return props.margin ? props.margin : '10px 0px';
}, function (props) {
    return props.padding ? props.padding : '10px';
}, function (props) {
    return props.theme[props.theme.theme].mediaMinWidth;
}, function (props) {
    return props.padding ? props.padding : '10px 20px';
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/IconButton.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    \n    text-align: center;\n    vertical-align: middle;\n    z-index: 999; \n    position: absolute;\n    top: 0; \n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%; \n    height: 100%;\n    margin: auto;\n    transition: all 1s ease;\n    background-color: rgba(255,255,255,0);\n    &:hover{\n        background-color: rgba(255,255,255,0.1);\n    }\n'], ['\n    \n    text-align: center;\n    vertical-align: middle;\n    z-index: 999; \n    position: absolute;\n    top: 0; \n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%; \n    height: 100%;\n    margin: auto;\n    transition: all 1s ease;\n    background-color: rgba(255,255,255,0);\n    &:hover{\n        background-color: rgba(255,255,255,0.1);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: block;\n    position: relative;\n    height: ', ';\n'], ['\n    display: block;\n    position: relative;\n    height: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: 100%;\n    width: ', ';\n    display:table-cell;\n    position: relative;\n    border: none;\n    outline: 0;\n    padding: 0;\n    margin: 0;\n    background-color: ', '\n    p{\n        padding: 0px 10px;\n        display: inline;\n    }\n'], ['\n    height: 100%;\n    width: ', ';\n    display:table-cell;\n    position: relative;\n    border: none;\n    outline: 0;\n    padding: 0;\n    margin: 0;\n    background-color: ', '\n    p{\n        padding: 0px 10px;\n        display: inline;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    height: 100%;\n    position: relative;\n    display:table-cell;\n    background-color: ', '\n    border: none;\n    outline: 0;\n    padding: 0 5px;\n    margin: 0;\n'], ['\n    height: 100%;\n    position: relative;\n    display:table-cell;\n    background-color: ', '\n    border: none;\n    outline: 0;\n    padding: 0 5px;\n    margin: 0;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = __webpack_require__(28);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WIDTH = '44';

var IconBtn = function (_React$Component) {
    _inherits(IconBtn, _React$Component);

    function IconBtn(props) {
        _classCallCheck(this, IconBtn);

        return _possibleConstructorReturn(this, (IconBtn.__proto__ || Object.getPrototypeOf(IconBtn)).call(this, props));
        //console.log("IconButton constructor props", props)
    }

    _createClass(IconBtn, [{
        key: 'getColor',
        value: function getColor(img) {
            switch (img) {
                case 'delete':
                    return 'black';
                case 'done':
                    return 'green';
                default:
                    return 'orange';
            }
        }
    }, {
        key: 'wrapButton',
        value: function wrapButton(icon) {
            var disabled = {};
            if (this.props.disabled) disabled.disabled = true;
            if (this.props.text) {
                return _react2.default.createElement(
                    TextBtn,
                    _extends({ round: this.props.round,
                        className: this.props.classes }, disabled, { onClick: this.props.onInput, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    }),
                    _react2.default.createElement(Overlay, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    }),
                    icon,
                    _react2.default.createElement(
                        Label,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            }
                        },
                        this.props.text
                    )
                );
            } else {
                return _react2.default.createElement(
                    Btn,
                    _extends({ round: this.props.round, className: this.props.classes }, disabled, {
                        onClick: this.props.onInput, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    }),
                    _react2.default.createElement(Overlay, { width: WIDTH + 'px', round: '50%', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    }),
                    icon
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.wrapButton(_react2.default.createElement(_Icon2.default, { width: WIDTH + 'px', height: WIDTH + 'px', icon: this.props.icon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }));
        }
    }]);

    return IconBtn;
}(_react2.default.Component);

exports.default = IconBtn;

var Overlay = _styledComponents2.default.span(_templateObject);
var Label = _styledComponents2.default.p(_templateObject2, function (props) {
    return props.height ? props.height + 'px' : props.theme[props.theme.theme].menuHeight;
});
/*
border-radius: ${props => props.round?props.round:'0'}

    transition:visibility 0.3s linear,opacity 0.3s linear;
    transition: all 1s ease;
    @media only screen and (min-width: ${props => props.theme[props.theme.theme].mediaMinWidth}) {
        visibility: visible;
        opacity:1;
    }
        &:hover{
        background-color: ${props => props.theme[props.theme.theme].neutralL};
    }
    background-color: ${props=>props.theme[props.theme.theme].neutral}
*/
var TextBtn = _styledComponents2.default.button(_templateObject3, function (props) {
    return props.width ? props.width : 'auto';
}, function (props) {
    return props.bgColor ? props.bgColor : props.theme[props.theme.theme].neutral;
});
//${props => props.primary ? 'blue' : props.theme.main}
var Btn = _styledComponents2.default.button(_templateObject4, function (props) {
    return props.bgColor ? props.bgColor : props.theme[props.theme.theme].neutral;
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactGa = __webpack_require__(20);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isListening = false;
var errors = [];

var logError = function logError(message, source, lineNum, colNum, errorObj) {
    console.log("logError src", source);
    console.log("logError obj ", errorObj);
    console.log("logError msg", message);
    if (isListening) {
        //console.log(`logging error ${errors.message}`);
        console.warn("logging error: message " + message + " source: " + source.componentStack + " lineNum " + lineNum, source);
        try {
            // ReactGA.event({
            //     category: 'error',
            //     action: `${message}`,
            //     value: `message ${message} source: ${source.componentStack} lineNum ${lineNum}`
            // });
            _reactGa2.default.exception({
                description: "message " + message + " source: " + source.componentStack + " lineNum " + lineNum
            });
        } catch (e) {
            console.warn('reactGa not available, not sending error');
        }
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
        //console.warn(`onerror details: message ${message} source: ${source} lineNum ${lineNum}`, errorObj);
        logError(message, source, lineNum, colNum, errorObj);

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
        logError(e);
    });
    errors = [];
} else {
    console.log("error, window is undefined, cannot listen");
}

exports.default = logError;

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

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Table.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: table;\n    width: 100%;\n    height: 100%;\n'], ['\n    display: table;\n    width: 100%;\n    height: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: table-row;\n'], ['\n    display: table-row;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
        <Table heights={[null, null, '50%','50%']}>
          <p>RealA </p>
          <p>RealB </p>
          <p>RealC</p>
          <p>RealD</p>
        </Table>
*/

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return _react2.default.Children.map(this.props.children, function (child, i) {
                var height = _this2.props.heights[i];
                console.log("table wrapping child of height " + height, child);
                if (_this2.props.heights[i]) {
                    return _react2.default.createElement(
                        Row,
                        { style: { height: _this2.props.heights[i] }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        _react2.default.cloneElement(child)
                    );
                } else {
                    return _react2.default.createElement(
                        Row,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        _react2.default.cloneElement(child)
                    );
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Tab,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                },
                this.renderRows()
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

exports.default = Table;

Table.displayName = 'TableComponent';

Table.PropTypes = {
    heights: _propTypes2.default.array
};

var Tab = _styledComponents2.default.div(_templateObject);
var Row = _styledComponents2.default.div(_templateObject2);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(10);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(11);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(12);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/game/Game.jsx';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mygamelibs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"mygamelibs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _mygamelibs2 = _interopRequireDefault(_mygamelibs);

var _reactRedux = __webpack_require__(3);

var _DriveInterface = __webpack_require__(36);

var _ClassInterface = __webpack_require__(91);

var _Sheets = __webpack_require__(92);

var _Toast = __webpack_require__(93);

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_React$Component) {
    _inherits(Game, _React$Component);

    function Game(props) {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

        console.log("game constructor props", props);
        _this.createReport = _this.createReport.bind(_this);
        _this.submitAssignment = _this.submitAssignment.bind(_this);
        _this.state = {
            checkIn: {
                // katex: false,
                recharts: false,
                mathlibs: false
            },
            tools: {
                //ReactGA,
                info: {
                    filename: props.filename,
                    gamename: props.gamename
                },
                views: _extends({}, _mygamelibs2.default.views, {
                    styled: _styledComponents2.default
                }),
                utils: _extends({}, _mygamelibs2.default.utilities),
                simulation: _extends({}, _mygamelibs2.default.simulation),
                settings: _extends({}, _this.props.settings),
                createReport: _this.submitAssignment,
                createAssignment: _this.createAssignment,
                submitAssignment: _this.submitAssignment
            }
        };
        return _this;
    }

    _createClass(Game, [{
        key: 'submitAssignment',
        value: function submitAssignment(courseId, courseWorkId, submissionId) {
            var _this2 = this;

            var results = {};
            console.log('submitAssignment called, courseId ' + courseId + ' workId ' + courseWorkId + ' submission ' + submissionId);
            try {
                if (!courseId) {
                    (0, _ClassInterface.listCourses)().then(function (r) {
                        console.log('submitAssignment course list result', r);
                        _this2.setState({
                            courses: r.result.courses
                        });
                    });
                } else if (!courseWorkId) {
                    results.courseId = courseId;
                    (0, _ClassInterface.listCourseWork)(courseId).then(function (r) {
                        console.log('submitAssignment coursework list result', r);
                        _this2.setState({
                            courses: null,
                            courseWorks: r.result.courseWork
                        });
                    });
                } else if (!submissionId) {
                    results.courseWorkId = courseWorkId;
                    (0, _ClassInterface.listSubmissions)(courseId, courseWorkId).then(function (s) {
                        console.log('submitAssignment submissions list result', s);
                        //returns none on teacher account, available on student account
                        //has assignedGrade, courseId, courseWorkId, id, userId, state: TURNED_IN
                        var sub = s.result.studentSubmissions[0].id;
                        _this2.setState({
                            courseWorks: null
                        });
                        _this2.submitAssignment(courseId, courseWorkId, sub);
                    });
                } else if (courseId && courseWorkId && submissionId) {
                    results.courseWorkId = courseWorkId;
                    this.createReport('submit1', 'submitname', [{ tag: 'h1', text: 'Defered promise', textDecoration: 'underline', textAlign: 'center', fontStyle: 'bold' }]).then(function (r) {
                        console.log('defere promise resolved, report results', r);
                        results = _extends({}, results, r);
                        //attach to submission, turn in
                    });
                } else {
                    console.warn('submitAssignment some weird combo of params happened with submit assignment courseId: ' + courseId + ' courseWorkId: ' + courseWorkId);
                }
            } catch (e) {
                console.log('submitAssignment failed, error ', e);
            }
        }
        //chartId:1216131842

    }, {
        key: 'createReport',
        value: function createReport(game, name, elements) {
            var _this3 = this;

            //Goal: create document and get the weblink
            console.log('createReport game ' + game + ' filename ' + name, elements);
            return new Promise(function (resolve, reject) {
                // let body = structureBody(elements);
                var results = {
                    reportId: null, reportLink: null
                };
                (0, _DriveInterface.createAFile)('application/vnd.google-apps.document', 'text/html', name + "rand1", 'webViewLink, webContentLink', { gamegrade: '80' }).then(function (r) {
                    console.log('create file result', r);
                    results.reportId = r.result.id;
                    results.reportLink = r.result.webViewLink;
                    return (0, _DriveInterface.editFile)(r.result.id, (0, _DriveInterface.structureBody)(elements));
                }).then(function (ef) {
                    console.log('edit file result', ef);
                    _this3.setState({
                        toast: _react2.default.createElement(_Toast2.default, { message: 'report created', id: _this3.state.tools.utils.ids.guid(), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 121
                            }
                        })
                    });
                    resolve(results);
                }).catch(function (e) {
                    console.log('createReport error', e);
                    if (e.status === 401 && e.result.error) {
                        //login required
                        _this3.setState({
                            toast: _react2.default.createElement(_Toast2.default, { message: 'error: ' + e.result.error.message, id: _this3.state.tools.utils.ids.guid(), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 130
                                }
                            })
                        });
                    }
                    reject(e);
                });
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.importGraph();
            this.importMath();
        }
    }, {
        key: 'areToolsReady',
        value: function areToolsReady() {
            var _this4 = this;

            var ready = true;
            var keys = Object.keys(this.state.checkIn);
            keys.map(function (k) {
                if (!_this4.state.checkIn[k]) {
                    ready = false;
                }
            });
            return ready;
        }
    }, {
        key: 'importMath',
        value: function importMath() {
            var _this5 = this;

            (0, _universalImport3.default)({
                id: 'MathLibs',
                file: '/home/pagevii/Documents/code/web/github/ss4/src/components/game/Game.jsx',
                load: function load() {
                    return Promise.all([Promise.reject(function webpackMissingModule() { var e = new Error("Cannot find module \"MathLibs\""); e.code = 'MODULE_NOT_FOUND';; return e; }()), (0, _importCss3.default)('MathLibs', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'MathLibs');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module \"MathLibs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
                },
                chunkName: function chunkName() {
                    return 'MathLibs';
                }
            }).then(function (res) {
                console.log('imported MathLibs', res);
                _this5.setState({
                    checkIn: _extends({}, _this5.state.checkIn, {
                        mathlibs: true
                    }),
                    tools: _extends({}, _this5.state.tools, {
                        math: res.default
                    })
                });
            }).catch(function (e) {
                console.log('error importing MathLibs', e);
            });
        }
    }, {
        key: 'importGraph',
        value: function importGraph() {
            var _this6 = this;

            (0, _universalImport3.default)({
                id: 'recharts',
                file: '/home/pagevii/Documents/code/web/github/ss4/src/components/game/Game.jsx',
                load: function load() {
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(13);
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

                _this6.setState({
                    //katex: Katex,
                    checkIn: _extends({}, _this6.state.checkIn, {
                        recharts: true
                    }),
                    tools: _extends({}, _this6.state.tools, {
                        views: _extends({}, _this6.state.tools.views, {
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
                console.error("game tools error");
                _this6.setState({
                    error: 'failed to fetch graph'
                });
            });
        }
    }, {
        key: 'renderCourseWork',
        value: function renderCourseWork() {
            var _this7 = this;

            if (this.state.courseWorks) {
                return this.state.courseWorks.map(function (c) {
                    return _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this7.submitAssignment(c.courseId, c.id);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 215
                            }
                        },
                        'Coursework ',
                        c.title
                    );
                });
            }
            return null;
        }
    }, {
        key: 'renderCourses',
        value: function renderCourses() {
            var _this8 = this;

            //can only create coursework from teacher account, not student account
            if (this.state.courses) {
                return this.state.courses.map(function (c) {
                    return _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this8.submitAssignment(c.id);
                                // createAssignment(c.id, this.props.gamename + " assignment2")
                                // .then(r => {
                                //     console.log(`createAssignment create coursework result`, r);
                                //     this.setState({
                                //         courseWorkId: r.result.courseWorkId, courses: null
                                //     })
                                // })
                                // .catch(e => {
                                //     console.log(`createAssignment create coursework error`, e);
                                //     this.setState({
                                //         courses: null
                                //     })
                                // })
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 226
                            }
                        },
                        'Course ',
                        c.name,
                        ': ',
                        c.description
                    );
                });
            }
            return null;
        }
    }, {
        key: 'renderSubmissions',
        value: function renderSubmissions() {}
        //TODO render submissions, get submission ID, set grade and attachments

        //handles saving a report to the cloud

    }, {
        key: 'render',
        value: function render() {
            var _this9 = this;

            if (this.areToolsReady()) {
                return _react2.default.createElement(
                    'div',
                    { style: { width: '100%', height: '100%' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 253
                        }
                    },
                    _react2.default.createElement(this.props.game, { tools: this.state.tools, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 254
                        }
                    }),
                    this.state.toast
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 259
                        }
                    },
                    _react2.default.createElement(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 260
                            }
                        },
                        'loading tools...'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this9.submitAssignment();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 261
                            }
                        },
                        'submit assignment'
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 262
                            }
                        },
                        this.renderCourses(),
                        '-------------------------',
                        this.renderCourseWork()
                    ),
                    this.state.toast
                );
            }
        }
    }]);

    return Game;
}(_react2.default.Component);
//export default Game;

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        init: state.sim.initialized
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Game);
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("validate.js");

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/containers/Posts.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    padding: 3px;\n    color: cyan;\n    a{\n        color: yellow;\n    }\n'], ['\n    padding: 3px;\n    color: cyan;\n    a{\n        color: yellow;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width:90%;\n    height: 100px;\n    margin: 10px auto;\n    position: relative;\n    display: block;\n'], ['\n    width:90%;\n    height: 100px;\n    margin: 10px auto;\n    position: relative;\n    display: block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: 100%;\n    width:100%;\n    margin: auto;\n    max-width:400px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ', ';\n  \n'], ['\n    height: 100%;\n    width:100%;\n    margin: auto;\n    max-width:400px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ', ';\n  \n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Container = __webpack_require__(24);

var _Container2 = _interopRequireDefault(_Container);

var _Tags = __webpack_require__(25);

var _Tags2 = _interopRequireDefault(_Tags);

var _Slide = __webpack_require__(26);

var _Slide2 = _interopRequireDefault(_Slide);

var _PostItem = __webpack_require__(61);

var _PostItem2 = _interopRequireDefault(_PostItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_React$Component) {
    _inherits(Posts, _React$Component);

    function Posts(props) {
        _classCallCheck(this, Posts);

        //  console.log("posts constructor", props);
        var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

        _this.state = {
            render: false
        };
        return _this;
    }

    _createClass(Posts, [{
        key: 'renderPagination',
        value: function renderPagination() {
            if (this.props.totalPages > 1) {
                var pagination = [];
                if (this.props.currentPage > 1) {
                    //there is a previous page, add a link to it
                    pagination.push(_react2.default.createElement(
                        A,
                        { style: { flex: '1' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/' + this.props.base + '/' + this.props.pageToken + '/' + (this.props.currentPage - 1), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            },
                            'Previous'
                        )
                    ));
                } else {
                    pagination.push(_react2.default.createElement(A, { style: { flex: '1' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    }));
                }
                for (var i = 1; i <= this.props.totalPages; i++) {
                    if (i === this.props.currentPage) {
                        pagination.push(_react2.default.createElement(
                            A,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30
                                }
                            },
                            i
                        ));
                    } else {
                        pagination.push(_react2.default.createElement(
                            A,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 32
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/' + this.props.base + '/' + this.props.pageToken + '/' + i, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 32
                                    }
                                },
                                i
                            )
                        ));
                    }
                }
                if (this.props.currentPage < this.props.totalPages) {
                    pagination.push(_react2.default.createElement(
                        A,
                        { style: { flex: '1', textAlign: 'right' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        },
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/' + this.props.base + '/' + this.props.pageToken + '/' + (this.props.currentPage + 1), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 36
                                }
                            },
                            'Next'
                        )
                    ));
                } else {
                    pagination.push(_react2.default.createElement(A, { style: { flex: '1', textAlign: 'right' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    }));
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
                        lineNumber: 47
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('rendering POSTS props', this.props);
            return _react2.default.createElement(
                PostBox,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                },
                this.redirect(),
                _react2.default.createElement(_Tags2.default, { tags: this.props.tags, tag: this.props.tag, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                }),
                _react2.default.createElement(
                    'div',
                    { style: { width: '100%', display: 'flex', padding: '0px 10px', justifyContent: 'center' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    },
                    this.renderPagination()
                ),
                _react2.default.createElement(
                    _Slide2.default,
                    { offset: 0, duration: 1000, childDelay: 150, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    this.props.items.map(function (p) {
                        return _react2.default.createElement(
                            'span',
                            { className: 'anim-child', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            _react2.default.createElement(_PostItem2.default.component, { item: p, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                }
                            })
                        );
                        // return <p>item</p>
                    })
                )
            );
        }
    }]);

    return Posts;
}(_react2.default.Component);

Posts.displayName = 'Posts';
exports.default = (0, _reactStatic.withSiteData)((0, _reactStatic.withRouteData)(Posts));


var A = _styledComponents2.default.span(_templateObject);
var Space = _styledComponents2.default.div(_templateObject2);

var PostBox = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.theme[props.theme.theme].neutral;
});
//   overflow-y: scroll;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Container.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: ', ';\n    display: ', ';\n    width: ', ';\n    margin: ', ';\n    height: ', ';\n    z-index:', ';\n    padding: ', ';\n    background-color: ', '\n'], ['\n    position: ', ';\n    display: ', ';\n    width: ', ';\n    margin: ', ';\n    height: ', ';\n    z-index:', ';\n    padding: ', ';\n    background-color: ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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
            return _react2.default.createElement(
                Box,
                { z: this.props.z, colorKey: this.props.colorKey, height: this.props.height,
                    color: this.props.color, width: this.props.width,
                    padding: this.props.padding, flex: this.props.flex, margin: this.props.margin,
                    overflow: this.props.overflow, display: this.props.display, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                },
                this.props.children
            );
        }
    }]);

    return UiBg;
}(_react2.default.Component);

exports.default = UiBg;


var Box = _styledComponents2.default.div(_templateObject, function (props) {
    return props.position ? props.position : 'relative';
}, function (props) {
    return props.display ? props.display : 'block';
}, function (props) {
    return props.width ? props.width : 'inherit';
}, function (props) {
    return props.margin ? props.margin : '0 0 0 0';
}, function (props) {
    return props.height ? props.height : 'inherit';
}, function (props) {
    return props.z ? props.z : '1';
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/layout/Tags.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n'], ['\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n'], ['\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n']);

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
            var _this2 = this;

            if (this.props.tags) {
                return _react2.default.createElement(
                    Container,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        }
                    },
                    this.props.tags.map(function (t) {
                        //console.log(`tags rendering ${t} with target tag ${this.props.tag} does it match? ${t === this.props.tag}`);
                        if (_this2.props.tag && t === _this2.props.tag) {
                            return _react2.default.createElement(
                                Tag,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 14
                                    }
                                },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + t, className: 'active', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 14
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
                                        lineNumber: 16
                                    }
                                },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + t, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 16
                                        }
                                    },
                                    t
                                )
                            );
                        }
                    })
                );
            }
            return null;
        }
    }]);

    return Tags;
}(_react2.default.Component);

exports.default = Tags;


var Tag = _styledComponents2.default.h4(_templateObject);
var Container = _styledComponents2.default.div(_templateObject2);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/animations/Slide.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    span div {\n        opacity: 1;\n    }\n    span{\n        display: inline-block;\n        width: ', ';\n    }\n\n    span .slide-down-enter{\n        transform: translate(0px, ', ');\n        background-color:green;\n    }\n    span .slide-down-enter-active{\n        transform: translate(0px, 0px);\n        background-color: orange !important;\n    }\n\n    span .slide-down-appear{\n        transform: translate(0px, ', ');\n        opacity: 0;\n    }\n    span .slide-down-appear-active{\n        transform: translate(0px, 0px);\n        opacity: 1;\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        ', '\n    }\n\n    span .slide-down-leave{\n        transform: translate(0px, 0px);\n    }\n    span .slide-down-leave-active{\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        transform: translate(0px, ', ');\n    }\n\n'], ['\n    span div {\n        opacity: 1;\n    }\n    span{\n        display: inline-block;\n        width: ', ';\n    }\n\n    span .slide-down-enter{\n        transform: translate(0px, ', ');\n        background-color:green;\n    }\n    span .slide-down-enter-active{\n        transform: translate(0px, 0px);\n        background-color: orange !important;\n    }\n\n    span .slide-down-appear{\n        transform: translate(0px, ', ');\n        opacity: 0;\n    }\n    span .slide-down-appear-active{\n        transform: translate(0px, 0px);\n        opacity: 1;\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        ', '\n    }\n\n    span .slide-down-leave{\n        transform: translate(0px, 0px);\n    }\n    span .slide-down-leave-active{\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        transform: translate(0px, ', ');\n    }\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _MyLog = __webpack_require__(6);

var _MyLog2 = _interopRequireDefault(_MyLog);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var calcTime = function calcTime() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var childDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var childLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var time = offset + duration + childDelay * childLength;
    // MyLog('log', `Slidedown offset ${offset} duration ${duration} delay ${childDelay} 
    // child length ${childLength} time ${time}`);
    return time > 0 ? time : 1000;
};

var SlideDown = function (_React$Component) {
    _inherits(SlideDown, _React$Component);

    function SlideDown(props) {
        _classCallCheck(this, SlideDown);

        // let offset = props.offset? props.offset:0;
        // let duration = props.duration? props.duration:0;
        // let childDelay = props.childDelay? props.childDelay:0;
        //validate input ranges
        //let time = offset + duration + childDelay*this.props.children.length;
        var _this = _possibleConstructorReturn(this, (SlideDown.__proto__ || Object.getPrototypeOf(SlideDown)).call(this, props));

        var time = calcTime(props.offset, props.duration, props.childDelay, props.children.length + 1);

        _this.state = {
            time: time
        };
        return _this;
    }

    _createClass(SlideDown, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Slide,
                { up: this.props.up, width: this.props.width, offset: this.props.offset, duration: this.props.duration, childDelay: this.props.childDelay,
                    childLength: this.props.children.length + 1, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: 'slide-down',
                        transitionAppear: true,
                        transitionEnter: true,
                        transitionLeave: true,
                        transitionAppearTimeout: this.state.time,
                        transitionEnterTimeout: this.state.time,
                        transitionLeaveTimeout: this.state.time,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    },
                    this.props.children
                )
            );
        }
    }]);

    return SlideDown;
}(_react2.default.Component);

exports.default = SlideDown;

SlideDown.displayName = 'SlideDown';

SlideDown.PropTypes = {
    offset: _propTypes2.default.number,
    duration: _propTypes2.default.number,
    childDelay: _propTypes2.default.number
};

var Slide = _styledComponents2.default.div(_templateObject, function (props) {
    return props.width ? props.width : 'auto';
}, function (props) {
    return props.up ? '1000px' : '-1000px';
}, function (props) {
    return props.up ? '1000px' : '-1000px';
}, function (props) {
    return props.duration;
}, function (props) {
    var val = '';
    for (var i = 1; i <= props.childLength; i++) {
        val += '&:nth-child(' + i + '){\n                    transition-delay: ' + props.childDelay * i + 'ms;\n                }';
    }
    // console.log("nth child " + val);
    return val;
}, function (props) {
    return props.duration;
}, function (props) {
    return props.up ? '1000px' : '-1000px';
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/containers/Post.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    visibility: hidden;\n    height: 0; width: 0;\n'], ['\n    visibility: hidden;\n    height: 0; width: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding:0;\n    @media only screen and (min-width: ', ') {\n        flex-direction: row;\n    }\n'], ['\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding:0;\n    @media only screen and (min-width: ', ') {\n        flex-direction: row;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ', ';\n    @media only screen and (min-width: ', ') {\n        padding: 10px;\n    }\n\n'], ['\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ', ';\n    @media only screen and (min-width: ', ') {\n        padding: 10px;\n    }\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    margin:auto;\n    width: 100%;\n    text-align: center;\n'], ['\n    margin:auto;\n    width: 100%;\n    text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _IconButton = __webpack_require__(9);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Tags = __webpack_require__(25);

var _Tags2 = _interopRequireDefault(_Tags);

var _MyLog = __webpack_require__(6);

var _MyLog2 = _interopRequireDefault(_MyLog);

var _Video = __webpack_require__(74);

var _Video2 = _interopRequireDefault(_Video);

var _TextBox = __webpack_require__(7);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Sizer = __webpack_require__(31);

var _Sizer2 = _interopRequireDefault(_Sizer);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _reactHelmet = __webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Menu from './../components/layout/MainMenu.jsx';


var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post(props) {
        _classCallCheck(this, Post);

        //   MyLog('log', "Post constructor", props);

        var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

        _this.state = {
            counter: 0,
            url: props.siteRoot + props.history.location.pathname
        };
        return _this;
    }

    _createClass(Post, [{
        key: 'renderShare',
        value: function renderShare() {
            console.log('post page rendering gapi share post ', this.props);
            // var options = {
            //     contenturl: 'https://plus.google.com/pages/',
            //     contentdeeplinkid: '/pages',
            //     clientid: '640363567361-na8ad159n3hsoa0tugsves1o8n6crsti.apps.googleusercontent.com',
            //     cookiepolicy: 'single_host_origin',
            //     prefilltext: 'omg share this!',
            //     calltoactionlabel: 'CREATE',
            //     calltoactionurl: 'http://plus.google.com/pages/create',
            //     calltoactiondeeplinkid: '/pages/create'
            //   };
            //   // Call the render method when appropriate within your app to display
            //   // the button.
            //   gapi.interactivepost.render('sharePost', options);
            //   gapi.plus.render('gplus', {"href": "https://www.youtube.com", 
            //   "width": "200", "height": "20", "theme": "light"});
            //  gapi.plusone.go();
        }
    }, {
        key: 'renderText',
        value: function renderText() {
            return this.props.item.content.map(function (e) {
                //  return <p style={{color:'green', margin: 'auto'}}>{e}</p>
                return _react2.default.createElement(
                    _TextBox2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        }
                    },
                    _react2.default.createElement(_Text2.default, { tag: 'p', text: e, align: 'center', width: '100%', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    })
                );
            });
        }
    }, {
        key: 'renderGoogleShare',
        value: function renderGoogleShare() {
            if (this.props.gapiReady) {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        }
                    },
                    'gapi?'
                );
            }
            return _react2.default.createElement(
                'p',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                },
                'no gapi'
            );
        }
    }, {
        key: 'renderVideo',
        value: function renderVideo() {
            if (this.props.item.youtube) {
                return _react2.default.createElement(
                    'div',
                    { style: { height: '200px' }, itemprop: 'video', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    _react2.default.createElement(_Video2.default, { url: this.props.item.youtube, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    })
                );
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            //return null;
            return _react2.default.createElement(
                PostBox,
                { itemscope: true, itemtype: 'https://schema.org/Article', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                },
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        }
                    },
                    _react2.default.createElement('meta', { property: 'og:title', content: '' + this.props.item.title, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        }
                    }),
                    _react2.default.createElement('meta', { property: 'og:description', content: '' + this.props.item.description, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                        }
                    }),
                    _react2.default.createElement('meta', { property: 'og:site_name', content: '' + this.props.siteTitle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        }
                    }),
                    _react2.default.createElement('meta', { property: 'og:type', content: 'http://ogp.me/ns/article#', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        }
                    }),
                    this.props.item.youtube ? _react2.default.createElement('meta', { property: 'og:video', content: '' + this.props.item.youtube, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        }
                    }) : null,
                    this.props.item.tags ? _react2.default.createElement('meta', { property: 'og:article:tag', content: '' + this.props.item.tags.join(), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                        }
                    }) : null
                ),
                _react2.default.createElement(
                    'span',
                    { itemprop: 'name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        }
                    },
                    _react2.default.createElement(_Text2.default, { tag: 'h1', itemprop: 'name', text: this.props.item.title, align: 'center', colorKey: 'accent', width: '100%', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    })
                ),
                _react2.default.createElement(
                    'h2',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    },
                    'Laotip'
                ),
                _react2.default.createElement(_Tags2.default, { tags: this.props.item.tags, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                }),
                this.props.item.tags ? _react2.default.createElement(
                    Hidden,
                    { itemprop: 'keywords', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        }
                    },
                    this.props.item.tags.join()
                ) : null,
                _react2.default.createElement(
                    VidBox,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89
                        }
                    },
                    _react2.default.createElement(
                        _TextBox2.default,
                        { style: { flex: '1' }, margin: '5px 0px', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                            }
                        },
                        _react2.default.createElement(
                            'span',
                            { itemprop: 'description', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 91
                                }
                            },
                            _react2.default.createElement(_Text2.default, { tag: 'p', text: this.props.item.description, align: 'center', width: '100%', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 92
                                }
                            })
                        )
                    ),
                    _react2.default.createElement('div', { style: { width: '10px', height: '10px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        }
                    }),
                    _react2.default.createElement(
                        'div',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        },
                        this.renderVideo()
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { itemprop: 'articleBody', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                        }
                    },
                    this.renderText()
                ),
                _react2.default.createElement(
                    Shareable,
                    { id: 'shareable', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 108
                        }
                    },
                    _react2.default.createElement(_IconButton2.default, { icon: "gp", round: true, padding: '3px', color: 'red', onInput: function onInput() {
                            window.open('https://plus.google.com/share?url=' + _this2.state.url, "pop", "width=600, height=400, scrollbars=no");
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 109
                        }
                    }),
                    _react2.default.createElement(_IconButton2.default, { icon: "fb", round: true, padding: '3px', color: 'blue', onInput: function onInput() {
                            window.open('https://www.facebook.com/sharer/sharer.php?u=' + _this2.state.url, "pop", "width=600, height=400, scrollbars=no");
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 112
                        }
                    })
                )
            );
        }
    }]);

    return Post;
}(_react2.default.Component);

Post.displayName = 'Post';
var mapStateToProps = function mapStateToProps(state) {
    console.log('post mapStateToProps ', state);
    return {
        gapiReady: state.gapi.gapiReady
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactStatic.withSiteData)((0, _reactStatic.withRouteData)(Post)));

var Hidden = _styledComponents2.default.p(_templateObject);

var VidBox = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme[props.theme.theme].mediaMinWidth;
});

var PostBox = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.theme[props.theme.theme].neutral;
}, function (props) {
    return props.theme[props.theme.theme].mediaMinWidth;
});

var Shareable = _styledComponents2.default.div(_templateObject4);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Icon.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position:relative;\n    display: inline-block;\n    text-align: center;\n    outline: 0;\n    border: none;\n    vertical-align: middle;\n    background-image: url(', ');\n    background-repeat: no-repeat;\n    background-position: center;\n    width:', ';\n    height:', ';\n    border-radius: ', ';\n    color: yellow;\n    background-color: ', ';\n    transform: rotate(', 'deg);\n\n'], ['\n    position:relative;\n    display: inline-block;\n    text-align: center;\n    outline: 0;\n    border: none;\n    vertical-align: middle;\n    background-image: url(', ');\n    background-repeat: no-repeat;\n    background-position: center;\n    width:', ';\n    height:', ';\n    border-radius: ', ';\n    color: yellow;\n    background-color: ', ';\n    transform: rotate(', 'deg);\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _baselineDelete24px = __webpack_require__(62);

var _baselineDelete24px2 = _interopRequireDefault(_baselineDelete24px);

var _baselineDone24px = __webpack_require__(63);

var _baselineDone24px2 = _interopRequireDefault(_baselineDone24px);

var _baselineCached24px = __webpack_require__(64);

var _baselineCached24px2 = _interopRequireDefault(_baselineCached24px);

var _baselineKeyboard_arrow_right24px = __webpack_require__(29);

var _baselineKeyboard_arrow_right24px2 = _interopRequireDefault(_baselineKeyboard_arrow_right24px);

var _baselineSave24px = __webpack_require__(65);

var _baselineSave24px2 = _interopRequireDefault(_baselineSave24px);

var _baselineSettings20px = __webpack_require__(66);

var _baselineSettings20px2 = _interopRequireDefault(_baselineSettings20px);

var _baselineKeyboard_arrow_up24px = __webpack_require__(67);

var _baselineKeyboard_arrow_up24px2 = _interopRequireDefault(_baselineKeyboard_arrow_up24px);

var _baselinePlay_arrow24px = __webpack_require__(68);

var _baselinePlay_arrow24px2 = _interopRequireDefault(_baselinePlay_arrow24px);

var _baselineMore_vert24px = __webpack_require__(30);

var _baselineMore_vert24px2 = _interopRequireDefault(_baselineMore_vert24px);

var _roundArrow_back24px = __webpack_require__(69);

var _roundArrow_back24px2 = _interopRequireDefault(_roundArrow_back24px);

var _roundAutorenew24px = __webpack_require__(70);

var _roundAutorenew24px2 = _interopRequireDefault(_roundAutorenew24px);

var _roundCloud_upload24px = __webpack_require__(71);

var _roundCloud_upload24px2 = _interopRequireDefault(_roundCloud_upload24px);

var _iconmonstrFacebook = __webpack_require__(72);

var _iconmonstrFacebook2 = _interopRequireDefault(_iconmonstrFacebook);

var _iconmonstrGooglePlus = __webpack_require__(73);

var _iconmonstrGooglePlus2 = _interopRequireDefault(_iconmonstrGooglePlus);

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
        key: 'render',
        value: function render() {
            // return <Container><ImgWrapper><Img src={this.getImg(this.props.icon)}/></ImgWrapper></Container>
            return _react2.default.createElement(Container, { icon: this.props.icon, rotate: this.props.rotate, round: this.props.round,
                colorKey: this.props.colorKey, hoverKey: this.props.hover, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            });
        }
    }]);

    return Icon;
}(_react2.default.Component);

exports.default = Icon;


var Container = _styledComponents2.default.div(_templateObject, function (props) {
    switch (props.icon) {
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
        case 'more':
            return _baselineMore_vert24px2.default;
        case 'back':
            return _roundArrow_back24px2.default;
        case 'cloud':
            return _roundCloud_upload24px2.default;
        case 'sync':
            return _roundAutorenew24px2.default;
        case 'fb':
            return _iconmonstrFacebook2.default;
        case 'gp':
            return _iconmonstrGooglePlus2.default;
        default:
            return _roundAutorenew24px2.default;
    }
}, function (props) {
    return props.width ? props.width + "px" : '44px';
}, function (props) {
    return props.height ? props.height + "px" : '44px';
}, function (props) {
    if (props.round === true) {
        return '50%';
    } else if (props.round) {
        return props.round;
    } else {
        return '0';
    }
}, function (props) {
    if (props.colorKey) {
        return props.theme[props.theme.theme][props.colorKey];
    } else if (props.color) {
        return props.color;
    } else {
        return props.theme[props.theme.theme].neutral;
    }
    //return props.theme[props.theme.theme].neutral;
    //props.colorKey?props.color:props.theme[props.theme.theme].neutralL
}, function (props) {
    return props.rotate ? props.rotate : '0';
});
/*
    &:hover{
        ${props=>{
            if(props.hoverKey){
                return 'background-color: ' + props.theme[props.theme.theme][props.hoverKey] + ";"
            }
        }};
    }
*/

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik04LjU5LDE2LjU5TDEzLjE3LDEyTDguNTksNy40MUwxMCw2bDYsNmwtNiw2TDguNTksMTYuNTl6Ii8+Cgk8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0id2hpdGUiIGQ9Ik0xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sizer = function (_React$Component) {
  _inherits(Sizer, _React$Component);

  function Sizer(props) {
    _classCallCheck(this, Sizer);

    var _this = _possibleConstructorReturn(this, (Sizer.__proto__ || Object.getPrototypeOf(Sizer)).call(this, props));

    _this.state = { width: 0, height: 0, scale: 0 };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    return _this;
  }

  _createClass(Sizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        scale: window.innerWidth < 400 ? 1 : 1.5
      });
      // console.log("Sizer update dimensions width " + window.innerWidth + " scale = " + (window.innerWidth < 500? 1: 2));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.Children.map(this.props.children, function (child, i) {
        return _react2.default.cloneElement(child, { width: _this2.state.width, height: _this2.state.height, scale: _this2.state.scale });
      });
    }
  }]);

  return Sizer;
}(_react2.default.Component);

exports.default = Sizer;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/containers/Home.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    height: 100%;\n    width:100%;\n    margin: auto;\n    background-color ', ';\n  \n'], ['\n    height: 100%;\n    width:100%;\n    margin: auto;\n    background-color ', ';\n  \n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Background = __webpack_require__(76);

var _Background2 = _interopRequireDefault(_Background);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _index = __webpack_require__(77);

var _index2 = _interopRequireDefault(_index);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Trends = __webpack_require__(78);

var _Trends2 = _interopRequireDefault(_Trends);

var _MyLog = __webpack_require__(6);

var _MyLog2 = _interopRequireDefault(_MyLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        (0, _MyLog2.default)('log', 'Home constructor');
        return _this;
    }

    _createClass(Home, [{
        key: 'renderGraph',
        value: function renderGraph() {
            //console.log("home component renderGraph animationState " + this.props.animationState);
            if (this.props.animationState === 1) {
                return _react2.default.createElement(_Trends2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                });
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Box,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                },
                _react2.default.createElement(_Text2.default, { tag: 'h2', itemprop: 'name', text: 'You?', align: 'center', colorKey: 'accent', width: '100%', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }),
                _react2.default.createElement(_index2.default, { score: '0.7', title: 'Probability', desc: 'success at estimating chance branching factor.', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }),
                _react2.default.createElement(_index2.default, { score: 0.2, title: 'Charisma', desc: 'Knowing what to say and when to say it.', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                })
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

Home.displayName = 'Home';
exports.default = (0, _reactStatic.withRouteData)(Home);

var Box = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme[props.theme.theme].neutral;
});
// const Message = styled.h4`
//   font-size:1em;
//   color: rgb(255,255,255,1);
//   width:100%;
//   padding: 10px;
//   padding-bottom:0px;

// `
// const PostWrapper = styled.div`
//   position: relative;
//   width: 100%;
// `
// const PostBox = styled.div`
//   position: absolute;
//   z-index: 10;
//   top: 100px;
//   width: 50%;
//   height: 50vh;
//   background-color: rgb(255,255,255,0.5);
//   margin-left: 55px;

// `

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/containers/Games.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100px;\n    z-index: 999;\n    background-image: url(', ');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n'], ['\n    width: 100%;\n    height: 100px;\n    z-index: 999;\n    background-image: url(', ');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    flex-wrap: wrap;\n    background-color: ', ';\n    overflow-y: auto;\n    padding: ', 'px;\n'], ['\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    flex-wrap: wrap;\n    background-color: ', ';\n    overflow-y: auto;\n    padding: ', 'px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _TextBox = __webpack_require__(7);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Slide = __webpack_require__(26);

var _Slide2 = _interopRequireDefault(_Slide);

var _baselineVideogame_asset24px = __webpack_require__(34);

var _baselineVideogame_asset24px2 = _interopRequireDefault(_baselineVideogame_asset24px);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        return _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));
    }

    _createClass(Games, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                GamesBox,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                },
                _react2.default.createElement(
                    _Slide2.default,
                    { width: '100%', offset: 100, duration: 1500, childDelay: 150, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    this.props.items.map(function (p) {
                        return _react2.default.createElement(
                            _TextBox2.default,
                            { width: '100%', display: 'block', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            },
                            _react2.default.createElement(Img, {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            }),
                            _react2.default.createElement(
                                'p',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 26
                                    }
                                },
                                'game tags'
                            ),
                            _react2.default.createElement(
                                'div',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 27
                                    }
                                },
                                _react2.default.createElement(_Text2.default, { tag: 'h2', text: p.title, display: 'inline', align: 'left', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 28
                                    }
                                }),
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { style: { float: 'right' }, key: p.id, to: '/games/' + p.id, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 29
                                        }
                                    },
                                    'Play'
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Games;
}(_react2.default.Component);

Games.displayName = 'Games';
exports.default = (0, _reactStatic.withRouteData)(Games);

var Img = _styledComponents2.default.div(_templateObject, _baselineVideogame_asset24px2.default);
var GamesBox = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme[props.theme.theme].neutral;
}, function (props) {
    return props.theme[props.theme.theme].spaceM;
});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDB2MjRoMjRWMEgwem0yMyAxNmMwIDEuMS0uOSAyLTIgMkgzYy0xLjEgMC0yLS45LTItMlY4YzAtMS4xLjktMiAyLTJoMThjMS4xIDAgMiAuOSAyIDJ2OHoiLz4KICAgIDxwYXRoIGZpbGw9ImdyZXkiIGQ9Ik0yMSA2SDNjLTEuMSAwLTIgLjktMiAydjhjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yem0tMTAgN0g4djNINnYtM0gzdi0yaDNWOGgydjNoM3Yyem00LjUgMmMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6bTQtM2MtLjgzIDAtMS41LS42Ny0xLjUtMS41UzE4LjY3IDkgMTkuNSA5czEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(10);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(11);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(12);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/containers/Game.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Index = __webpack_require__(84);

var _Index2 = _interopRequireDefault(_Index);

var _MyLog = __webpack_require__(6);

var _MyLog2 = _interopRequireDefault(_MyLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        var _this = _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));

        _this.loadGame = _this.loadGame.bind(_this);
        _this.getImport = _this.getImport.bind(_this);
        _this.state = {
            game: null
        };
        return _this;
    }

    _createClass(Games, [{
        key: 'getImport',
        value: function getImport(game) {
            switch (game) {
                case 'samplegame':
                    return (0, _universalImport3.default)({
                        id: 'samplegame',
                        file: '/home/pagevii/Documents/code/web/github/ss4/src/containers/Game.jsx',
                        load: function load() {
                            return Promise.all([Promise.reject(function webpackMissingModule() { var e = new Error("Cannot find module \"samplegame\""); e.code = 'MODULE_NOT_FOUND';; return e; }()), (0, _importCss3.default)('samplegame', {
                                disableWarnings: true
                            })]).then(function (proms) {
                                return proms[0];
                            });
                        },
                        path: function path() {
                            return _path3.default.join(__dirname, 'samplegame');
                        },
                        resolve: function resolve() {
                            return /*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module \"samplegame\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
                        },
                        chunkName: function chunkName() {
                            return 'samplegame';
                        }
                    });
                case 'fairyjoules':
                    return (0, _universalImport3.default)({
                        id: 'fairyjoules',
                        file: '/home/pagevii/Documents/code/web/github/ss4/src/containers/Game.jsx',
                        load: function load() {
                            return Promise.all([Promise.reject(function webpackMissingModule() { var e = new Error("Cannot find module \"fairyjoules\""); e.code = 'MODULE_NOT_FOUND';; return e; }()), (0, _importCss3.default)('fairyjoules', {
                                disableWarnings: true
                            })]).then(function (proms) {
                                return proms[0];
                            });
                        },
                        path: function path() {
                            return _path3.default.join(__dirname, 'fairyjoules');
                        },
                        resolve: function resolve() {
                            return /*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fairyjoules\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
                        },
                        chunkName: function chunkName() {
                            return 'fairyjoules';
                        }
                    });
                case 'labgame':
                    return (0, _universalImport3.default)({
                        id: 'labgame',
                        file: '/home/pagevii/Documents/code/web/github/ss4/src/containers/Game.jsx',
                        load: function load() {
                            return Promise.all([Promise.reject(function webpackMissingModule() { var e = new Error("Cannot find module \"labgame\""); e.code = 'MODULE_NOT_FOUND';; return e; }()), (0, _importCss3.default)('labgame', {
                                disableWarnings: true
                            })]).then(function (proms) {
                                return proms[0];
                            });
                        },
                        path: function path() {
                            return _path3.default.join(__dirname, 'labgame');
                        },
                        resolve: function resolve() {
                            return /*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module \"labgame\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
                        },
                        chunkName: function chunkName() {
                            return 'labgame';
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

            var getImport = this.getImport(this.props.item.import);
            console.log('getting import props:', this.props);
            if (getImport) {
                getImport.then(function (res) {
                    console.log("import of game files complete, promise:", res);
                    (0, _MyLog2.default)('log', 'import of game files successful ' + res);
                    _this2.loadGame(res);
                }).catch(function (e) {
                    console.log("error importing game " + getImport, e);
                    (0, _MyLog2.default)('warn', 'error importing game ' + e);
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
                return _react2.default.createElement(_Index2.default, { game: this.state.game, id: this.props.item.id, title: this.props.item.title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                });
            } else if (this.state.error) {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
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
                            lineNumber: 59
                        }
                    },
                    'loading game files...'
                );
            }
            // return <div>Game</div>
        }
    }]);

    return Games;
}(_react2.default.Component);

Games.displayName = 'Game';
exports.default = (0, _reactStatic.withRouteData)(Games);
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var listFilesByName = exports.listFilesByName = function listFilesByName(names, mimeType) {
    var query = '';
    console.log("listFilesByName names " + names);
    names.map(function (v, i) {
        //a key cant be 2 props at once, if there's more than one value, must be an or
        // console.log("listFileByAppProp key " + key + " v " + v);
        //  query += `${i > 0? ' or ':''}name contains '${v}'`;
        query += (i > 0 ? ' or ' : '') + 'name = \'' + v + '\'';
        if (mimeType) {
            query += ' and mimeType=\'' + mimeType + '\'';
        }
    });
    console.log('listFilesByName', 'listFilesByName query ' + query);
    var request = {
        q: query,
        orderBy: 'modifiedTime desc,name',
        fields: "files(id, name, mimeType, modifiedTime, appProperties, webViewLink, webContentLink)"
    };
    return gapi.client.drive.files.list(request);
};
var listFilesByAppProp = exports.listFilesByAppProp = function listFilesByAppProp(key, values) {
    //an array of objs with prop, and relevant values
    /*
        'q': "mimeType contains 'application/json'",
        'fields': "files(id, name, mimeType, modifiedTime)"
        'q': "appProperties has { key='gamename' and value='witcher' }"
             return gapi.client.drive.files.list({
        'q': `appProperties has { key='${DRIVE_FILE_KEY}' and value='${this.props.gamename}' }`,
        'fields': "files(id, name, mimeType, modifiedTime)"
    })
        return gapi.client.drive.files.list({
        'q': `appProperties has { key='${DRIVE_FILE_KEY}' and value='${this.props.gamename}' }`,
        'fields': "files(id, name, mimeType, modifiedTime)"
    })
    */
    var query = '';
    console.log("listFileByAppProp values " + values);
    values.map(function (v, i) {
        //a key cant be 2 props at once, if there's more than one value, must be an or
        console.log("listFileByAppProp key " + key + " v " + v);
        query += (i > 0 ? ' or ' : '') + 'appProperties has { key=\'' + key + '\' and value=\'' + v + '\' }';
    });
    console.log('AppPropeties', 'listFilesByAppProp query ' + query);
    var request = {
        'q': query,
        'fields': "files(id, name, mimeType, modifiedTime, appProperties, webViewLink, webContentLink)"
    };
    return gapi.client.drive.files.list(request);
};

var getFile = exports.getFile = function getFile(id) {
    console.log('getFile drive interface method ' + id);
    return gapi.client.drive.files.get({
        fileId: id,
        alt: 'media',
        fields: "id, name, mimeType, modifiedTime, webViewLink, webContentLink"
    });
};

var exportFile = exports.exportFile = function exportFile(id, mimeType) {
    // mimeType: 'text/html'
    return gapi.client.drive.files.export({
        fileId: id,
        mimeType: mimeType
    });
};

//[{key: DRIVE_FILE_KEY, value: filename}, {key: DRIVE_FILE_PROP_ID, value: fileId}]
var editFile = exports.editFile = function editFile(fileId, body) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return gapi.client.request({
        path: '/upload/drive/v3/files/' + fileId,
        method: 'PATCH',
        params: {
            uploadType: 'media',
            appProperties: props,
            published: true
        },
        appProperties: props,
        published: true,
        body: body
    });
};
var createAFile = exports.createAFile = function createAFile(docType, mediaType, name) {
    var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var appProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    // var fileMetadata = {
    //     name: 'omg',
    //     mimeType: 'application/vnd.google-apps.spreadsheet'
    //   };
    var fields = 'id, name' + (params ? ', ' + params : '');
    var appProperties = _extends({}, appProps, {
        illuId: 'illu'
    });
    console.log('createAFile params ' + fields);
    var media = {
        name: name,
        mimeType: mediaType
        // body: body
    };
    return gapi.client.drive.files.create({
        // resource: fileMetadata,
        //invalid fields: content
        media: media,
        fields: fields,
        name: name,
        mimeType: docType,
        contentType: mediaType,
        appProperties: appProperties
        // body: 'hello, world, omg'
    });
};
// export const createDocument = (game, name, elements) =>{
//     console.log(`createReport game ${game} filename ${name}`, elements);
//     let body = structureBody(elements);
//     createAFile('application/vnd.google-apps.document', 'text/html', name, null, )
//     .then(r => {
//         console.log(`create file result`, r);
//         //let file = r.result.id;
//         return editFile(r.result.id, body);
//     })
//     .then(ef => {
//         console.log(`edit file result`, ef);
//         return null;
//     })
//     .catch( e => {
//         console.log(`create file error`, e);
//         if(e.status === 401 && e.result.error){
//             //login required
//             return e.result.error.message;
//             // this.setState({
//             //     toast: <Toast message={`error: ${e.result.error.message}`} id={this.state.tools.utils.ids.guid()} />
//             // })
//         }
//     })
// }
var getAppData = exports.getAppData = function getAppData() {
    console.log("getting app data from drive");
    console.log("drive", gapi.client.drive);
    var request = gapi.client.drive.files.list({
        spaces: 'appDataFolder',
        fields: 'nextPageToken, files(id, name)',
        pageSize: 100
    }).then(function (res) {
        console.log("app data result", res);
    }).catch(function (err) {
        console.log("app data error", err);
    });
};

var structureBody = exports.structureBody = function structureBody(elements) {
    // let body = structureBody([
    //     {tag: 'h1', text: 'Hypnotic Clock', textDecoration: 'underline', textAlign: 'center', fontStyle: 'bold'},
    //     {tag: 'p', text: ' '},
    //     {tag: 'p', text: 'Set different text decorations for...... never include an angle bracket!'}
    // ]);
    var body = '<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head>\n    <body style="background-color:#ffffff;padding:72pt 72pt 72pt 72pt;max-width:468pt">';
    elements.map(function (e) {
        console.log('doc structure body element', elements);
        var fontSize = '12';
        var color = e.color ? e.color : '#2E2E2E';
        var fontWeight = '400';
        var textDecoration = e.textDecoration ? e.textDecoration : 'none';
        var tag = e.tag ? e.tag : 'p';
        var textAlign = e.textAlign ? e.textAlign : 'left';
        var fontStyle = e.fontStyle ? e.fontStyle : 'normal';
        switch (e.tag) {
            case 'h1':
                fontSize = '48';
                fontWeight = '800';
            case 'h2':
                fontSize = '24';
                fontWeight = '600';
            case 'h3':
            case 'h4':
            case 'h5':
                fontSize = '16';
        }
        body += '\n        <' + tag + ' style="padding:0;margin:0;color:#000000;font-size:' + fontSize + 'pt;font-family:&quot;Roboto&quot;;line-height:1.149999976158142;text-align:' + textAlign + '">\n        <span style="color:' + color + ';font-weight:' + fontWeight + ';text-decoration:' + textDecoration + ';vertical-align:baseline;font-size:' + fontSize + 'pt;font-family:&quot;Roboto&quot;;\n        font-style:' + fontStyle + '">' + e.text + '\n        </span>\n        </' + tag + '>\n        ';
    });
    body += '\n    </body></html>\n    ';
    console.log('doc structured body result', body);
    return body;
};

/*
export const editFile = (fileId) => {
    return gapi.client
      .request({
        path: '/upload/drive/v3/files/' + '1ZedvnfNTjfF9_kF-sp0h42ZpBXY3jjYryS-LfxEKSKc',
        method: 'PATCH',
        params: {
          uploadType: 'media'
        },
        body: 'mr Hanky after save!'
      })
  }


  export const createAFile = () => {
    var fileMetadata = {
        name: 'omg',
        mimeType: 'application/vnd.google-apps.spreadsheet'
      };
      var media = {
        name: 'omg',
        mimeType: 'text/plain',
        body: 'hello, world, omg b rrrrrrrrrrr'
      };
      gapi.client.drive.files.create({
        // resource: fileMetadata,
        //invalid fields: content
        media: media,
        fields: 'id, name',
        name: 'omg',
        mimeType: 'application/vnd.google-apps.document',
        contentType: 'text/plain',
       // body: 'hello, world, omg'
      })
      .then(r => {
        console.log(`create file result`, r);
      })
      .catch( e => {
          console.log(`create file error`, e);
      })
}




    createReport(name, body){
        //body is an array of objects - headings, text, charts
        console.log(`website game createReport name ${name} body`, body);
        //make a new file with name, get id
        //edit file id with body
        createAFile('application/vnd.google-apps.spreadsheet', 'text/csv', name + "2", `,rose,tulip
        sweet,13,35
        savory,8,33
        umami,32,6
        salty,22,12`)
        .then(r => {
            console.log(`create file result`, r);
            let id = r.result.id;
            //editFile = (fileId, body, props = {}) => {
            return editFile(id, `,rose,tulip
            sweet,13,35
            savory,8,33
            umami,32,6
            salty,22,12`);
        })
        .then(ef => {
            console.log(`create file edit file result`, ef);
        })
        .catch( e => {
            console.log(`create file error`, e);
        })
    }






     listFilesByName(name, 'application/vnd.google-apps.document')
        .then(r => {
            console.log(`create file result`, r);
            let file = r.result.files[0];
            return editFile(file.id, `<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head><body style="background-color:#ffffff;padding:72pt 72pt 72pt 72pt;max-width:468pt">
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:center"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:24pt;font-family:&quot;Arial&quot;;font-style:normal">OMG</span></p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:left">
            <span style="color:#741b47;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:&quot;Arial&quot;;
                font-style:normal">Daily moisturizer! hello fucking world!!!!
                </span>
                </p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:left">
            <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 212.70px; height: 189.50px;">
            <img alt="" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSuUTAvrUTbTHejH1WTs8-NMUPELUobECTcMAZg7aNHSfZrCfLfUU52Px1I0ns6CjbG_9H9P16W9EsF/pubchart?oid=953517691&format=image" style="width: 212.70px; height: 189.50px; margin-left: 0.00px; margin-top: 0.00px; 
                transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:left">
            <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 392.50px; height: 243.04px;">
            <img alt="" src="https://lh3.googleusercontent.com/dq2nGGs-k5wackvmnK_NAeR0f9qiOIzjxWvS2EU2R-ittj8yRna9q1R_3IrHKf0P2dyqfz_498Su1RPMGUAoKvjqNYEEoHVC3UEolr1PNRhkkYfFJEgu0xjfNc5RUDReyOw4A0t_" style="width: 392.50px; height: 243.04px; margin-left: 0.00px; 
                margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" 
                title="Points scored"></span></p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;height:11pt;
            text-align:left">
            <span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:&quot;Arial&quot;;
            font-style:normal">
            </span></p>
            <img alt="" src="https://docs.google.com/spreadsheets/d/1BqNlxTFnDIjgK6deSuKIVD5zWgbhgaMqU58lANMA-i8/edit?usp=sharing/pubchart?oid=1216131842&format=image" style="width: 212.70px; height: 189.50px; margin-left: 0.00px; margin-top: 0.00px; 
                transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:left">
            <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 392.50px; height: 243.04px;">
            </body></html>`);
        })
        .then(ef => {
            console.log(`edit file result`, ef);
            //return getFile(ef.result.id);
        })
        .catch( e => {
            console.log(`create file error`, e);
        })

    */

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/animations/FadeIn.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    span{\n    }\n    span div{\n    }\n\n    span .fade-in-enter{\n        opacity: 0;\n    }\n    span .fade-in-enter.fade-in-enter-active{\n        opacity: 1;\n        transition: all 1s;\n    }\n\n    span .fade-in-appear{\n        opacity: 0;\n    }\n    span .fade-in-appear.fade-in-appear-active{\n        opacity: 1;\n        transition: all 1s;\n    }\n    span .fade-in-leave{\n        opacity: 1s;\n    }\n    span .fade-in-leave-active{\n        opacity: 0;\n        transition: all 1s;\n    }\n\n'], ['\n    span{\n    }\n    span div{\n    }\n\n    span .fade-in-enter{\n        opacity: 0;\n    }\n    span .fade-in-enter.fade-in-enter-active{\n        opacity: 1;\n        transition: all 1s;\n    }\n\n    span .fade-in-appear{\n        opacity: 0;\n    }\n    span .fade-in-appear.fade-in-appear-active{\n        opacity: 1;\n        transition: all 1s;\n    }\n    span .fade-in-leave{\n        opacity: 1s;\n    }\n    span .fade-in-leave-active{\n        opacity: 0;\n        transition: all 1s;\n    }\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import './styles.css';

var Trans = function (_React$Component) {
    _inherits(Trans, _React$Component);

    function Trans(props) {
        _classCallCheck(this, Trans);

        return _possibleConstructorReturn(this, (Trans.__proto__ || Object.getPrototypeOf(Trans)).call(this, props));
    }

    _createClass(Trans, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Fade,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: 'fade-in',
                        transitionAppear: true,
                        transitionEnter: true,
                        transitionAppearTimeout: 500,
                        transitionEnterTimeout: 500,
                        transitionLeaveTimeout: 300, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    this.props.children
                )
            );
        }
    }]);

    return Trans;
}(_react2.default.Component);

exports.default = Trans;

//enter controls page transitions

var Fade = _styledComponents2.default.div(_templateObject);
/*












    span .fade-in-appear{
        opacity: 0;
    }
    span .fade-in-appear-active{
        opacity: 1;
        
    }



    span .fade-in-leave{
        opacity: 1s;
    }
    span .fade-in-leave-active{
        opacity: 0;
    }


      .fade-enter{
        opacity: 0;
        transition: all 300ms;
      }
      .fade-enter-active{
        opacity: 1;
        transition: all 300ms;
      }
      .fade-leave{
        opacity: 1;
        transition: all 300ms;
      }
      .fade-leave-active{
        opacity: 0;
        transition: all 300ms;
      }
*/

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var API_KEY = 'AIzaSyBc2-uDprThmL1avRG6W0BHLqVVhOoxcF0';
var CLIENT_ID = '640363567361-na8ad159n3hsoa0tugsves1o8n6crsti.apps.googleusercontent.com';
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest", "https://sheets.googleapis.com/$discovery/rest?version=v4", "https://classroom.googleapis.com/$discovery/rest?version=v1"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/classroom.coursework.students https://www.googleapis.com/auth/classroom.coursework.me https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appfolder https://www.googleapis.com/auth/spreadsheets';

exports.default = {
    SCOPES: SCOPES, API_KEY: API_KEY, CLIENT_ID: CLIENT_ID, DISCOVERY_DOCS: DISCOVERY_DOCS
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Dropdown/index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n    display: block;\n    z-index: 999;\n    height: 100%;\n    transition: all 1s ease;\n    background-color: ', ';\n    /* The container <div> - needed to position the dropdown content */\n\n    .dropBtn{\n        height: 100%;\n        display: table-cell;\n        outline: 0;\n        border: none;\n    }\n\n    /* Dropdown Content (Hidden by Default) */\n    .dropdown-content {\n        display: block;\n        margin: 0; padding: 0;\n        position: absolute;\n        ', '\n        ', '\n        bottom:0;\n        min-width: 100px;\n        background-color: white;\n        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n        z-index: 1;\n        transition: all 1s ease;\n        transition-delay: 0.2s;\n        transform: translateY(50%) scaleY(0);\n        background-color: ', ';\n        a{\n            color: green;\n        }\n    }\n\n    .dropdown-content a{\n        color: ', ';\n        padding: 12px 16px;\n        text-decoration: none;\n        display: inline-block;\n        &:hover{\n            background-color: red;\n        }\n        &:active, &:focus, &:selected{\n            background-color: blue;\n        }\n    }\n\n    &:focus, &:hover, .dropdown:focus, .dropdown:hover{\n        background-color: red;\n    }\n\n    /* Show the dropdown menu on hover */\n    .dropbtn:focus + .dropdown-content{\n        transform: translateY(100%) scaleY(1);\n    }\n\n'], ['\n    position: relative;\n    display: block;\n    z-index: 999;\n    height: 100%;\n    transition: all 1s ease;\n    background-color: ', ';\n    /* The container <div> - needed to position the dropdown content */\n\n    .dropBtn{\n        height: 100%;\n        display: table-cell;\n        outline: 0;\n        border: none;\n    }\n\n    /* Dropdown Content (Hidden by Default) */\n    .dropdown-content {\n        display: block;\n        margin: 0; padding: 0;\n        position: absolute;\n        ', '\n        ', '\n        bottom:0;\n        min-width: 100px;\n        background-color: white;\n        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n        z-index: 1;\n        transition: all 1s ease;\n        transition-delay: 0.2s;\n        transform: translateY(50%) scaleY(0);\n        background-color: ', ';\n        a{\n            color: green;\n        }\n    }\n\n    .dropdown-content a{\n        color: ', ';\n        padding: 12px 16px;\n        text-decoration: none;\n        display: inline-block;\n        &:hover{\n            background-color: red;\n        }\n        &:active, &:focus, &:selected{\n            background-color: blue;\n        }\n    }\n\n    &:focus, &:hover, .dropdown:focus, .dropdown:hover{\n        background-color: red;\n    }\n\n    /* Show the dropdown menu on hover */\n    .dropbtn:focus + .dropdown-content{\n        transform: translateY(100%) scaleY(1);\n    }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    height: ', ';\n    width: ', ';\n    padding: 0; margin: 0;\n    display: inline-block;\n    float: right;\n    outline: 0;\n    border: none;\n    background-image: url(', ');\n    background-repeat: no-repeat;\n    background-position: center; \n    transform: rotate(', 'deg);\n'], ['\n    height: ', ';\n    width: ', ';\n    padding: 0; margin: 0;\n    display: inline-block;\n    float: right;\n    outline: 0;\n    border: none;\n    background-image: url(', ');\n    background-repeat: no-repeat;\n    background-position: center; \n    transform: rotate(', 'deg);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

var _baselineKeyboard_arrow_right24px = __webpack_require__(29);

var _baselineKeyboard_arrow_right24px2 = _interopRequireDefault(_baselineKeyboard_arrow_right24px);

var _baselineMore_vert24px = __webpack_require__(30);

var _baselineMore_vert24px2 = _interopRequireDefault(_baselineMore_vert24px);

var _Icon = __webpack_require__(28);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drop = function (_React$PureComponent) {
    _inherits(Drop, _React$PureComponent);

    function Drop(props) {
        _classCallCheck(this, Drop);

        return _possibleConstructorReturn(this, (Drop.__proto__ || Object.getPrototypeOf(Drop)).call(this, props));
    }

    _createClass(Drop, [{
        key: 'renderLinks',
        value: function renderLinks() {
            var _this2 = this;

            if (this.props.links) {
                return this.props.links.map(function (link) {
                    //return <Link to={link.to} style={{display: 'block'}}>{link.text}</Link>
                    if (_this2.props.wrapItem) {
                        return _this2.props.wrapItem(link);
                    } else {
                        return link;
                    }
                });
            }
            return null;
        }
    }, {
        key: 'renderButton',
        value: function renderButton() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Dropdown,
                { alignLeft: this.props.alignLeft, alignRight: this.props.alignRight, 'class': 'dropdown', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                },
                _react2.default.createElement(
                    _reactStatic.Link,
                    { className: 'dropbtn', tabIndex: '1', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        }
                    },
                    this.props.text ? _react2.default.createElement(
                        'h4',
                        { style: { verticalAlign: 'middle', lineHeight: '50px', display: 'inline-block',
                                paddingLeft: '15px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            }
                        },
                        this.props.text
                    ) : null,
                    _react2.default.createElement(DropArrow, { icon: this.props.icon, rotate: this.props.rotate, round: this.props.round, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'dropdown-content', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        }
                    },
                    this.props.children
                )
            );
        }
    }]);

    return Drop;
}(_react2.default.PureComponent);

exports.default = Drop;


var Dropdown = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme[props.theme.theme].neutral;
}, function (props) {
    if (props.alignLeft) {
        return 'left: 0;';
    }
}, function (props) {
    if (props.alignRight) {
        return 'right: 0;';
    }
}, function (props) {
    return props.theme[props.theme.theme].neutral;
}, function (props) {
    return props.theme[props.theme.theme].textInverted;
});
var DropArrow = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme[props.theme.theme].menuHeight;
}, function (props) {
    return props.theme[props.theme.theme].menuHeight;
}, function (props) {
    if (props.icon === 'arrow') {
        return _baselineKeyboard_arrow_right24px2.default;
    } else {
        return _baselineMore_vert24px2.default;
    }
}, function (props) {
    return props.rotate ? props.rotate : '0';
});
/*

        background-color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].primary};
        color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].primary};
        
    &:hover .dropdown-content{
        transform: translateY(0%) scaleY(1);
    }
    
, &:hover .dropdown-content
    &:first-child:focus, &:hover  &:first-child {background-color: #3e8e41;}

                        <div class="dropdown"
                            
                            >
                            <button class="dropbtn" ref={(input)=>this.menu = input} onClick={(e)=>{console.log('parent handler')}}>Dropdown

                            </button>
                            <div class="dropdown-content" style={{width: '100%'}}>
                                <button href="#" onMouseDown={(e)=>{console.log('child handler')}}>Link 1</button>
                            </div>
                        </div>
*/

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Switch/index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n.switch-container{\n    position: relative;\n}\n\ninput[type="checkbox"].switch  {\n\tposition: absolute;\n\topacity: 0;\n}\n\ninput[type="checkbox"].switch + div {\n\tvertical-align: middle;\n\twidth: 40px;\n\theight: ', 'px;\n\tborder-radius: 999px;\n\tbackground-color: #00B0F2;\n\t-webkit-transition-duration: .4s;\n\ttransition-duration: .4s;\n\t-webkit-transition-property: background-color, box-shadow;\n\ttransition-property: background-color, box-shadow;\n\tcursor: pointer;\n}\n\ninput[type="checkbox"].switch + div span {\n\tposition: absolute;\n    font-size: 1.6rem;\n    color: white;\n    margin-top: 12px;\n}\n\ninput[type="checkbox"].switch + div span:nth-child( 1 ) {\n    margin-left: 15px;\n}\n\ninput[type="checkbox"].switch + div span:nth-child( 2 ) {\n    margin-left: 55px;\n}\n\ninput[type="checkbox"].switch:checked + div {\n\twidth: ', 'px;\n\tbackground-position: 0 0;\n\tbackground-color: #3b89ec;\n}\n\ninput[type="checkbox"].switch + div {\n\twidth: ', 'px;\n\theight: ', 'px;\n}\n\n\ninput[type="checkbox"].switch:checked + div {\n\tbackground-color: #57BB00;\n}\n\ninput[type="checkbox"].switch + div > div {\n\tfloat: left;\n\twidth: ', 'px; height: ', 'px;\n\tborder-radius: inherit;\n\tbackground: #ffffff;\n\t-webkit-transition-timing-function: cubic-bezier(1,0,0,1);\n\ttransition-timing-function: cubic-bezier(1,0,0,1);\n\t-webkit-transition-duration: 0.4s;\n\ttransition-duration: 0.4s;\n\t-webkit-transition-property: transform, background-color;\n\ttransition-property: transform, background-color;\n\tpointer-events: none;\n\tmargin-top: 1px;\n\tmargin-left: 1px;\n}\n\ninput[type="checkbox"].switch:checked + div > div {\n\t-webkit-transform: translate3d(20px, 0, 0);\n\ttransform: translate3d(20px, 0, 0);\n\tbackground-color: #ffffff;\n}\n\ninput[type="checkbox"].bigswitch.switch + div > div {\n\twidth: ', 'px;\n\theight: ', 'px;\n\tmargin-top: 1px;\n}\n\n\ninput[type="checkbox"].switch:checked + div > div {\n\t-webkit-transform: translate3d(', 'px, 0, 0);\n\ttransform: translate3d(', 'px, 0, 0);\n}\n\n\n'], ['\n.switch-container{\n    position: relative;\n}\n\ninput[type="checkbox"].switch  {\n\tposition: absolute;\n\topacity: 0;\n}\n\ninput[type="checkbox"].switch + div {\n\tvertical-align: middle;\n\twidth: 40px;\n\theight: ', 'px;\n\tborder-radius: 999px;\n\tbackground-color: #00B0F2;\n\t-webkit-transition-duration: .4s;\n\ttransition-duration: .4s;\n\t-webkit-transition-property: background-color, box-shadow;\n\ttransition-property: background-color, box-shadow;\n\tcursor: pointer;\n}\n\ninput[type="checkbox"].switch + div span {\n\tposition: absolute;\n    font-size: 1.6rem;\n    color: white;\n    margin-top: 12px;\n}\n\ninput[type="checkbox"].switch + div span:nth-child( 1 ) {\n    margin-left: 15px;\n}\n\ninput[type="checkbox"].switch + div span:nth-child( 2 ) {\n    margin-left: 55px;\n}\n\ninput[type="checkbox"].switch:checked + div {\n\twidth: ', 'px;\n\tbackground-position: 0 0;\n\tbackground-color: #3b89ec;\n}\n\ninput[type="checkbox"].switch + div {\n\twidth: ', 'px;\n\theight: ', 'px;\n}\n\n\ninput[type="checkbox"].switch:checked + div {\n\tbackground-color: #57BB00;\n}\n\ninput[type="checkbox"].switch + div > div {\n\tfloat: left;\n\twidth: ', 'px; height: ', 'px;\n\tborder-radius: inherit;\n\tbackground: #ffffff;\n\t-webkit-transition-timing-function: cubic-bezier(1,0,0,1);\n\ttransition-timing-function: cubic-bezier(1,0,0,1);\n\t-webkit-transition-duration: 0.4s;\n\ttransition-duration: 0.4s;\n\t-webkit-transition-property: transform, background-color;\n\ttransition-property: transform, background-color;\n\tpointer-events: none;\n\tmargin-top: 1px;\n\tmargin-left: 1px;\n}\n\ninput[type="checkbox"].switch:checked + div > div {\n\t-webkit-transform: translate3d(20px, 0, 0);\n\ttransform: translate3d(20px, 0, 0);\n\tbackground-color: #ffffff;\n}\n\ninput[type="checkbox"].bigswitch.switch + div > div {\n\twidth: ', 'px;\n\theight: ', 'px;\n\tmargin-top: 1px;\n}\n\n\ninput[type="checkbox"].switch:checked + div > div {\n\t-webkit-transform: translate3d(', 'px, 0, 0);\n\ttransform: translate3d(', 'px, 0, 0);\n}\n\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(102);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
	_inherits(Switch, _React$Component);

	function Switch(props) {
		_classCallCheck(this, Switch);

		var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);
		_this.state = {
			isChecked: props.isChecked
		};
		return _this;
	}

	_createClass(Switch, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.setState({ isChecked: this.props.isChecked });
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			//console.log('switch handleChange ' + e.target.value, e);
			this.props.onInput(this.props.id, !this.state.isChecked);
			this.setState({ isChecked: !this.state.isChecked });
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				View,
				{ width: '94px', height: 20, __source: {
						fileName: _jsxFileName,
						lineNumber: 29
					}
				},
				_react2.default.createElement(
					'div',
					{ className: 'switch-container', __source: {
							fileName: _jsxFileName,
							lineNumber: 30
						}
					},
					_react2.default.createElement(
						'label',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 31
							}
						},
						_react2.default.createElement('input', { checked: this.state.isChecked, onChange: this.handleChange, className: 'switch', type: 'checkbox', __source: {
								fileName: _jsxFileName,
								lineNumber: 32
							}
						}),
						_react2.default.createElement(
							'div',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 33
								}
							},
							_react2.default.createElement('div', {
								__source: {
									fileName: _jsxFileName,
									lineNumber: 36
								}
							})
						)
					)
				)
			);
		}
	}]);

	return Switch;
}(_react2.default.Component);
/* .switch-container {
	position: absolute;
	top: 50%; left: 50%;
	-webkit-transform: translate3d( -50%, -50%, 0 );
	transform: translate3d( -50%, -50%, 0 );
} */


exports.default = Switch;
var View = _styledComponents2.default.span(_templateObject, function (props) {
	return props.height * 0.5;
}, function (props) {
	return props.height + props.height + 13;
} /* the button circle height + the translation width */, function (props) {
	return props.height + props.height + 13;
}, function (props) {
	return props.height + 8;
}, function (props) {
	return props.height + 6;
}, function (props) {
	return props.height + 6;
}, function (props) {
	return props.height + 4;
}, function (props) {
	return props.height + 4;
}, function (props) {
	return props.height + 6;
}, function (props) {
	return props.height + 6;
});

// React.render( <Switch isChecked={ true } />, document.getElementById( "page" ) );

/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setSettings = setSettings;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'SET_SETTINGS':
      return _extends({}, state, _defineProperty({}, action.payload.key, action.payload.value));
    default:
      return state;
  }
};

function setSettings(key, value) {
  return {
    type: 'SET_SETTINGS',
    payload: {
      key: key, value: value
    }
  };
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/containers/About.jsx';

var _templateObject = _taggedTemplateLiteral(['\n    height: 100%;\n    width: 100%;\n    padding-bottom: 100px;\n    background-color ', ';\n    \n'], ['\n    height: 100%;\n    width: 100%;\n    padding-bottom: 100px;\n    background-color ', ';\n    \n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactStatic = __webpack_require__(2);

var _Table = __webpack_require__(17);

var _Table2 = _interopRequireDefault(_Table);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fnc = function fnc() {
  return _react2.default.createElement(
    'div',
    { style: { backgroundColor: 'green', margin: '10px', height: '100%', width: '100%' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    'hi'
  );
};

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
        Box,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        _react2.default.createElement(_Text2.default, { tag: 'h1', colorKey: 'textInverted', text: 'This is what we\'re all about.', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        _react2.default.createElement(_Text2.default, { tag: 'p', colorKey: 'textInverted', text: 'React, static sites, performance, speed. It\'s the stuff that makes us tick.', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        })
      );
    }
  }]);

  return About;
}(_react2.default.Component);

About.displayName = 'mAbout';
exports.default = (0, _reactStatic.withSiteData)(About);


var Box = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme[props.theme.theme].neutral;
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/containers/Settings.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _index = __webpack_require__(40);

var _index2 = _interopRequireDefault(_index);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _TextBox = __webpack_require__(7);

var _TextBox2 = _interopRequireDefault(_TextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_React$Component) {
    _inherits(Settings, _React$Component);

    function Settings() {
        _classCallCheck(this, Settings);

        return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
    }

    _createClass(Settings, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'hello', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'hi', style: { padding: '10px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    _react2.default.createElement(
                        _TextBox2.default,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        _react2.default.createElement(_Text2.default, { tag: 'p', text: 'Font size:', display: 'inline-block', padding: '5px 0px', colorKey: 'textInverted', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        }),
                        _react2.default.createElement(
                            'span',
                            { style: { position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                }
                            },
                            _react2.default.createElement(_index2.default, {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15
                                }
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Settings;
}(_react2.default.Component);

Settings.displayName = 'Settings';
exports.default = Settings;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/containers/Privacy.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _TextBox = __webpack_require__(7);

var _TextBox2 = _interopRequireDefault(_TextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Privacy = function (_React$Component) {
    _inherits(Privacy, _React$Component);

    function Privacy() {
        _classCallCheck(this, Privacy);

        return _possibleConstructorReturn(this, (Privacy.__proto__ || Object.getPrototypeOf(Privacy)).apply(this, arguments));
    }

    _createClass(Privacy, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'hello', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                _react2.default.createElement(
                    _TextBox2.default,
                    { id: 'privacy', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    _react2.default.createElement(_Text2.default, { tag: 'p', text: 'Privacy', display: 'block', colorKey: 'textInverted', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        }
                    }),
                    _react2.default.createElement(_Text2.default, { tag: 'p', text: 'A statement about Privacy', align: 'left', display: 'block', colorKey: 'textInverted', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    })
                )
            );
        }
    }]);

    return Privacy;
}(_react2.default.Component);

Privacy.displayName = 'Privacy';
exports.default = Privacy;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/containers/404.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _LogError = __webpack_require__(14);

var _LogError2 = _interopRequireDefault(_LogError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ReactGA from 'react-ga';
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
      console.log("lost, componentDidUpdate, gapi? " + this.props.gapi.gapiReady + " state: ", this.state + " anim: " + this.props.animationState + " url " + this.props.history.location.pathname);
      if (!this.state.errorSent && this.props.gapi.gapiReady && this.props.animationState === 1) {
        // ReactGA.event({
        //     category: 'Error',
        //     action: '404',
        //     label: `${this.props.match.url}`
        // });
        try {
          console.log("sending 404 error");

          throw new Error('404 page not found, ' + this.props.history.location.pathname);
          console.log("sent");
          this.setState({
            errorSent: true
          });
        } catch (e) {
          console.log("404 page not found catch " + this.props.history.location.pathname, e);
          (0, _LogError2.default)(e);
          // throw e;
        }
        // finally{
        //   console.log("sending 404 error finally triggered")
        //   this.setState({
        //     errorSent:true
        //   })
        // }
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
            lineNumber: 59
          }
        },
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          'That page doesn\'t exist. The error has been logged.'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          'Go to Home page'
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

Lost.displayName = '404page';
var connected = (0, _reactRedux.connect)(mapStateToProps)(Lost);
//const routed = withRouteData(Lost);
exports.default = (0, _reactStatic.withRouteData)(connected);

/***/ }),
/* 47 */
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

  console.log('api reducer action ', action);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/animations/SlideSide.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    padding: 0;\n    margin: 0;\n    span{\n        display: inline-block;\n        width:100%;\n        padding: 0; margin: 0;\n    }\n\n    span .slide-side-enter{\n        transform: translate(', ', 0px);\n       \n    }\n    span .slide-side-enter-active{\n        transform: translate(0px, 0px);\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n    }\n\n    span .slide-side-appear{\n        transform: translate(', ', 0px);\n        opacity: 0;\n    }\n    span .slide-side-appear-active{\n        transform: translate(0px, 0px);\n        opacity: 1;\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        ', '\n    }\n\n    span .slide-side-leave{\n        transform: translate(0px, 0px);\n    }\n    span .slide-side-leave-active{\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        transform: translate(', ', 0px);\n    }\n\n'], ['\n    padding: 0;\n    margin: 0;\n    span{\n        display: inline-block;\n        width:100%;\n        padding: 0; margin: 0;\n    }\n\n    span .slide-side-enter{\n        transform: translate(', ', 0px);\n       \n    }\n    span .slide-side-enter-active{\n        transform: translate(0px, 0px);\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n    }\n\n    span .slide-side-appear{\n        transform: translate(', ', 0px);\n        opacity: 0;\n    }\n    span .slide-side-appear-active{\n        transform: translate(0px, 0px);\n        opacity: 1;\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        ', '\n    }\n\n    span .slide-side-leave{\n        transform: translate(0px, 0px);\n    }\n    span .slide-side-leave-active{\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        transform: translate(', ', 0px);\n    }\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _MyLog = __webpack_require__(6);

var _MyLog2 = _interopRequireDefault(_MyLog);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var calcTime = function calcTime() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var childDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var childLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var time = offset + duration + childDelay * childLength;
    // MyLog('log', `Slidedown offset ${offset} duration ${duration} delay ${childDelay} 
    // child length ${childLength} time ${time}`);
    return time > 0 ? time : 1000;
};

var SlideDown = function (_React$Component) {
    _inherits(SlideDown, _React$Component);

    function SlideDown(props) {
        _classCallCheck(this, SlideDown);

        // let offset = props.offset? props.offset:0;
        // let duration = props.duration? props.duration:0;
        // let childDelay = props.childDelay? props.childDelay:0;
        //validate input ranges
        //let time = offset + duration + childDelay*this.props.children.length;
        var _this = _possibleConstructorReturn(this, (SlideDown.__proto__ || Object.getPrototypeOf(SlideDown)).call(this, props));

        var time = calcTime(props.offset, props.duration, props.childDelay, props.children.length + 1);

        _this.state = {
            time: time
        };
        return _this;
    }

    _createClass(SlideDown, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Slide,
                { right: this.props.right, offset: this.props.offset, duration: this.props.duration, childDelay: this.props.childDelay,
                    childLength: this.props.children.length + 1, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: 'slide-side',
                        transitionAppear: true,
                        transitionEnter: true,
                        transitionLeave: true,
                        transitionAppearTimeout: this.state.time,
                        transitionEnterTimeout: this.state.time,
                        transitionLeaveTimeout: this.state.time,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    },
                    this.props.children
                )
            );
        }
    }]);

    return SlideDown;
}(_react2.default.Component);

exports.default = SlideDown;

SlideDown.displayName = 'SlideDown';

SlideDown.PropTypes = {
    offset: _propTypes2.default.number,
    duration: _propTypes2.default.number,
    childDelay: _propTypes2.default.number
};

var Slide = _styledComponents2.default.div(_templateObject, function (props) {
    return props.right ? '1000px' : '-1000px';
}, function (props) {
    return props.duration;
}, function (props) {
    return props.right ? '1000px' : '-1000px';
}, function (props) {
    return props.duration;
}, function (props) {
    var val = '';
    for (var i = 1; i <= props.childLength; i++) {
        val += '&:nth-child(' + i + '){\n                    transition-delay: ' + props.childDelay * i + 'ms;\n                }';
    }
    //console.log("nth child " + val);
    return val;
}, function (props) {
    return props.duration;
}, function (props) {
    return props.right ? '1000px' : '-1000px';
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/index.js';
//import MyError from './Error.js';


// Your top level component

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(50);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _LogError = __webpack_require__(14);

var _LogError2 = _interopRequireDefault(_LogError);

var _ErrorBoundary = __webpack_require__(51);

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

var _MyValid = __webpack_require__(52);

var _MyValid2 = _interopRequireDefault(_MyValid);

var _App = __webpack_require__(53);

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
          lineNumber: 19
        }
      },
      _react2.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/ErrorBoundary.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LogError = __webpack_require__(14);

var _LogError2 = _interopRequireDefault(_LogError);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import MyError from './../Error.js';


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
      (0, _LogError2.default)(error, info); //if an error is thrown here, breaks app, no error boundary to catch
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
              lineNumber: 23
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _validate = __webpack_require__(21);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constraints = {
  creditCardNumber: {
    presence: true,
    format: {
      pattern: /^(34|37|4|5[1-5]).*$/,
      message: function message(value, attribute, validatorOptions, attributes, globalOptions) {
        return _validate2.default.format("^%{num} is not a valid credit card number", {
          num: value
        });
      }
    },
    length: function length(value, attributes, attributeName, options, constraints) {
      if (value) {
        // Amex
        if (/^(34|37).*$/.test(value)) return { is: 15 };
        // Visa, Mastercard
        if (/^(4|5[1-5]).*$/.test(value)) return { is: 16 };
      }
      // Unknown card, don't validate length
      return false;
    }
  },
  creditCardZip: function creditCardZip(value, attributes, attributeName, options, constraints) {
    if (!/^(34|37).*$/.test(attributes.creditCardNumber)) return null;
    return {
      presence: { message: "is required when using AMEX" },
      length: { is: 5 }
    };
  }
};

(0, _validate2.default)({ creditCardNumber: "39" }, constraints);
// => {"creditCardNumber": ["Credit card number is the wrong length (should be 16 characters)"]}

(0, _validate2.default)({ creditCardNumber: "9999999999999999" }, constraints);
// => {"creditCardNumber": ["9999999999999999 is not a valid credit card number"]}

(0, _validate2.default)({ creditCardNumber: "4242424242424242" }, constraints);
// => undefined

(0, _validate2.default)({ creditCardNumber: "340000000000000" }, constraints);
//=> {"creditCardZip": ["Credit card zip is required when using AMEX"]}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/App.js';
//

var _templateObject = _taggedTemplateLiteral(['\n      /* width */\n      ::-webkit-scrollbar {\n          width: 10px;\n      }\n\n      /* Track */\n      ::-webkit-scrollbar-track {\n          background:  ', '; \n      }\n\n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n          background:  ', '; \n          border-radius: 5px;\n      }\n\n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n          background: ', '; \n      }\n      ::-webkit-scrollbar-button{\n        background: ', '; \n        color: white;\n      }\n\n    '], ['\n      /* width */\n      ::-webkit-scrollbar {\n          width: 10px;\n      }\n\n      /* Track */\n      ::-webkit-scrollbar-track {\n          background:  ', '; \n      }\n\n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n          background:  ', '; \n          border-radius: 5px;\n      }\n\n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n          background: ', '; \n      }\n      ::-webkit-scrollbar-button{\n        background: ', '; \n        color: white;\n      }\n\n    ']),
    _templateObject2 = _taggedTemplateLiteral([' \n    width:100%;\n    padding: 0;\n    margin: 0;\n    display: table-row;\n'], [' \n    width:100%;\n    padding: 0;\n    margin: 0;\n    display: table-row;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex:1;\n    width:100%;\n    height: 100%;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    overflow-y: auto;\n'], ['\n    flex:1;\n    width:100%;\n    height: 100%;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    overflow-y: auto;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  background-color: ', ';\n'], ['\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  background-color: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _reactHotLoader = __webpack_require__(54);

var _reactStaticRoutes = __webpack_require__(55);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _redux = __webpack_require__(107);

var _redux2 = _interopRequireDefault(_redux);

__webpack_require__(109);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(110);

var _theme2 = _interopRequireDefault(_theme);

var _Analytics = __webpack_require__(111);

var _Analytics2 = _interopRequireDefault(_Analytics);

var _Gapi = __webpack_require__(116);

var _Gapi2 = _interopRequireDefault(_Gapi);

var _recompose = __webpack_require__(117);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Menu = __webpack_require__(118);

var _Menu2 = _interopRequireDefault(_Menu);

var _FadeIn = __webpack_require__(37);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var startTheme = (0, _theme2.default)();

//${props=>props.theme[props.theme.theme].accent}
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

      // When we're rendering for static HTML, be sure to NOT animate in.
      if (staticURL) {
        return (
          // This relative wrapper is necessary for accurate rehydration :)
          _react2.default.createElement(
            'div',
            { style: { position: 'absolute', height: '100%', width: '100%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            _react2.default.createElement(Comp, _extends({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            }))
          )
        );
      }

      // Use React-Move to animate the different components coming in and out
      var PreservedRouterContext = (0, _recompose.withContext)({
        router: _propTypes2.default.object
      }, function () {
        return {
          router: router
        };
      })(function (props) {
        return _react2.default.createElement('div', _extends({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }));
      });
      return _react2.default.createElement(
        PreservedRouterContext,
        {
          style: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        },
        _react2.default.createElement(
          _FadeIn2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          },
          _react2.default.createElement(Comp, _extends({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }))
        )
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  });
});

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      myTheme: startTheme,
      themeKey: startTheme.theme
    };
    _this.injectStyles();
    return _this;
  }

  _createClass(App, [{
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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _redux2.default, __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        },
        _react2.default.createElement(
          _reactStatic.Router,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            }
          },
          _react2.default.createElement(
            'div',
            { style: { position: 'relative' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              }
            },
            _react2.default.createElement(
              _styledComponents.ThemeProvider,
              { theme: this.state.myTheme, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                }
              },
              _react2.default.createElement(
                Root,
                { className: 'content',
                  onDoubleClick: function onDoubleClick() {
                    var nTheme = _this2.state.myTheme;
                    nTheme.setTheme(nTheme);
                    _this2.setState({
                      myTheme: _extends({}, nTheme),
                      themeKey: nTheme.theme
                    });
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                  }
                },
                _react2.default.createElement(_Analytics2.default, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                  }
                }),
                _react2.default.createElement(_Gapi2.default, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                  }
                }),
                _react2.default.createElement(
                  Top,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 150
                    }
                  },
                  _react2.default.createElement(_Menu2.default, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 151
                    }
                  })
                ),
                _react2.default.createElement(
                  Content,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 157
                    }
                  },
                  _react2.default.createElement(_reactStaticRoutes2.default, { component: AnimatedRoutes, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 158
                    }
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

var Top = _styledComponents2.default.div(_templateObject2);
var Content = _styledComponents2.default.div(_templateObject3);
var Root = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme[props.theme.theme].neutral;
});

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(10);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(11);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(12);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(56);

var _reactUniversalComponent = __webpack_require__(57);

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
  id: '../src/containers/Posts.jsx',
  file: '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/containers/Posts.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Posts.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/containers/Posts.jsx';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post.jsx',
  file: '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 27)), (0, _importCss3.default)('src/containers/Post.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post.jsx';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home.jsx',
  file: '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 32)), (0, _importCss3.default)('src/containers/Home.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home.jsx';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Games.jsx',
  file: '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 33)), (0, _importCss3.default)('src/containers/Games.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Games.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return 'src/containers/Games.jsx';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Game.jsx',
  file: '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 35)), (0, _importCss3.default)('src/containers/Game.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Game.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return 'src/containers/Game.jsx';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About.jsx',
  file: '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 43)), (0, _importCss3.default)('src/containers/About.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(43);
  },
  chunkName: function chunkName() {
    return 'src/containers/About.jsx';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Settings.jsx',
  file: '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 44)), (0, _importCss3.default)('src/containers/Settings.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Settings.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(44);
  },
  chunkName: function chunkName() {
    return 'src/containers/Settings.jsx';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Privacy.jsx',
  file: '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 45)), (0, _importCss3.default)('src/containers/Privacy.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Privacy.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(45);
  },
  chunkName: function chunkName() {
    return 'src/containers/Privacy.jsx';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404.jsx',
  file: '/home/pagevii/Documents/code/web/github/ss4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 46)), (0, _importCss3.default)('src/containers/404.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(46);
  },
  chunkName: function chunkName() {
    return 'src/containers/404.jsx';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 8

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
              lineNumber: 75
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
            lineNumber: 88
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
          lineNumber: 100
        }
      });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(58);

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

var _reportChunks = __webpack_require__(59);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(60);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(22);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(22);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

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
/* 60 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/layout/PostItem.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\n  margin: auto;\n  padding: 10px 10px 0px 10px;\n'], ['\n\n  margin: auto;\n  padding: 10px 10px 0px 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width:100%;\n  position: relative;\n  display: block;\n  opacity:1;\n  padding:25px 25px 10px 25px;\n  border-radius: ', ';\n  background-color:  ', ';\n  transition: all  ', ' ease-in;\n  &:hover{\n    background-color: ', ';\n  }\n  h2{\n    font-size: 1.7em;\n    display: inline;\n    color: ', ';\n    opacity:1;\n    text-transform: capitalize;\n    margin:0\n    vartical-align: bottom;\n  }\n  p{\n    font-size: 1em;\n    color: ', ';\n    opacity:1;\n    display: inline;\n    text-align: right;\n    float: right;\n    margin:0\n    vartical-align: bottom;\n  }\n'], ['\n  width:100%;\n  position: relative;\n  display: block;\n  opacity:1;\n  padding:25px 25px 10px 25px;\n  border-radius: ', ';\n  background-color:  ', ';\n  transition: all  ', ' ease-in;\n  &:hover{\n    background-color: ', ';\n  }\n  h2{\n    font-size: 1.7em;\n    display: inline;\n    color: ', ';\n    opacity:1;\n    text-transform: capitalize;\n    margin:0\n    vartical-align: bottom;\n  }\n  p{\n    font-size: 1em;\n    color: ', ';\n    opacity:1;\n    display: inline;\n    text-align: right;\n    float: right;\n    margin:0\n    vartical-align: bottom;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MyLog = __webpack_require__(6);

var _MyLog2 = _interopRequireDefault(_MyLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var key = 'item';

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    (0, _MyLog2.default)('log', 'PostItem constructor');
    return _this;
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/posts/' + this.props[key].id, key: this.props[key].id, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          _react2.default.createElement(
            Post,
            { key: this.props[key].id, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            _react2.default.createElement(
              'h2',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              this.props[key].title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              this.props[key].tags.map(function (t, i) {
                return i === 0 ? "" + t : ", " + t;
              })
            )
          )
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);
//export default Item;


exports.default = {
  key: key,
  component: Item
};

var Wrapper = _styledComponents2.default.div(_templateObject);
/*

  @media only screen and (min-width: 500px) {
    width:400px;
    max-width:400px;
    margin: 10px auto 0px auto;
  }
*/
var Post = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme[props.theme.theme].roundCorners;
}, function (props) {
  return props.theme[props.theme.theme].primary;
}, function (props) {
  return props.theme[props.theme.theme].animS;
}, function (props) {
  return props.theme[props.theme.theme].primaryL;
}, function (props) {
  return props.theme[props.theme.theme].text;
}, function (props) {
  return props.theme[props.theme.theme].textInverted;
});

// export default {
//     component,
//     key
// }

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0eiIvPgogICAgPHBhdGggIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNOSAxNi4yTDQuOCAxMmwtMS40IDEuNEw5IDE5IDIxIDdsLTEuNC0xLjRMOSAxNi4yeiIvPgo8L3N2Zz4K"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTkgOGwtNCA0aDNjMCAzLjMxLTIuNjkgNi02IDYtMS4wMSAwLTEuOTctLjI1LTIuOC0uN2wtMS40NiAxLjQ2QzguOTcgMTkuNTQgMTAuNDMgMjAgMTIgMjBjNC40MiAwIDgtMy41OCA4LThoM2wtNC00ek02IDEyYzAtMy4zMSAyLjY5LTYgNi02IDEuMDEgMCAxLjk3LjI1IDIuOC43bDEuNDYtMS40NkMxNS4wMyA0LjQ2IDEzLjU3IDQgMTIgNGMtNC40MiAwLTggMy41OC04IDhIMWw0IDQgNC00SDZ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo="

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTcgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWN2wtNC00em0tNSAxNmMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDN6bTMtMTBINVY1aDEwdjR6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjB2MjBIMFYweiIvPgogICAgPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNS45NSAxMC43OGMuMDMtLjI1LjA1LS41MS4wNS0uNzhzLS4wMi0uNTMtLjA2LS43OGwxLjY5LTEuMzJjLjE1LS4xMi4xOS0uMzQuMS0uNTFsLTEuNi0yLjc3Yy0uMS0uMTgtLjMxLS4yNC0uNDktLjE4bC0xLjk5LjhjLS40Mi0uMzItLjg2LS41OC0xLjM1LS43OEwxMiAyLjM0Yy0uMDMtLjItLjItLjM0LS40LS4zNEg4LjRjLS4yIDAtLjM2LjE0LS4zOS4zNGwtLjMgMi4xMmMtLjQ5LjItLjk0LjQ3LTEuMzUuNzhsLTEuOTktLjhjLS4xOC0uMDctLjM5IDAtLjQ5LjE4bC0xLjYgMi43N2MtLjEuMTgtLjA2LjM5LjEuNTFsMS42OSAxLjMyYy0uMDQuMjUtLjA3LjUyLS4wNy43OHMuMDIuNTMuMDYuNzhMMi4zNyAxMi4xYy0uMTUuMTItLjE5LjM0LS4xLjUxbDEuNiAyLjc3Yy4xLjE4LjMxLjI0LjQ5LjE4bDEuOTktLjhjLjQyLjMyLjg2LjU4IDEuMzUuNzhsLjMgMi4xMmMuMDQuMi4yLjM0LjQuMzRoMy4yYy4yIDAgLjM3LS4xNC4zOS0uMzRsLjMtMi4xMmMuNDktLjIuOTQtLjQ3IDEuMzUtLjc4bDEuOTkuOGMuMTguMDcuMzkgMCAuNDktLjE4bDEuNi0yLjc3Yy4xLS4xOC4wNi0uMzktLjEtLjUxbC0xLjY3LTEuMzJ6TTEwIDEzYy0xLjY1IDAtMy0xLjM1LTMtM3MxLjM1LTMgMy0zIDMgMS4zNSAzIDMtMS4zNSAzLTMgM3oiLz4KPC9zdmc+Cg=="

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik03LjQxIDE1LjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik04IDV2MTRsMTEtN3oiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IgoJIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iQm91bmRpbmdfQm94ZXMiPgoJPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAsMGgyNHYyNEgwVjB6Ii8+CjwvZz4KPGcgaWQ9IlJvdW5kZWQiPgoJPHBhdGggZD0iTTE5LDExSDcuODNsNC44OC00Ljg4YzAuMzktMC4zOSwwLjM5LTEuMDMsMC0xLjQybDAsMGMtMC4zOS0wLjM5LTEuMDItMC4zOS0xLjQxLDBsLTYuNTksNi41OQoJCWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFsNi41OSw2LjU5YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MUw3LjgzLDEzSDE5YzAuNTUsMCwxLTAuNDUsMS0xCgkJdjBDMjAsMTEuNDUsMTkuNTUsMTEsMTksMTF6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IgoJIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iSGVhZGVyX3gyRl9CRyIgZGlzcGxheT0ibm9uZSI+Cgk8cmVjdCB4PSItMzU4IiB5PSItMTM4IiBkaXNwbGF5PSJpbmxpbmUiIGZpbGw9IiNGMUYxRjIiIHdpZHRoPSI1MjAiIGhlaWdodD0iNTIwIi8+CjwvZz4KPGcgaWQ9IkJvdW5kaW5nX0JveGVzIj4KCTxnIGlkPSJ1aV94NUZfc3BlY194NUZfaGVhZGVyX2NvcHlfMyI+Cgk8L2c+Cgk8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KPC9nPgo8ZyBpZD0iUm91bmRlZCI+Cgk8ZyBpZD0idWlfeDVGX3NwZWNfeDVGX2hlYWRlcl9jb3B5XzUiPgoJPC9nPgoJPHBhdGggZD0iTTEyLDZ2MS43OWMwLDAuNDUsMC41NCwwLjY3LDAuODUsMC4zNWwyLjc5LTIuNzljMC4yLTAuMiwwLjItMC41MSwwLTAuNzFsLTIuNzktMi43OUMxMi41NCwxLjU0LDEyLDEuNzYsMTIsMi4yMVY0CgkJYy00LjQyLDAtOCwzLjU4LTgsOGMwLDEuMDQsMC4yLDIuMDQsMC41NywyLjk1YzAuMjcsMC42NywxLjEzLDAuODUsMS42NCwwLjM0bDAsMGMwLjI3LTAuMjcsMC4zOC0wLjY4LDAuMjMtMS4wNAoJCUM2LjE1LDEzLjU2LDYsMTIuNzksNiwxMkM2LDguNjksOC42OSw2LDEyLDZ6IE0xNy43OSw4LjcxTDE3Ljc5LDguNzFjLTAuMjcsMC4yNy0wLjM4LDAuNjktMC4yMywxLjA0QzE3Ljg0LDEwLjQ1LDE4LDExLjIxLDE4LDEyCgkJYzAsMy4zMS0yLjY5LDYtNiw2di0xLjc5YzAtMC40NS0wLjU0LTAuNjctMC44NS0wLjM1bC0yLjc5LDIuNzljLTAuMiwwLjItMC4yLDAuNTEsMCwwLjcxbDIuNzksMi43OQoJCWMwLjMxLDAuMzEsMC44NSwwLjA5LDAuODUtMC4zNVYyMGM0LjQyLDAsOC0zLjU4LDgtOGMwLTEuMDQtMC4yLTIuMDQtMC41Ny0yLjk1QzE5LjE2LDguMzgsMTguMyw4LjIsMTcuNzksOC43MXoiLz4KPC9nPgo8ZyBpZD0iU2hhcnAiIGRpc3BsYXk9Im5vbmUiPgoJPGcgaWQ9InVpX3g1Rl9zcGVjX3g1Rl9oZWFkZXJfY29weV80IiBkaXNwbGF5PSJpbmxpbmUiPgoJPC9nPgoJPHBhdGggZGlzcGxheT0iaW5saW5lIiBkPSJNMTIsNnYzbDQtNGwtNC00djNjLTQuNDIsMC04LDMuNTgtOCw4YzAsMS41NywwLjQ2LDMuMDMsMS4yNCw0LjI2TDYuNywxNC44QzYuMjUsMTMuOTcsNiwxMy4wMSw2LDEyCgkJQzYsOC42OSw4LjY5LDYsMTIsNnogTTE4Ljc2LDcuNzRMMTcuMyw5LjJjMC40NCwwLjg0LDAuNywxLjc5LDAuNywyLjhjMCwzLjMxLTIuNjksNi02LDZ2LTNsLTQsNGw0LDR2LTNjNC40MiwwLDgtMy41OCw4LTgKCQlDMjAsMTAuNDMsMTkuNTQsOC45NywxOC43Niw3Ljc0eiIvPgo8L2c+CjxnIGlkPSJPdXRsaW5lIiBkaXNwbGF5PSJub25lIj4KCTxnIGlkPSJ1aV94NUZfc3BlY194NUZfaGVhZGVyIiBkaXNwbGF5PSJpbmxpbmUiPgoJPC9nPgoJPHBhdGggZGlzcGxheT0iaW5saW5lIiBkPSJNMTIsNnYzbDQtNGwtNC00djNjLTQuNDIsMC04LDMuNTgtOCw4YzAsMS41NywwLjQ2LDMuMDMsMS4yNCw0LjI2TDYuNywxNC44QzYuMjUsMTMuOTcsNiwxMy4wMSw2LDEyCgkJQzYsOC42OSw4LjY5LDYsMTIsNnogTTE4Ljc2LDcuNzRMMTcuMyw5LjJjMC40NCwwLjg0LDAuNywxLjc5LDAuNywyLjhjMCwzLjMxLTIuNjksNi02LDZ2LTNsLTQsNGw0LDR2LTNjNC40MiwwLDgtMy41OCw4LTgKCQlDMjAsMTAuNDMsMTkuNTQsOC45NywxOC43Niw3Ljc0eiIvPgo8L2c+CjxnIGlkPSJEdW90b25lIiBkaXNwbGF5PSJub25lIj4KCTxnIGlkPSJ1aV94NUZfc3BlY194NUZfaGVhZGVyX2NvcHlfMiIgZGlzcGxheT0iaW5saW5lIj4KCTwvZz4KCTxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTEyLDZ2M2w0LTRsLTQtNHYzYy00LjQyLDAtOCwzLjU4LTgsOGMwLDEuNTcsMC40NiwzLjAzLDEuMjQsNC4yNkw2LjcsMTQuOEM2LjI1LDEzLjk3LDYsMTMuMDEsNiwxMgoJCUM2LDguNjksOC42OSw2LDEyLDZ6IE0xOC43Niw3Ljc0TDE3LjMsOS4yYzAuNDQsMC44NCwwLjcsMS43OSwwLjcsMi44YzAsMy4zMS0yLjY5LDYtNiw2di0zbC00LDRsNCw0di0zYzQuNDIsMCw4LTMuNTgsOC04CgkJQzIwLDEwLjQzLDE5LjU0LDguOTcsMTguNzYsNy43NHoiLz4KPC9nPgo8ZyBpZD0iRmlsbCIgZGlzcGxheT0ibm9uZSI+Cgk8ZyBpZD0idWlfeDVGX3NwZWNfeDVGX2hlYWRlcl9jb3B5IiBkaXNwbGF5PSJpbmxpbmUiPgoJPC9nPgoJPHBhdGggZGlzcGxheT0iaW5saW5lIiBkPSJNMTIsNnYzbDQtNGwtNC00djNjLTQuNDIsMC04LDMuNTgtOCw4YzAsMS41NywwLjQ2LDMuMDMsMS4yNCw0LjI2TDYuNywxNC44QzYuMjUsMTMuOTcsNiwxMy4wMSw2LDEyCgkJQzYsOC42OSw4LjY5LDYsMTIsNnogTTE4Ljc2LDcuNzRMMTcuMyw5LjJjMC40NCwwLjg0LDAuNywxLjc5LDAuNywyLjhjMCwzLjMxLTIuNjksNi02LDZ2LTNsLTQsNGw0LDR2LTNjNC40MiwwLDgtMy41OCw4LTgKCQlDMjAsMTAuNDMsMTkuNTQsOC45NywxOC43Niw3Ljc0eiIvPgo8L2c+CjxnIGlkPSJueXRfeDVGX2V4cG9ydGVyX3g1Rl9pbmZvIiBkaXNwbGF5PSJub25lIj4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IgoJIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iQm91bmRpbmdfQm94ZXMiPgoJPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAsMGgyNHYyNEgwVjB6Ii8+CjwvZz4KPGcgaWQ9IlJvdW5kZWQiPgoJPHBhdGggZD0iTTE5LjM1LDEwLjA0QzE4LjY3LDYuNTksMTUuNjQsNCwxMiw0QzkuMTEsNCw2LjYsNS42NCw1LjM1LDguMDRDMi4zNCw4LjM2LDAsMTAuOTEsMCwxNGMwLDMuMzEsMi42OSw2LDYsNmgxMwoJCWMyLjc2LDAsNS0yLjI0LDUtNUMyNCwxMi4zNiwyMS45NSwxMC4yMiwxOS4zNSwxMC4wNHogTTE0LDEzdjRoLTR2LTRIN2w0LjY1LTQuNjVjMC4yLTAuMiwwLjUxLTAuMiwwLjcxLDBMMTcsMTNIMTR6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJ3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM0NTYxOWRmZiIgZD0iTTEyIDBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTItNS4zNzMtMTItMTItMTJ6bTMgOGgtMS4zNWMtLjUzOCAwLS42NS4yMjEtLjY1Ljc3OHYxLjIyMmgybC0uMjA5IDJoLTEuNzkxdjdoLTN2LTdoLTJ2LTJoMnYtMi4zMDhjMC0xLjc2OS45MzEtMi42OTIgMy4wMjktMi42OTJoMS45NzF2M3oiLz48L3N2Zz4="

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJ3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNkZDRlNDJmZiIgZD0iTTEyIDBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTItNS4zNzMtMTItMTItMTJ6bS0yLjkxNyAxNi4wODNjLTIuMjU4IDAtNC4wODMtMS44MjUtNC4wODMtNC4wODNzMS44MjUtNC4wODMgNC4wODMtNC4wODNjMS4xMDMgMCAyLjAyNC40MDIgMi43MzUgMS4wNjdsLTEuMTA3IDEuMDY4Yy0uMzA0LS4yOTItLjgzNC0uNjMtMS42MjgtLjYzLTEuMzk0IDAtMi41MzEgMS4xNTUtMi41MzEgMi41NzkgMCAxLjQyNCAxLjEzOCAyLjU3OSAyLjUzMSAyLjU3OSAxLjYxNiAwIDIuMjI0LTEuMTYyIDIuMzE2LTEuNzYyaC0yLjMxNnYtMS40aDMuODU1Yy4wMzYuMjA0LjA2NC40MDguMDY0LjY3Ny4wMDEgMi4zMzItMS41NjMgMy45ODgtMy45MTkgMy45ODh6bTkuOTE3LTMuNWgtMS43NXYxLjc1aC0xLjE2N3YtMS43NWgtMS43NXYtMS4xNjZoMS43NXYtMS43NWgxLjE2N3YxLjc1aDEuNzV2MS4xNjZ6Ii8+PC9zdmc+"

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Video.jsx';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ', '; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ', ') {\n        flex-direction: row;\n    }\n'], ['\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ', '; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ', ') {\n        flex-direction: row;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: auto;\n    height: ', ';\n    width: ', ';\n'], ['\n    margin: auto;\n    height: ', ';\n    width: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    margin: auto;\n    width: 100%;\n    flex: 1;\n'], ['\n    margin: auto;\n    width: 100%;\n    flex: 1;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n'], ['\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n'], ['\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Youtube = function (_React$PureComponent) {
    _inherits(Youtube, _React$PureComponent);

    function Youtube(props) {
        _classCallCheck(this, Youtube);

        var _this = _possibleConstructorReturn(this, (Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call(this, props));

        var scale = props.scale ? props.scale : 1;
        // this.state = {
        //     scale,
        //     position: props.position? props.position:'right',
        //     width: props.vWidth?props.vWidth + 'px': 336*scale + 'px',
        //     height: props.vHeight?props.vHeight + 'px':189*scale+'px'
        // }
        _this.state = _extends({}, _this.getHeights(scale));
        console.log("Youtube view", props);
        console.log('youtube view props dimen: ' + props.vWidth + ', ' + props.vHeight + ' scale ' + scale + ' \n                    state ' + _this.state.width + ', ' + _this.state.height);
        return _this;
    }

    _createClass(Youtube, [{
        key: 'getHeights',
        value: function getHeights(scale) {
            return {
                scale: scale,
                position: this.props.position ? this.props.position : 'right',
                width: this.props.vWidth ? this.props.vWidth * scale + 'px' : 336 * scale + 'px',
                height: this.props.vHeight ? this.props.vHeight * scale + 'px' : 189 * scale + 'px'
            };
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.scale !== this.props.scale) {
                console.log("componentDidupdate updating scale to " + this.props.scale);
                this.setState(this.getHeights(this.props.scale));
            }
        }
    }, {
        key: 'renderText',
        value: function renderText(text, draw) {
            if (text && draw) {
                return _react2.default.createElement(
                    Item,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        }
                    },
                    _react2.default.createElement(_Text2.default, { tag: 'p', text: text, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                        }
                    })
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            //the position refers to the video position
            return _react2.default.createElement(
                Flex,
                { width: this.props.width, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                },
                this.renderText(this.props.text, this.state.position === 'left'),
                _react2.default.createElement(
                    Centered,
                    { height: this.state.height, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    },
                    _react2.default.createElement('iframe', { width: '' + this.state.width,
                        height: '' + this.state.height,
                        src: '' + this.props.url,
                        frameborder: '0', allow: 'autoplay; encrypted-media',
                        encryptedMedia: true,
                        allowfullscreen: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    })
                ),
                this.renderText(this.props.text, this.state.position === 'right')
            );
        }
    }]);

    return Youtube;
}(_react2.default.PureComponent);

exports.default = Youtube;

Youtube.propTypes = {
    url: _propTypes2.default.string

    /*
                    <iframe width="336" height="189" 
                    src={`https://www.youtube.com/embed/3QvlxoX1GjI?start=730&end=735`} 
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    */
};var Flex = _styledComponents2.default.div(_templateObject, function (props) {
    return props.width;
}, function (props) {
    return props.theme[props.theme.theme].mediaMinWidth;
});
var Centered = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.height;
}, function (props) {
    return props.width;
});
var Item = _styledComponents2.default.div(_templateObject3);
var Wrapper = _styledComponents2.default.div(_templateObject4);
var Video = _styledComponents2.default.div(_templateObject5);

// const Video = styled.div`
//     position:absolute; 
//     transform:translate(-50%,-50%); 
//     top:50%; left:50%; 
//     margin: auto; 
//     background-color: green;
// `

/*
            <Wrapper height={this.props.height} width={this.props.width}>
                <Video >
                    <span style={{position: 'relative', height: '100%', display:'inline-block', transform: 'translateX(-50%)',backgroundColor: 'yellow', margin: 'auto'}}>
                        <iframe width={`${this.props.vWidth?this.props.vWidth:'336px'}`} 
                        height={`${this.props.vHeight?this.props.vHeight:'189px'}`}
                        src={`${this.props.url}`} 
                        frameborder="0" allow="autoplay; encrypted-media" 
                        allowfullscreen></iframe>
                    </span>
                </Video>
            </Wrapper>
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: blue;
    
`
const Video = styled.div`
    position:absolute; 
    height: 100%;
    top:0; right:0; bottom:0;
    left: 50%;
    background-color: green;
`







const Video = styled.div`
    position:absolute; 
    top:0; left: 0; right:0; bottom:0;
    left: 50%;
    background-color: green;
`


    width: ${props=>props.width?props.width:'100%'};
    height: ${props=>props.height?props.height:'300px'};
*/

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Background.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: ', ';\n    display: ', ';\n    top: 0;\n    left:0;\n    bottom:0;\n    right:0;\n    margin: 0;\n    width: ', ';\n    height: ', ';\n    padding: ', ';\n    z-index: ', ';\n    background-color: ', '\n'], ['\n    position: ', ';\n    display: ', ';\n    top: 0;\n    left:0;\n    bottom:0;\n    right:0;\n    margin: 0;\n    width: ', ';\n    height: ', ';\n    padding: ', ';\n    z-index: ', ';\n    background-color: ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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
            return _react2.default.createElement(
                Bg,
                { z: this.props.z, colorKey: this.props.colorKey, color: this.props.color, fixed: this.props.fixed,
                    padding: this.props.padding, overflow: this.props.overflow, display: this.props.display,
                    top: this.props.top, bottom: this.props.bottom, left: this.props.left, right: this.props.right, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                this.props.children
            );
        }
    }]);

    return UiBg;
}(_react2.default.Component);

exports.default = UiBg;


var Bg = _styledComponents2.default.div(_templateObject, function (props) {
    return props.fixed ? 'fixed' : 'absolute';
}, function (props) {
    return props.display ? props.display : 'block';
}, function (props) {
    return props.width ? props.width : 'inherit';
}, function (props) {
    return props.height ? props.height : 'inherit';
}, function (props) {
    return props.padding ? props.padding : '0 0 0 0';
}, function (props) {
    return props.z ? props.z : -999;
}, function (props) {
    if (props.color) {
        return props.color;
    } else if (props.colorKey) {
        return props.theme[props.theme.theme][props.colorKey];
    } else {
        return props.theme[props.theme.theme].neutral;
    }
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Score/index.jsx';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 0%;\n    height: 100%;\n    background-color: pink;\n    animation-name: fill', ';\n    animation-duration: ', 's;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n    @keyframes fill', '{\n        from {width: 0%;}\n        to {width: ', '%;}\n    }\n'], ['\n    width: 0%;\n    height: 100%;\n    background-color: pink;\n    animation-name: fill', ';\n    animation-duration: ', 's;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n    @keyframes fill', '{\n        from {width: 0%;}\n        to {width: ', '%;}\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 100%;\n    background-color: grey;\n    height: 20px;\n    padding: 2px 0px;\n'], ['\n    width: 100%;\n    background-color: grey;\n    height: 20px;\n    padding: 2px 0px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_React$PureComponent) {
    _inherits(Score, _React$PureComponent);

    function Score() {
        _classCallCheck(this, Score);

        return _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).apply(this, arguments));
    }

    _createClass(Score, [{
        key: 'getScore',
        value: function getScore(score) {

            try {
                var res = 0;
                if (typeof score === 'string') {
                    //convert to number, check if is number
                    var str = parseFloat(score);
                    res = str * 100;
                } else if (typeof score === 'number') {
                    res = score * 100;
                } else {
                    throw new Error('score must be either a string or a number ' + score);
                }
                console.log('score getScore ' + score + ' typeof ' + (typeof score === 'undefined' ? 'undefined' : _typeof(score)) + ' res ' + res);
                return res;
            } catch (e) {
                console.warn('error converting score', e);
                return 0;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { width: '100%', padding: '10px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                _react2.default.createElement(_Text2.default, { tag: 'h3', text: this.props.title, align: 'left', colorKey: 'accent', padding: '0', width: '100%', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }),
                this.props.desc ? _react2.default.createElement(_Text2.default, { tag: 'p', text: this.props.desc, align: 'left', padding: '5px 0px', colorKey: 'accent', width: '100%', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                }) : null,
                _react2.default.createElement(
                    ScoreBar,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        }
                    },
                    _react2.default.createElement(Bar, { score: this.getScore(this.props.score), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        }
                    })
                )
            );
        }
    }]);

    return Score;
}(_react2.default.PureComponent);

exports.default = Score;


Score.propTypes = {
    title: _propTypes2.default.string,
    score: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
var Bar = _styledComponents2.default.div(_templateObject, function (props) {
    return props.score ? props.score : '';
}, function (props) {
    return props.score ? props.score * 0.05 : '1';
}, function (props) {
    return props.score ? props.score : '';
}, function (props) {
    console.log('score bar props', props);
    return props.score ? props.score : 0;
});
var ScoreBar = _styledComponents2.default.div(_templateObject2);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(10);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(11);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(12);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/graphs/Trends.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _trends = __webpack_require__(79);

var _trends2 = _interopRequireDefault(_trends);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Loading = __webpack_require__(80);

var _Loading2 = _interopRequireDefault(_Loading);

var _Container = __webpack_require__(24);

var _Container2 = _interopRequireDefault(_Container);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _Table = __webpack_require__(17);

var _Table2 = _interopRequireDefault(_Table);

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
                file: '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/graphs/Trends.jsx',
                load: function load() {
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(13);
                },
                chunkName: function chunkName() {
                    return 'recharts';
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

            return _react2.default.createElement(
                _Table2.default,
                { heights: [null, '100%'], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                },
                _react2.default.createElement(
                    'p',
                    { style: { textAlign: 'center' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        }
                    },
                    'Google Search Trends for Subjects'
                ),
                _react2.default.createElement(
                    'div',
                    { style: { height: '97%', width: '95%', margin: 'auto' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    },
                    _react2.default.createElement(
                        ResponsiveContainer,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
                            }
                        },
                        _react2.default.createElement(
                            LineChart,
                            { data: _trends2.default,
                                padding: { top: 0, right: 0, left: 0, bottom: 0 },
                                margin: { top: 20, right: 20, left: -20, bottom: 50 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 48
                                }
                            },
                            _react2.default.createElement(XAxis, { dataKey: 'Month', label: { value: "Year-Month", offset: 25, angle: 0, position: 'bottom' },
                                tickFormatter: function tickFormatter(t) {
                                    return t.slice(2);
                                }, angle: -45, textAnchor: 'end', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51
                                }
                            }),
                            _react2.default.createElement(YAxis, {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 53
                                }
                            }),
                            _react2.default.createElement(CartesianGrid, { strokeDasharray: '1 6', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 54
                                }
                            }),
                            _react2.default.createElement(Tooltip, {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 55
                                }
                            }),
                            _react2.default.createElement(Legend, { verticalAlign: 'top', height: 36, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 56
                                }
                            }),
                            _react2.default.createElement(Line, { type: 'monotone', dot: false, dataKey: 'math: (Worldwide)', fill: '#8884d8', stroke: '#8884d8', strokeWidth: 3, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 57
                                }
                            }),
                            _react2.default.createElement(Line, { type: 'monotone', dot: false, dataKey: 'physics: (Worldwide)', stroke: '#82ca9d', strokeWidth: 3, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 58
                                }
                            })
                        )
                    )
                )
            );
        }
        //runs a loading animation until data and graph are imported

    }, {
        key: 'render',
        value: function render() {
            //return this.renderGraph();
            if (this.state.recharts) {
                return this.renderGraph();
            } else if (this.state.error) {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
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
                            lineNumber: 73
                        }
                    },
                    _react2.default.createElement(_Loading2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
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
/* 79 */
/***/ (function(module, exports) {

module.exports = [{"Month":"2004-01","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":100},{"Month":"2004-02","math: (Worldwide)":37,"physics: (Worldwide)":22,"chemistry: (Worldwide)":22,"biology: (Worldwide)":18,"science: (Worldwide)":98},{"Month":"2004-03","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":20,"biology: (Worldwide)":17,"science: (Worldwide)":90},{"Month":"2004-04","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":20,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-05","math: (Worldwide)":33,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":15,"science: (Worldwide)":77},{"Month":"2004-06","math: (Worldwide)":27,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":68},{"Month":"2004-07","math: (Worldwide)":21,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2004-08","math: (Worldwide)":24,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":68},{"Month":"2004-09","math: (Worldwide)":37,"physics: (Worldwide)":19,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":87},{"Month":"2004-10","math: (Worldwide)":37,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":17,"science: (Worldwide)":86},{"Month":"2004-11","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-12","math: (Worldwide)":30,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":13,"science: (Worldwide)":72},{"Month":"2005-01","math: (Worldwide)":34,"physics: (Worldwide)":18,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":87},{"Month":"2005-02","math: (Worldwide)":35,"physics: (Worldwide)":18,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":88},{"Month":"2005-03","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":79},{"Month":"2005-04","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-05","math: (Worldwide)":32,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":71},{"Month":"2005-06","math: (Worldwide)":28,"physics: (Worldwide)":15,"chemistry: (Worldwide)":16,"biology: (Worldwide)":12,"science: (Worldwide)":63},{"Month":"2005-07","math: (Worldwide)":20,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2005-08","math: (Worldwide)":24,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2005-09","math: (Worldwide)":36,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":74},{"Month":"2005-10","math: (Worldwide)":35,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":76},{"Month":"2005-11","math: (Worldwide)":33,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-12","math: (Worldwide)":27,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":63},{"Month":"2006-01","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":76},{"Month":"2006-02","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":74},{"Month":"2006-03","math: (Worldwide)":32,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":70},{"Month":"2006-04","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":64},{"Month":"2006-05","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":61},{"Month":"2006-06","math: (Worldwide)":26,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2006-07","math: (Worldwide)":18,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2006-08","math: (Worldwide)":23,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":55},{"Month":"2006-09","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":69},{"Month":"2006-10","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":65},{"Month":"2006-11","math: (Worldwide)":30,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":61},{"Month":"2006-12","math: (Worldwide)":26,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2007-01","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":65},{"Month":"2007-02","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":62},{"Month":"2007-03","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":62},{"Month":"2007-04","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2007-05","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2007-06","math: (Worldwide)":24,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2007-07","math: (Worldwide)":18,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":44},{"Month":"2007-08","math: (Worldwide)":21,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2007-09","math: (Worldwide)":31,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":57},{"Month":"2007-10","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":60},{"Month":"2007-11","math: (Worldwide)":29,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2007-12","math: (Worldwide)":25,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-01","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-02","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-03","math: (Worldwide)":27,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2008-04","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2008-05","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-06","math: (Worldwide)":24,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2008-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2008-08","math: (Worldwide)":21,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2008-09","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2008-10","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":51},{"Month":"2008-11","math: (Worldwide)":29,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2008-12","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2009-01","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":53},{"Month":"2009-02","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2009-03","math: (Worldwide)":32,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2009-04","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2009-05","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2009-06","math: (Worldwide)":26,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":44},{"Month":"2009-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":38},{"Month":"2009-08","math: (Worldwide)":22,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2009-09","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2009-10","math: (Worldwide)":34,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-11","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-12","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2010-01","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2010-02","math: (Worldwide)":35,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-03","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-04","math: (Worldwide)":35,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2010-05","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2010-06","math: (Worldwide)":30,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2010-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":39},{"Month":"2010-08","math: (Worldwide)":23,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2010-09","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2010-10","math: (Worldwide)":38,"physics: (Worldwide)":13,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-11","math: (Worldwide)":39,"physics: (Worldwide)":13,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-12","math: (Worldwide)":34,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2011-01","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2011-02","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":47},{"Month":"2011-03","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2011-04","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2011-05","math: (Worldwide)":42,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2011-06","math: (Worldwide)":33,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2011-07","math: (Worldwide)":20,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":36},{"Month":"2011-08","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2011-09","math: (Worldwide)":40,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":48},{"Month":"2011-10","math: (Worldwide)":43,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2011-11","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2011-12","math: (Worldwide)":41,"physics: (Worldwide)":10,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2012-01","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2012-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2012-03","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-05","math: (Worldwide)":59,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-06","math: (Worldwide)":40,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2012-07","math: (Worldwide)":26,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2012-08","math: (Worldwide)":31,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2012-09","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":47},{"Month":"2012-10","math: (Worldwide)":50,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2012-12","math: (Worldwide)":48,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":35},{"Month":"2013-01","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-02","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-03","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2013-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2013-05","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":40},{"Month":"2013-06","math: (Worldwide)":37,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2013-07","math: (Worldwide)":23,"physics: (Worldwide)":7,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2013-08","math: (Worldwide)":28,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2013-09","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2013-10","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2013-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2013-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":36},{"Month":"2014-01","math: (Worldwide)":45,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2014-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":42},{"Month":"2014-04","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-05","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-06","math: (Worldwide)":37,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2014-07","math: (Worldwide)":22,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2014-08","math: (Worldwide)":29,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2014-09","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2014-10","math: (Worldwide)":56,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2014-11","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-12","math: (Worldwide)":47,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2015-01","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-02","math: (Worldwide)":53,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2015-04","math: (Worldwide)":51,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2015-05","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2015-06","math: (Worldwide)":36,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2015-07","math: (Worldwide)":21,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2015-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2015-09","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2015-10","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-11","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-01","math: (Worldwide)":43,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2016-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2016-03","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-04","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-05","math: (Worldwide)":49,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-06","math: (Worldwide)":31,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2016-07","math: (Worldwide)":18,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":33},{"Month":"2016-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-09","math: (Worldwide)":55,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2016-10","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-11","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":44},{"Month":"2016-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2017-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2017-02","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2017-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2017-04","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2017-05","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-06","math: (Worldwide)":30,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2017-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2017-08","math: (Worldwide)":32,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2017-09","math: (Worldwide)":53,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":45},{"Month":"2017-10","math: (Worldwide)":55,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-11","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2017-12","math: (Worldwide)":46,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2018-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-02","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2018-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-04","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":42},{"Month":"2018-05","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2018-06","math: (Worldwide)":33,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38}]

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/animations/Loading.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n    background-color: transparent;\n    height: 168px;\n    width: 168px;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n  /*this to solve "the content will not be cut when the window is smaller than the content": */\n        max-width:100%;\n        max-height:100%;\n        overflow:auto;\n    div{\n        animation-name: example;\n        animation-duration: 1.5s;\n        animation-iteration-count: infinite;\n        animation-direction: alternate;\n        animation-timing-function: ease-in-out;\n        border-radius: 50%; \n        border: 2px solid #7A17A880;\n        background-color: transparent;\n    }\n    ', '\n    @keyframes example {\n        from {\n            transform: scale(1, 1);\n            border: 2px solid #7A17A880;\n        }\n        to {\n            transform: scale(2, 2);\n            border: 2px solid #7A17A8FF;\n        }\n    }\n'], ['\n    position: relative;\n    background-color: transparent;\n    height: 168px;\n    width: 168px;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n  /*this to solve "the content will not be cut when the window is smaller than the content": */\n        max-width:100%;\n        max-height:100%;\n        overflow:auto;\n    div{\n        animation-name: example;\n        animation-duration: 1.5s;\n        animation-iteration-count: infinite;\n        animation-direction: alternate;\n        animation-timing-function: ease-in-out;\n        border-radius: 50%; \n        border: 2px solid #7A17A880;\n        background-color: transparent;\n    }\n    ', '\n    @keyframes example {\n        from {\n            transform: scale(1, 1);\n            border: 2px solid #7A17A880;\n        }\n        to {\n            transform: scale(2, 2);\n            border: 2px solid #7A17A8FF;\n        }\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Animate = __webpack_require__(81);

var _Animate2 = _interopRequireDefault(_Animate);

var _NodeGroup = __webpack_require__(82);

var _NodeGroup2 = _interopRequireDefault(_NodeGroup);

var _d3Ease = __webpack_require__(83);

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
        // console.log(`creating circle i:${i} cos: ${Math.cos(i)*radius} sin: ${Math.sin(i)*radius}`)
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
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-move/Animate");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("react-move/NodeGroup");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/game/Index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  top:0;right:0;left:0;bottom:0;\n'], ['\n  position: fixed;\n  top:0;right:0;left:0;bottom:0;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Load = __webpack_require__(85);

var _Load2 = _interopRequireDefault(_Load);

var _Store = __webpack_require__(97);

var _Store2 = _interopRequireDefault(_Store);

var _Game = __webpack_require__(19);

var _Game2 = _interopRequireDefault(_Game);

var _GameMenu = __webpack_require__(98);

var _GameMenu2 = _interopRequireDefault(_GameMenu);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Table = __webpack_require__(17);

var _Table2 = _interopRequireDefault(_Table);

var _Sizer = __webpack_require__(31);

var _Sizer2 = _interopRequireDefault(_Sizer);

var _Settings = __webpack_require__(101);

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window === 'undefined') {
  global.window = {};
}
//display a view that allows to start 

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    console.log("Index Game constructor, props:", props);
    _this.registerMenuItem = _this.registerMenuItem.bind(_this);
    _this.setSettings = _this.setSettings.bind(_this);
    _this.menuItems = [];
    _this.menuKeys = new Map();
    _this.state = {
      game: _this.props.game.getComponent(),
      menuItems: _this.menuItems,
      menuKeys: _this.menuKeys,
      menuRenderId: 1,
      settings: {
        volume: 1.4
      }
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log("index mounted reducers: ", this.props.game);
      this.setState({
        //game: this.props.game.getComponent(),
        reducers: this.props.game.getReducers()
      });
    }
  }, {
    key: 'registerMenuItem',
    value: function registerMenuItem(items) {
      var _this2 = this;

      items.map(function (item) {
        if (!_this2.menuKeys.has(item.key)) {
          //delete old one, update object, keep key indexes the same
          _this2.menuItems = [].concat(_toConsumableArray(_this2.menuItems), [item.key]);
          // console.log('registerMenuItem adding new item with key ' + item.key, this.menuItems);
        }
        _this2.menuKeys.set(item.key, item);
        // console.log('registerMenuItem map', this.menuKeys);
      });
      this.setState({
        menuRenderId: this.state.menuRenderId + 1,
        menuItems: this.menuItems,
        menuKeys: this.menuKeys
      });
      // console.log("registerMenuItem count ", this.menuItems);
    }
  }, {
    key: 'buildMenuItems',
    value: function buildMenuItems() {
      var _this3 = this;

      return this.state.menuItems.map(function (m) {
        return _this3.state.menuKeys.get(m);
      });
      //menuItems={this.state.menuItems}
    }
  }, {
    key: 'setSettings',
    value: function setSettings(settings) {
      this.setState({
        settings: settings
      });
    }
  }, {
    key: 'renderPersistStore',
    value: function renderPersistStore() {
      return _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '100%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        },
        _react2.default.createElement(_Settings2.default, { game: this.state.game, registerMenuItem: this.registerMenuItem, setSettings: this.setSettings, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }),
        _react2.default.createElement(
          _Table2.default,
          { heights: ['36px', null], __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          },
          _react2.default.createElement(
            _Sizer2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            _react2.default.createElement(_GameMenu2.default, { title: this.props.title, menuItems: this.buildMenuItems(), renderId: this.state.menuRenderId, __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            })
          ),
          _react2.default.createElement(_Load2.default, { settings: this.state.settings, game: this.state.game, id: this.props.id, reducers: this.state.reducers, registerMenuItem: this.registerMenuItem, __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          })
        )
      );
    }
  }, {
    key: 'renderStore',
    value: function renderStore() {
      return _react2.default.createElement(
        Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        },
        _react2.default.createElement(
          _Settings2.default,
          { game: this.state.game, __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          },
          _react2.default.createElement(_GameMenu2.default, { title: this.props.title, __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          }),
          _react2.default.createElement(
            _Store2.default,
            { reducers: this.state.reducers, __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            },
            _react2.default.createElement(_Game2.default, { game: this.state.game, __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              }
            })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('website game index rendering id ' + this.props.id, this.state);
      if (this.state.game) {
        return _react2.default.createElement(
          Container,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          },
          this.renderPersistStore()
        );
      } else {
        return _react2.default.createElement(
          Container,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            }
          },
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            'loading game...'
          )
        );
      }
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;


var Container = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/game/Load.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PersistStore = __webpack_require__(86);

var _PersistStore2 = _interopRequireDefault(_PersistStore);

var _Game = __webpack_require__(19);

var _Game2 = _interopRequireDefault(_Game);

var _fileUtils = __webpack_require__(94);

var _reactStatic = __webpack_require__(2);

var _localStorageUtils = __webpack_require__(95);

var _reactRedux = __webpack_require__(3);

var _DriveInterface = __webpack_require__(36);

var _IconButton = __webpack_require__(9);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _LoadGameView = __webpack_require__(96);

var _LoadGameView2 = _interopRequireDefault(_LoadGameView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window === 'undefined') {
    global.window = {};
}

function getStoreName(game, id) {
    console.log('getStoreName id ' + id, game);
    return game + '-' + id;
}

function getMetaName(meta, game, id) {
    return meta + ':' + game + '-' + id;
}
var DATE = 'date',
    DESC = 'desc',
    DRIVE_FILE_KEY = 'game',
    DRIVE_FILE_PROP_ID = 'gameId',
    SAVE_NAMES = ['rose', 'violet', 'lilly'];

var Load = function (_React$Component) {
    _inherits(Load, _React$Component);

    function Load(props) {
        _classCallCheck(this, Load);

        var _this = _possibleConstructorReturn(this, (Load.__proto__ || Object.getPrototypeOf(Load)).call(this, props));

        console.log("website game Load constructor props", props);
        _this.onNewGame = _this.onNewGame.bind(_this);
        _this.onLoadGame = _this.onLoadGame.bind(_this);
        _this.syncSaves = _this.syncSaves.bind(_this);

        _this.state = {
            id: null,
            local: [],
            synced: false,
            syncing: false,
            log: []
        };
        return _this;
    }

    _createClass(Load, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.registerMenuButtons(this.state.fileId);
            this.setState({
                local: this.getLocalSaves()
            });
        }
    }, {
        key: 'getLocalSaves',
        value: function getLocalSaves() {
            var _this2 = this;

            var regexp = this.props.id + '-(' + SAVE_NAMES.join('|') + ')$';
            console.log('getLocalSaves regex ' + regexp);
            var ids = (0, _localStorageUtils.getSavedGameIds)((0, _localStorageUtils.getLocalhostIterator)(), new RegExp(regexp), function (file) {
                var parts = file.split("-");
                return parts[1];
            });
            console.log("Load getSavedGameIds ", ids);
            var files = (0, _localStorageUtils.buildFiles)(ids, [{
                key: 'date',
                getName: function getName(id) {
                    getMetaName(DATE, _this2.props.id, id);
                }
            }, {
                key: 'desc',
                getName: function getName(id) {
                    getMetaName(DESC, _this2.props.id, id);
                }
            }], { hello: 'world' });
            console.log("Load getLocalFiles ", files);
            return files;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.fileId) {
                this.saveLocalMeta();
                this.saveGame(this.props.fileId);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // console.log("should sync saves? is gapi sighned in? " + this.props.gapi.isSignedIn + " is it syncing? " + this.state.syncing);
            if (this.props.gapi.isSignedIn && !this.state.synced && !this.state.syncing) {
                //this.syncSaves();
                console.log('listFilesByName calling');
                //createAFile();
                //    editFile('1860xM3H6oJa2juElgM2ccpdNKaG4812x',
                //     `<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type">
                //     </head><body style="background-color:#ffffff;padding:72pt 72pt 72pt 72pt;max-width:468pt">
                //     <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;
                //     line-height:1.15;orphans:2;widows:2;text-align:center">
                //     <span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:24pt;
                //     font-family:&quot;Arial&quot;;font-style:normal">OMG
                //     </span></p>
                //     <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;
                //     widows:2;text-align:left"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;
                //     font-size:17pt;font-family:&quot;Arial&quot;;font-style:normal">Daily moisturizer! Commentab;e</span></p></body></html>`)
                //    .then(r =>{
                //         console.log(`edit file result`, r);
                //    })
                //    .catch(e => {
                //        console.error(`edit file error `, e);
                //    });
                //exportFile();
            }
            if (prevState.fileId !== this.state.fileId) {
                this.registerMenuButtons(this.state.fileId);
            }
        }
        //listFilesByName = (names, mimeType)   exportFile = (id, mimeType) 

    }, {
        key: 'exportFile',
        value: function exportFile() {
            console.log('exporting charisma beginning');
            (0, _DriveInterface.listFilesByName)(['Charisma'], 'application/vnd.google-apps.document').then(function (r) {
                console.log('exporting charisma result', r);
                var id = r.result.files[0].id;
                return (0, _DriveInterface.exportFile)(id, 'text/html');
            }).then(function (f) {
                console.log('exporting charisma export result', f);
            }).catch(function (e) {
                console.log('exporting charisma error', e);
            });
        }

        //"<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head><body style="background-color:#ffffff;padding:72pt 72pt 72pt 72pt;max-width:468pt"><p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;widows:2;text-align:center"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:24pt;font-family:&quot;Arial&quot;;font-style:normal">OMG</span></p><p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;widows:2;text-align:left"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:&quot;Arial&quot;;font-style:normal">Daily moisturizer!</span></p></body></html>"


    }, {
        key: 'saveGame',
        value: function saveGame(fileId, driveId /* if null, must retrieve*/) {
            var _this3 = this;

            var attemptCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            //props.id->labgame, fileId->this.state.fileId->rose
            if (driveId) {
                this.uploadFile(driveId, fileId);
            } else {
                var filename = getStoreName(this.props.id, fileId);
                console.log("saving game to drive name " + filename);
                (0, _DriveInterface.listFilesByAppProp)(DRIVE_FILE_KEY, [filename]).then(function (response) {
                    var list = response.result.files;
                    console.log("saving game, drive files found: " + list.length);
                    if (list) {
                        var id = list[0] ? list[0].id : null;
                        //if file exists, patch it g4:35d7c7bc-8d4d-0686-55f7-29e91a41175e:date
                        // let updatedfile = localStorage.getItem('persist:g4-35d7c7bc-8d4d-0686-55f7-29e91a41175e')
                        _this3.uploadFile(id, fileId);
                        _this3.syncFinished();
                    }
                }).catch(function (e) {
                    //make file if doesn't exist?
                    _this3.state.log.push('failed to upload to cloud, status ' + e.status);
                    console.error('failed to upload save game', e);
                    if (e.status === 404) {
                        //make a new file, call this function again with its id
                        (0, _DriveInterface.createAFile)('application/vnd.google-apps.document', 'text/html', filename, 'body text').then(function (r) {
                            console.log('create file result', r);
                            var id = r.result.id;
                        }).catch(function (e) {
                            console.log('create file error', e);
                        });
                    } else {
                        _this3.syncFinished();
                    }
                });
            }
        }
    }, {
        key: 'uploadFile',
        value: function uploadFile(driveId, fileId) {
            var localStorage = window.localStorage;
            var filename = getStoreName(this.props.id, fileId);
            var updatedfile = localStorage.getItem('persist:' + filename);
            console.log("creating json uploadFile filename " + filename, updatedfile);
            //TODO break into json file maker, and http request builder
            this.state.log.push('building file request for cloud upload');
            try {
                (0, _DriveInterface.editFile)(driveId, updatedfile, { DRIVE_FILE_KEY: filename, DRIVE_FILE_PROP_ID: fileId }).then(function (r) {
                    console.log('upload file response ' + driveId, r);
                }).catch(function (e) {
                    console.log('upload file error ' + driveId, e);
                });
                // createFileWithJSONContent(driveId, filename, 
                // [{key: DRIVE_FILE_KEY, value: filename}, {key: DRIVE_FILE_PROP_ID, value: fileId}],
                // updatedfile);
                //    console.log("uploadFile successfully");
            } catch (e) {
                console.error("uploadFile failed", e);
            }
        }
        //{"sim":"{\"view\":\"intro\",\"step\":0,\"measurement\":{},\"simulation\":{},\"flags\":{\"measureRadiation\":null},\"data\":{},\"log\":[],\"math\":{}}","ecs":"{\"named\":{},\"hasLocation\":{},\"hasPassagesTo\":{},\"math\":{}}","questions":"{}","_persist":"{\"version\":-1,\"rehydrated\":true}"}

    }, {
        key: 'syncSaves',
        value: function syncSaves(id, overwriteLocal /* optional */) {
            var _this4 = this;

            console.log('syncSaves for id ' + id + " gapi " + this.props.gapi, this);
            if (this.props.gapi) {
                if (id) {
                    this.state.log.push('beginning sync with google drive to fetch save files');
                    this.setState({
                        syncing: true
                    });
                    //let localStorage = window.localStorage;
                    var names = Array.isArray(id) ? id.map(function (n) {
                        return getStoreName(_this4.props.id, n);
                    }) : [id];
                    console.log('syncsaves names', names);
                    (0, _DriveInterface.listFilesByAppProp)(DRIVE_FILE_KEY, names).then(function (response) {
                        console.log("load syncSaves response", response);
                        var list = response.result.files;

                        //console.log("loadinggame, drive files found: " + list.length);
                        _this4.state.log.push('recieved ' + list.length + ' files');
                        if (list) {
                            if (list.length === 0) {
                                //first time uploading to cloud
                                _this4.state.log.push('0 files found on drive, uploading new game ' + _this4.state.fileId + ' to cloud for first time');
                                _this4.saveGame(_this4.state.fileId);
                            }
                            list.map(function (item) {
                                console.log('syncSave: comparing file ', item);
                                //extract driveId, and gameId
                                var driveId = item.id;
                                var gameId = item.appProperties[DRIVE_FILE_PROP_ID];
                                var gameName = item.appProperties[DRIVE_FILE_KEY];
                                _this4.state.log.push('syncSave comparing file driveId: ' + driveId + ' gameId: ' + gameId + ' gameName: ' + gameName);
                                // console.log(`syncSave comparing file driveId: ${driveId} gameId: ${gameId} gameName: ${gameName}`);
                                //let file = this.downloadSave(item);

                                if (overwriteLocal && _this4.isLocalLater(item)) {
                                    //  console.log("drive file modified later than local file, downloading");
                                    _this4.state.log.push('most recent file is ahead of local file, overwriting local file');
                                    (0, _DriveInterface.getFile)(item.id).then(function (res) {
                                        //  console.log('syncSave test downloaded file  for ' +gameName, res);
                                        _this4.overwriteLocalSave(gameId, gameName, res.result);
                                    }).catch(function (e) {
                                        //console.log('syncSaves getFile catch block error', e);
                                        _this4.state.log.push('failed to retrieve file ' + driveId);
                                        throw new Error('error during getFile call to google drive', e);
                                    });
                                } else {
                                    // console.log("local file is later than drive file, uploading to cloud");
                                    _this4.state.log.push('most recent file is behind local file, overwriting cloud file');
                                    _this4.saveGame(gameId, driveId);
                                }
                            });
                        } else {
                            throw new Error('syncing failed, no load games found');
                        }
                    }).catch(function (err) {
                        console.log("syncSaves catch block called, throwing error", err);
                        _this4.syncFinished();
                    });
                } else {
                    console.warn('will not sync when fileId is undefined');
                }
            } else {
                console.warn('not signed in, cannot upload');
            }
        }
    }, {
        key: 'syncFinished',
        value: function syncFinished() {
            // this.state.log.push(`syncing finished`);
            this.setState({
                syncing: false,
                synced: true,
                log: [].concat(_toConsumableArray(this.state.log))
            });
        }
    }, {
        key: 'isLocalLater',
        value: function isLocalLater(driveFile) {
            var localStorage = window.localStorage;
            //console.log("isLocalLater? driveFile: ", driveFile);
            //get value for property gamename on driveFile
            var id = driveFile.appProperties[DRIVE_FILE_PROP_ID];
            // console.log("isLocalLater? driveFile id ", id);
            var driveDate = new Date(driveFile.modifiedTime);
            var localTime = localStorage.getItem(getMetaName(DATE, this.props.id, id));
            // console.log(`isLocalLater driveTime ${this.displayDate(driveFile.modifiedTime)} localTime ${this.displayDate(localTime)}`)
            console.log("is drive.getTime " + driveDate.getTime() + " less than local time? " + localTime + " -> " + (driveDate.getTime() < localTime));
            return driveDate.getTime() > localTime;
        }
    }, {
        key: 'displayDate',
        value: function displayDate(time) {
            return new Date(time).toUTCString();
        }
    }, {
        key: 'overwriteLocalSave',
        value: function overwriteLocalSave(id, gameName, body) {
            var localStorage = window.localStorage;
            var stringed = JSON.stringify(body);
            localStorage.setItem('persist:' + gameName, stringed);
            this.saveLocalMeta(id);
            console.log('local save ' + gameName + ' successfully overwritten', stringed);
            this.setState({
                syncing: false,
                synced: true,
                saveConflict: null,
                error: null
            });
        }
    }, {
        key: 'onNewGame',
        value: function onNewGame(id) {
            //this.saveLocalMeta();
            //game will be persisted to cloud on close
            //new game and load game set the filename of the game to be played
            var filename = getStoreName(this.props.id, id);
            console.log("load new game id: " + id + " name: " + filename);
            this.saveLocalMeta(id);
            this.setState({
                //filename: getStoreName(this.props.gamename, SAVE_NAME)
                filename: filename,
                fileId: id,
                local: this.getLocalSaves()
            });
            this.registerMenuButtons(id);
            // this.props.registerMenuItem({
            //     key: 'sync',
            //     component: <IconButton icon={'sync'} round={true}  onInput={()=>{this.syncSaves(id)}}/>
            // })
            //this.saveGame(id);
        }
    }, {
        key: 'saveLocalMeta',
        value: function saveLocalMeta(id) {
            var date = new Date();
            console.log("saveLocalMeta new game name: " + id + " date: " + date.getTime());
            var localStorage = window.localStorage;
            //save metadata locally
            localStorage.setItem(getMetaName(DATE, this.props.id, id), date.getTime());
            localStorage.setItem(getMetaName(DESC, this.props.id, id), 'a game description');
        }
    }, {
        key: 'onLoadGame',
        value: function onLoadGame(id) {
            //use game + id as filename, set as filename
            var filename = getStoreName(this.props.id, id);
            console.log("load load game " + id + " name: " + filename);
            this.setState({
                filename: filename,
                fileId: id
            });
            this.registerMenuButtons(id);
        }
    }, {
        key: 'registerMenuButtons',
        value: function registerMenuButtons(fileId) {
            var _this5 = this;

            if (fileId) {
                this.props.registerMenuItem([{
                    key: 'sync',
                    id: 'none',
                    position: 'right',
                    text: 'sync',
                    component: _react2.default.createElement(_IconButton2.default, { className: 'no-fileId', key: 'none', width: '100%', round: true, icon: 'sync', disabled: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 353
                        }
                    })
                }, {
                    key: 'cloud',
                    position: 'right',
                    text: 'upload',
                    component: _react2.default.createElement(_IconButton2.default, { key: 'cloud', round: true, width: '100%', bgColor: 'orange', icon: 'cloud', onInput: function onInput() {
                            _this5.saveGame(_this5.state.fileId); //TODO decide whose responsibility it is to pick fileId
                            //this.syncSaves(fileId, false)
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 359
                        }
                    })
                }, {
                    key: 'back',
                    position: 'left',
                    component: _react2.default.createElement(_IconButton2.default, { key: 'back', round: true, icon: 'back', onInput: function onInput() {
                            console.log('website game menu back button pressed');
                            _this5.setState({
                                fileId: null, filename: null
                            });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 367
                        }
                    })
                }]);
            } else {
                this.props.registerMenuItem([{
                    key: 'sync',
                    id: fileId,
                    position: 'right',
                    text: 'sync',
                    component: _react2.default.createElement(_IconButton2.default, { className: 'fileId', key: fileId, width: '100%', round: true, icon: 'sync', onInput: function onInput() {
                            //console.log('load sync save button clicked! ' + fileId);
                            _this5.syncSaves(SAVE_NAMES, true);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 382
                        }
                    })
                }, {
                    key: 'cloud',
                    position: 'right',
                    text: 'upload',
                    component: _react2.default.createElement(_IconButton2.default, { key: 'cloud', round: true, width: '100%', bgColor: 'orange', icon: 'cloud', disabled: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 391
                        }
                    })
                }, {
                    key: 'back',
                    position: 'left',
                    component: _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/games', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 396
                            }
                        },
                        _react2.default.createElement(_IconButton2.default, { key: 'back', round: true, icon: 'back', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 396
                            }
                        })
                    )
                }]);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            console.log('website game load filename ' + this.state.filename, this.state);
            if (this.state.filename) {
                //savefile={this.state.filename}
                return _react2.default.createElement(
                    _PersistStore2.default,
                    { savefile: this.state.filename, reducers: this.props.reducers, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 406
                        }
                    },
                    _react2.default.createElement(_Game2.default, { filename: this.state.filename, gamename: this.props.id, game: this.props.game, settings: this.props.settings, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 408
                        }
                    })
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 413
                        }
                    },
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this6.exportFile();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 414
                            }
                        },
                        'go'
                    ),
                    _react2.default.createElement(_LoadGameView2.default, { syncing: this.state.syncing, saves: this.state.local, log: this.state.log,
                        onNewGame: function onNewGame(id) {
                            _this6.onNewGame(id);
                        }, onLoadGame: function onLoadGame(id) {
                            _this6.onLoadGame(id);
                        }, names: SAVE_NAMES, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 417
                        }
                    })
                );
            }
        }
    }]);

    return Load;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        gapi: state.gapi
        //gapi: false
    };
};

Load.displayName = 'Load';
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Load);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/game/PersistStore.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(8);

var _reduxLogger = __webpack_require__(18);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxPersist = __webpack_require__(87);

var _storage = __webpack_require__(88);

var _storage2 = _interopRequireDefault(_storage);

var _autoMergeLevel = __webpack_require__(89);

var _autoMergeLevel2 = _interopRequireDefault(_autoMergeLevel);

var _react3 = __webpack_require__(90);

var _Game = __webpack_require__(19);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import reducers from './../../games/g5/reducers.js';


// const SetTransform = createTransform(
//   // transform state on its way to being serialized and persisted.
//   (inboundState, key) => {
//     // convert mySet to an Array.
//     //return { ...inboundState, mySet: [...inboundState.mySet] };
//     console.log("transform persisted key: " + key, inboundState);
//     return inboundState;
//   },
//   // transform state being rehydrated
//   (outboundState, key) => {
//     // convert mySet back to a Set.
//     //return { ...outboundState, mySet: new Set(outboundState.mySet) };
//     console.log("transform rehydration key: " + key, outboundState);
//     return outboundState;
//   }
// );
// const persistConfig = {
//   key: 'rootB',
//   storage: storage,
//   stateReconciler: autoMergeLevel2,
//   //transforms: [SetTransform]
//  };

//const pReducer = persistReducer(persistConfig, reducers);

// if (typeof window === 'undefined') {
//     global.window = {}
// }


var Persist = function (_React$Component) {
    _inherits(Persist, _React$Component);

    function Persist(props) {
        _classCallCheck(this, Persist);

        var _this = _possibleConstructorReturn(this, (Persist.__proto__ || Object.getPrototypeOf(Persist)).call(this, props));

        console.log("PersistStore props", props);
        _this.persistConfig = {
            key: props.savefile,
            storage: _storage2.default,
            stateReconciler: _autoMergeLevel2.default
            // transforms: [
            //     createTransform(
            //         (inboundState, key) => {
            //             // convert mySet to an Array.
            //             console.log('persist create transform inbound ' + key);
            //             return { ...inboundState};
            //         },
            //         // transform state being rehydrated
            //         (outboundState, key) => {
            //                 // convert mySet back to a Set.
            //                 console.log('persist create transform outbound ' + key);
            //                 return { ...outboundState};
            //         },
            //         { whitelist: null}
            //     ),
            // ]
        };
        _this.pReducer = (0, _reduxPersist.persistReducer)(_this.persistConfig, _this.props.reducers);
        _this.store = (0, _redux.createStore)(_this.pReducer, {}, (0, _redux.applyMiddleware)(_reduxLogger2.default));
        _this.persistor = (0, _reduxPersist.persistStore)(_this.store);
        //  console.log(`persistor `, this.persistor);
        return _this;
    }

    _createClass(Persist, [{
        key: 'render',
        value: function render() {
            //loading={<p>persisting!</p>} 
            //need to make store accessible to game components
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: this.store, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                },
                _react2.default.createElement(
                    _react3.PersistGate,
                    { persistor: this.persistor, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        }
                    },
                    this.props.children
                )
            );
        }
    }]);

    return Persist;
}(_react2.default.Component);

Persist.displayName = 'PersistStore';
exports.default = Persist;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/stateReconciler/autoMergeLevel2");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/integration/react");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listCourses = exports.listCourses = function listCourses() {
    return gapi.client.classroom.courses.list();
};
var listCourseWork = exports.listCourseWork = function listCourseWork(courseId) {
    return gapi.client.classroom.courses.courseWork.list({
        courseId: courseId
    });
};
var listSubmissions = exports.listSubmissions = function listSubmissions(courseId, courseWorkId) {
    return gapi.client.classroom.courses.courseWork.studentSubmissions.list({
        //  courseId: '17021267121', courseWorkId: '17020506164', userId: 'me'
        courseId: courseId, courseWorkId: courseWorkId, userId: 'me'
    });
};
var createCourse = exports.createCourse = function createCourse() {
    /*
        "http://classroom.google.com/c/MTcwMjEyNjcxMjFa"courseGroupEmail:"necromancy_period_2_af4f1bd6@classroom.google.com"courseState:"PROVISIONED"
        creationTime: "2018-09-19T09:21:13.737Z"description:"well be learning how to touch the dead"
        descriptionHeading:"youll enjoy this"enrollmentCode: "l8z9gj4"guardiansEnabled:false id:"17021267121"name:"necromancy"
        ownerId:"110032523464157574066"room:"601"section:"period 2"
        teacherFolder:{id: "0BznEEPyGIHb0fnpUcmpmazNCUndHWmVnWXdJY05QVTdrNnQyT1Q0MWlxZE9HY0dmUFZCUDg"}
        teacherGroupEmail:"necromancy_period_2_teachers_2b8259c2@classroom.google.com"
        updateTime: "2018-09-19T09:21:12.715Z"
    */
    gapi.client.classroom.courses.create({
        name: 'necromancy',
        section: 'period 2',
        descriptionHeading: 'youll enjoy this',
        description: 'well be learning how to touch the dead',
        room: '601',
        ownerId: 'me',
        courseState: 'PROVISIONED'
    }).then(function (r) {
        console.log('classroom createcourse result', r);
        var id = r.result.id;
    }).catch(function (e) {
        console.log('classroom create course error', e);
    });
};
var createAssignment = exports.createAssignment = function createAssignment(courseId, title) {
    //course id 17021267121 enrollment code l8z9gj4
    if (courseId) {
        console.log('classroom creating coursework for course ' + courseId);
        return gapi.client.classroom.courses.courseWork.create({
            courseId: courseId,
            title: title,
            description: 'Read the article about bringing the dead to life.',
            materials: [{ 'link': { 'url': 'https://docs.google.com/document/d/16f3UV7DSJ3mbHM25Ay7Kx9xgYYeefdHOg_el6kAA6Rw/edit?usp=sharing' } }],
            workType: 'ASSIGNMENT'
        });
    } else {
        return gapi.client.classroom.courses.list();
    }
};

var turnInAssignment = exports.turnInAssignment = function turnInAssignment() {
    //changes student turnIn button to an unsubmit button
    gapi.client.classroom.courses.courseWork.studentSubmissions.turnIn({
        courseId: '17021267121',
        courseWorkId: '17020506164',
        id: 'CgwImobFiDcQtKCBtD8'
    }).then(function (r) {
        console.log('classroom turn in result', r);
    }).catch(function (e) {
        console.log('classroom turn in error', e);
    });
};
var gradeAssignment = exports.gradeAssignment = function gradeAssignment() {
    ////course id 17021267121 enrollment code l8z9gj4 courseworkId 17020506164 
    //grades can be assigned by teacher account
    gapi.client.classroom.courses.courseWork.studentSubmissions.patch({
        courseId: '17021267121',
        courseWorkId: '17020506164',
        id: 'CgwImobFiDcQtKCBtD8',
        updateMask: 'assignedGrade,draftGrade',
        assignedGrade: 99,
        draftGrade: 80
    }).then(function (r) {
        console.log('classroom submit grade result', r);
    }).catch(function (e) {
        console.log('classroom submit grade error', e);
    });
};
//createReport(game, name, elements
var submit = exports.submit = function submit(game, name, elements) {};
var submitAssignment = exports.submitAssignment = function submitAssignment(courseId, courseWorkId, userId, subId) {
    //course id 17021267121 enrollment code l8z9gj4 courseworkId 17020506164     courseId and courseworkId can be found on coursework item
    //list courses, list courseWork for course, list student submissions, submit for student
    //links can be added from student account

    if (!subId) {
        gapi.client.classroom.courses.courseWork.studentSubmissions.list({
            courseId: '17021267121', courseWorkId: '17020506164', userId: 'me'
        }).then(function (r) {
            console.log('listing studentSubmissions result', r);
            /*
            alternateLink: "http://classroom.google.com/c/MTcwMjEyNjcxMjFa/a/MTcwMjA1MDYxNjRa/submissions/student/MTQ3ODE4NTg1ODZa"
            assignmentSubmission: Object associatedWithDeveloper: true courseId: "17021267121"courseWorkId: "17020506164" courseWorkType: "ASSIGNMENT"
            creationTime: "2018-09-19T09:43:20.389Z" id: "CgwImobFiDcQtKCBtD8" state: "CREATED"updateTime: "2018-09-19T09:43:20.353Z"
            userId: "100326176790146306456"
            */
            // this.setState({
            //     submissions: r.result.studentSubmissions
            // })
            if (r.result.studentSubmissions) {
                var _subId = r.result.studentSubmissions[0].id;
                var _userId = r.result.studentSubmissions[0].userId;
                var _courseId = r.result.studentSubmissions[0].courseId;
                var _courseWorkId = r.result.studentSubmissions[0].courseWorkId;
                undefined.submitAssignment(_courseId, _courseWorkId, _userId, _subId);
            } else {
                throw new Error('no submission found for that userId');
            }
        }).catch(function (e) {
            console.log('listing studentSubmissions error', e);
        });
    } else {
        console.log('retrieving submission ' + subId);
        gapi.client.classroom.courses.courseWork.studentSubmissions.modifyAttachments({
            courseId: courseId,
            courseWorkId: courseWorkId,
            id: subId,
            addAttachments: [{ 'link': { 'url': 'https://docs.google.com/spreadsheets/d/1BqNlxTFnDIjgK6deSuKIVD5zWgbhgaMqU58lANMA-i8/edit?usp=sharing' } }]
        }).then(function (r) {
            console.log('classroom submit assignment result', r);
        }).catch(function (e) {
            console.log('classroom submit assignment error', e);
            //status 404 requested entity was not found
        });
    }
};

/*
export const createAssignment = (courseId) => {
    //course id 17021267121 enrollment code l8z9gj4
    if(courseId){
        console.log(`classroom creating coursework for course ${courseId}`)
        // let courseWork = {
        //     title: 'Frankenstein',  
        //     description: 'Read the article about bringing the dead to life.',  
        //     materials: [  
        //        {'link': { 'url': 'https://docs.google.com/document/d/16f3UV7DSJ3mbHM25Ay7Kx9xgYYeefdHOg_el6kAA6Rw/edit?usp=sharing' }}
        //     ],  
        //     workType: 'ASSIGNMENT'
        // }
        gapi.client.classroom.courses.courseWork.create({
            courseId,
            title: 'Frankenstein',  
            description: 'Read the article about bringing the dead to life.',  
            materials: [  
               {'link': { 'url': 'https://docs.google.com/document/d/16f3UV7DSJ3mbHM25Ay7Kx9xgYYeefdHOg_el6kAA6Rw/edit?usp=sharing' }}
            ],  
            workType: 'ASSIGNMENT'
        })
        .then(r => {
            console.log(`classroom coursework create result`, r);
            /*
assigneeMode:"ALL_STUDENTS"associatedWithDeveloper:truecourseId:"17021267121"creationTime:"2018-09-19T09:39:41.540Z"creatorUserId:"110032523464157574066"
description:"Read the article about bringing the dead to life."id:"17020506164"materials:[{…}]state:"DRAFT"submissionModificationMode:"MODIFIABLE_UNTIL_TURNED_IN"
title:"Frankenstein"updateTime:"2018-09-19T09:39:40.860Z"workType:"ASSIGNMENT"

materials: array
            driveFile {alternateLink, id, thumbnailUrl, title}
            */
//         })
//         .catch(e => {
//             console.error(`classroom coursework create error`, e);
//         })
//         return null;
//         // this.setState({
//         //     courses: null
//         // })
//     }else{
//         //list courses, get teacher to select course
//         gapi.client.classroom.courses.list()
//         .then(r => {
//             console.log(`classroom courses list result`, r);
//             //r.result.courses is array
//                 //id, name, section, creationTime, courseState, ownerId, updateTime, alternateLink, calendarId, courseGroupEmail
//             // this.setState({
//             //     courses: r.result.courses
//             // })
//             return r.result.courses;
//         })
//         .catch(e => {
//             console.error(`classroom courses list error`, e);
//         })
//         //call again with courseId
//     }
// }

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSheet = exports.getSheet = function getSheet(id) {
  //13f1nrzyZPMAm02WS7DeTADiGCC-i0_LTLCPjwOCj5EQ
  return gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: id,
    majorDimension: 'ROWS',
    range: 'Sheet1!A1:D5',
    sheets: []
  });
};
var writeToSheet = exports.writeToSheet = function writeToSheet(id) {
  console.log('writeToSheet gapi', gapi);
  return gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: id,
    range: 'Sheet1!A1:D5',
    majorDimension: "ROWS",
    includeValuesInResponse: true,
    valueInputOption: 'USER_ENTERED',
    values: [["Item", "Cost", "Stocked", "Ship Date"], ["Wheel", "$20.50", "4", "3/1/2016"], ["Door", "$15", "2", "3/15/2016"], ["Engine", "$100", "1", "30/20/2016"], ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]]
  });
};

var addChart = exports.addChart = function addChart(id) {
  return gapi.client.sheets.spreadsheets.batchUpdate({
    spreadsheetId: id,
    requests: [{
      "addChart": {
        "chart": {
          "spec": {
            "title": "Model Q1 Total Sales",
            "pieChart": {
              "legendPosition": "RIGHT_LEGEND",
              "threeDimensional": false,
              "domain": {
                "sourceRange": {
                  "sources": [{
                    // "sheetId": sourceSheetId,
                    "startRowIndex": 0,
                    "endRowIndex": 4,
                    "startColumnIndex": 0,
                    "endColumnIndex": 1
                  }]
                }
              },
              "series": {
                "sourceRange": {
                  "sources": [{
                    // "sheetId": sourceSheetId,
                    "startRowIndex": 0,
                    "endRowIndex": 4,
                    "startColumnIndex": 1,
                    "endColumnIndex": 2
                  }]
                }
              }
            }
          },
          "position": {
            "overlayPosition": {
              "anchorCell": {
                // "sheetId": sheetId,
                "rowIndex": 2,
                "columnIndex": 2
              },
              "offsetXPixels": 50,
              "offsetYPixels": 50
            }
          }
        }
      }
    }]
  });
};
/*
{
  "range": "Sheet1!A1:D5",
  "majorDimension": "ROWS",
  "values": [
    ["Item", "Cost", "Stocked", "Ship Date"],
    ["Wheel", "$20.50", "4", "3/1/2016"],
    ["Door", "$15", "2", "3/15/2016"],
    ["Engine", "$100", "1", "30/20/2016"],
    ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
  ],
}

export const writeToSheet = (id) => {
    console.log(`writeToSheet gapi`, gapi);
    return gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: id,
        range: 'Sheet1!A1:D5',
        majorDimension: "ROWS",
        includeValuesInResponse: true,
        valueInputOption: 'USER_ENTERED',
        values: [
            ["Item", "Cost", "Stocked", "Ship Date"],
            ["Wheel", "$20.50", "4", "3/1/2016"],
            ["Door", "$15", "2", "3/15/2016"],
            ["Engine", "$100", "1", "30/20/2016"],
            ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
        ]
    })
}





        getSheet('13f1nrzyZPMAm02WS7DeTADiGCC-i0_LTLCPjwOCj5EQ')
        .then(r => {
            console.log(`getSheet result`, r);
            return writeToSheet(id, null)
        })
        .then(ef => {
            console.log(`writeToSheet result`, ef);
            return addChart('13f1nrzyZPMAm02WS7DeTADiGCC-i0_LTLCPjwOCj5EQ');
        })
        .then(c => {
            console.log(`writeToSheet chart`, c);
        })
        .catch( e => {
            console.log(`create file error`, e);
        })




                createAFile('application/vnd.google-apps.spreadsheet', 'text/csv', name + "4")
        .then(r => {
            console.log(`create file result`, r);
            return editFile(id, `,rose,tulip
            sweet,13,35
            savory,8,33
            umami,32,6
            salty,22,12`);
        })
        .catch( e => {
            console.log(`create file error`, e);
        })
*/

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Toast.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['  \n    background-color: #151515;\n    color: white;\n    text-align: center;\n    position: absolute;\n    z-index: 1000;\n    bottom: 50px;\n    left:0; right:0;\n    margin: auto;\n    max-width: 200px;\n    border-radius: 15px;\n'], ['  \n    background-color: #151515;\n    color: white;\n    text-align: center;\n    position: absolute;\n    z-index: 1000;\n    bottom: 50px;\n    left:0; right:0;\n    margin: auto;\n    max-width: 200px;\n    border-radius: 15px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FadeIn = __webpack_require__(37);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //modes - centered


var Toast = function (_React$Component) {
    _inherits(Toast, _React$Component);

    function Toast(props) {
        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

        _this.showMessage = _this.showMessage.bind(_this);
        _this.state = {};
        return _this;
    }

    _createClass(Toast, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.showMessage(this.props.message);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.message !== this.props.message || prevProps.id !== this.props.id) {
                this.showMessage(this.props.message);
            }
        }
    }, {
        key: 'showMessage',
        value: function showMessage(message) {
            var _this2 = this;

            var timeout = setTimeout(function () {
                console.log('Toast timeout called ' + timeout + ' state timeout ' + _this2.state.timeout);
                if (timeout === _this2.state.timeout) {
                    _this2.setState({
                        timeout: null
                    });
                }
            }.bind(this), 5000);
            this.setState({
                timeout: timeout,
                message: message
            });
        }
    }, {
        key: 'renderMessage',
        value: function renderMessage() {
            if (this.state.timeout) {
                return _react2.default.createElement(
                    Mod,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    },
                    _react2.default.createElement(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                            }
                        },
                        this.state.message
                    )
                );
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('Toast rendering', this.state);
            return _react2.default.createElement(
                _FadeIn2.default,
                { offset: 0, duration: 1000, childDelay: 150, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                },
                this.renderMessage()
            );
        }
    }]);

    return Toast;
}(_react2.default.Component);

exports.default = Toast;

Toast.propTypes = {
    message: _propTypes2.default.string
};
var Mod = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// //TODO: break into JSON file creation and request sender


//TODO: break into JSON file creation and request sender
function mapAppProperties(appProps) {
  var appProperties = {};
  if (appProps) {
    appProps.map(function (a) {
      appProperties[a.key] = a.value;
    });
  }
  console.log("mapAppProperties", appProperties);
  return appProperties;
}
var createFileWithJSONContent = exports.createFileWithJSONContent = function createFileWithJSONContent(fileId, name, appProps /*array of key val pairs */, data, callback) {
  //appData file: 1iUAS3YYiw95q-MbgLZrOXtJvgj_XywiG4_FxqSu_xGdsbfEQOw
  console.log("creating json beginning create file with JSON content");
  console.log("creating json file method " + method + " id: " + fileId + " props:", appProps);
  var boundary = '-------314159265358979323846';
  var delimiter = "\r\n--" + boundary + "\r\n";
  var close_delim = "\r\n--" + boundary + "--";
  var contentType = 'application/json';
  console.log('creating json ===starting metadata----');
  var props = mapAppProperties(appProps);
  console.log('creating json AppPropeties', 'AppPropeties result', props);
  var metadata = {
    name: name,
    mimeType: contentType,
    appProperties: props
    //appProperties: mapAppProperties(appProps)
    // appProperties: {
    //     'gamename': 'hello'
    // }
  };
  /* Build the body of the request */
  console.log('creating json ===multipartrequestbody----');
  var multipartRequestBody = delimiter + 'Content-Type: application/json\r\n\r\n' + JSON.stringify(metadata) + delimiter + 'Content-Type: ' + contentType + '\r\n\r\n' + data + close_delim;
  console.log('creating json ===path----');
  //'method': 'POST',
  var method = fileId ? 'PATCH' : 'POST';
  var path = '/upload/drive/v3/files';
  if (fileId) {
    path = path + '/' + fileId;
  }
  console.log("creating json uploading content, method " + method + " path " + path);
  /* Build the request to google */
  var request = gapi.client.request({
    'path': "" + path,
    'method': "" + method,
    'params': { 'uploadType': 'multipart' },
    'headers': {
      'Content-Type': 'multipart/related; boundary="' + boundary + '"'
    },
    'body': multipartRequestBody });
  if (!callback) {
    var callback = function callback(file) {
      console.log(file);
    };
  }
  console.log('creating json ===executing----', request);
  request.execute(callback);
};
var createFileWithHTML = exports.createFileWithHTML = function createFileWithHTML(fileId, appProps /*array of key val pairs */, data, callback) {
  //appData file: 1iUAS3YYiw95q-MbgLZrOXtJvgj_XywiG4_FxqSu_xGdsbfEQOw
  //1860xM3H6oJa2juElgM2ccpdNKaG4812x
  console.log("creating html beginning create file with JSON content");
  console.log("creating html file method " + method + " id: " + fileId + " props:", appProps);
  var boundary = '-------314159265358979323846';
  var delimiter = "\r\n--" + boundary + "\r\n";
  var close_delim = "\r\n--" + boundary + "--";
  //const contentType = 'text/html';
  var contentType = 'application/vnd.google-apps.document';
  console.log('creating html ===starting metadata----');
  // let props = mapAppProperties(appProps);
  // console.log('creating html AppPropeties', 'AppPropeties result', props);
  var metadata = {
    //mimeType: 'application/vnd.google-apps.document'
    mimeType: 'text/html'
    // mimeType: contentType,
    // appProperties: props
  };
  /* Build the body of the request */
  console.log('creating html ===multipartrequestbody----');
  var multipartRequestBody = delimiter + 'Content-Type: application/vnd.google-apps.document\r\n\r\n' +
  //'Content-Type: ' + contentType + '\r\n\r\n' +
  JSON.stringify(metadata) + delimiter +
  // 'Content-Type: ' + contentType + '\r\n\r\n' +
  data + close_delim;
  console.log('creating html ===path----');
  //'method': 'POST',
  var method = fileId ? 'PATCH' : 'POST';
  var path = '/upload/drive/v3/files';
  if (fileId) {
    path = path + '/' + fileId;
  }
  console.log("creating html uploading content, method " + method + " path " + path);
  /* Build the request to google */
  var request = gapi.client.request({
    'path': "" + path,
    'method': "" + method,
    'params': { 'uploadType': 'multipart' },
    'headers': {
      'Content-Type': 'multipart/related; boundary="' + boundary + '"'
    },
    'body': multipartRequestBody });
  if (!callback) {
    var callback = function callback(file) {
      console.log(file);
    };
  }
  console.log('creating html ===executing----', request);
  request.execute(callback);
};

// export const createFileWithJSONContent = (isCreate, fileId, name, data, callback, driveKey) => {
//     //appData file: 1iUAS3YYiw95q-MbgLZrOXtJvgj_XywiG4_FxqSu_xGdsbfEQOw
//     console.log("beginning create file with JSON content");
//     const boundary = '-------314159265358979323846';
//     const delimiter = "\r\n--" + boundary + "\r\n";
//     const close_delim = "\r\n--" + boundary + "--";

//     const contentType = 'application/json';
//   //getGameName(this.props.gamename, 1)
//   //'parents':  ['appDataFolder']
//   console.log(`creating json file create? ${isCreate} id: ${fileId} name: ${name} key: ${driveKey}`);
//     var metadata = {
//         name,
//         mimeType: contentType,
//         appProperties: {
//             //[DRIVE_FILE_KEY]: `${this.props.gamename}`,
//             gamename: `${name}`,
//         }
//       };
//       /* Build the body of the request */
//       var multipartRequestBody =
//           delimiter +
//           'Content-Type: application/json\r\n\r\n' +
//           JSON.stringify(metadata) +
//           delimiter +
//           'Content-Type: ' + contentType + '\r\n\r\n' +
//           data +
//           close_delim;

//           //'method': 'POST',
//           let path = '/upload/drive/v3/files';
//           let method =  'POST'
//           if(!isCreate){
//               path = path + '/' + fileId;
//               method = 'PATCH';
//           }
//           console.log("uploading content, method " + method + " path " + path);
//           /* Build the request to google */
//       var request = gapi.client.request({
//           'path': path,
//           'method': method,
//           'params': {'uploadType': 'multipart'},
//           'headers': {
//             'Content-Type': 'multipart/related; boundary="' + boundary + '"'
//           },
//           'body': multipartRequestBody});
//       if (!callback) {
//         callback = function(file) {
//           console.log(file)
//         };
//       }
//       request.execute(callback);
//   }

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//get all files from storage matching a pattern

//extract information from those files

//group and return
var getLocalhostIterator = exports.getLocalhostIterator = function getLocalhostIterator() {
    var localStorage = window.localStorage;
    var keys = Object.keys(localStorage);
    var index = -1;
    var iterator = {
        next: function next() {
            index++;
            if (index <= keys.length) {
                return { value: keys[index], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
    return iterator;
};

//iterator has reference to local storage, next until done
var getSavedGameIds = exports.getSavedGameIds = function getSavedGameIds(iterator, regexp, modifier /* optional */) {
    var results = [];
    var next = null;
    do {
        next = iterator.next();
        if (regexp.test(next.value)) {
            //results.push({key:next.value.key, value:next.value.value});
            results.push(next.value);
        }
    } while (!next.done);

    var ids = results;
    if (modifier) {
        ids = results.map(function (r) {
            return modifier(r);
        });
    }
    var unique = [];
    ids = ids.map(function (id) {
        if (unique.indexOf(id) === -1) unique.push(id);
    });

    console.log("local ids", unique);
    return unique;
};
//takes array of objects - props, fn to get name and returns array of objects with props
var buildFiles = exports.buildFiles = function buildFiles(ids, props, extra) {
    var local = {};
    var ray = [];
    var localStorage = window.localStorage;
    ids.map(function (id) {
        if (!local[id]) {
            local[id] = true;
            var o = _extends({
                id: id
            }, extra);
            props.map(function (p) {
                o[p.key] = localStorage.getItem(p.getName(id));
            });
            ray.push(o);
            // ray.push({
            //     id,
            //     date: localStorage.getItem(getMetaName(DATE,this.props.gamename, id)),
            //     desc: localStorage.getItem(getMetaName(DESC,this.props.gamename, id))
            // })
        }
    });
    console.log('build files result', ray);
    return ray;
};

/*
    getLocalFiles(){
        let localStorage = window.localStorage;

        let query = new RegExp("(" + this.props.gamename + "-A)");
        let results = [];
        for (var i in localStorage) {
            if (localStorage.hasOwnProperty(i)) {
            if (i.match(query)) {
                results.push({key:i,val:localStorage.getItem(i)});
            }
            }
        }
        //extract id from file string
        let ids = results.map(f => {
            let parts = f.key.split("-");
            return parts[1];
        });
        console.log("local ids", ids);
        if(ids){
            //put ids into state.local, pointing to obj with keys for date and desc getMetaName(meta, game, id)
            let local = {};
            ids.map(id => {
                if(!local[id]){
                    local[id] = {
                        date: localStorage.getItem(getMetaName(DATE,this.props.gamename, SAVE_NAME)),
                        desc: localStorage.getItem(getMetaName(DESC,this.props.gamename, SAVE_NAME))
                    }
                }
            })
            this.setState({
                local
            })
            console.log("local meta", local);
        }

    }
*/

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/game/LoadGameView.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 200px;\n    z-index: 999;\n    background-image: url(', ');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n'], ['\n    width: 100%;\n    height: 200px;\n    z-index: 999;\n    background-image: url(', ');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background: ', ';\n    display: flex;\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    padding: ', '\n'], ['\n    background: ', ';\n    display: flex;\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    padding: ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex:1;\n    padding: 10px;\n'], ['\n    flex:1;\n    padding: 10px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    padding: 30px 20px 10px 20px;\n    outline: 0;\n    border: none;\n    text-align: left;\n    background-color: ', ';\n    margin: 0px;\n    transirion: all 1s ease;\n    border-radius: 5px; \n    &:hover{\n        background-color:', ';\n    }\n'], ['\n    width: 100%;\n    height: 100%;\n    padding: 30px 20px 10px 20px;\n    outline: 0;\n    border: none;\n    text-align: left;\n    background-color: ', ';\n    margin: 0px;\n    transirion: all 1s ease;\n    border-radius: 5px; \n    &:hover{\n        background-color:', ';\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    flex:1;\n'], ['\n    flex:1;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _baselineVideogame_asset24px = __webpack_require__(34);

var _baselineVideogame_asset24px2 = _interopRequireDefault(_baselineVideogame_asset24px);

var _TextBox = __webpack_require__(7);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//renders new game, the saved games, the game img, title and description
var LoadView = function (_React$Component) {
    _inherits(LoadView, _React$Component);

    function LoadView(props) {
        _classCallCheck(this, LoadView);

        var _this = _possibleConstructorReturn(this, (LoadView.__proto__ || Object.getPrototypeOf(LoadView)).call(this, props));

        _this.state = {
            //files: this.getSaves(props.syncing, props.saves)
        };
        return _this;
    }

    _createClass(LoadView, [{
        key: 'renderFiles',
        value: function renderFiles() {
            var _this2 = this;

            return this.props.names.map(function (n, i) {
                // console.log('load view saves count ' + this.props.saves);
                var saveId = _this2.props.saves.filter(function (s) {
                    // console.log("load view matchin save " + s.id + " wtih " + n);
                    return s.id === n;
                });
                // console.log('load view found save file', saveId);
                if (saveId.length > 0) {
                    return _react2.default.createElement(
                        _TextBox2.default,
                        { padding: '0px', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        _react2.default.createElement(
                            Slots,
                            { onClick: function onClick() {
                                    _this2.props.onLoadGame(saveId[0].id);
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            },
                            'save file ',
                            saveId[0].id
                        )
                    );
                } else {
                    return _react2.default.createElement(
                        _TextBox2.default,
                        { padding: '0px', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            }
                        },
                        _react2.default.createElement(
                            Slots,
                            { onClick: function onClick() {
                                    _this2.props.onNewGame(_this2.props.names[i]);
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 31
                                }
                            },
                            'New Game ',
                            _this2.props.names[i]
                        )
                    );
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Container,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                },
                _react2.default.createElement(
                    Game,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    },
                    _react2.default.createElement(Img, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    }),
                    _react2.default.createElement(_Text2.default, { tag: 'p', colorKey: 'textInverted', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \n                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \n                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \n                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    })
                ),
                _react2.default.createElement(
                    Lower,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        }
                    },
                    this.renderFiles()
                )
            );
        }
    }]);

    return LoadView;
}(_react2.default.Component);

exports.default = LoadView;


var Img = _styledComponents2.default.div(_templateObject, _baselineVideogame_asset24px2.default);
var Container = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme[props.theme.theme].neutralD;
}, function (props) {
    return props.theme[props.theme.theme].spaceM + 'px;';
});
var Game = _styledComponents2.default.div(_templateObject3);

var Slots = _styledComponents2.default.button(_templateObject4, function (props) {
    return props.theme[props.theme.theme].primary;
}, function (props) {
    return props.theme[props.theme.theme].primaryL;
});

var Lower = _styledComponents2.default.div(_templateObject5);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/game/Store.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(8);

var _reduxLogger = __webpack_require__(18);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import reducers from './../../games/g5/reducers.js';

if (typeof window === 'undefined') {
    global.window = {};
}

var Store = function (_React$Component) {
    _inherits(Store, _React$Component);

    function Store(props) {
        _classCallCheck(this, Store);

        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this, props));

        _this.store = (0, _redux.createStore)(props.reducers, {}, (0, _redux.applyMiddleware)(_reduxLogger2.default));
        return _this;
    }

    _createClass(Store, [{
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

    return Store;
}(_react2.default.Component);

Store.displayName = "Store";
exports.default = Store;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/game/GameMenu.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: fixed;\n    right:0;\n    top:', ';\n    background-color: white;\n    text-align: center;\n'], ['\n    position: fixed;\n    right:0;\n    top:', ';\n    background-color: white;\n    text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: absolute; \n    float:right; \n    right:0px; top:0px;\n    borders: none;\n    height: 100%;\n    transition: all ', ' ease;\n'], ['\n    position: absolute; \n    float:right; \n    right:0px; top:0px;\n    borders: none;\n    height: 100%;\n    transition: all ', ' ease;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: ', ';\n    position: relative;\n    border-bottom: 2px solid grey;\n    background-color: ', ';\n'], ['\n    height: ', ';\n    position: relative;\n    border-bottom: 2px solid grey;\n    background-color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    float:left;\n    align-self: flex-start;\n    display: inline-block;\n    height: 100%;\n    z-index=2;\n'], ['\n    float:left;\n    align-self: flex-start;\n    display: inline-block;\n    height: 100%;\n    z-index=2;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: flex;\n    float:right;\n    justify-content: flex-end;\n    align-items: flex-end;\n    align-self: flex-end;\n    display: block;\n    position: relative;\n    height: 100%;\n    z-index=2;\n'], ['\n    display: flex;\n    float:right;\n    justify-content: flex-end;\n    align-items: flex-end;\n    align-self: flex-end;\n    display: block;\n    position: relative;\n    height: 100%;\n    z-index=2;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    align-self: center:\n    flex:1;\n    span h1{\n        font-size: 1em\n    }\n    @media only screen and (min-width: ', ') {\n        span h1{\n            font-size: 1.5em\n        }\n    }\n'], ['\n    align-self: center:\n    flex:1;\n    span h1{\n        font-size: 1em\n    }\n    @media only screen and (min-width: ', ') {\n        span h1{\n            font-size: 1.5em\n        }\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SignInUi = __webpack_require__(99);

var _SignInUi2 = _interopRequireDefault(_SignInUi);

var _ClassShare = __webpack_require__(100);

var _ClassShare2 = _interopRequireDefault(_ClassShare);

var _IconButton = __webpack_require__(9);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _index = __webpack_require__(39);

var _index2 = _interopRequireDefault(_index);

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

        console.log('GameMenu constructor props', props);
        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(Menu, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.renderId !== this.props.renderId) {
                this.forceUpdate();
            }
        }
    }, {
        key: 'renderAdditionalMenuItems',
        value: function renderAdditionalMenuItems(position, wrapper) {
            console.log('rendering ' + this.props.menuItems.length + ' menu items', this.props.menuItems);
            return this.props.menuItems.filter(function (f) {
                return position === f.position;
            }).map(function (m) {
                console.log("rendering menu item", m);
                return wrapper(m);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('gamemenu render ', this.props);
            //TODO game menu: make right div flexible width
            // return <p>menu</p> // && this.props.width < 500
            if (this.props.width < 500) {
                return _react2.default.createElement(
                    Bar,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        }
                    },
                    _react2.default.createElement(
                        Left,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40
                            }
                        },
                        this.renderAdditionalMenuItems('left', function (item) {
                            return _react2.default.createElement(
                                'span',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 41
                                    }
                                },
                                item.component
                            );
                        })
                    ),
                    _react2.default.createElement(
                        Options,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        },
                        _react2.default.createElement(
                            _index2.default,
                            { alignRight: true, icon: 'more', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            },
                            this.renderAdditionalMenuItems('right', function (item) {
                                console.log('rendering item in wrapper ', item);
                                return _react2.default.createElement(
                                    'div',
                                    { style: { textAlign: 'center' }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 48
                                        }
                                    },
                                    item.component,
                                    _react2.default.createElement(
                                        'p',
                                        { style: { display: 'inline' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 50
                                            }
                                        },
                                        item.text
                                    )
                                );
                            }),
                            _react2.default.createElement(
                                'div',
                                { style: { textAlign: 'center' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 53
                                    }
                                },
                                _react2.default.createElement(_ClassShare2.default, {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 54
                                    }
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { textAlign: 'center' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 56
                                    }
                                },
                                _react2.default.createElement(_SignInUi2.default, {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 57
                                    }
                                })
                            )
                        )
                    )
                );
            } else {
                var _ref;

                return _react2.default.createElement(
                    Bar,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    },
                    _react2.default.createElement(
                        Left,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        },
                        this.renderAdditionalMenuItems('left', function (item) {
                            return _react2.default.createElement(
                                'span',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 67
                                    }
                                },
                                item.component
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: { display: 'block', position: 'relative', height: '100%', float: 'right', right: '168px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        },
                        this.renderAdditionalMenuItems('right', function (item) {
                            return _react2.default.createElement(
                                'span',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 70
                                    }
                                },
                                item.component
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: (_ref = { display: 'block', width: '48px', height: '100%' }, _defineProperty(_ref, 'height', '48px'), _defineProperty(_ref, 'position', 'absolute'), _defineProperty(_ref, 'right', '120px'), _ref), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72
                            }
                        },
                        _react2.default.createElement(_ClassShare2.default, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                            }
                        })
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: { display: 'block', width: '120px', height: '100%', position: 'absolute', right: '0' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        },
                        _react2.default.createElement(_SignInUi2.default, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                            }
                        })
                    )
                );
            }
        }
    }]);

    return Menu;
}(_react2.default.Component);

Menu.displayName = 'GameMenu';
exports.default = (0, _reactStatic.withSiteData)(Menu);

var Pop = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme[props.theme.theme].gameMenuHeight;
});
var Options = _styledComponents2.default.span(_templateObject2, function (props) {
    return props.theme[props.theme.theme].animS;
});
/*
    visibility: ${props=> {
        console.log(`styled Pop propns`, props);
        return props.open?'visible':'gone'
    }};
*/
var Bar = _styledComponents2.default.div(_templateObject3, function (props) {
    console.log('gamemenu styled bar props', props);
    return props.theme[props.theme.theme].gameMenuHeight;
}, function (props) {
    console.log('gamemenu styled bar props', props);
    return props.theme[props.theme.theme].neutral;
});
// const Bar = styled.div`
//     position: relative;
//     border-bottom: 2px solid grey;
// `
var Left = _styledComponents2.default.div(_templateObject4);
var Right = _styledComponents2.default.div(_templateObject5);
var Mid = _styledComponents2.default.div(_templateObject6, function (props) {
    return props.theme[props.theme.theme].mediaMinWidth;
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/apis/SignInUi.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline;\n    .abcRioButton{\n        box-shadow: none;\n    }\n'], ['\n    display: inline;\n    .abcRioButton{\n        box-shadow: none;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _keys = __webpack_require__(38);

var _keys2 = _interopRequireDefault(_keys);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//var SCOPES = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appfolder https://www.googleapis.com/auth/spreadsheets';
var SignIn = function (_React$Component) {
    _inherits(SignIn, _React$Component);

    function SignIn(props) {
        _classCallCheck(this, SignIn);

        // this.signIn = this.signIn.bind(this);
        var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));

        _this.onSuccess = function (user) {
            console.log('Signed in as ' + user.getBasicProfile().getName());
            //this.forceUpdate();
            // this.setState({
            //     signedIn: true
            // })
        };

        _this.onFailure = function (error) {
            console.log('Signed in failure, or signed out? ', error);
            // this.forceUpdate();
            // this.setState({
            //     signedIn: false
            // })
        };

        _this.signOut = _this.signOut.bind(_this);
        _this.onSuccess = _this.onSuccess.bind(_this);
        _this.onFailure = _this.onFailure.bind(_this);
        _this.getSignInBtn = _this.getSignInBtn.bind(_this);
        _this.state = {
            rendered: false,
            width: 120,
            height: 48
        };
        return _this;
    }

    _createClass(SignIn, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getSignInBtn();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.getSignInBtn();
        }
    }, {
        key: 'getSignInBtn',
        value: function getSignInBtn() {
            if (!this.state.rendered && this.props.gapi.gapiReady) {
                this.setState({
                    rendered: true,
                    signedIn: this.props.gapi.isSignedIn
                });
                gapi.signin2.render('g-signin2', {
                    'scope': _keys2.default.SCOPES,
                    'width': this.state.width,
                    'height': this.state.height,
                    'longtitle': false,
                    'theme': 'light',
                    'onsuccess': this.onSuccess,
                    'onfailure': this.onFailure
                });
            }
        }
    }, {
        key: 'signOut',
        value: function signOut() {
            gapi.auth2.getAuthInstance().signOut();
            // this.setState({
            //     signedIn: false
            // })
        }
    }, {
        key: 'renderSignOutBtn',
        value: function renderSignOutBtn() {
            if (this.props.gapi.isSignedIn) {
                return _react2.default.createElement(
                    'button',
                    { onClick: this.signOut,
                        style: { width: this.state.width + 'px', height: this.state.height + 'px',
                            position: 'absolute', top: '0', zIndex: '9999' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        }
                    },
                    'sign out'
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            //if gapi is ready, show sign in/out btns
            return _react2.default.createElement(
                'div',
                { style: { width: this.state.width + 'px', height: this.state.height + 'px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                    }
                },
                _react2.default.createElement(Btn, { id: "g-signin2", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                    }
                }),
                this.renderSignOutBtn()
            );
        }
    }]);

    return SignIn;
}(_react2.default.Component);
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(
//         {setSignedIn, setGapi},
//         dispatch
//     )
// }


var mapStateToProps = function mapStateToProps(state) {
    return {
        gapi: state.gapi
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SignIn);


var Btn = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/apis/ClassShare.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_React$Component) {
    _inherits(SignIn, _React$Component);

    function SignIn(props) {
        _classCallCheck(this, SignIn);

        var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));

        _this.getBtn = _this.getBtn.bind(_this);
        _this.state = {
            rendered: false,
            width: 48,
            height: 48
        };
        return _this;
    }

    _createClass(SignIn, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getBtn();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.getBtn();
        }
    }, {
        key: 'getBtn',
        value: function getBtn() {
            if (!this.state.rendered && this.props.gapi.gapiReady) {
                console.log('classroom share rendering ');
                this.setState({
                    rendered: true
                });
                gapi.sharetoclassroom.render("g-classroomShare", {
                    size: "48", theme: "dark"
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            //if gapi is ready, show sign in/out btns
            return _react2.default.createElement('div', { id: "g-classroomShare", style: { display: 'inline', borderRadius: '50%' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            });
            // return (
            //     <div style={{width: `${this.state.width}px`, height: `${this.state.height}px`}}>
            //         <div id={"g-classroomShare"} style={{display: 'inline'}}></div>
            //         class
            //     </div>
            // )
        }
    }]);

    return SignIn;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        gapi: state.gapi
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SignIn);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/game/Settings.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: fixed;\n    left:0; right:0; top:0; bottom: 0;\n    z-index: 100;\n    background-color: ', ';\n'], ['\n    position: fixed;\n    left:0; right:0; top:0; bottom: 0;\n    z-index: 100;\n    background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background-color:red;\n    height: ', ';\n    position: relative;\n'], ['\n    background-color:red;\n    height: ', ';\n    position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n'], ['\n    display: flex;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    align-self: flex-end;\n'], ['\n    align-self: flex-end;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    align-self: flex-start;\n    flex: 1;\n'], ['\n    align-self: flex-start;\n    flex: 1;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(3);

var _IconButton = __webpack_require__(9);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _TextBox = __webpack_require__(7);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = __webpack_require__(40);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(103);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(104);

var _index6 = _interopRequireDefault(_index5);

var _SettingsReducer = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultSettings = [{
    type: 'switch',
    key: 'hints',
    default: 1,
    getValue: function getValue(value) {
        if (value) {
            return 'hints on';
        }
        return 'hints off';
    }
}, {
    type: 'range',
    key: 'volume',
    default: 30,
    values: [0, 100],
    getValue: function getValue(value) {
        return 'volume ' + value;
    }
}, _defineProperty({
    type: 'options',
    key: 'font',
    options: 3,
    default: 1,
    text: 'font size'
}, 'options', ['small', 'medium', 'large'])];

var Settings = function (_React$Component) {
    _inherits(Settings, _React$Component);

    function Settings(props) {
        _classCallCheck(this, Settings);

        var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

        var inputs = {};
        defaultSettings.map(function (d) {
            inputs[d.key] = d.default;
        });
        console.log('Settings constructor redux length = ' + Object.keys(props.settings).length);
        _this.state = {
            open: false,
            settings: Object.keys(props.settings).length > 0 ? props.settings : defaultSettings,
            inputs: inputs
        };
        console.log('Settings constructor props', props);
        console.log('Settings constructor state', _this.state);
        _this.handleInput = _this.handleInput.bind(_this);
        _this.onClose = _this.onClose.bind(_this);
        props.registerMenuItem([{
            key: 'settings',
            position: 'right',
            component: _react2.default.createElement(_IconButton2.default, { round: true, icon: 'settings', onInput: function onInput() {
                    _this.setState({
                        open: true
                    });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            })
        }]);
        return _this;
    }

    _createClass(Settings, [{
        key: 'handleInput',
        value: function handleInput(id, value) {
            console.log('settings handleInput ' + id + ' value ' + value, this.props.settings);
            this.setState({
                inputs: _extends({}, this.state.inputs, _defineProperty({}, id, value))
            });
            this.props.setSettings(id, value);
        }
    }, {
        key: 'renderSettings',
        value: function renderSettings() {
            var _this2 = this;

            return this.state.settings.map(function (s) {
                switch (s.type) {
                    case 'switch':
                        return _react2.default.createElement(
                            _TextBox2.default,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 92
                                }
                            },
                            _react2.default.createElement(
                                Container,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 93
                                    }
                                },
                                _react2.default.createElement(
                                    Left,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 94
                                        }
                                    },
                                    _react2.default.createElement(_Text2.default, { tag: 'p', display: 'inline', padding: '10px 0px',
                                        text: s.getValue(_this2.state.inputs[s.key]),
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 94
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    Right,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 97
                                        }
                                    },
                                    _react2.default.createElement(_index2.default, { id: s.key, onInput: _this2.handleInput, isChecked: true, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 97
                                        }
                                    })
                                )
                            )
                        );
                    case 'range':
                        return _react2.default.createElement(
                            _TextBox2.default,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 101
                                }
                            },
                            _react2.default.createElement(_index6.default, { id: s.key, label: s.key, value: s.default, onInput: _this2.handleInput, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 102
                                }
                            })
                        );
                    case 'options':
                        return _react2.default.createElement(
                            _TextBox2.default,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 105
                                }
                            },
                            _react2.default.createElement(
                                'p',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 106
                                    }
                                },
                                s.text
                            ),
                            _react2.default.createElement(_index4.default, { id: s.key, options: s.options, onInput: _this2.handleInput,
                                selected: _this2.state.inputs[s.key], multiple: false, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 107
                                }
                            })
                        );
                }
            });
        }
    }, {
        key: 'onClose',
        value: function onClose() {
            console.log('settings onClose ' + this.state.open);
            this.setState({
                open: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.open) {
                return _react2.default.createElement(
                    Wrapper,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 121
                        }
                    },
                    _react2.default.createElement(
                        Bar,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 122
                            }
                        },
                        _react2.default.createElement(_IconButton2.default, { icon: 'up', round: true, onInput: this.onClose, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 123
                            }
                        }),
                        _react2.default.createElement(
                            'h3',
                            { style: { display: 'inline' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 124
                                }
                            },
                            'Settings'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { padding: '10px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 126
                            }
                        },
                        this.renderSettings()
                    )
                );
            } else {
                return null;
            }
        }
    }]);

    return Settings;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        setSettings: _SettingsReducer.setSettings
    }, dispatch);
};
var mapStateToProps = function mapStateToProps(state) {
    return {
        settings: state.settings
    };
};

Settings.displayName = 'Settings';
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Settings);


var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme[props.theme.theme].neutral;
});

var Bar = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme[props.theme.theme].gameMenuHeight;
});
var Container = _styledComponents2.default.div(_templateObject3);
var Right = _styledComponents2.default.div(_templateObject4);
var Left = _styledComponents2.default.div(_templateObject5);
// mapSettings(children){
//     let wrapped = React.Children.map(children, child =>
//         React.cloneElement(child, { doSomething: 'hello' }));
//     console.log('mapSettings wrapped', wrapped);
//     return wrapped;
// }
// render(){
//     console.log('Settings render called open? ' + this.state.open);
//     if(this.state.open){
//         return (
//             <div>
//                 Settings
//             </div>
//         )
//     }else{
//         return <div>
//             {this.mapSettings(this.props.children)}
//         </div>
//     }
// }

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(false);
// imports


// module
exports.push([module.i, ".switch-container{position:relative}input[type=checkbox].switch{position:absolute;opacity:0}input[type=checkbox].switch+div{vertical-align:middle;width:40px;height:20px;border-radius:999px;background-color:#00b0f2;-webkit-transition-duration:.4s;-o-transition-duration:.4s;transition-duration:.4s;-webkit-transition-property:background-color,box-shadow;-webkit-transition-property:background-color,-webkit-box-shadow;transition-property:background-color,-webkit-box-shadow;-o-transition-property:background-color,box-shadow;transition-property:background-color,box-shadow;transition-property:background-color,box-shadow,-webkit-box-shadow;cursor:pointer}input[type=checkbox].switch+div span{position:absolute;font-size:1.6rem;color:#fff;margin-top:12px}input[type=checkbox].switch+div span:first-child{margin-left:15px}input[type=checkbox].switch+div span:nth-child(2){margin-left:55px}input[type=checkbox].switch:checked+div{width:94px;background-position:0 0;background-color:#3b89ec}input[type=checkbox].switch+div{width:94px;height:48px}input[type=checkbox].switch:checked+div{background-color:#57bb00}input[type=checkbox].switch+div>div{float:left;width:46px;height:46px;border-radius:inherit;background:#fff;-webkit-transition-timing-function:cubic-bezier(1,0,0,1);-o-transition-timing-function:cubic-bezier(1,0,0,1);transition-timing-function:cubic-bezier(1,0,0,1);-webkit-transition-duration:.4s;-o-transition-duration:.4s;transition-duration:.4s;-webkit-transition-property:transform,background-color;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;-o-transition-property:transform,background-color;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;pointer-events:none;margin-top:1px;margin-left:1px}input[type=checkbox].switch:checked+div>div{-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0);background-color:#fff}input[type=checkbox].bigswitch.switch+div>div{width:44px;height:44px;margin-top:1px}input[type=checkbox].switch:checked+div>div{-webkit-transform:translate3d(46px,0,0);transform:translate3d(46px,0,0)}", ""]);

// exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Checkbox/index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        //console.log('checkbox constructor props', props);
        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Checkbox, [{
        key: 'handleChange',
        value: function handleChange(e) {
            // console.log('checkbox handle change ' + e.target.value + " type of " + (typeof e.target.value), e);
            this.props.onInput(this.props.id, e.target.value);
        }
    }, {
        key: 'renderOptions',
        value: function renderOptions() {
            var _this2 = this;

            return this.props.options.map(function (o, i) {
                // console.log(`mapping radio selected == ${this.props.selected} nan? ${typeof this.props.selected} 
                //     i == ${i} nan? ${typeof i} checked? ${this.props.selected == i}`)
                return _react2.default.createElement(
                    'div',
                    { className: 'radio', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    _react2.default.createElement(
                        'label',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        _react2.default.createElement('input', { type: _this2.props.multiple ? 'checkbox' : 'radio', value: i, checked: _this2.props.selected == i,
                            onChange: _this2.handleChange, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        }),
                        o
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                _react2.default.createElement(
                    'form',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    this.renderOptions()
                )
            );
        }
    }]);

    return Checkbox;
}(_react2.default.Component);

Checkbox.displayName = 'Checkbox';
exports.default = Checkbox;

/*
                       <Checkbox id={s.key} options={s.options} onInput={this.handleInput} 
                            selected={this.state.inputs[s.key]} multiple={false} />
*/

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Slider/index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    height:36px;\n    display: column;\n    align-items: center;\n'], ['\n    display: flex;\n    height:36px;\n    display: column;\n    align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    align-self: flex-start;\n'], ['\n    align-self: flex-start;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex: 1;\n    align-self: flex-end;\n    top:50%;\n    transform: translateY(-50%);\n'], ['\n    flex: 1;\n    align-self: flex-end;\n    top:50%;\n    transform: translateY(-50%);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcSlider = __webpack_require__(105);

var _rcSlider2 = _interopRequireDefault(_rcSlider);

__webpack_require__(106);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';


var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        // this.state = {
        //     value: 50
        // }
        return _this;
    }

    _createClass(Input, [{
        key: 'handleChange',
        value: function handleChange(value) {
            console.log('Slider input handleChange ', value);
            // this.setState({
            //     value
            // })
            this.props.onInput(this.props.id, value);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Flex,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                },
                _react2.default.createElement(
                    Left,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    },
                    _react2.default.createElement(
                        'p',
                        { style: { display: 'inline', lineHeight: '36px', paddingRight: '10px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        this.props.label
                    )
                ),
                _react2.default.createElement(
                    Right,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    },
                    _react2.default.createElement(_rcSlider2.default, { min: 0, max: 100, defaultValue: this.props.value, onAfterChange: this.handleChange, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    })
                )
            );
        }
    }]);

    return Input;
}(_react2.default.Component);

Input.displayName = 'Slider';
exports.default = Input;


var Flex = _styledComponents2.default.div(_templateObject);
var Left = _styledComponents2.default.div(_templateObject2);
var Right = _styledComponents2.default.div(_templateObject3);

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("rc-slider");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("rc-slider/assets/index.css");

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _reduxLogger = __webpack_require__(18);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(108);

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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _apiReducer = __webpack_require__(47);

var _SettingsReducer = __webpack_require__(42);

var reducer = (0, _redux.combineReducers)({
  gapi: _apiReducer.reducer, settings: _SettingsReducer.reducer
});

exports.default = reducer;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{font-family:Raleway,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}a{text-decoration:none;color:red;font-weight:700}img{max-width:100%}.recharts-legend-item-text{color:grey}", ""]);

// exports


/***/ }),
/* 110 */
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
    spaceL: '20',
    roundCorners: '5px',
    menuHeight: '50px',
    gameMenuHeight: '48px',
    mediaMinWidth: '500px',
    bg1: '#E07831',
    bg2: '#E0AA35',
    bg3: '#E0CE31',
    bg4: '#FF6D6D',
    bg5: '#FFAB88',
    bg6: '#FF8AC9',
    bgCount: 6
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
    spaceL: '20',
    roundCorners: '5px',
    menuHeight: '50px',
    gameMenuHeight: '48px',
    mediaMinWidth: '500px',
    bg1: '#C72D79',
    bg2: '#C72B2D',
    bgCount: 2
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
    spaceL: '20',
    roundCorners: '5px',
    menuHeight: '50px',
    gameMenuHeight: '48px',
    mediaMinWidth: '500px',
    bg1: '#89C939',
    bg2: '#C9C938',
    bg3: '#4CD156',
    bgCount: 3
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/apis/Analytics.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGa = __webpack_require__(20);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _cookies = __webpack_require__(112);

var _reactStatic = __webpack_require__(2);

var _Modal = __webpack_require__(113);

var _Modal2 = _interopRequireDefault(_Modal);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

var _Button = __webpack_require__(115);

var _Button2 = _interopRequireDefault(_Button);

var _SlideSide = __webpack_require__(48);

var _SlideSide2 = _interopRequireDefault(_SlideSide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cookieConsent = 'consentCookie';
var consented = 'consented';

var Analytics = function (_React$Component) {
    _inherits(Analytics, _React$Component);

    function Analytics(props) {
        _classCallCheck(this, Analytics);

        // console.log("analytics constructor");
        var _this = _possibleConstructorReturn(this, (Analytics.__proto__ || Object.getPrototypeOf(Analytics)).call(this, props));

        _this.onConsent = _this.onConsent.bind(_this);
        _this.state = {
            getConsent: false
        };
        return _this;
    }

    _createClass(Analytics, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //console.log("init react-ga");
            //check if user has consented to cookies, if not, display modal
            _reactGa2.default.initialize('UA-59498836-3', {
                debug: true,
                gaOptions: {
                    anonymizeIp: true
                }
            });
            // ReactGA.pageview(window.location.pathname + window.location.search);
            // <script src="//www.google-analytics.com/cx/api.js"></script>
            if (typeof document !== 'undefined') {
                console.log("getting cookie", _cookies.getCookie);
                var consent = (0, _cookies.getCookie)(cookieConsent);
                console.log("has user consented? " + consent + " equal to " + consented + "? " + consented.localeCompare(consent), consented);
                if (consented.localeCompare(consent) !== 0) {
                    this.setState({
                        getConsent: true
                    });
                }
            }
        }
    }, {
        key: 'onConsent',
        value: function onConsent() {
            //(cname, cvalue, exdays) {
            console.log("onConsent user has consented, setting cookie");
            (0, _cookies.setCookie)(cookieConsent, consented, 1);
            this.setState({
                getConsent: false
            });
        }
    }, {
        key: 'renderModal',
        value: function renderModal() {
            var views = [];
            if (this.state.getConsent) {
                views.push(_react2.default.createElement(
                    _Modal2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        }
                    },
                    _react2.default.createElement(_Text2.default, { tag: 'p', text: 'This site uses cookies to collect annonymized data on how you use the site. ', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    }),
                    _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/settings#privacy', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        },
                        'View privacy policy'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { width: '100%' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        _react2.default.createElement(
                            _Button2.default,
                            { style: { float: 'right' }, onInput: this.onConsent, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 61
                                }
                            },
                            'Okay'
                        )
                    )
                ));
            }
            return views;
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { style: { position: 'absolute' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                },
                _react2.default.createElement(
                    _SlideSide2.default,
                    { offset: 0, duration: 1000, childDelay: 150, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    this.renderModal()
                )
            );
        }
    }]);

    return Analytics;
}(_react2.default.Component);

exports.default = Analytics;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCookie = setCookie;
exports.getCookie = getCookie;
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// export function checkCookie() {
//     var username = getCookie("username");
//     if (username != "") {
//         alert("Welcome again " + username);
//     } else {
//         username = prompt("Please enter your name:", "");
//         if (username != "" && username != null) {
//             setCookie("username", username, 365);
//         }
//     }
// }

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Modal.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['  \n    background-color: blue;\n    \n'], ['  \n    background-color: blue;\n    \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background-color: red;\n    position: absolute;\n    z-index: 1000;\n    bottom: 10px;\n    right: 10px;\n    width: 200px;\n    height: auto;\n'], ['\n    background-color: red;\n    position: absolute;\n    z-index: 1000;\n    bottom: 10px;\n    right: 10px;\n    width: 200px;\n    height: auto;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Wiggle = __webpack_require__(114);

var _Wiggle2 = _interopRequireDefault(_Wiggle);

var _SlideSide = __webpack_require__(48);

var _SlideSide2 = _interopRequireDefault(_SlideSide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //modes - centered


var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
        _classCallCheck(this, Modal);

        return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    _createClass(Modal, [{
        key: 'render',
        value: function render() {
            return (
                // <SlideSide  offset={0} duration={1000} childDelay={150}>
                _react2.default.createElement(
                    Discrete,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    _react2.default.createElement(
                        _Wiggle2.default,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        _react2.default.createElement(
                            Mod,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 13
                                }
                            },
                            this.props.children
                        )
                    )
                )
                // </SlideSide>

            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

exports.default = Modal;


var Mod = _styledComponents2.default.div(_templateObject);

var Discrete = _styledComponents2.default.div(_templateObject2);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/animations/Wiggle.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline-block;\n    background-color: red;\n    transition: all 2s ease;\n    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97);\n    animation-delay: 2s;\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n    @keyframes shake {\n        10%, 90% {\n          transform: translate3d(-1px, 0, 0);\n        }\n        \n        20%, 80% {\n          transform: translate3d(2px, 0, 0);\n        }\n      \n        30%, 50%, 70% {\n          transform: translate3d(-4px, 0, 0);\n        }\n      \n        40%, 60% {\n          transform: translate3d(4px, 0, 0);\n        }\n      }\n\n'], ['\n    display: inline-block;\n    background-color: red;\n    transition: all 2s ease;\n    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97);\n    animation-delay: 2s;\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n    @keyframes shake {\n        10%, 90% {\n          transform: translate3d(-1px, 0, 0);\n        }\n        \n        20%, 80% {\n          transform: translate3d(2px, 0, 0);\n        }\n      \n        30%, 50%, 70% {\n          transform: translate3d(-4px, 0, 0);\n        }\n      \n        40%, 60% {\n          transform: translate3d(4px, 0, 0);\n        }\n      }\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MyLog = __webpack_require__(6);

var _MyLog2 = _interopRequireDefault(_MyLog);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wig = function (_React$Component) {
  _inherits(Wig, _React$Component);

  function Wig(props) {
    _classCallCheck(this, Wig);

    return _possibleConstructorReturn(this, (Wig.__proto__ || Object.getPrototypeOf(Wig)).call(this, props));
  }

  _createClass(Wig, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Wiggle,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        this.props.children
      );
    }
  }]);

  return Wig;
}(_react2.default.Component);

exports.default = Wig;

Wig.displayName = 'Wiggle';
var Wiggle = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Button.jsx';

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
        value: function handleInput(e) {
            //fire event if available
            //pass input up to parents
            this.props.onInput(e);
            //   console.log("button clicked");
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Btn,
                { className: 'button', onClick: this.handleInput, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                },
                this.props.children
            )
            // <button className={'button'} onClick={this.handleInput}>{this.props.children}</button>
            ;
        }
    }]);

    return Button;
}(_react2.default.Component);
//Button.displayName = 'Button';


exports.default = Button;


var Btn = _styledComponents2.default.button(_templateObject, function (props) {
    return props.theme[props.theme.theme].accent;
}, function (props) {
    return props.theme[props.theme.theme].accentD;
});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(8);

var _apiReducer = __webpack_require__(47);

var _keys = __webpack_require__(38);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const API_KEY = 'AIzaSyBc2-uDprThmL1avRG6W0BHLqVVhOoxcF0';
// const CLIENT_ID = '640363567361-na8ad159n3hsoa0tugsves1o8n6crsti.apps.googleusercontent.com';
// // Array of API discovery doc URLs for APIs used by the quickstart
// const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest", 
// "https://sheets.googleapis.com/$discovery/rest?version=v4"];
// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// var SCOPES = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appfolder https://www.googleapis.com/auth/spreadsheets';

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
            // this.loadFb();
            window.___gcfg = {
                parsetags: 'onload'
            };
        }
    }, {
        key: 'loadFb',
        value: function loadFb() {
            var script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = 'https://connect.facebook.net/en_US/sdk.js';
            script.onload = function () {
                console.log('fb script loaded');
            };
            document.body.appendChild(script);
        }
    }, {
        key: 'loadApi',
        value: function loadApi() {
            var _this2 = this;

            var script = document.createElement("script");
            //const script = document.createElement("<script>{parsetags: 'explicit'}</script>");
            //script.innerText = "{parsetags: 'explicit'}";
            //script.src = 'https://apis.google.com/js/api.js';
            script.src = 'https://apis.google.com/js/platform.js';
            //script.src = 'https://apis.google.com/js/client.js';
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
            console.log("update sign in status, ", isSignedIn);
            this.props.setSignedIn(isSignedIn);
        }
    }, {
        key: 'initClient',
        value: function initClient() {
            var _this3 = this;

            // console.log("init client");
            gapi.client.init({
                apiKey: _keys2.default.API_KEY,
                clientId: _keys2.default.CLIENT_ID,
                discoveryDocs: _keys2.default.DISCOVERY_DOCS,
                scope: _keys2.default.SCOPES
            }).then(function (r) {
                console.log("setting up gapi", gapi);
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
/* 117 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = undefined;
var _jsxFileName = '/home/pagevii/Documents/code/web/github/ss4/src/components/layout/Menu.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: absolute; \n    float:right; \n    right:0px; top:0px;\n    borders: none;\n    outline: 0;\n    height: 100%;\n    transition: all ', ' ease;\n'], ['\n    position: absolute; \n    float:right; \n    right:0px; top:0px;\n    borders: none;\n    outline: 0;\n    height: 100%;\n    transition: all ', ' ease;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    color: yellow;\n    padding-left: ', 'px;\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    h1, h2, p, h4, a{\n        line-height:50px;\n        height: 100%;\n        margin:0px auto;\n        padding:0px;\n        display: inline-block;\n        vertical-align: middle;\n        color: ', ';\n    }\n'], ['\n    font-size: ', ';\n    color: yellow;\n    padding-left: ', 'px;\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    h1, h2, p, h4, a{\n        line-height:50px;\n        height: 100%;\n        margin:0px auto;\n        padding:0px;\n        display: inline-block;\n        vertical-align: middle;\n        color: ', ';\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: inline-block;\n    flex: 1;\n    transition: all ', ' ease;\n'], ['\n    display: inline-block;\n    flex: 1;\n    transition: all ', ' ease;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    vertical-align: bottom;\n    transition: all ', ' ease;\n    h1, h2, p, h4, a{\n        line-height:50px;\n        height: 100%;\n        margin:0px auto;\n        padding:0px;\n        display: inline-block;\n        vertical-align: middle;\n        color: ', ';\n    }\n    a{\n        padding:0px 10px;\n        color: ', ';\n        transition: all ', ' ease;\n        height: 100%;\n        margin:0;\n        &:hover{\n            color: ', ';\n        }\n    }\n    a.active{\n        background-color: ', ';\n    }  \n'], ['\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    vertical-align: bottom;\n    transition: all ', ' ease;\n    h1, h2, p, h4, a{\n        line-height:50px;\n        height: 100%;\n        margin:0px auto;\n        padding:0px;\n        display: inline-block;\n        vertical-align: middle;\n        color: ', ';\n    }\n    a{\n        padding:0px 10px;\n        color: ', ';\n        transition: all ', ' ease;\n        height: 100%;\n        margin:0;\n        &:hover{\n            color: ', ';\n        }\n    }\n    a.active{\n        background-color: ', ';\n    }  \n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    width:100%;\n    height: ', ';\n    display: flex;\n    padding:0 0px;\n    padding-right: 50px;\n    margin:0;\n    position: relative;\n\n'], ['\n    width:100%;\n    height: ', ';\n    display: flex;\n    padding:0 0px;\n    padding-right: 50px;\n    margin:0;\n    position: relative;\n\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    z-index: 1000;\n    width:100%;\n    background: ', ';\n    padding:0px;\n    margin:0;\n    border-bottom: 2px solid ', ';\n    transition: transform 1s ease 0s, height 0.5s linear 2s;\n'], ['\n    z-index: 1000;\n    width:100%;\n    background: ', ';\n    padding:0px;\n    margin:0;\n    border-bottom: 2px solid ', ';\n    transition: transform 1s ease 0s, height 0.5s linear 2s;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    .minimize{\n        transform: translateY(-', ');\n        height: 0px;\n        border-bottom: 0px:\n    }\n'], ['\n    .minimize{\n        transform: translateY(-', ');\n        height: 0px;\n        border-bottom: 0px:\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _IconButton = __webpack_require__(9);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _index = __webpack_require__(39);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = exports.Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.state = {
            minimize: _this.setMinimize(props.location.pathname)
        };
        return _this;
    }

    _createClass(Menu, [{
        key: 'setMinimize',
        value: function setMinimize(path) {
            var min = path.includes('/games/');
            console.log('Menu setMinimize path ' + path + ' minimize? ' + min);
            return path.includes('/games/');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.props.location.pathname !== prevProps.location.pathname) {
                // let path = this.setPath(this.props.location.pathname);
                this.setState({
                    minimize: this.setMinimize(this.props.location.pathname)
                });
            }
        }
    }, {
        key: 'renderMore',
        value: function renderMore() {
            var items = [{ text: '', to: null }, { text: 'privacy', to: '/privacy' }, { text: 'about', to: '/about' }, { text: 'settings', to: '/settings' }];
            return _react2.default.createElement(
                _index2.default,
                { alignRight: true, icon: 'more', round: '50%', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                },
                items.map(function (e) {
                    if (e.to) {
                        return _react2.default.createElement(
                            _reactStatic.Link,
                            { to: e.to, style: { display: 'block' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 37
                                }
                            },
                            e.text
                        );
                    } else {
                        return _react2.default.createElement('span', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                            }
                        });
                    }
                })
            );
        }

        // getClassName(){
        //     if(this.state.minimize){
        //         return 'minimize'
        //     }
        //     return null;
        // }

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Wrapper,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                },
                _react2.default.createElement(
                    Outer,
                    { className: this.state.minimize ? 'minimize' : '', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    },
                    _react2.default.createElement(
                        Container,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 58
                            }
                        },
                        _react2.default.createElement(
                            PostTitle,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 59
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { exact: true, to: '/', className: 'title', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 59
                                    }
                                },
                                _react2.default.createElement(
                                    'h2',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 59
                                        }
                                    },
                                    'Title'
                                )
                            )
                        ),
                        _react2.default.createElement(Mid, { key: "mid", style: { flex: '1' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        }),
                        _react2.default.createElement(
                            MenuItem,
                            { key: "games", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 61
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/games', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 61
                                    }
                                },
                                _react2.default.createElement(
                                    'h4',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 61
                                        }
                                    },
                                    'Games'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            MenuItem,
                            { key: "posts", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/posts', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 62
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
                                    'Posts'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            Options,
                            { key: "more", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 64
                                }
                            },
                            this.renderMore()
                        )
                    )
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

Menu.displayName = 'Menu';
//const e = withRouter(Menu);
exports.default = (0, _reactStatic.withRouteData)((0, _reactStatic.withRouter)(Menu));


Menu.PropTypes = {
    location: _propTypes2.default.object
};

var Options = _styledComponents2.default.span(_templateObject, function (props) {
    return props.theme[props.theme.theme].animS;
});
var PostTitle = _styledComponents2.default.h1(_templateObject2, function (props) {
    return props.theme[props.theme.theme].textSizeM;
}, function (props) {
    return props.theme[props.theme.theme].spaceM;
}, function (props) {
    return props.theme[props.theme.theme].textInverted;
});

var Mid = _styledComponents2.default.span(_templateObject3, function (props) {
    return props.theme[props.theme.theme].animS;
});

var MenuItem = _styledComponents2.default.span(_templateObject4, function (props) {
    return props.theme[props.theme.theme].animS;
}, function (props) {
    return props.theme[props.theme.theme].textInverted;
}, function (props) {
    return props.theme[props.theme.theme].text;
}, function (props) {
    return props.theme[props.theme.theme].animS;
}, function (props) {
    return props.theme[props.theme.theme].primary;
}, function (props) {
    return props.theme[props.theme.theme].primary;
});

var Container = _styledComponents2.default.div(_templateObject5, function (props) {
    return props.theme[props.theme.theme].menuHeight;
});

var Outer = _styledComponents2.default.div(_templateObject6, function (props) {
    return props.theme[props.theme.theme].neutral;
}, function (props) {
    return props.theme[props.theme.theme].neutralL;
});
Outer.displayName = 'Outer';
var Wrapper = _styledComponents2.default.span(_templateObject7, function (props) {
    return props.theme[props.theme.theme].menuHeight;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.a37062d5.js.map