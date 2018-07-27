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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
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

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Container.jsx';

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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(7);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(8);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(9);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Post.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    height: 100%;\n    width: 100%;\n    vertical-align: middle;\n    margin: auto;\n    background-color: pink;\n    text-align: center;\n'], ['\n    height: 100%;\n    width: 100%;\n    vertical-align: middle;\n    margin: auto;\n    background-color: pink;\n    text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin:auto;\n'], ['\n    margin:auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    text-transformation: capitalize;\n    text-align: center;\n'], ['\n    text-transformation: capitalize;\n    text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _IconButton = __webpack_require__(12);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TalkitGame = __webpack_require__(64);

var _TalkitGame2 = _interopRequireDefault(_TalkitGame);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _CenterBox = __webpack_require__(65);

var _CenterBox2 = _interopRequireDefault(_CenterBox);

var _Loading = __webpack_require__(25);

var _Loading2 = _interopRequireDefault(_Loading);

var _MyLog = __webpack_require__(13);

var _MyLog2 = _interopRequireDefault(_MyLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Menu from './../components/layout/MainMenu.jsx';


//import katex from 'react-katex';
var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        //iterate through content, create talkit for each game node
        // console.log("Post constructor", props);
        var _this = _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));

        (0, _MyLog2.default)('log', "Post constructor", props);
        var games = {};
        if (props.post.content) {
            props.post.content.map(function (c, i) {
                if (c.type == "game") {
                    games[i] = _react2.default.createElement(_TalkitGame2.default, { tree: c.content, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
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
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _MyLog2.default)('log', "Post componentDidMount");
        }
    }, {
        key: 'componentDidUnmount',
        value: function componentDidUnmount() {
            (0, _MyLog2.default)('log', "Post componentDidUnmount");
        }
    }, {
        key: 'importKatex',
        value: function importKatex() {
            (0, _universalImport3.default)({
                id: 'react-katex',
                file: 'D:/websites/react-static/static-site-2/4/src/containers/Post.jsx',
                load: function load() {
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('react-katex', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'react-katex');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(18);
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
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(6);
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
                            lineNumber: 60
                        }
                    },
                    this.props.post.tags.map(function (t) {
                        return _react2.default.createElement(
                            'span',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
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
                                    lineNumber: 72
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
        key: 'renderBody',
        value: function renderBody() {
            //if exiting, don't bother with translate this.props.animationState === 1
            //parent animations don't seem to restart child transitions
            if (this.props.animationState === 1) {
                console.log("renderPosts called with state 1");
                return _react2.default.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 92
                        }
                    },
                    _react2.default.createElement(
                        Title,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 94
                            }
                        },
                        this.props.post.title
                    ),
                    this.renderTags(),
                    this.renderContent(),
                    this.renderContent(),
                    this.renderContent(),
                    _react2.default.createElement(
                        Shareable,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 99
                            }
                        },
                        _react2.default.createElement(_IconButton2.default, { icon: "done", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 100
                            }
                        }),
                        _react2.default.createElement(_IconButton2.default, { icon: "delete", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 101
                            }
                        }),
                        _react2.default.createElement(_IconButton2.default, { icon: "cached", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 102
                            }
                        }),
                        _react2.default.createElement(_IconButton2.default, { icon: "save", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 103
                            }
                        })
                    )
                );
            } else {
                return _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 112
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
                { fixed: false, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                    }
                },
                this.renderBody()
            )
            // <div style={{color: `${this.state.color}`}}>
            //     <button onClick={()=>{this.setState({color: this.state.color === 'red'?'blue':'red'})}}>toggle</button>
            //     <p>Not rendering that when leaving!! {this.state.whatever}</p>
            // </div>
            ;
        }
    }]);

    return Games;
}(_react2.default.Component);

Games.displayName = 'Post';
exports.default = (0, _reactStatic.withRouteData)(Games);


var Box = _styledComponents2.default.div(_templateObject);
var Shareable = _styledComponents2.default.div(_templateObject2);
var Title = _styledComponents2.default.h2(_templateObject3);
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 12 */
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

var _baselineDelete24px = __webpack_require__(56);

var _baselineDelete24px2 = _interopRequireDefault(_baselineDelete24px);

var _baselineDone24px = __webpack_require__(57);

var _baselineDone24px2 = _interopRequireDefault(_baselineDone24px);

var _baselineCached24px = __webpack_require__(58);

var _baselineCached24px2 = _interopRequireDefault(_baselineCached24px);

var _baselineKeyboard_arrow_right24px = __webpack_require__(59);

var _baselineKeyboard_arrow_right24px2 = _interopRequireDefault(_baselineKeyboard_arrow_right24px);

var _baselineSave24px = __webpack_require__(60);

var _baselineSave24px2 = _interopRequireDefault(_baselineSave24px);

var _baselineSettings20px = __webpack_require__(61);

var _baselineSettings20px2 = _interopRequireDefault(_baselineSettings20px);

var _baselineKeyboard_arrow_up24px = __webpack_require__(62);

var _baselineKeyboard_arrow_up24px2 = _interopRequireDefault(_baselineKeyboard_arrow_up24px);

var _baselinePlay_arrow24px = __webpack_require__(63);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validate = __webpack_require__(23);

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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactGa = __webpack_require__(16);

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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-katex");

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("samplegame");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("validate.js");

/***/ }),
/* 24 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\animations\\Loading.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n    background-color: grey;\n    height: 168px;\n    width: 168px;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n    div{\n        animation-name: example;\n        animation-duration: 1.5s;\n        animation-iteration-count: infinite;\n        animation-direction: alternate;\n        animation-timing-function: ease-in-out;\n        border-radius: 50%; \n        border: 2px solid #7A17A880;\n        background-color: transparent;\n    }\n    ', '\n    @keyframes example {\n        from {\n            transform: scale(1, 1);\n            border: 2px solid #7A17A880;\n        }\n        to {\n            transform: scale(2, 2);\n            border: 2px solid #7A17A8FF;\n        }\n    }\n'], ['\n    position: relative;\n    background-color: grey;\n    height: 168px;\n    width: 168px;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n    div{\n        animation-name: example;\n        animation-duration: 1.5s;\n        animation-iteration-count: infinite;\n        animation-direction: alternate;\n        animation-timing-function: ease-in-out;\n        border-radius: 50%; \n        border: 2px solid #7A17A880;\n        background-color: transparent;\n    }\n    ', '\n    @keyframes example {\n        from {\n            transform: scale(1, 1);\n            border: 2px solid #7A17A880;\n        }\n        to {\n            transform: scale(2, 2);\n            border: 2px solid #7A17A8FF;\n        }\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Animate = __webpack_require__(26);

var _Animate2 = _interopRequireDefault(_Animate);

var _NodeGroup = __webpack_require__(27);

var _NodeGroup2 = _interopRequireDefault(_NodeGroup);

var _d3Ease = __webpack_require__(10);

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

module.exports = require("react-move/Animate");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-move/NodeGroup");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Posts.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width:90%;\n    height: 100px;\n    margin: 10px auto;\n    position: relative;\n    display: block;\n'], ['\n    width:90%;\n    height: 100px;\n    margin: 10px auto;\n    position: relative;\n    display: block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: relative;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    padding-top: ', ';\n'], ['\n    position: relative;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    padding-top: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: 100%;\n    width: 100%;\n    padding-bottom: 100px;\n    background-color ', ';\n    overflow-y: auto;\n'], ['\n    height: 100%;\n    width: 100%;\n    padding-bottom: 100px;\n    background-color ', ';\n    overflow-y: auto;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    text-transform: capitalize;\n    color: white;\n    background: grey;\n    text-align: center;\n    width: 100%;\n    padding: 0px;\n    display: inline-block;\n'], ['\n    text-transform: capitalize;\n    color: white;\n    background: grey;\n    text-align: center;\n    width: 100%;\n    padding: 0px;\n    display: inline-block;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _Tags = __webpack_require__(66);

var _Tags2 = _interopRequireDefault(_Tags);

var _Translate = __webpack_require__(29);

var _Translate2 = _interopRequireDefault(_Translate);

var _SlideDown = __webpack_require__(67);

var _SlideDown2 = _interopRequireDefault(_SlideDown);

var _PostItem = __webpack_require__(31);

var _PostItem2 = _interopRequireDefault(_PostItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Menu from './../components/layout/MainMenu.jsx';

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
                                lineNumber: 38
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
                                lineNumber: 43
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
                        lineNumber: 52
                    }
                });
            }
        }
    }, {
        key: 'renderBody',
        value: function renderBody() {
            //if exiting, don't bother with translate this.props.animationState === 1
            //parent animations don't seem to restart child transitions
            return _react2.default.createElement(
                FlexBox,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                },
                this.redirect(),
                _react2.default.createElement(
                    PostBox,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    _react2.default.createElement(
                        _SlideDown2.default,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 68
                            }
                        },
                        _react2.default.createElement(Space, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        }),
                        _react2.default.createElement(Space, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        }),
                        _react2.default.createElement(Space, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        }),
                        _react2.default.createElement(Space, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72
                            }
                        }),
                        _react2.default.createElement(Space, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                            }
                        })
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                PostBox,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                },
                _react2.default.createElement(
                    _SlideDown2.default,
                    { offset: 100, duration: 1500, childDelay: 150, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                        }
                    },
                    this.props.posts.map(function (p) {
                        //<PostItem.component post={p} />
                        //return <PostItem.component  className='anim-child' post={p} />
                        return _react2.default.createElement(
                            'span',
                            { className: 'anim-child', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 95
                                }
                            },
                            _react2.default.createElement(_PostItem2.default.component, { post: p, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 96
                                }
                            })
                        );
                        //return <p className='anim-child' >hello</p>
                    })
                )
            );
            // return <p>Not rendering that when leaving!!</p>
        }
    }]);

    return Games;
}(_react2.default.Component);

Games.displayName = 'Posts';
exports.default = (0, _reactStatic.withRouteData)(Games);

var Space = _styledComponents2.default.div(_templateObject);
var FlexBox = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme[props.theme.theme].menuHeight;
});

var PostBox = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.theme[props.theme.theme].neutralD;
});
var Title = _styledComponents2.default.h2(_templateObject4);
// const Container = styled.div`
//     background: black;
//     width:100%;
//     height:100vh;
//     overflow: hidden;
// `

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\animations\\Translate.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\n\n  \n'], ['\n\n\n  \n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NodeGroup = __webpack_require__(27);

var _NodeGroup2 = _interopRequireDefault(_NodeGroup);

var _d3Ease = __webpack_require__(10);

var _propTypes = __webpack_require__(3);

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

        console.log("Translate constructor", props);
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
                                // console.log("Translate start obj ", s);
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
                                //console.log("Translate enter obj ", e);
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
                                //console.log("Translate update obj ", u);
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
                                // console.log("Translate update obj ", l);
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
                                    console.log('translate data', key);
                                    return _react2.default.createElement(
                                        'div',
                                        { key: key, style: { display: 'block', translate: 'all 1s ease',
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
//  overflow-y: auto;
//    position: absolute;
//top:0; left: 0; right:0; bottom: 0;

//padding: 10px;
/*
    width:100%;
    height: 100%;
    
*/

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\layout\\PostItem.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width:100%;\n  height: 240px;\n  position: relative;\n  display: block;\n  opacity:1;\n  margin: 10px 0px 0px 0px;\n  padding:20px 20px 5px 20px;\n  border-radius: 5px;\n  background-color:  ', ';\n  transition: all  ', ' ease-in;\n  &:hover{\n    background-color: ', ';\n  }\n  h2{\n    font-size: 1.7em;\n    display: inline;\n    color: ', ';\n    opacity:1;\n    text-transform: capitalize;\n    margin:0\n    line-height: 75px;\n    vartical-align: bottom;\n  }\n  p{\n    font-size: 1em;\n    color: ', ';\n    opacity:1;\n    display: inline;\n    text-align: right;\n    float: right;\n    margin:0\n    line-height: 75px;\n    vartical-align: bottom;\n  }\n  @media only screen and (min-width: 500px) {\n    width:100%;\n    max-width:400px;\n    background-color: ', ';\n    margin: 10px auto 0px auto;\n  }\n'], ['\n  width:100%;\n  height: 240px;\n  position: relative;\n  display: block;\n  opacity:1;\n  margin: 10px 0px 0px 0px;\n  padding:20px 20px 5px 20px;\n  border-radius: 5px;\n  background-color:  ', ';\n  transition: all  ', ' ease-in;\n  &:hover{\n    background-color: ', ';\n  }\n  h2{\n    font-size: 1.7em;\n    display: inline;\n    color: ', ';\n    opacity:1;\n    text-transform: capitalize;\n    margin:0\n    line-height: 75px;\n    vartical-align: bottom;\n  }\n  p{\n    font-size: 1em;\n    color: ', ';\n    opacity:1;\n    display: inline;\n    text-align: right;\n    float: right;\n    margin:0\n    line-height: 75px;\n    vartical-align: bottom;\n  }\n  @media only screen and (min-width: 500px) {\n    width:100%;\n    max-width:400px;\n    background-color: ', ';\n    margin: 10px auto 0px auto;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MyLog = __webpack_require__(13);

var _MyLog2 = _interopRequireDefault(_MyLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var key = 'post';

// const component = (props) => {
//    // return <p>post {props.post.id}</p>
//    return(
//         <Link to={`/posts/${props[key].id}`} key={props[key].id} >
//             <Post key={props[key].id}>
//                 <h2>{props[key].title}</h2>
//                 <p>
//                     {props[key].tags.map((t, i) => {
//                     return i===0? ""+t:", "+t;
//                     })}
//                 </p>
//             </Post>
//         </Link>
//    )
// };

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
        _reactStatic.Link,
        { to: '/posts/' + this.props[key].id, key: this.props[key].id, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        _react2.default.createElement(
          Post,
          { key: this.props[key].id, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          _react2.default.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            this.props[key].title
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            this.props[key].tags.map(function (t, i) {
              return i === 0 ? "" + t : ", " + t;
            })
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

// export default {
//     component,
//     key
// }

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Home.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size:1em;\n  color: rgb(255,255,255,1);\n  width:100%;\n  padding: 10px;\n  padding-bottom:0px;\n\n'], ['\n  font-size:1em;\n  color: rgb(255,255,255,1);\n  width:100%;\n  padding: 10px;\n  padding-bottom:0px;\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  width: 100%;\n'], ['\n  position: relative;\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  z-index: 10;\n  top: 100px;\n  width: 50%;\n  height: 50vh;\n  background-color: rgb(255,255,255,0.5);\n  margin-left: 55px;\n\n'], ['\n  position: absolute;\n  z-index: 10;\n  top: 100px;\n  width: 50%;\n  height: 50vh;\n  background-color: rgb(255,255,255,0.5);\n  margin-left: 55px;\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _Background = __webpack_require__(68);

var _Background2 = _interopRequireDefault(_Background);

var _Flexbox = __webpack_require__(69);

var _Flexbox2 = _interopRequireDefault(_Flexbox);

var _Text = __webpack_require__(33);

var _Text2 = _interopRequireDefault(_Text);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Translate = __webpack_require__(29);

var _Translate2 = _interopRequireDefault(_Translate);

var _PostItem = __webpack_require__(31);

var _PostItem2 = _interopRequireDefault(_PostItem);

var _Trends = __webpack_require__(70);

var _Trends2 = _interopRequireDefault(_Trends);

var _MyLog = __webpack_require__(13);

var _MyLog2 = _interopRequireDefault(_MyLog);

var _FadeIn = __webpack_require__(35);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import ReactCSSTransitionGroup from 'react-transition-group';


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
            lineNumber: 24
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
            lineNumber: 30
          }
        },
        _react2.default.createElement(
          _Background2.default,
          { fixed: false, height: '100%', z: 1, width: '100%', colorKey: 'neutral', margin: '0', padding: '0px 0px 0px 0px', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          _react2.default.createElement(_Trends2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          })
        ),
        _react2.default.createElement(
          PostBox,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          _react2.default.createElement(
            Message,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          ),
          _react2.default.createElement(
            PostWrapper,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            _react2.default.createElement(_Translate2.default, { items: this.props.posts, itemKey: _PostItem2.default.key, itemId: 'id',
              component: _PostItem2.default.component, y: { start: -800, enter: 0, unit: 'px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            })
          )
        )
      );
      // return(
      //         <PostBox>
      //           <Message>
      //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      //           ut labore et dolore magna aliqua. 
      //           </Message>
      //           <PostWrapper>
      //             <Translate items={this.props.posts} itemKey={PostItem.key} itemId={'id'} 
      //                     component={PostItem.component}  y={{start: -800, enter: 0, unit: 'px'}}/>
      //           </PostWrapper>
      //         </PostBox>
      // )
      // return <p>Not rendering that when leaving!!</p>
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.displayName = 'Home';
exports.default = (0, _reactStatic.withRouteData)(Home);

var Message = _styledComponents2.default.h4(_templateObject);
var PostWrapper = _styledComponents2.default.div(_templateObject2);
var PostBox = _styledComponents2.default.div(_templateObject3);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Text.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: ', ';\n    margin: auto;\n    height: ', ';\n    h1, h2, h3, h4, h5, h6, p{\n        display: ', ';\n        text-align: ', ';\n        color: ', ';\n        font-size: ', ';\n    }\n'], ['\n    display: ', ';\n    margin: auto;\n    height: ', ';\n    h1, h2, h3, h4, h5, h6, p{\n        display: ', ';\n        text-align: ', ';\n        color: ', ';\n        font-size: ', ';\n    }\n']);

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
    return props.height ? props.height : 'inherit';
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Table.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: table;\n    width: 100%;\n    height: 100%;\n'], ['\n    display: table;\n    width: 100%;\n    height: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: table-row;\n'], ['\n    display: table-row;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(3);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\animations\\FadeIn.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(30);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

__webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        _reactAddonsCssTransitionGroup2.default,
        {
          transitionName: 'fade-in',
          transitionAppear: true,
          transitionAppearTimeout: 500,
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        this.props.children
      );
    }
  }]);

  return Trans;
}(_react2.default.Component);

exports.default = Trans;

/***/ }),
/* 36 */
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

var _GameListItem = __webpack_require__(73);

var _GameListItem2 = _interopRequireDefault(_GameListItem);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Dynamic from './../components/DynamicComponent.jsx';
//import Menu from './../components/layout/MainMenu.jsx';


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
                { fixed: false, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                })
            );
        }
    }]);

    return Games;
}(_react2.default.Component);

Games.displayName = 'Games';
exports.default = (0, _reactStatic.withSiteData)((0, _reactStatic.withRouteData)(Games));

/***/ }),
/* 37 */
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

var _IconButton = __webpack_require__(12);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _reactGa = __webpack_require__(16);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactRedux = __webpack_require__(5);

var _Button = __webpack_require__(74);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(7);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(8);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(9);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Game.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Index = __webpack_require__(75);

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
                            return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('samplegame', {
                                disableWarnings: true
                            })]).then(function (proms) {
                                return proms[0];
                            });
                        },
                        path: function path() {
                            return _path3.default.join(__dirname, 'samplegame');
                        },
                        resolve: function resolve() {
                            return /*require.resolve*/(20);
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

Games.displayName = 'Game';
exports.default = (0, _reactStatic.withRouteData)(Games);
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\math\\Katex.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(80);

var _reactKatex = __webpack_require__(18);

var _reactDom = __webpack_require__(22);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\About.jsx';

var _templateObject = _taggedTemplateLiteral(['\n  margin: 10px;\n  background-color: blue;\n  width: 100px;\n  height: 100px;\n'], ['\n  margin: 10px;\n  background-color: blue;\n  width: 100px;\n  height: 100px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _reactStatic = __webpack_require__(2);

var _Table = __webpack_require__(34);

var _Table2 = _interopRequireDefault(_Table);

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
        lineNumber: 9
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
        'div',
        { style: { margin: '0', backgroundColor: 'red', width: '100%', height: '500px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          'This is what we\'re all about.1'
        ),
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          'React, static sites, performance, speed. It\'s the stuff that makes us tick.'
        ),
        _react2.default.createElement(
          _Table2.default,
          { heights: ['10%', '30%', null], __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          fnc(),
          fnc(),
          fnc()
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

About.displayName = 'mAbout';
exports.default = (0, _reactStatic.withSiteData)(About);


var Box = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 42 */
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

var _reactRedux = __webpack_require__(5);

var _LogError = __webpack_require__(15);

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
/* 43 */
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
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-move");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\index.js';
//import MyError from './Error.js';


// Your top level component

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _LogError = __webpack_require__(15);

var _LogError2 = _interopRequireDefault(_LogError);

var _ErrorBoundary = __webpack_require__(46);

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

var _MyValid = __webpack_require__(47);

var _MyValid2 = _interopRequireDefault(_MyValid);

var _App = __webpack_require__(48);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\ErrorBoundary.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LogError = __webpack_require__(15);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _validate = __webpack_require__(23);

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
/* 48 */
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

var _templateObject = _taggedTemplateLiteral(['\n      /* width */\n      ::-webkit-scrollbar {\n          width: 10px;\n      }\n\n      /* Track */\n      ::-webkit-scrollbar-track {\n          background:  ', '; \n      }\n\n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n          background:  ', '; \n          border-radius: 5px;\n      }\n\n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n          background: ', '; \n      }\n      ::-webkit-scrollbar-button{\n        background: ', '; \n        color: white;\n      }\n      .fade-enter{\n        opacity: 0;\n        transition: all 300ms;\n      }\n      .fade-enter-active{\n        opacity: 1;\n        transition: all 300ms;\n      }\n      .fade-leave{\n        opacity: 1;\n        transition: all 300ms;\n      }\n      .fade-leave-active{\n        opacity: 0;\n        transition: all 300ms;\n      }\n    '], ['\n      /* width */\n      ::-webkit-scrollbar {\n          width: 10px;\n      }\n\n      /* Track */\n      ::-webkit-scrollbar-track {\n          background:  ', '; \n      }\n\n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n          background:  ', '; \n          border-radius: 5px;\n      }\n\n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n          background: ', '; \n      }\n      ::-webkit-scrollbar-button{\n        background: ', '; \n        color: white;\n      }\n      .fade-enter{\n        opacity: 0;\n        transition: all 300ms;\n      }\n      .fade-enter-active{\n        opacity: 1;\n        transition: all 300ms;\n      }\n      .fade-leave{\n        opacity: 1;\n        transition: all 300ms;\n      }\n      .fade-leave-active{\n        opacity: 0;\n        transition: all 300ms;\n      }\n    ']),
    _templateObject2 = _taggedTemplateLiteral([' \n    width:100%\n    background-color:red;\n    padding: 0;\n    margin: 0;\n'], [' \n    width:100%\n    background-color:red;\n    padding: 0;\n    margin: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background-color:yellow;\n    flex:1;\n    width:100%;\n    position: relative;\n    padding: 0;\n    margin: 0;\n'], ['\n    background-color:yellow;\n    flex:1;\n    width:100%;\n    position: relative;\n    padding: 0;\n    margin: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  background-color: ', ';\n'], ['\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  background-color: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactRedux = __webpack_require__(5);

var _reactHotLoader = __webpack_require__(49);

var _reactStaticRoutes = __webpack_require__(50);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _redux = __webpack_require__(81);

var _redux2 = _interopRequireDefault(_redux);

__webpack_require__(84);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(85);

var _theme2 = _interopRequireDefault(_theme);

var _Analytics = __webpack_require__(86);

var _Analytics2 = _interopRequireDefault(_Analytics);

var _Gapi = __webpack_require__(87);

var _Gapi2 = _interopRequireDefault(_Gapi);

var _d3Ease = __webpack_require__(10);

var _reactMove = __webpack_require__(44);

var _recompose = __webpack_require__(21);

var _Page = __webpack_require__(88);

var _Page2 = _interopRequireDefault(_Page);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Ma = __webpack_require__(90);

var _Ma2 = _interopRequireDefault(_Ma);

var _reactTransitionGroup = __webpack_require__(92);

var _reactTransitionGroup2 = _interopRequireDefault(_reactTransitionGroup);

var _FadeIn = __webpack_require__(35);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var startTheme = (0, _theme2.default)();

// const AnimatedRoutes = getContext({
//   // We have to preserve the router context for each route
//   // otherwise, a component may rerender with the wrong data
//   // during animation
//   router: PropTypes.object,
//   // We'll also look for the staticURL, so we can disable the animation during static render
//   staticURL: PropTypes.string,
// })(({ getComponentForPath, router, staticURL }) => (
//   <Route
//     path="*"
//     render={props => {
//       // Get the component for this path
//       let Comp = getComponentForPath(cleanPath(props.location.pathname))
//       if (!Comp) {
//         Comp = getComponentForPath('404')
//       }
//     //  console.log("App animated route " + props.location.pathname, props);
//       // When we're rendering for static HTML, be sure to NOT animate in.
//       if (staticURL) {
//         return (
//           // This relative wrapper is necessary for accurate rehydration :)
//           <div style={{ position: 'relative' }}>
//             <Comp {...props} />
//           </div>
//         )
//       }

//       // Use React-Move to animate the different components coming in and out
//       return (
//         // <PageAnim comp={Comp} router={router} props={props}/>
//         <NodeGroup
//         // React-move will handle the entry and exit of any items we pass in `data`
//         data={[
//           {
//             // pass the current Comp, props, ID and router
//             id: props.location.pathname,
//             Comp,
//             props,
//             router,
//           },
//         ]}
//         keyAccessor={d => d.id}
//         start={() => ({
//           opacity: [0],
//           scale: [1.2],
//           translateY: [20],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('start', 'start')}, 
//             end: () => {animationState.update('start', 'end')} }
//         })}
//         enter={() => ({
//           opacity: [1],
//           translateY: [0],
//           scale: [1],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('enter', 'start')}, 
//             end: () => {animationState.update('enter', 'end')} 
//           }
//         })}
//         update={() => ({
//           opacity: [1],
//           scale: [1],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('update', 'start')}, 
//             end: () => {animationState.update('update', 'end')} }
//         })}
//         leave={() => ({
//           opacity: [0],
//           translateY: [-0],
//           scale: [0.2],
//           timing: { duration: 800, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('leave', 'start')}, 
//             end: () => {animationState.update('leave', 'end')}
//            }
//         })}
//       >
//         {nodes => (
//           <div style={{ position: 'relative' }}>
//             {nodes.map((props) => {
//               let { key, data, type, state: { opacity, translateY, scale } } = props;
//               console.log("pageRendering props anim state " + animationState.state, props);
//               // Here, we override the router context with the one that was
//               // passed with each route scale(${scale}, ${scale}) 
//               //console.log(`animating map ${key} with opacity ${opacity} and scaleY ${scale} and rotate ${rotate}`);
//               //animationState={animationState.state} 
//               const PreservedRouterContext = withContext(
//                 {
//                   router: PropTypes.object,
//                 },
//                 () => ({
//                   router: data.router,
//                 }),
//               )(props => <div {...props} />)

//               return (
//                   // <data.Comp key={key}
//                   // style={{
//                   //   position: 'absolute',
//                   //   top: 0,
//                   //   right: 0,
//                   //   bottom: 0,
//                   //   left: 0,
//                   //   transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
//                   //   opacity,
//                   // }}
//                   // animationState={animationState.state}  />
//                 <PreservedRouterContext
//                   key={key}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     bottom: 0,
//                     left: 0,
//                     transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
//                     opacity,
//                   }}
//                 >
//                   <data.Comp  {...data.props} />
//                 </PreservedRouterContext>
//               )
//             })}
//           </div>
//         )}
//       </NodeGroup>
//       )
//     }}
//   />
// ))

// const AnimatedRoutes = getContext({
//   // We have to preserve the router context for each route
//   // otherwise, a component may rerender with the wrong data
//   // during animation
//   router: PropTypes.object,
//   // We'll also look for the staticURL, so we can disable the animation during static render
//   staticURL: PropTypes.string,
// })(({ getComponentForPath, router, staticURL }) => (
//   <Route
//     path="*"
//     render={props => {
//       // Get the component for this path
//       let Comp = getComponentForPath(cleanPath(props.location.pathname))
//       if (!Comp) {
//         Comp = getComponentForPath('404')
//       }
//     //  console.log("App animated route " + props.location.pathname, props);
//       // When we're rendering for static HTML, be sure to NOT animate in.
//       if (staticURL) {
//         return (
//           // This relative wrapper is necessary for accurate rehydration :)
//           <div style={{ position: 'relative' }}>
//             <Comp {...props} />
//           </div>
//         )
//       }

//       // Use React-Move to animate the different components coming in and out
//       return (
//         // <PageAnim comp={Comp} router={router} props={props}/>
//         <NodeGroup
//         // React-move will handle the entry and exit of any items we pass in `data`
//         data={[
//           {
//             // pass the current Comp, props, ID and router
//             id: props.location.pathname,
//             Comp,
//             props,
//             router,
//           },
//         ]}
//         keyAccessor={d => d.id}
//         start={() => ({
//           opacity: [0],
//           scale: [1.2],
//           translateY: [20],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('start', 'start')}, 
//             end: () => {animationState.update('start', 'end')} }
//         })}
//         enter={() => ({
//           opacity: [1],
//           translateY: [0],
//           scale: [1],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('enter', 'start')}, 
//             end: () => {animationState.update('enter', 'end')} 
//           }
//         })}
//         update={() => ({
//           opacity: [1],
//           scale: [1],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('update', 'start')}, 
//             end: () => {animationState.update('update', 'end')} }
//         })}
//         leave={() => ({
//           opacity: [0],
//           translateY: [-0],
//           scale: [0.2],
//           timing: { duration: 800, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('leave', 'start')}, 
//             end: () => {animationState.update('leave', 'end')}
//            }
//         })}
//       >
//         {nodes => (
//           <div style={{ position: 'relative' }}>
//             {nodes.map((props) => {
//               let { key, data, type, state: { opacity, translateY, scale } } = props;
//               console.log("pageRendering props anim state " + animationState.state, props);
//               // Here, we override the router context with the one that was
//               // passed with each route scale(${scale}, ${scale}) 
//               //console.log(`animating map ${key} with opacity ${opacity} and scaleY ${scale} and rotate ${rotate}`);
//               //animationState={animationState.state} 
//               const PreservedRouterContext = withContext(
//                 {
//                   router: PropTypes.object,
//                 },
//                 () => ({
//                   router: data.router,
//                 }),
//               )(props => <div {...props} />)

//               return (
//                   // <data.Comp key={key}
//                   // style={{
//                   //   position: 'absolute',
//                   //   top: 0,
//                   //   right: 0,
//                   //   bottom: 0,
//                   //   left: 0,
//                   //   transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
//                   //   opacity,
//                   // }}
//                   // animationState={animationState.state}  />
//                 <PreservedRouterContext
//                   key={key}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     bottom: 0,
//                     left: 0,
//                     transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
//                     opacity,
//                   }}
//                 >
//                   <data.Comp  {...data.props} />
//                 </PreservedRouterContext>
//               )
//             })}
//           </div>
//         )}
//       </NodeGroup>
//       )
//     }}
//   />
// ))


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
            { style: { position: 'relative' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 324
              }
            },
            _react2.default.createElement(Comp, _extends({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 325
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
            lineNumber: 338
          }
        }));
      });
      return _react2.default.createElement(
        PreservedRouterContext,
        {
          style: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'pink'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          }
        },
        _react2.default.createElement(
          _FadeIn2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 350
            }
          },
          _react2.default.createElement(Comp, _extends({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 351
            }
          }))
        )
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
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
            lineNumber: 421
          }
        },
        _react2.default.createElement(
          _reactStatic.Router,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 422
            }
          },
          _react2.default.createElement(
            'div',
            { style: { position: 'relative' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 423
              }
            },
            _react2.default.createElement(_Analytics2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 424
              }
            }),
            _react2.default.createElement(_Gapi2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 425
              }
            }),
            _react2.default.createElement(
              _styledComponents.ThemeProvider,
              { theme: this.state.myTheme, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 426
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
                    lineNumber: 427
                  }
                },
                _react2.default.createElement(
                  Top,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 435
                    }
                  },
                  _react2.default.createElement(_Ma2.default, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 436
                    }
                  })
                ),
                _react2.default.createElement(
                  Content,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 442
                    }
                  },
                  _react2.default.createElement(_reactStaticRoutes2.default, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 443
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
// const Top = styled.div`
//     display:table-row; 
//     width:100%
//     background-color:red;
// `
// const Content = styled.div`
// background-color:yellow;
//     display:table-row;
//     width:100%;
//     max-height: 100%;
// `
// const Root = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: table;
//   background-color: ${props => props.theme[props.theme.theme].neutral};
// `

/*overflow: hidden;
    width: 100%;
  height: 100vh;
    top: 0; left: 0; right: 0; bottom: 0;
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

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(7);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(8);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(9);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\dist\\react-static-routes.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(51);

var _reactUniversalComponent = __webpack_require__(52);

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
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 28)), (0, _importCss3.default)('src/containers/Posts.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Posts.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
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
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Games',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 36)), (0, _importCss3.default)('src/containers/Games', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Games');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return 'src/containers/Games';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Game',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 38)), (0, _importCss3.default)('src/containers/Game', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Game');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return 'src/containers/Game';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About.jsx',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 41)), (0, _importCss3.default)('src/containers/About.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(41);
  },
  chunkName: function chunkName() {
    return 'src/containers/About.jsx';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404.jsx',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 42)), (0, _importCss3.default)('src/containers/404.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
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
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(53);

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

var _reportChunks = __webpack_require__(54);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(55);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(24);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(24);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

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
/* 55 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0eiIvPgogICAgPHBhdGggIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNOSAxNi4yTDQuOCAxMmwtMS40IDEuNEw5IDE5IDIxIDdsLTEuNC0xLjRMOSAxNi4yeiIvPgo8L3N2Zz4K"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTkgOGwtNCA0aDNjMCAzLjMxLTIuNjkgNi02IDYtMS4wMSAwLTEuOTctLjI1LTIuOC0uN2wtMS40NiAxLjQ2QzguOTcgMTkuNTQgMTAuNDMgMjAgMTIgMjBjNC40MiAwIDgtMy41OCA4LThoM2wtNC00ek02IDEyYzAtMy4zMSAyLjY5LTYgNi02IDEuMDEgMCAxLjk3LjI1IDIuOC43bDEuNDYtMS40NkMxNS4wMyA0LjQ2IDEzLjU3IDQgMTIgNGMtNC40MiAwLTggMy41OC04IDhIMWw0IDQgNC00SDZ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo="

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik04LjU5LDE2LjU5TDEzLjE3LDEyTDguNTksNy40MUwxMCw2bDYsNmwtNiw2TDguNTksMTYuNTl6Ii8+Cgk8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTcgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWN2wtNC00em0tNSAxNmMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDN6bTMtMTBINVY1aDEwdjR6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjB2MjBIMFYweiIvPgogICAgPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNS45NSAxMC43OGMuMDMtLjI1LjA1LS41MS4wNS0uNzhzLS4wMi0uNTMtLjA2LS43OGwxLjY5LTEuMzJjLjE1LS4xMi4xOS0uMzQuMS0uNTFsLTEuNi0yLjc3Yy0uMS0uMTgtLjMxLS4yNC0uNDktLjE4bC0xLjk5LjhjLS40Mi0uMzItLjg2LS41OC0xLjM1LS43OEwxMiAyLjM0Yy0uMDMtLjItLjItLjM0LS40LS4zNEg4LjRjLS4yIDAtLjM2LjE0LS4zOS4zNGwtLjMgMi4xMmMtLjQ5LjItLjk0LjQ3LTEuMzUuNzhsLTEuOTktLjhjLS4xOC0uMDctLjM5IDAtLjQ5LjE4bC0xLjYgMi43N2MtLjEuMTgtLjA2LjM5LjEuNTFsMS42OSAxLjMyYy0uMDQuMjUtLjA3LjUyLS4wNy43OHMuMDIuNTMuMDYuNzhMMi4zNyAxMi4xYy0uMTUuMTItLjE5LjM0LS4xLjUxbDEuNiAyLjc3Yy4xLjE4LjMxLjI0LjQ5LjE4bDEuOTktLjhjLjQyLjMyLjg2LjU4IDEuMzUuNzhsLjMgMi4xMmMuMDQuMi4yLjM0LjQuMzRoMy4yYy4yIDAgLjM3LS4xNC4zOS0uMzRsLjMtMi4xMmMuNDktLjIuOTQtLjQ3IDEuMzUtLjc4bDEuOTkuOGMuMTguMDcuMzkgMCAuNDktLjE4bDEuNi0yLjc3Yy4xLS4xOC4wNi0uMzktLjEtLjUxbC0xLjY3LTEuMzJ6TTEwIDEzYy0xLjY1IDAtMy0xLjM1LTMtM3MxLjM1LTMgMy0zIDMgMS4zNSAzIDMtMS4zNSAzLTMgM3oiLz4KPC9zdmc+Cg=="

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICA8cGF0aCBkPSJNNy40MSAxNS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6Ii8+DQogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPg0KPC9zdmc+DQo="

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICA8cGF0aCBkPSJNOCA1djE0bDExLTd6Ii8+DQogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPg0KPC9zdmc+DQo="

/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\CenterBox.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: table;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n'], ['\n    display: table;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: table-cell;\n    vertical-align: middle;\n'], ['\n    display: table-cell;\n    vertical-align: middle;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    margin-left: auto;\n    margin-right: auto;\n'], ['\n    margin-left: auto;\n    margin-right: auto;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CenterBox = function (_React$PureComponent) {
    _inherits(CenterBox, _React$PureComponent);

    function CenterBox() {
        _classCallCheck(this, CenterBox);

        return _possibleConstructorReturn(this, (CenterBox.__proto__ || Object.getPrototypeOf(CenterBox)).apply(this, arguments));
    }

    _createClass(CenterBox, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Box,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                _react2.default.createElement(
                    Center,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    _react2.default.createElement(
                        Child,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            }
                        },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return CenterBox;
}(_react2.default.PureComponent);

CenterBox.displayName = 'CenterBox';
exports.default = CenterBox;


var Box = _styledComponents2.default.div(_templateObject);

var Center = _styledComponents2.default.div(_templateObject2);

var Child = _styledComponents2.default.div(_templateObject3);

/***/ }),
/* 66 */
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\animations\\SlideDown.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    span div {\n        background-color: pink;\n        opacity: 1;\n    }\n    span{\n        display: block;\n        position: relative;\n    }\n\n    span .slide-down-enter{\n        transform: translate(0px, -1000px);\n        background-color:green;\n    }\n    span .slide-down-enter-active{\n        transform: translate(0px, 0px);\n        background-color: orange !important;\n    }\n\n    span .slide-down-appear{\n        transform: translate(0px, -1000px);\n        background-color: red;\n        opacity: 0;\n    }\n    span .slide-down-appear-active{\n        transform: translate(0px, 0px);\n        background-color: blue;\n        opacity: 1;\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        ', '\n    }\n\n    span .slide-down-leave{\n        transform: translate(0px, 0px);\n    }\n    span .slide-down-leave-active{\n        transform: translate(0px, -1000px);\n    }\n\n'], ['\n    span div {\n        background-color: pink;\n        opacity: 1;\n    }\n    span{\n        display: block;\n        position: relative;\n    }\n\n    span .slide-down-enter{\n        transform: translate(0px, -1000px);\n        background-color:green;\n    }\n    span .slide-down-enter-active{\n        transform: translate(0px, 0px);\n        background-color: orange !important;\n    }\n\n    span .slide-down-appear{\n        transform: translate(0px, -1000px);\n        background-color: red;\n        opacity: 0;\n    }\n    span .slide-down-appear-active{\n        transform: translate(0px, 0px);\n        background-color: blue;\n        opacity: 1;\n        transition-property: all;\n        transition-timing-function: ease-out;\n        transition-duration: ', 'ms;\n        ', '\n    }\n\n    span .slide-down-leave{\n        transform: translate(0px, 0px);\n    }\n    span .slide-down-leave-active{\n        transform: translate(0px, -1000px);\n    }\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAddonsCssTransitionGroup = __webpack_require__(30);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _MyLog = __webpack_require__(13);

var _MyLog2 = _interopRequireDefault(_MyLog);

var _propTypes = __webpack_require__(3);

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
    (0, _MyLog2.default)('log', 'Slidedown offset ' + offset + ' duration ' + duration + ' delay ' + childDelay + ' \n    child length ' + childLength + ' time ' + time);
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
                { offset: this.props.offset, duration: this.props.duration, childDelay: this.props.childDelay,
                    childLength: this.props.children.length + 1, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                _react2.default.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    },
                    'Slide'
                ),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: 'slide-down',
                        transitionAppear: true,
                        transitionEnter: true,
                        transitionAppearTimeout: this.state.time,
                        transitionEnterTimeout: this.state.time,
                        transitionLeaveTimeout: this.state.time,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
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
    return props.duration;
}, function (props) {
    var val = '';
    for (var i = 1; i <= props.childLength; i++) {
        val += '&:nth-child(' + i + '){\n                    transition-delay: ' + props.childDelay * i + 'ms;\n                }';
    }
    console.log("nth child " + val);
    return val;
});

/*
transition-property: all;
        transition-duration: ${props => calcTime(props.offset, props.duration, props.childDelay, props.childLength)}ms;

    span .slide-down-appear-active{
        transform: translate(0px, 0px);
        background-color: blue;
        transition: all  ${props => calcTime(props.offset, props.duration, props.childDelay, props.childLength)}ms;
    }


    ${props => {
        let val = ``;
        for(let i = 0; i<2; i++){
            val += `span div:nth-child(${i}){
                transition-delay: ${props.childDelay*i}ms;
            }`;
            console.log("nth child " + val);
            
        }
        return val;
    }}

    span .slide-down-enter{
        transform: translate(0px, -1000px);
        background-color: red !important;
    }
    span .slide-down-enter-active{
        transform: translate(0px, 0px);
        background-color: blue !important;
    }
*/

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Background.jsx';

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Flexbox.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: ', '\n    height: ', '\n    display: flex;\n    flex-direction: ', '\n'], ['\n    width: ', '\n    height: ', '\n    display: flex;\n    flex-direction: ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flex = function (_React$Component) {
    _inherits(Flex, _React$Component);

    function Flex() {
        _classCallCheck(this, Flex);

        return _possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
    }

    _createClass(Flex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Box,
                { height: this.props.height, width: this.props.width,
                    direction: this.props.direction, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                this.props.children
            );
        }
    }]);

    return Flex;
}(_react2.default.Component);

exports.default = Flex;


var Box = _styledComponents2.default.div(_templateObject, function (props) {
    return props.width ? props.width : 'inherit';
}, function (props) {
    return props.height ? props.height : 'inherit';
}, function (props) {
    return props.direction ? props.direction : 'row';
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(7);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(8);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(9);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\Trends.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _trends = __webpack_require__(71);

var _trends2 = _interopRequireDefault(_trends);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Loading = __webpack_require__(25);

var _Loading2 = _interopRequireDefault(_Loading);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _Text = __webpack_require__(33);

var _Text2 = _interopRequireDefault(_Text);

var _Table = __webpack_require__(34);

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
                file: 'D:/websites/react-static/static-site-2/4/src/components/Trends.jsx',
                load: function load() {
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(6);
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
                // <div style={{display: 'table', height:'100%', width: '95%', margin: 'auto', padding: '10px'}} >
                //     <p style={{display: 'table-row', margin: '0px', textAlign: 'center'}}>Google Search Trends for Subjects</p>
                //     <div style={{display: 'table-row', height:'100%', width:'100%'}}>
                //         <ResponsiveContainer>
                //                 <LineChart data={Trends}
                //                     padding={{top: 0, right: 0, left: 0, bottom: 0}}
                //                     margin={{top: 20, right: 20, left: -20, bottom: 50}}>
                //                     <XAxis dataKey="Month" label={{ value: "Year-Month", offset: 25, angle: 0, position: 'bottom'}} 
                //                     tickFormatter={(t) => {return t.slice(2)}}  angle={-45} textAnchor="end" />
                //                     <YAxis/>
                //                     <CartesianGrid strokeDasharray="1 6"/>
                //                     <Tooltip/>
                //                     <Legend verticalAlign="top" height={36} />
                //                     <Line type="monotone" dot={false} dataKey="math: (Worldwide)" fill='#8884d8' stroke='#8884d8' strokeWidth={3}/>
                //                     <Line type="monotone" dot={false} dataKey="physics: (Worldwide)" stroke="#82ca9d" strokeWidth={3}/>
                //                 </LineChart>
                //         </ResponsiveContainer>
                //     </div>
                // </div>
                _react2.default.createElement(
                    _Table2.default,
                    { heights: [null, '100%'], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    _react2.default.createElement(
                        'p',
                        { style: { textAlign: 'center' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 65
                            }
                        },
                        'Google Search Trends for Subjects'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { height: '97%', width: '95%', margin: 'auto' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        },
                        _react2.default.createElement(
                            ResponsiveContainer,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 67
                                }
                            },
                            _react2.default.createElement(
                                LineChart,
                                { data: _trends2.default,
                                    padding: { top: 0, right: 0, left: 0, bottom: 0 },
                                    margin: { top: 20, right: 20, left: -20, bottom: 50 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 68
                                    }
                                },
                                _react2.default.createElement(XAxis, { dataKey: 'Month', label: { value: "Year-Month", offset: 25, angle: 0, position: 'bottom' },
                                    tickFormatter: function tickFormatter(t) {
                                        return t.slice(2);
                                    }, angle: -45, textAnchor: 'end', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 71
                                    }
                                }),
                                _react2.default.createElement(YAxis, {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 73
                                    }
                                }),
                                _react2.default.createElement(CartesianGrid, { strokeDasharray: '1 6', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 74
                                    }
                                }),
                                _react2.default.createElement(Tooltip, {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 75
                                    }
                                }),
                                _react2.default.createElement(Legend, { verticalAlign: 'top', height: 36, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 76
                                    }
                                }),
                                _react2.default.createElement(Line, { type: 'monotone', dot: false, dataKey: 'math: (Worldwide)', fill: '#8884d8', stroke: '#8884d8', strokeWidth: 3, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 77
                                    }
                                }),
                                _react2.default.createElement(Line, { type: 'monotone', dot: false, dataKey: 'physics: (Worldwide)', stroke: '#82ca9d', strokeWidth: 3, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 78
                                    }
                                })
                            )
                        )
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
                            lineNumber: 91
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
                            lineNumber: 93
                        }
                    },
                    _react2.default.createElement(_Loading2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
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
/* 71 */
/***/ (function(module, exports) {

module.exports = [{"Month":"2004-01","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":100},{"Month":"2004-02","math: (Worldwide)":37,"physics: (Worldwide)":22,"chemistry: (Worldwide)":22,"biology: (Worldwide)":18,"science: (Worldwide)":98},{"Month":"2004-03","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":20,"biology: (Worldwide)":17,"science: (Worldwide)":90},{"Month":"2004-04","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":20,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-05","math: (Worldwide)":33,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":15,"science: (Worldwide)":77},{"Month":"2004-06","math: (Worldwide)":27,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":68},{"Month":"2004-07","math: (Worldwide)":21,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2004-08","math: (Worldwide)":24,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":68},{"Month":"2004-09","math: (Worldwide)":37,"physics: (Worldwide)":19,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":87},{"Month":"2004-10","math: (Worldwide)":37,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":17,"science: (Worldwide)":86},{"Month":"2004-11","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-12","math: (Worldwide)":30,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":13,"science: (Worldwide)":72},{"Month":"2005-01","math: (Worldwide)":34,"physics: (Worldwide)":18,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":87},{"Month":"2005-02","math: (Worldwide)":35,"physics: (Worldwide)":18,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":88},{"Month":"2005-03","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":79},{"Month":"2005-04","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-05","math: (Worldwide)":32,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":71},{"Month":"2005-06","math: (Worldwide)":28,"physics: (Worldwide)":15,"chemistry: (Worldwide)":16,"biology: (Worldwide)":12,"science: (Worldwide)":63},{"Month":"2005-07","math: (Worldwide)":20,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2005-08","math: (Worldwide)":24,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2005-09","math: (Worldwide)":36,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":74},{"Month":"2005-10","math: (Worldwide)":35,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":76},{"Month":"2005-11","math: (Worldwide)":33,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-12","math: (Worldwide)":27,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":63},{"Month":"2006-01","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":76},{"Month":"2006-02","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":74},{"Month":"2006-03","math: (Worldwide)":32,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":70},{"Month":"2006-04","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":64},{"Month":"2006-05","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":61},{"Month":"2006-06","math: (Worldwide)":26,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2006-07","math: (Worldwide)":18,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2006-08","math: (Worldwide)":23,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":55},{"Month":"2006-09","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":69},{"Month":"2006-10","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":65},{"Month":"2006-11","math: (Worldwide)":30,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":61},{"Month":"2006-12","math: (Worldwide)":26,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2007-01","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":65},{"Month":"2007-02","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":62},{"Month":"2007-03","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":62},{"Month":"2007-04","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2007-05","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2007-06","math: (Worldwide)":24,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2007-07","math: (Worldwide)":18,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":44},{"Month":"2007-08","math: (Worldwide)":21,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2007-09","math: (Worldwide)":31,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":57},{"Month":"2007-10","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":60},{"Month":"2007-11","math: (Worldwide)":29,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2007-12","math: (Worldwide)":25,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-01","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-02","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-03","math: (Worldwide)":27,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2008-04","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2008-05","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-06","math: (Worldwide)":24,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2008-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2008-08","math: (Worldwide)":21,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2008-09","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2008-10","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":51},{"Month":"2008-11","math: (Worldwide)":29,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2008-12","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2009-01","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":53},{"Month":"2009-02","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2009-03","math: (Worldwide)":32,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2009-04","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2009-05","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2009-06","math: (Worldwide)":26,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":44},{"Month":"2009-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":38},{"Month":"2009-08","math: (Worldwide)":22,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2009-09","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2009-10","math: (Worldwide)":34,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-11","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-12","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2010-01","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2010-02","math: (Worldwide)":35,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-03","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-04","math: (Worldwide)":35,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2010-05","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2010-06","math: (Worldwide)":30,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2010-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":39},{"Month":"2010-08","math: (Worldwide)":23,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2010-09","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2010-10","math: (Worldwide)":38,"physics: (Worldwide)":13,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-11","math: (Worldwide)":39,"physics: (Worldwide)":13,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-12","math: (Worldwide)":34,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2011-01","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2011-02","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":47},{"Month":"2011-03","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2011-04","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2011-05","math: (Worldwide)":42,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2011-06","math: (Worldwide)":33,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2011-07","math: (Worldwide)":20,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":36},{"Month":"2011-08","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2011-09","math: (Worldwide)":40,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":48},{"Month":"2011-10","math: (Worldwide)":43,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2011-11","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2011-12","math: (Worldwide)":41,"physics: (Worldwide)":10,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2012-01","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2012-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2012-03","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-05","math: (Worldwide)":59,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-06","math: (Worldwide)":40,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2012-07","math: (Worldwide)":26,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2012-08","math: (Worldwide)":31,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2012-09","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":47},{"Month":"2012-10","math: (Worldwide)":50,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2012-12","math: (Worldwide)":48,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":35},{"Month":"2013-01","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-02","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-03","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2013-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2013-05","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":40},{"Month":"2013-06","math: (Worldwide)":37,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2013-07","math: (Worldwide)":23,"physics: (Worldwide)":7,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2013-08","math: (Worldwide)":28,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2013-09","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2013-10","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2013-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2013-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":36},{"Month":"2014-01","math: (Worldwide)":45,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2014-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":42},{"Month":"2014-04","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-05","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-06","math: (Worldwide)":37,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2014-07","math: (Worldwide)":22,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2014-08","math: (Worldwide)":29,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2014-09","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2014-10","math: (Worldwide)":56,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2014-11","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-12","math: (Worldwide)":47,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2015-01","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-02","math: (Worldwide)":53,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2015-04","math: (Worldwide)":51,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2015-05","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2015-06","math: (Worldwide)":36,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2015-07","math: (Worldwide)":21,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2015-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2015-09","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2015-10","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-11","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-01","math: (Worldwide)":43,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2016-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2016-03","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-04","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-05","math: (Worldwide)":49,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-06","math: (Worldwide)":31,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2016-07","math: (Worldwide)":18,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":33},{"Month":"2016-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-09","math: (Worldwide)":55,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2016-10","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-11","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":44},{"Month":"2016-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2017-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2017-02","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2017-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2017-04","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2017-05","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-06","math: (Worldwide)":30,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2017-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2017-08","math: (Worldwide)":32,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2017-09","math: (Worldwide)":53,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":45},{"Month":"2017-10","math: (Worldwide)":55,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-11","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2017-12","math: (Worldwide)":46,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2018-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-02","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2018-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-04","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":42},{"Month":"2018-05","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2018-06","math: (Worldwide)":33,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38}]

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".fade-in-enter{opacity:.01}.fade-in-enter.fade-in-enter-active{opacity:1;-webkit-transition:opacity .5s ease-in;-o-transition:opacity .5s ease-in;transition:opacity .5s ease-in}.fade-in-leave{opacity:1}.fade-in-leave.fade-in-leave-active{opacity:.01;-webkit-transition:opacity .3s ease-in;-o-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.fade-in-appear{opacity:.01}.fade-in-appear.fade-in-appear-active{opacity:1;-webkit-transition:opacity .5s ease-in;-o-transition:opacity .5s ease-in;transition:opacity .5s ease-in}", ""]);

// exports


/***/ }),
/* 73 */
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

var _Accordion = __webpack_require__(37);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _IconButton = __webpack_require__(12);

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
/* 74 */
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\game\\Index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Store = __webpack_require__(76);

var _Store2 = _interopRequireDefault(_Store);

var _Game = __webpack_require__(77);

var _Game2 = _interopRequireDefault(_Game);

var _samplegame = __webpack_require__(20);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\game\\Store.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(14);

var _reduxLogger = __webpack_require__(39);

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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(7);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(8);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(9);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\game\\Game.jsx';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _all = __webpack_require__(78);

var _all2 = _interopRequireDefault(_all);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _Accordion = __webpack_require__(37);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mygamelibs = __webpack_require__(79);

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
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 40)), (0, _importCss3.default)('UI/math/Katex.jsx', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, './../UI/math/Katex.jsx');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(40);
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
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(6);
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
/* 78 */
/***/ (function(module, exports) {

module.exports = require("nerdamer/all");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("mygamelibs");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("katex/dist/katex.min.css");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _reduxLogger = __webpack_require__(39);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(82);

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _counter = __webpack_require__(83);

var _counter2 = _interopRequireDefault(_counter);

var _apiReducer = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  counter: _counter2.default,
  gapi: _apiReducer.reducer
});

exports.default = reducer;

/***/ }),
/* 83 */
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{font-family:Raleway,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}a{text-decoration:none;color:#108db8;font-weight:700}img{max-width:100%}.recharts-legend-item-text{color:grey}", ""]);

// exports


/***/ }),
/* 85 */
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
    menuHeight: '100px'
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
    menuHeight: '100px'
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
    menuHeight: '100px'
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGa = __webpack_require__(16);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Analytics = function (_React$Component) {
    _inherits(Analytics, _React$Component);

    function Analytics(props) {
        _classCallCheck(this, Analytics);

        return _possibleConstructorReturn(this, (Analytics.__proto__ || Object.getPrototypeOf(Analytics)).call(this, props));
        // console.log("analytics constructor");
    }

    _createClass(Analytics, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //console.log("init react-ga");
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(14);

var _apiReducer = __webpack_require__(43);

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\animations\\Page.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _State = __webpack_require__(89);

var _State2 = _interopRequireDefault(_State);

var _d3Ease = __webpack_require__(10);

var _reactMove = __webpack_require__(44);

var _recompose = __webpack_require__(21);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactMove.NodeGroup
        // React-move will handle the entry and exit of any items we pass in `data`
        ,
        { data: [{
            // pass the current Comp, props, ID and router
            id: this.props.props.location.pathname,
            Comp: this.props.comp,
            props: this.props.props,
            router: this.props.router
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
                  _State2.default.update('start', 'start');
                },
                end: function end() {
                  _State2.default.update('start', 'end');
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
                  _State2.default.update('enter', 'start');
                },
                end: function end() {
                  _State2.default.update('enter', 'end');
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
                  _State2.default.update('update', 'start');
                },
                end: function end() {
                  _State2.default.update('update', 'end');
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
                  _State2.default.update('leave', 'start');
                },
                end: function end() {
                  _State2.default.update('leave', 'end');
                }
              }
            };
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        function (nodes) {
          return _react2.default.createElement(
            'div',
            { style: { position: 'relative' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
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

              console.log("pageRendering props anim state " + _State2.default.state, props);
              // Here, we override the router context with the one that was
              // passed with each route scale(${scale}, ${scale}) 
              //console.log(`animating map ${key} with opacity ${opacity} and scaleY ${scale} and rotate ${rotate}`);
              //animationState={animationState.state} 
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
                    lineNumber: 77
                  }
                }));
              });

              return _react2.default.createElement(data.Comp, { key: key,
                style: {
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  transform: 'translateY(' + translateY + 'px) scale(' + scale + ', ' + scale + ')',
                  opacity: opacity
                },
                animationState: _State2.default.state, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              })
              //   <PreservedRouterContext
              //     key={key}
              //     style={{
              //       position: 'absolute',
              //       top: 0,
              //       right: 0,
              //       bottom: 0,
              //       left: 0,
              //       transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
              //       opacity,
              //     }}
              //   >
              //     <data.Comp  />
              //   </PreservedRouterContext>
              ;
            })
          );
        }
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = animationState;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = 'D:\\websites\\react-static\\static-site-2\\4\\src\\components\\layout\\Ma.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: absolute;\n    z-index: 100; \n    padding: 10px; \n    background-color: white;\n    .active {\n        h4 {\n            color: ', ' !important;\n        }\n    }\n    .drop-item{\n        display:block;\n        h4 {\n            color: ', ';\n        }\n        &:hover{\n            background-color: grey;\n        }\n    }\n\n'], ['\n    position: absolute;\n    z-index: 100; \n    padding: 10px; \n    background-color: white;\n    .active {\n        h4 {\n            color: ', ' !important;\n        }\n    }\n    .drop-item{\n        display:block;\n        h4 {\n            color: ', ';\n        }\n        &:hover{\n            background-color: grey;\n        }\n    }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    color: ', ';\n    padding-left: ', 'px;\n    display: inline-block;\n'], ['\n    font-size: ', ';\n    color: ', ';\n    padding-left: ', 'px;\n    display: inline-block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: inline;\n    padding: 0px 10px;\n    a{\n        color: ', ';\n    }\n    a.active{\n        color: ', ';\n    }\n'], ['\n    display: inline;\n    padding: 0px 10px;\n    a{\n        color: ', ';\n    }\n    a.active{\n        color: ', ';\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: inline-block;\n    flex: 1;\n    transition: all ', ' ease;\n'], ['\n    display: inline-block;\n    flex: 1;\n    transition: all ', ' ease;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    vertical-align: bottom;\n    transition: all ', ' ease;\n    h1, h2, p, h4, a{\n        line-height:50px;\n        height: 100%;\n        margin:0px auto;\n        padding:0px;\n        display: inline-block;\n        vertical-align: middle;\n        color: ', ';\n    }\n    .title{\n        h2:{\n            color: ', '\n        }\n        &:hover{\n            background-color: white;\n        }\n    }\n    a{\n        padding:0 10px;\n        color: ', ';\n        transition: all ', ' ease;\n        &:hover{\n            background-color: ', ';\n        }\n    }\n    a.active{\n        background-color: ', ';\n        color: ', '\n        &:hover{\n            background-color: ', ';\n        }\n    }  \n'], ['\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    vertical-align: bottom;\n    transition: all ', ' ease;\n    h1, h2, p, h4, a{\n        line-height:50px;\n        height: 100%;\n        margin:0px auto;\n        padding:0px;\n        display: inline-block;\n        vertical-align: middle;\n        color: ', ';\n    }\n    .title{\n        h2:{\n            color: ', '\n        }\n        &:hover{\n            background-color: white;\n        }\n    }\n    a{\n        padding:0 10px;\n        color: ', ';\n        transition: all ', ' ease;\n        &:hover{\n            background-color: ', ';\n        }\n    }\n    a.active{\n        background-color: ', ';\n        color: ', '\n        &:hover{\n            background-color: ', ';\n        }\n    }  \n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    background-color: ', ';\n'], ['\n    background-color: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    width:100%;\n    height: 50px;\n    display: flex;\n    padding:0 0px;\n    margin:0 0 0px 0;\n   \n'], ['\n    width:100%;\n    height: 50px;\n    display: flex;\n    padding:0 0px;\n    margin:0 0 0px 0;\n   \n']),
    _templateObject8 = _taggedTemplateLiteral(['\n\n    z-index: 1000;\n    width:100%;\n   \n    background: ', ';\n    padding:0px;\n    margin:0;\n    border-bottom: 2px solid ', ';\n'], ['\n\n    z-index: 1000;\n    width:100%;\n   \n    background: ', ';\n    padding:0px;\n    margin:0;\n    border-bottom: 2px solid ', ';\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n    verticalAlign: middle; \n    transform-origin: 50%;\n    transition: transform ', ' ease;\n    display: inline-block; \n'], ['\n    verticalAlign: middle; \n    transform-origin: 50%;\n    transition: transform ', ' ease;\n    display: inline-block; \n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(91);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Animate = __webpack_require__(26);

var _Animate2 = _interopRequireDefault(_Animate);

var _d3Ease = __webpack_require__(10);

var _recompose = __webpack_require__(21);

var _IconButton = __webpack_require__(12);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// //import StaticRouteimport, import { StaticRouter } from 'react-router';
// import { StaticRouter } from 'react-router';
// import { error } from 'util';
// { throwErrorIfRouteIsMissingPath } from 'react-static/lib/static/getConfig';


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
                            lineNumber: 49
                        }
                    },
                    _react2.default.createElement(_IconButton2.default, { icon: "arrow", bg: 'transparent', hover: 'transparent', onInput: function onInput() {
                            _this2.handleClick('cat', false);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    })
                );
            } else {
                return _react2.default.createElement(
                    Wrapper,
                    { style: { transform: 'rotate(0deg)' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    },
                    _react2.default.createElement(_IconButton2.default, { icon: "arrow", bg: 'transparent', hover: 'transparent', onInput: function onInput() {
                            _this2.handleClick('cat', true);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
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
                            lineNumber: 63
                        }
                    },
                    this.state.categories.map(function (c) {
                        return _react2.default.createElement(
                            _reactStatic.Link,
                            { className: 'drop-item', to: '/' + c, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 65
                                }
                            },
                            _react2.default.createElement(
                                'h4',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 66
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
                            lineNumber: 75
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
                                        lineNumber: 78
                                    }
                                },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + t, className: 'active', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 78
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
                                        lineNumber: 80
                                    }
                                },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + t, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 80
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
                            lineNumber: 89
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
                            lineNumber: 92
                        }
                    },
                    this.state.path[1] ? this.state.path[1] : ''
                );
            }
        }
    }, {
        key: 'throwError',
        value: function throwError() {
            // throw new Error('simulated error cast');
            //    try{
            //        throw new Error('simulated error cast');
            //    }catch(e){
            //       // console.log("fuck fixing that");
            //        throw e;
            //       // return true;
            //    }
            //an error thrown in render seems to trigger component boundary error, throwing one in action triggers regular
            this.setState({
                triggerError: true
            });
        }
    }, {
        key: 'renderError',
        value: function renderError() {
            if (this.state.triggerError) {
                return this.state.error.trigger;
            }
            return null;
        }
    }, {
        key: 'renderCat',
        value: function renderCat() {
            var _this4 = this;

            //this.state.path[0]
            if (false) {
                return _react2.default.createElement(
                    Outer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 119
                        }
                    },
                    this.renderError(),
                    _react2.default.createElement(
                        Container,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 121
                            }
                        },
                        _react2.default.createElement(
                            FlexChild,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 122
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { exact: true, to: '/', className: 'title', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 122
                                    }
                                },
                                _react2.default.createElement(
                                    'h2',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 122
                                        }
                                    },
                                    'Title'
                                )
                            )
                        ),
                        _react2.default.createElement(Mid, { key: "mid", style: { flex: '0' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 123
                            }
                        }),
                        _react2.default.createElement(
                            FlexChild,
                            { key: this.state.path[0] ? this.state.path[0] : '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 124
                                }
                            },
                            _react2.default.createElement(
                                Selected,
                                { style: { height: '50px', margin: 'auto' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 125
                                    }
                                },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + (this.state.path[0] ? this.state.path[0] : ''), __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 126
                                        }
                                    },
                                    _react2.default.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 127
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
                                    lineNumber: 134
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
                                lineNumber: 139
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
                            lineNumber: 144
                        }
                    },
                    this.renderError(),
                    _react2.default.createElement(
                        Container,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 146
                            }
                        },
                        _react2.default.createElement(
                            FlexChild,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 147
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { exact: true, to: '/', className: 'title', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 147
                                    }
                                },
                                _react2.default.createElement(
                                    'h2',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 147
                                        }
                                    },
                                    'Title'
                                )
                            )
                        ),
                        _react2.default.createElement(Mid, { key: "mid", style: { flex: '1' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 148
                            }
                        }),
                        _react2.default.createElement(
                            FlexChild,
                            { key: "games", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 149
                                }
                            },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick() {
                                        _this4.throwError();
                                    }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 149
                                    }
                                },
                                _react2.default.createElement(
                                    'h4',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 149
                                        }
                                    },
                                    'Throw'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            FlexChild,
                            { key: "games", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 150
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/games', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 150
                                    }
                                },
                                _react2.default.createElement(
                                    'h4',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 150
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
                                    lineNumber: 151
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/posts', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 151
                                    }
                                },
                                _react2.default.createElement(
                                    'h4',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 151
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
                                    lineNumber: 152
                                }
                            },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: '/about', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 152
                                    }
                                },
                                _react2.default.createElement(
                                    'h4',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 152
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
                                lineNumber: 155
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

Menu.displayName = 'Menu';
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

// position: fixed;
// height: ${props=>props.theme[props.theme.theme].menuHeight};
// left: 0; top:0; right:0;
var Outer = _styledComponents2.default.div(_templateObject8, function (props) {
    return props.theme[props.theme.theme].neutral;
}, function (props) {
    return props.theme[props.theme.theme].neutralL;
});

var Wrapper = _styledComponents2.default.div(_templateObject9, function (props) {
    return props.theme[props.theme.theme].animM;
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.50085666.js.map