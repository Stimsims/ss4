webpackJsonp([6],{168:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s="D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\404.jsx",c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),p=n(u),l=o(43),f=o(79),h=o(85),d=n(h),y=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log("Lost 404 constructor",e),o.sendError=o.sendError.bind(o),o.state={errorSent:!1},o}return i(t,e),c(t,[{key:"componentDidMount",value:function(){this.sendError()}},{key:"componentDidUpdate",value:function(){this.sendError()}},{key:"sendError",value:function(){if(console.log("lost, componentDidUpdate, gapi? "+this.props.gapi.gapiReady+" state: ",this.state+" anim: "+this.props.animationState+" url "+this.props.history.location.pathname),!this.state.errorSent&&this.props.gapi.gapiReady&&1===this.props.animationState)try{throw console.log("sending 404 error"),new Error("404 page not found, "+this.props.history.location.pathname)}catch(e){console.log("404 page not found catch "+this.props.history.location.pathname,e),(0,d.default)(e)}}},{key:"render",value:function(){return p.default.createElement("div",{__source:{fileName:s,lineNumber:59}},p.default.createElement("p",{__source:{fileName:s,lineNumber:60}},"That page doesn't exist. The error has been logged."),p.default.createElement(l.Link,{to:"/",__source:{fileName:s,lineNumber:61}},"Go to Home page"))}}]),t}(p.default.Component),m=function(e){return{gapi:e.gapi}};y.displayName="404page";var b=(0,f.connect)(m)(y);t.default=(0,l.withRouteData)(b)}});