webpackJsonp([2],{143:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l="/home/pagevii/Documents/code/web/github/ss4/src/containers/Post.jsx",c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=i(["\n    visibility: hidden;\n    height: 0; width: 0;\n"],["\n    visibility: hidden;\n    height: 0; width: 0;\n"]),p=i(["\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding:0;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"],["\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding:0;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"]),d=i(["\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ",";\n    @media only screen and (min-width: ",") {\n        padding: 10px;\n    }\n\n"],["\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ",";\n    @media only screen and (min-width: ",") {\n        padding: 10px;\n    }\n\n"]),f=i(["\n    margin:auto;\n    width: 100%;\n    text-align: center;\n"],["\n    margin:auto;\n    width: 100%;\n    text-align: center;\n"]),h=n(0),m=r(h),b=n(24),g=n(64),y=n(133),_=r(y),w=n(4),v=r(w),x=n(437),N=r(x),O=n(66),j=(r(O),n(626)),E=r(j),P=n(349),k=r(P),T=n(439),M=(r(T),n(128)),W=r(M),D=n(73),C=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={counter:0,url:e.siteRoot+e.history.location.pathname},n}return u(t,e),c(t,[{key:"renderShare",value:function(){console.log("post page rendering gapi share post ",this.props)}},{key:"renderText",value:function(){return this.props.item.content.map(function(e){return m.default.createElement(k.default,{__source:{fileName:l,lineNumber:49}},m.default.createElement(W.default,{tag:"p",text:e,align:"center",width:"100%",__source:{fileName:l,lineNumber:50}}))})}},{key:"renderGoogleShare",value:function(){return this.props.gapiReady?m.default.createElement("p",{__source:{fileName:l,lineNumber:56}},"gapi?"):m.default.createElement("p",{__source:{fileName:l,lineNumber:58}},"no gapi")}},{key:"renderVideo",value:function(){return this.props.item.youtube?m.default.createElement("div",{style:{height:"200px"},itemprop:"video",__source:{fileName:l,lineNumber:63}},m.default.createElement(E.default,{url:this.props.item.youtube,__source:{fileName:l,lineNumber:64}})):null}},{key:"render",value:function(){var e=this;return m.default.createElement(H,{itemscope:!0,itemtype:"https://schema.org/Article",__source:{fileName:l,lineNumber:73}},m.default.createElement(D.Helmet,{__source:{fileName:l,lineNumber:74}},m.default.createElement("meta",{property:"og:title",content:""+this.props.item.title,__source:{fileName:l,lineNumber:75}}),m.default.createElement("meta",{property:"og:description",content:""+this.props.item.description,__source:{fileName:l,lineNumber:76}}),m.default.createElement("meta",{property:"og:site_name",content:""+this.props.siteTitle,__source:{fileName:l,lineNumber:77}}),m.default.createElement("meta",{property:"og:type",content:"http://ogp.me/ns/article#",__source:{fileName:l,lineNumber:78}}),this.props.item.youtube?m.default.createElement("meta",{property:"og:video",content:""+this.props.item.youtube,__source:{fileName:l,lineNumber:79}}):null,this.props.item.tags?m.default.createElement("meta",{property:"og:article:tag",content:""+this.props.item.tags.join(),__source:{fileName:l,lineNumber:80}}):null),m.default.createElement("span",{itemprop:"name",__source:{fileName:l,lineNumber:82}},m.default.createElement(W.default,{tag:"h1",itemprop:"name",text:this.props.item.title,align:"center",colorKey:"accent",width:"100%",__source:{fileName:l,lineNumber:83}})),m.default.createElement("h2",{__source:{fileName:l,lineNumber:85}},"Laotip"),m.default.createElement(N.default,{tags:this.props.item.tags,__source:{fileName:l,lineNumber:86}}),this.props.item.tags?m.default.createElement(z,{itemprop:"keywords",__source:{fileName:l,lineNumber:87}},this.props.item.tags.join()):null,m.default.createElement(R,{__source:{fileName:l,lineNumber:89}},m.default.createElement(k.default,{style:{flex:"1"},margin:"5px 0px",__source:{fileName:l,lineNumber:90}},m.default.createElement("span",{itemprop:"description",__source:{fileName:l,lineNumber:91}},m.default.createElement(W.default,{tag:"p",text:this.props.item.description,align:"center",width:"100%",__source:{fileName:l,lineNumber:92}}))),m.default.createElement("div",{style:{width:"10px",height:"10px"},__source:{fileName:l,lineNumber:95}}),m.default.createElement("div",{__source:{fileName:l,lineNumber:96}},this.renderVideo())),m.default.createElement("span",{itemprop:"articleBody",__source:{fileName:l,lineNumber:103}},this.renderText()),m.default.createElement(L,{id:"shareable",__source:{fileName:l,lineNumber:108}},m.default.createElement(_.default,{icon:"gp",round:!0,padding:"3px",color:"red",onInput:function(){window.open("https://plus.google.com/share?url="+e.state.url,"pop","width=600, height=400, scrollbars=no")},__source:{fileName:l,lineNumber:109}}),m.default.createElement(_.default,{icon:"fb",round:!0,padding:"3px",color:"blue",onInput:function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+e.state.url,"pop","width=600, height=400, scrollbars=no")},__source:{fileName:l,lineNumber:112}})))}}]),t}(m.default.Component);C.displayName="Post";var S=function(e){return console.log("post mapStateToProps ",e),{gapiReady:e.gapi.gapiReady}};t.default=(0,g.connect)(S)((0,b.withSiteData)((0,b.withRouteData)(C)));var z=v.default.p(s),R=v.default.div(p,function(e){return e.theme[e.theme.theme].mediaMinWidth}),H=v.default.div(d,function(e){return e.theme[e.theme.theme].neutral},function(e){return e.theme[e.theme.theme].mediaMinWidth}),L=v.default.div(f)},349:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: ",";\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"],["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: ",";\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"]),c=n(0),s=r(c),p=n(4),d=r(p),f=function(e){function t(e){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return s.default.createElement(h,{width:this.props.width,padding:this.props.padding,margin:this.props.margin,index:this.props.index,__source:{fileName:"/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/TextBox.jsx",lineNumber:11}},this.props.children)}}]),t}(s.default.Component);t.default=f;var h=d.default.div(l,function(e){var t=e.index%e.theme[e.theme.theme].bgCount;switch(console.log("bg color index "+e.index+" count "+e.theme[e.theme.theme].bgCount+" i "+t),t){case 1:return e.theme[e.theme.theme].bg2;case 2:return e.theme[e.theme.theme].bg3;case 3:return e.theme[e.theme.theme].bg4;case 4:return e.theme[e.theme.theme].bg5;case 5:return e.theme[e.theme.theme].bg6;case 0:default:return e.theme[e.theme.theme].bg1}},function(e){return e.width?e.width:"100%"},function(e){return e.margin?e.margin:"10px 0px"},function(e){return e.padding?e.padding:"10px"},function(e){return e.theme[e.theme.theme].mediaMinWidth},function(e){return e.padding?e.padding:"10px 20px"})},437:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l="/home/pagevii/Documents/code/web/github/ss4/src/components/layout/Tags.jsx",c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=i(["\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n"],["\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n"]),p=i(["\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n"],["\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n"]),d=n(0),f=r(d),h=n(4),m=r(h),b=n(24),g=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this;return this.props.tags?f.default.createElement(_,{__source:{fileName:l,lineNumber:10}},this.props.tags.map(function(t){return e.props.tag&&t===e.props.tag?f.default.createElement(y,{__source:{fileName:l,lineNumber:14}},f.default.createElement(b.Link,{to:"/"+t,className:"active",__source:{fileName:l,lineNumber:14}},t)):f.default.createElement(y,{__source:{fileName:l,lineNumber:16}},f.default.createElement(b.Link,{to:"/"+t,__source:{fileName:l,lineNumber:16}},t))})):null}}]),t}(f.default.Component);t.default=g;var y=m.default.h4(s),_=m.default.div(p)},439:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={width:0,height:0,scale:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(n),n}return o(t,e),a(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight,scale:window.innerWidth<400?1:1.5})}},{key:"render",value:function(){var e=this;return l.default.Children.map(this.props.children,function(t,n){return l.default.cloneElement(t,{width:e.state.width,height:e.state.height,scale:e.state.scale})})}}]),t}(l.default.Component);t.default=c},626:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l="/home/pagevii/Documents/code/web/github/ss4/src/components/UI/elements/Video.jsx",c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=i(["\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ","; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"],["\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ","; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"]),d=i(["\n    margin: auto;\n    height: ",";\n    width: ",";\n"],["\n    margin: auto;\n    height: ",";\n    width: ",";\n"]),f=i(["\n    margin: auto;\n    width: 100%;\n    flex: 1;\n"],["\n    margin: auto;\n    width: 100%;\n    flex: 1;\n"]),h=i(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n"],["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n"]),m=i(["\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n"],["\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n"]),b=n(0),g=r(b),y=n(1),_=r(y),w=n(4),v=r(w),x=n(128),N=r(x),O=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.scale?e.scale:1;return n.state=c({},n.getHeights(r)),console.log("Youtube view",e),console.log("youtube view props dimen: "+e.vWidth+", "+e.vHeight+" scale "+r+" \n                    state "+n.state.width+", "+n.state.height),n}return u(t,e),s(t,[{key:"getHeights",value:function(e){return{scale:e,position:this.props.position?this.props.position:"right",width:this.props.vWidth?this.props.vWidth*e+"px":336*e+"px",height:this.props.vHeight?this.props.vHeight*e+"px":189*e+"px"}}},{key:"componentDidUpdate",value:function(e,t){e.scale!==this.props.scale&&(console.log("componentDidupdate updating scale to "+this.props.scale),this.setState(this.getHeights(this.props.scale)))}},{key:"renderText",value:function(e,t){if(e&&t)return g.default.createElement(P,{__source:{fileName:l,lineNumber:39}},g.default.createElement(N.default,{tag:"p",text:e,__source:{fileName:l,lineNumber:40}}))}},{key:"render",value:function(){return g.default.createElement(j,{width:this.props.width,__source:{fileName:l,lineNumber:48}},this.renderText(this.props.text,"left"===this.state.position),g.default.createElement(E,{height:this.state.height,__source:{fileName:l,lineNumber:50}},g.default.createElement("iframe",{width:""+this.state.width,height:""+this.state.height,src:""+this.props.url,frameborder:"0",allow:"autoplay; encrypted-media",encryptedMedia:!0,allowfullscreen:!0,__source:{fileName:l,lineNumber:51}})),this.renderText(this.props.text,"right"===this.state.position))}}]),t}(g.default.PureComponent);t.default=O,O.propTypes={url:_.default.string};var j=v.default.div(p,function(e){return e.width},function(e){return e.theme[e.theme.theme].mediaMinWidth}),E=v.default.div(d,function(e){return e.height},function(e){return e.width}),P=v.default.div(f);v.default.div(h),v.default.div(m)}});