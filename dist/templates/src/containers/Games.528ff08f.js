webpackJsonp([4],{150:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(0),c=r(u),f=t(41),s=t(136),p=(r(s),t(995)),d=r(p),h=t(372),b=r(h),m=function(e){function n(e){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return a(n,e),l(n,[{key:"render",value:function(){return c.default.createElement(b.default,{height:"100%"},c.default.createElement("div",null,this.props.games.map(function(e){return c.default.createElement(d.default,{game:e})})))}}]),n}(c.default.Component);n.default=(0,f.withSiteData)((0,f.withRouteData)(m))},368:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={p:"#101856",pDark:"#040615",pLight:"#2b39d4",s:"#C6FF00",sDark:"#8cb300",sLight:"#e9ff99",a1Light:"#69F0AE",a1Dark:"#10a25c",a2Light:"#FFEB3B",a2Dark:"#F9A825",transparent:"transparent",text:"white",accent:"#cc00cc",accentHighlight:"#ffccff",accentShadow:"#660066",shadow:"#f2f2f2",menu:"white",series0:"#cc66ff",series1:"#99ccff",series2:"#99ffcc",series3:"#ffffcc",series4:"#ffcce6"};n.default=r},372:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=o(["\n    position:fixed;\n    top: 0;\n    left:0;\n    bottom:0;\n    right:0;\n    width: 100vw;\n    height: 100vh;\n    width: ",";\n    margin: ","\n    z-index: ",";\n    overflow: ","\n    background-color: ","\n"],["\n    position:fixed;\n    top: 0;\n    left:0;\n    bottom:0;\n    right:0;\n    width: 100vw;\n    height: 100vh;\n    width: ",";\n    margin: ","\n    z-index: ",";\n    overflow: ","\n    background-color: ","\n"]),f=o(["\n    position: relative;\n    width: ",";\n    margin: ",";\n    height: ",";\n    background-color: ","\n"],["\n    position: relative;\n    width: ",";\n    margin: ",";\n    height: ",";\n    background-color: ","\n"]),s=t(0),p=r(s),d=t(40),h=r(d),b=t(368),m=(r(b),function(e){function n(e){i(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return console.log("Container UI constructor props",e),t}return l(n,e),u(n,[{key:"render",value:function(){return this.props.fill?p.default.createElement(g,{z:this.props.z,color:this.props.color,width:this.props.width,height:this.props.height,margin:this.props.margin,overflow:this.props.overflow},this.props.children):p.default.createElement(y,{z:this.props.z,height:this.props.height,color:this.props.color,width:this.props.width,margin:this.props.margin,overflow:this.props.overflow},this.props.children)}}]),n}(p.default.Component));n.default=m;var g=h.default.div(c,function(e){return e.width?e.width:"inherit"},function(e){return e.margin?e.margin:"0 0 0 0"},function(e){return e.z?e.z:1},function(e){return e.overflow?e.overflow:"scroll-y"},function(e){return e.color?e.color:e.theme[e.theme.theme].neutral}),y=h.default.div(f,function(e){return e.width?e.width:"100%"},function(e){return e.margin?e.margin:"0 0 0 0"},function(e){return e.height?e.height:"100vh"},function(e){return e.color?e.color:e.theme[e.theme.theme].neutral})},506:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=o(["\n    display: inline-block;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    h3, p{\n        margin: 3px;\n    }\n"],["\n    display: inline-block;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    h3, p{\n        margin: 3px;\n    }\n"]),f=o(["\n    margin: 0px;\n    padding: 0px;\n    .open{\n        max-height: 400px;\n        opacity: 1;\n        padding: 10px;\n        margin: 0px;\n        transition: all 1s ease;\n    }\n    .closed{\n        max-height: 0;\n        overflow: hidden;\n        opacity: 0;\n        padding: 0px 10px 0px 10px;\n        margin: 0px;\n        transition: all 1s ease;\n    }\n\n"],["\n    margin: 0px;\n    padding: 0px;\n    .open{\n        max-height: 400px;\n        opacity: 1;\n        padding: 10px;\n        margin: 0px;\n        transition: all 1s ease;\n    }\n    .closed{\n        max-height: 0;\n        overflow: hidden;\n        opacity: 0;\n        padding: 0px 10px 0px 10px;\n        margin: 0px;\n        transition: all 1s ease;\n    }\n\n"]),s=o(["\n    padding: 0;\n    margin: 0;\n    transition: transform "," ease;\n    display: 'inline-block'; \n"],["\n    padding: 0;\n    margin: 0;\n    transition: transform "," ease;\n    display: 'inline-block'; \n"]),p=o(["\n    border-radius: 50px;\n    background-color: ",";\n    padding: 10px;\n    margin: auto;\n"],["\n    border-radius: 50px;\n    background-color: ",";\n    padding: 10px;\n    margin: auto;\n"]),d=o(["\n    align-items: baseline;  \n    display: flex;\n"],["\n    align-items: baseline;  \n    display: flex;\n"]),h=o(["\n    display: inline-block;\n    flex: 1;\n"],["\n    display: inline-block;\n    flex: 1;\n"]),b=o(["\n    align-self: center  \n"],["\n    align-self: center  \n"]),m=t(0),g=r(m),y=t(40),v=r(y),w=t(139),O=r(w),_=t(143),x=(r(_),t(74)),k=t(507),j=(r(k),function(e){function n(e){i(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return console.log("Accordion constructor",e),t.handleClick=t.handleClick.bind(t),t.state={open:!1,iOpen:"open",iSelect:"select"},t}return l(n,e),u(n,[{key:"handleClick",value:function(e){console.log("handleClick type ",e),e==this.state.iOpen?(this.setState({open:!this.state.open}),this.props.gapi.gapiReady&&this.props.event):this.state.iSelect}},{key:"renderOpenButton",value:function(){var e=this;return this.state.open?g.default.createElement(z,{style:{display:"inline-block",transform:"rotate(180deg)"}},g.default.createElement(O.default,{icon:"up",onInput:function(){e.handleClick(e.state.iOpen)}})):g.default.createElement(z,{style:{display:"inline-block",transform:"rotate(0deg)"}},g.default.createElement(O.default,{icon:"up",onInput:function(){e.handleClick(e.state.iOpen)}}))}},{key:"renderFoldOut",value:function(){return this.state.open?g.default.createElement(C,null,g.default.createElement("p",{className:"open"},this.props.children)):g.default.createElement(C,null,g.default.createElement("p",{className:"closed"},this.props.children))}},{key:"render",value:function(){return g.default.createElement("div",{style:{width:"100%",padding:"10px",overflow:"hidden"}},g.default.createElement(M,null,g.default.createElement(T,null,g.default.createElement(F,null,this.renderOpenButton()),g.default.createElement(F,null,g.default.createElement(P,null,g.default.createElement("h3",null,this.props.title),g.default.createElement("p",null,this.props.subtitle))),g.default.createElement(S,null),g.default.createElement(F,null,this.props.callToAction())),this.renderFoldOut()))}}]),n}(g.default.Component)),E=function(e){return{gapi:e.gapi}};n.default=(0,x.connect)(E)(j);var P=v.default.ul(c),C=v.default.div(f),z=v.default.div(s,function(e){return e.theme[e.theme.theme].animM}),M=v.default.div(p,function(e){return console.log("accordion props theme "+e.theme.theme+" main = "+e.theme[e.theme.theme].main,e.theme),e.theme[e.theme.theme].main}),T=v.default.div(d),S=v.default.span(h),F=v.default.span(b)},507:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    padding: 10px;\n    color: white;\n    background-color: ",";\n    border-radius: 5px;\n    outline: 0;\n    border: 0;\n    text-decoration: none;\n    display: inline-block;\n    transition: all 0.3s ease;\n    a{\n        color: white !important;\n    }\n    &:hover{\n        background-color: ",";\n    }\n"],["\n    padding: 10px;\n    color: white;\n    background-color: ",";\n    border-radius: 5px;\n    outline: 0;\n    border: 0;\n    text-decoration: none;\n    display: inline-block;\n    transition: all 0.3s ease;\n    a{\n        color: white !important;\n    }\n    &:hover{\n        background-color: ",";\n    }\n"]),c=t(0),f=r(c),s=t(40),p=r(s),d=function(e){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleInput=t.handleInput.bind(t),t}return a(n,e),l(n,[{key:"handleInput",value:function(){console.log("button clicked")}},{key:"render",value:function(){return f.default.createElement(h,{onClick:this.handleInput},this.props.children)}}]),n}(f.default.Component);n.default=d;var h=p.default.button(u,function(e){return e.theme[e.theme.theme].accent},function(e){return e.theme[e.theme.theme].accentD})},995:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(0),c=r(u),f=t(41),s=t(506),p=r(s),d=t(139),h=r(d),b=function(e){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e)),r=t.props.game.tags.map(function(e,n){return n<=0?""+e:", "+e});return t.state={subtitle:r},t}return a(n,e),l(n,[{key:"render",value:function(){var e=this;return c.default.createElement(p.default,{key:this.props.game.id,event:{category:"GamesPage",label:this.props.game.id},title:this.props.game.title,subtitle:this.state.subtitle,callToAction:function(){return c.default.createElement(f.Link,{key:e.props.game.id,to:"/games/"+e.props.game.id},c.default.createElement(h.default,{icon:"play"}))}},this.props.game.desc)}}]),n}(c.default.Component);n.default=b}});