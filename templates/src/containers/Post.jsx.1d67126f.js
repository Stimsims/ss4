webpackJsonp([2],{143:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Post.jsx",c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=r(["\n    visibility: none;\n"],["\n    visibility: none;\n"]),p=r(["\n.fb-share {\n    vertical-align: top;\n    display: inline-block;\n    position: relative;\n    height: 18px;\n    border: 1px solid #cad4e7;\n    border-radius: 3px;\n    background-color: #45619dff;\n    color: #3b5998;\n\n    text-decoration: none;\n    white-space: nowrap;\n    /* IE7 */\n    *display: inline;\n    *zoom: 1;\n  }\n  .fb-share:hover {\n    border-color: #9dacce;\n  }\n  .fb-share .fb-share-icon {\n    position: relative;\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    top: 4px;\n    margin-right: 1px;\n    background-image: url(",");\n    /* IE7 */\n    *display: inline;\n    *zoom: 1;\n  }\n  .fb-share .fb-share-text {\n    line-height: 18px;\n    height: 18px;\n    color: white;\n    top: -4px;\n    font-family: 'Lucida Grande', Tahoma, Verdana, Arial, sans-serif;\n    font-size: 11px;\n  }\n"],["\n.fb-share {\n    vertical-align: top;\n    display: inline-block;\n    position: relative;\n    height: 18px;\n    border: 1px solid #cad4e7;\n    border-radius: 3px;\n    background-color: #45619dff;\n    color: #3b5998;\n\n    text-decoration: none;\n    white-space: nowrap;\n    /* IE7 */\n    *display: inline;\n    *zoom: 1;\n  }\n  .fb-share:hover {\n    border-color: #9dacce;\n  }\n  .fb-share .fb-share-icon {\n    position: relative;\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    top: 4px;\n    margin-right: 1px;\n    background-image: url(",");\n    /* IE7 */\n    *display: inline;\n    *zoom: 1;\n  }\n  .fb-share .fb-share-text {\n    line-height: 18px;\n    height: 18px;\n    color: white;\n    top: -4px;\n    font-family: 'Lucida Grande', Tahoma, Verdana, Arial, sans-serif;\n    font-size: 11px;\n  }\n"]),d=r(["\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ",";\n    @media only screen and (min-width: ",") {\n        padding: 10px;\n    }\n\n"],["\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ",";\n    @media only screen and (min-width: ",") {\n        padding: 10px;\n    }\n\n"]),f=r(["\n    height: 100%;\n    width: 100%;\n    vertical-align: middle;\n    margin: auto;\n    background-color: pink;\n    text-align: center;\n"],["\n    height: 100%;\n    width: 100%;\n    vertical-align: middle;\n    margin: auto;\n    background-color: pink;\n    text-align: center;\n"]),h=r(["\n    margin:auto;\n    width: 100%;\n    text-align: center;\n"],["\n    margin:auto;\n    width: 100%;\n    text-align: center;\n"]),m=r(["\n    text-transformation: capitalize;\n    text-align: center;\n"],["\n    text-transformation: capitalize;\n    text-align: center;\n"]),g=n(0),b=i(g),y=n(24),w=n(64),v=n(133),_=i(v),x=n(4),O=i(x),N=n(441),j=i(N),A=n(67),k=i(A),E=n(668),P=i(E),D=n(349),T=(i(D),n(443)),C=(i(T),n(129)),R=i(C),S=n(669),M=i(S),z=n(73),W=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return(0,k.default)("log","Post constructor",e),n.state={counter:0,url:e.siteRoot+e.history.location.pathname},console.log("post url "+n.state.url+" root "+e.siteRoot,e),n}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.gapiReady}},{key:"componentDidUpdate",value:function(e){this.props.gapiReady&&e.gapiReady}},{key:"renderShare",value:function(){console.log("post page rendering gapi share post ",this.props),gapi.plusone.go()}},{key:"renderText",value:function(){return this.props.item.content.map(function(e){return b.default.createElement(R.default,{tag:"p",text:e,align:"center",width:"100%",__source:{fileName:u,lineNumber:67}})})}},{key:"renderGoogleShare",value:function(){return this.props.gapiReady?b.default.createElement("p",{__source:{fileName:u,lineNumber:72}},"gapi?"):b.default.createElement("p",{__source:{fileName:u,lineNumber:74}},"no gapi")}},{key:"render",value:function(){var e=this;return b.default.createElement(U,{itemscope:!0,itemtype:"https://schema.org/Article",__source:{fileName:u,lineNumber:79}},b.default.createElement(z.Helmet,{__source:{fileName:u,lineNumber:80}},b.default.createElement("meta",{property:"og:title",content:""+this.props.item.title,__source:{fileName:u,lineNumber:81}}),b.default.createElement("meta",{property:"og:description",content:""+this.props.item.description,__source:{fileName:u,lineNumber:82}})),b.default.createElement(R.default,{tag:"h1",itemprop:"name",text:this.props.item.title,align:"center",colorKey:"accent",width:"100%",__source:{fileName:u,lineNumber:87}}),b.default.createElement(j.default,{tags:this.props.item.tags,__source:{fileName:u,lineNumber:88}}),b.default.createElement("p",{itemprop:"keywords",__source:{fileName:u,lineNumber:89}},this.props.item.tags.join()),b.default.createElement(R.default,{tag:"p",itemprop:"description",text:this.props.item.description,align:"center",colorKey:"primary",width:"100%",__source:{fileName:u,lineNumber:90}}),b.default.createElement("div",{style:{height:"200px"},itemprop:"video",__source:{fileName:u,lineNumber:91}},b.default.createElement(P.default,{url:this.props.item.youtube,__source:{fileName:u,lineNumber:92}})),this.renderText(),b.default.createElement(V,{id:"shareable",__source:{fileName:u,lineNumber:109}},b.default.createElement(_.default,{icon:"gp",round:!0,padding:"3px",color:"red",onInput:function(){window.open("https://plus.google.com/share?url="+e.state.url,"pop","width=600, height=400, scrollbars=no")},__source:{fileName:u,lineNumber:110}}),b.default.createElement(_.default,{icon:"fb",round:!0,padding:"3px",color:"blue",onInput:function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+e.state.url,"pop","width=600, height=400, scrollbars=no")},__source:{fileName:u,lineNumber:113}})))}}]),t}(b.default.Component);W.displayName="Post";var B=function(e){return console.log("post mapStateToProps ",e),{gapiReady:e.gapi.gapiReady}};t.default=(0,w.connect)(B)((0,y.withSiteData)((0,y.withRouteData)(W)));var U=(O.default.p(s),O.default.span(p,M.default),O.default.div(d,function(e){return e.theme[e.theme.theme].neutral},function(e){return e.theme[e.theme.theme].mediaMinWidth})),V=(O.default.div(f),O.default.div(h));O.default.h2(m)},349:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: 10px 0px;\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"],["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: 10px 0px;\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"]),c=n(0),s=i(c),p=n(4),d=i(p),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),l(t,[{key:"render",value:function(){return s.default.createElement(h,{width:this.props.width,padding:this.props.padding,index:this.props.index,__source:{fileName:"D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\TextBox.jsx",lineNumber:11}},this.props.children)}}]),t}(s.default.Component);t.default=f;var h=d.default.div(u,function(e){var t=e.index%e.theme[e.theme.theme].bgCount;switch(console.log("bg color index "+e.index+" count "+e.theme[e.theme.theme].bgCount+" i "+t),t){case 1:return e.theme[e.theme.theme].bg2;case 2:return e.theme[e.theme.theme].bg3;case 3:return e.theme[e.theme.theme].bg4;case 4:return e.theme[e.theme.theme].bg5;case 5:return e.theme[e.theme.theme].bg6;case 0:default:return e.theme[e.theme.theme].bg1}},function(e){return e.width?e.width:"100%"},function(e){return e.padding?e.padding:"10px"},function(e){return e.theme[e.theme.theme].mediaMinWidth},function(e){return e.padding?e.padding:"10px 20px"})},441:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\layout\\Tags.jsx",c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=r(["\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n"],["\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n"]),p=r(["\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n"],["\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n"]),d=n(0),f=i(d),h=n(4),m=i(h),g=n(24),b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){var e=this;return this.props.tags?f.default.createElement(w,{__source:{fileName:u,lineNumber:10}},this.props.tags.map(function(t){return e.props.tag&&t===e.props.tag?f.default.createElement(y,{__source:{fileName:u,lineNumber:14}},f.default.createElement(g.Link,{to:"/"+t,className:"active",__source:{fileName:u,lineNumber:14}},t)):f.default.createElement(y,{__source:{fileName:u,lineNumber:16}},f.default.createElement(g.Link,{to:"/"+t,__source:{fileName:u,lineNumber:16}},t))})):null}}]),t}(f.default.Component);t.default=b;var y=m.default.h4(s),w=m.default.div(p)},443:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={width:0,height:0,scale:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(n),n}return o(t,e),a(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight,scale:window.innerWidth<400?1:1.5})}},{key:"render",value:function(){var e=this;return u.default.Children.map(this.props.children,function(t,n){return u.default.cloneElement(t,{width:e.state.width,height:e.state.height,scale:e.state.scale})})}}]),t}(u.default.Component);t.default=c},668:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Video.jsx",c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),p=r(["\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ","; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"],["\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ","; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"]),d=r(["\n    margin: auto;\n    height: ",";\n    width: ",";\n"],["\n    margin: auto;\n    height: ",";\n    width: ",";\n"]),f=r(["\n    margin: auto;\n    width: 100%;\n    flex: 1;\n"],["\n    margin: auto;\n    width: 100%;\n    flex: 1;\n"]),h=r(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n"],["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n"]),m=r(["\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n"],["\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n"]),g=n(0),b=i(g),y=n(1),w=i(y),v=n(4),_=i(v),x=n(129),O=i(x),N=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=e.scale?e.scale:1;return n.state=c({},n.getHeights(i)),console.log("Youtube view",e),console.log("youtube view props dimen: "+e.vWidth+", "+e.vHeight+" scale "+i+" \n                    state "+n.state.width+", "+n.state.height),n}return l(t,e),s(t,[{key:"getHeights",value:function(e){return{scale:e,position:this.props.position?this.props.position:"right",width:this.props.vWidth?this.props.vWidth*e+"px":336*e+"px",height:this.props.vHeight?this.props.vHeight*e+"px":189*e+"px"}}},{key:"componentDidUpdate",value:function(e,t){e.scale!==this.props.scale&&(console.log("componentDidupdate updating scale to "+this.props.scale),this.setState(this.getHeights(this.props.scale)))}},{key:"renderText",value:function(e,t){if(e&&t)return b.default.createElement(k,{__source:{fileName:u,lineNumber:39}},b.default.createElement(O.default,{tag:"p",text:e,__source:{fileName:u,lineNumber:40}}))}},{key:"render",value:function(){return b.default.createElement(j,{width:this.props.width,__source:{fileName:u,lineNumber:48}},this.renderText(this.props.text,"left"===this.state.position),b.default.createElement(A,{height:this.state.height,__source:{fileName:u,lineNumber:50}},b.default.createElement("iframe",{width:""+this.state.width,height:""+this.state.height,src:""+this.props.url,frameborder:"0",allow:"autoplay; encrypted-media",encryptedMedia:!0,allowfullscreen:!0,__source:{fileName:u,lineNumber:51}})),this.renderText(this.props.text,"right"===this.state.position))}}]),t}(b.default.PureComponent);t.default=N,N.propTypes={url:w.default.string};var j=_.default.div(p,function(e){return e.width},function(e){return e.theme[e.theme.theme].mediaMinWidth}),A=_.default.div(d,function(e){return e.height},function(e){return e.width}),k=_.default.div(f);_.default.div(h),_.default.div(m)},669:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEXSURBVCiRlZIhT8NAFMd/1xZGGAsKkhkMCocafIAyPgEW0lHDErB4UHyB1pQtIDAYEhRLPwBD4CBB4UDMkEFCELtDrDl614ryV+/+d7/38u49gaV2kEQKcZD3BCoe9MOu6WXa3k9aUoph/tJzHRbqNaSUjL9+cCZq4+4yfNBgGTTodXT8Pvpk7/gaQMMegA2trS7rOLq652P8rc/SFUNAeNOeTC025nR8kz7b34AfJJHYCs4N7uJsh+ZSw3j48jri8PTW8JxCuhI9Pr0VvEJFgM31FU6OfADanV5pskoVS0GBiv8LKVTs2BtRRWk/7DowHWpVaJK9/Vu53aSVDZcZz6U+PwtgDL+wcnn5QRIJa8kVKk6tln4BvxFl7vjxHoAAAAAASUVORK5CYII="}});