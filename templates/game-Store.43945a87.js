webpackJsonp([19],{246:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=r(c),l=n(34),p=n(14),s=n(71),d=r(s);"undefined"==typeof window&&(e.window={});var b=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.store=(0,p.createStore)(e.reducers,{},(0,p.applyMiddleware)(d.default)),n}return i(t,e),a(t,[{key:"render",value:function(){return f.default.createElement(l.Provider,{store:this.store},this.props.children)}}]),t}(f.default.Component);t.default=b}).call(t,n(4))}});