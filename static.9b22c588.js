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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position:fixed;\n    top: 0;\n    left:0;\n    bottom:0;\n    right:0;\n    width: ', ';\n    margin: ', '\n    z-index: ', ';\n    overflow: ', '\n    background-color: ', '\n'], ['\n    position:fixed;\n    top: 0;\n    left:0;\n    bottom:0;\n    right:0;\n    width: ', ';\n    margin: ', '\n    z-index: ', ';\n    overflow: ', '\n    background-color: ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: ', ';\n    margin: ', '\n    background-color: ', '\n'], ['\n    width: ', ';\n    margin: ', '\n    background-color: ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = __webpack_require__(15);

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

        //if fill is true, fills 100% of space
        //takes zindex as a prop, defaults to 1
        //overflow property as prop, defaults to scroll
        var _this = _possibleConstructorReturn(this, (UiBg.__proto__ || Object.getPrototypeOf(UiBg)).call(this, props));

        console.log("Container UI constructor props", props);
        // let view = null;
        // if(!props.fill){
        //     view = styled.div`
        //         width: ${props => props.width? props.width:'100%'};
        //         margin: ${props => props.margin? props.margin:'0 0 0 0'}
        //         background-color: ${props => props.color? props.color:props.theme[props.theme.theme].neutral}
        //     `
        // }else{
        //     view = styled.div`
        //         position:fixed;
        //         top: 0;
        //         left:0;
        //         bottom:0;
        //         right:0;
        //         width: ${props => props.width? props.width:'inherit'};
        //         margin: ${props => props.margin? props.margin:'0 0 0 0'}
        //         z-index: ${props => props.z? props.z:1};
        //         overflow: ${props => props.overflow? props.overflow:'scroll-y'}
        //         background-color: ${props => props.color? props.color:props.theme[props.theme.theme].neutral}
        //     `

        // }
        // this.state = {
        //     view
        // }
        return _this;
    }

    _createClass(UiBg, [{
        key: 'render',
        value: function render() {
            // console.log("rendering game a");
            if (this.props.fill) {
                return _react2.default.createElement(
                    Bg,
                    { z: this.props.z, color: this.props.color, width: this.props.width,
                        margin: this.props.margin, overflow: this.props.overflow },
                    this.props.children
                );
            } else {
                return _react2.default.createElement(
                    Box,
                    { z: this.props.z, color: this.props.color, width: this.props.width,
                        margin: this.props.margin, overflow: this.props.overflow },
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
    return props.z ? props.z : 1;
}, function (props) {
    return props.overflow ? props.overflow : 'scroll-y';
}, function (props) {
    return props.color ? props.color : props.theme[props.theme.theme].neutral;
});
var Box = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.width ? props.width : '100%';
}, function (props) {
    return props.margin ? props.margin : '0 0 0 0';
}, function (props) {
    return props.color ? props.color : props.theme[props.theme.theme].neutral;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    \n    color: grey;\n    background: yellow;\n    vertical-align: middle;\n    a{\n        display: inline-block\n        vertical-align: middle;\n    }\n    a.active{\n        display: inline-block\n        background: red;\n        vertical-align: middle;\n    }\n'], ['\n    \n    color: grey;\n    background: yellow;\n    vertical-align: middle;\n    a{\n        display: inline-block\n        vertical-align: middle;\n    }\n    a.active{\n        display: inline-block\n        background: red;\n        vertical-align: middle;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline-block;\n    flex: 1;\n'], ['\n    display: inline-block;\n    flex: 1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    vertical-align: middle;\n    padding:0;\n    margin:0;\n    a{\n        display: inline-block;\n        line-height:50px;\n        padding:0 10px;\n        color: ', '\n        transition: all ', ' ease;\n        h1, h4{\n            margin:0;\n            padding:0;\n        }\n        &:hover{\n            background-color: white;\n        }\n    }\n    a.active{\n        background-color: ', ';\n        color: color: ', ';\n        &:hover{\n            background-color: ', ';\n        }\n    }  \n'], ['\n    display: inline-block;\n    align-self: center;\n    height:100%;\n    vertical-align: middle;\n    padding:0;\n    margin:0;\n    a{\n        display: inline-block;\n        line-height:50px;\n        padding:0 10px;\n        color: ', '\n        transition: all ', ' ease;\n        h1, h4{\n            margin:0;\n            padding:0;\n        }\n        &:hover{\n            background-color: white;\n        }\n    }\n    a.active{\n        background-color: ', ';\n        color: color: ', ';\n        &:hover{\n            background-color: ', ';\n        }\n    }  \n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: inline;\n    color: grey;\n    padding: 10px;\n    background: yellow;\n'], ['\n    display: inline;\n    color: grey;\n    padding: 10px;\n    background: yellow;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    width:100%;\n    height: 50px;\n    background: ', ';\n    display: flex;\n    padding:0 10px;\n    margin:0;\n'], ['\n    width:100%;\n    height: 50px;\n    background: ', ';\n    display: flex;\n    padding:0 10px;\n    margin:0;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 50px;\n    background: ', ';\n'], ['\n    width: 100%;\n    height: 50px;\n    background: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\nheight: 100%;\nwidth: 100%;\ndisplay: inline-block;\n'], ['\nheight: 100%;\nwidth: 100%;\ndisplay: inline-block;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    display: inline-block;\n    font-size: 1.1em;\n    transition: all 0.3s ease-in;\n    height: 100%;\n    margin: auto;\n    vertical-align: middle;\n    a {\n        div{\n            height: 100%;\n            width: 100%;\n        }\n        height: 100%;\n        width: 100%;\n        display: inline-block;\n        color: ', ';\n    };\n    a.active{\n        div{\n\n            height: 100%;\n            width: 100%;\n            background-color: ', ';\n        }\n        height: 100%;\n        width: 100%;\n        background-color: ', ';\n        display: inline-block;\n        color: ', '; \n    };\n'], ['\n    display: inline-block;\n    font-size: 1.1em;\n    transition: all 0.3s ease-in;\n    height: 100%;\n    margin: auto;\n    vertical-align: middle;\n    a {\n        div{\n            height: 100%;\n            width: 100%;\n        }\n        height: 100%;\n        width: 100%;\n        display: inline-block;\n        color: ', ';\n    };\n    a.active{\n        div{\n\n            height: 100%;\n            width: 100%;\n            background-color: ', ';\n        }\n        height: 100%;\n        width: 100%;\n        background-color: ', ';\n        display: inline-block;\n        color: ', '; \n    };\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(47);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = __webpack_require__(15);

var _Colors2 = _interopRequireDefault(_Colors);

var _AllComponents = __webpack_require__(48);

var _AllComponents2 = _interopRequireDefault(_AllComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import FoldOut from './../UI/elements/FoldOut.jsx';
// import PostList from './PostList.jsx';
// import Tags from './Tags.jsx';


var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Container,
                null,
                _react2.default.createElement(
                    FlexChild,
                    null,
                    _react2.default.createElement(
                        _reactStatic.Link,
                        { exact: true, to: '/' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            this.props.siteTitle
                        )
                    )
                ),
                _react2.default.createElement(Mid, null),
                _react2.default.createElement(
                    FlexChild,
                    null,
                    _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/games' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Games'
                        )
                    )
                ),
                _react2.default.createElement(
                    FlexChild,
                    null,
                    _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/posts' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Posts'
                        )
                    )
                ),
                _react2.default.createElement(
                    FlexChild,
                    null,
                    _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/about' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'About'
                        )
                    )
                )
            )
            // <Bar>
            //     <Title><Link exact to="/" >{this.props.siteTitle}</Link></Title>
            //     <div style={sMenu}>
            //         <Slinks><Link to="/games"><Inner>Games</Inner></Link></Slinks>
            //         <Slinks><Link to="/posts">Posts</Link></Slinks>
            //         <Slinks><Link to="/about">About</Link></Slinks>
            //     </div>
            // </Bar>
            ;
        }
    }]);

    return Menu;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withSiteData)(Menu);

var Tag = _styledComponents2.default.h4(_templateObject);
var Mid = _styledComponents2.default.span(_templateObject2);

var FlexChild = _styledComponents2.default.span(_templateObject3, function (props) {
    return props.theme[props.theme.theme].text;
}, function (props) {
    return props.theme[props.theme.theme].animS;
}, function (props) {
    return props.theme[props.theme.theme].accent;
}, function (props) {
    return props.theme[props.theme.theme].textInverted;
}, function (props) {
    return props.theme[props.theme.theme].accentL;
});
var Title = _styledComponents2.default.h1(_templateObject4);
var Container = _styledComponents2.default.div(_templateObject5, function (props) {
    return props.theme[props.theme.theme].neutralL;
});

var Bar = _styledComponents2.default.div(_templateObject6, function (props) {
    return props.theme[props.theme.theme].neutralD;
});

var sMenu = {
    display: 'inline-block',
    float: 'right',
    height: '100%'
    // const Title = styled.h1`
    //     display: inline-block;
    //     font-size: 1.8em;
    //     margin: 0px;
    //     a{
    //         color: ${props=>props.theme.accent};
    //     }
    //     a.active{
    //         background-color: ${props=>props.theme.accent};
    //         color: ${props => props.theme.textInverted};
    //     }
    // `
};var Inner = _styledComponents2.default.div(_templateObject7);
var Slinks = _styledComponents2.default.h2(_templateObject8, function (props) {
    return props.theme.text;
}, function (props) {
    return props.theme.accent;
}, function (props) {
    return props.theme.accent;
}, function (props) {
    return props.theme.textInverted;
});

/*
export interface NavLinkProps extends LinkProps {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?<P>(match: match<P>, location: H.Location): boolean;
    location?: H.Location;
}
*/

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    margin:auto;\n'], ['\n    margin:auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    text-transformation: capitalize;\n    text-align: center;\n'], ['\n    text-transformation: capitalize;\n    text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _MainMenu = __webpack_require__(5);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _IconButton = __webpack_require__(27);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TalkitGame = __webpack_require__(57);

var _TalkitGame2 = _interopRequireDefault(_TalkitGame);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

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
                    games[i] = _react2.default.createElement(_TalkitGame2.default, { tree: c.content });
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
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('react-katex', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'react-katex');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(19);
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
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(11);
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
                    null,
                    this.props.post.tags.map(function (t) {
                        return _react2.default.createElement(
                            'span',
                            null,
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
                            null,
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
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_MainMenu2.default, null),
                    _react2.default.createElement(
                        Title,
                        null,
                        this.props.post.title
                    ),
                    this.renderTags(),
                    this.renderContent(),
                    _react2.default.createElement(
                        Shareable,
                        null,
                        _react2.default.createElement(_IconButton2.default, { icon: "done" }),
                        _react2.default.createElement(_IconButton2.default, { icon: "delete" }),
                        _react2.default.createElement(_IconButton2.default, { icon: "cached" }),
                        _react2.default.createElement(_IconButton2.default, { icon: "save" })
                    )
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    .slide-up-enter{\n        transform: translate(0px, 100vh);\n        opacity: 0.1;\n    }\n    .slide-up-enter.slide-up-enter-active {\n        transform: translate(0px, 0vh);\n        transition: all 1s ease-out;\n        opacity: 0.1;\n    }\n\n    .slide-up-leave {\n        transform: translate(0px, 100vh);\n    }\n\n    .slide-up-leave.slide-up-leave-active {\n        transform: translate(0px, 0px);\n        transition:  all 1s ease-out;\n    }\n\n\n    .slide-up-appear {\n        transform: translate(0px, 100vh);\n        transition:  all 1s ease-out;\n    }\n    .slide-up-appear.slide-up-appear-active {\n        transform: translate(0px, 0vh);\n        transition:  all 1s ease-out;\n    }\n\n'], ['\n    .slide-up-enter{\n        transform: translate(0px, 100vh);\n        opacity: 0.1;\n    }\n    .slide-up-enter.slide-up-enter-active {\n        transform: translate(0px, 0vh);\n        transition: all 1s ease-out;\n        opacity: 0.1;\n    }\n\n    .slide-up-leave {\n        transform: translate(0px, 100vh);\n    }\n\n    .slide-up-leave.slide-up-leave-active {\n        transform: translate(0px, 0px);\n        transition:  all 1s ease-out;\n    }\n\n\n    .slide-up-appear {\n        transform: translate(0px, 100vh);\n        transition:  all 1s ease-out;\n    }\n    .slide-up-appear.slide-up-appear-active {\n        transform: translate(0px, 0vh);\n        transition:  all 1s ease-out;\n    }\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(25);

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
                Container,
                null,
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    {
                        transitionName: 'slide-up',
                        transitionAppear: true,
                        transitionAppearTimeout: 2000,
                        transitionEnterTimeout: 2000,
                        transitionLeaveTimeout: 2000 },
                    this.props.children
                )
            );
        }
    }]);

    return Trans;
}(_react2.default.Component);

exports.default = Trans;


var Container = _styledComponents2.default.span(_templateObject);
/*    .slide-up-appear {
        transform: translate(0px, 100vh);
        transition:  all 1s ease-out;
    }
    .slide-up-appear.slide-up-appear-active {
        transform: translate(0px, 0vh);
        transition:  all 1s ease-out;
    }

    .slide-up-appear-active a div{
        transform: translate(0px, 0vh);
        transition:  all 1s ease-out;
    }
    .slide-up-appear a div{
        transition:  all 1s ease-out;
        transform: translate(0px, 100vh);
    }



    .slide-up-appear-active a div{
        transition: all 1s ease-out;
        transform: rotate(0deg);
    }
    .slide-up-appear a div{
        transition: all 1s ease-out;
        transform: rotate(90deg);
    }
            &.slide-up-appear-active {
            transform: translate(0px, 0px);
        }
*/

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width:100%;\n    height:100%;\n    padding: 10px;\n'], ['\n    width:100%;\n    height:100%;\n    padding: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width:100%;\n  height:100%;\n  opacity:1;\n  margin: 10px 0px 0px 0px;\n  padding:10px 10px 3px 10px;\n  border-radius: 10px;\n  background-color:  ', ';\n  transition: all  ', ' ease-in;\n  &:hover{\n    background-color: white;\n  }\n  h2{\n    font-size: 1.5em;\n    display: inline;\n    color: ', ';\n    opacity:1;\n    text-transform: capitalize;\n    margin:0\n    background-color: red;\n  }\n  p{\n    font-size: 0.7em;\n    color: black;\n    opacity:1;\n    display: inline;\n    background-color: green;\n    text-align: right;\n    float: right;\n  }\n'], ['\n  width:100%;\n  height:100%;\n  opacity:1;\n  margin: 10px 0px 0px 0px;\n  padding:10px 10px 3px 10px;\n  border-radius: 10px;\n  background-color:  ', ';\n  transition: all  ', ' ease-in;\n  &:hover{\n    background-color: white;\n  }\n  h2{\n    font-size: 1.5em;\n    display: inline;\n    color: ', ';\n    opacity:1;\n    text-transform: capitalize;\n    margin:0\n    background-color: red;\n  }\n  p{\n    font-size: 0.7em;\n    color: black;\n    opacity:1;\n    display: inline;\n    background-color: green;\n    text-align: right;\n    float: right;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

var _SlideUp = __webpack_require__(10);

var _SlideUp2 = _interopRequireDefault(_SlideUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostList = function (_React$Component) {
    _inherits(PostList, _React$Component);

    function PostList() {
        _classCallCheck(this, PostList);

        return _possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).apply(this, arguments));
    }

    _createClass(PostList, [{
        key: 'render',
        value: function render() {
            if (this.props.posts) {
                return _react2.default.createElement(
                    Wrapper,
                    null,
                    this.props.posts.map(function (post, i) {
                        return _react2.default.createElement(
                            _reactStatic.Link,
                            { key: post.id, to: '/post/' + post.id, classNames: 'homepost' },
                            _react2.default.createElement(
                                _SlideUp2.default,
                                null,
                                _react2.default.createElement(
                                    Post,
                                    { key: post.id, style: { "transitionDelay": i * .15 + 's' } },
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        post.title
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: { color: 'grey' } },
                                        post.tags.map(function (t, i) {
                                            return i === 0 ? "" + t : ", " + t;
                                        })
                                    )
                                )
                            )
                        );
                    })
                );
            } else {
                return _react2.default.createElement(
                    'p',
                    null,
                    'No posts to render'
                );
            }
        }
    }]);

    return PostList;
}(_react2.default.Component);

exports.default = PostList;


var Wrapper = _styledComponents2.default.div(_templateObject);
var Post = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme[props.theme.theme].primary;
}, function (props) {
    return props.theme[props.theme.theme].animS;
}, function (props) {
    return props.theme[props.theme.theme].text;
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _IconButton = __webpack_require__(27);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _reactGa = __webpack_require__(18);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactRedux = __webpack_require__(3);

var _Button = __webpack_require__(56);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import themes from './../theme.js';
var aTheme = {
    theme: 'a',
    a: {
        main: 'green',
        animS: '0.3s',
        animM: '0.5s',
        neutral: 'green',
        neutralD: 'green',
        neutralL: 'green',
        text: '#303030',
        textInverted: '#D1D1D1',
        transparent: 'transparent',
        primary: 'green',
        primaryL: 'green',
        primaryD: 'green',
        accent: '#24C2C7',
        accentD: '#157275',
        accentL: '#7ACFDB'
    },
    b: {
        main: 'pink',
        animS: '0.3s',
        animM: '0.5s',
        neutral: 'pink',
        neutralD: 'pink',
        neutralL: 'pink',
        text: '#303030',
        textInverted: '#D1D1D1',
        transparent: 'transparent',
        primary: 'pink',
        primaryL: 'pink',
        primaryD: 'pink',
        accent: '#24C2C7',
        accentD: '#157275',
        accentL: '#7ACFDB'
    }
};

var FoldOut = function (_React$Component) {
    _inherits(FoldOut, _React$Component);

    function FoldOut(props) {
        _classCallCheck(this, FoldOut);

        var _this = _possibleConstructorReturn(this, (FoldOut.__proto__ || Object.getPrototypeOf(FoldOut)).call(this, props));

        console.log("Accordion constructor", props);
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
                    { style: { display: 'inline-block', transform: 'rotate(90deg)' } },
                    _react2.default.createElement(_IconButton2.default, { icon: "arrow", onInput: function onInput() {
                            _this2.handleClick(_this2.state.iOpen);
                        } })
                );
            } else {
                return _react2.default.createElement(
                    Wrapper,
                    { style: { display: 'inline-block', transform: 'rotate(0deg)' } },
                    _react2.default.createElement(_IconButton2.default, { icon: "arrow", onInput: function onInput() {
                            _this2.handleClick(_this2.state.iOpen);
                        } })
                );
            }
        }
    }, {
        key: 'renderFoldOut',
        value: function renderFoldOut() {
            if (this.state.open) {
                return _react2.default.createElement(
                    Accordion,
                    null,
                    _react2.default.createElement(
                        'p',
                        { className: 'open' },
                        this.props.children
                    )
                );
            } else {
                return _react2.default.createElement(
                    Accordion,
                    null,
                    _react2.default.createElement(
                        'p',
                        { className: 'closed' },
                        this.props.children
                    )
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { style: { width: '100%', padding: '10px', overflow: 'hidden' } },
                _react2.default.createElement(
                    Pill,
                    null,
                    _react2.default.createElement(
                        Panel,
                        null,
                        _react2.default.createElement(
                            FlexChild,
                            null,
                            this.renderOpenButton()
                        ),
                        _react2.default.createElement(
                            FlexChild,
                            null,
                            _react2.default.createElement(
                                Stack,
                                null,
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    this.props.title
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    this.props.subtitle
                                )
                            )
                        ),
                        _react2.default.createElement(Mid, null),
                        _react2.default.createElement(
                            FlexChild,
                            null,
                            _react2.default.createElement(
                                _Button2.default,
                                { onInput: function onInput() {
                                        _this3.handleClick(_this3.state.iSelect);
                                    } },
                                this.props.callToAction()
                            )
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
    console.log("accordion props theme " + props.theme.theme + " main = " + props.theme[props.theme.theme].main, props.theme);
    return props.theme[props.theme.theme].main;
});
var Panel = _styledComponents2.default.div(_templateObject5);

var Mid = _styledComponents2.default.span(_templateObject6);

var FlexChild = _styledComponents2.default.span(_templateObject7);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-katex");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("samplegame");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline;\n    color: grey;\n    padding: 10px;\n    background: yellow;\n'], ['\n    display: inline;\n    color: grey;\n    padding: 10px;\n    background: yellow;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width:100%;\n    background: grey;\n    padding: 10px;\n'], ['\n    width:100%;\n    background: grey;\n    padding: 10px;\n']);

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
                    null,
                    this.props.tags.map(function (t) {
                        console.log('tags rendering ' + t + ' with target tag ' + _this2.props.tag + ' does it match? ' + (t === _this2.props.tag));
                        if (_this2.props.tag && t === _this2.props.tag) {
                            return _react2.default.createElement(
                                Tag,
                                null,
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + t, style: { color: 'red' } },
                                    t
                                )
                            );
                        } else {
                            return _react2.default.createElement(
                                Tag,
                                null,
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + t },
                                    t
                                )
                            );
                        }
                    })
                );
            } else {
                return _react2.default.createElement(
                    Container,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
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
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(25);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

__webpack_require__(49);

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
          transitionLeaveTimeout: 300 },
        this.props.children
      );
    }
  }]);

  return Trans;
}(_react2.default.Component);

exports.default = Trans;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width:36px;\n    height:36px;\n    padding:0;\n    margin: 3px;\n    background-color: grey; /* Blue background */\n    border: none; /* Remove borders */\n    cursor: pointer; /* Mouse pointer on hover */\n    outline: none;\n    border-radius:50%;\n    transition: background-color ', ' ease-in;\n    &:hover {\n        background-color: ', ';\n    };\n    img{  \n        margin: 0;\n        padding: 0;\n        border: none;\n        margin-top:3px;\n    }\n'], ['\n    width:36px;\n    height:36px;\n    padding:0;\n    margin: 3px;\n    background-color: grey; /* Blue background */\n    border: none; /* Remove borders */\n    cursor: pointer; /* Mouse pointer on hover */\n    outline: none;\n    border-radius:50%;\n    transition: background-color ', ' ease-in;\n    &:hover {\n        background-color: ', ';\n    };\n    img{  \n        margin: 0;\n        padding: 0;\n        border: none;\n        margin-top:3px;\n    }\n']);

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
            }
        }
    }, {
        key: 'render',
        value: function render() {
            //themeprovider provides base theme, can be overridden
            return _react2.default.createElement(
                Btn,
                { color: this.props.color ? this.props.color : this.getColor(this.props.icon), onClick: this.props.onInput },
                _react2.default.createElement('img', { src: this.getImg(this.props.icon) })
            );
        }
    }]);

    return Icon;
}(_react2.default.Component);

exports.default = Icon;

//${props => props.primary ? 'blue' : props.theme.main}

var Btn = _styledComponents2.default.button(_templateObject, function (props) {
    return props.theme[props.theme.theme].animS;
}, function (props) {
    //console.log("icon btn props", props);
    return props.theme[props.theme.theme].primaryL;
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    text-transform: capitalize;\n    color: white;\n    background: grey;\n    text-align: center;\n    width: 100%;\n    padding: 0px;\n    display: inline-block;\n'], ['\n    text-transform: capitalize;\n    color: white;\n    background: grey;\n    text-align: center;\n    width: 100%;\n    padding: 0px;\n    display: inline-block;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MainMenu = __webpack_require__(5);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _Bg = __webpack_require__(29);

var _Bg2 = _interopRequireDefault(_Bg);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _PostList = __webpack_require__(16);

var _PostList2 = _interopRequireDefault(_PostList);

var _Tags = __webpack_require__(24);

var _Tags2 = _interopRequireDefault(_Tags);

var _SlideUp = __webpack_require__(10);

var _SlideUp2 = _interopRequireDefault(_SlideUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Katex from './../components/UI/math/Katex.jsx';
var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        return _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));
        //  console.log("posts constructor", props);
    }

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
                        { to: '/' + this.props.base + '/' + this.props.pageToken + '/' + (this.props.currentPage - 1) },
                        'Previous'
                    ));
                }
                if (this.props.currentPage < this.props.totalPages) {
                    //there is a previous page, add a link to it
                    // pagination.push(<p>go to next page {this.props.currentPage+1}</p>)
                    pagination.push(_react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/' + this.props.base + '/' + this.props.pageToken + '/' + (this.props.currentPage + 1) },
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
                return _react2.default.createElement(_reactStatic.Redirect, { to: this.props.base + '/' + this.props.pageToken + '/1' });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Container2.default,
                null,
                this.redirect(),
                _react2.default.createElement(_MainMenu2.default, null),
                _react2.default.createElement(
                    Title,
                    null,
                    this.props.title
                ),
                _react2.default.createElement(_Tags2.default, { tags: this.props.tags, tag: this.props.tag }),
                this.renderPagination(),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_PostList2.default, { posts: this.props.posts })
                )
            );
        }
    }]);

    return Games;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Games);


var Title = _styledComponents2.default.h2(_templateObject);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position:fixed;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  background: linear-gradient(', ', ', ');\n  z-index: -999999;\n  overflow:hidden;\n'], ['\n  position:fixed;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  background: linear-gradient(', ', ', ');\n  z-index: -999999;\n  overflow:hidden;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = __webpack_require__(15);

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
    }

    _createClass(UiBg, [{
        key: 'render',
        value: function render() {
            // console.log("rendering game a");
            return _react2.default.createElement(
                Bg,
                { className: 'bg' },
                this.props.children
            );
        }
    }]);

    return UiBg;
}(_react2.default.Component);

exports.default = UiBg;


var Bg = _styledComponents2.default.div(_templateObject, _Colors2.default.pDark, _Colors2.default.p);

//background-color: #330033;
//lime #C6FF00   green #B2FF59   yellow #FFEB3B
//dark blue #1A237E   dark cyan  #006064

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size:1em;\n  color: rgb(255,255,255,1);\n  width:100%;\n  padding: 10px;\n  padding-bottom:0px;\n\n'], ['\n  font-size:1em;\n  color: rgb(255,255,255,1);\n  width:100%;\n  padding: 10px;\n  padding-bottom:0px;\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 50%;\n  background-color: rgb(255,255,255,0.5);\n  margin-top: 100px;\n  margin-left: 55px;\n'], ['\n  width: 50%;\n  background-color: rgb(255,255,255,0.5);\n  margin-top: 100px;\n  margin-left: 55px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _MainMenu = __webpack_require__(5);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _Bg = __webpack_require__(29);

var _Bg2 = _interopRequireDefault(_Bg);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FadeIn = __webpack_require__(26);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

var _SlideUp = __webpack_require__(10);

var _SlideUp2 = _interopRequireDefault(_SlideUp);

var _PostList = __webpack_require__(16);

var _PostList2 = _interopRequireDefault(_PostList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Trends from './../components/Trends.jsx';


var Games = function (_React$Component) {
  _inherits(Games, _React$Component);

  function Games(props) {
    _classCallCheck(this, Games);

    var _this = _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));

    console.log("home constructor", props);
    // console.log("home");
    // console.log(this.props);
    return _this;
  }

  _createClass(Games, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log("home component did mount");
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Container2.default, { z: -1000, fill: true }),
        _react2.default.createElement(
          _Container2.default,
          { color: 'transparent' },
          _react2.default.createElement(_MainMenu2.default, null),
          _react2.default.createElement(
            _SlideUp2.default,
            null,
            _react2.default.createElement(
              PostBox,
              null,
              _react2.default.createElement(
                Message,
                null,
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              ),
              _react2.default.createElement(_PostList2.default, { posts: this.props.posts })
            )
          )
        )
      );
    }
  }]);

  return Games;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Games);

var Message = _styledComponents2.default.h4(_templateObject);
var PostBox = _styledComponents2.default.div(_templateObject2);

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

var _reactStatic = __webpack_require__(2);

var _MainMenu = __webpack_require__(5);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _GameListItem = __webpack_require__(58);

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
                null,
                _react2.default.createElement(_MainMenu2.default, null),
                _react2.default.createElement(
                    'div',
                    null,
                    this.props.games.map(function (post) {
                        return _react2.default.createElement(_GameListItem2.default, { game: post });
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Index = __webpack_require__(59);

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
                return _react2.default.createElement(_Index2.default, { game: this.state.game });
            } else if (this.state.error) {
                return _react2.default.createElement(
                    'p',
                    null,
                    'error loading game: ',
                    this.state.error
                );
            } else {
                return _react2.default.createElement(
                    'p',
                    null,
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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(64);

var _reactKatex = __webpack_require__(19);

var _reactDom = __webpack_require__(21);

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
            (0, _reactDom.render)(_react2.default.createElement(_reactKatex.InlineMath, { math: this.props.latex }), document.getElementById(this.state.id));
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
                (0, _reactDom.render)(_react2.default.createElement(_reactKatex.InlineMath, { math: this.props.latex }), document.getElementById(this.state.id));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            //var InlineMathV = ReactKaTeX.InlineMath;
            return _react2.default.createElement('span', { id: this.state.id, key: this.state.id })
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _MainMenu = __webpack_require__(5);

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
    null,
    _react2.default.createElement(
      'p',
      null,
      'Value: ',
      count
    ),
    _react2.default.createElement(
      'button',
      { onClick: increment },
      'Increment'
    ),
    _react2.default.createElement(
      'button',
      { onClick: reset },
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

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

    console.log("about constructor", props);
    return _this;
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_MainMenu2.default, null),
        _react2.default.createElement(
          'h1',
          null,
          'This is what we\'re all about.1'
        ),
        _react2.default.createElement(
          'p',
          null,
          'React, static sites, performance, speed. It\'s the stuff that makes us tick.'
        ),
        _react2.default.createElement(
          'h2',
          null,
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _reactGa = __webpack_require__(18);

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
        null,
        _react2.default.createElement(
          'p',
          null,
          'That page doesn\'t exist. We have made a note of the problem.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In the meantime, here are some pages that definitely exist'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/' },
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
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(39);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _reactHotLoader = __webpack_require__(40);

var _reactStaticRoutes = __webpack_require__(41);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _redux = __webpack_require__(65);

var _redux2 = _interopRequireDefault(_redux);

__webpack_require__(68);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(69);

var _theme2 = _interopRequireDefault(_theme);

var _Analytics = __webpack_require__(70);

var _Analytics2 = _interopRequireDefault(_Analytics);

var _Gapi = __webpack_require__(71);

var _Gapi2 = _interopRequireDefault(_Gapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    var startTheme = (0, _theme2.default)();
    // startTheme.theme = startTheme.setTheme(); //set to default for consistent static package class names?
    _this.state = {
      myTheme: startTheme
      //console.log("my random theme ", this.state.myTheme);
    };return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _redux2.default },
        _react2.default.createElement(
          _reactStatic.Router,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Analytics2.default, null),
            _react2.default.createElement(_Gapi2.default, null),
            _react2.default.createElement(
              'div',
              { className: 'content', onDoubleClick: function onDoubleClick() {
                  var nTheme = _this2.state.myTheme;
                  nTheme.setTheme(nTheme);
                  _this2.setState({
                    myTheme: _extends({}, nTheme)
                  });
                } },
              _react2.default.createElement(
                _styledComponents.ThemeProvider,
                { theme: this.state.myTheme },
                _react2.default.createElement(_reactStaticRoutes2.default, null)
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 41 */
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(42);

var _reactUniversalComponent = __webpack_require__(43);

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
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
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
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/Post.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
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
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 32)), (0, _importCss3.default)('src/containers/Game', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Game');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return 'src/containers/Game';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About.jsx',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 35)), (0, _importCss3.default)('src/containers/About.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return 'src/containers/About.jsx';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404.jsx',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 36)), (0, _importCss3.default)('src/containers/404.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
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
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
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
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(44);

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

var _reportChunks = __webpack_require__(45);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(46);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

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
/* 46 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Tags = __webpack_require__(24);

var _Tags2 = _interopRequireDefault(_Tags);

var _PostList = __webpack_require__(16);

var _PostList2 = _interopRequireDefault(_PostList);

var _FadeIn = __webpack_require__(26);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

var _SlideUp = __webpack_require__(10);

var _SlideUp2 = _interopRequireDefault(_SlideUp);

var _Accordion = __webpack_require__(17);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".fade-in-enter{opacity:.01}.fade-in-enter.fade-in-enter-active{opacity:1;-webkit-transition:opacity .5s ease-in;-o-transition:opacity .5s ease-in;transition:opacity .5s ease-in}.fade-in-leave{opacity:1}.fade-in-leave.fade-in-leave-active{opacity:.01;-webkit-transition:opacity .3s ease-in;-o-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.fade-in-appear{opacity:.01}.fade-in-appear.fade-in-appear-active{opacity:1;-webkit-transition:opacity .5s ease-in;-o-transition:opacity .5s ease-in;transition:opacity .5s ease-in}", ""]);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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
                { onClick: this.handleInput },
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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
                        null,
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
                                } },
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
                            } },
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
                    null,
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
                    null,
                    this.renderGame()
                );
            } else {
                return _react2.default.createElement(
                    'p',
                    null,
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Accordion = __webpack_require__(17);

var _Accordion2 = _interopRequireDefault(_Accordion);

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
                                to: '/games/' + _this2.props.game.id },
                            'Play'
                        );
                    } },
                this.props.game.desc
            );
        }
    }]);

    return GameItem;
}(_react2.default.Component);

exports.default = GameItem;

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

var _Store = __webpack_require__(60);

var _Store2 = _interopRequireDefault(_Store);

var _Game = __webpack_require__(61);

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
          { reducers: this.state.reducers },
          _react2.default.createElement(_Game2.default, { game: this.state.game })
        );
        //return null;
      } else {
        return _react2.default.createElement(
          'p',
          null,
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(12);

var _reduxLogger = __webpack_require__(33);

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
                { store: this.store },
                this.props.children
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),
/* 61 */
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _all = __webpack_require__(62);

var _all2 = _interopRequireDefault(_all);

var _Container = __webpack_require__(4);

var _Container2 = _interopRequireDefault(_Container);

var _Accordion = __webpack_require__(17);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mygamelibs = __webpack_require__(63);

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
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 34)), (0, _importCss3.default)('UI/math/Katex.jsx', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, './../UI/math/Katex.jsx');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(34);
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
                    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('recharts', {
                        disableWarnings: true
                    })]).then(function (proms) {
                        return proms[0];
                    });
                },
                path: function path() {
                    return _path3.default.join(__dirname, 'recharts');
                },
                resolve: function resolve() {
                    return /*require.resolve*/(11);
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
                    null,
                    _react2.default.createElement(this.props.game, { tools: this.state.tools })
                );
            } else {
                return _react2.default.createElement(
                    'p',
                    null,
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
/* 62 */
/***/ (function(module, exports) {

module.exports = require("nerdamer/all");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("mygamelibs");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("katex/dist/katex.min.css");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _reduxLogger = __webpack_require__(33);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(66);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _counter = __webpack_require__(67);

var _counter2 = _interopRequireDefault(_counter);

var _apiReducer = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  counter: _counter2.default,
  gapi: _apiReducer.reducer
});

exports.default = reducer;

/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "*{-webkit-box-sizing:border-box;box-sizing:border-box}body{font-family:Raleway,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}a{text-decoration:none;color:#108db8;font-weight:700}img{max-width:100%}", ""]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var themes = [{
    main: 'orange',
    animS: '0.3s',
    animM: '0.5s',
    neutral: '#303030',
    neutralD: '#C4C4C4',
    neutralL: '#C4C4C4',
    text: '#303030',
    textInverted: '#D1D1D1',
    transparent: 'transparent',
    primary: '#E07831',
    primaryL: '#FFA638',
    primaryD: '#A64E20',
    accent: '#24C2C7',
    accentD: '#157275',
    accentL: '#7ACFDB'
}, {
    main: 'red',
    animS: '0.3s',
    animM: '0.5s',
    neutral: 'red',
    neutralD: 'red',
    neutralL: 'red',
    text: '#303030',
    textInverted: '#D1D1D1',
    transparent: 'transparent',
    primary: 'red',
    primaryL: 'red',
    primaryD: 'red',
    accent: '#24C2C7',
    accentD: '#157275',
    accentL: '#7ACFDB'
}, {
    main: 'pink',
    animS: '0.3s',
    animM: '0.5s',
    neutral: 'pink',
    neutralD: 'pink',
    neutralL: 'pink',
    text: '#303030',
    textInverted: '#D1D1D1',
    transparent: 'transparent',
    primary: 'pink',
    primaryL: 'pink',
    primaryD: 'pink',
    accent: '#24C2C7',
    accentD: '#157275',
    accentL: '#7ACFDB'
}, {
    main: 'green',
    animS: '0.3s',
    animM: '0.5s',
    neutral: 'green',
    neutralD: 'green',
    neutralL: 'green',
    text: '#303030',
    textInverted: '#D1D1D1',
    transparent: 'transparent',
    primary: 'green',
    primaryL: 'green',
    primaryD: 'green',
    accent: '#24C2C7',
    accentD: '#157275',
    accentL: '#7ACFDB'
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
            var name = themeNames[counter % themeNames.length];
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGa = __webpack_require__(18);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(12);

var _apiReducer = __webpack_require__(37);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.9b22c588.js.map