webpackJsonp([1],{146:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="D:\\websites\\react-static\\static-site-2\\4\\src\\containers\\Post.jsx",s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=r(["\n    visibility: hidden;\n    height: 0; width: 0;\n"],["\n    visibility: hidden;\n    height: 0; width: 0;\n"]),p=r(["\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding:0;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"],["\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding:0;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"]),d=r(["\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ",";\n    @media only screen and (min-width: ",") {\n        padding: 10px;\n    }\n\n"],["\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 100px;\n    background-color ",";\n    @media only screen and (min-width: ",") {\n        padding: 10px;\n    }\n\n"]),f=r(["\n    margin:auto;\n    width: 100%;\n    text-align: center;\n"],["\n    margin:auto;\n    width: 100%;\n    text-align: center;\n"]),m=n(0),h=i(m),g=n(14),b=n(38),y=n(132),_=i(y),w=n(2),v=i(w),N=n(427),x=i(N),E=n(39),j=(i(E),n(655)),O=i(j),k=n(349),P=i(k),T=n(428),M=(i(T),n(128)),C=i(M),S=(n(70),n(656)),D=i(S),z=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={counter:0,url:e.siteRoot+e.history.location.pathname},n}return l(t,e),s(t,[{key:"renderShare",value:function(){console.log("post page rendering gapi share post ",this.props)}},{key:"renderText",value:function(){return this.props.item.content.map(function(e){return h.default.createElement(P.default,{__source:{fileName:u,lineNumber:50}},h.default.createElement(C.default,{tag:"p",text:e,align:"center",width:"100%",__source:{fileName:u,lineNumber:51}}))})}},{key:"renderGoogleShare",value:function(){return this.props.gapiReady?h.default.createElement("p",{__source:{fileName:u,lineNumber:57}},"gapi?"):h.default.createElement("p",{__source:{fileName:u,lineNumber:59}},"no gapi")}},{key:"renderVideo",value:function(){return this.props.item.youtube?h.default.createElement("div",{style:{height:"200px"},itemprop:"video",__source:{fileName:u,lineNumber:64}},h.default.createElement(O.default,{url:this.props.item.youtube,__source:{fileName:u,lineNumber:65}})):null}},{key:"getStructuredData",value:function(){return{"@context":"http://schema.org/","@type":"Article",name:'"'+this.props.item.title+'"',headline:"aricle headline",author:"Elaine Smith",keywords:'"'+this.props.item.tags.join()+'"',publisher:{"@type":"Organization",email:"test@gmail.com",name:"IoH",url:"https://illulli-1e5a.com/webpackicons/android-chrome-256x256.png",logo:{"@type":"ImageObject",thumbnail:"https://illulli-1e5a.com/webpackicons/android-chrome-256x256.png",url:"https://illulli-1e5a.com/webpackicons/android-chrome-256x256.png"}},mainEntityOfPage:{"@type":"CreativeWork",name:"my creative vid",about:"solving resident evil armor key puzzle"},image:"http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",thumbnailUrl:"http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",description:"A classic apple pie.",about:"How people solve problems",articleSection:"People are a mystery. We break mysteries down by analyzing their simpeles examples. So, we're analyzing video game puzzles",timeRequired:"P30M",dateModified:"20181009T050200Z",datePublished:"20181009T050200Z"}}},{key:"render",value:function(){var e=this;return h.default.createElement(I,{__source:{fileName:u,lineNumber:126}},h.default.createElement("span",{itemprop:"name",__source:{fileName:u,lineNumber:136}},h.default.createElement(C.default,{tag:"h1",itemprop:"name",text:this.props.item.title,align:"center",colorKey:"accent",width:"100%",__source:{fileName:u,lineNumber:137}})),h.default.createElement(x.default,{tags:this.props.item.tags,__source:{fileName:u,lineNumber:140}}),this.props.item.tags?h.default.createElement(R,{itemprop:"keywords",__source:{fileName:u,lineNumber:141}},this.props.item.tags.join()):null,h.default.createElement("a",{href:"https://twitter.com/intent/tweet?url="+this.state.url+"&text=hello my text",target:"_blank",title:"Tweet",__source:{fileName:u,lineNumber:142}},h.default.createElement("i",{class:"fi fi-social-twitter",__source:{fileName:u,lineNumber:142}},"twweett")),h.default.createElement(H,{__source:{fileName:u,lineNumber:143}},h.default.createElement(P.default,{style:{flex:"1"},margin:"5px 0px",__source:{fileName:u,lineNumber:144}},h.default.createElement("span",{itemprop:"description",__source:{fileName:u,lineNumber:145}},h.default.createElement(C.default,{tag:"p",text:this.props.item.description,align:"center",width:"100%",__source:{fileName:u,lineNumber:146}}))),h.default.createElement("div",{style:{width:"10px",height:"10px"},__source:{fileName:u,lineNumber:149}}),h.default.createElement("div",{__source:{fileName:u,lineNumber:150}},this.renderVideo())),h.default.createElement("span",{itemprop:"articleBody",__source:{fileName:u,lineNumber:157}},this.renderText()),h.default.createElement(A,{id:"shareable",__source:{fileName:u,lineNumber:162}},h.default.createElement(_.default,{icon:"gp",round:!0,padding:"3px",color:"red",onInput:function(){window.open("https://plus.google.com/share?url="+e.state.url,"pop","width=600, height=400, scrollbars=no")},__source:{fileName:u,lineNumber:163}}),h.default.createElement(_.default,{icon:"fb",round:!0,padding:"3px",color:"blue",onInput:function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+e.state.url,"pop","width=600, height=400, scrollbars=no")},__source:{fileName:u,lineNumber:166}})),h.default.createElement(D.default,{data:this.getStructuredData(),type:{type:"article","article:section":"game analysis","article:tag":this.props.item.tags.join()},desc:this.props.item.desc,title:this.props.item.title,image:"http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",imageAlt:"my apple pie",__source:{fileName:u,lineNumber:170}}))}}]),t}(h.default.Component);z.displayName="Post";var W=function(e){return{gapiReady:e.gapi.gapiReady}};t.default=(0,b.connect)(W)((0,g.withSiteData)((0,g.withRouteData)(z)));var R=v.default.p(c),H=v.default.div(p,function(e){return e.theme.mediaMinWidth}),I=v.default.div(d,function(e){return e.theme.neutral},function(e){return e.theme.mediaMinWidth}),A=v.default.div(f)},349:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: ",";\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"],["\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    transition: 0.3s;\n    border-radius: 5px;\n    background-color ",";\n    width: ",";\n    margin: ",";\n    padding: ",";\n    @media only screen and (min-width: ",") {\n        padding: ",";\n    }\n"]),s=n(0),c=i(s),p=n(2),d=i(p),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),l(t,[{key:"render",value:function(){return c.default.createElement(m,{width:this.props.width,padding:this.props.padding,margin:this.props.margin,index:this.props.index,__source:{fileName:"D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\TextBox.jsx",lineNumber:11}},this.props.children)}}]),t}(c.default.Component);t.default=f;var m=d.default.div(u,function(e){var t=e.index%e.theme.bgCount;switch(console.log("bg color index "+e.index+" count "+e.theme.bgCount+" i "+t),t){case 1:return e.theme.bg2;case 2:return e.theme.bg3;case 3:return e.theme.bg4;case 4:return e.theme.bg5;case 5:return e.theme.bg6;case 0:default:return e.theme.bg1}},function(e){return e.width?e.width:"100%"},function(e){return e.margin?e.margin:"10px 0px"},function(e){return e.padding?e.padding:"10px"},function(e){return e.theme.mediaMinWidth},function(e){return e.padding?e.padding:"10px 20px"})},427:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\layout\\Tags.jsx",s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=r(["\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n"],["\n    display: inline;\n    padding: 0px 10px;\n    margin: 0;\n    a{\n        color: grey;\n    }\n    a.active{\n        color: red;\n    }\n"]),p=r(["\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n"],["\n    width:100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n"]),d=n(0),f=i(d),m=n(2),h=i(m),g=n(14),b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this;return this.props.tags?f.default.createElement(_,{__source:{fileName:u,lineNumber:10}},this.props.tags.map(function(t){return e.props.tag&&t===e.props.tag?f.default.createElement(y,{__source:{fileName:u,lineNumber:14}},f.default.createElement(g.Link,{to:"/"+t,className:"active",__source:{fileName:u,lineNumber:14}},t)):f.default.createElement(y,{__source:{fileName:u,lineNumber:16}},f.default.createElement(g.Link,{to:"/"+t,__source:{fileName:u,lineNumber:16}},t))})):null}}]),t}(f.default.Component);t.default=b;var y=h.default.h4(c),_=h.default.div(p)},428:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l),s=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={width:0,height:0,scale:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(n),n}return o(t,e),a(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight,scale:window.innerWidth<400?1:1.5})}},{key:"render",value:function(){var e=this;return u.default.Children.map(this.props.children,function(t,n){return u.default.cloneElement(t,{width:e.state.width,height:e.state.height,scale:e.state.scale})})}}]),t}(u.default.Component);t.default=s},655:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\Video.jsx",s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),p=r(["\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ","; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"],["\n    display: flex;\n    margin-left: auto; margin-right: auto;\n    width: ","; \n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    @media only screen and (min-width: ",") {\n        flex-direction: row;\n    }\n"]),d=r(["\n    margin: auto;\n    height: ",";\n    width: ",";\n"],["\n    margin: auto;\n    height: ",";\n    width: ",";\n"]),f=r(["\n    margin: auto;\n    width: 100%;\n    flex: 1;\n"],["\n    margin: auto;\n    width: 100%;\n    flex: 1;\n"]),m=r(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n"],["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-color: blue;\n    \n"]),h=r(["\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n"],["\n    position:absolute; \n    height: 100%;\n    top:0; right:0; bottom:0;\n    left: 50%;\n    background-color: green;\n"]),g=n(0),b=i(g),y=n(1),_=i(y),w=n(2),v=i(w),N=n(128),x=i(N),E=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=e.scale?e.scale:1;return n.state=s({},n.getHeights(i)),console.log("Youtube view",e),console.log("youtube view props dimen: "+e.vWidth+", "+e.vHeight+" scale "+i+" \n                    state "+n.state.width+", "+n.state.height),n}return l(t,e),c(t,[{key:"getHeights",value:function(e){return{scale:e,position:this.props.position?this.props.position:"right",width:this.props.vWidth?this.props.vWidth*e+"px":336*e+"px",height:this.props.vHeight?this.props.vHeight*e+"px":189*e+"px"}}},{key:"componentDidUpdate",value:function(e,t){e.scale!==this.props.scale&&(console.log("componentDidupdate updating scale to "+this.props.scale),this.setState(this.getHeights(this.props.scale)))}},{key:"renderText",value:function(e,t){if(e&&t)return b.default.createElement(k,{__source:{fileName:u,lineNumber:39}},b.default.createElement(x.default,{tag:"p",text:e,__source:{fileName:u,lineNumber:40}}))}},{key:"render",value:function(){return b.default.createElement(j,{width:this.props.width,__source:{fileName:u,lineNumber:48}},this.renderText(this.props.text,"left"===this.state.position),b.default.createElement(O,{height:this.state.height,__source:{fileName:u,lineNumber:50}},b.default.createElement("iframe",{width:""+this.state.width,height:""+this.state.height,src:""+this.props.url,frameborder:"0",allow:"autoplay; encrypted-media",encryptedMedia:!0,allowfullscreen:!0,__source:{fileName:u,lineNumber:51}})),this.renderText(this.props.text,"right"===this.state.position))}}]),t}(b.default.PureComponent);t.default=E,E.propTypes={url:_.default.string};var j=v.default.div(p,function(e){return e.width},function(e){return e.theme.mediaMinWidth}),O=v.default.div(d,function(e){return e.height},function(e){return e.width}),k=v.default.div(f);v.default.div(m),v.default.div(h)},656:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a="D:\\websites\\react-static\\static-site-2\\4\\src\\components\\UI\\elements\\MetaComponent.jsx",l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(70),p=n(38),d=n(14),f=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={data:{"@context":"http://schema.org/","@type":"Recipe",name:"Grandma's Holiday Apple Pie",author:"Elaine Smith",image:"http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",description:"A classic apple pie.",aggregateRating:{"@type":"AggregateRating",ratingValue:"4",reviewCount:"276",bestRating:"5",worstRating:"1"},prepTime:"PT30M",totalTime:"PT1H",recipeYield:"8",nutrition:{"@type":"NutritionInformation",servingSize:"1 medium slice",calories:"230 calories",fatContent:"1 g",carbohydrateContent:"43 g"}}},n}return o(t,e),l(t,[{key:"renderOgType",value:function(){var e=this;if(this.props.type){return Object.keys(this.props.type).map(function(t){return s.default.createElement("meta",{property:t,content:e.props.type[t],__source:{fileName:a,lineNumber:42}})})}return null}},{key:"render",value:function(){return console.log("MetaComponent props",this.props),s.default.createElement("div",{className:"wrapper",__source:{fileName:a,lineNumber:51}},s.default.createElement(c.Helmet,{__source:{fileName:a,lineNumber:52}},s.default.createElement("title",{__source:{fileName:a,lineNumber:53}},this.props.title?this.props.title:this.props.siteTitle),this.renderOgType(),this.props.desc&&s.default.createElement("meta",{name:"description",content:this.props.desc,__source:{fileName:a,lineNumber:55}}),this.props.desc&&s.default.createElement("meta",{name:"og:description",content:this.props.desc,__source:{fileName:a,lineNumber:56}}),s.default.createElement("meta",{property:"og:title",content:this.props.title?this.props.title:this.props.siteTitle,__source:{fileName:a,lineNumber:57}}),s.default.createElement("meta",{property:"og:url",content:"http://illulli-1e5a.com/posts/pjsmoothie/",__source:{fileName:a,lineNumber:58}}),s.default.createElement("meta",{property:"og:image",content:this.props.image?this.props.image:"https://illulli-1e5a.com/webpackicons/android-chrome-256x256.png",__source:{fileName:a,lineNumber:59}}),s.default.createElement("meta",{property:"og:site_name",content:this.props.siteTitle,__source:{fileName:a,lineNumber:60}}),s.default.createElement("meta",{name:"twitter:card",content:"summary",__source:{fileName:a,lineNumber:61}}),s.default.createElement("meta",{name:"twitter:site",content:"@Paygevii1",__source:{fileName:a,lineNumber:62}}),s.default.createElement("meta",{name:"twitter:creator",content:"@Paygevii1",__source:{fileName:a,lineNumber:63}}),s.default.createElement("meta",{name:"twitter:title",content:this.props.title?this.props.title:this.props.siteTitle,__source:{fileName:a,lineNumber:64}}),this.props.desc&&s.default.createElement("meta",{name:"twitter:description",content:this.props.desc,__source:{fileName:a,lineNumber:65}}),s.default.createElement("meta",{name:"twitter:image",content:this.props.image?this.props.image:"https://illulli-1e5a.com/webpackicons/android-chrome-256x256.png",__source:{fileName:a,lineNumber:66}}),this.props.image&&s.default.createElement("meta",{name:"twitter:image:alt",content:this.props.imageAlt?this.props.imageAlt:"website icon",__source:{fileName:a,lineNumber:67}}),s.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(this.props.data)},__source:{fileName:a,lineNumber:68}})))}}]),t}(s.default.Component),m=function(e){return{}};t.default=(0,p.connect)(m)((0,d.withSiteData)(f))}});