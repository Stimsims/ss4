webpackJsonp([6],{148:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Privacy.jsx",c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=r(l),f=n(126),p=r(f),d=n(345),h=r(d),b=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"hello",__source:{fileName:u,lineNumber:8}},s.default.createElement(h.default,{id:"privacy",__source:{fileName:u,lineNumber:9}},s.default.createElement(p.default,{tag:"p",text:"Privacy",display:"block",colorKey:"textInverted",__source:{fileName:u,lineNumber:10}}),s.default.createElement(p.default,{tag:"p",text:"A statement about Privacy",align:"left",display:"block",colorKey:"textInverted",__source:{fileName:u,lineNumber:11}})))}}]),t}(s.default.Component);b.displayName="Privacy",t.default=b},345:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: 10px 0px;\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"],["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: 10px 0px;\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"]),l=n(0),s=r(l),f=n(4),p=r(f),d=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return s.default.createElement(h,{width:this.props.width,padding:this.props.padding,index:this.props.index,__source:{fileName:"D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\TextBox.jsx",lineNumber:11}},this.props.children)}}]),t}(s.default.Component);t.default=d;var h=p.default.div(c,function(e){var t=e.index%e.theme[e.theme.theme].bgCount;switch(console.log("bg color index "+e.index+" count "+e.theme[e.theme.theme].bgCount+" i "+t),t){case 1:return e.theme[e.theme.theme].bg2;case 2:return e.theme[e.theme.theme].bg3;case 3:return e.theme[e.theme.theme].bg4;case 4:return e.theme[e.theme.theme].bg5;case 5:return e.theme[e.theme.theme].bg6;case 0:default:return e.theme[e.theme.theme].bg1}},function(e){return e.width?e.width:"100%"},function(e){return e.padding?e.padding:"10px"},function(e){return e.theme[e.theme.theme].mediaMinWidth},function(e){return e.padding?e.padding:"10px 20px"})}});