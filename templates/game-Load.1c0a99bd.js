webpackJsonp([8,9,17,21],{204:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"h",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return l}),n.d(t,"a",function(){return c});var r="persist:",o="persist/FLUSH",i="persist/REHYDRATE",a="persist/PAUSE",s="persist/PERSIST",u="persist/PURGE",l="persist/REGISTER",c=-1},209:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.sample=t.decorators=t.units=t.constants=t.store=void 0;var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=(t.store={zLounge:"zLounge",zControl:"zControl",iRead:"iRead",iSample:"iSample",rContains:"rContains",fsm:"fsm"},t.constants={kId:"kId",vId:"vId",entry:"entry"});t.units={g:"grams",kg:"kilos"},t.decorators={setEntry:function(e){return r({},a.entry,e)},getComponent:function(e,t,n,r,o){var a=e(t);return i.default.createElement(a.component,{factory:e,entry:n,onInput:r,kId:o})}},t.sample={elements:["iron","chromium","cobalt","silver","gold"]}},217:function(e,t,n){"use strict";function r(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}Object.defineProperty(t,"__esModule",{value:!0}),t.guid=r},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n(243),i=n(244),a=(0,r.combineReducers)({world:o.reducer,game:i.reducer});t.default=a},243:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return console.log("action setFSM id "+e+" state ",t),{type:"SET_FSM",payload:{id:e,state:t}}}function a(e,t){if(console.log("addItem container "+t,e),!t)throw new Error("my error! must define a container for the item");return{type:"ADD_ITEM",payload:{item:e,container:t}}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.setFSM=i,t.addItem=a;var u=n(209);t.reducer=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(e={},o(e,u.store.zLounge,{fsm:{state:0}}),o(e,u.store.rContains,{}),e),i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(i.type){case"SET_FSM":var a={};return a=n[i.payload.id]&&n[i.payload.id].fsm?s({},n[i.payload.id].fsm,i.payload.state):s({},i.payload.state),console.log("new fsm state",a),s({},n,o({},i.payload.id,s({},n[i.payload.id],{fsm:a})));case"ADD_ITEM":console.log("aboit to add_item item: ",i.payload.item);var l={};return n[u.store.rContains][i.payload.container]?(l=s({},n[u.store.rContains][i.payload.container]),n[u.store.rContains][i.payload.container][i.payload.item.type]&&(l[i.payload.item.type]=[].concat(r(n[u.store.rContains][i.payload.container][i.payload.item.type]?n[u.store.rContains][i.payload.container][i.payload.item.type]:{}),[i.payload.item.id]))):l[i.payload.item.type]=[i.payload.item.id],console.log("adding item to store",l),s({},n,(t={},o(t,i.payload.item.type,s({},n[i.payload.item.type],o({},i.payload.item.id,i.payload.item))),o(t,u.store.rContains,s({},n[u.store.rContains],o({},i.payload.container,l))),t));default:return n}}},244:function(e,t,n){"use strict";function r(e){return{type:"SET_LOCATION",payload:{id:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0,t.setLocation=r;var o=n(209);t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{location:o.store.zLounge},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_LOCATION":return{location:t.payload.id};default:return e}}},248:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(s),l=n(34),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.signIn=n.signIn.bind(n),n.signOut=n.signOut.bind(n),n}return i(t,e),a(t,[{key:"signIn",value:function(){gapi.auth2.getAuthInstance().signIn()}},{key:"signOut",value:function(){gapi.auth2.getAuthInstance().signOut()}},{key:"render",value:function(){return this.props.gapi.gapiReady?this.props.gapi.isSignedIn?u.default.createElement("button",{onClick:this.signOut},"sign out"):u.default.createElement("button",{onClick:this.signIn},"sign in"):u.default.createElement("p",null,"google apis loading...")}}]),t}(u.default.Component),f=function(e){return{gapi:e.gapi}};t.default=(0,l.connect)(f)(c)},254:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n=void 0!==e.version?e.version:i.a,o=(e.debug,void 0===e.stateReconciler?a.a:e.stateReconciler),d=e.getStoredState||u.a,p=void 0!==e.timeout?e.timeout:f,y=null,v=!1,m=!0,g=function(e){return e._persist.rehydrated&&y&&!m&&y.update(e),e};return function(a,u){var f=a||{},h=f._persist,b=r(f,["_persist"]),w=b;if(u.type===i.e){var O=!1,_=function(t,n){O||(u.rehydrate(e.key,t,n),O=!0)};if(p&&setTimeout(function(){!O&&_(void 0,new Error('redux-persist: persist timed out for persist key "'+e.key+'"'))},p),m=!1,y||(y=Object(s.a)(e)),h)return a;if("function"!=typeof u.rehydrate||"function"!=typeof u.register)throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return u.register(e.key),d(e).then(function(t){(e.migrate||function(e,t){return Promise.resolve(e)})(t,n).then(function(e){_(e)},function(e){_(void 0,e)})},function(e){_(void 0,e)}),c({},t(w,u),{_persist:{version:n,rehydrated:!1}})}if(u.type===i.f)return v=!0,u.result(Object(l.a)(e)),c({},t(w,u),{_persist:h});if(u.type===i.b)return u.result(y&&y.flush()),c({},t(w,u),{_persist:h});if(u.type===i.d)m=!0;else if(u.type===i.h){if(v)return c({},w,{_persist:c({},h,{rehydrated:!0})});if(u.key===e.key){var S=t(w,u),j=u.payload,k=!1!==o&&void 0!==j?o(j,a,S,e):S,P=c({},k,{_persist:c({},h,{rehydrated:!0})});return g(P)}}if(!h)return t(a,u);var E=t(w,u);return E===w?a:(E._persist=h,g(E))}}t.a=o;var i=n(204),a=n(282),s=n(268),u=n(269),l=n(270),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=5e3},257:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    display: flex;\n    justify-content: flex-end;\n    background-color:red;\n"],["\n    display: flex;\n    justify-content: flex-end;\n    background-color:red;\n"]),l=n(0),c=r(l),f=n(33),d=n(68),p=r(d),y=n(199),v=r(y),m=n(248),g=r(m),h=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),s(t,[{key:"render",value:function(){return c.default.createElement(b,null,c.default.createElement(v.default,{icon:"facebook"}),c.default.createElement(v.default,{icon:"twitter"}),c.default.createElement(v.default,{icon:"google"}),c.default.createElement(g.default,null))}}]),t}(c.default.Component);t.default=(0,f.withSiteData)(h);var b=p.default.div(u)},259:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(34),d=n(14),p=n(71),y=r(p),v=n(242),m=r(v),g=n(281),h=n(288),b=r(h),w=n(291),O=r(w),_=n(292);"undefined"==typeof window&&(e.window={});var S=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.persistConfig={key:e.savefile,storage:b.default,stateReconciler:O.default,transforms:[(0,g.createTransform)(function(e,t){return console.log("persist create transform inbound "+t),s({},e)},function(e,t){return console.log("persist create transform outbound "+t),s({},e)},{whitelist:null})]},n.pReducer=(0,g.persistReducer)(n.persistConfig,m.default),n.store=(0,d.createStore)(n.pReducer,{},(0,d.applyMiddleware)(y.default)),n.persistor=(0,g.persistStore)(n.store),n}return a(t,e),u(t,[{key:"render",value:function(){return c.default.createElement(f.Provider,{store:this.store},c.default.createElement(_.PersistGate,{loading:c.default.createElement("p",null,"persisting!"),persistor:this.persistor},this.props.children))}}]),t}(c.default.Component);t.default=S}).call(t,n(4))},268:function(e,t,n){"use strict";function r(e){function t(){if(0===m.length)return g&&clearInterval(g),void(g=null);var e=m.shift(),t=l.reduce(function(t,n){return n.in(t,e,y)},y[e]);if(void 0!==t)try{v[e]=p(t)}catch(e){console.error("redux-persist/createPersistoid: error serializing state",e)}else delete v[e];0===m.length&&n()}function n(){Object.keys(v).forEach(function(e){void 0===y[e]&&delete v[e]}),h=d.setItem(f,p(v)).catch(a)}function r(e){return(!u||-1!==u.indexOf(e)||"_persist"===e)&&(!s||-1===s.indexOf(e))}function a(e){}var s=e.blacklist||null,u=e.whitelist||null,l=e.transforms||[],c=e.throttle||0,f=""+(void 0!==e.keyPrefix?e.keyPrefix:i.c)+e.key,d=e.storage,p=!1===e.serialize?function(e){return e}:o,y={},v={},m=[],g=null,h=null;return{update:function(e){Object.keys(e).forEach(function(t){r(t)&&y[t]!==e[t]&&-1===m.indexOf(t)&&m.push(t)}),Object.keys(y).forEach(function(t){void 0===e[t]&&m.push(t)}),null===g&&(g=setInterval(t,c)),y=e},flush:function(){for(;0!==m.length;)t();return h||Promise.resolve()}}}function o(e){return JSON.stringify(e)}t.a=r;var i=n(204)},269:function(e,t,n){"use strict";function r(e){var t=e.transforms||[],n=""+(void 0!==e.keyPrefix?e.keyPrefix:i.c)+e.key,r=e.storage,a=(e.debug,!1===e.serialize?function(e){return e}:o);return r.getItem(n).then(function(e){if(e)try{var n={},r=a(e);return Object.keys(r).forEach(function(e){n[e]=t.reduceRight(function(t,n){return n.out(t,e,r)},a(r[e]))}),n}catch(e){throw e}})}function o(e){return JSON.parse(e)}t.a=r;var i=n(204)},270:function(e,t,n){"use strict";function r(e){var t=e.storage,n=""+(void 0!==e.keyPrefix?e.keyPrefix:i.c)+e.key;return t.removeItem(n,o)}function o(e){}t.a=r;var i=n(204)},274:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return e+"-"+t}function u(e,t,n){return e+":"+t+"-"+n}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=r(c),d=n(259),p=r(d),y=(n(217),n(34)),v=n(257),m=r(v);"undefined"==typeof window&&(e.window={});var g=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.createFileWithJSONContent=function(e,t,n,r,o){var i="-------314159265358979323846",a="\r\n--"+i+"\r\n";console.log("creating file with prop gamename val "+this.props.gamename);var s={name:n,mimeType:"application/json",appProperties:{gamename:""+this.props.gamename}},u=a+"Content-Type: application/json\r\n\r\n"+JSON.stringify(s)+a+"Content-Type: application/json\r\n\r\n"+r+"\r\n---------314159265358979323846--",l="/upload/drive/v3/files",c="POST";e||(l=l+"/"+t,c="PATCH"),console.log("uploading content, method "+c+" path "+l);var f=gapi.client.request({path:l,method:c,params:{uploadType:"multipart"},headers:{"Content-Type":'multipart/related; boundary="'+i+'"'},body:u});o||(o=function(e){console.log(e)}),f.execute(o)},n.onNewGame=n.onNewGame.bind(n),n.onLoadGame=n.onLoadGame.bind(n),n.getLocalFiles=n.getLocalFiles.bind(n),n.listSaveFiles=n.listSaveFiles.bind(n),n.state={id:null,local:{},synced:!1,syncing:!1},n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.getLocalFiles()}},{key:"componentWillUnmount",value:function(){console.log("unmounting, saving to drive"),this.saveLocalMeta(),this.saveGame()}},{key:"componentDidUpdate",value:function(e,t){!this.props.gapi.isSignedIn||this.state.synced||this.state.syncing||this.syncSaves()}},{key:"getLocalFiles",value:function(){var e=this,t=window.localStorage,n=new RegExp("("+this.props.gamename+"-A)"),r=[];for(var o in t)t.hasOwnProperty(o)&&o.match(n)&&r.push({key:o,val:t.getItem(o)});var i=r.map(function(e){return e.key.split("-")[1]});if(console.log("local ids",i),i){var a={};i.map(function(n){a[n]||(a[n]={date:t.getItem(u("date",e.props.gamename,"A")),desc:t.getItem(u("desc",e.props.gamename,"A"))})}),this.setState({local:a}),console.log("local meta",a)}}},{key:"onNewGame",value:function(){this.saveLocalMeta(),this.setState({filename:s(this.props.gamename,name)})}},{key:"saveLocalMeta",value:function(){var e=new Date;console.log("new game name: A date: "+e.getTime());var t=window.localStorage;t.setItem(u("date",this.props.gamename,"A"),e.getTime()),t.setItem(u("desc",this.props.gamename,"A"),"a game description")}},{key:"saveGame",value:function(){var e=s(this.props.gamename,"A");console.log("saving game to drive name "+e);var t=window.localStorage;if(this.props.gapi.isSignedIn){this.listSaveFiles().then(function(n){var r=n.result.files;if(console.log("saveGame response",n),console.log("saving game, drive files found: "+r.length),r&&r.length>0){var o=r[0].id,i=t.getItem("persist:"+e);console.log("updated file from local",i),this.createFileWithJSONContent(!1,o,e,i,function(e){console.log("create file with json callback",e)})}}.bind(this))}else console.log("ERROR, unable to upload to drive, not signed in")}},{key:"listSaveFiles",value:function(){return gapi.client.drive.files.list({q:"appProperties has { key='gamename' and value='"+this.props.gamename+"' }",fields:"files(id, name, mimeType, modifiedTime)"})}},{key:"getFile",value:function(e){return gapi.client.drive.files.get({fileId:e,alt:"media",fields:"id, name, mimeType, modifiedTime"})}},{key:"syncSaves",value:function(){this.setState({syncing:!0});var e=window.localStorage;this.listSaveFiles().then(function(t){var n=t.result.files;if(console.log("loadGame response",t),console.log("loadinggame, drive files found: "+n.length),n&&n.length>0){var r=n[0].modifiedTime,o=e.getItem(u("date",this.props.gamename,"A")),i=new Date(r);console.log("driveTime "+r,i),console.log("is drive.getTime "+i.getTime()+" less than local time? "+o+" -> "+(i.getTime()<o)),i.getTime()>o?(console.log("drive file modified later than local file, downloading"),this.downloadSave(n[0])):(console.log("local file is later than drive file, which save file do you want?"),this.setState({saveConflict:n[0]}))}}.bind(this)).catch(function(e){console.log("syncSaves failed",e),this.setState({syncing:!1,synced:!0})})}},{key:"downloadSave",value:function(e){var t=this;console.log("downloading saving file ",e);var n=window.localStorage,r=e.id,o=e.name;console.log("downloading save file id: "+r+" name: "+o),this.getFile(r).then(function(e){console.log("get file result",e),console.log("file body",e.body),console.log("file result",e.result);n.setItem("persist:"+o,e.body);console.log("saving drive file to local storage at persist:"+o),t.setState({syncing:!1,synced:!0,saveConflict:null,error:null})}).catch(function(e){console.log("fet file error",e),t.setState({syncing:!1,synced:!0,error:e,saveConflict:null})})}},{key:"getAppData",value:function(){console.log("getting app data from drive"),console.log("drive",gapi.client.drive);gapi.client.drive.files.list({spaces:"appDataFolder",fields:"nextPageToken, files(id, name)",pageSize:100}).then(function(e){console.log("app data result",e)}).catch(function(e){console.log("app data error",e)})}},{key:"renderNewGame",value:function(){var e=this;return this.state.syncing?f.default.createElement("button",{onClick:function(){e.onNewGame()},disabled:!0},"New Game"):f.default.createElement("button",{onClick:function(){e.onNewGame()}},"New Game")}},{key:"renderSaves",value:function(){var e=this;if(!this.state.syncing&&this.state.local)return console.log("rendering save files, local:",this.state.local),Object.keys(this.state.local).map(function(t,n){var r=e.state.local[t];return f.default.createElement("button",{onClick:function(){e.onLoadGame(t)}},"save ",n," date: ",r.date,", desc: ",r.desc)})}},{key:"onLoadGame",value:function(e){var t=s(this.props.gamename,"A");console.log("load game name: "+t),this.setState({filename:t})}},{key:"renderSaveConflict",value:function(){var e=this;return this.state.saveConflict?f.default.createElement("div",null,f.default.createElement("p",null,"Your local file is ahead of your drive file, which would you like to continue with? (the other will be deleted)"),f.default.createElement("button",{onClick:function(){e.downloadSave(e.state.saveConflict),e.saveLocalMeta()}},"Choose drive"),f.default.createElement("button",{onClick:function(){e.saveGame(),console.log("saving local game",e.state),e.setState({syncing:!1,synced:!0,saveConflict:null,error:null})}},"Choose local")):f.default.createElement("p",null,"probelm displaying conflict...")}},{key:"render",value:function(){var e=this;return this.state.saveConflict?this.renderSaveConflict():this.state.synced&&this.state.filename?f.default.createElement(p.default,{savefile:this.state.filename},f.default.createElement("button",{onClick:function(){e.saveGame()}},"save game to drive"),f.default.createElement("button",{onClick:function(){e.saveLocalMeta()}},"save local metadata"),this.props.children):f.default.createElement("div",null,f.default.createElement(m.default,null),this.state.synced?f.default.createElement("p",null,"synced"):f.default.createElement("p",null,"not synced"),f.default.createElement("hr",null),this.renderNewGame(),f.default.createElement("hr",null),this.renderSaves(),f.default.createElement("hr",null),f.default.createElement("hr",null))}}]),t}(f.default.Component),h=function(e){return{gapi:e.gapi}};t.default=(0,y.connect)(h)(g)}).call(t,n(4))},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(254);n.d(t,"persistReducer",function(){return r.a});var o=n(283);n.d(t,"persistCombineReducers",function(){return o.a});var i=n(285);n.d(t,"persistStore",function(){return i.a});var a=n(286);n.d(t,"createMigrate",function(){return a.a});var s=n(287);n.d(t,"createTransform",function(){return s.a});var u=n(269);n.d(t,"getStoredState",function(){return u.a});var l=n(268);n.d(t,"createPersistoid",function(){return l.a});var c=n(270);n.d(t,"purgeStoredState",function(){return c.a});var f=n(204);n.d(t,"KEY_PREFIX",function(){return f.c}),n.d(t,"FLUSH",function(){return f.b}),n.d(t,"REHYDRATE",function(){return f.h}),n.d(t,"PAUSE",function(){return f.d}),n.d(t,"PERSIST",function(){return f.e}),n.d(t,"PURGE",function(){return f.f}),n.d(t,"REGISTER",function(){return f.g}),n.d(t,"DEFAULT_VERSION",function(){return f.a})},282:function(e,t,n){"use strict";function r(e,t,n,r){var a=(r.debug,i({},n));return e&&"object"===(void 0===e?"undefined":o(e))&&Object.keys(e).forEach(function(r){"_persist"!==r&&t[r]===n[r]&&(a[r]=e[r])}),a}t.a=r;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},283:function(e,t,n){"use strict";function r(e,t){return e.stateReconciler=void 0===e.stateReconciler?a.a:e.stateReconciler,Object(i.a)(e,Object(o.combineReducers)(t))}t.a=r;var o=n(14),i=n(254),a=n(284)},284:function(e,t,n){"use strict";function r(e,t,n,r){var s=(r.debug,a({},n));return e&&"object"===(void 0===e?"undefined":i(e))&&Object.keys(e).forEach(function(r){if("_persist"!==r&&t[r]===n[r])return o(n[r])?void(s[r]=a({},s[r],e[r])):void(s[r]=e[r])}),s}function o(e){return null!==e&&!Array.isArray(e)&&"object"===(void 0===e?"undefined":i(e))}t.a=r;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},285:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n){var r=n||!1,o=Object(i.createStore)(l,u,t?t.enhancer:void 0),c=function(e){o.dispatch({type:a.g,key:e})},f=function(t,n,i){var s={type:a.h,payload:n,err:i,key:t};e.dispatch(s),o.dispatch(s),r&&d.getState().bootstrapped&&(r(),r=!1)},d=s({},o,{purge:function(){var t=[];return e.dispatch({type:a.f,result:function(e){t.push(e)}}),Promise.all(t)},flush:function(){var t=[];return e.dispatch({type:a.b,result:function(e){t.push(e)}}),Promise.all(t)},pause:function(){e.dispatch({type:a.d})},persist:function(){e.dispatch({type:a.e,register:c,rehydrate:f})}});return d.persist(),d}t.a=o;var i=n(14),a=(n(254),n(204)),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u={registry:[],bootstrapped:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case a.g:return s({},e,{registry:[].concat(r(e.registry),[t.key])});case a.h:var n=e.registry.indexOf(t.key),o=[].concat(r(e.registry));return o.splice(n,1),s({},e,{registry:o,bootstrapped:0===o.length});default:return e}}},286:function(e,t,n){"use strict";function r(e,t){return function(t,n){if(!t)return Promise.resolve(void 0);var r=t._persist&&void 0!==t._persist.version?t._persist.version:o.a;if(r===n)return Promise.resolve(t);if(r>n)return Promise.resolve(t);var i=Object.keys(e).map(function(e){return parseInt(e)}).filter(function(e){return n>=e&&e>r}).sort(function(e,t){return e-t});try{var a=i.reduce(function(t,n){return e[n](t)},t);return Promise.resolve(a)}catch(e){return Promise.reject(e)}}}t.a=r;var o=n(204)},287:function(e,t,n){"use strict";function r(e,t){function n(e){return!(!o||-1!==o.indexOf(e))||!(!i||-1===i.indexOf(e))}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.whitelist||null,i=r.blacklist||null;return{in:function(t,r,o){return!n(r)&&e?e(t,r,o):t},out:function(e,r,o){return!n(r)&&t?t(e,r,o):e}}}t.a=r},288:function(e,t,n){"use strict";t.__esModule=!0;var r=n(289),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=(0,o.default)("local")},289:function(e,t,n){"use strict";function r(e){var t=(0,i.default)(e);return{getItem:function(e){return new Promise(function(n,r){n(t.getItem(e))})},setItem:function(e,n){return new Promise(function(r,o){r(t.setItem(e,n))})},removeItem:function(e){return new Promise(function(n,r){n(t.removeItem(e))})}}}t.__esModule=!0,t.default=r;var o=n(290),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},290:function(e,t,n){"use strict";function r(){}function o(e){if("object"!==("undefined"==typeof self?"undefined":a(self))||!(e in self))return!1;try{var t=self[e],n="redux-persist "+e+" test";t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch(e){return!1}return!0}function i(e){var t=e+"Storage";return o(t)?self[t]:s}t.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=i;var s={getItem:r,setItem:r,removeItem:r}},291:function(e,t,n){"use strict";function r(e,t,n,r){var s=(r.debug,a({},n));return e&&"object"===(void 0===e?"undefined":i(e))&&Object.keys(e).forEach(function(r){if("_persist"!==r&&t[r]===n[r])return o(n[r])?void(s[r]=a({},s[r],e[r])):void(s[r]=e[r])}),s}function o(e){return null!==e&&!Array.isArray(e)&&"object"===(void 0===e?"undefined":i(e))}t.__esModule=!0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r},292:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.PersistGate=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0);!function(e){e&&e.__esModule}(s);(t.PersistGate=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.state={bootstrapped:!1},i.handlePersistorState=function(){i.props.persistor.getState().bootstrapped&&(i.props.onBeforeLift?Promise.resolve(i.props.onBeforeLift()).then(function(){return i.setState({bootstrapped:!0})}).catch(function(){return i.setState({bootstrapped:!0})}):i.setState({bootstrapped:!0}),i._unsubscribe&&i._unsubscribe())},a=n,o(i,a)}return i(t,e),a(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"==typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(s.PureComponent)).defaultProps={loading:null}}});