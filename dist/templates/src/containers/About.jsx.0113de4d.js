webpackJsonp([5],{167:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a="D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\About.jsx",u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    height: 100%;\n    width: 100%;\n    padding-bottom: 100px;\n    background-color ",";\n    overflow-y: scroll;\n"],["\n    height: 100%;\n    width: 100%;\n    padding-bottom: 100px;\n    background-color ",";\n    overflow-y: scroll;\n"]),c=r(0),p=n(c),f=(r(79),r(43)),h=r(528),d=(n(h),r(470)),m=n(d),y=r(32),b=n(y),_=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),s(t,[{key:"render",value:function(){return p.default.createElement(g,{__source:{fileName:a,lineNumber:19}},p.default.createElement(m.default,{tag:"h1",colorKey:"textInverted",text:"This is what we're all about.",__source:{fileName:a,lineNumber:21}}),p.default.createElement(m.default,{tag:"p",colorKey:"textInverted",text:"React, static sites, performance, speed. It's the stuff that makes us tick.",__source:{fileName:a,lineNumber:22}}))}}]),t}(p.default.Component);_.displayName="mAbout",t.default=(0,f.withSiteData)(_);var g=b.default.div(u,function(e){return e.theme[e.theme.theme].neutral})},470:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Text.jsx",a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    display: ",";\n    margin: auto;\n    height: ",";\n    width: ",";\n    text-align: ",";\n    h1, h2, h3, h4, h5, h6, p{\n        display: ",";\n        text-align: ",";\n        color: ",";\n        font-size: ",";\n    }\n"],["\n    display: ",";\n    margin: auto;\n    height: ",";\n    width: ",";\n    text-align: ",";\n    h1, h2, h3, h4, h5, h6, p{\n        display: ",";\n        text-align: ",";\n        color: ",";\n        font-size: ",";\n    }\n"]),c=r(0),p=n(c),f=r(32),h=n(f),d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),a(t,[{key:"render",value:function(){switch(this.props.tag){case"h1":return p.default.createElement(m,{align:this.props.align,size:this.props.size,display:this.props.display,color:this.props.color,colorKey:this.props.colorKey,__source:{fileName:s,lineNumber:8}},p.default.createElement("h1",{__source:{fileName:s,lineNumber:8}},this.props.text));case"h2":return p.default.createElement(m,{align:this.props.align,size:this.props.size,display:this.props.display,color:this.props.color,colorKey:this.props.colorKey,__source:{fileName:s,lineNumber:10}},p.default.createElement("h2",{__source:{fileName:s,lineNumber:10}},this.props.text));case"h3":return p.default.createElement(m,{align:this.props.align,size:this.props.size,display:this.props.display,color:this.props.color,colorKey:this.props.colorKey,__source:{fileName:s,lineNumber:12}},p.default.createElement("h3",{__source:{fileName:s,lineNumber:12}},this.props.text));case"h4":return p.default.createElement(m,{align:this.props.align,size:this.props.size,display:this.props.display,color:this.props.color,colorKey:this.props.colorKey,__source:{fileName:s,lineNumber:14}},p.default.createElement("h4",{__source:{fileName:s,lineNumber:14}},this.props.text));case"h5":return p.default.createElement(m,{align:this.props.align,size:this.props.size,display:this.props.display,color:this.props.color,colorKey:this.props.colorKey,__source:{fileName:s,lineNumber:16}},p.default.createElement("h5",{__source:{fileName:s,lineNumber:16}},this.props.text));case"h6":return p.default.createElement(m,{align:this.props.align,size:this.props.size,display:this.props.display,color:this.props.color,colorKey:this.props.colorKey,__source:{fileName:s,lineNumber:18}},p.default.createElement("h6",{__source:{fileName:s,lineNumber:18}},this.props.text));default:return p.default.createElement(m,{align:this.props.align,size:this.props.size,display:this.props.display,color:this.props.color,colorKey:this.props.colorKey,__source:{fileName:s,lineNumber:20}},p.default.createElement("p",{__source:{fileName:s,lineNumber:20}},this.props.text))}}}]),t}(p.default.Component);t.default=d;var m=h.default.span(u,function(e){return e.display?e.display:"inline-block"},function(e){return e.height?e.height:"auto"},function(e){return e.width?e.width:"100%"},function(e){return e.align?e.align:"center"},function(e){return e.display?e.display:"inline-block"},function(e){return e.align?e.align:"center"},function(e){return e.color?e.color:e.colorKey?e.theme[e.theme.theme][e.colorKey]:e.theme[e.theme.theme].text},function(e){return e.size?e.size:"1em"})},528:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Table.jsx",u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=o(["\n    display: table;\n    width: 100%;\n    height: 100%;\n"],["\n    display: table;\n    width: 100%;\n    height: 100%;\n"]),p=o(["\n    display: table-row;\n"],["\n    display: table-row;\n"]),f=r(0),h=n(f),d=r(32),m=n(d),y=r(1),b=n(y),_=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),u(t,[{key:"renderRows",value:function(){var e=this;return h.default.Children.map(this.props.children,function(t,r){var n=e.props.heights[r];return console.log("table wrapping child of height "+n,t),e.props.heights[r]?h.default.createElement(w,{style:{height:e.props.heights[r]},__source:{fileName:a,lineNumber:20}},h.default.cloneElement(t)):h.default.createElement(w,{__source:{fileName:a,lineNumber:22}},h.default.cloneElement(t))})}},{key:"render",value:function(){return h.default.createElement(g,{__source:{fileName:a,lineNumber:28}},this.renderRows())}}]),t}(h.default.Component);t.default=_,_.displayName="TableComponent",_.PropTypes={heights:b.default.array};var g=m.default.div(c),w=m.default.div(p)}});