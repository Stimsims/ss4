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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.functions = exports.constants = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = exports.constants = {
    fsm: {
        keys: {
            state: 'state',
            item: 'itemId',
            itemType: 'itemType'
        },
        zones: {
            lounge: 'lounge',
            control: 'control'
        },
        actions: {
            mine: 'mine',
            inventory: 'inventory'
        },
        questions: {
            idElem: 'idElem'
        },
        items: {
            asteroidSample: 'asteroidSample' //important that items and item template tag remain the same
        }
    },
    sim: {
        engine: {
            ok: 'ok',
            overheat: 'overheat',
            exploded: 'explo'
        }
    },
    IO: {
        vId: 'vId',
        kId: 'kId'
    },
    items: {
        asteroidSample: 'asteroidSample',
        element: 'element',
        weight: 'weight',
        stock: 'stock',
        ship: 'ship',
        engine: 'engine',
        hull: 'hull'
    },
    relations: {
        contains: 'contains'
    },
    elements: {
        iron: {
            shc: 20
        },
        copper: {
            shc: 10
        },
        potassium: {
            shc: 30
        },
        chromium: {
            shc: 10
        }
    }

    //export default constants;
};var functions = exports.functions = {
    propKid: function propKid(value) {
        return { kId: value };
    },
    componentTag: function componentTag(tag, props) {
        return _react2.default.createElement('tag', props);
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline-block;\n    font-size: 1.8em;\n    margin: 0px;\n    a{\n        color: ', ';\n    }\n'], ['\n    display: inline-block;\n    font-size: 1.8em;\n    margin: 0px;\n    a{\n        color: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline-block;\n    font-size: 1.1em;\n    margin-top: 11px;\n    transition: all 0.3s ease-in;\n    a{\n        padding: 20px 10px 0px 10px;\n        border-bottom: 2px solid ', ';\n        color: ', ';\n    }\n    a.active{\n        border-bottom: 2px solid ', ';\n        color: ', '; \n    }\n'], ['\n    display: inline-block;\n    font-size: 1.1em;\n    margin-top: 11px;\n    transition: all 0.3s ease-in;\n    a{\n        padding: 20px 10px 0px 10px;\n        border-bottom: 2px solid ', ';\n        color: ', ';\n    }\n    a.active{\n        border-bottom: 2px solid ', ';\n        color: ', '; \n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

__webpack_require__(39);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = __webpack_require__(7);

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                'nav',
                { style: Bar },
                _react2.default.createElement(
                    Title,
                    null,
                    _react2.default.createElement(
                        _reactStatic.Link,
                        { exact: true, to: '/' },
                        this.props.siteTitle
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: sMenu },
                    _react2.default.createElement(
                        Slinks,
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/games' },
                            'Games'
                        )
                    ),
                    _react2.default.createElement(
                        Slinks,
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/about' },
                            'About'
                        )
                    )
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withSiteData)(Menu);


var Bar = {
    width: '100%',
    padding: '10px'

    // const sMenu = {
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent:'center',
    //     alignItems: 'center',
    // }
};var sMenu = {
    display: 'inline',
    float: 'right',
    height: '80px',
    marginRight: '10px'
};
var Title = _styledComponents2.default.h1(_templateObject, _Colors2.default.s);
var Slinks = _styledComponents2.default.h2(_templateObject2, _Colors2.default.transparent, _Colors2.default.s, _Colors2.default.sLight, _Colors2.default.sLight);

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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setZone = setZone;
exports.setFSMState = setFSMState;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import constants from './../Constants.js';

//stores fsm state information
/*
        [constants.fsm.zones.lounge]:{
            [constants.fsm.keys.state]:null, 
            [constants.fsm.keys.item]:null
        },
        [constants.fsm.zones.control]:{
            [constants.fsm.keys.state]:null, 
            [constants.fsm.keys.item]:null
        }
*/
var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'SET_FSM_STATE':
            console.log('action setfsm ' + action.payload.id);
            return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], action.payload.state)));
        default:
            return state;
    }
};

//handled by parent reducer
function setZone(zone, state) {
    console.log("action set zone");
    return {
        type: 'SET_ZONE',
        payload: {
            zone: zone, state: state
        }
    };
}

function setFSMState(id, state) {
    return {
        type: 'SET_FSM_STATE',
        payload: {
            id: id, state: state
        }
    };
}

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(53);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

__webpack_require__(41);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width:48px;\n    height:48px;\n    padding-top:10px;\n    background-color: DodgerBlue; /* Blue background */\n    border: none; /* Remove borders */\n    color: white; /* White text */\n    padding: 8px; /* Some padding */\n    font-size: 16px; /* Set a font size */\n    cursor: pointer; /* Mouse pointer on hover */\n    vertical-align: -50%;\n    border-radius:50%;\n    transform: all 0.3s ease-in-out;\n    &:hover {\n        background-color: RoyalBlue;\n    }\n    svg{  \n        margin-top:3px;\n    }\n'], ['\n    width:48px;\n    height:48px;\n    padding-top:10px;\n    background-color: DodgerBlue; /* Blue background */\n    border: none; /* Remove borders */\n    color: white; /* White text */\n    padding: 8px; /* Some padding */\n    font-size: 16px; /* Set a font size */\n    cursor: pointer; /* Mouse pointer on hover */\n    vertical-align: -50%;\n    border-radius:50%;\n    transform: all 0.3s ease-in-out;\n    &:hover {\n        background-color: RoyalBlue;\n    }\n    svg{  \n        margin-top:3px;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import './icons.css';

var icons = {
    'bin2': 'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z',
    'bold': 'M707.88 484.652c37.498-44.542 60.12-102.008 60.12-164.652 0-141.16-114.842-256-256-256h-320v896h384c141.158 0 256-114.842 256-256 0-92.956-49.798-174.496-124.12-219.348zM384 192h101.5c55.968 0 101.5 57.42 101.5 128s-45.532 128-101.5 128h-101.5v-256zM543 832h-159v-256h159c58.45 0 106 57.42 106 128s-47.55 128-106 128z',
    'underline': 'M704 64h128v416c0 159.058-143.268 288-320 288-176.73 0-320-128.942-320-288v-416h128v416c0 40.166 18.238 78.704 51.354 108.506 36.896 33.204 86.846 51.494 140.646 51.494s103.75-18.29 140.646-51.494c33.116-29.802 51.354-68.34 51.354-108.506v-416zM192 832h640v128h-640z',
    'italic': 'M896 64v64h-128l-320 768h128v64h-448v-64h128l320-768h-128v-64z',
    'paragraph-left': 'M0 64h1024v128h-1024zM0 256h640v128h-640zM0 640h640v128h-640zM0 448h1024v128h-1024zM0 832h1024v128h-1024z',
    'paragraph-center': 'M0 64h1024v128h-1024zM192 256h640v128h-640zM192 640h640v128h-640zM0 448h1024v128h-1024zM0 832h1024v128h-1024z',
    'paragraph-right': 'M0 64h1024v128h-1024zM384 256h640v128h-640zM384 640h640v128h-640zM0 448h1024v128h-1024zM0 832h1024v128h-1024z',
    'google': 'M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z',
    'facebook': 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
    'twitter': 'M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z',
    'linkedin2': 'M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z M64 384h192v576h-192v-576z M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z'
};

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
                Btn,
                { onClick: function onClick() {
                        console.log('click');
                    } },
                _react2.default.createElement(
                    'svg',
                    { width: '24', height: '24', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement('path', { fill: 'white', d: icons[this.props.icon] })
                )
            );
        }
    }]);

    return Trans;
}(_react2.default.Component);

exports.default = Trans;


var Btn = _styledComponents2.default.button(_templateObject);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: 'handleClick',
        value: function handleClick() {
            var o = {
                kId: this.props.kId,
                vId: this.props.vId
            };
            console.log('button input');
            console.log(o);
            this.props.onInput(o);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.disabled) {
                return _react2.default.createElement(
                    'button',
                    { onClick: this.handleClick, disabled: true },
                    ' ',
                    this.props.text
                );
            } else {
                return _react2.default.createElement(
                    'button',
                    { onClick: this.handleClick },
                    ' ',
                    this.props.text
                );
            }
        }
    }]);

    return Button;
}(_react2.default.Component);

exports.default = Button;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectContained = exports.selectFsmState = undefined;

var _reselect = __webpack_require__(90);

var _Constants = __webpack_require__(3);

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectFsmState = exports.selectFsmState = function selectFsmState(state, id, def) {
    // console.log("selectFsm " + id);
    // console.log(state);
    var fsm = state.fsm[id];
    return fsm ? fsm : def;
};

var selectContained = exports.selectContained = function selectContained(state, id) {
    var contained = state.relations.contains[id];
    // console.log("selectContained " + id);
    // console.log(contained);
    if (contained) {
        var items = {};
        for (var key in contained) {
            if (contained.hasOwnProperty(key)) {
                //console.log(key + " -> " + contained[key]);
                var ids = contained[key];
                var item = ids.map(function (e) {
                    var i = state.items[key][e];
                    // console.log("item " + e);
                    // console.log(i);
                    return i;
                });
                // console.log("items:");
                // console.log(item);
                items[key] = item;
            }
        }
        return items;
    } else {
        return {};
    }
    //return contained?contained:{};
};

// export const selectFsmState = createSelector(
//     getFSM,
//     fsms => {
//         return fsms
//     } 
// )

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addItem = addItem;
exports.deleteItem = deleteItem;
exports.editUserAns = editUserAns;

var _Constants = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = exports.reducer = function reducer() {
    var _constants$items$ship, _ref;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (_ref = {}, _defineProperty(_ref, _Constants.constants.items.ship, (_constants$items$ship = {}, _defineProperty(_constants$items$ship, _Constants.constants.items.engine, {
        id: _Constants.constants.items.engine,
        element: 'iron',
        temp: _Constants.constants.elements.iron.shc,
        state: _Constants.constants.sim.engine.ok
    }), _defineProperty(_constants$items$ship, _Constants.constants.items.hull, {
        id: _Constants.constants.items.hull,
        element: 'iron',
        temp: _Constants.constants.elements.iron.shc,
        state: _Constants.constants.sim.engine.ok
    }), _constants$items$ship)), _defineProperty(_ref, _Constants.constants.items.asteroidSample, {}), _defineProperty(_ref, _Constants.constants.items.stock, {}), _ref);
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'ADD_ITEM':
            console.log("items reducer add sample");
            //parent reducer also adds id to container relationship list
            return _extends({}, state, _defineProperty({}, action.payload.type, _extends({}, state[action.payload.type], _defineProperty({}, action.payload.id, action.payload.item))));
        case 'DEL_ITEM':
            console.log("items reducer del item");
            var items = _extends({}, state[action.payload.type]);
            delete items[action.payload.id];
            return _extends({}, state, _defineProperty({}, action.payload.type, items));
        case 'EDIT_USER_ANS':
            // [action.payload.key]: action.payload.val
            var update = _extends({}, action.payload.item, {
                user: _extends({}, action.payload.item.user, _defineProperty({}, action.payload.key, action.payload.val))
            });
            return _extends({}, state, _defineProperty({}, action.payload.item.type, _extends({}, state[action.payload.item.type], _defineProperty({}, action.payload.item.id, update))));
        default:
            return state;
    }
};

function addItem(container, type, id, item) {
    //console.log("action set zone");
    console.log("action addItem " + container + " type " + type + " id " + id);
    return {
        type: 'ADD_ITEM',
        payload: {
            container: container, type: type, id: id, item: item
        }
    };
}
function deleteItem(container, type, id, item) {
    console.log("action deleteItem " + container + " type " + type + " id " + id);
    return {
        type: 'DEL_ITEM',
        payload: {
            container: container, type: type, id: id, item: item
        }
    };
}

// //handled by parent reducer
function editUserAns(item, key, val) {
    console.log("action edit item key " + key + " val " + val);
    return {
        type: 'EDIT_USER_ANS',
        payload: {
            item: item, key: key, val: val
        }
    };
}
// export function editItem(item, edits){
//     console.log("action edit item",edits);
//     return {
//         type: `EDIT_ITEM`,
//         payload:{
//             item, edits
//         }
//     }
// }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top:70px;\n    height: 100vh;\n'], ['\n  margin-top:70px;\n    height: 100vh;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Line = __webpack_require__(16);

var _Line2 = _interopRequireDefault(_Line);

var _adapterParallel = __webpack_require__(80);

var _adapterParallel2 = _interopRequireDefault(_adapterParallel);

var _chartistPluginLegend = __webpack_require__(51);

var _chartistPluginLegend2 = _interopRequireDefault(_chartistPluginLegend);

var _chartistPluginAxistitle = __webpack_require__(52);

var _chartistPluginAxistitle2 = _interopRequireDefault(_chartistPluginAxistitle);

var _trends = __webpack_require__(82);

var _trends2 = _interopRequireDefault(_trends);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import {get} from 'lodash';


//import Chartist from 'chartist';
// import ChartistGraph from 'react-chartist';
/*
           series: {
               'series-1': {
                 lineSmooth: Chartist.Interpolation.step()
               },
               'math: (Worldwide)': {
                 lineSmooth: Chartist.Interpolation.simple(),
                 showArea: true,
                 showLabel: true
               }
             },
*/

var Pie = function (_React$Component) {
    _inherits(Pie, _React$Component);

    function Pie(props) {
        _classCallCheck(this, Pie);

        var _this = _possibleConstructorReturn(this, (Pie.__proto__ || Object.getPrototypeOf(Pie)).call(this, props));

        var labels = ['math', "physics", "chemistry", "biology", "science"];
        var xfn = function () {
            var map = new Map();
            return function (value) {
                var t = value.slice(0, 4);
                if (!map.has(t)) {
                    map.set(t, 1);
                    return t;
                }
            };
        }();
        var options = {
            axisX: {
                labelInterpolationFnc: xfn
            }
        };
        _this.state = {
            options: options,
            labels: labels,
            adapter: new _adapterParallel2.default(_trends2.default, 'Math', 'Month', ['math: (Worldwide)', "physics: (Worldwide)", "chemistry: (Worldwide)", "biology: (Worldwide)", "science: (Worldwide)"])
        };
        return _this;
    }

    _createClass(Pie, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Container,
                null,
                _react2.default.createElement(_Line2.default, { data: this.state.adapter, options: this.state.options, title: 'Search Trends', legend: this.state.labels, titleX: 'Time (mins)', titleY: 'Goals' })
            );
        }
    }]);

    return Pie;
}(_react2.default.Component);

exports.default = Pie;


var Container = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactChartist = __webpack_require__(79);

var _reactChartist2 = _interopRequireDefault(_reactChartist);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _chartistPluginLegend = __webpack_require__(51);

var _chartistPluginLegend2 = _interopRequireDefault(_chartistPluginLegend);

var _chartistPluginAxistitle = __webpack_require__(52);

var _chartistPluginAxistitle2 = _interopRequireDefault(_chartistPluginAxistitle);

var _animations = __webpack_require__(17);

var _constants = __webpack_require__(18);

var _styles = __webpack_require__(19);

__webpack_require__(40);

var _utilities = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Legend from 'chartist-plugin-legend';
// import Axis from 'chartist-plugin-axistitle';


// import Chartist from 'chartist';
if (typeof window === 'undefined') {
  global.window = {};
}

var Pie = function (_React$Component) {
  _inherits(Pie, _React$Component);

  function Pie(props) {
    _classCallCheck(this, Pie);

    //let chart = <ChartistGraph  data={props.data} listener={listeners} options={props.options} type={'Line'} />;
    //listener={this.state.listeners} options={this.props.options}
    var _this = _possibleConstructorReturn(this, (Pie.__proto__ || Object.getPrototypeOf(Pie)).call(this, props));

    console.log('line graph');
    console.log(props);
    console.log("props ops");
    console.log(props.options);
    var plugins = [];
    var defaults = {
      showPoint: false,
      showGrid: false,
      chartPadding: {
        top: 10,
        right: 20,
        bottom: 180,
        left: 20
      },
      plugins: plugins
    };

    if (props.legend) {
      var names = (0, _utilities.getAxisLabels)(props.legend);
      plugins.push((0, _chartistPluginLegend2.default)({
        position: 'top',
        classNames: ['ct-myclass'],
        legendNames: names
      }));
    }
    if (props.titleX || props.titleY) {
      var axis = {};
      if (props.titleX) {
        axis.axisX = {
          axisTitle: '' + props.titleX,
          axisClass: 'ct-axis-title',
          offset: {
            x: 0,
            y: 0
          },
          textAnchor: 'middle'
        };
      }
      if (props.titleY) {
        axis.axisY = {
          axisTitle: '' + props.titleY,
          axisClass: 'ct-axis-title',
          offset: {
            x: 0,
            y: 0
          },
          textAnchor: 'middle'
        };
      }
      plugins.push((0, _chartistPluginAxistitle2.default)(axis));
    }
    var newOpt = Object.assign(defaults, props.options);
    console.log("newOpt");
    console.log(newOpt);

    _this.state = {
      options: newOpt,
      container: (0, _styles.genStyles)(_this.props.data),
      data: {
        labels: [1, 2, 3],
        series: [[1, 2, 3]]
      }
    };
    return _this;
  }

  _createClass(Pie, [{
    key: 'render',
    value: function render() {

      // console.log('line graph');
      // console.log(this.props);
      return _react2.default.createElement(
        this.state.container,
        { className: 'chartContainer' },
        _react2.default.createElement(
          'h4',
          { style: titleStyle },
          this.props.title
        ),
        _react2.default.createElement(_reactChartist2.default, { data: this.props.data, listener: this.state.listeners, options: this.state.options, type: 'Line' })
      );
    }
  }]);

  return Pie;
}(_react2.default.Component);

exports.default = Pie;


var titleStyle = {
  color: 'white',
  textAlign: 'center',
  marginBottom: '0px'
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fadeIn = fadeIn;
exports.lineScaleUp = lineScaleUp;
exports.translate = translate;
exports.heightUp = heightUp;
exports.widthRight = widthRight;
function fadeIn(animObj, data) {
    animObj['opacity'] = {
        begin: data.index * 10,
        dur: 1000,
        from: 0,
        to: 1,
        easing: 'easeOutQuart'
    };
    return animObj;
}
function lineScaleUp(animObj, data) {
    animObj['d'] = {
        begin: 500 * data.index,
        dur: 1000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: 'easeOutQuart'
    };
    return animObj;
}
function translate(animObj, date) {
    animObj['d'] = {
        begin: 500,
        dur: 1000,
        from: data.path.clone().rotate('45deg').stringify(),
        to: data.path.clone().stringify(),
        easing: 'easeOutQuart'
    };
    return animObj;
}
function heightUp(animationObj, data) {
    animationObj['y1'] = {
        begin: data.index * 10,
        dur: 300,
        from: data['y2'],
        to: data['y1'],
        easing: 'easeOutQuart'
    };
    return animationObj;
}
function widthRight(animObj, data) {
    animObj['x2'] = {
        begin: data.index * 10,
        dur: 2000,
        from: data['x1'],
        to: data['x2'],
        easing: 'easeOutQuart'
    };
    return animObj;
}

/*
var delays = 80,
    durations = 500;
      var listeners={
        created: function() {
          var seq = 0;
        },
        draw: function(data){
            var animations = {};
          if(data.type === 'line' || data.type === 'area') {
            lineScaleUp(animations, data);
            //translate(animations, data);
          }else if(data.type === 'grid') {
            
            if(data.axis.units.pos === 'x'){
              heightUp(animations, data);
              //fadeIn(animations, data);
              
            }else if(data.axis.units.pos === 'y'){
                widthRight(animations, data);
            }
          }
          data.element.animate(animations);
        }
      }
*/

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var timing = exports.timing = {
    mini: 0.3
};

var colors = exports.colors = {
    accent: '#cc00cc',
    accentHighlight: '#ffccff',
    accentShadow: '#660066',
    shadow: '#f2f2f2',
    text: 'grey',
    menu: 'white',

    series0: '#cc66ff',
    series1: '#99ccff',
    series2: '#99ffcc',
    series3: '#ffffcc',
    series4: '#ffcce6'
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    height: 100%;\n    .ct-chart{\n        height: 100%;\n    }\n    ', '\n\n    .ct-labels span, .ct-axis-title {\n      color: ', ';\n    }\n    .ct-axis-title{\n      stroke: white;\n      stroke-width: 2px;\n    }\n    .ct-legend{\n      list-style-type: none;\n      text-align: center;\n      margin: auto;\n      margin-bottom:0px;\n      padding: 0px;\n      li {\n          padding: 5px;\n          margin: 0px 10px 0px 10px;\n          border-radius: 25px;\n          display: inline-block;\n      }\n    }\n    .ct-label.ct-label.ct-horizontal.ct-end {\n      transform-origin: 100% 0;\n      transform: translate(-100%, 20px) rotate(-45deg);\n    }\n    '], ['\n    height: 100%;\n    .ct-chart{\n        height: 100%;\n    }\n    ', '\n\n    .ct-labels span, .ct-axis-title {\n      color: ', ';\n    }\n    .ct-axis-title{\n      stroke: white;\n      stroke-width: 2px;\n    }\n    .ct-legend{\n      list-style-type: none;\n      text-align: center;\n      margin: auto;\n      margin-bottom:0px;\n      padding: 0px;\n      li {\n          padding: 5px;\n          margin: 0px 10px 0px 10px;\n          border-radius: 25px;\n          display: inline-block;\n      }\n    }\n    .ct-label.ct-label.ct-horizontal.ct-end {\n      transform-origin: 100% 0;\n      transform: translate(-100%, 20px) rotate(-45deg);\n    }\n    ']);

exports.genStyles = genStyles;

var _Colors = __webpack_require__(7);

var _Colors2 = _interopRequireDefault(_Colors);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getLetter(index) {
  switch (index) {
    case 0:
      return 'a';
    case 1:
      return 'b';
    case 2:
      return 'c';
    case 3:
      return 'd';
    case 4:
      return 'e';
    default:
      return 'a';
  }
}
function getColor(index) {
  switch (index) {
    case 0:
      return _Colors2.default.series0;
    case 1:
      return _Colors2.default.series1;
    case 2:
      return _Colors2.default.series2;
    case 3:
      return _Colors2.default.series3;
    case 4:
      return _Colors2.default.series4;
    default:
      return _Colors2.default.series0;
  }
}
/*
      stroke: ${getColor(i)} !important;
      border: 2px ${getColor(i)} solid !important;
      color: ${getColor(i)} !important;
*/
function generateSeriesStyle(series) {
  var styles = '';
  series.map(function (e, i) {
    var s = '.ct-series-' + getLetter(i) + ' .ct-bar, .ct-series-' + getLetter(i) + ' .ct-line, \n      .ct-series-' + getLetter(i) + ' .ct-point, .ct-series-' + getLetter(i) + ' .ct-slice-donut, \n      .ct-series-' + i + ', .ct-series-' + getLetter(i) + ' .ct-series {\n        stroke: ' + getColor(i) + ' !important;\n        color: ' + getColor(i) + ' !important;\n        stroke-width: 2px;\n        font-size:0.9em;\n        animation-delay: ' + i / 4 + 's;\n      }';
    return styles = styles + s;
  });
  return styles;
}

function genStyles(data) {
  var series = data.series;

  var seriesColors = generateSeriesStyle(series);
  var Container = _styledComponents2.default.div(_templateObject, seriesColors, _Colors2.default.text);
  return Container;
}

/*
.ct-legend 
.ct-series-0 ct-myclass
.ct-series-1 ct-myclass2
    .ct-grids line {
    color: blue;
  }
.ct-grid line,
  .ct-vertical,
  .ct-start,
  .ct-horizontal{ 
        stroke: red !important;
        stroke-width: 1px !important;
        stroke-dasharray: 2px !important;
    }
    .ct-legend{
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom:0px;
      li {
          padding: 5px;
          margin: 0px 10px 0px 10px;
          border-radius: 25px;
      }
    }
*/

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getAxisLabels = exports.getAxisLabels = function getAxisLabels(labels) {
    return labels.map(function (e) {
        return { name: "" + e, series: "" + e };
    });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position:fixed;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  background: linear-gradient(', ', ', ');\n  z-index: -999999;\n  overflow:hidden;\n'], ['\n  position:fixed;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  background: linear-gradient(', ', ', ');\n  z-index: -999999;\n  overflow:hidden;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = __webpack_require__(7);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position:fixed;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  z-index: 1;\n  overflow:hidden;\n'], ['\n  position:fixed;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  z-index: 1;\n  overflow:hidden;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = __webpack_require__(7);

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
                null,
                this.props.children
            );
        }
    }]);

    return UiBg;
}(_react2.default.Component);

exports.default = UiBg;


var Bg = _styledComponents2.default.div(_templateObject);

//background-color: #330033;
//lime #C6FF00   green #B2FF59   yellow #FFEB3B
//dark blue #1A237E   dark cyan  #006064

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    .slide-up-enter{\n        transform: translate(0px, 0px);\n        opacity: 0.1;\n    }\n    .slide-up-enter.slide-up-enter-active {\n        transform: translate(0px, 100vh);\n        transition: all 1s ease-out;\n        opacity: 0.1;\n    }\n\n    .slide-up-leave {\n        transform: translate(0px, 100vh);\n    }\n\n    .slide-up-leave.slide-up-leave-active {\n        transform: translate(0px, 0px);\n        transition:  all 1s ease-out;\n    }\n\n    .slide-up-appear {\n        transform: translate(0px, 100vh);\n        transition:  all 1s ease-out;\n    }\n    .slide-up-appear.slide-up-appear-active {\n        transform: translate(0px, 0vh);\n        transition:  all 1s ease-out;\n    }\n    .slide-up-appear-active a div{\n        transform: translate(0px, 0vh);\n        transition:  all 1s ease-out;\n    }\n    .slide-up-appear a div{\n        transition:  all 1s ease-out;\n        transform: translate(0px, 100vh);\n    }\n'], ['\n    .slide-up-enter{\n        transform: translate(0px, 0px);\n        opacity: 0.1;\n    }\n    .slide-up-enter.slide-up-enter-active {\n        transform: translate(0px, 100vh);\n        transition: all 1s ease-out;\n        opacity: 0.1;\n    }\n\n    .slide-up-leave {\n        transform: translate(0px, 100vh);\n    }\n\n    .slide-up-leave.slide-up-leave-active {\n        transform: translate(0px, 0px);\n        transition:  all 1s ease-out;\n    }\n\n    .slide-up-appear {\n        transform: translate(0px, 100vh);\n        transition:  all 1s ease-out;\n    }\n    .slide-up-appear.slide-up-appear-active {\n        transform: translate(0px, 0vh);\n        transition:  all 1s ease-out;\n    }\n    .slide-up-appear-active a div{\n        transform: translate(0px, 0vh);\n        transition:  all 1s ease-out;\n    }\n    .slide-up-appear a div{\n        transition:  all 1s ease-out;\n        transform: translate(0px, 100vh);\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(53);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _styledComponents = __webpack_require__(4);

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
                        transitionAppearTimeout: 1000,
                        transitionEnterTimeout: 1000,
                        transitionLeaveTimeout: 1000 },
                    this.props.children
                )
            );
        }
    }]);

    return Trans;
}(_react2.default.Component);

exports.default = Trans;


var Container = _styledComponents2.default.span(_templateObject);
/*
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(44);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(45);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(46);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactUniversalComponent = __webpack_require__(47);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Failed = function Failed() {
    return _react2.default.createElement(
        'div',
        { style: { color: 'red' } },
        _react2.default.createElement(
            'h1',
            null,
            'Failed to load the heavy component!'
        )
    );
};

var Loading = function Loading() {
    return _react2.default.createElement(
        'div',
        { style: { color: 'yellow' } },
        _react2.default.createElement(
            'h1',
            null,
            'Loading this heavy component...'
        )
    );
};

var Dynamic = function (_React$Component) {
    _inherits(Dynamic, _React$Component);

    function Dynamic(props) {
        _classCallCheck(this, Dynamic);

        var _this = _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).call(this, props));

        console.log("dynamic component constructor " + _this.props.payload);
        var component = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
            id: '',
            file: 'D:/websites/react-static/static-site-2/4/src/components/DynamicComponent.jsx',
            load: function load() {
                return Promise.all([__webpack_require__(83)("" + _this.props.payload), (0, _importCss3.default)('' + _this.props.payload, {
                    disableWarnings: true
                })]).then(function (proms) {
                    return proms[0];
                });
            },
            path: function path() {
                return _path3.default.join(__dirname, '' + _this.props.payload);
            },
            resolve: function resolve() {
                return /*require.resolve*/(__webpack_require__(108).resolve("" + _this.props.payload));
            },
            chunkName: function chunkName() {
                return '' + _this.props.payload;
            }
        }), {
            loading: Loading,
            error: Failed
        });
        _this.state = {
            component: component
        };
        return _this;
    }

    _createClass(Dynamic, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(this.state.component, this.props);
        }
    }]);

    return Dynamic;
}(_react2.default.Component);

exports.default = Dynamic;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 25 */
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

var IFrame = function (_React$Component) {
    _inherits(IFrame, _React$Component);

    function IFrame() {
        _classCallCheck(this, IFrame);

        return _possibleConstructorReturn(this, (IFrame.__proto__ || Object.getPrototypeOf(IFrame)).apply(this, arguments));
    }

    _createClass(IFrame, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("iframe", { width: "600", height: "450", src: this.props.src, frameBorder: "0", allowFullScreen: true });
        }
    }]);

    return IFrame;
}(_react2.default.Component);

exports.default = IFrame;

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

var _reactGa = __webpack_require__(58);

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
/* 27 */
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

var API_KEY = 'AIzaSyBc2-uDprThmL1avRG6W0BHLqVVhOoxcF0';
var CLIENT_ID = '640363567361-na8ad159n3hsoa0tugsves1o8n6crsti.apps.googleusercontent.com';
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

var Gapi = function (_React$Component) {
    _inherits(Gapi, _React$Component);

    function Gapi(props) {
        _classCallCheck(this, Gapi);

        var _this = _possibleConstructorReturn(this, (Gapi.__proto__ || Object.getPrototypeOf(Gapi)).call(this, props));

        _this.loadApi = _this.loadApi.bind(_this);
        _this.initClient = _this.initClient.bind(_this);

        _this.updateSigninStatus = _this.updateSigninStatus.bind(_this);
        _this.setupGapi = _this.setupGapi.bind(_this);

        _this.state = {
            loaded: false,
            authorizeButton: true,
            list: 'no files'
        };
        return _this;
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
            //this.props.setSignedIn(isSignedIn);
            console.log("update sign in status, " + isSignedIn);
        }
    }, {
        key: 'initClient',
        value: function initClient() {
            console.log("init client");
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(this.setupGapi);
        }
    }, {
        key: 'setupGapi',
        value: function setupGapi() {
            console.log("setting up gapi ");
            gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
            this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        }
    }, {
        key: 'renderSignedIn',
        value: function renderSignedIn() {
            try {
                var w = gapi.auth2;
                return _react2.default.createElement(
                    'p',
                    null,
                    'is signed in'
                );
            } catch (e) {
                return _react2.default.createElement(
                    'p',
                    null,
                    'is not signed in'
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Gapi;
}(_react2.default.Component);

exports.default = Gapi;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _Index = __webpack_require__(86);

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Sim from './../../games/g1/simulation/index.js';

//import Index from './../../games/g3/components/Index.jsx';


var Game = function (_React$Component) {
    _inherits(Game, _React$Component);

    function Game(props) {
        _classCallCheck(this, Game);

        return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));
    }

    _createClass(Game, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Index2.default, null)
            );
        }
    }]);

    return Game;
}(_react2.default.Component);

exports.default = Game;
// const mapStateToProps = (state, props) => {
//     return props.game.mapStateToProps(state);
// }

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         actions: bindActionCreators({
//             ...props.game.mapDispatchToProps()
//         }, dispatch)  
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Game);

/*
        this.state = {
            story: this.props.game.getStory(),
            sim: this.props.game.getSim()
        }
            <div>
                Game
                <this.state.story iId={'root'}/>
                <this.state.sim />
            
                </div>
*/

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: flex-end;\n    background-color:red;\n'], ['\n    display: flex;\n    justify-content: flex-end;\n    background-color:red;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                Bar,
                null,
                _react2.default.createElement(_IconButton2.default, { icon: "facebook" }),
                _react2.default.createElement(_IconButton2.default, { icon: "twitter" }),
                _react2.default.createElement(_IconButton2.default, { icon: "google" })
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withSiteData)(Menu);


var Bar = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reduxLogger = __webpack_require__(61);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _store = __webpack_require__(101);

var _store2 = _interopRequireDefault(_store);

var _Game = __webpack_require__(28);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window === 'undefined') {
    global.window = {};
}

//import Sim from './Simulation.jsx';

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        console.log("index constructor ");
        console.log(_store2.default);
        //expects to recieve the game
        //the game gives reducers, selectors, mapStteToProps, dispatchToStore, 
        //simulation and iterates through story nodes
        //the game displays the content, the simulation runs, stops and persists state
        //  let reducers = props.game.getReducers();
        // this.store = createStore(reducers);
        _this.store = (0, _redux.createStore)(_store2.default, {}, (0, _redux.applyMiddleware)(_reduxLogger2.default));

        console.log("sub store created");
        return _this;
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRedux.Provider,
                    { store: this.store },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_Game2.default, { game: this.props.game })
                    )
                )
            );
        }
    }]);

    return Index;
}(_react2.default.Component);
/*
<Provider store={this.store}>
            <div>
                <Game game={this.props.game} />
            </div>
          </Provider>
*/

exports.default = Index;

/*
import { createStore,  applyMiddleware } from 'redux'
import logger from 'redux-logger';

import reducer from './reducers'

if (typeof window === 'undefined') {
  global.window = {}
}

const store = createStore(
    reducer,
    {},
    applyMiddleware(logger),
  )
  
*/

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

var Wrapper = function (_React$Component) {
    _inherits(Wrapper, _React$Component);

    function Wrapper(props) {
        _classCallCheck(this, Wrapper);

        var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

        if (props.index === 3) {
            props.input.index = 1;
        }
        return _this;
    }

    _createClass(Wrapper, [{
        key: 'renderWrapper',
        value: function renderWrapper() {
            if (this.props.index < 3) {
                return _react2.default.createElement(Wrapper, { index: this.props.index + 1, input: this.props.input });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Wrapper ',
                this.props.index,
                ' : ',
                this.props.input.index,
                this.renderWrapper()
            );
        }
    }]);

    return Wrapper;
}(_react2.default.Component);

exports.default = Wrapper;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\frac{\text{', '}}{\text{', '}^2}'], ['\\frac{\\text{', '}}{\\text{', '}^2}']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline\n'], ['\n    display: inline\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(84);

var _reactKatex = __webpack_require__(85);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ids = __webpack_require__(34);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Katex = function (_React$Component) {
    _inherits(Katex, _React$Component);

    function Katex(props) {
        _classCallCheck(this, Katex);

        var _this = _possibleConstructorReturn(this, (Katex.__proto__ || Object.getPrototypeOf(Katex)).call(this, props));

        console.log("fat component constructor");
        console.log(props);
        _this.state = {
            id: (0, _ids.guid)()
        };
        return _this;
    }

    _createClass(Katex, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // ReactDOM.render(<BlockMath math={"c = \\pm\\sqrt{a^2 + b^2}"}/>,
            //         document.getElementById('math'));
            var top = "m";
            var bottom = "s";
            _reactDom2.default.render(_react2.default.createElement(
                _reactKatex.InlineMath,
                null,
                String.raw(_templateObject, top, bottom)
            ), document.getElementById(this.state.id));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(Container, { id: this.state.id });
        }
    }]);

    return Katex;
}(_react2.default.Component);

exports.default = Katex;


var Container = _styledComponents2.default.span(_templateObject2);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.guid = guid;
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//import constants from './Constants.js';

var constants = {
    message: function message(kId) {
        return { kId: kId };
    },
    item: function item(kId, _item) {
        return { kId: kId, item: _item };
    },
    answer: function answer(kId, answers) {
        return _extends({ kId: kId }, answers);
    }
};

exports.default = constants;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.dispatchAny = dispatchAny;
exports.nextStep = nextStep;
exports.playSim = playSim;
//import {constants} from './../story/Constants.js';

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        ui: {
            play: true
        },
        sim: {
            t: 0,
            temp: 20
        }
    };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'NEXT_STEP':
            //console.log('action next step ', action); //{t: 1, temp: 20.75225369254921}
            return _extends({}, state, {
                sim: _extends({}, state.sim, action.payload.step)
            });
        case 'PLAY_SIM':
            return _extends({}, state, {
                ui: _extends({}, state.ui, {
                    play: action.payload.play
                })
            });
        default:
            return state;
    }
};

function dispatchAny(action) {
    return action;
}

function nextStep(step) {
    return {
        type: 'NEXT_STEP',
        payload: {
            step: step
        }
    };
}

function playSim(play) {
    return {
        type: 'PLAY_SIM',
        payload: {
            play: play
        }
    };
}

/***/ }),
/* 37 */
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

var Choice = function (_React$Component) {
    _inherits(Choice, _React$Component);

    function Choice(props) {
        _classCallCheck(this, Choice);

        var _this = _possibleConstructorReturn(this, (Choice.__proto__ || Object.getPrototypeOf(Choice)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Choice, [{
        key: 'handleClick',
        value: function handleClick() {
            this.props.onChoice(this.props.id);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                null,
                this.props.text
            );
        }
    }]);

    return Choice;
}(_react2.default.Component);

exports.default = Choice;

/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports
exports.push([module.i, "@import url(//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css);", ""]);

// module
exports.push([module.i, ".ct-axis-title{color:#fff}@-webkit-keyframes dance{0%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:rotate(3deg);transform:rotate(3deg)}}@keyframes dance{0%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:rotate(3deg);transform:rotate(3deg)}}@-webkit-keyframes verticalChange{0%{-webkit-transform:translate(-100%);transform:translate(-100%)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes verticalChange{0%{-webkit-transform:translate(-100%);transform:translate(-100%)}to{-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes colors{0%{stroke:orange}to{stroke:blue}}@keyframes colors{0%{stroke:orange}to{stroke:blue}}@-webkit-keyframes scaleUp{0%{opacity:0;-webkit-transform:scaleY(0) scaleX(0);transform:scaleY(0) scaleX(0)}to{opacity:1;-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}}@keyframes scaleUp{0%{opacity:0;-webkit-transform:scaleY(0) scaleX(0);transform:scaleY(0) scaleX(0)}to{opacity:1;-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}}", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".fade-in-enter{opacity:.01}.fade-in-enter.fade-in-enter-active{opacity:1;-webkit-transition:opacity .5s ease-in;-o-transition:opacity .5s ease-in;transition:opacity .5s ease-in}.fade-in-leave{opacity:1}.fade-in-leave.fade-in-leave-active{opacity:.01;-webkit-transition:opacity .3s ease-in;-o-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.fade-in-appear{opacity:.01}.fade-in-appear.fade-in-appear-active{opacity:1;-webkit-transition:opacity .5s ease-in;-o-transition:opacity .5s ease-in;transition:opacity .5s ease-in}", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getRandomItem = exports.getRandomItem = function getRandomItem(ray) {
    var index = Math.floor(ray.length * Math.random());
    return ray[index];
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setComponentState = setComponentState;
exports.setComponentNodeId = setComponentNodeId;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    console.log("updating component state");
    console.log(action);
    switch (action.type) {
        case 'COMPONENT_STATE':
            return _extends({}, state, _defineProperty({}, action.payload.id, action.payload.state));
        case 'COMPONENT_NODE_ID':
            return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], {
                nodeId: action.payload.nodeId
            })));
        default:
            return state;
    }
};

function setComponentState(payload) {
    console.log("setcomponentstate");
    console.log(payload);
    return {
        type: 'COMPONENT_STATE',
        payload: payload
    };
}

function setComponentNodeId(payload) {
    console.log("setComponentNodeId");
    console.log(payload);
    return {
        type: 'COMPONENT_NODE_ID',
        payload: payload
    };
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(76);

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

var _reportChunks = __webpack_require__(77);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(49);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(78);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(48);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module)))

/***/ }),
/* 48 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size:1em;\n  color: rgb(255,255,255,1);\n  width:100%;\n  padding: 10px;\n  padding-bottom:0px;\n  box-sizing: border-box;\n  a{\n    width:100%;\n    height:100%;\n    opacity:1;\n  }\n'], ['\n  font-size:1em;\n  color: rgb(255,255,255,1);\n  width:100%;\n  padding: 10px;\n  padding-bottom:0px;\n  box-sizing: border-box;\n  a{\n    width:100%;\n    height:100%;\n    opacity:1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 50%;\n  background-color: rgb(255,255,255,0.5);\n  box-sizing: border-box;\n  margin-top: 100px;\n  margin-left: 55px;\n'], ['\n  width: 50%;\n  background-color: rgb(255,255,255,0.5);\n  box-sizing: border-box;\n  margin-top: 100px;\n  margin-left: 55px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width:100%;\n  height:100%;\n  opacity:1;\n  margin-top: 5px;\n  padding:20px;\n  padding-bottom: 5px;\n  box-sizing: border-box;\n  border-bottom: 2px solid white;\n  transition: all 0.5s ease-in;\n  &:hover{\n    background-color: white;\n  }\n  h2{\n    font-size: 1.5em;\n    display: inline;\n    color: red;\n    opacity:1;\n  }\n  p{\n    font-size: 0.7em;\n    display: inline;\n    color: black;\n    opacity:1;\n  }\n'], ['\n  width:100%;\n  height:100%;\n  opacity:1;\n  margin-top: 5px;\n  padding:20px;\n  padding-bottom: 5px;\n  box-sizing: border-box;\n  border-bottom: 2px solid white;\n  transition: all 0.5s ease-in;\n  &:hover{\n    background-color: white;\n  }\n  h2{\n    font-size: 1.5em;\n    display: inline;\n    color: red;\n    opacity:1;\n  }\n  p{\n    font-size: 0.7em;\n    display: inline;\n    color: black;\n    opacity:1;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _MainMenu = __webpack_require__(6);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _Trends = __webpack_require__(15);

var _Trends2 = _interopRequireDefault(_Trends);

var _Bg = __webpack_require__(21);

var _Bg2 = _interopRequireDefault(_Bg);

var _Container = __webpack_require__(22);

var _Container2 = _interopRequireDefault(_Container);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FadeIn = __webpack_require__(10);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

var _SlideUp = __webpack_require__(23);

var _SlideUp2 = _interopRequireDefault(_SlideUp);

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
    // console.log("home");
    // console.log(this.props);
  }

  _createClass(Games, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Bg2.default,
          null,
          _react2.default.createElement(_Trends2.default, null)
        ),
        _react2.default.createElement(
          _Container2.default,
          null,
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
              this.props.posts.map(function (post, i) {
                return _react2.default.createElement(
                  _reactStatic.Link,
                  { key: post.id, to: '/posts/' + post.id, classNames: 'homepost' },
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
                      null,
                      post.tags.map(function (t) {
                        return t + " ";
                      })
                    )
                  )
                );
              })
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
var Post = _styledComponents2.default.div(_templateObject3);

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("chartist-plugin-legend");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("chartist-plugin-axistitle");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

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

var _reactStatic = __webpack_require__(5);

var _MainMenu = __webpack_require__(6);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        return _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));
        // console.log("indi post");
        // console.log(this.props);
    }

    _createClass(Games, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_MainMenu2.default, null),
                _react2.default.createElement(
                    'h2',
                    null,
                    'indi post'
                )
            );
        }
    }]);

    return Games;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Games);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _DynamicComponent = __webpack_require__(24);

var _DynamicComponent2 = _interopRequireDefault(_DynamicComponent);

var _reactGa = __webpack_require__(58);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _FadeIn = __webpack_require__(10);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

var _MainMenu = __webpack_require__(6);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Wrapper = __webpack_require__(31);

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _IFrame = __webpack_require__(25);

var _IFrame2 = _interopRequireDefault(_IFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fnc = function fnc() {
    return _react2.default.createElement(
        'p',
        null,
        'hello'
    );
};

var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        var _this = _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));

        _this.addKatex = _this.addKatex.bind(_this);
        _this.getKatex = _this.getKatex.bind(_this);
        _this.getExpression = _this.getExpression.bind(_this);
        //  let text = `this.getKatex("c = \\pm\\sqrt{a^2 + b^2}")`;
        //let text = `${fnc()}`;
        _this.state = {
            katex: []
        };
        return _this;
    }

    _createClass(Games, [{
        key: 'getKatex',
        value: function getKatex(equation) {
            return _react2.default.createElement(_DynamicComponent2.default, { payload: './UI/math/Katex.jsx' });
        }
    }, {
        key: 'getExpression',
        value: function getExpression() {
            return this.getKatex("c = \\pm\\sqrt{a^2 + b^2}");
        }
    }, {
        key: 'getText',
        value: function getText(text) {
            return _react2.default.createElement(
                'p',
                { style: { color: 'red', backgroundColor: 'blue', display: 'inline' } },
                text
            );
        }
    }, {
        key: 'addKatex',
        value: function addKatex() {
            this.setState({
                katex: [].concat(_toConsumableArray(this.state.katex), [_react2.default.createElement(_DynamicComponent2.default, { payload: './UI/math/Katex.jsx' })])
            });
        }
    }, {
        key: 'renderKatex',
        value: function renderKatex() {
            return this.state.katex.map(function (e) {
                return e;
            });
        }
    }, {
        key: 'sendEvent',
        value: function sendEvent() {
            _reactGa2.default.event({
                category: 'Editing',
                action: 'Deleted Component',
                label: 'Game Widget'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_MainMenu2.default, null),
                _react2.default.createElement(
                    'h1',
                    { style: { textAlign: 'center' } },
                    'Welcome to'
                ),
                _react2.default.createElement(
                    'h2',
                    null,
                    'site 3'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'set variable'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.getExpression(),
                    this.getText("hello"),
                    this.getExpression()
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_IconButton2.default, { icon: "google" }),
                    _react2.default.createElement(_IconButton2.default, { icon: "facebook" }),
                    _react2.default.createElement(_IconButton2.default, { icon: "twitter" }),
                    _react2.default.createElement(_IconButton2.default, { icon: "paragraph-left" })
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.sendEvent();
                        } },
                    'event'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.addKatex },
                    'Katex'
                ),
                this.renderKatex(),
                _react2.default.createElement(_Wrapper2.default, { index: 0, input: { index: 0 } }),
                _react2.default.createElement(_IFrame2.default, { src: "https://datastudio.google.com/embed/reporting/1AD-Xywiz627t-znwAMj1oe_7WL8fv-XM/page/MCWT" }),
                'All Posts:',
                _react2.default.createElement(
                    _FadeIn2.default,
                    null,
                    _react2.default.createElement(
                        'ul',
                        null,
                        this.props.games.map(function (post) {
                            return _react2.default.createElement(
                                'li',
                                { key: post.id },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { key: post.id, to: '/games/' + post.id },
                                    post.title
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Games;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withSiteData)((0, _reactStatic.withRouteData)(Games));

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports
exports.push([module.i, "@import url(https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createSample = undefined;

var _randomizer = __webpack_require__(42);

var _ids = __webpack_require__(34);

var _Constants = __webpack_require__(3);

console.log("creating samples");
var materials = Object.keys(_Constants.constants.elements);
console.log("create sample materials", materials);

var createSample = exports.createSample = function createSample() {
    var material = (0, _randomizer.getRandomItem)(materials);
    var id = (0, _ids.guid)();
    return {
        id: id,
        type: _Constants.constants.items.asteroidSample,
        game: {
            element: material,
            weight: 10 * Math.random() + 3
        },
        user: {
            element: null,
            weight: null
        }
    };
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addToStock = exports.createStock = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import {getRandomItem} from './../../../../utilities/randomizer.js';
// import {guid} from './../../../../utilities/ids.js';


var _Constants = __webpack_require__(3);

//a stock is an accumulation of an item based on either count or weight
//the contents of a stock may be different from what the id claims to be if the user is wrong
var createStock = exports.createStock = function createStock(id) {
    return {
        id: id
    };
};

//TODO, may want to add deep cloning if stock becomes multi-layered

var addToStock = exports.addToStock = function addToStock(stock, key, value) {
    var newStock = _extends({}, stock);
    var current = 0;
    if (stock[key]) {
        current = stock[key];
    }
    newStock[key] = current + value;
    console.log("addToStock", newStock);
    return newStock;
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _GameMenu = __webpack_require__(29);

var _GameMenu2 = _interopRequireDefault(_GameMenu);

var _Index = __webpack_require__(30);

var _Index2 = _interopRequireDefault(_Index);

var _index = __webpack_require__(109);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Games = function (_React$Component) {
    _inherits(Games, _React$Component);

    function Games(props) {
        _classCallCheck(this, Games);

        var _this = _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));

        console.log("indi game");
        console.log(_this.props);
        console.log("g1:");
        console.log(_index2.default);
        return _this;
    }

    _createClass(Games, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GameMenu2.default, null),
                _react2.default.createElement(_Index2.default, { game: _index2.default })
            );
        }
    }]);

    return Games;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Games);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Simulation = __webpack_require__(110);

var _Simulation2 = _interopRequireDefault(_Simulation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//each tick it updates store state


console.log("g1 sim index");

var Simulation = function (_Sim) {
    _inherits(Simulation, _Sim);

    function Simulation(props) {
        _classCallCheck(this, Simulation);

        return _possibleConstructorReturn(this, (Simulation.__proto__ || Object.getPrototypeOf(Simulation)).call(this, props));
    }

    _createClass(Simulation, [{
        key: "getInterval",
        value: function getInterval() {
            return 5000;
        }
    }, {
        key: "update",
        value: function update() {
            console.log("simulation update!!");
            // this.props.actions.dispatch.step({
            //     time: 10,
            //     temp:30
            // })
        }
    }]);

    return Simulation;
}(_Simulation2.default);

exports.default = Simulation;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    background-color: black;\n    padding: 10px;\n'], ['\n    background-color: black;\n    padding: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: block;\n    background-color: cyan;\n'], ['\n    display: block;\n    background-color: cyan;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: fixed;\n    left: 0px;\n    top: 50px;\n    background-color: red;\n    display: block;\n    height: 100vh;\n    width: 100vw;\n'], ['\n    position: fixed;\n    left: 0px;\n    top: 50px;\n    background-color: red;\n    display: block;\n    height: 100vh;\n    width: 100vw;\n']);

var _ids = __webpack_require__(34);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Choice = __webpack_require__(112);

var _Choice2 = _interopRequireDefault(_Choice);

var _Button = __webpack_require__(66);

var _Button2 = _interopRequireDefault(_Button);

var _Text = __webpack_require__(65);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Tree from './Tree.jsx';


//import FadeIn from './../../../components/UI/animations/FadeIn.jsx';
//import Hello from './hrllo.jsx';

var keys = {
    branchId: 'bId',
    nodeId: 'nodeId',
    iId: 'iId',
    vTree: 'vTree',
    text: 'text',
    choices: 'choices',
    start: 'start'
};
var colors = ['red', 'blue', 'yellow', 'green'];
//a smart component that gets the story info

var Story = function (_React$Component) {
    _inherits(Story, _React$Component);

    function Story(props) {
        var _extends2;

        _classCallCheck(this, Story);

        var _this = _possibleConstructorReturn(this, (Story.__proto__ || Object.getPrototypeOf(Story)).call(this, props));

        console.log("story parent constructor");
        console.log(props);
        _this.renderNode = _this.renderNode.bind(_this);
        _this.renderTree = _this.renderTree.bind(_this);
        _this.onInput = _this.onInput.bind(_this);
        console.log("my state:");
        console.log(props);
        // this.onSubStoryComplete = this.onSubStoryComplete.bind(this);
        //  retrieve any instance state from the store
        var mystate = props.store.component[props.iId];

        console.log(mystate);
        _this.state = _extends((_extends2 = {}, _defineProperty(_extends2, keys.branchId, (0, _ids.guid)()), _defineProperty(_extends2, 'keys', keys), _extends2), mystate);
        return _this;
    }

    _createClass(Story, [{
        key: 'getNodeId',
        value: function getNodeId() {
            return this.props.store.component[this.props.iId] ? this.props.store.component[this.props.iId] : this.state.keys.start;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("component unmounting, saving state nodeId: " + this.state.nodeId);

            this.props.actions.setComponentState({
                id: this.props.iId,
                state: {
                    nodeId: this.getNodeId()
                }
            });
        }
    }, {
        key: 'textItem',
        value: function textItem(type, text) {
            return { type: type, text: text };
        }
    }, {
        key: 'textNode',
        value: function textNode(nodeId, text) {
            return _react2.default.createElement(_Text2.default, { nodeId: nodeId, text: text });
        }
        //key is how the story will recognize the input
        //value is the value of the input - eg a button set will have a key uuid, button A will have value A

    }, {
        key: 'btnItem',
        value: function btnItem(nodeId, iId, child) {
            return { nodeId: nodeId, iId: iId, child: child };
        }
    }, {
        key: 'choiceNode',
        value: function choiceNode(nodeId, text, choices) {
            return _react2.default.createElement(_Choice2.default, { nodeId: nodeId, text: text, choices: choices, onInput: this.onInput });
        }
    }, {
        key: 'subTreeNode',
        value: function subTreeNode(iId, Branch) {
            return _react2.default.createElement(Branch, { iId: iId, onInput: this.onInput, id: (0, _ids.guid)() });
        }
    }, {
        key: 'onChoice',
        value: function onChoice(input) {
            // console.log("on story parent input - this should be over written");
            // console.log(input);
        }
    }, {
        key: 'bgFill',
        value: function bgFill(children) {
            return _react2.default.createElement(
                FadeIn,
                null,
                _react2.default.createElement(
                    BgFill,
                    null,
                    children
                )
            );
        }
    }, {
        key: 'bgInline',
        value: function bgInline(children) {
            return _react2.default.createElement(
                BgInline,
                null,
                children
            );
        }
    }, {
        key: 'getBg',
        value: function getBg() {
            return this.bgInline;
        }

        // onSubStoryComplete(input){
        //      console.log("subtreee complete, consolidate info");
        //     // console.log(input);
        //     //set relevant subtree to null
        // }

    }, {
        key: 'renderTree',
        value: function renderTree(nodes) {
            //if subtree, render that, if not render this
            //  let nodes = this.renderNode();
            if (!nodes) {
                return _react2.default.createElement(
                    'p',
                    null,
                    'Error rendering tree'
                );
            } else if (nodes.length <= 0) {
                return _react2.default.createElement(
                    'p',
                    null,
                    'no tree nodes to render'
                );
            } else {
                return nodes;
            }
        }

        //called whenever store reducers are updated

    }, {
        key: 'render',
        value: function render() {
            var bg = this.getBg();
            var nodes = this.renderNode();
            return (
                // <Container>
                //     {bg(nodes)}
                // </Container>
                // <div>
                //     {this.renderTree(nodes)}
                // </div>
                _react2.default.createElement(
                    'div',
                    null,
                    nodes.map(function (e) {
                        return e;
                    })
                )
            );
        }
    }]);

    return Story;
}(_react2.default.Component);

exports.default = Story;

var Container = _styledComponents2.default.div(_templateObject);
var BgInline = _styledComponents2.default.div(_templateObject2);
var BgFill = _styledComponents2.default.div(_templateObject3);

/***/ }),
/* 65 */
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

var Text = function (_React$Component) {
    _inherits(Text, _React$Component);

    function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
    }

    _createClass(Text, [{
        key: 'renderKatex',
        value: function renderKatex(math, i) {
            return _react2.default.createElement(
                'p',
                { key: i },
                math.text
            );
        }
    }, {
        key: 'renderText',
        value: function renderText(text, i) {
            return _react2.default.createElement(
                'p',
                { key: i },
                text.text
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // console.log("rendering a text node");
            // console.log(this.props);
            return _react2.default.createElement(
                'div',
                null,
                this.props.text.map(function (e, i) {
                    if (e.type === 'math') {
                        return _this2.renderKatex(e, i);
                    } else {
                        return _this2.renderText(e, i);
                    }
                })
            );
        }
    }]);

    return Text;
}(_react2.default.Component);

exports.default = Text;

/***/ }),
/* 66 */
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

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            // console.log("rendering choice button");
            // console.log(this.props);
            return _react2.default.createElement(
                'button',
                { key: this.props.iId, onClick: function onClick() {
                        _this2.props.onInput({ nodeId: _this2.props.nodeId, iId: _this2.props.iId });
                    } },
                this.props.children
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

exports.default = Button;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        health: 100
    };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'CHANGE_HEALTH':
            return _extends({}, state, {
                health: state.health + action.payload
            });
        default:
            return state;
    }
};

function changeHealth(payload) {
    return {
        type: 'CHANGE_HEALTH',
        payload: payload
    };
}

var actions = exports.actions = {
    changeHealth: changeHealth
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.changeHealth = changeHealth;
var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        health: 100
    };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'CHANGE_HEALTH':
            return _extends({}, state, {
                health: state.health + action.payload
            });
        default:
            return state;
    }
};

function changeHealth(payload) {
    return {
        type: 'CHANGE_HEALTH',
        payload: payload
    };
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _MainMenu = __webpack_require__(6);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var About = function About() {
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
    ),
    _react2.default.createElement(CounterConnected, null)
  );
};

exports.default = About;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(72);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _reactHotLoader = __webpack_require__(73);

var _reactStaticRoutes = __webpack_require__(74);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _redux = __webpack_require__(115);

var _redux2 = _interopRequireDefault(_redux);

__webpack_require__(118);

var _Analytics = __webpack_require__(26);

var _Analytics2 = _interopRequireDefault(_Analytics);

var _Gapi = __webpack_require__(27);

var _Gapi2 = _interopRequireDefault(_Gapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var App = function App() {
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
          { className: 'content' },
          _react2.default.createElement(_reactStaticRoutes2.default, null)
        )
      )
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(44);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(45);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(46);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(75);

var _reactUniversalComponent = __webpack_require__(47);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(5);

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
  id: '../src/containers/Home',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 50)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(50);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 54)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(54);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Games',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 55)), (0, _importCss3.default)('src/containers/Games', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Games');
  },
  resolve: function resolve() {
    return /*require.resolve*/(55);
  },
  chunkName: function chunkName() {
    return 'src/containers/Games';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Game',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 62)), (0, _importCss3.default)('src/containers/Game', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Game');
  },
  resolve: function resolve() {
    return /*require.resolve*/(62);
  },
  chunkName: function chunkName() {
    return 'src/containers/Game';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 69)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(69);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 70)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(70);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 5

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
/* 75 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(48);

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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(49);

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
/* 78 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-chartist");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(81);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Adapter = function () {
    function Adapter(data, label, xPath, yPaths) {
        var _this = this;

        _classCallCheck(this, Adapter);

        //data is an array of objects
        //data is reformed in a series with a label and datapoints with x and y properties
        this.label = label;
        this.x = xPath;
        this.y = yPaths;

        this.series = [];
        yPaths.map(function (e) {
            _this.series.push([]);
        });
        this.labels = [];
        this.updateData(data);
    }

    _createClass(Adapter, [{
        key: 'updateData',
        value: function updateData(data) {
            var _this2 = this;

            if (data.length > this.labels.length) {
                var _loop = function _loop(i) {
                    var x = (0, _lodash.get)(data[i], _this2.x);
                    _this2.labels.push(x);
                    _this2.y.map(function (e, yIndex) {
                        var yv = (0, _lodash.get)(data[i], e);
                        var ray = _this2.series[yIndex];
                        ray.push(yv);
                    });
                };

                for (var i = this.labels.length; i < data.length; i++) {
                    _loop(i);
                }
            }
        }
    }, {
        key: 'createPoint',
        value: function createPoint(x, y) {
            return { x: x, y: y };
        }
    }, {
        key: 'getSeries',
        value: function getSeries() {
            return {
                name: this.label,
                labels: this.labels,
                series: this.series
            };
        }
    }]);

    return Adapter;
}();

exports.default = Adapter;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = [{"Month":"2004-01","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":100},{"Month":"2004-02","math: (Worldwide)":37,"physics: (Worldwide)":22,"chemistry: (Worldwide)":22,"biology: (Worldwide)":18,"science: (Worldwide)":98},{"Month":"2004-03","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":20,"biology: (Worldwide)":17,"science: (Worldwide)":90},{"Month":"2004-04","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":20,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-05","math: (Worldwide)":33,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":15,"science: (Worldwide)":77},{"Month":"2004-06","math: (Worldwide)":27,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":68},{"Month":"2004-07","math: (Worldwide)":21,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2004-08","math: (Worldwide)":24,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":68},{"Month":"2004-09","math: (Worldwide)":37,"physics: (Worldwide)":19,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":87},{"Month":"2004-10","math: (Worldwide)":37,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":17,"science: (Worldwide)":86},{"Month":"2004-11","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-12","math: (Worldwide)":30,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":13,"science: (Worldwide)":72},{"Month":"2005-01","math: (Worldwide)":34,"physics: (Worldwide)":18,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":87},{"Month":"2005-02","math: (Worldwide)":35,"physics: (Worldwide)":18,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":88},{"Month":"2005-03","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":79},{"Month":"2005-04","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-05","math: (Worldwide)":32,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":71},{"Month":"2005-06","math: (Worldwide)":28,"physics: (Worldwide)":15,"chemistry: (Worldwide)":16,"biology: (Worldwide)":12,"science: (Worldwide)":63},{"Month":"2005-07","math: (Worldwide)":20,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2005-08","math: (Worldwide)":24,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2005-09","math: (Worldwide)":36,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":74},{"Month":"2005-10","math: (Worldwide)":35,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":76},{"Month":"2005-11","math: (Worldwide)":33,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-12","math: (Worldwide)":27,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":63},{"Month":"2006-01","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":76},{"Month":"2006-02","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":74},{"Month":"2006-03","math: (Worldwide)":32,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":70},{"Month":"2006-04","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":64},{"Month":"2006-05","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":61},{"Month":"2006-06","math: (Worldwide)":26,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2006-07","math: (Worldwide)":18,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2006-08","math: (Worldwide)":23,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":55},{"Month":"2006-09","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":69},{"Month":"2006-10","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":65},{"Month":"2006-11","math: (Worldwide)":30,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":61},{"Month":"2006-12","math: (Worldwide)":26,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2007-01","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":65},{"Month":"2007-02","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":62},{"Month":"2007-03","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":62},{"Month":"2007-04","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2007-05","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2007-06","math: (Worldwide)":24,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2007-07","math: (Worldwide)":18,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":44},{"Month":"2007-08","math: (Worldwide)":21,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2007-09","math: (Worldwide)":31,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":57},{"Month":"2007-10","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":60},{"Month":"2007-11","math: (Worldwide)":29,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2007-12","math: (Worldwide)":25,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-01","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-02","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-03","math: (Worldwide)":27,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2008-04","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2008-05","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-06","math: (Worldwide)":24,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2008-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2008-08","math: (Worldwide)":21,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2008-09","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2008-10","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":51},{"Month":"2008-11","math: (Worldwide)":29,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2008-12","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2009-01","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":53},{"Month":"2009-02","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2009-03","math: (Worldwide)":32,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2009-04","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2009-05","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2009-06","math: (Worldwide)":26,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":44},{"Month":"2009-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":38},{"Month":"2009-08","math: (Worldwide)":22,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2009-09","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2009-10","math: (Worldwide)":34,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-11","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-12","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2010-01","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2010-02","math: (Worldwide)":35,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-03","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-04","math: (Worldwide)":35,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2010-05","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2010-06","math: (Worldwide)":30,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2010-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":39},{"Month":"2010-08","math: (Worldwide)":23,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2010-09","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2010-10","math: (Worldwide)":38,"physics: (Worldwide)":13,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-11","math: (Worldwide)":39,"physics: (Worldwide)":13,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-12","math: (Worldwide)":34,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2011-01","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2011-02","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":47},{"Month":"2011-03","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2011-04","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2011-05","math: (Worldwide)":42,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2011-06","math: (Worldwide)":33,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2011-07","math: (Worldwide)":20,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":36},{"Month":"2011-08","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2011-09","math: (Worldwide)":40,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":48},{"Month":"2011-10","math: (Worldwide)":43,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2011-11","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2011-12","math: (Worldwide)":41,"physics: (Worldwide)":10,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2012-01","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2012-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2012-03","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-05","math: (Worldwide)":59,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-06","math: (Worldwide)":40,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2012-07","math: (Worldwide)":26,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2012-08","math: (Worldwide)":31,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2012-09","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":47},{"Month":"2012-10","math: (Worldwide)":50,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2012-12","math: (Worldwide)":48,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":35},{"Month":"2013-01","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-02","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-03","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2013-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2013-05","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":40},{"Month":"2013-06","math: (Worldwide)":37,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2013-07","math: (Worldwide)":23,"physics: (Worldwide)":7,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2013-08","math: (Worldwide)":28,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2013-09","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2013-10","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2013-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2013-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":36},{"Month":"2014-01","math: (Worldwide)":45,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2014-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":42},{"Month":"2014-04","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-05","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-06","math: (Worldwide)":37,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2014-07","math: (Worldwide)":22,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2014-08","math: (Worldwide)":29,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2014-09","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2014-10","math: (Worldwide)":56,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2014-11","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-12","math: (Worldwide)":47,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2015-01","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-02","math: (Worldwide)":53,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2015-04","math: (Worldwide)":51,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2015-05","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2015-06","math: (Worldwide)":36,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2015-07","math: (Worldwide)":21,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2015-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2015-09","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2015-10","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-11","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-01","math: (Worldwide)":43,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2016-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2016-03","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-04","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-05","math: (Worldwide)":49,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-06","math: (Worldwide)":31,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2016-07","math: (Worldwide)":18,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":33},{"Month":"2016-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-09","math: (Worldwide)":55,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2016-10","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-11","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":44},{"Month":"2016-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2017-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2017-02","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2017-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2017-04","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2017-05","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-06","math: (Worldwide)":30,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2017-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2017-08","math: (Worldwide)":32,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2017-09","math: (Worldwide)":53,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":45},{"Month":"2017-10","math: (Worldwide)":55,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-11","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2017-12","math: (Worldwide)":46,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2018-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-02","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2018-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-04","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":42},{"Month":"2018-05","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2018-06","math: (Worldwide)":33,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38}]

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DynamicComponent": [
		24
	],
	"./DynamicComponent.jsx": [
		24
	],
	"./Trends": [
		15,
		0
	],
	"./Trends.jsx": [
		15,
		0
	],
	"./UI/Colors": [
		7
	],
	"./UI/Colors.js": [
		7
	],
	"./UI/IFrame": [
		25
	],
	"./UI/IFrame.jsx": [
		25
	],
	"./UI/animations/FadeIn": [
		10
	],
	"./UI/animations/FadeIn.jsx": [
		10
	],
	"./UI/animations/SlideUp": [
		23
	],
	"./UI/animations/SlideUp.jsx": [
		23
	],
	"./UI/animations/styles.css": [
		41
	],
	"./UI/elements/Bg": [
		21
	],
	"./UI/elements/Bg.jsx": [
		21
	],
	"./UI/elements/Container": [
		22
	],
	"./UI/elements/Container.jsx": [
		22
	],
	"./UI/elements/IconButton": [
		11
	],
	"./UI/elements/IconButton.jsx": [
		11
	],
	"./UI/elements/icons.css": [
		56,
		0
	],
	"./UI/graphs/Line": [
		16,
		0
	],
	"./UI/graphs/Line.jsx": [
		16,
		0
	],
	"./UI/graphs/animations": [
		17
	],
	"./UI/graphs/animations.js": [
		17
	],
	"./UI/graphs/main.css": [
		40
	],
	"./UI/graphs/styles": [
		19
	],
	"./UI/graphs/styles.js": [
		19
	],
	"./UI/graphs/utilities": [
		20
	],
	"./UI/graphs/utilities.js": [
		20
	],
	"./UI/math/Katex": [
		33,
		0
	],
	"./UI/math/Katex.jsx": [
		33,
		0
	],
	"./UI/math/katex.css": [
		57,
		0
	],
	"./apis/Analytics": [
		26
	],
	"./apis/Analytics.jsx": [
		26
	],
	"./apis/Gapi": [
		27
	],
	"./apis/Gapi.jsx": [
		27
	],
	"./constants": [
		18
	],
	"./constants.js": [
		18
	],
	"./game/Game": [
		28,
		0
	],
	"./game/Game.jsx": [
		28,
		0
	],
	"./game/GameMenu": [
		29
	],
	"./game/GameMenu.jsx": [
		29
	],
	"./game/Index": [
		30,
		0
	],
	"./game/Index.jsx": [
		30,
		0
	],
	"./game/Wrapper": [
		31
	],
	"./game/Wrapper.jsx": [
		31
	],
	"./game/views/Choice": [
		37,
		0
	],
	"./game/views/Choice.jsx": [
		37,
		0
	],
	"./layout/MainMenu": [
		6
	],
	"./layout/MainMenu.jsx": [
		6
	],
	"./layout/menu.css": [
		39
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 83;
module.exports = webpackAsyncContext;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("katex/dist/katex.min.css");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("react-katex");

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

var _Game = __webpack_require__(87);

var _Game2 = _interopRequireDefault(_Game);

var _Index = __webpack_require__(97);

var _Index2 = _interopRequireDefault(_Index);

var _PlayButtons = __webpack_require__(99);

var _PlayButtons2 = _interopRequireDefault(_PlayButtons);

var _InitializeGame = __webpack_require__(100);

var _InitializeGame2 = _interopRequireDefault(_InitializeGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_InitializeGame2.default, null),
                _react2.default.createElement(_PlayButtons2.default, null),
                _react2.default.createElement(_Index2.default, null),
                _react2.default.createElement(_Game2.default, null)
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;

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

var _Factory = __webpack_require__(88);

var _Factory2 = _interopRequireDefault(_Factory);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        //retrieve player position to load the correct fsm state
        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        console.log("game props");
        console.log(props);
        _this.getFSM = _this.getFSM.bind(_this);
        _this.state = {};
        return _this;
    }

    _createClass(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getFSM(this.props.zone);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, currentState) {
            console.log("component will update, is there a different zone? " + (nextProps.zone !== currentState.fsm.id));
            // console.log(current);
            // console.log(next);
            if (nextProps.zone !== currentState.fsm.id) {
                var next = nextProps.zone;
                this.getFSM(next);
            }
        }
    }, {
        key: 'getFSM',
        value: function getFSM(zone) {
            var fsm = (0, _Factory2.default)(zone);
            this.setState({
                fsm: fsm
            });
        }
    }, {
        key: 'renderFSM',
        value: function renderFSM() {
            if (this.state.fsm) {
                return _react2.default.createElement(this.state.fsm.component, { id: this.state.fsm.id, showEntry: false, factory: _Factory2.default });
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
                    'current zone: ',
                    this.props.zone
                ),
                this.renderFSM()
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        zone: state.game.zone
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Index);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Lounge = __webpack_require__(89);

var lounge = _interopRequireWildcard(_Lounge);

var _Control = __webpack_require__(91);

var control = _interopRequireWildcard(_Control);

var _Mine = __webpack_require__(92);

var mine = _interopRequireWildcard(_Mine);

var _Inventory = __webpack_require__(93);

var inventory = _interopRequireWildcard(_Inventory);

var _IdentifyElem = __webpack_require__(94);

var idElem = _interopRequireWildcard(_IdentifyElem);

var _asteroidSample = __webpack_require__(95);

var AstSamp = _interopRequireWildcard(_asteroidSample);

var _Engine = __webpack_require__(96);

var Engine = _interopRequireWildcard(_Engine);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (name) {
    console.log('factory name' + name);
    switch (name) {
        case control.id:
            return control;
        case lounge.id:
            return lounge;
        case mine.id:
            return mine;
        case inventory.id:
            return inventory;
        case idElem.id:
            return idElem;
        case AstSamp.id:
            return AstSamp;
        case Engine.id:
            return Engine;
    }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.Lounge = exports.id = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _selectors = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(8);

var _Constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var S_IN = 'in',
    S_CONTROL = 'control',
    I_ENTRY_1 = 'e1',
    I_CONTROL = 'ic',
    I_INVENTORY = 'inv';
var id = exports.id = 'lounge';

var Lounge = exports.Lounge = function (_React$Component) {
    _inherits(Lounge, _React$Component);

    function Lounge(props) {
        _classCallCheck(this, Lounge);

        var _this = _possibleConstructorReturn(this, (Lounge.__proto__ || Object.getPrototypeOf(Lounge)).call(this, props));

        _this.onInput = _this.onInput.bind(_this);
        // console.log("lounge constructor, props:");
        // console.log(props);
        return _this;
    }

    _createClass(Lounge, [{
        key: 'onInput',
        value: function onInput(input) {
            // console.log("lounge recieved input state: ");
            // console.log(input);
            if (input[_Constants.constants.IO.kId] === I_ENTRY_1) {
                //is an entry point, irrelevant what state the FSM is in
                //send action to change location setZone(zone, state){
                //console.log("dispatching change zone")
                this.props.setZone(id, S_IN);
            } else {
                switch (this.props.fsm.state) {
                    case I_INVENTORY:
                        if (input[_Constants.constants.IO.kId] === I_INVENTORY) {
                            // console.log("dispatching lounge in")
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
                        }
                        break;
                    case S_IN:
                    default:
                        if (input[_Constants.constants.IO.kId] === I_INVENTORY) {
                            // console.log("dispatching inventory")
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, I_INVENTORY));
                        }
                        break;
                }
            }
        }
    }, {
        key: 'renderView',
        value: function renderView() {
            // console.log("lounge render view: ");
            // console.log(this.props);
            if (this.props.showEntry) {
                return [_react2.default.createElement(
                    'div',
                    null,
                    'entry to lounge',
                    _react2.default.createElement(_Button2.default, { kId: I_ENTRY_1, onInput: this.onInput, text: 'go to lounge' })
                )];
            } else {
                switch (this.props.fsm.state) {
                    //if top level initial room, may not have state, and may not be an entry point
                    case I_INVENTORY:
                        var inventory2 = this.props.factory(_Constants.constants.fsm.actions.inventory);
                        return [_react2.default.createElement(inventory2.component, _extends({ showEntry: false, factory: this.props.factory,
                            onInput: this.onInput }, _Constants.functions.propKid(I_INVENTORY)))];
                    case S_IN:
                    default:
                        var control = this.props.factory('control');
                        var inventory = this.props.factory(_Constants.constants.fsm.actions.inventory);
                        return [_react2.default.createElement(
                            'div',
                            null,
                            'inside lounge',
                            _react2.default.createElement(control.component, _extends({ showEntry: true, factory: this.props.factory,
                                onInput: this.onInput }, _Constants.functions.propKid(I_CONTROL))),
                            _react2.default.createElement(inventory.component, _extends({ showEntry: true, factory: this.props.factory,
                                onInput: this.onInput }, _Constants.functions.propKid(I_INVENTORY)))
                        )];
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderView();
        }
    }]);

    return Lounge;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        setZone: _reducer.setZone, setFSMState: _reducer.setFSMState
    }, dispatch);
};
var mapStateToProps = function mapStateToProps(state, props) {
    return {
        fsm: (0, _selectors.selectFsmState)(state, id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN))
    };
};
var component = exports.component = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Lounge);
exports.default = component;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.id = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _selectors = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(8);

var _reducer2 = __webpack_require__(14);

var _Constants = __webpack_require__(3);

var _randomizer = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var S_IN = 'in',
    S_LOUNGE = 'lounge',
    I_ENTRY_1 = 'e1',
    I_LOUNGE = 'l1',
    I_MINE = 'mine';
var id = exports.id = 'control';

var Control = function (_React$Component) {
    _inherits(Control, _React$Component);

    function Control(props) {
        _classCallCheck(this, Control);

        var _this = _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).call(this, props));

        _this.onInput = _this.onInput.bind(_this);
        console.log("control constructor");
        console.log(props);
        return _this;
    }

    _createClass(Control, [{
        key: 'onInput',
        value: function onInput(input) {
            //  console.log("control recieved input");
            //  console.log(this.props);
            if (input.kId === I_ENTRY_1) {
                //is an entry point, irrelevant what state the FSM is in
                //send action to change location
                this.props.setZone(id, S_IN);
                // this.props.onInput({
                //     vId: this.props.vId,
                //     setZone: id
                // })
            } else {
                switch (this.props.fsm.state) {
                    case S_IN:
                        if (input.kId === I_MINE) {
                            //   console.log("setting control fsm");
                            this.props.setZone(id, I_MINE);
                        } else if (input.kId === _Constants.constants.items.engine) {
                            console.log("input, updating engine material to " + input.vId);
                        } else if (input.kId === _Constants.constants.items.hull) {
                            console.log("input, updating hull material to " + input.vId);
                        }
                        break;
                    case I_MINE:
                        if (input.kId === I_MINE) {
                            // console.log("recieved input from mining action");
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
                        }
                        break;
                }
            }
        }
    }, {
        key: 'renderShip',
        value: function renderShip() {
            var _this2 = this;

            if (this.props.items.ship) {
                return this.props.items.ship.map(function (e, i) {
                    //Object.keys(constants.elements) getRandomItem(materials)
                    var metal = (0, _randomizer.getRandomItem)(Object.keys(_Constants.constants.elements));
                    console.log("rendering ship element", e);
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            'ship part ',
                            e.id,
                            ', element: ',
                            e.element,
                            ', temperature tolerance ',
                            e.temp
                        ),
                        _react2.default.createElement(_Button2.default, { kId: e.id, vId: metal,
                            onInput: _this2.onInput, text: metal })
                    );
                });
            } else {
                return _react2.default.createElement(
                    'p',
                    null,
                    'there is no ship'
                );
            }
        }
    }, {
        key: 'renderView',
        value: function renderView() {
            // console.log("control render view: ");
            // console.log(this.props);
            if (this.props.showEntry) {
                return [_react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_Button2.default, { kId: I_ENTRY_1, onInput: this.onInput, text: 'go to control' })
                )];
            } else {
                switch (this.props.fsm.state) {
                    case I_MINE:
                        var mine2 = this.props.factory(_Constants.constants.fsm.actions.mine);
                        return [_react2.default.createElement(mine2.component, _extends({ showEntry: false, factory: this.props.factory,
                            onInput: this.onInput }, _Constants.functions.propKid(I_MINE)))];
                    case S_IN:
                    default:
                        var lounge = this.props.factory('lounge');
                        var mine = this.props.factory(_Constants.constants.fsm.actions.mine);
                        return [_react2.default.createElement(
                            'div',
                            null,
                            this.renderShip()
                        ), _react2.default.createElement(
                            'div',
                            null,
                            'inside control room',
                            _react2.default.createElement(lounge.component, _extends({ showEntry: true, factory: this.props.factory,
                                onInput: this.onInput }, _Constants.functions.propKid(I_LOUNGE))),
                            _react2.default.createElement(mine.component, _extends({ showEntry: true, factory: this.props.factory,
                                onInput: this.onInput }, _Constants.functions.propKid(I_MINE)))
                        )];
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderView();
        }
    }]);

    return Control;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        setZone: _reducer.setZone, setFSMState: _reducer.setFSMState, editUserAns: _reducer2.editUserAns
    }, dispatch);
};

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        fsm: (0, _selectors.selectFsmState)(state, id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN)),
        items: (0, _selectors.selectContained)(state, props.id)
    };
};
var component = exports.component = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Control);
exports.default = component;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.id = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _selectors = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(8);

var _asteroidSample = __webpack_require__(59);

var _reducer2 = __webpack_require__(14);

var _Messages = __webpack_require__(35);

var _Messages2 = _interopRequireDefault(_Messages);

var _Constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var S_IN = 'in',
    S_BACK = 'back',
    I_ENTRY_1 = 'e1',
    S_MINE = 'mine',
    S_LOOK = 'look',
    S_MINE_FIN = 'fin';
var id = exports.id = 'mine';
var sample = null;

var Mine = function (_React$Component) {
    _inherits(Mine, _React$Component);

    function Mine(props) {
        _classCallCheck(this, Mine);

        var _this = _possibleConstructorReturn(this, (Mine.__proto__ || Object.getPrototypeOf(Mine)).call(this, props));

        _this.onInput = _this.onInput.bind(_this);
        return _this;
    }

    _createClass(Mine, [{
        key: 'onInput',
        value: function onInput(input) {
            // console.log("mine input");
            // console.log(this.props);
            if (input.kId === I_ENTRY_1) {
                //roll and new asteroid
                sample = (0, _asteroidSample.createSample)();
                //   console.log("setting mine fsm");
                this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
                this.props.onInput(_Messages2.default.message(this.props.kId));
            } else {
                switch (this.props.fsm.state) {
                    case S_IN:
                        if (input.kId === S_MINE) {
                            //add sample to store
                            // console.log("mined sample:");
                            // console.log(sample);
                            this.props.addItem(_Constants.constants.fsm.actions.inventory, sample.type, sample.id, sample);
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_MINE_FIN));
                            sample = (0, _asteroidSample.createSample)();
                        } else if (input.kId === S_LOOK) {
                            sample = (0, _asteroidSample.createSample)();
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
                        } else if (input.kId === S_BACK) {
                            this.props.onInput(_Messages2.default.message(this.props.kId));
                        }
                        break;
                    case S_MINE_FIN:
                        if (input.kId === S_IN) {
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
                        }
                        break;
                }
            }
        }
    }, {
        key: 'renderView',
        value: function renderView() {
            // console.log("mine renderView");
            // console.log(this.props);
            if (this.props.showEntry) {
                return [_react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(I_ENTRY_1), { onInput: this.onInput, text: 'mine asteroids' }))
                )];
            } else {
                switch (this.props.fsm.state) {
                    case S_MINE_FIN:
                        return [_react2.default.createElement(
                            'p',
                            null,
                            'asteroid sample added to inventory'
                        ), _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_IN), { onInput: this.onInput, text: 'next' }))];
                    case S_IN:
                    default:
                        return [_react2.default.createElement(
                            'p',
                            null,
                            'there is a ' + (sample.game.weight > 8 ? 'large' : 'small') + ' asteroid in front of you, mine it?'
                        ), _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_MINE), { onInput: this.onInput, text: 'mine it' })),
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_LOOK), { onInput: this.onInput, text: 'look for another' })),
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_BACK), { onInput: this.onInput, text: 'back' }))
                        )];
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderView();
        }
    }]);

    return Mine;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ setFSMState: _reducer.setFSMState, addItem: _reducer2.addItem }, dispatch);
};

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        fsm: (0, _selectors.selectFsmState)(state, id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN))
    };
};
var component = exports.component = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Mine);
exports.default = component;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.id = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _selectors = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(8);

var _Messages = __webpack_require__(35);

var _Messages2 = _interopRequireDefault(_Messages);

var _Constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var S_IN = 'in',
    S_BACK = 'back',
    I_ENTRY_1 = 'e1',
    S_ITEM = 'item',
    S_SAMPLE = 'sample',
    A_ELEM = 'elem';
var id = exports.id = 'inventory';
var itemId = null,
    itemType = null;

var Inventory = function (_React$Component) {
    _inherits(Inventory, _React$Component);

    function Inventory(props) {
        _classCallCheck(this, Inventory);

        var _this = _possibleConstructorReturn(this, (Inventory.__proto__ || Object.getPrototypeOf(Inventory)).call(this, props));

        _this.onInput = _this.onInput.bind(_this);
        // console.log("inventory constructor");
        // console.log(props);
        return _this;
    }

    _createClass(Inventory, [{
        key: 'onInput',
        value: function onInput(input) {

            if (input.kId === I_ENTRY_1) {
                this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
                this.props.onInput(_Messages2.default.message(this.props.kId));
            } else {
                switch (this.props.fsm.state) {
                    case S_IN:
                        if (input.kId === S_BACK) {
                            this.props.onInput(_Messages2.default.message(this.props.kId));
                        } else if (input.kId === S_SAMPLE) {
                            var it = input.item;
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_SAMPLE));
                        } else {
                            // console.log("item selected " + input.kId);
                            itemId = input.kId;
                            this.setState({
                                item: item
                            });
                        }
                        break;
                    case S_SAMPLE:
                        if (input.kId === S_SAMPLE) {
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
                        }
                        break;
                }
            }
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var _this2 = this;

            return Object.keys(this.props.items).map(function (k, i) {
                return _this2.props.items[k].map(function (e, ei) {
                    if (e) {
                        // console.log("rendering items for " + k + " item " + e.id);
                        if (k === _Constants.constants.items.asteroidSample) {
                            var sample = _this2.props.factory(k);
                            return _react2.default.createElement(
                                'div',
                                null,
                                ei == 0 ? _react2.default.createElement(
                                    'p',
                                    null,
                                    k
                                ) : '',
                                _react2.default.createElement(sample.component, { item: e,
                                    showEntry: true, factory: _this2.props.factory,
                                    onInput: _this2.onInput, kId: S_SAMPLE })
                            );
                        } else if (k === _Constants.constants.items.stock) {
                            return _react2.default.createElement(
                                'div',
                                null,
                                ei == 0 ? _react2.default.createElement(
                                    'p',
                                    null,
                                    k
                                ) : '',
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'element: ',
                                        e.id
                                    ),
                                    Object.keys(e).map(function (m) {
                                        if (m != 'id') {
                                            return _react2.default.createElement(
                                                'span',
                                                null,
                                                ' ',
                                                m,
                                                ' weight:',
                                                e[m]
                                            );
                                        }
                                    })
                                )
                            );
                        }
                    } else {
                        return _react2.default.createElement(
                            'div',
                            null,
                            'item undefined'
                        );
                    }
                });
            });
        }
    }, {
        key: 'renderView',
        value: function renderView() {
            if (this.props.showEntry) {
                return [_react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(I_ENTRY_1), { onInput: this.onInput, text: 'inspect inventory' }))
                )];
            } else {
                switch (this.props.fsm.state) {
                    case S_SAMPLE:
                        var sample = this.props.factory(_Constants.constants.fsm.items.asteroidSample);
                        return [_react2.default.createElement(sample.component, _extends({
                            showEntry: false, factory: this.props.factory,
                            onInput: this.onInput }, _Constants.functions.propKid(S_SAMPLE)))];
                    case S_IN:
                    default:
                        return [_react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_BACK), { onInput: this.onInput, text: 'back' }))
                        ), _react2.default.createElement(
                            'div',
                            null,
                            this.renderItems()
                        )];
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderView();
        }
    }]);

    return Inventory;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ setFSMState: _reducer.setFSMState }, dispatch);
};

var mapStateToProps = function mapStateToProps(state, props) {
    // console.log("mapping asteroid samples");
    // console.log(state);
    //asteroidSample: state.items.asteroidSample
    return {
        fsm: (0, _selectors.selectFsmState)(state, id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN)),
        items: (0, _selectors.selectContained)(state, id)
    };
};
var component = exports.component = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Inventory);
exports.default = component;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.id = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _selectors = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(8);

var _Messages = __webpack_require__(35);

var _Messages2 = _interopRequireDefault(_Messages);

var _Constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var S_IN = 'in',
    S_BACK = 'back',
    I_ENTRY_1 = 'e1',
    S_FLAME = 'flame',
    S_SONAR = 'sonar';
var id = exports.id = 'idElem';

var IdElem = function (_React$Component) {
    _inherits(IdElem, _React$Component);

    function IdElem(props) {
        _classCallCheck(this, IdElem);

        var _this = _possibleConstructorReturn(this, (IdElem.__proto__ || Object.getPrototypeOf(IdElem)).call(this, props));

        _this.onInput = _this.onInput.bind(_this);
        //    console.log("IdElem constructor ", props);
        return _this;
    }

    _createClass(IdElem, [{
        key: 'onInput',
        value: function onInput(input) {
            if (input[_Constants.constants.IO.kId] === I_ENTRY_1) {
                this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
                this.props.onInput(_Messages2.default.message(this.props.kId));
            } else {
                switch (this.props.fsm.state) {
                    case S_IN:
                        if (input[_Constants.constants.IO.kId] === S_FLAME) {
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_FLAME));
                        } else if (input[_Constants.constants.IO.kId] === S_SONAR) {
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_SONAR));
                        } else if (input[_Constants.constants.IO.kId] === S_BACK) {
                            this.props.onInput(_Messages2.default.message(this.props.kId));
                        }
                        break;
                    case S_FLAME:
                    case S_SONAR:
                        this.props.onInput(_Messages2.default.answer(this.props.kId, {
                            element: input.vId
                        }));
                        break;
                }
            }
        }
    }, {
        key: 'renderView',
        value: function renderView() {
            if (this.props.showEntry) {
                var t = 'element: ' + (this.props.item.user.element ? this.props.item.user.element : 'unknown');
                return [_react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(I_ENTRY_1), { onInput: this.onInput, text: t }))
                )];
            } else {
                switch (this.props.fsm.state) {
                    case S_SONAR:
                        return [_react2.default.createElement(
                            'p',
                            null,
                            'The sample emites a soundwave of 370Hz'
                        ), _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_SONAR), { vId: 'magnesium', onInput: this.onInput, text: 'magnesium' })),
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_SONAR), { vId: 'lithium', onInput: this.onInput, text: 'lithium' }))
                        )];
                    case S_FLAME:
                        return [_react2.default.createElement(
                            'p',
                            null,
                            'The flame is blue, therefore the sample is made of:'
                        ), _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_FLAME), { vId: 'iron', onInput: this.onInput, text: 'iron' })),
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_FLAME), { vId: 'copper', onInput: this.onInput, text: 'copper' }))
                        )];
                    case S_IN:
                    default:
                        return [_react2.default.createElement(
                            'p',
                            null,
                            'The sample element is ' + this.props.item.type + ' id:' + this.props.item.id
                        ), _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_FLAME), { onInput: this.onInput, text: 'use flame test' })),
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_SONAR), { onInput: this.onInput, text: 'use sonar test' })),
                            _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_BACK), { onInput: this.onInput, text: 'back' }))
                        )];
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderView();
        }
    }]);

    return IdElem;
}(_react2.default.Component);

//editItem(item, key, val)


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ setFSMState: _reducer.setFSMState }, dispatch);
};

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        fsm: (0, _selectors.selectFsmState)(state, id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN))
    };
};
var component = exports.component = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IdElem);
exports.default = component;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.id = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _selectors = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(8);

var _reducer2 = __webpack_require__(14);

var _stock = __webpack_require__(60);

var _Messages = __webpack_require__(35);

var _Messages2 = _interopRequireDefault(_Messages);

var _Constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var S_IN = 'in',
    S_BACK = 'back',
    I_ENTRY_1 = 'e1',
    A_ID = 'aid',
    S_STOCK = 'stock';
var id = exports.id = _Constants.constants.fsm.items.asteroidSample;
//let itemId = null, itemType = null;

var AstSamp = function (_React$Component) {
    _inherits(AstSamp, _React$Component);

    function AstSamp(props) {
        _classCallCheck(this, AstSamp);

        var _this = _possibleConstructorReturn(this, (AstSamp.__proto__ || Object.getPrototypeOf(AstSamp)).call(this, props));

        _this.onInput = _this.onInput.bind(_this);
        // console.log("AstSamp constructor");
        // console.log(props);
        return _this;
    }

    _createClass(AstSamp, [{
        key: 'onInput',
        value: function onInput(input) {
            if (input.kId === I_ENTRY_1) {
                if (this.props.item) {
                    var _props$setFSMState;

                    this.props.setFSMState(id, (_props$setFSMState = {}, _defineProperty(_props$setFSMState, _Constants.constants.fsm.keys.state, S_IN), _defineProperty(_props$setFSMState, _Constants.constants.fsm.keys.item, this.props.item.id), _defineProperty(_props$setFSMState, _Constants.constants.fsm.keys.itemType, this.props.item.type), _props$setFSMState));
                    this.props.onInput(_Messages2.default.item(this.props.kId, this.props.item));
                } else {
                    console.log("error, no item in asteroid sample onInput entry");
                }
            } else {
                switch (this.props.fsm.state) {
                    case S_IN:
                        if (input.kId === A_ID) {
                            this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, A_ID));
                        } else if (input.kId === S_BACK) {
                            this.props.onInput(_Messages2.default.message(this.props.kId));
                        } else if (input.kId === S_STOCK) {
                            var item = this.props.item;
                            var stock = this.props.stocks[item.user.element];
                            if (!stock) {
                                stock = (0, _stock.createStock)(item.user.element);
                            }
                            stock = (0, _stock.addToStock)(stock, item.game.element, item.game.weight);

                            this.props.addItem(_Constants.constants.fsm.actions.inventory, _Constants.constants.items.stock, item.user.element, stock);
                            this.props.deleteItem(_Constants.constants.fsm.actions.inventory, _Constants.constants.items.asteroidSample, item.id, item);

                            this.props.onInput(_Messages2.default.message(this.props.kId));
                        }
                        break;
                    case A_ID:
                        var element = input.element;
                        this.props.editUserAns(this.props.item, _Constants.constants.items.element, element);
                        this.props.setFSMState(id, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
                        break;
                }
            }
        }
    }, {
        key: 'renderView',
        value: function renderView() {
            if (!this.props.item) {
                return _react2.default.createElement(
                    'p',
                    null,
                    'Waiting for item...'
                );
            } else {
                if (this.props.showEntry) {
                    var t = 'item: element: ' + (this.props.item.user.element ? this.props.item.user.element : 'unknown');
                    return [_react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(I_ENTRY_1), { onInput: this.onInput, text: t }))];
                } else {
                    switch (this.props.fsm.state) {
                        case A_ID:
                            var idElema = this.props.factory(_Constants.constants.fsm.questions.idElem);
                            return [_react2.default.createElement(idElema.component, _extends({ item: this.props.item, showEntry: false, factory: this.props.factory,
                                onInput: this.onInput }, _Constants.functions.propKid(A_ID)))];
                        case S_IN:
                        default:
                            var idElem = this.props.factory(_Constants.constants.fsm.questions.idElem);
                            return [_react2.default.createElement(
                                'p',
                                null,
                                'asteroid sample: ',
                                this.props.item.id,
                                ':',
                                _react2.default.createElement(idElem.component, _extends({ item: this.props.item, showEntry: true, factory: this.props.factory,
                                    onInput: this.onInput }, _Constants.functions.propKid(A_ID))),
                                'weight: ',
                                this.props.item.user.weight ? this.props.item.user.weight : 'unknown'
                            ), _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_STOCK), { onInput: this.onInput, text: 'add to stock',
                                disabled: this.props.item.user.element ? false : true })), _react2.default.createElement(_Button2.default, _extends({}, _Constants.functions.propKid(S_BACK), { onInput: this.onInput, text: 'back' }))];
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderView();
        }
    }]);

    return AstSamp;
}(_react2.default.Component);

//editItem(item, key, val)


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ setFSMState: _reducer.setFSMState, editUserAns: _reducer2.editUserAns, addItem: _reducer2.addItem, deleteItem: _reducer2.deleteItem }, dispatch);
};

var mapStateToProps = function mapStateToProps(state, props) {
    var fsm = (0, _selectors.selectFsmState)(state, _Constants.constants.fsm.items.asteroidSample, _defineProperty({}, _Constants.constants.fsm.keys.state, S_IN));
    //Bug there is a state where the inventory is not passing an item in, and the asteroidSample
    //has not recieved a fresh store state, and thus has no item
    //this is resolved in ComponendWillUpdate, which passes in the fresh store state
    //will need to tolerate no item to display
    var id = fsm[_Constants.constants.fsm.keys.item];
    var type = fsm[_Constants.constants.fsm.keys.itemType];
    var item = props.item ? props.item : id ? state.items[type][id] : null;
    // console.log("ast samp id: " + id + " type: " + type + "item: ");
    // console.log(item);
    return {
        fsm: fsm,
        item: item,
        stocks: state.items[_Constants.constants.items.stock]
    };
};
var component = exports.component = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AstSamp);
exports.default = component;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.id = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var id = exports.id = 'engine';

var Engine = function (_React$Component) {
    _inherits(Engine, _React$Component);

    function Engine() {
        _classCallCheck(this, Engine);

        return _possibleConstructorReturn(this, (Engine.__proto__ || Object.getPrototypeOf(Engine)).apply(this, arguments));
    }

    _createClass(Engine, [{
        key: 'renderView',
        value: function renderView() {
            return _react2.default.createElement(
                'p',
                null,
                'the engine is okay'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderView();
        }
    }]);

    return Engine;
}(_react2.default.Component);
//export default Engine;


var mapStateToProps = function mapStateToProps(state) {
    return {
        engine: state.items.engine
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        editUserAns: _reducer.editUserAns
    }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Engine);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(36);

var _simulation = __webpack_require__(98);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Simulation = function (_React$Component) {
    _inherits(Simulation, _React$Component);

    function Simulation(props) {
        _classCallCheck(this, Simulation);

        var _this = _possibleConstructorReturn(this, (Simulation.__proto__ || Object.getPrototypeOf(Simulation)).call(this, props));

        _this.update = _this.update.bind(_this);
        _this.play = _this.play.bind(_this);
        _this.pause = _this.pause.bind(_this);
        _this.state = {
            interval: null
        };
        return _this;
    }

    _createClass(Simulation, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.play();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.pause();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            //if previous play state does not match current, is time to either play or pause
            //  console.log("simulation did update, prev: " + prevProps.play + " current: " + this.props.play);
            if (prevProps.play != this.props.play) {
                if (this.props.play) {
                    this.play();
                } else {
                    this.pause();
                }
            }
        }
    }, {
        key: 'play',
        value: function play() {
            //  console.log("playing simulation");
            if (!this.state.interval && this.props.play) {
                var interval = setInterval(this.update, 10000);
                this.setState({
                    interval: interval
                });
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            //  console.log("pausing simulation");
            if (this.state.interval) {
                clearInterval(this.state.interval);
                this.setState({
                    interval: null
                });
            }
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            console.log("simulation updating");
            //console.log(this.props);
            var actions = (0, _simulation.update)(this.props.state);
            console.log("update actions", actions);
            // this.props.dispatchAny(playSim(true));
            actions.map(function (a) {
                _this2.props.dispatchAny(a);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Simulation;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ dispatchAny: _reducer.dispatchAny }, dispatch);
};
var mapStateToProps = function mapStateToProps(state) {
    console.log("map sim state");
    console.log(state);
    return {
        state: {
            sim: state.simulation.sim
        },
        play: state.simulation.ui.play
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Simulation);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.update = undefined;

var _Constants = __webpack_require__(3);

var _reducer = __webpack_require__(36);

var update = exports.update = function update(state) {
    console.log("simulation state", state);
    var updates = {};
    var actions = [];
    //perlin noise temperature sim
    updates = updateTime(state, updates);
    updates = updateTemp(state, updates);
    actions.push((0, _reducer.nextStep)(updates));

    return actions; //actions
};

function updateTime(state, next) {
    var t = state.sim.t;
    next.t = t + 1;
    return next;
}
function updateTemp(state, next) {
    var temp = state.sim.temp;
    next.temp = temp + Math.random();
    return next;
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _reducer = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Play = function (_React$Component) {
    _inherits(Play, _React$Component);

    function Play(props) {
        _classCallCheck(this, Play);

        var _this = _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).call(this, props));

        _this.handleInput = _this.handleInput.bind(_this);
        return _this;
    }

    _createClass(Play, [{
        key: 'handleInput',
        value: function handleInput(play) {
            console.log("handle click input, play  " + play);
            this.props.playSim(play);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.handleInput(true);
                        } },
                    'play'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.handleInput(false);
                        } },
                    'pause'
                )
            );
        }
    }]);

    return Play;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        play: state.simulation.ui.play
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        playSim: _reducer.playSim
    }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Play);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _asteroidSample = __webpack_require__(59);

var _Constants = __webpack_require__(3);

var _reducer = __webpack_require__(14);

var _stock = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Initialize = function (_React$Component) {
    _inherits(Initialize, _React$Component);

    function Initialize() {
        _classCallCheck(this, Initialize);

        return _possibleConstructorReturn(this, (Initialize.__proto__ || Object.getPrototypeOf(Initialize)).apply(this, arguments));
    }

    _createClass(Initialize, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("initialization beginning");
            if (Object.keys(this.props.state.items[_Constants.constants.items.asteroidSample]).length < 3) {
                console.log('initializaing asteroid samples');
                var item = void 0;
                for (var i = 0; i < 3; i++) {
                    item = this.props.createSample(); //addItem(container, type, id, item){
                    this.props.addItem(_Constants.constants.fsm.actions.inventory, _Constants.constants.items.asteroidSample, item.id, item);
                }
                var stock = (0, _stock.createStock)(item.game.element);
                stock = (0, _stock.addToStock)(stock, item.game.element, item.game.weight);

                this.props.addItem(_Constants.constants.fsm.actions.inventory, _Constants.constants.items.stock, item.game.element, stock);
                this.props.deleteItem(_Constants.constants.fsm.actions.inventory, _Constants.constants.items.asteroidSample, item.id, item);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Initialize;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        createSample: _asteroidSample.createSample, addItem: _reducer.addItem, deleteItem: _reducer.deleteItem
    }, dispatch);
};
var mapStateToProps = function mapStateToProps(state) {
    return {
        state: state
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Initialize);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(1);

var _gameReducer = __webpack_require__(102);

var _reducer = __webpack_require__(8);

var _reducer2 = __webpack_require__(14);

var _relationsReducer = __webpack_require__(103);

var _reducer3 = __webpack_require__(36);

var _parentReducer = __webpack_require__(104);

//multiaction reducers
//change zone - change from state, change to state, change game position


var reducers = (0, _redux.combineReducers)({
    simulation: _reducer3.reducer,
    game: _gameReducer.reducer,
    fsm: _reducer.reducer,
    items: _reducer2.reducer,
    relations: _relationsReducer.reducer
});

var rootReducer = function rootReducer(state, action) {
    var finalState = (0, _parentReducer.parentReducer)(state, action);
    var intermediateState = reducers(finalState, action);
    //const finalState = crossSliceReducer(intermediateState, action);

    return intermediateState;
};

exports.default = rootReducer;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducer = undefined;
exports.setHealth = setHealth;

var _Constants = __webpack_require__(3);

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        health: 100,
        zone: _Constants.constants.fsm.zones.lounge
    };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        default:
            return state;
    }
};

function setHealth(time, temp) {
    return {
        type: 'SET_HEALTH',
        payload: {
            time: time,
            temp: temp
        }
    };
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducer = undefined;

var _Constants = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defineProperty({}, _Constants.constants.relations.contains, _defineProperty({}, _Constants.constants.fsm.zones.control, _defineProperty({}, _Constants.constants.items.ship, [_Constants.constants.items.engine, _Constants.constants.items.hull])));
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        default:
            return state;
    }
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.moveItem = exports.parentReducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = __webpack_require__(105);

var _Constants = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Bug potential: templates found with item type, template and item cannot store items at same time
//concept: can the template of an item hold items distinct from that item? or are its items the same as the item it holds?
var parentReducer = exports.parentReducer = function parentReducer(state, action) {
    // console.log("parent reducer called");
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case "ADD_ITEM":
            var contents = state.relations[_Constants.constants.relations.contains][action.payload.container] ? state.relations[_Constants.constants.relations.contains][action.payload.container] : {};
            var ray = contents[action.payload.type] ? contents[action.payload.type] : [];
            var index = ray.indexOf(action.payload.id);
            //if the item is not already linked, add it to the array
            if (index <= -1) {
                return _extends({}, state, {
                    relations: _defineProperty({}, _Constants.constants.relations.contains, _extends({}, state.relations[_Constants.constants.relations.contains], _defineProperty({}, action.payload.container, _extends({}, contents, _defineProperty({}, action.payload.type, [].concat(_toConsumableArray(ray), [action.payload.id]))))))
                });
            }
            break;
        case "DEL_ITEM":
            var contents2 = state.relations[_Constants.constants.relations.contains][action.payload.container];
            var ray3 = contents2[action.payload.type].filter(function (e) {
                if (e != action.payload.id) {
                    return e;
                }
            });
            return _extends({}, state, {
                relations: _defineProperty({}, _Constants.constants.relations.contains, _extends({}, state.relations[_Constants.constants.relations.contains], _defineProperty({}, action.payload.container, _extends({}, contents2, _defineProperty({}, action.payload.type, ray3)))))
            });
            break;
        case "MOVE_ITEM":
            console.log("parent reducer move item");
            break;
        case "SET_ZONE":
            {
                // console.log("reducer set zone");
                // console.log(action);
                return _extends({}, state, {
                    fsm: _extends({}, state.fsm, _defineProperty({}, action.payload.zone, {
                        state: action.payload.state
                    })),
                    game: _extends({}, state.game, {
                        zone: action.payload.zone
                        // specifically pass state.b as an additional argument
                        // a : handleSpecialCaseForA(state.a, action, state.b),
                        // b : sliceReducerB(state.b, action)   setZone(zone, state){
                    }) });
            }
        default:
            return state;
    }
    return state;
};

var moveItem = exports.moveItem = function moveItem(from, to, item) {
    return {
        type: "MOVE_ITEM",
        payload: {
            from: from, to: to, item: item
        }
    };
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addSample = addSample;

var _Constants = __webpack_require__(106);

var _index = __webpack_require__(107);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ast1 = (0, _index.createAsteroid)();
var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defineProperty({}, _Constants.constants.inventory.items, _defineProperty({}, _Constants.constants.mine.samples, _defineProperty({}, ast1.sample.id, ast1.sample)));
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'ADD_SAMPLE':
            return _extends({}, state, _defineProperty({}, _Constants.constants.inventory.items, _defineProperty({}, _Constants.constants.mine.samples, _extends({}, state.inventory.samples, _defineProperty({}, action.payload.sample.id, action.payload.sample)))));
        default:
            return state;
    }
};

function addSample(sample) {
    return {
        type: 'ADD_SAMPLE',
        payload: {
            sample: sample
        }
    };
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var constants = exports.constants = {
    input: {
        kId: 'kId',
        vId: 'vId'
    },
    store: {
        state: 'state'
    },
    names: {
        lounge: 'lounge'
    },
    types: {
        zones: 'zones',
        actions: 'actions',
        questions: 'questions'
    },
    zones: {
        lounge: 'lounge',
        control: 'control'
    },
    questions: {
        read: 'read'
    },
    actions: {
        mine: 'mine',
        inventory: 'inventory'
    },
    read: {
        q1: 'q1'
    },
    mine: {
        samples: 'samples'
    },
    inventory: {
        items: 'items'
    },
    logTypes: {
        action: 'action',
        answer: 'answer'
    }
};

var messages = exports.messages = {
    changeZone: function changeZone(id, to) {
        var _ref;

        return _ref = {}, _defineProperty(_ref, constants.input.vId, id), _defineProperty(_ref, 'changeFrom', function changeFrom(from) {
            return {
                to: to,
                from: from
            };
        }), _ref;
    },
    toFSMState: function toFSMState(id, state) {
        return { id: id, state: state };
    },
    zone: function zone(id) {
        return _defineProperty({}, constants.input.vId, id);
    },
    action: function action(id) {
        return _defineProperty({}, constants.input.vId, id);
    },
    output: function output(id, answers) {
        return _extends(_defineProperty({}, constants.input.vId, id), answers);
    }
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAsteroid = createAsteroid;

var _randomizer = __webpack_require__(42);

var _ids = __webpack_require__(34);

function createAsteroid() {
    var elem = ['iron', 'magnesium', 'copper', 'silver'];
    var e = (0, _randomizer.getRandomItem)(elem);
    return {
        description: 'it is a ' + e + ' asteroid',
        sample: {
            id: (0, _ids.guid)(),
            name: 'unknown sample',
            game: {
                weight: Math.random() * 10 + 5,
                element: e
            },
            user: {
                weight: null,
                element: null
            }
        }
    };
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DynamicComponent": 24,
	"./DynamicComponent.jsx": 24,
	"./Trends": 15,
	"./Trends.jsx": 15,
	"./UI/Colors": 7,
	"./UI/Colors.js": 7,
	"./UI/IFrame": 25,
	"./UI/IFrame.jsx": 25,
	"./UI/animations/FadeIn": 10,
	"./UI/animations/FadeIn.jsx": 10,
	"./UI/animations/SlideUp": 23,
	"./UI/animations/SlideUp.jsx": 23,
	"./UI/animations/styles.css": 41,
	"./UI/elements/Bg": 21,
	"./UI/elements/Bg.jsx": 21,
	"./UI/elements/Container": 22,
	"./UI/elements/Container.jsx": 22,
	"./UI/elements/IconButton": 11,
	"./UI/elements/IconButton.jsx": 11,
	"./UI/elements/icons.css": 56,
	"./UI/graphs/Line": 16,
	"./UI/graphs/Line.jsx": 16,
	"./UI/graphs/animations": 17,
	"./UI/graphs/animations.js": 17,
	"./UI/graphs/main.css": 40,
	"./UI/graphs/styles": 19,
	"./UI/graphs/styles.js": 19,
	"./UI/graphs/utilities": 20,
	"./UI/graphs/utilities.js": 20,
	"./UI/math/Katex": 33,
	"./UI/math/Katex.jsx": 33,
	"./UI/math/katex.css": 57,
	"./apis/Analytics": 26,
	"./apis/Analytics.jsx": 26,
	"./apis/Gapi": 27,
	"./apis/Gapi.jsx": 27,
	"./constants": 18,
	"./constants.js": 18,
	"./game/Game": 28,
	"./game/Game.jsx": 28,
	"./game/GameMenu": 29,
	"./game/GameMenu.jsx": 29,
	"./game/Index": 30,
	"./game/Index.jsx": 30,
	"./game/Wrapper": 31,
	"./game/Wrapper.jsx": 31,
	"./game/views/Choice": 37,
	"./game/views/Choice.jsx": 37,
	"./layout/MainMenu": 6,
	"./layout/MainMenu.jsx": 6,
	"./layout/menu.css": 39
};
function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id])
		throw new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
	return __webpack_require__(id);
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = 108;
module.exports = webpackContext;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(63);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(111);

var _index4 = _interopRequireDefault(_index3);

var _reducers = __webpack_require__(114);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("g1 index");

function getSim() {
    return _index2.default;
}

function getStory() {
    return _index4.default;
}

function getReducers() {
    return _reducers2.default;
}

exports.default = {
    getSim: getSim,
    getStory: getStory,
    getReducers: getReducers
};

/***/ }),
/* 110 */
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

var Simulation = function (_React$Component) {
    _inherits(Simulation, _React$Component);

    function Simulation(props) {
        _classCallCheck(this, Simulation);

        //expects to recieve the game
        //the game gives reducers, selectors, mapStteToProps, dispatchToStore, 
        //simulation and iterates through story nodes
        //the game displays the content, the simulation runs, stops and persists state
        // console.log("sim component constructor");
        // console.log(props);
        var _this = _possibleConstructorReturn(this, (Simulation.__proto__ || Object.getPrototypeOf(Simulation)).call(this, props));

        _this.play = _this.play.bind(_this);
        _this.pause = _this.pause.bind(_this);
        _this.state = {
            interval: null
        };
        return _this;
    }

    _createClass(Simulation, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.play();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.pause();
        }
    }, {
        key: 'play',
        value: function play() {
            var _this2 = this;

            if (!this.state.interval) {
                var id = setInterval(function () {
                    return _this2.update();
                }, this.getInterval());
                this.setState({
                    interval: id
                });
                // console.log("playing simulation " + id);
            } else {
                    //console.log("play called but interval already running: " + this.state.interval);
                }
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (this.state.interval) {
                //    console.log("pausing simulation");
                clearInterval(this.state.interval);
                this.setState({
                    interval: null
                });
            }
        }
    }, {
        key: 'update',
        value: function update() {
            //console.log("simulation - overwrite this");
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Simulation;
}(_react2.default.Component);

exports.default = Simulation;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Story2 = __webpack_require__(64);

var _Story3 = _interopRequireDefault(_Story2);

var _index = __webpack_require__(113);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _store = __webpack_require__(68);

var _store2 = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("g1 story index");

//const start = 'start_0';
var intro = 'intro_0';
var play = 'play';
var again = 'again';
var restart = 'restart_0';
var end = 'end_0';

var b1 = 'b122';

var Start = function (_Story) {
    _inherits(Start, _Story);

    function Start(props) {
        _classCallCheck(this, Start);

        var _this = _possibleConstructorReturn(this, (Start.__proto__ || Object.getPrototypeOf(Start)).call(this, props));

        console.log("start constructor, has store state?");
        console.log(props);
        //start, end
        _this.state = _extends({}, _this.state, _defineProperty({}, b1, _this.subTreeNode(b1, _index2.default)));

        return _this;
    }

    _createClass(Start, [{
        key: 'onInput',
        value: function onInput(input) {
            console.log("on start branch input " + this.getNodeId());
            console.log(input);
            // console.log(this.props);
            //some input will change state, some input will move the story forward
            switch (this.getNodeId()) {
                case again:
                case this.state.keys.start:
                    if (input[this.state.keys.iId] === b1) {
                        // this.setState({
                        //     nodeId: b1
                        // })
                        this.props.actions.setComponentNodeId({
                            id: this.props.iId,
                            nodeId: b1
                        });
                    }
                    break;
                case b1:
                    if (input[this.state.keys.iId] === b1) {
                        //back from b1, create a new room and start over
                        this.setState(_defineProperty({
                            nodeId: again
                        }, b1, this.subTreeNode(b1, _index2.default)));
                    }
                    break;
            }
        }
    }, {
        key: 'renderNode',
        value: function renderNode() {
            console.log("start render node " + this.getNodeId());
            switch (this.getNodeId()) {
                case this.state.keys.start:
                    return [this.textNode(this.state.keys.start + '1', [this.textItem('text', 'Welcome, start game')]), this.state[b1]];
                case again:
                    return [this.textNode(this.state.keys.start + '1', [this.textItem('text', 'play again?')]), this.state[b1]];
                case end:
                    return [this.textNode(this.state.keys.start + '1', [this.textItem('text', 'game over')])];
                case b1:
                    return [this.state[b1]];
            }
        }
    }]);

    return Start;
}(_Story3.default);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)({
            changeHealth: _store.changeHealth,
            setComponentState: _store2.setComponentState,
            setComponentNodeId: _store2.setComponentNodeId
        }, dispatch)
    };
};

var mapStateToProps = function mapStateToProps(state) {
    // console.log("map start state to props");
    // console.log(state);
    return {
        store: {
            start: state.start,
            component: state.component
        }
    };
};

var ConnectedStart = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Start);
exports.default = ConnectedStart;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Text = __webpack_require__(65);

var _Text2 = _interopRequireDefault(_Text);

var _Button = __webpack_require__(66);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Choice = function (_React$Component) {
    _inherits(Choice, _React$Component);

    function Choice() {
        _classCallCheck(this, Choice);

        return _possibleConstructorReturn(this, (Choice.__proto__ || Object.getPrototypeOf(Choice)).apply(this, arguments));
    }

    _createClass(Choice, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { key: this.props.nodeId },
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.text
                ),
                this.props.choices.map(function (e) {
                    // console.log("choice e " + e.id);
                    // console.log(e);
                    return _react2.default.createElement(
                        _Button2.default,
                        { key: e.iId, iId: e.iId, nodeId: e.nodeId, onInput: _this2.props.onInput },
                        e.child
                    );
                })
            );
        }
    }]);

    return Choice;
}(_react2.default.Component);

exports.default = Choice;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Story2 = __webpack_require__(64);

var _Story3 = _interopRequireDefault(_Story2);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(1);

var _store = __webpack_require__(67);

var _store2 = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("g1 story index");


var start = 'room_0';
var inside = 'in0';
var next = 'next_1';
var back = 'back+0';

var b1 = 'b1av';
var b2 = 'b2s3';

var Rooms = function (_Story) {
    _inherits(Rooms, _Story);

    function Rooms(props) {
        var _extends2;

        _classCallCheck(this, Rooms);

        //start, end
        var _this = _possibleConstructorReturn(this, (Rooms.__proto__ || Object.getPrototypeOf(Rooms)).call(this, props));

        console.log("story room constructor node id " + _this.getNodeId());
        console.log(props);
        _this.state = _extends({}, _this.state, (_extends2 = {}, _defineProperty(_extends2, b1, _this.subTreeNode(b1, Connected)), _defineProperty(_extends2, b2, _this.subTreeNode(b2, Connected)), _extends2));
        console.log(_this.state);
        console.log("story room node id " + _this.getNodeId());
        return _this;
    }

    _createClass(Rooms, [{
        key: 'onInput',
        value: function onInput(input) {
            console.log("on input " + this.props.id + " node " + this.state.nodeId);
            console.log(input);
            //some input will change state, some input will move the story forward
            switch (this.state.nodeId) {
                case this.state.keys.start:
                    //player has initiated story sequence
                    if (input[this.state.keys.iId] === inside) {
                        // this.setState({
                        //     nodeId: inside,
                        //     counter: this.state.counter + 1
                        // })
                        this.props.actions.setComponentNodeId({
                            id: this.props.iId,
                            nodeId: inside
                        });
                        this.props.onInput({
                            iId: this.props.iId
                        });
                    }
                case inside:
                    // console.log("onInput, id " + this.props.id + " node inside");
                    // console.log(input);
                    if (input[this.state.keys.iId] === back) {
                        this.setState({
                            nodeId: start,
                            counter: this.state.counter + 1
                        });
                        this.props.onInput({
                            iId: this.props.iId
                        });
                    } else if (input[this.state.keys.iId] === b1) {
                        console.log("updated node id of " + this.props.id + " to " + b1);
                        this.setState({
                            nodeId: b1
                        });
                    } else if (input[this.state.keys.iId] === b2) {
                        console.log("updated node id of " + this.props.id + " to " + b2);
                        this.setState({
                            nodeId: b2
                        });
                    }
                    break;
                case b1:
                    if (input[this.state.keys.iId] === b1) {
                        this.setState({
                            nodeId: inside
                        });
                    }
                    break;
                case b2:
                    if (input[this.state.keys.iId] === b2) {
                        this.setState({
                            nodeId: inside
                        });
                    }
                    break;
            }
        }
    }, {
        key: 'getBg',
        value: function getBg() {
            switch (this.state.nodeId) {
                case inside:
                    return this.bgFill;
                default:
                    return this.bgInline;
            }
        }
    }, {
        key: 'renderNode',
        value: function renderNode() {
            console.log("story render room " + this.props.id + " node " + this.state.nodeId);
            switch (this.state.nodeId) {
                case this.state.keys.start:
                    return [this.choiceNode(this.state.keys.start + '2', 'room: enter room?', [this.btnItem(this.state.keys.start, inside, 'open new room ' + this.props.id)])];
                case inside:
                    return [this.textNode(inside + '1', [this.textItem('text', 'You find yourself in a small room, with 4 small doors, counter: ' + this.state.counter + " id: " + this.props.id)]), this.state[b1], this.state[b2], this.choiceNode(inside + '2', 'go back?', [this.btnItem(inside, back, 'go back')])];
                case b1:
                    return [this.state[b1]];
                case b2:
                    return [this.state[b2]];
                case back:
                    return null;
                // return [
                //     this.textNode(start + '1', [
                //         this.textItem('text', 'shouldnt display, should be complete counter: ' + this.state.counter
                //         + " id: " + this.props.id)
                //     ])
                // ]
            }
        }
    }]);

    return Rooms;
}(_Story3.default);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)({
            changeHealth: _store.changeHealth,
            setComponentState: _store2.setComponentState,
            setComponentNodeId: _store2.setComponentNodeId
        }, dispatch)
    };
};

var mapStateToProps = function mapStateToProps(state) {
    console.log("map room state to props");
    console.log(state);
    return {
        store: {
            rooms: state.rooms,
            component: state.component
        }
    };
};

var Connected = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Rooms);
exports.default = Connected;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(1);

var _index = __webpack_require__(63);

var _store = __webpack_require__(68);

var _store2 = __webpack_require__(67);

var _store3 = __webpack_require__(43);

//import simulation from './../simulation/reducers.js';
var reducer = (0, _redux.combineReducers)({
  simulation: _index.reducer,
  start: _store.reducer,
  rooms: _store2.reducer,
  component: _store3.reducer
});

exports.default = reducer;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(1);

var _reduxLogger = __webpack_require__(61);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(116);

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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(1);

var _counter = __webpack_require__(117);

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  counter: _counter2.default
});

exports.default = reducer;

/***/ }),
/* 117 */
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "body{font-family:Raleway,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}a{text-decoration:none;color:#108db8;font-weight:700}img{max-width:100%}", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.de86483d.js.map