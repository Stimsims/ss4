webpackJsonp([1],{146:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l="D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Post.jsx",c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=i(["\n    visibility: hidden;\n    height: 0; width: 0;\n"],["\n    visibility: hidden;\n    height: 0; width: 0;\n"]),p=i(["\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding:0;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"],["\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding:0;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"]),f=i(["\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ",";\n    @media only screen and (min-width: ",") {\n        padding: 10px;\n    }\n\n"],["\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ",";\n    @media only screen and (min-width: ",") {\n        padding: 10px;\n    }\n\n"]),d=i(["\n    margin:auto;\n    width: 100%;\n    text-align: center;\n"],["\n    margin:auto;\n    width: 100%;\n    text-align: center;\n"]),m=n(0),h=r(m),b=n(14),g=n(38),y=n(132),_=r(y),w=n(2),v=r(w),N=n(427),x=r(N),j=n(39),O=(r(j),n(655)),E=r(O),P=n(349),k=r(P),T=n(428),M=(r(T),n(128)),C=r(M),D=(n(70),n(656)),R=r(D),W=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={counter:0,url:e.siteRoot+e.history.location.pathname},n}return u(t,e),c(t,[{key:"renderShare",value:function(){console.log("post page rendering gapi share post ",this.props)}},{key:"renderText",value:function(){return this.props.item.content.map(function(e){return h.default.createElement(k.default,{__source:{fileName:l,lineNumber:50}},h.default.createElement(C.default,{tag:"p",text:e,align:"center",width:"100%",__source:{fileName:l,lineNumber:51}}))})}},{key:"renderGoogleShare",value:function(){return this.props.gapiReady?h.default.createElement("p",{__source:{fileName:l,lineNumber:57}},"gapi?"):h.default.createElement("p",{__source:{fileName:l,lineNumber:59}},"no gapi")}},{key:"renderVideo",value:function(){return this.props.item.youtube?h.default.createElement("div",{style:{height:"200px"},itemprop:"video",__source:{fileName:l,lineNumber:64}},h.default.createElement(E.default,{url:this.props.item.youtube,__source:{fileName:l,lineNumber:65}})):null}},{key:"renderJson",value:function(){return{"@context":"http://schema.org/","@type":"Recipe",name:"Grandma's Holiday Apple Pie",author:"Elaine Smith",image:"http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",description:"A classic apple pie.",aggregateRating:{"@type":"AggregateRating",ratingValue:"4",reviewCount:"276",bestRating:"5",worstRating:"1"},prepTime:"PT30M",totalTime:"PT1H",recipeYield:"8",nutrition:{"@type":"NutritionInformation",servingSize:"1 medium slice",calories:"230 calories",fatContent:"1 g",carbohydrateContent:"43 g"}}}},{key:"render",value:function(){var e=this;return h.default.createElement(I,{__source:{fileName:l,lineNumber:103}},h.default.createElement("span",{itemprop:"name",__source:{fileName:l,lineNumber:113}},h.default.createElement(C.default,{tag:"h1",itemprop:"name",text:this.props.item.title,align:"center",colorKey:"accent",width:"100%",__source:{fileName:l,lineNumber:114}})),h.default.createElement(x.default,{tags:this.props.item.tags,__source:{fileName:l,lineNumber:117}}),this.props.item.tags?h.default.createElement(z,{itemprop:"keywords",__source:{fileName:l,lineNumber:118}},this.props.item.tags.join()):null,h.default.createElement("a",{href:"https://twitter.com/intent/tweet?source=https://illulli-1e5a.com/posts/pjsmoothie/&text=my post title",target:"_blank",title:"Tweet",__source:{fileName:l,lineNumber:119}},h.default.createElement("i",{class:"fi fi-social-twitter",__source:{fileName:l,lineNumber:119}},"twweett")),h.default.createElement(H,{__source:{fileName:l,lineNumber:120}},h.default.createElement(k.default,{style:{flex:"1"},margin:"5px 0px",__source:{fileName:l,lineNumber:121}},h.default.createElement("span",{itemprop:"description",__source:{fileName:l,lineNumber:122}},h.default.createElement(C.default,{tag:"p",text:this.props.item.description,align:"center",width:"100%",__source:{fileName:l,lineNumber:123}}))),h.default.createElement("div",{style:{width:"10px",height:"10px"},__source:{fileName:l,lineNumber:126}}),h.default.createElement("div",{__source:{fileName:l,lineNumber:127}},this.renderVideo())),h.default.createElement("span",{itemprop:"articleBody",__source:{fileName:l,lineNumber:134}},this.renderText()),h.default.createElement(U,{id:"shareable",__source:{fileName:l,lineNumber:139}},h.default.createElement(_.default,{icon:"gp",round:!0,padding:"3px",color:"red",onInput:function(){window.open("https://plus.google.com/share?url="+e.state.url,"pop","width=600, height=400, scrollbars=no")},__source:{fileName:l,lineNumber:140}}),h.default.createElement(_.default,{icon:"fb",round:!0,padding:"3px",color:"blue",onInput:function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+e.state.url,"pop","width=600, height=400, scrollbars=no")},__source:{fileName:l,lineNumber:143}})),h.default.createElement(R.default,{data:this.renderJson(),__source:{fileName:l,lineNumber:147}}))}}]),t}(h.default.Component);W.displayName="Post";var S=function(e){return{gapiReady:e.gapi.gapiReady}};t.default=(0,g.connect)(S)((0,b.withSiteData)((0,b.withRouteData)(W)));var z=v.default.p(s),H=v.default.div(p,function(e){return e.theme.mediaMinWidth}),I=v.default.div(f,function(e){return e.theme.neutral},function(e){return e.theme.mediaMinWidth}),U=v.default.div(d)},349:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: ",";\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"],["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: ",";\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"]),c=n(0),s=r(c),p=n(2),f=r(p),d=function(e){function t(e){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return s.default.createElement(m,{width:this.props.width,padding:this.props.padding,margin:this.props.margin,index:this.props.index,__source:{fileName:"D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\TextBox.jsx",lineNumber:11}},this.props.children)}}]),t}(s.default.Component);t.default=d;var m=f.default.div(l,function(e){var t=e.index%e.theme.bgCount;switch(console.log("bg color index "+e.index+" count "+e.theme.bgCount+" i "+t),t){case 1:return e.theme.bg2;case 2:return e.theme.bg3;case 3:return e.theme.bg4;case 4:return e.theme.bg5;case 5:return e.theme.bg6;case 0:default:return e.theme.bg1}},function(e){return e.width?e.width:"100%"},function(e){return e.margin?e.margin:"10px 0px"},function(e){return e.padding?e.padding:"10px"},function(e){return e.theme.mediaMinWidth},function(e){return e.padding?e.padding:"10px 20px"})},427:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\layout\\Tags.jsx",c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=i(["\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n"],["\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n"]),p=i(["\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n"],["\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n"]),f=n(0),d=r(f),m=n(2),h=r(m),b=n(14),g=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this;return this.props.tags?d.default.createElement(_,{__source:{fileName:l,lineNumber:10}},this.props.tags.map(function(t){return e.props.tag&&t===e.props.tag?d.default.createElement(y,{__source:{fileName:l,lineNumber:14}},d.default.createElement(b.Link,{to:"/"+t,className:"active",__source:{fileName:l,lineNumber:14}},t)):d.default.createElement(y,{__source:{fileName:l,lineNumber:16}},d.default.createElement(b.Link,{to:"/"+t,__source:{fileName:l,lineNumber:16}},t))})):null}}]),t}(d.default.Component);t.default=g;var y=h.default.h4(s),_=h.default.div(p)},428:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={width:0,height:0,scale:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(n),n}return o(t,e),a(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight,scale:window.innerWidth<400?1:1.5})}},{key:"render",value:function(){var e=this;return l.default.Children.map(this.props.children,function(t,n){return l.default.cloneElement(t,{width:e.state.width,height:e.state.height,scale:e.state.scale})})}}]),t}(l.default.Component);t.default=c},655:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Video.jsx",c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=i(["\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ","; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"],["\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ","; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"]),f=i(["\n    margin: auto;\n    height: ",";\n    width: ",";\n"],["\n    margin: auto;\n    height: ",";\n    width: ",";\n"]),d=i(["\n    margin: auto;\n    width: 100%;\n    flex: 1;\n"],["\n    margin: auto;\n    width: 100%;\n    flex: 1;\n"]),m=i(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n"],["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n"]),h=i(["\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n"],["\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n"]),b=n(0),g=r(b),y=n(1),_=r(y),w=n(2),v=r(w),N=n(128),x=r(N),j=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.scale?e.scale:1;return n.state=c({},n.getHeights(r)),console.log("Youtube view",e),console.log("youtube view props dimen: "+e.vWidth+", "+e.vHeight+" scale "+r+" \n                    state "+n.state.width+", "+n.state.height),n}return u(t,e),s(t,[{key:"getHeights",value:function(e){return{scale:e,position:this.props.position?this.props.position:"right",width:this.props.vWidth?this.props.vWidth*e+"px":336*e+"px",height:this.props.vHeight?this.props.vHeight*e+"px":189*e+"px"}}},{key:"componentDidUpdate",value:function(e,t){e.scale!==this.props.scale&&(console.log("componentDidupdate updating scale to "+this.props.scale),this.setState(this.getHeights(this.props.scale)))}},{key:"renderText",value:function(e,t){if(e&&t)return g.default.createElement(P,{__source:{fileName:l,lineNumber:39}},g.default.createElement(x.default,{tag:"p",text:e,__source:{fileName:l,lineNumber:40}}))}},{key:"render",value:function(){return g.default.createElement(O,{width:this.props.width,__source:{fileName:l,lineNumber:48}},this.renderText(this.props.text,"left"===this.state.position),g.default.createElement(E,{height:this.state.height,__source:{fileName:l,lineNumber:50}},g.default.createElement("iframe",{width:""+this.state.width,height:""+this.state.height,src:""+this.props.url,frameborder:"0",allow:"autoplay; encrypted-media",encryptedMedia:!0,allowfullscreen:!0,__source:{fileName:l,lineNumber:51}})),this.renderText(this.props.text,"right"===this.state.position))}}]),t}(g.default.PureComponent);t.default=j,j.propTypes={url:_.default.string};var O=v.default.div(p,function(e){return e.width},function(e){return e.theme.mediaMinWidth}),E=v.default.div(f,function(e){return e.height},function(e){return e.width}),P=v.default.div(d);v.default.div(m),v.default.div(h)},656:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\MetaComponent.jsx",u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(l),s=n(70),p=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return console.log("MetaComponent props",this.props),c.default.createElement("div",{className:"wrapper",__source:{fileName:a,lineNumber:8}},c.default.createElement(s.Helmet,{__source:{fileName:a,lineNumber:9}},c.default.createElement("meta",{name:"twitter:card",content:"summary",__source:{fileName:a,lineNumber:18}}),c.default.createElement("meta",{name:"twitter:site",content:"@Paygevii1",__source:{fileName:a,lineNumber:19}}),c.default.createElement("meta",{name:"twitter:title",content:"Top 10 Things Ever",__source:{fileName:a,lineNumber:20}}),c.default.createElement("meta",{name:"twitter:description",content:"Up than 200 characters.",__source:{fileName:a,lineNumber:21}}),c.default.createElement("meta",{name:"twitter:image",content:"http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",__source:{fileName:a,lineNumber:22}}),c.default.createElement("meta",{name:"twitter:image:alt",content:"apple pie",__source:{fileName:a,lineNumber:23}})),c.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(this.props.data)},__source:{fileName:a,lineNumber:25}}))}}]),t}(c.default.Component);t.default=p}});