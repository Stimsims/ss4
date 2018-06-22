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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
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

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline;\n    font-size: 1.5em;\n    a{\n        padding: 20px 10px 0px 10px;\n        border-bottom: 2px solid transparent;\n        transition: all 0.3s ease-in;\n    }\n    a.active{\n        border-bottom: 2px solid black;\n    }\n'], ['\n    display: inline;\n    font-size: 1.5em;\n    a{\n        padding: 20px 10px 0px 10px;\n        border-bottom: 2px solid transparent;\n        transition: all 0.3s ease-in;\n    }\n    a.active{\n        border-bottom: 2px solid black;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

__webpack_require__(29);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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
                'div',
                null,
                _react2.default.createElement(
                    _reactStatic.Link,
                    { exact: true, to: '/' },
                    _react2.default.createElement(
                        'h1',
                        { style: Title },
                        this.props.siteTitle
                    )
                ),
                _react2.default.createElement(
                    'nav',
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


var Title = {
    textAlign: 'center',
    margin: '10px 0px 10px 0px'
};

var sMenu = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

var Slinks = _styledComponents2.default.span(_templateObject);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactChartist = __webpack_require__(72);

var _reactChartist2 = _interopRequireDefault(_reactChartist);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__(12);

var _constants = __webpack_require__(8);

var _styles = __webpack_require__(13);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Legend from 'chartist-plugin-legend';
// import Axis from 'chartist-plugin-axistitle';


// import Chartist from 'chartist';

var Pie = function (_React$Component) {
  _inherits(Pie, _React$Component);

  function Pie(props) {
    _classCallCheck(this, Pie);

    //let chart = <ChartistGraph  data={props.data} listener={listeners} options={props.options} type={'Line'} />;
    //listener={this.state.listeners} options={this.props.options}
    var _this = _possibleConstructorReturn(this, (Pie.__proto__ || Object.getPrototypeOf(Pie)).call(this, props));

    console.log('line graph');
    console.log(props);
    _this.state = {
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
        _react2.default.createElement(_reactChartist2.default, { data: this.props.data, listener: this.state.listeners, options: this.props.options, type: 'Line' })
      );
    }
  }]);

  return Pie;
}(_react2.default.Component);

exports.default = Pie;

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width:48px;\n    height:48px;\n    padding-top:10px;\n    background-color: DodgerBlue; /* Blue background */\n    border: none; /* Remove borders */\n    color: white; /* White text */\n    padding: 8px; /* Some padding */\n    font-size: 16px; /* Set a font size */\n    cursor: pointer; /* Mouse pointer on hover */\n    vertical-align: -50%;\n    border-radius:50%;\n    transform: all 0.3s ease-in-out;\n    &:hover {\n        background-color: RoyalBlue;\n    }\n    svg{  \n        margin-top:3px;\n    }\n'], ['\n    width:48px;\n    height:48px;\n    padding-top:10px;\n    background-color: DodgerBlue; /* Blue background */\n    border: none; /* Remove borders */\n    color: white; /* White text */\n    padding: 8px; /* Some padding */\n    font-size: 16px; /* Set a font size */\n    cursor: pointer; /* Mouse pointer on hover */\n    vertical-align: -50%;\n    border-radius:50%;\n    transform: all 0.3s ease-in-out;\n    &:hover {\n        background-color: RoyalBlue;\n    }\n    svg{  \n        margin-top:3px;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

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
/* 10 */
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
    read: {
        q1: 'q1'
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top:100px;\n    height: 100vh;\n'], ['\n  margin-top:100px;\n    height: 100vh;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Line = __webpack_require__(7);

var _Line2 = _interopRequireDefault(_Line);

var _adapterParallel = __webpack_require__(31);

var _adapterParallel2 = _interopRequireDefault(_adapterParallel);

var _chartistPluginLegend = __webpack_require__(32);

var _chartistPluginLegend2 = _interopRequireDefault(_chartistPluginLegend);

var _chartistPluginAxistitle = __webpack_require__(33);

var _chartistPluginAxistitle2 = _interopRequireDefault(_chartistPluginAxistitle);

var _trends = __webpack_require__(43);

var _trends2 = _interopRequireDefault(_trends);

var _styledComponents = __webpack_require__(1);

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

        var order = ['s1', 's2'];

        _this.state = {
            order: order,
            adapter: new _adapterParallel2.default(_trends2.default, 'Math', 'Month', ['math: (Worldwide)', "physics: (Worldwide)", "chemistry: (Worldwide)", "biology: (Worldwide)", "science: (Worldwide)"])
        };
        return _this;
    }

    _createClass(Pie, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // //         import Legend from 'chartist-plugin-legend';
            // // import Axis from 'chartist-plugin-axistitle';
            //         let Legend = require('chartist-plugin-legend');
            //         let Axis = require('chartist-plugin-axistitle');
            var fn = function () {
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
                showPoint: false,
                chartPadding: {
                    top: 10,
                    right: 20,
                    bottom: 170,
                    left: 20
                },
                axisX: {
                    labelInterpolationFnc: fn
                },
                plugins: [(0, _chartistPluginLegend2.default)({
                    position: 'top',
                    classNames: ['ct-myclass', 'ct-myclass2'],
                    legendNames: [{ name: 'math: (Worldwide)', series: ['math: (Worldwide)'] }, { name: 'ergo', series: ['chemistry: (Worldwide)'] }]
                }), (0, _chartistPluginAxistitle2.default)({
                    axisX: {
                        axisTitle: 'Time (mins)',
                        axisClass: 'ct-axis-title',
                        offset: {
                            x: 0,
                            y: 40
                        },
                        textAnchor: 'middle'
                    },
                    axisY: {
                        axisTitle: 'Goals',
                        axisClass: 'ct-axis-title',
                        offset: {
                            x: 0,
                            y: -10
                        },
                        flipTitle: false
                    }
                })]
            };
            this.setState({
                options: options
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Container,
                null,
                _react2.default.createElement(_Line2.default, { data: this.state.adapter, options: this.state.options })
            );
        }
    }]);

    return Pie;
}(_react2.default.Component);

exports.default = Pie;


var Container = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    height: 100%;\n    .ct-chart{\n        height: 100%;\n    }\n    ', '\n    .ct-grids line {\n      color: blue;\n    }\n    .ct-labels span {\n      color: blue;\n    }\n    .ct-grid line,\n    .ct-vertical,\n    .ct-start,\n    .ct-horizontal{ \n          stroke: red !important;\n          stroke-width: 1px !important;\n          stroke-dasharray: 2px !important;\n      }\n      .ct-legend{\n        list-style-type: none;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        margin-bottom:0px;\n        li {\n            padding: 5px;\n            margin: 0px 10px 0px 10px;\n            border-radius: 25px;\n        }\n      }\n    '], ['\n    height: 100%;\n    .ct-chart{\n        height: 100%;\n    }\n    ', '\n    .ct-grids line {\n      color: blue;\n    }\n    .ct-labels span {\n      color: blue;\n    }\n    .ct-grid line,\n    .ct-vertical,\n    .ct-start,\n    .ct-horizontal{ \n          stroke: red !important;\n          stroke-width: 1px !important;\n          stroke-dasharray: 2px !important;\n      }\n      .ct-legend{\n        list-style-type: none;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        margin-bottom:0px;\n        li {\n            padding: 5px;\n            margin: 0px 10px 0px 10px;\n            border-radius: 25px;\n        }\n      }\n    ']);

exports.genStyles = genStyles;

var _constants = __webpack_require__(8);

var _styledComponents = __webpack_require__(1);

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
      return _constants.colors.series0;
    case 1:
      return _constants.colors.series1;
    case 2:
      return _constants.colors.series2;
    case 3:
      return _constants.colors.series3;
    case 4:
      return _constants.colors.series4;
    default:
      return _constants.colors.series0;
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
    var s = '.ct-series-' + getLetter(i) + ' .ct-bar, .ct-series-' + getLetter(i) + ' .ct-line, \n      .ct-series-' + getLetter(i) + ' .ct-point, .ct-series-' + getLetter(i) + ' .ct-slice-donut, \n      .ct-series-' + i + ', .ct-series-' + getLetter(i) + ' .ct-series {\n        stroke: ' + getColor(i) + ' !important;\n        stroke-width: 2px;\n        font-size:0.8em;\n        animation-delay: ' + i / 4 + 's;\n      }';
    return styles = styles + s;
  });
  return styles;
}

function genStyles(data) {
  var series = data.series;

  var colors = generateSeriesStyle(series);
  var Container = _styledComponents2.default.div(_templateObject, colors);
  return Container;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position:fixed;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  background-color: #330033;\n  z-index: -999999;\n  display: flex;\n  overflow:hidden;\n  padding-top: 10px;\n  div{\n      flex:1;\n  }\n"], ["\n  position:fixed;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  background-color: #330033;\n  z-index: -999999;\n  display: flex;\n  overflow:hidden;\n  padding-top: 10px;\n  div{\n      flex:1;\n  }\n"]);

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
    }

    _createClass(UiBg, [{
        key: "render",
        value: function render() {
            // console.log("rendering game a");
            return _react2.default.createElement(
                Bg,
                { className: "bg" },
                this.props.children
            );
        }
    }]);

    return UiBg;
}(_react2.default.Component);

exports.default = UiBg;


var Bg = _styledComponents2.default.div(_templateObject);

//background-color: #330033;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(36);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(37);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(38);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactUniversalComponent = __webpack_require__(39);

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
                return Promise.all([__webpack_require__(74)("" + _this.props.payload), (0, _importCss3.default)('' + _this.props.payload, {
                    disableWarnings: true
                })]).then(function (proms) {
                    return proms[0];
                });
            },
            path: function path() {
                return _path3.default.join(__dirname, '' + _this.props.payload);
            },
            resolve: function resolve() {
                return /*require.resolve*/(__webpack_require__(93).resolve("" + _this.props.payload));
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(75);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

__webpack_require__(34);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGa = __webpack_require__(49);

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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(2);

var _Index = __webpack_require__(78);

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Sim from './../../games/g1/simulation/index.js';


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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: flex-end;\n    background-color:red;\n'], ['\n    display: flex;\n    justify-content: flex-end;\n    background-color:red;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _IconButton = __webpack_require__(9);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(2);

var _reduxLogger = __webpack_require__(54);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(92);

var _reducers2 = _interopRequireDefault(_reducers);

var _Game = __webpack_require__(20);

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
        console.log(_reducers2.default);
        //expects to recieve the game
        //the game gives reducers, selectors, mapStteToProps, dispatchToStore, 
        //simulation and iterates through story nodes
        //the game displays the content, the simulation runs, stops and persists state
        //  let reducers = props.game.getReducers();
        // this.store = createStore(reducers);
        _this.store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxLogger2.default));

        console.log("sub store created");
        return _this;
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: this.store },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_Game2.default, { game: this.props.game })
                )
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

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
/* 23 */
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 25 */
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

__webpack_require__(76);

var _reactKatex = __webpack_require__(77);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ids = __webpack_require__(47);

var _styledComponents = __webpack_require__(1);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeZone = exports.reducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setFSMState = setFSMState;

var _Constants = __webpack_require__(10);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = exports.reducer = function reducer() {
    var _extends2;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        position: {
            type: _Constants.constants.types.zones,
            id: 'lounge'
        },
        lounge: {
            type: _Constants.constants.types.zones,
            id: 'lounge',
            state: 'in'
        },
        control: {
            type: _Constants.constants.types.zones,
            id: 'control',
            state: 0
        }
    };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'CHANGE_ZONE':
            // console.log("action change zone");
            // console.log(action);
            return _extends({}, state, (_extends2 = {
                position: _extends({}, state.position, {
                    id: action.payload.to.id
                })
            }, _defineProperty(_extends2, action.payload.to.id, _extends({}, state[action.payload.to.id], {
                state: action.payload.to.state
            })), _defineProperty(_extends2, action.payload.from.id, _extends({}, state[action.payload.from.id], {
                state: action.payload.from.state
            })), _extends2));
        case 'SET_ZONE':
            return _extends({}, state, {
                position: _extends({}, state.position, {
                    id: action.payload.id
                })
            });
        case 'SET_FSM_STATE':
            console.log("setting " + action.payload.id + " state to " + action.payload.state);
            return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], {
                state: action.payload.state
            })));
        default:
            return state;
    }
};

//from(id,state) to(id, state)
var changeZone = exports.changeZone = function changeZone(payload) {
    return {
        type: 'CHANGE_ZONE',
        payload: payload
    };
};
// export function setZone(id){
//     return{
//         type: 'SET_ZONE',
//         payload: {
//             id
//         }
//     }
// }

function setFSMState(id, state) {
    return {
        type: 'SET_FSM_STATE',
        payload: {
            id: id, state: state
        }
    };
}

// export const actions = {
//     setZone
// }

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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css);", ""]);

// module
exports.push([module.i, ".ct-axis-title{color:#fff}@-webkit-keyframes dance{0%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:rotate(3deg);transform:rotate(3deg)}}@keyframes dance{0%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:rotate(3deg);transform:rotate(3deg)}}@-webkit-keyframes verticalChange{0%{-webkit-transform:translate(-100%);transform:translate(-100%)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes verticalChange{0%{-webkit-transform:translate(-100%);transform:translate(-100%)}to{-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes colors{0%{stroke:orange}to{stroke:blue}}@keyframes colors{0%{stroke:orange}to{stroke:blue}}@-webkit-keyframes scaleUp{0%{opacity:0;-webkit-transform:scaleY(0) scaleX(0);transform:scaleY(0) scaleX(0)}to{opacity:1;-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}}@keyframes scaleUp{0%{opacity:0;-webkit-transform:scaleY(0) scaleX(0);transform:scaleY(0) scaleX(0)}to{opacity:1;-webkit-transform:scaleY(1) scaleX(1);transform:scaleY(1) scaleX(1)}}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(73);

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
/* 32 */
/***/ (function(module, exports) {

module.exports = require("chartist-plugin-legend");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("chartist-plugin-axistitle");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".fade-in-enter{opacity:.01}.fade-in-enter.fade-in-enter-active{opacity:1;-webkit-transition:opacity .5s ease-in;-o-transition:opacity .5s ease-in;transition:opacity .5s ease-in}.fade-in-leave{opacity:1}.fade-in-leave.fade-in-leave-active{opacity:.01;-webkit-transition:opacity .3s ease-in;-o-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.fade-in-appear{opacity:.01}.fade-in-appear.fade-in-appear-active{opacity:1;-webkit-transition:opacity .5s ease-in;-o-transition:opacity .5s ease-in;transition:opacity .5s ease-in}", ""]);

// exports


/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(69);

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

var _reportChunks = __webpack_require__(70);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(41);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(71);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(40);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ }),
/* 40 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size:1.2em;\n  color: rgb(255,255,255,1);\n  width:100%;\n'], ['\n  font-size:1.2em;\n  color: rgb(255,255,255,1);\n  width:100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 50%;\n  background-color: rgb(255,255,255,0.5);\n  box-sizing: border-box;\n'], ['\n  width: 50%;\n  background-color: rgb(255,255,255,0.5);\n  box-sizing: border-box;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width:100%;\n  height:100%;\n  background-color: rgb(255,255,255,1);\n  opacity:1;\n  margin-top: 10px;\n  border-bottom: 2px solid grey;\n  padding:20px;\n  box-sizing: border-box;\n  a{\n    width:100%;\n    height:100%;\n    color: grey;\n    background-color: white;\n    opacity:1;\n  }\n'], ['\n  width:100%;\n  height:100%;\n  background-color: rgb(255,255,255,1);\n  opacity:1;\n  margin-top: 10px;\n  border-bottom: 2px solid grey;\n  padding:20px;\n  box-sizing: border-box;\n  a{\n    width:100%;\n    height:100%;\n    color: grey;\n    background-color: white;\n    opacity:1;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _MainMenu = __webpack_require__(5);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _Trends = __webpack_require__(11);

var _Trends2 = _interopRequireDefault(_Trends);

var _Bg = __webpack_require__(14);

var _Bg2 = _interopRequireDefault(_Bg);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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
        _react2.default.createElement(_MainMenu2.default, null),
        _react2.default.createElement(
          PostBox,
          null,
          _react2.default.createElement(
            Message,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          ),
          this.props.posts.map(function (post) {
            return _react2.default.createElement(
              Post,
              { key: post.id },
              _react2.default.createElement(
                _reactStatic.Link,
                { key: post.id, to: '/posts/' + post.id },
                post.title
              )
            );
          })
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
/* 43 */
/***/ (function(module, exports) {

module.exports = [{"Month":"2004-01","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":100},{"Month":"2004-02","math: (Worldwide)":37,"physics: (Worldwide)":22,"chemistry: (Worldwide)":22,"biology: (Worldwide)":18,"science: (Worldwide)":98},{"Month":"2004-03","math: (Worldwide)":35,"physics: (Worldwide)":20,"chemistry: (Worldwide)":20,"biology: (Worldwide)":17,"science: (Worldwide)":90},{"Month":"2004-04","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":20,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-05","math: (Worldwide)":33,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":15,"science: (Worldwide)":77},{"Month":"2004-06","math: (Worldwide)":27,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":68},{"Month":"2004-07","math: (Worldwide)":21,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2004-08","math: (Worldwide)":24,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":68},{"Month":"2004-09","math: (Worldwide)":37,"physics: (Worldwide)":19,"chemistry: (Worldwide)":21,"biology: (Worldwide)":18,"science: (Worldwide)":87},{"Month":"2004-10","math: (Worldwide)":37,"physics: (Worldwide)":20,"chemistry: (Worldwide)":21,"biology: (Worldwide)":17,"science: (Worldwide)":86},{"Month":"2004-11","math: (Worldwide)":35,"physics: (Worldwide)":19,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":82},{"Month":"2004-12","math: (Worldwide)":30,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":13,"science: (Worldwide)":72},{"Month":"2005-01","math: (Worldwide)":34,"physics: (Worldwide)":18,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":87},{"Month":"2005-02","math: (Worldwide)":35,"physics: (Worldwide)":18,"chemistry: (Worldwide)":19,"biology: (Worldwide)":16,"science: (Worldwide)":88},{"Month":"2005-03","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":79},{"Month":"2005-04","math: (Worldwide)":33,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-05","math: (Worldwide)":32,"physics: (Worldwide)":17,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":71},{"Month":"2005-06","math: (Worldwide)":28,"physics: (Worldwide)":15,"chemistry: (Worldwide)":16,"biology: (Worldwide)":12,"science: (Worldwide)":63},{"Month":"2005-07","math: (Worldwide)":20,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2005-08","math: (Worldwide)":24,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":62},{"Month":"2005-09","math: (Worldwide)":36,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":74},{"Month":"2005-10","math: (Worldwide)":35,"physics: (Worldwide)":17,"chemistry: (Worldwide)":18,"biology: (Worldwide)":15,"science: (Worldwide)":76},{"Month":"2005-11","math: (Worldwide)":33,"physics: (Worldwide)":16,"chemistry: (Worldwide)":17,"biology: (Worldwide)":14,"science: (Worldwide)":75},{"Month":"2005-12","math: (Worldwide)":27,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":63},{"Month":"2006-01","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":13,"science: (Worldwide)":76},{"Month":"2006-02","math: (Worldwide)":33,"physics: (Worldwide)":15,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":74},{"Month":"2006-03","math: (Worldwide)":32,"physics: (Worldwide)":14,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":70},{"Month":"2006-04","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":64},{"Month":"2006-05","math: (Worldwide)":30,"physics: (Worldwide)":14,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":61},{"Month":"2006-06","math: (Worldwide)":26,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2006-07","math: (Worldwide)":18,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2006-08","math: (Worldwide)":23,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":55},{"Month":"2006-09","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":15,"biology: (Worldwide)":12,"science: (Worldwide)":69},{"Month":"2006-10","math: (Worldwide)":33,"physics: (Worldwide)":13,"chemistry: (Worldwide)":14,"biology: (Worldwide)":11,"science: (Worldwide)":65},{"Month":"2006-11","math: (Worldwide)":30,"physics: (Worldwide)":13,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":61},{"Month":"2006-12","math: (Worldwide)":26,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2007-01","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":65},{"Month":"2007-02","math: (Worldwide)":30,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":62},{"Month":"2007-03","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":62},{"Month":"2007-04","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2007-05","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":54},{"Month":"2007-06","math: (Worldwide)":24,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2007-07","math: (Worldwide)":18,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":44},{"Month":"2007-08","math: (Worldwide)":21,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2007-09","math: (Worldwide)":31,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":11,"science: (Worldwide)":57},{"Month":"2007-10","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":60},{"Month":"2007-11","math: (Worldwide)":29,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":56},{"Month":"2007-12","math: (Worldwide)":25,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-01","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-02","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":57},{"Month":"2008-03","math: (Worldwide)":27,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2008-04","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2008-05","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2008-06","math: (Worldwide)":24,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2008-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2008-08","math: (Worldwide)":21,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2008-09","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":54},{"Month":"2008-10","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":51},{"Month":"2008-11","math: (Worldwide)":29,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2008-12","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2009-01","math: (Worldwide)":28,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":53},{"Month":"2009-02","math: (Worldwide)":32,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2009-03","math: (Worldwide)":32,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":51},{"Month":"2009-04","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2009-05","math: (Worldwide)":30,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2009-06","math: (Worldwide)":26,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":44},{"Month":"2009-07","math: (Worldwide)":17,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":38},{"Month":"2009-08","math: (Worldwide)":22,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2009-09","math: (Worldwide)":32,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":52},{"Month":"2009-10","math: (Worldwide)":34,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-11","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":50},{"Month":"2009-12","math: (Worldwide)":29,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2010-01","math: (Worldwide)":33,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":52},{"Month":"2010-02","math: (Worldwide)":35,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-03","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":49},{"Month":"2010-04","math: (Worldwide)":35,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2010-05","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2010-06","math: (Worldwide)":30,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2010-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":39},{"Month":"2010-08","math: (Worldwide)":23,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2010-09","math: (Worldwide)":37,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2010-10","math: (Worldwide)":38,"physics: (Worldwide)":13,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-11","math: (Worldwide)":39,"physics: (Worldwide)":13,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":46},{"Month":"2010-12","math: (Worldwide)":34,"physics: (Worldwide)":11,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2011-01","math: (Worldwide)":38,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":48},{"Month":"2011-02","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":47},{"Month":"2011-03","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":45},{"Month":"2011-04","math: (Worldwide)":41,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":43},{"Month":"2011-05","math: (Worldwide)":42,"physics: (Worldwide)":12,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2011-06","math: (Worldwide)":33,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":7,"science: (Worldwide)":42},{"Month":"2011-07","math: (Worldwide)":20,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":36},{"Month":"2011-08","math: (Worldwide)":26,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":40},{"Month":"2011-09","math: (Worldwide)":40,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":48},{"Month":"2011-10","math: (Worldwide)":43,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2011-11","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2011-12","math: (Worldwide)":41,"physics: (Worldwide)":10,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2012-01","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":47},{"Month":"2012-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":45},{"Month":"2012-03","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-05","math: (Worldwide)":59,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2012-06","math: (Worldwide)":40,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2012-07","math: (Worldwide)":26,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2012-08","math: (Worldwide)":31,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2012-09","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":47},{"Month":"2012-10","math: (Worldwide)":50,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2012-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2012-12","math: (Worldwide)":48,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":35},{"Month":"2013-01","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-02","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2013-03","math: (Worldwide)":48,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":41},{"Month":"2013-04","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2013-05","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":40},{"Month":"2013-06","math: (Worldwide)":37,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2013-07","math: (Worldwide)":23,"physics: (Worldwide)":7,"chemistry: (Worldwide)":8,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2013-08","math: (Worldwide)":28,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2013-09","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2013-10","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2013-11","math: (Worldwide)":49,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":41},{"Month":"2013-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":36},{"Month":"2014-01","math: (Worldwide)":45,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2014-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":42},{"Month":"2014-04","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-05","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2014-06","math: (Worldwide)":37,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2014-07","math: (Worldwide)":22,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":34},{"Month":"2014-08","math: (Worldwide)":29,"physics: (Worldwide)":9,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":38},{"Month":"2014-09","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2014-10","math: (Worldwide)":56,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2014-11","math: (Worldwide)":51,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":44},{"Month":"2014-12","math: (Worldwide)":47,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2015-01","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-02","math: (Worldwide)":53,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2015-04","math: (Worldwide)":51,"physics: (Worldwide)":12,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":41},{"Month":"2015-05","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2015-06","math: (Worldwide)":36,"physics: (Worldwide)":10,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2015-07","math: (Worldwide)":21,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":35},{"Month":"2015-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":6,"science: (Worldwide)":39},{"Month":"2015-09","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2015-10","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2015-11","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":8,"science: (Worldwide)":43},{"Month":"2015-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-01","math: (Worldwide)":43,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2016-02","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2016-03","math: (Worldwide)":46,"physics: (Worldwide)":11,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-04","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-05","math: (Worldwide)":49,"physics: (Worldwide)":12,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":41},{"Month":"2016-06","math: (Worldwide)":31,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":37},{"Month":"2016-07","math: (Worldwide)":18,"physics: (Worldwide)":7,"chemistry: (Worldwide)":7,"biology: (Worldwide)":5,"science: (Worldwide)":33},{"Month":"2016-08","math: (Worldwide)":30,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":38},{"Month":"2016-09","math: (Worldwide)":55,"physics: (Worldwide)":11,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2016-10","math: (Worldwide)":50,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":42},{"Month":"2016-11","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":44},{"Month":"2016-12","math: (Worldwide)":43,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2017-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2017-02","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2017-03","math: (Worldwide)":52,"physics: (Worldwide)":12,"chemistry: (Worldwide)":13,"biology: (Worldwide)":10,"science: (Worldwide)":46},{"Month":"2017-04","math: (Worldwide)":45,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2017-05","math: (Worldwide)":54,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-06","math: (Worldwide)":30,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":39},{"Month":"2017-07","math: (Worldwide)":19,"physics: (Worldwide)":8,"chemistry: (Worldwide)":8,"biology: (Worldwide)":6,"science: (Worldwide)":37},{"Month":"2017-08","math: (Worldwide)":32,"physics: (Worldwide)":8,"chemistry: (Worldwide)":9,"biology: (Worldwide)":7,"science: (Worldwide)":40},{"Month":"2017-09","math: (Worldwide)":53,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":45},{"Month":"2017-10","math: (Worldwide)":55,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":43},{"Month":"2017-11","math: (Worldwide)":51,"physics: (Worldwide)":10,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":43},{"Month":"2017-12","math: (Worldwide)":46,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":8,"science: (Worldwide)":38},{"Month":"2018-01","math: (Worldwide)":47,"physics: (Worldwide)":10,"chemistry: (Worldwide)":11,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-02","math: (Worldwide)":53,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":46},{"Month":"2018-03","math: (Worldwide)":48,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":9,"science: (Worldwide)":45},{"Month":"2018-04","math: (Worldwide)":49,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":42},{"Month":"2018-05","math: (Worldwide)":52,"physics: (Worldwide)":11,"chemistry: (Worldwide)":12,"biology: (Worldwide)":10,"science: (Worldwide)":44},{"Month":"2018-06","math: (Worldwide)":33,"physics: (Worldwide)":9,"chemistry: (Worldwide)":10,"biology: (Worldwide)":7,"science: (Worldwide)":38}]

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _MainMenu = __webpack_require__(5);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _DynamicComponent = __webpack_require__(15);

var _DynamicComponent2 = _interopRequireDefault(_DynamicComponent);

var _reactGa = __webpack_require__(49);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _FadeIn = __webpack_require__(17);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

var _MainMenu = __webpack_require__(5);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _IconButton = __webpack_require__(9);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Wrapper = __webpack_require__(23);

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _IFrame = __webpack_require__(16);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(82);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(83);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(84);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name) {
    console.log('factory name' + name);
    switch (name) {
        case _index4.default.id:
            return _index4.default;
        case _index2.default.id:
            return _index2.default;
        case _index6.default.id:
            return _index6.default;
    }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'ADD_LOG':
            //console.log("setting " + action.payload.id + " state to " + action.payload.state);
            return [].concat(_toConsumableArray(state), [action.payload]);
        default:
            return state;
    }
};

//from(id,state) to(id, state)
var addLog = exports.addLog = function addLog(type, text) {
    return {
        type: 'ADD_LOG',
        payload: {
            type: type, text: text
        }
    };
};

// export const actions = {
//     setZone
// }

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setScore = setScore;
exports.setFSMState = setFSMState;

var _Constants = __webpack_require__(10);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        read: {
            type: _Constants.constants.types.questions,
            id: 'read',
            state: 0,
            scores: {}
        }
    };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'SET_SCORE':
            console.log("reducer set score, scores: " + action.payload.id);
            console.log(action.payload.scores);
            var s = updateScores(action.payload.scores, state[action.payload.id].scores);
            return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], {
                scores: s
            })));
        case 'SET_FSM_STATE':
            return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], {
                state: action.payload.state
            })));
        default:
            return state;
    }
};

function updateScores(scores, aggregate) {
    //for each question add total and actual score
    console.log("update scores");
    console.log(scores);
    console.log(aggregate);
    var o = _extends({}, aggregate);
    for (var key in scores) {
        if (scores.hasOwnProperty(key)) {
            //console.log(key + " -> " + p[key]);
            console.log("adding " + key + ":" + scores[key]);
            o[key] = {
                total: aggregate[key] ? aggregate[key].total + 1 : 1,
                score: aggregate[key] ? aggregate[key].score + scores[key].score : scores[key].score
            };
        }
    }
    console.log("score aggregate");
    console.log(o);
    return o;
}

function setScore(id, scores) {
    return {
        type: 'SET_SCORE',
        payload: {
            id: id,
            scores: scores
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setTemp = setTemp;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        time: 1,
        temp: 40,
        targetTemp: 20,
        tempData: []
    };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'SET_TEMP':
            return _extends({}, state, {
                time: action.payload.time,
                temp: action.payload.temp,
                tempData: [].concat(_toConsumableArray(state.tempData), [{ time: action.payload.time, temp: action.payload.temp }])
            });
        default:
            return state;
    }
};

function setTemp(time, temp) {
    return {
        type: 'SET_TEMP',
        payload: {
            time: time,
            temp: temp
        }
    };
}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

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

var _reactStatic = __webpack_require__(4);

var _GameMenu = __webpack_require__(21);

var _GameMenu2 = _interopRequireDefault(_GameMenu);

var _Index = __webpack_require__(22);

var _Index2 = _interopRequireDefault(_Index);

var _index = __webpack_require__(94);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Simulation = __webpack_require__(95);

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
/* 57 */
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

var _ids = __webpack_require__(47);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Choice = __webpack_require__(97);

var _Choice2 = _interopRequireDefault(_Choice);

var _Button = __webpack_require__(59);

var _Button2 = _interopRequireDefault(_Button);

var _Text = __webpack_require__(58);

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
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _MainMenu = __webpack_require__(5);

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
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(65);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _reactHotLoader = __webpack_require__(66);

var _reactStaticRoutes = __webpack_require__(67);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _redux = __webpack_require__(100);

var _redux2 = _interopRequireDefault(_redux);

__webpack_require__(103);

var _Analytics = __webpack_require__(18);

var _Analytics2 = _interopRequireDefault(_Analytics);

var _Gapi = __webpack_require__(19);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(36);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(37);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(38);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(68);

var _reactUniversalComponent = __webpack_require__(39);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(4);

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
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 42)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 44)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(44);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Games',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 45)), (0, _importCss3.default)('src/containers/Games', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Games');
  },
  resolve: function resolve() {
    return /*require.resolve*/(45);
  },
  chunkName: function chunkName() {
    return 'src/containers/Games';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Game',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 55)), (0, _importCss3.default)('src/containers/Game', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Game');
  },
  resolve: function resolve() {
    return /*require.resolve*/(55);
  },
  chunkName: function chunkName() {
    return 'src/containers/Game';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 62)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(62);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: 'D:/websites/react-static/static-site-2/4/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 63)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(63);
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
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(40);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(41);

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
/* 71 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-chartist");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DynamicComponent": [
		15
	],
	"./DynamicComponent.jsx": [
		15
	],
	"./Trends": [
		11,
		0
	],
	"./Trends.jsx": [
		11,
		0
	],
	"./UI/IFrame": [
		16
	],
	"./UI/IFrame.jsx": [
		16
	],
	"./UI/animations/FadeIn": [
		17
	],
	"./UI/animations/FadeIn.jsx": [
		17
	],
	"./UI/animations/styles.css": [
		34
	],
	"./UI/elements/Bg": [
		14
	],
	"./UI/elements/Bg.jsx": [
		14
	],
	"./UI/elements/IconButton": [
		9
	],
	"./UI/elements/IconButton.jsx": [
		9
	],
	"./UI/elements/icons.css": [
		46,
		0
	],
	"./UI/graphs/Line": [
		7
	],
	"./UI/graphs/Line.jsx": [
		7
	],
	"./UI/graphs/animations": [
		12
	],
	"./UI/graphs/animations.js": [
		12
	],
	"./UI/graphs/main.css": [
		30
	],
	"./UI/graphs/styles": [
		13
	],
	"./UI/graphs/styles.js": [
		13
	],
	"./UI/math/Katex": [
		25,
		0
	],
	"./UI/math/Katex.jsx": [
		25,
		0
	],
	"./UI/math/katex.css": [
		48,
		0
	],
	"./apis/Analytics": [
		18
	],
	"./apis/Analytics.jsx": [
		18
	],
	"./apis/Gapi": [
		19
	],
	"./apis/Gapi.jsx": [
		19
	],
	"./constants": [
		8
	],
	"./constants.js": [
		8
	],
	"./game/Game": [
		20,
		0
	],
	"./game/Game.jsx": [
		20,
		0
	],
	"./game/GameMenu": [
		21
	],
	"./game/GameMenu.jsx": [
		21
	],
	"./game/Index": [
		22,
		0
	],
	"./game/Index.jsx": [
		22,
		0
	],
	"./game/Wrapper": [
		23
	],
	"./game/Wrapper.jsx": [
		23
	],
	"./game/views/Choice": [
		27,
		0
	],
	"./game/views/Choice.jsx": [
		27,
		0
	],
	"./layout/MainMenu": [
		5
	],
	"./layout/MainMenu.jsx": [
		5
	],
	"./layout/menu.css": [
		29
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
webpackAsyncContext.id = 74;
module.exports = webpackAsyncContext;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("katex/dist/katex.min.css");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("react-katex");

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

var _Trends = __webpack_require__(79);

var _Trends2 = _interopRequireDefault(_Trends);

var _Game = __webpack_require__(80);

var _Game2 = _interopRequireDefault(_Game);

var _Log = __webpack_require__(86);

var _Log2 = _interopRequireDefault(_Log);

var _Simulation = __webpack_require__(88);

var _Simulation2 = _interopRequireDefault(_Simulation);

var _index = __webpack_require__(89);

var _index2 = _interopRequireDefault(_index);

var _Temp = __webpack_require__(90);

var _Temp2 = _interopRequireDefault(_Temp);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import View from './View.jsx';
// import Factory from './../story/Factory.js';
// import Builder from './Builder.jsx';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {changeZone} from './../story/zones/reducers.js';


var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.handleWindowSizeChange = function () {
            _this.setState({
                isMobile: window.innerWidth <= 500
            });
            //console.log("handle size change " + window.innerWidth);
        };

        _this.state = {
            width: window.innerWidth
        };
        return _this;
    }

    _createClass(Index, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            window.addEventListener('resize', this.handleWindowSizeChange);
        }

        // make sure to remove the listener
        // when the component is not mounted anymore

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleWindowSizeChange);
        }
    }, {
        key: 'renderLayout',
        value: function renderLayout() {
            if (this.state.isMobile) {
                return _react2.default.createElement(
                    'div',
                    { style: mContainer },
                    _react2.default.createElement(_Simulation2.default, { sim: _index2.default }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_Log2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: sInputBox },
                        _react2.default.createElement(_Game2.default, null)
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { style: dContainer },
                    _react2.default.createElement(_Simulation2.default, { sim: _index2.default }),
                    _react2.default.createElement(
                        'div',
                        { style: dPanel },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Log2.default, null)
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: sInputBox },
                            _react2.default.createElement(_Game2.default, null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: dPanel },
                        _react2.default.createElement(_Temp2.default, null)
                    )
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderLayout();
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;


var mContainer = {
    backgroundColor: 'blue',
    position: 'absolute',
    display: 'flex',
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden'
};
var dContainer = {
    backgroundColor: 'blue',
    position: 'absolute',
    marginTop: '20px',
    display: 'flex',
    height: '100vh',
    width: '100%',
    flexDirection: 'row',
    overflow: 'hidden'
};

var sInputBox = {
    flexGrow: '2',
    border: '4px solid green'
};
var dPanel = {
    flexGrow: '1',
    flexDirection: 'column',
    backgroundColor: 'yellow'
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    height: 400px;\n    width: 100%;\n'], ['\n    height: 400px;\n    width: 100%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Line = __webpack_require__(7);

var _Line2 = _interopRequireDefault(_Line);

var _adapterParallel = __webpack_require__(31);

var _adapterParallel2 = _interopRequireDefault(_adapterParallel);

var _chartistPluginLegend = __webpack_require__(32);

var _chartistPluginLegend2 = _interopRequireDefault(_chartistPluginLegend);

var _chartistPluginAxistitle = __webpack_require__(33);

var _chartistPluginAxistitle2 = _interopRequireDefault(_chartistPluginAxistitle);

var _trends = __webpack_require__(43);

var _trends2 = _interopRequireDefault(_trends);

var _styledComponents = __webpack_require__(1);

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

        var order = ['s1', 's2'];

        _this.state = {
            order: order,
            adapter: new _adapterParallel2.default(_trends2.default, 'Math', 'Month', ['math: (Worldwide)', "physics: (Worldwide)", "chemistry: (Worldwide)", "biology: (Worldwide)", "science: (Worldwide)"])
        };
        return _this;
    }

    _createClass(Pie, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // //         import Legend from 'chartist-plugin-legend';
            // // import Axis from 'chartist-plugin-axistitle';
            //         let Legend = require('chartist-plugin-legend');
            //         let Axis = require('chartist-plugin-axistitle');
            var fn = function () {
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
                showPoint: false,
                chartPadding: {
                    top: 10,
                    right: 20,
                    bottom: 170,
                    left: 20
                },
                axisX: {
                    labelInterpolationFnc: fn
                },
                plugins: [(0, _chartistPluginLegend2.default)({
                    position: 'top',
                    classNames: ['ct-myclass', 'ct-myclass2'],
                    legendNames: [{ name: 'math: (Worldwide)', series: ['math: (Worldwide)'] }, { name: 'ergo', series: ['chemistry: (Worldwide)'] }]
                }), (0, _chartistPluginAxistitle2.default)({
                    axisX: {
                        axisTitle: 'Time (mins)',
                        axisClass: 'ct-axis-title',
                        offset: {
                            x: 0,
                            y: 40
                        },
                        textAnchor: 'middle'
                    },
                    axisY: {
                        axisTitle: 'Goals',
                        axisClass: 'ct-axis-title',
                        offset: {
                            x: 0,
                            y: -10
                        },
                        flipTitle: false
                    }
                })]
            };
            this.setState({
                options: options
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Container,
                null,
                _react2.default.createElement(_Line2.default, { data: this.state.adapter, options: this.state.options })
            );
        }
    }]);

    return Pie;
}(_react2.default.Component);

exports.default = Pie;


var Container = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _View = __webpack_require__(81);

var _View2 = _interopRequireDefault(_View);

var _Factory = __webpack_require__(50);

var _Factory2 = _interopRequireDefault(_Factory);

var _Builder = __webpack_require__(85);

var _Builder2 = _interopRequireDefault(_Builder);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(2);

var _reducers = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        console.log('index component props:');
        console.log(props);
        _this.onInput = _this.onInput.bind(_this);
        _this.getZone = _this.getZone.bind(_this);
        var zone = _this.getZone();
        _this.state = {
            zone: zone,
            zoneId: zone.id,
            builder: (0, _Builder2.default)(_View2.default)
        };
        return _this;
    }

    _createClass(Index, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log("has zone " + prevProps.position.id + " changed? " + this.props.position.id);
            if (prevProps.position.id != this.props.position.id) {
                var zone = this.getZone();
                this.setState({
                    zone: zone,
                    zoneId: zone.id
                });
            }
        }
    }, {
        key: 'getZone',
        value: function getZone() {
            return (0, _Factory2.default)(this.props.position.id);
        }
    }, {
        key: 'onInput',
        value: function onInput(input) {
            this.props.changeZone(input);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_View2.default, { fsm: this.state.zone, id: this.state.zoneId, onInput: this.onInput, builder: this.state.builder })
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        changeZone: _reducers.changeZone
    }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        position: state.zones.position
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Index);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(2);

var _Factory = __webpack_require__(50);

var _Factory2 = _interopRequireDefault(_Factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_React$Component) {
    _inherits(View, _React$Component);

    function View(props) {
        _classCallCheck(this, View);

        // console.log('fsm view props id: ' + props.mystate.id + " state: " + props.mystate.state);
        // console.log(this.props);
        var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

        _this.onInput = _this.onInput.bind(_this);
        _this.state = {
            //builder: Builder(this.onInput)
            builder: _this.props.builder(_this.onInput)
        };
        return _this;
    }
    // componentWillMount(props){
    //     console.log(`willMount ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    //     console.log(props);
    // }
    // componentDidMount(){
    //     console.log(`didMount ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    // }
    // componentWillReceiveProps(props){
    //     console.log(`willRecieveProps ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    //     console.log(props);
    // }
    // componentWillUnmount(){
    //     console.log(`willUnMount ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    // }
    // componentDidUpdate(){
    //     console.log(`didUpdate ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    // }
    // componentWillUpdate(props){
    //     console.log(`willUpdate ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    //     console.log(props);
    // }


    _createClass(View, [{
        key: 'onInput',
        value: function onInput(input) {
            console.log("onInput id: " + this.props.id);
            this.props.fsm.onInput(input, this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('rerendering gameview ' + this.props.mystate.id + ' with props ' + this.props.mystate.state);
            return _react2.default.createElement(
                'div',
                { className: 'gameview' + this.props.mystate.id },
                this.props.fsm.onRender(this.state.builder, this.props, _Factory2.default).map(function (e) {
                    return e;
                })
            );
        }
    }]);

    return View;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    // console.log("mapDispatchToProps ");
    // console.log(dispatch);
    return (0, _redux.bindActionCreators)(props.fsm.getActions(), dispatch);
};
var mapStateToProps = function mapStateToProps(state, props) {
    var res = props.fsm.getMapState(state, props);
    // console.log(`mapStateToProps ${res.mystate.id} ${res.mystate.state}`);
    // console.log(res); 
    return res;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(View);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Constants = __webpack_require__(10);

var _reducers = __webpack_require__(26);

var _log = __webpack_require__(51);

//import {setFSMState} from './../reducers.js';
console.log("lounge importing constants " + _Constants.constants);
//import Factory from './../../Factory.js';

var id = 'lounge';
var type = _Constants.constants.types.zones;
var S_ENTRY = 'enter',
    S_INSIDE = 'in',
    S_SIT = 'sit',
    S_READ = 'read';

//0 - entry
//1 - 
var fsm = {
    type: type, id: id,
    onInput: function onInput(input, props) {
        console.log("fsm lounge recieved input!");
        console.log(input);
        switch (props.mystate.state) {
            case S_INSIDE:
                //can choose to sit down - s2, or go to control room/exir - s3
                if (input[_Constants.constants.input.vId] === S_SIT) {
                    //console.log("lounge changing state to sitting down");
                    props.setFSMState(props.id, S_SIT);
                } else if (input[_Constants.constants.input.vId] === _Constants.constants.zones.control) {
                    props.onInput(input.changeFrom(_Constants.messages.toFSMState(props.id, S_ENTRY)));
                }
                break;
            case S_SIT:
                if (input[_Constants.constants.input.vId] === S_INSIDE) {
                    props.setFSMState(props.id, S_INSIDE);
                } else if (input[_Constants.constants.input.vId] === S_READ) {
                    //console.log("user wants to read");
                    props.addLog(_Constants.constants.logTypes.action, 'you decided to read');
                    props.setFSMState(props.id, S_READ);
                }
                break;
            case S_READ:
                if (input[_Constants.constants.input.vId] === S_READ) {
                    console.log("recieved input from user reading");
                    props.setFSMState(props.id, S_SIT);
                }
                break;
            case S_ENTRY:
            default:
                //enter fsm selected, dispatch setFSMState
                //is a location FSM, dispatch setZone for Index to update
                if (input[_Constants.constants.input.vId] === S_INSIDE) {
                    props.onInput(_Constants.messages.changeZone(props.id, _Constants.messages.toFSMState(props.id, S_INSIDE)));
                }
                break;
        }
    },
    onRender: function onRender(builder, props, factory) {
        // console.log("fsm lounge render, props" + props.mystate.state);
        switch (props.mystate.state) {
            case S_INSIDE:
                return [builder.getText(0, 'you are standing in the lounge'), builder.getChildView(_Constants.constants.zones.control, factory(_Constants.constants.zones.control)), builder.getButtonSet(1, [builder.describeBtn(S_SIT, 'sit down')])];
            case S_SIT:
                return [builder.getText(0, 'you are sitting'), builder.getChildView(S_READ, factory(_Constants.constants.questions.read)), builder.getButtonSet(1, [builder.describeBtn(S_INSIDE, 'stand up')])];
            case S_READ:
                return [builder.getChildView(S_READ, factory(_Constants.constants.questions.read))];
            case S_ENTRY:
            default:
                return [builder.getButtonSet(0, [builder.describeBtn(S_INSIDE, 'enter lounge')])];
        }
    },
    getActions: function getActions() {
        return {
            setFSMState: _reducers.setFSMState, //setFSMState(id, state)
            addLog: _log.addLog
        };
    },
    getMapState: function getMapState(state, props) {
        return {
            mystate: state[type][props.id]
        };
    }
};
exports.default = fsm;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Constants = __webpack_require__(10);

var _reducers = __webpack_require__(26);

var id = 'control';
var type = _Constants.constants.types.zones;

//0 - entry
//1 - 
var fsm = {
    type: type, id: id,
    onInput: function onInput(input, props) {
        console.log("fsm control recieved input! state " + props.mystate.state + " vId: " + input[_Constants.constants.input.vId]);
        console.log(input);
        switch (props.mystate.state) {
            case 0:
                //enter fsm selected, dispatch setFSMState
                //is a location FSM, dispatch setZone for Index to update
                if (input[_Constants.constants.input.vId] === 0) {
                    props.onInput(_Constants.messages.changeZone(props.id, _Constants.messages.toFSMState(props.id, 1)));
                }
                break;
            case 1:
                //can choose to sit down - s2, or go to control room/exir - s3
                if (input[_Constants.constants.input.vId] === 0) {
                    props.setFSMState(props.id, 2);
                } else if (input[_Constants.constants.input.vId] === _Constants.constants.zones.lounge) {
                    props.onInput(input.changeFrom(_Constants.messages.toFSMState(props.id, 0)));
                }
                break;
        }
    },
    onRender: function onRender(builder, props, factory) {
        // console.log("fsm lounge render, props");
        // console.log(props);
        console.log("fsm control render, props" + props.mystate.state);
        switch (props.mystate.state) {
            case 1:
                var lounge = factory(_Constants.constants.zones.lounge);
                return [builder.getText(0, 'you are in the control room'), builder.getChildView(lounge.id, lounge), builder.getButtonSet(1, [builder.describeBtn(0, 'steer the ship')])];
            case 2:
                return [builder.getText(0, 'you steer the ship')];
            case 0:
            default:
                return [builder.getButtonSet(0, [builder.describeBtn(0, 'enter control room')])];
        }
    },
    getActions: function getActions() {
        return {
            setFSMState: _reducers.setFSMState, //setFSMState(id, state)
            setZone: _reducers.setZone //setZone(id) 
        };
    },
    getMapState: function getMapState(state, props) {
        return {
            mystate: state[type][props.id]
        };
    }
};
exports.default = fsm;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Constants = __webpack_require__(10);

var _reducers = __webpack_require__(52);

var id = 'read';
//import Factory from './../../Factory.js';

var type = _Constants.constants.types.questions;
var q1 = 'q1';
var output = {};
//0 - entry
//1 - 
var fsm = {
    type: type, id: id,
    onInput: function onInput(input, props) {
        console.log("fsm lounge recieved input!");
        console.log(input);
        switch (props.mystate.state) {
            case 0:
                //enter fsm selected, dispatch setFSMState
                //is a location FSM, dispatch setZone for Index to update
                props.setFSMState(props.id, 1);
                props.onInput(_Constants.messages.action(props.id));
                break;
            case 1:
                props.setFSMState(props.id, 2);
                break;
            case 2:
                if (input[_Constants.constants.input.vId] === 0) {
                    //wrong answer
                    output[q1] = {
                        total: 1,
                        score: 0
                    };
                    props.setFSMState(props.id, 3);
                } else if (input[_Constants.constants.input.vId] === 1) {
                    //right answer
                    output[q1] = {
                        total: 1,
                        score: 1
                    };
                    props.setFSMState(props.id, 4);
                }
                break;
            case 3:
            case 4:
                //record performance
                console.log("read returning score " + props.id);
                console.log(output);
                props.setScore(props.id, output);
                props.setFSMState(props.id, 0);
                props.onInput(_Constants.messages.output(props.id, {
                    output: output
                }));
                break;
        }
    },
    onRender: function onRender(builder, props, factory) {
        // console.log("fsm lounge render, props");
        // console.log(props);
        switch (props.mystate.state) {
            case 1:
                return [builder.getText(0, 'You read: 1+1=2'), builder.getButtonSet(1, [builder.describeBtn(0, 'next')])];
            case 2:
                return [builder.getText(0, 'What is 1+1?'), builder.getButtonSet(1, [builder.describeBtn(0, '1'), builder.describeBtn(1, '2')])];
            case 3:
                return [builder.getText(0, 'you are wrong'), builder.getButtonSet(1, [builder.describeBtn(0, 'return')])];
            case 4:
                return [builder.getText(0, 'you are right'), builder.getButtonSet(1, [builder.describeBtn(0, 'return')])];
            case 0:
            default:
                return [builder.getButtonSet(0, [builder.describeBtn(0, 'read book')])];
        }
    },
    getActions: function getActions() {
        return {
            setFSMState: _reducers.setFSMState, //setFSMState(id, state) setScore(id, scores
            setScore: _reducers.setScore
        };
    },
    getMapState: function getMapState(state, props) {
        return {
            mystate: state[type][props.id]
        };
    }
};
exports.default = fsm;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Builder = function Builder(View) {
    return function (onInput) {
        var getChildView = function getChildView(kId, fsm) {
            return _react2.default.createElement(View, { fsm: fsm, id: kId, onInput: onInput, builder: Builder(View) });
        };
        var getText = function getText(key, text) {
            return _react2.default.createElement(
                'p',
                { key: key },
                text
            );
        };

        var getBtn = function getBtn(kId, vId, text) {
            return _react2.default.createElement(
                'button',
                { key: kId, onClick: function onClick() {
                        var _onInput;

                        onInput((_onInput = {}, _defineProperty(_onInput, _Constants.constants.input.kId, kId), _defineProperty(_onInput, _Constants.constants.input.vId, vId), _onInput));
                    } },
                text
            );
        };
        var getButtonSet = function getButtonSet(id, buttons) {
            return _react2.default.createElement(
                'div',
                { key: id },
                buttons.map(function (b) {
                    return getBtn(id, b.id, b.text);
                })
            );
        };
        var describeBtn = function describeBtn(id, text) {
            return { id: id, text: text };
        };
        return {
            getChildView: getChildView, getText: getText, getBtn: getBtn, getButtonSet: getButtonSet, describeBtn: describeBtn
        };
    };
};
exports.default = Builder;

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

var _reactRedux = __webpack_require__(3);

__webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.onLogFocus = function () {
            console.log('log focus');
            // isFocused = true;
            // sLogBox.flexGrow = '3';
            // sLogBox.backgroundColor = 'red';
            _this.setState({
                logFocus: !_this.state.logFocus
            });
        };

        _this.onInputFocus = function () {
            _this.setState({
                logFocus: false
            });
            console.log('input focus');
        };

        _this.state = {
            logFocus: false
        };
        return _this;
    }

    _createClass(Index, [{
        key: 'renderLog',
        value: function renderLog() {
            return this.props.log.map(function (e) {
                return _react2.default.createElement(
                    'p',
                    null,
                    e.text
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log("rendering log " + this.state.logFocus);
            return _react2.default.createElement(
                'div',
                { style: sLogBox, onClick: function onClick() {
                        _this2.onLogFocus();
                    }, onBlur: function onBlur() {
                        _this2.onInputFocus();
                    },
                    className: this.state.logFocus ? 'flexMax' : 'flexMin' },
                this.renderLog()
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        log: state.log
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Index);


var sLogBox = {
    backgroundColor: 'green',
    border: '4px solid red',
    transition: 'all 2s'
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".flexMin{height:10vh}.flexMax{height:80vh}#root .content{height:100vh}", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Simulation = function (_React$Component) {
    _inherits(Simulation, _React$Component);

    function Simulation(props) {
        _classCallCheck(this, Simulation);

        var _this = _possibleConstructorReturn(this, (Simulation.__proto__ || Object.getPrototypeOf(Simulation)).call(this, props));

        console.log("simulation constructor");
        console.log(props);
        _this.onUpdate = _this.onUpdate.bind(_this);
        return _this;
    }

    _createClass(Simulation, [{
        key: 'onUpdate',
        value: function onUpdate() {
            this.props.sim.update(this.props);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("sim mounting");
            var interval = setInterval(this.onUpdate, 5000);
            this.setState({
                interval: interval
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("sim unmounting");
            clearInterval(this.state.interval);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Simulation;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    // console.log("mapDispatchToProps ");
    // console.log(dispatch);
    return (0, _redux.bindActionCreators)(props.sim.getActions(), dispatch);
};
var mapStateToProps = function mapStateToProps(state, props) {
    var res = props.sim.getMapState(state, props);
    // console.log(`mapStateToProps ${res.mystate.id} ${res.mystate.state}`);
    // console.log(res); 
    return res;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Simulation);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reducer = __webpack_require__(53);

function precise(x) {
    return Number.parseFloat(x).toPrecision(4);
}
function round(x) {
    return Math.round(x * 10) / 10;
}
var sim = {
    update: function update(props) {
        // console.log("simulation update");
        // console.log(props);
        var currentTemp = props.simulation.temp;
        var targetTemp = props.simulation.targetTemp;
        var change = (targetTemp - currentTemp) / 10;
        var time = props.simulation.time;
        props.setTemp(time + 1, round(currentTemp + change));
    },
    getActions: function getActions() {
        return {
            setTemp: _reducer.setTemp
        };
    },
    getMapState: function getMapState(state, props) {
        return {
            simulation: state.simulation
        };
    }
};
exports.default = sim;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    height: 400px;\n    width: 100%;\n'], ['\n    height: 400px;\n    width: 100%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Line = __webpack_require__(7);

var _Line2 = _interopRequireDefault(_Line);

var _adapterParallel = __webpack_require__(31);

var _adapterParallel2 = _interopRequireDefault(_adapterParallel);

var _chartistPluginLegend = __webpack_require__(32);

var _chartistPluginLegend2 = _interopRequireDefault(_chartistPluginLegend);

var _chartistPluginAxistitle = __webpack_require__(33);

var _chartistPluginAxistitle2 = _interopRequireDefault(_chartistPluginAxistitle);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _chartist = __webpack_require__(91);

var _chartist2 = _interopRequireDefault(_chartist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window === 'undefined') {
    global.window = {};
}

var Graph = function (_React$Component) {
    _inherits(Graph, _React$Component);

    function Graph(props) {
        _classCallCheck(this, Graph);

        var _this = _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, props));

        var order = ['s1', 's2'];
        _this.state = {
            order: order,
            options: {
                showPoint: false,
                chartPadding: {
                    top: 10,
                    right: 20,
                    bottom: 170,
                    left: 20
                }

            },
            data: {
                labels: [1, 2, 3, 1, 2, 3],
                series: [[1, 2, 3, 1, 2, 3]]
            },
            adapter: new _adapterParallel2.default(props.data, 'Temperature', 'time', ['temp'])
        };
        return _this;
    }

    _createClass(Graph, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var o2 = Object.assign({
                axisX: {
                    //type: chartist.FixedScaleAxis,
                    // divisor: 4,
                    // high:10,
                    // low:0
                    labelInterpolationFnc: function labelInterpolationFnc(current, index, all) {
                        if (all.length > 0) {
                            console.log("label interp: " + current + ", " + index + " index: " + Math.floor(all.length / 4));
                            console.log(all);
                            if (index % Math.round(all.length / 4) == 0) {
                                return current;
                            }
                        }
                    }
                },
                axisY: {
                    type: _chartist2.default.FixedScaleAxis,
                    divisor: 4
                    // high:100,
                    // low:0
                },
                plugins: [(0, _chartistPluginLegend2.default)({
                    position: 'top',
                    classNames: ['ct-myclass', 'ct-myclass2'],
                    legendNames: [{ name: 'Temperature', series: ['temp'] }]
                }), (0, _chartistPluginAxistitle2.default)({
                    axisX: {
                        axisTitle: 'Time (mins)',
                        axisClass: 'ct-axis-title',
                        offset: { x: 0, y: 40 },
                        textAnchor: 'middle'
                    },
                    axisY: {
                        axisTitle: 'Temperature (celsius)',
                        axisClass: 'ct-axis-title',
                        offset: { x: 0, y: -10 },
                        flipTitle: false
                    }
                })]
            }, this.state.options);
            this.setState({
                options: o2
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log("temp data");
            console.log(this.props.data);
            this.state.adapter.updateData(this.props.data);
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("rendering temp graph");
            return _react2.default.createElement(
                Container,
                null,
                _react2.default.createElement(_Line2.default, { data: this.state.adapter.getSeries(), options: this.state.options })
            );
        }
    }]);

    return Graph;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        data: state.simulation.tempData
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Graph);


var Container = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("chartist");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(2);

var _reducers = __webpack_require__(26);

var _reducers2 = __webpack_require__(52);

var _log = __webpack_require__(51);

var _reducer = __webpack_require__(53);

//import reduceReducers from 'reduce-reducers';
//import simulation from './../simulation/reducers.js';
// import {reducer as index} from './../story/Reducers.js';
// import {reducer as start} from './../story/start/index.js';
var reducers = (0, _redux.combineReducers)({
    simulation: _reducer.reducer,
    zones: _reducers.reducer,
    questions: _reducers2.reducer,
    log: _log.reducer
});

exports.default = reducers;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DynamicComponent": 15,
	"./DynamicComponent.jsx": 15,
	"./Trends": 11,
	"./Trends.jsx": 11,
	"./UI/IFrame": 16,
	"./UI/IFrame.jsx": 16,
	"./UI/animations/FadeIn": 17,
	"./UI/animations/FadeIn.jsx": 17,
	"./UI/animations/styles.css": 34,
	"./UI/elements/Bg": 14,
	"./UI/elements/Bg.jsx": 14,
	"./UI/elements/IconButton": 9,
	"./UI/elements/IconButton.jsx": 9,
	"./UI/elements/icons.css": 46,
	"./UI/graphs/Line": 7,
	"./UI/graphs/Line.jsx": 7,
	"./UI/graphs/animations": 12,
	"./UI/graphs/animations.js": 12,
	"./UI/graphs/main.css": 30,
	"./UI/graphs/styles": 13,
	"./UI/graphs/styles.js": 13,
	"./UI/math/Katex": 25,
	"./UI/math/Katex.jsx": 25,
	"./UI/math/katex.css": 48,
	"./apis/Analytics": 18,
	"./apis/Analytics.jsx": 18,
	"./apis/Gapi": 19,
	"./apis/Gapi.jsx": 19,
	"./constants": 8,
	"./constants.js": 8,
	"./game/Game": 20,
	"./game/Game.jsx": 20,
	"./game/GameMenu": 21,
	"./game/GameMenu.jsx": 21,
	"./game/Index": 22,
	"./game/Index.jsx": 22,
	"./game/Wrapper": 23,
	"./game/Wrapper.jsx": 23,
	"./game/views/Choice": 27,
	"./game/views/Choice.jsx": 27,
	"./layout/MainMenu": 5,
	"./layout/MainMenu.jsx": 5,
	"./layout/menu.css": 29
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
webpackContext.id = 93;
module.exports = webpackContext;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(56);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(96);

var _index4 = _interopRequireDefault(_index3);

var _reducers = __webpack_require__(99);

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
/* 95 */
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Story2 = __webpack_require__(57);

var _Story3 = _interopRequireDefault(_Story2);

var _index = __webpack_require__(98);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(2);

var _store = __webpack_require__(61);

var _store2 = __webpack_require__(35);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Text = __webpack_require__(58);

var _Text2 = _interopRequireDefault(_Text);

var _Button = __webpack_require__(59);

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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Story2 = __webpack_require__(57);

var _Story3 = _interopRequireDefault(_Story2);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(2);

var _store = __webpack_require__(60);

var _store2 = __webpack_require__(35);

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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _index = __webpack_require__(56);

var _store = __webpack_require__(61);

var _store2 = __webpack_require__(60);

var _store3 = __webpack_require__(35);

//import simulation from './../simulation/reducers.js';
var reducer = (0, _redux.combineReducers)({
  simulation: _index.reducer,
  start: _store.reducer,
  rooms: _store2.reducer,
  component: _store3.reducer
});

exports.default = reducer;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _reduxLogger = __webpack_require__(54);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(101);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _counter = __webpack_require__(102);

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  counter: _counter2.default
});

exports.default = reducer;

/***/ }),
/* 102 */
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "body{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}a{text-decoration:none;color:#108db8;font-weight:700}img{max-width:100%}", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.c305c395.js.map