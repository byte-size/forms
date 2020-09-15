import t from"vue";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){t.exports=function(){var t="__v-click-outside",e="undefined"!=typeof window,n="undefined"!=typeof navigator,r=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e,n){var i=function(t){var e="function"==typeof t;if(!e&&"object"!=typeof t)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:e?t:t.handler,middleware:t.middleware||function(t){return t},events:t.events||r,isActive:!(!1===t.isActive)}}(n.value),a=i.handler,o=i.middleware;i.isActive&&(e[t]=i.events.map((function(t){return{event:t,handler:function(t){return function(t){var e=t.el,n=t.event,r=t.handler,i=t.middleware,a=n.path||n.composedPath&&n.composedPath(),o=a?a.indexOf(e)<0:!e.contains(n.target);n.target!==e&&o&&i(n)&&r(n)}({event:t,el:e,handler:a,middleware:o})}}})),e[t].forEach((function(n){var r=n.event,i=n.handler;return setTimeout((function(){e[t]&&document.documentElement.addEventListener(r,i,!1)}),0)})))}function a(e){(e[t]||[]).forEach((function(t){return document.documentElement.removeEventListener(t.event,t.handler,!1)})),delete e[t]}var o=e?{bind:i,update:function(t,e){var n=e.value,r=e.oldValue;JSON.stringify(n)!==JSON.stringify(r)&&(a(t),i(t,{value:n}))},unbind:a}:{};return{install:function(t){t.directive("click-outside",o)},directive:o}}()}));function n(t,e,n,r,i,a,o){try{var u=t[a](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,i)}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e,n,r,i,a,o,u,c,s){"boolean"!=typeof o&&(c=u,u=o,o=!1);const f="function"==typeof n?n.options:n;let l;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),r&&(f._scopeId=r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):e&&(l=o?function(t){e.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),l)if(f.functional){const t=f.render;f.render=function(e,n){return l.call(n),t(e,n)}}else{const t=f.beforeCreate;f.beforeCreate=t?[].concat(t,l):[l]}return n}const o={name:"Notification",props:{name:{type:String,required:!0},message:{type:String,default:""}},data:function(){return{isVisible:!0}}};var u=function(){var t=this.$createElement,e=this._self._c||t;return this.isVisible?e("div",{attrs:{"data-ntfc":this.name}},[this._v(this._s(this.message))]):this._e()};u._withStripped=!0;const c=a({render:u,staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);var s={name:"Loading",data:function(){return{isAlive:!0}},props:{state:{type:String,default:"loading"}}};!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}("\n@keyframes blink-data-v-a97393d2 {\n0% {\n    opacity: 0.2;\n}\n20% {\n    opacity: 1;\n}\n100% {\n    opacity: 0.2;\n}\n}\nspan[data-v-a97393d2] {\n  animation-name: blink-data-v-a97393d2;\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  height: 8px;\n  width: 8px;\n  background: #ddd;\n  border-radius: 999px;\n}\nspan[data-v-a97393d2]:nth-child(2) {\n  padding-left: 2px;\n  animation-delay: 0.2s;\n}\nspan[data-v-a97393d2]:nth-child(3) {\n  padding-left: 2px;\n  animation-delay: 0.4s;\n}\n");const f=s;var l=function(){var t=this.$createElement,e=this._self._c||t;return this.isAlive?e("div",{staticClass:"bs-form-loading"},["loading"===this.state?e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%",width:"100%"}},this._l(3,(function(t){return e("span",{key:t})})),0):e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%",width:"100%"}},[e("p",[this._v("✔")])])]):e("i",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{name:"loading"}})};l._withStripped=!0;const d=a({render:l,staticRenderFns:[]},void 0,f,"data-v-a97393d2",!1,void 0,!1,void 0,void 0,void 0);var p=/^(?:submit|button|image|reset|file)$/i,v=/^(?:input|select|textarea|keygen)/i,y=/(\[[^\[\]]*\])/g;function h(t,e,n){if(e.match(y)){!function t(e,n,r){if(0===n.length)return e=r;var i=n.shift(),a=i.match(/^\[(.+?)\]$/);if("[]"===i)return e=e||[],Array.isArray(e)?e.push(t(null,n,r)):(e._values=e._values||[],e._values.push(t(null,n,r))),e;if(a){var o=a[1],u=+o;isNaN(u)?(e=e||{})[o]=t(e[o],n,r):(e=e||[])[u]=t(e[u],n,r)}else e[i]=t(e[i],n,r);return e}(t,function(t){var e=[],n=new RegExp(y),r=/^([^\[\]]*)/.exec(t);for(r[1]&&e.push(r[1]);null!==(r=n.exec(t));)e.push(r[1]);return e}(e),n)}else{var r=t[e];r?(Array.isArray(r)||(t[e]=[r]),t[e].push(n)):t[e]=n}return t}function m(t,e,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=(n=encodeURIComponent(n)).replace(/%20/g,"+"),t+(t?"&":"")+encodeURIComponent(e)+"="+n}var b=function(t,e){"object"!=typeof e?e={hash:!!e}:void 0===e.hash&&(e.hash=!0);for(var n=e.hash?{}:"",r=e.serializer||(e.hash?h:m),i=t&&t.elements?t.elements:[],a=Object.create(null),o=0;o<i.length;++o){var u=i[o];if((e.disabled||!u.disabled)&&u.name&&(v.test(u.nodeName)&&!p.test(u.type))){var c=u.name,s=u.value;if("checkbox"!==u.type&&"radio"!==u.type||u.checked||(s=void 0),e.empty){if("checkbox"!==u.type||u.checked||(s=""),"radio"===u.type&&(a[u.name]||u.checked?u.checked&&(a[u.name]=!0):a[u.name]=!1),null==s&&"radio"==u.type)continue}else if(!s)continue;if("select-multiple"!==u.type)n=r(n,c,s);else{s=[];for(var f=u.options,l=!1,d=0;d<f.length;++d){var y=f[d],b=e.empty&&!y.value,g=y.value||b;y.selected&&g&&(l=!0,n=e.hash&&"[]"!==c.slice(c.length-2)?r(n,c+"[]",y.value):r(n,c,y.value))}!l&&e.empty&&(n=r(n,c,""))}}}if(e.empty)for(var c in a)a[c]||(n=r(n,c,""));return n},g=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],k=g.join(","),w="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function A(t,e){e=e||{};var n,r,i,a=[],o=[],u=t.querySelectorAll(k);for(e.includeContainer&&w.call(t,k)&&(u=Array.prototype.slice.apply(u)).unshift(t),n=0;n<u.length;n++)j(r=u[n])&&(0===(i=O(r))?a.push(r):o.push({documentOrder:n,tabIndex:i,node:r}));return o.sort(x).map((function(t){return t.node})).concat(a)}function j(t){return!(!E(t)||function(t){return function(t){return F(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||O(t)<0)}function E(t){return!(t.disabled||function(t){return F(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}A.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==w.call(t,k)&&j(t)},A.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==w.call(t,S)&&E(t)};var S=g.concat("iframe").join(",");function O(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function x(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function F(t){return"INPUT"===t.tagName}var _,T=A,N=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var r in n)D.call(n,r)&&(t[r]=n[r])}return t},D=Object.prototype.hasOwnProperty;var C,P=(C=[],{activateTrap:function(t){if(C.length>0){var e=C[C.length-1];e!==t&&e.pause()}var n=C.indexOf(t);-1===n||C.splice(n,1),C.push(t)},deactivateTrap:function(t){var e=C.indexOf(t);-1!==e&&C.splice(e,1),C.length>0&&C[C.length-1].unpause()}});function I(t){return setTimeout(t,0)}var R=function(t,e){var n=document,r="string"==typeof t?n.querySelector(t):t,i=N({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),a={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},o={activate:function(t){if(a.active)return;h(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=n.activeElement;var e=t&&t.onActivate?t.onActivate:i.onActivate;e&&e();return c(),o},deactivate:u,pause:function(){if(a.paused||!a.active)return;a.paused=!0,s()},unpause:function(){if(!a.paused||!a.active)return;a.paused=!1,h(),c()}};return o;function u(t){if(a.active){clearTimeout(_),s(),a.active=!1,a.paused=!1,P.deactivateTrap(o);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:i.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:i.returnFocusOnDeactivate)&&I((function(){var t;m((t=a.nodeFocusedBeforeActivation,f("setReturnFocus")||t))})),o}}function c(){if(a.active)return P.activateTrap(o),_=I((function(){m(l())})),n.addEventListener("focusin",p,!0),n.addEventListener("mousedown",d,{capture:!0,passive:!1}),n.addEventListener("touchstart",d,{capture:!0,passive:!1}),n.addEventListener("click",y,{capture:!0,passive:!1}),n.addEventListener("keydown",v,{capture:!0,passive:!1}),o}function s(){if(a.active)return n.removeEventListener("focusin",p,!0),n.removeEventListener("mousedown",d,!0),n.removeEventListener("touchstart",d,!0),n.removeEventListener("click",y,!0),n.removeEventListener("keydown",v,!0),o}function f(t){var e=i[t],r=e;if(!e)return null;if("string"==typeof e&&!(r=n.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(r=e()))throw new Error("`"+t+"` did not return a node");return r}function l(){var t;if(!(t=null!==f("initialFocus")?f("initialFocus"):r.contains(n.activeElement)?n.activeElement:a.firstTabbableNode||f("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return t}function d(t){r.contains(t.target)||(i.clickOutsideDeactivates?u({returnFocus:!T.isFocusable(t.target)}):i.allowOutsideClick&&i.allowOutsideClick(t)||t.preventDefault())}function p(t){r.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),m(a.mostRecentlyFocusedNode||l()))}function v(t){if(!1!==i.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void u();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(h(),t.shiftKey&&t.target===a.firstTabbableNode)return t.preventDefault(),void m(a.lastTabbableNode);if(!t.shiftKey&&t.target===a.lastTabbableNode)t.preventDefault(),m(a.firstTabbableNode)}(t)}function y(t){i.clickOutsideDeactivates||r.contains(t.target)||i.allowOutsideClick&&i.allowOutsideClick(t)||(t.preventDefault(),t.stopImmediatePropagation())}function h(){var t=T(r);a.firstTabbableNode=t[0]||l(),a.lastTabbableNode=t[t.length-1]||l()}function m(t){t!==n.activeElement&&(t&&t.focus?(t.focus(),a.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):m(l()))}};function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){L(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function U(t,e,n){return(U=z()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&V(i,n.prototype),i}).apply(null,arguments)}function B(t){var e="function"==typeof Map?new Map:void 0;return(B=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return U(t,arguments,M(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),V(r,t)})(t)}var H=Object.prototype.toString,J=function(t){if(void 0===t)return"undefined";if(null===t)return"null";var e=typeof t;if("boolean"===e)return"boolean";if("string"===e)return"string";if("number"===e)return"number";if("symbol"===e)return"symbol";if("function"===e)return"GeneratorFunction"===W(t)?"generatorfunction":"function";if(function(t){return Array.isArray?Array.isArray(t):t instanceof Array}(t))return"array";if(function(t){if(t.constructor&&"function"==typeof t.constructor.isBuffer)return t.constructor.isBuffer(t);return!1}(t))return"buffer";if(function(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return!0}catch(t){if(-1!==t.message.indexOf("callee"))return!0}return!1}(t))return"arguments";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return"date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return"error";if(function(t){return t instanceof RegExp||"string"==typeof t.flags&&"boolean"==typeof t.ignoreCase&&"boolean"==typeof t.multiline&&"boolean"==typeof t.global}(t))return"regexp";switch(W(t)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(t){return"function"==typeof t.throw&&"function"==typeof t.return&&"function"==typeof t.next}(t))return"generator";switch(e=H.call(t)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return e.slice(8,-1).toLowerCase().replace(/\s/g,"")};function W(t){return t.constructor?t.constructor.name:null}var K={any:function(t){return void 0!==t},arguments:function(t){return"arguments"===J(t)},array:function(t){return"array"===J(t)},boolean:function(t){return"boolean"===J(t)},buffer:function(t){return"buffer"===J(t)},date:function(t){return"date"===J(t)&&!isNaN(t)},error:function(t){return"error"===J(t)},float32array:function(t){return"float32array"===J(t)},float64array:function(t){return"float64array"===J(t)},function:function(t){return"function"===J(t)},generatorfunction:function(t){return"generatorfunction"===J(t)},int16array:function(t){return"int16array"===J(t)},int32array:function(t){return"int32array"===J(t)},int8array:function(t){return"int8array"===J(t)},map:function(t){return"map"===J(t)},null:function(t){return"null"===J(t)},number:function(t){return"number"===J(t)},object:function(t){return"object"===J(t)},promise:function(t){return"promise"===J(t)},regexp:function(t){return"regexp"===J(t)},set:function(t){return"set"===J(t)},string:function(t){return"string"===J(t)},symbol:function(t){return"symbol"===J(t)},uint16array:function(t){return"uint16array"===J(t)},uint32array:function(t){return"uint32array"===J(t)},uint8array:function(t){return"uint8array"===J(t)},uint8clampedarray:function(t){return"uint8clampedarray"===J(t)},undefined:function(t){return"undefined"===J(t)},weakmap:function(t){return"weakmap"===J(t)},weakset:function(t){return"weakset"===J(t)}},X="production"===process.env.NODE_ENV;function G(t,e){if(!t)throw X?new Error("Invariant failed"):new Error("Invariant failed: "+(e||""))}var Y=function(t){var e,n;function r(e){var n;G(e.length>0,"StructError requires being passed a failure, but received: "+e);var i=e[0],a=i.path,o=i.value,u=i.type,c=i.branch,s=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(i,["path","value","type","branch"]),f="Expected a value of type `"+u+"`"+(a.length?" for `"+a.join(".")+"`":"")+" but received `"+JSON.stringify(o)+"`.";return(n=t.call(this,f)||this).type=u,n.value=o,Object.assign(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n),s),n.path=a,n.branch=c,n.failures=e,n.stack=(new Error).stack,n.__proto__=r.prototype,n}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r}(B(TypeError)),Q=Symbol("STRUCT"),Z=function(t){var e=t.struct.Error,n=function t(e){return t.assert(e)};return Object.defineProperty(n,Q,{value:!0}),n.kind=t.kind,n.type=t.type,n.default=function(){return"function"==typeof t.defaults?t.defaults():t.defaults},n.test=function(t){return!n.check(t,[t],[])[0]},n.assert=function(t){var r=n.check(t,[t],[]),i=r[0],a=r[1];if(i)throw new e(i);return a},n.validate=function(t){var r=n.check(t,[t],[]),i=r[0],a=r[1];return i?[new e(i)]:[void 0,a]},n.check=function(t,e,r){return void 0===t&&(t=n.default()),[[n.fail({value:t,branch:e,path:r})]]},n.fail=function(t){return q({},t,{type:"type"in t?t.type:n.type})},n},tt=function(t,e,n){if("function"==typeof(r=t)&&r[Q])return t;var r;if(Array.isArray(t)){if(1===t.length){var i=t[0];return n.array([i],e)}if(t.length>1)return n.tuple(t,e)}if("function"==typeof t)return n.function(t,e);if("object"==typeof t)return n.object(t,e);if("string"==typeof t){var a,o=!1;if(t.endsWith("?")&&(o=!0,t=t.slice(0,-1)),t.includes("|")){var u=t.split(/\s*\|\s*/g);a=n.union(u,e)}else if(t.includes("&")){var c=t.split(/\s*&\s*/g);a=n.intersection(c,e)}else a=n.scalar(t,e);return o&&(a=n.union([a,"undefined"],void 0)),a}throw new Error("A schema definition must be an object, array, string or function, but you passed: "+t)},et=function(t,e,n){G(Array.isArray(t)&&0!==t.length,"Union structs must be defined as a non-empty array, but you passed: "+t);var r=t.map((function(t){return n(t)})),i=r.map((function(t){return t.type})).join(" | "),a=Z({kind:"union",type:i,defaults:e,struct:n});return a.check=function(t,e,n){void 0===t&&(t=a.default());var i=r,o=Array.isArray(i),u=0;for(i=o?i:i[Symbol.iterator]();;){var c;if(o){if(u>=i.length)break;c=i[u++]}else{if((u=i.next()).done)break;c=u.value}var s=c.check(t,e,n),f=s[0],l=s[1];if(!f)return[void 0,l]}return[[a.fail({value:t,branch:e,path:n})]]},a},nt=function(t){void 0===t&&(t={});var e=function t(e,n){return tt(e,n,t)};return e.array=function(t,n){return function(t,e,n){G(Array.isArray(t)&&1===t.length,"Array structs must be defined as an array with one element, but you passed: "+t);var r=n(t[0],void 0),i=Z({kind:"array",type:r.type+"[]",defaults:e,struct:n});return i.check=function(t,e,n){if(void 0===t&&(t=i.default()),!Array.isArray(t))return[[i.fail({value:t,branch:e,path:n})]];for(var a=[],o=[],u=0;u<t.length;u++){var c=t[u],s=r.check(c,e.concat(c),n.concat(u)),f=s[0],l=s[1];f?o.push.apply(o,f):a[u]=l}return o.length?[o]:[void 0,a]},i}(t,n,e)},e.dynamic=function(t,n){return function(t,e,n){G("function"==typeof t,"Dynamic structs must be defined as a function, but you passed: "+t);var r=Z({kind:"dynamic",type:"dynamic<…>",defaults:e,struct:n});return r.check=function(e,n,i){return void 0===e&&(e=r.default()),t(e,n,i).check(e,n,i)},r}(t,n,e)},e.enum=function(t,n){return function(t,e,n){G(Array.isArray(t),"Enum structs must be defined as an array, but you passed: "+t);var r=n((function(e){return t.includes(e)}),e);return r.kind="enum",r.type=t.map((function(t){return"string"==typeof t?'"'+t+'"':""+t})).join(" | "),r}(t,n,e)},e.function=function(t,n){return function(t,e,n){var r=Z({kind:"function",type:"function<…>",defaults:e,struct:n});return r.check=function(e,n,i){void 0===e&&(e=r.default());var a=t(e,n,i);if(!0===a)return[void 0,e];var o=[];if(!1===a)o.push(r.fail({value:e,branch:n,path:i}));else if(Array.isArray(a)&&a.length>0){var u=a,c=Array.isArray(u),s=0;for(u=c?u:u[Symbol.iterator]();;){var f;if(c){if(s>=u.length)break;f=u[s++]}else{if((s=u.next()).done)break;f=s.value}var l=f;o.push(r.fail(q({value:e,branch:n,path:i},l)))}}else"object"==typeof a?o.push(r.fail(q({value:e,branch:n,path:i},a))):G(!1,"Validator functions must return a boolean, a failure object, or an array of failure objects, but you passed: "+a);return[o]},r}(t,n,e)},e.instance=function(t,n){return function(t,e,n){G("function"==typeof t,"Instance structs must be defined as a function, but you passed: "+t);var r=n((function(e){return e instanceof t}),e);return r.kind="instance",r.type="instance<"+t.name+">",r}(t,n,e)},e.interface=function(t,n){return function(t,e,n){G("object"==typeof t,"Interface structs must be defined as an object, but you passed: "+t);var r={};for(var i in t)r[i]=n(t[i]);var a=Z({kind:"interface",type:"interface<{"+Object.keys(t).join()+"}>",defaults:e,struct:n});return a.check=function(t,e,n){if(void 0===t&&(t=a.default()),"object"!=typeof t&&"function"!=typeof t)return[[a.fail({value:t,branch:e,path:n})]];var i=[];for(var o in r){var u=r[o],c=t[o],s=u.check(c,e.concat(c),n.concat(o))[0];s&&i.push.apply(i,s)}return i.length?[i]:[void 0,t]},a}(t,n,e)},e.intersection=function(t,n){return function(t,e,n){G(Array.isArray(t)&&0!==t.length,"Intersection structs must be defined as a non-empty array, but you passed: "+t);var r=t.map((function(t){return n(t)})),i=r.map((function(t){return t.type})).join(" & "),a=Z({kind:"intersection",type:i,defaults:e,struct:n});return a.check=function(t,e,n){void 0===t&&(t=a.default());var i=t,o=r,u=Array.isArray(o),c=0;for(o=u?o:o[Symbol.iterator]();;){var s;if(u){if(c>=o.length)break;s=o[c++]}else{if((c=o.next()).done)break;s=c.value}var f=s.check(t,e,n),l=f[0],d=f[1];if(l)return[[a.fail({value:t,branch:e,path:n})]];i=d}return[void 0,i]},a}(t,n,e)},e.lazy=function(t,n){return function(t,e,n){G("function"==typeof t,"Lazy structs must be defined as a function, but you passed: "+t);var r=Z({kind:"lazy",type:"lazy<…>",defaults:e,struct:n});return r.check=function(){return Object.assign(r,t()),r.check.apply(r,arguments)},r}(t,n,e)},e.literal=function(t,n){return function(t,e,n){var r=n((function(e){return e===t}),e);return r.kind="literal",r.type="string"==typeof t?'"'+t+'"':""+t,r}(t,n,e)},e.object=function(t,n){return function(t,e,n){G("object"==typeof t,"Object structs must be defined as an object, but you passed: "+t);var r={};for(var i in t)r[i]=n(t[i]);var a=Z({kind:"object",type:"{"+Object.keys(t).join()+"}",defaults:e,struct:n});return a.check=function(t,e,n){void 0===t&&(t=a.default());var i=a.default();if(void 0===t&&(t=i),"object"!==J(t))return[[a.fail({value:t,branch:e,path:n})]];var o={},u=[],c=new Set(Object.keys(r).concat(Object.keys(t))),s=Array.isArray(c),f=0;for(c=s?c:c[Symbol.iterator]();;){var l;if(s){if(f>=c.length)break;l=c[f++]}else{if((f=c.next()).done)break;l=f.value}var d=l,p=t[d],v=n.concat(d),y=e.concat(p),h=r[d];if(void 0===p&&null!=i&&d in i&&(p="function"==typeof i[d]?i[d](t,e,n):i[d]),d in r){var m=h.check(p,y,v),b=m[0],g=m[1];b?u.push.apply(u,b):void 0!==g&&d in r&&(o[d]=g)}else u.push(a.fail({type:void 0,value:p,path:v,branch:t}))}return u.length?[u]:[void 0,o]},a}(t,n,e)},e.optional=function(t,n){return et([t,"undefined"],n,e)},e.partial=function(t,n){return function(t,e,n){G("object"==typeof t,"Partial structs must be defined as an object, but you passed: "+t);var r={};for(var i in t)r[i]=n.union([t[i],"undefined"]);var a=Z({kind:"object",type:"{"+Object.keys(t).join()+"}",defaults:e,struct:n});return a.check=function(t,e,n){void 0===t&&(t=a.default());var i=a.default();if(void 0===t&&(t=i),"object"!==J(t))return[[a.fail({value:t,branch:e,path:n})]];var o={},u=[],c=t,s=Array.isArray(c),f=0;for(c=s?c:c[Symbol.iterator]();;){var l;if(s){if(f>=c.length)break;l=c[f++]}else{if((f=c.next()).done)break;l=f.value}var d=l,p=t[d],v=n.concat(d),y=e.concat(p),h=r[d];if(void 0===p&&null!=i&&d in i&&(p="function"==typeof i[d]?i[d](t,e,n):i[d]),d in r){var m=h.check(p,y,v),b=m[0],g=m[1];b?u.push.apply(u,b):void 0!==g&&d in r&&(o[d]=g)}else u.push(a.fail({type:void 0,value:p,path:v,branch:t}))}return u.length?[u]:[void 0,o]},a}(t,n,e)},e.pick=function(t,n){return function(t,e,n){G("object"==typeof t,"Pick structs must be defined as an object, but you passed: "+t);var r={};for(var i in t)r[i]=n(t[i]);var a=Z({kind:"pick",type:"pick<{"+Object.keys(t).join()+"}>",defaults:e,struct:n});return a.check=function(t,e,n){void 0===t&&(t=a.default());var i=a.default();if(void 0===t&&(t=i),"object"!==J(t))return[[a.fail({value:t,branch:e,path:n})]];var o={},u=[];for(var c in r){var s=t[c],f=n.concat(c),l=e.concat(s),d=r[c];void 0===s&&null!=i&&c in i&&(s="function"==typeof i[c]?i[c](t,e,n):i[c]);var p=d.check(s,l,f),v=p[0],y=p[1];v?u.push.apply(u,v):void 0!==y&&c in r&&(o[c]=y)}return u.length?[u]:[void 0,o]},a}(t,n,e)},e.record=function(t,n){return function(t,e,n){G(Array.isArray(t)&&2===t.length,"Record structs must be defined as an array with two elements, but you passed: "+t);var r=n(t[0]),i=n(t[1]),a=Z({kind:"record",type:"record<"+r.type+","+i.type+">",defaults:e,struct:n});return a.check=function(t,e,n){var o=a.default();if(t=o?q({},o,{},t):t,"object"!==J(t))return[[a.fail({value:t,branch:e,path:n})]];var u={},c=[];for(var s in t){var f=t[s],l=n.concat(s),d=e.concat(f),p=r.check(s,d,l),v=p[0],y=p[1];if(v)c.push.apply(c,v);else{var h=i.check(f,d,l),m=h[0],b=h[1];m?c.push.apply(c,m):u[y]=b}}return c.length?[c]:[void 0,u]},a}(t,n,e)},e.scalar=function(t,n){return function(t,e,n){G("string"==typeof t,"Scalar structs must be defined as a string, but you passed: "+t);var r=n.Types;G(t in r,'No struct validator function found for type "'+t+'".');var i=n(r[t],e);return i.kind="scalar",i.type=t,i}(t,n,e)},e.size=function(t,n){return function(t,e,n){G(Array.isArray(t)&&2===t.length&&t.every((function(t){return"number"==typeof t})),"Size structs must be defined as an array with two number elements, but you passed: "+t);var r=t[0],i=t[1],a=n((function(t){return null!=t&&"number"==typeof t.length&&t.length>=r&&t.length<=i}),e);return a.kind="size",a.type="size<"+r+","+i+">",a}(t,n,e)},e.tuple=function(t,n){return function(t,e,n){G(Array.isArray(t),"Tuple structs must be defined as an array, but you passed: "+t);var r=t.map((function(t){return n(t)})),i=Z({kind:"tuple",type:"["+r.map((function(t){return t.type})).join()+"]",defaults:e,struct:n});return i.check=function(t,e,n){if(void 0===t&&(t=i.default()),!Array.isArray(t))return[[i.fail({value:t,branch:e,path:n})]];for(var a=[],o=[],u=Math.max(t.length,r.length),c=0;c<u;c++){var s=r[c],f=t[c],l=n.concat(c),d=e.concat(f);if(s){var p=s.check(f,d,l),v=p[0],y=p[1];v?o.push.apply(o,v):a[c]=y}else o.push(i.fail({type:void 0,value:f,path:l,branch:d}))}return o.length?[o]:[void 0,a]},i}(t,n,e)},e.union=function(t,n){return et(t,n,e)},e.Error=t.error||Y,e.Types=q({},K,{},t.types),e}();const rt={name:"FormContainer",props:{structSchema:{type:Object,required:!0},transportFunction:{type:Object,required:!0}},data:function(){return{structModel:null,yupSchema:null,trap:null,isActive:!1,domForm:null,loadingElement:null}},mounted:function(){this.domForm=this.$refs.form,this.initStruct(),this.initValidatorElements(),this.initTextAreas(),this.initFocusTrap()},methods:{initStruct:function(){this.structModel=nt(this.structSchema)},initTextAreas:function(){this.domForm.querySelectorAll("[data-autoresize]").forEach((function(t){t.style.boxSizing="border-box";var e=t.offsetHeight-t.clientHeight;t.addEventListener("input",(function(t){t.target.style.height="auto",t.target.style.height=t.target.scrollHeight+e+"px"})),t.removeAttribute("data-autoresize")}))},initFocusTrap:function(){this.trap=R(this.$refs.form,{clickOutsideDeactivates:!0})},initValidatorElements:function(){var e=this;Object.keys(this.structSchema).map((function(n){var r=e.domForm.querySelector("i[name=".concat(n,"]"));if(r){var i=r.classList.value;new(t.extend(c))({propsData:{name:n}}).$mount(r).$el.className=i}}))},trapFocus:function(){this.isActive||this.trap.activate(),this.isActive=!0},unTrapFocus:function(){this.isActive&&this.trap.deactivate(),this.isActive=!1},validateForm:function(){var t=this;return new Promise((function(e){var n=b(t.$refs.form,{hash:!0}),i=r(t.structModel.validate(n),2),a=i[0],o=i[1];if(a){var u=a.path,c=a.value;e({success:!1,data:{path:u,value:c,message:"Form Container --\x3e Validation error in ".concat(u[0],": ").concat(c)}}),t.displayValidationErrors(u[0],c)}e({success:!0,data:o})}))},displayValidationErrors:function(t,e){var n=this.domForm.querySelector("[data-ntfc=".concat(t,"]"));n.innerHTML=e,n.style.display="block"},clearValidationErrors:function(t){this.domForm.querySelector("[data-validation-message=".concat(t,"]")).innerHTML=""},toggleSubmitButton:function(t){this.domForm.querySelector("button[type=submit]").disabled=!t},submitForm:function(t){var e=this;t&&t.preventDefault(),this.loadingElement&&"success"===this.loadingElement.state?this.reset():this.validateForm().then(function(){var t,r=(t=regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.success){t.next=9;break}return e.triggerLoadingState("loading"),t.next=4,e.transportFunction.func(n.data);case 4:r=t.sent,e.$bsFormsDebug&&(console.log("BS Forms Transport Function Response:"),console.log(r)),e.transportFunction.success(r)?(e.triggerLoadingState("success"),e.$emit("success",r)):e.$emit("error",r),t.next=10;break;case 9:e.$emit("warning",n.data);case 10:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(i,a){var o=t.apply(e,r);function u(t){n(o,i,a,u,c,"next",t)}function c(t){n(o,i,a,u,c,"throw",t)}u(void 0)}))});return function(t){return r.apply(this,arguments)}}())},triggerLoadingState:function(e){if("loading"===e){this.domForm.querySelector("button[type=submit]").setAttribute("disabled",!0);var n=this.domForm.querySelector("i[name=loading]");if(n){var r=n.classList.value,i=new(t.extend(d));this.loadingElement=i.$mount(n),this.loadingElement.$el.className="".concat(r," bs-form-loading")}}else if("success"===e){this.domForm.querySelector("button[type=submit]").removeAttribute("disabled"),this.loadingElement&&(this.loadingElement.state="success")}},reset:function(){var t=this;this.domForm.reset(),this.domForm.querySelector("button[type=submit]").removeAttribute("disabled");var e=this.domForm.querySelector(".bs-form-loading").classList.value;this.loadingElement.isAlive=!1;this.domForm.querySelector("i[name=loading]");this.$nextTick((function(){t.loadingElement.$el.classList=e,t.loadingElement=null}))}}};var it=function(){var t=this.$createElement;return(this._self._c||t)("form",{directives:[{name:"click-outside",rawName:"v-click-outside",value:this.unTrapFocus,expression:"unTrapFocus"}],ref:"form",on:{submit:this.submitForm,click:this.trapFocus,focus:this.trapFocus}},[this._t("default")],2)};it._withStripped=!0;const at=a({render:it,staticRenderFns:[]},void 0,rt,void 0,!1,void 0,!1,void 0,void 0,void 0);var ot={install:function(t,n){t.use(e),t.component("bs-form",at),n.debug&&(t.prototype.$bsFormsDebug=!0)}};export default ot;
