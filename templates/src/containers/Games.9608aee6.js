webpackJsonp([0],{196:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(71),s=o(u),l=n(72),c=o(l),p=n(73),f=o(p),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=n(0),h=o(m),y=n(33),v=o(y),b=function(){return h.default.createElement("div",{style:{color:"red"}},h.default.createElement("h1",null,"Failed to load the heavy component!"))},g=function(){return h.default.createElement("div",{style:{color:"yellow"}},h.default.createElement("h1",null,"Loading this heavy component..."))},w=function(t){function o(t){r(this,o);var a=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t));console.log("dynamic component constructor "+a.props.payload);var u=(0,v.default)((0,f.default)({id:"",file:"D:/websites/react-static/static-site-2/4/src/components/DynamicComponent.jsx",load:function(){return Promise.all([n(202)(""+a.props.payload),(0,c.default)(""+a.props.payload,{disableWarnings:!0})]).then(function(e){return e[0]})},path:function(){return s.default.join(e,""+a.props.payload)},resolve:function(){return n(216).resolve(""+a.props.payload)},chunkName:function(){return""+a.props.payload}}),{loading:g,error:b});return a.state={component:u},a}return a(o,t),d(o,[{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement(this.state.component,this.props))}}]),o}(h.default.Component);t.default=w}).call(t,"/")},197:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),l=o(s),c=n(204),p=o(c);n(199);var f=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement(p.default,{transitionName:"fade-in",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:300},this.props.children)}}]),t}(l.default.Component);t.default=f},199:function(e,t){},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"==typeof window||!window.document||!window.document.createElement),e.exports=t.default},201:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=r;var i=n(0),a=(o(i),n(1)),u=o(a);t.nameShape=u.default.oneOfType([u.default.string,u.default.shape({enter:u.default.string,leave:u.default.string,active:u.default.string}),u.default.shape({enter:u.default.string,enterActive:u.default.string,leave:u.default.string,leaveActive:u.default.string,appear:u.default.string,appearActive:u.default.string})])},202:function(e,t,n){function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"./DynamicComponent":[196],"./DynamicComponent.jsx":[196],"./FatComponent":[198,7],"./FatComponent.jsx":[198,7],"./UI/animations/FadeIn":[197],"./UI/animations/FadeIn.jsx":[197],"./UI/animations/styles.css":[199],"./apis/Analytics":[65],"./apis/Analytics.jsx":[65],"./apis/Gapi":[66],"./apis/Gapi.jsx":[66],"./layout/menu":[67],"./layout/menu.css":[68],"./layout/menu.jsx":[67]};o.keys=function(){return Object.keys(r)},o.id=202,e.exports=o},204:function(e,t,n){"use strict";e.exports=n(205)},205:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n(0),l=o(s),c=n(1),p=o(c),f=n(206),d=o(f),m=n(210),h=o(m),y=n(201),v=(y.nameShape.isRequired,p.default.bool,p.default.bool,p.default.bool,(0,y.transitionTimeout)("Appear"),(0,y.transitionTimeout)("Enter"),(0,y.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),b=function(e){function t(){var n,o,a;r(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=o=i(this,e.call.apply(e,[this].concat(s))),o._wrapChild=function(e){return l.default.createElement(h.default,{name:o.props.transitionName,appear:o.props.transitionAppear,enter:o.props.transitionEnter,leave:o.props.transitionLeave,appearTimeout:o.props.transitionAppearTimeout,enterTimeout:o.props.transitionEnterTimeout,leaveTimeout:o.props.transitionLeaveTimeout},e)},a=n,i(o,a)}return a(t,e),t.prototype.render=function(){return l.default.createElement(d.default,u({},this.props,{childFactory:this._wrapChild}))},t}(l.default.Component);b.displayName="CSSTransitionGroup",b.propTypes={},b.defaultProps=v,t.default=b,e.exports=t.default},206:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n(207),l=o(s),c=n(0),p=o(c),f=n(1),d=o(f),m=n(208),h=(o(m),n(209)),y=(d.default.any,d.default.func,d.default.node,{component:"span",childFactory:function(e){return e}}),v=function(e){function t(n,o){r(this,t);var a=i(this,e.call(this,n,o));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=u({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,h.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,h.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,h.mergeChildMappings)(n,t)});for(var o in t){var r=n&&n.hasOwnProperty(o);!t[o]||r||this.currentlyTransitioningKeys[o]||this.keysToEnter.push(o)}for(var i in n){var a=t&&t.hasOwnProperty(i);!n[i]||a||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[];for(var n in this.state.children)!function(n){var o=e.state.children[n];if(o){var r="string"!=typeof o.ref,i=e.props.childFactory(o),a=function(t){e.childRefs[n]=t};i===o&&r&&(a=(0,l.default)(o.ref,a)),t.push(p.default.cloneElement(i,{key:n,ref:a}))}}(n);var o=u({},this.props);return delete o.transitionLeave,delete o.transitionName,delete o.transitionAppear,delete o.transitionEnter,delete o.childFactory,delete o.transitionLeaveTimeout,delete o.transitionEnterTimeout,delete o.transitionAppearTimeout,delete o.component,p.default.createElement(this.props.component,o,t)},t}(p.default.Component);v.displayName="TransitionGroup",v.propTypes={},v.defaultProps=y,t.default=v,e.exports=t.default},207:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},208:function(e,t,n){"use strict";var o=function(){};e.exports=o},209:function(e,t,n){"use strict";function o(e){if(!e)return e;var t={};return i.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function r(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var o={},r=[];for(var i in e)t.hasOwnProperty(i)?r.length&&(o[i]=r,r=[]):r.push(i);var a=void 0,u={};for(var s in t){if(o.hasOwnProperty(s))for(a=0;a<o[s].length;a++){var l=o[s][a];u[o[s][a]]=n(l)}u[s]=n(s)}for(a=0;a<r.length;a++)u[r[a]]=n(r[a]);return u}t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=r;var i=n(0)},210:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return _.length?_.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){_.length&&_.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(211),c=o(l),p=n(213),f=o(p),d=n(214),m=o(d),h=n(215),y=n(0),v=o(y),b=n(1),g=o(b),w=n(69),E=n(201),_=[];h.transitionEnd&&_.push(h.transitionEnd),h.animationEnd&&_.push(h.animationEnd);var T=(g.default.node,E.nameShape.isRequired,g.default.bool,g.default.bool,g.default.bool,g.default.number,g.default.number,g.default.number,function(e){function t(){var n,o,a;r(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=o=i(this,e.call.apply(e,[this].concat(s))),o.componentWillAppear=function(e){o.props.appear?o.transition("appear",e,o.props.appearTimeout):e()},o.componentWillEnter=function(e){o.props.enter?o.transition("enter",e,o.props.enterTimeout):e()},o.componentWillLeave=function(e){o.props.leave?o.transition("leave",e,o.props.leaveTimeout):e()},a=n,i(o,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var o=(0,w.findDOMNode)(this);if(!o)return void(t&&t());var r=this.props.name[e]||this.props.name+"-"+e,i=this.props.name[e+"Active"]||r+"-active",a=null,s=void 0;(0,c.default)(o,r),this.queueClassAndNode(i,o);var l=function(e){e&&e.target!==o||(clearTimeout(a),s&&s(),(0,f.default)(o,r),(0,f.default)(o,i),s&&s(),t&&t())};n?(a=setTimeout(l,n),this.transitionTimeouts.push(a)):h.transitionEnd&&(s=u(o,l))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,m.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=s({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,v.default.cloneElement(v.default.Children.only(this.props.children),e)},t}(v.default.Component));T.displayName="CSSTransitionGroupChild",T.propTypes={},t.default=T,e.exports=t.default},211:function(e,t,n){"use strict";function o(e,t){e.classList?e.classList.add(t):(0,i.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(212),i=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=t.default},212:function(e,t,n){"use strict";function o(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},213:function(e,t,n){"use strict";function o(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=o(e.className,t):e.setAttribute("class",o(e.className&&e.className.baseVal||"",t))}},214:function(e,t,n){"use strict";function o(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-p)),o=setTimeout(e,n);return p=t,o}Object.defineProperty(t,"__esModule",{value:!0});var r=n(200),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=["","webkit","moz","o","ms"],u="clearTimeout",s=o,l=void 0,c=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i.default&&a.some(function(e){var t=c(e,"request");if(t in window)return u=c(e,"cancel"),s=function(e){return window[t](e)}});var p=(new Date).getTime();l=function(e){return s(e)},l.cancel=function(e){window[u]&&"function"==typeof window[u]&&window[u](e)},t.default=l,e.exports=t.default},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var o=n(200),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i="transform",a=void 0,u=void 0,s=void 0,l=void 0,c=void 0,p=void 0,f=void 0,d=void 0,m=void 0,h=void 0,y=void 0;if(r.default){var v=function(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),o=void 0,r=void 0,i="",a=0;a<n.length;a++){var u=n[a];if(u+"TransitionProperty"in e){i="-"+u.toLowerCase(),o=t[u]("TransitionEnd"),r=t[u]("AnimationEnd");break}}return!o&&"transitionProperty"in e&&(o="transitionend"),!r&&"animationName"in e&&(r="animationend"),e=null,{animationEnd:r,transitionEnd:o,prefix:i}}();a=v.prefix,t.transitionEnd=u=v.transitionEnd,t.animationEnd=s=v.animationEnd,t.transform=i=a+"-"+i,t.transitionProperty=l=a+"-transition-property",t.transitionDuration=c=a+"-transition-duration",t.transitionDelay=f=a+"-transition-delay",t.transitionTiming=p=a+"-transition-timing-function",t.animationName=d=a+"-animation-name",t.animationDuration=m=a+"-animation-duration",t.animationTiming=h=a+"-animation-delay",t.animationDelay=y=a+"-animation-timing-function"}t.transform=i,t.transitionProperty=l,t.transitionTiming=p,t.transitionDelay=f,t.transitionDuration=c,t.transitionEnd=u,t.animationName=d,t.animationDuration=m,t.animationTiming=h,t.animationDelay=y,t.animationEnd=s,t.default={transform:i,end:u,property:l,timing:p,delay:f,duration:c}},216:function(e,t,n){function o(e){var t=r(e);if(!n.m[t])throw new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");return n(t)}function r(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./DynamicComponent":196,"./DynamicComponent.jsx":196,"./FatComponent":198,"./FatComponent.jsx":198,"./UI/animations/FadeIn":197,"./UI/animations/FadeIn.jsx":197,"./UI/animations/styles.css":199,"./apis/Analytics":65,"./apis/Analytics.jsx":65,"./apis/Gapi":66,"./apis/Gapi.jsx":66,"./layout/menu":67,"./layout/menu.css":68,"./layout/menu.jsx":67};o.keys=function(){return Object.keys(i)},o.resolve=r,o.id=216,e.exports=o},76:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),l=o(s),c=n(18),p=n(196),f=o(p),d=n(77),m=o(d),h=n(197),y=o(h),v=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showKatex:!1},n}return a(t,e),u(t,[{key:"renderKatex",value:function(){var e=this;return this.state.showKatex?l.default.createElement(f.default,{payload:"./FatComponent.jsx"}):l.default.createElement("button",{onClick:function(){e.setState({showKatex:!0})}},"Katex")}},{key:"sendEvent",value:function(){m.default.event({category:"Editing",action:"Deleted Component",label:"Game Widget"})}},{key:"render",value:function(){var e=this;return l.default.createElement("div",null,l.default.createElement("h1",{style:{textAlign:"center"}},"Welcome to"),l.default.createElement("h2",null,"site 3"),l.default.createElement("button",{onClick:function(){e.sendEvent()}},"event"),this.renderKatex(),"All Posts:",l.default.createElement(y.default,null,l.default.createElement("ul",null,this.props.games.map(function(e){return l.default.createElement("li",{key:e.id},l.default.createElement(c.Link,{key:e.id,to:"/games/"+e.id},e.title))}))))}}]),t}(l.default.Component);t.default=(0,c.withSiteData)((0,c.withRouteData)(v))}});