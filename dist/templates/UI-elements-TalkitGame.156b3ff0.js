webpackJsonp([25],{492:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding: 20px;\n    background: orange;\n"],["\n    padding: 20px;\n    background: orange;\n"]),c=n(0),f=a(c),p=(n(33),n(68)),d=a(p),b=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(n.props.tree){var a=n.extractGameIds(n.props.tree);if(n.onInput=n.onInput.bind(n),n.getVariableValue=n.getVariableValue.bind(n),n.getComparisonValue=n.getComparisonValue.bind(n),a){n.state={ids:a.map,id:a.id,gamePlaying:!0};var r=a.map.get(a.id);n.playNodes(r)}}return n}return o(t,e),s(t,[{key:"getVariableValue",value:function(e,t){var n=e.substr(0,1),a=t,r=this.state[e]?this.state[e]:0;return"a"==n?a=parseInt(t):"r"==n?(a=parseInt(t))+r:a}},{key:"getComparisonValue",value:function(e,t){var n=e.substr(0,1),a=t;return"a"==n||"r"==n?a=parseInt(t):a}},{key:"playNodes",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("Set"==e.type){var a=this.getVariableValue(e.variable,e.value);n[e.variable]=a;var i=this.state.ids.get(e.next);this.setState(r({},e.variable,a)),this.playNodes(i,n)}else if("Branch"==e.type){var u=e.branches.filter(function(a){if("_default"==a.state)return!1;var r=a.state.substr(0,2),i=e.variable,u=t.getComparisonValue(i,a.state.substr(2)),o=t.state[i]?t.state[i]:n[i];return"gt"==r&&o?o>u:"lt"==r&&o?o<u:"eq"==r&&o?o==u:void 0});u.length<=0&&(u=e.branches.filter(function(e){return"_default"==e.state}));var o=this.state.ids.get(u[0].value);this.playNodes(o,n)}else e.next||e.choices?(n.id=e.id,this.setState({id:e.id})):this.setState({gamePlaying:!1})}},{key:"extractGameIds",value:function(e){var t=new Map,n=null;return e&&e.map(function(e,a){0===a&&(n=e.id),t.set(e.id,e)}),n?{map:t,id:n}:null}},{key:"onInput",value:function(e){var t=this.state.ids.get(e);this.playNodes(t)}},{key:"renderGame",value:function(){var e=this,t=this.state.ids.get(this.state.id),n=[];return this.state.gamePlaying&&t?(t.name&&n.push(f.default.createElement("p",null,t.name)),t.choices&&t.choices.map(function(t){n.push(f.default.createElement("button",{onClick:function(){e.onInput(t.id)}},t.title))}),t.next&&n.push(f.default.createElement("button",{onClick:function(){e.onInput(t.next)}},t.name))):n.push(f.default.createElement("p",null,"game finished")),n}},{key:"render",value:function(){return this.state.ids?f.default.createElement(h,null,this.renderGame()):f.default.createElement("p",null,"no ids found")}}]),t}(f.default.Component);t.default=b;var h=d.default.div(l)}});