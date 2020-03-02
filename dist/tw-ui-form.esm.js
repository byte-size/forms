function serialize(e,t){"object"!=typeof t?t={hash:!!t}:void 0===t.hash&&(t.hash=!0);for(var r=t.hash?{}:"",n=t.serializer||(t.hash?hash_serializer:str_serialize),a=e&&e.elements?e.elements:[],i=Object.create(null),o=0;o<a.length;++o){var u=a[o];if((t.disabled||!u.disabled)&&u.name&&(k_r_success_contrls.test(u.nodeName)&&!k_r_submitter.test(u.type))){var c=u.name,s=u.value;if("checkbox"!==u.type&&"radio"!==u.type||u.checked||(s=void 0),t.empty){if("checkbox"!==u.type||u.checked||(s=""),"radio"===u.type&&(i[u.name]||u.checked?u.checked&&(i[u.name]=!0):i[u.name]=!1),void 0==s&&"radio"==u.type)continue}else if(!s)continue;if("select-multiple"!==u.type)r=n(r,c,s);else{s=[];for(var f=u.options,l=!1,d=0;d<f.length;++d){var p=f[d],v=t.empty&&!p.value,y=p.value||v;p.selected&&y&&(l=!0,r=t.hash&&"[]"!==c.slice(c.length-2)?n(r,c+"[]",p.value):n(r,c,p.value))}!l&&t.empty&&(r=n(r,c,""))}}}if(t.empty)for(var c in i)i[c]||(r=n(r,c,""));return r}function parse_keys(e){var t=[],r=/^([^\[\]]*)/,n=new RegExp(brackets),a=r.exec(e);for(a[1]&&t.push(a[1]);null!==(a=n.exec(e));)t.push(a[1]);return t}function hash_assign(e,t,r){if(0===t.length)return e=r;var n=t.shift(),a=n.match(/^\[(.+?)\]$/);if("[]"===n)return e=e||[],Array.isArray(e)?e.push(hash_assign(null,t,r)):(e._values=e._values||[],e._values.push(hash_assign(null,t,r))),e;if(a){var i=a[1],o=+i;isNaN(o)?(e=e||{})[i]=hash_assign(e[i],t,r):(e=e||[])[o]=hash_assign(e[o],t,r)}else e[n]=hash_assign(e[n],t,r);return e}function hash_serializer(e,t,r){if(t.match(brackets))hash_assign(e,parse_keys(t),r);else{var n=e[t];n?(Array.isArray(n)||(e[t]=[n]),e[t].push(r)):e[t]=r}return e}function str_serialize(e,t,r){return r=r.replace(/(\r)?\n/g,"\r\n"),r=encodeURIComponent(r),r=r.replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+r}function tabbable(e,t){t=t||{};var r=[],n=[],a=e.querySelectorAll(candidateSelector);t.includeContainer&&matches.call(e,candidateSelector)&&(a=Array.prototype.slice.apply(a)).unshift(e);var i,o,u;for(i=0;i<a.length;i++)isNodeMatchingSelectorTabbable(o=a[i])&&(0===(u=getTabindex(o))?r.push(o):n.push({documentOrder:i,tabIndex:u,node:o}));return n.sort(sortOrderedTabbables).map(function(e){return e.node}).concat(r)}function isNodeMatchingSelectorTabbable(e){return!(!isNodeMatchingSelectorFocusable(e)||isNonTabbableRadio(e)||getTabindex(e)<0)}function isTabbable(e){if(!e)throw new Error("No node provided");return!1!==matches.call(e,candidateSelector)&&isNodeMatchingSelectorTabbable(e)}function isNodeMatchingSelectorFocusable(e){return!(e.disabled||isHiddenInput(e)||isHidden(e))}function isFocusable(e){if(!e)throw new Error("No node provided");return!1!==matches.call(e,focusableCandidateSelector)&&isNodeMatchingSelectorFocusable(e)}function getTabindex(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?isContentEditable(e)?0:e.tabIndex:t}function sortOrderedTabbables(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function isContentEditable(e){return"true"===e.contentEditable}function isInput(e){return"INPUT"===e.tagName}function isHiddenInput(e){return isInput(e)&&"hidden"===e.type}function isRadio(e){return isInput(e)&&"radio"===e.type}function isNonTabbableRadio(e){return isRadio(e)&&!isTabbableRadio(e)}function getCheckedRadio(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}function isTabbableRadio(e){if(!e.name)return!0;var t=getCheckedRadio(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}function isHidden(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}function extend(){for(var e=arguments,t={},r=0;r<arguments.length;r++){var n=e[r];for(var a in n)hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}function focusTrap(e,t){function r(e){if(!k.active){b(),k.active=!0,k.paused=!1,k.nodeFocusedBeforeActivation=m.activeElement;var t=e&&e.onActivate?e.onActivate:g.onActivate;return t&&t(),o(),O}}function n(e){if(k.active){clearTimeout(activeFocusDelay),u(),k.active=!1,k.paused=!1,activeFocusTraps.deactivateTrap(O);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:g.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:g.returnFocusOnDeactivate)&&delay(function(){h(f(k.nodeFocusedBeforeActivation))}),O}}function a(){!k.paused&&k.active&&(k.paused=!0,u())}function i(){k.paused&&k.active&&(k.paused=!1,b(),o())}function o(){if(k.active)return activeFocusTraps.activateTrap(O),activeFocusDelay=delay(function(){h(s())}),m.addEventListener("focusin",d,!0),m.addEventListener("mousedown",l,{capture:!0,passive:!1}),m.addEventListener("touchstart",l,{capture:!0,passive:!1}),m.addEventListener("click",y,{capture:!0,passive:!1}),m.addEventListener("keydown",p,{capture:!0,passive:!1}),O}function u(){if(k.active)return m.removeEventListener("focusin",d,!0),m.removeEventListener("mousedown",l,!0),m.removeEventListener("touchstart",l,!0),m.removeEventListener("click",y,!0),m.removeEventListener("keydown",p,!0),O}function c(e){var t=g[e],r=t;if(!t)return null;if("string"==typeof t&&!(r=m.querySelector(t)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof t&&!(r=t()))throw new Error("`"+e+"` did not return a node");return r}function s(){var e;if(!(e=null!==c("initialFocus")?c("initialFocus"):_.contains(m.activeElement)?m.activeElement:k.firstTabbableNode||c("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return e}function f(e){var t=c("setReturnFocus");return t||e}function l(e){if(!_.contains(e.target))return g.clickOutsideDeactivates?void n({returnFocus:!tabbable_1.isFocusable(e.target)}):void(g.allowOutsideClick&&g.allowOutsideClick(e)||e.preventDefault())}function d(e){_.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),h(k.mostRecentlyFocusedNode||s()))}function p(e){return!1!==g.escapeDeactivates&&isEscapeEvent(e)?(e.preventDefault(),void n()):isTabEvent(e)?void v(e):void 0}function v(e){return b(),e.shiftKey&&e.target===k.firstTabbableNode?(e.preventDefault(),void h(k.lastTabbableNode)):e.shiftKey||e.target!==k.lastTabbableNode?void 0:(e.preventDefault(),void h(k.firstTabbableNode))}function y(e){g.clickOutsideDeactivates||_.contains(e.target)||g.allowOutsideClick&&g.allowOutsideClick(e)||(e.preventDefault(),e.stopImmediatePropagation())}function b(){var e=tabbable_1(_);k.firstTabbableNode=e[0]||s(),k.lastTabbableNode=e[e.length-1]||s()}function h(e){if(e!==m.activeElement){if(!e||!e.focus)return void h(s());e.focus(),k.mostRecentlyFocusedNode=e,isSelectableInput(e)&&e.select()}}var m=document,_="string"==typeof e?m.querySelector(e):e,g=immutable({returnFocusOnDeactivate:!0,escapeDeactivates:!0},t),k={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},O={activate:r,deactivate:n,pause:a,unpause:i};return O}function isSelectableInput(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}function isEscapeEvent(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}function isTabEvent(e){return"Tab"===e.key||9===e.keyCode}function delay(e){return setTimeout(e,0)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=arguments,r=1;r<arguments.length;r++){var n=null!=t[r]?t[r]:{};r%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _construct(e,t,r){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&_setPrototypeOf(a,r.prototype),a}).apply(null,arguments)}function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(e){function r(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(r,e)})(e)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ctorName(e){return e.constructor?e.constructor.name:null}function isArray(e){return Array.isArray?Array.isArray(e):e instanceof Array}function isError(e){return e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit}function isDate(e){return e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate}function isRegexp(e){return e instanceof RegExp||"string"==typeof e.flags&&"boolean"==typeof e.ignoreCase&&"boolean"==typeof e.multiline&&"boolean"==typeof e.global}function isGeneratorFn(e,t){return"GeneratorFunction"===ctorName(e)}function isGeneratorObj(e){return"function"==typeof e.throw&&"function"==typeof e.return&&"function"==typeof e.next}function isArguments(e){try{if("number"==typeof e.length&&"function"==typeof e.callee)return!0}catch(e){if(-1!==e.message.indexOf("callee"))return!0}return!1}function isBuffer(e){return!(!e.constructor||"function"!=typeof e.constructor.isBuffer)&&e.constructor.isBuffer(e)}function invariant(e,t){if(!e)throw isProduction?new Error(prefix):new Error(prefix+": "+(t||""))}function normalizeComponent(e,t,r,n,a,i,o,u,c,s){"boolean"!=typeof o&&(c=u,u=o,o=!1);var f="function"==typeof r?r.options:r;e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,a&&(f.functional=!0)),n&&(f._scopeId=n);var l;if(i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=l):t&&(l=o?function(e){t.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,u(e))}),l)if(f.functional){var d=f.render;f.render=function(e,t){return l.call(t),d(e,t)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,l):[l]}return r}var k_r_submitter=/^(?:submit|button|image|reset|file)$/i,k_r_success_contrls=/^(?:input|select|textarea|keygen)/i,brackets=/(\[[^\[\]]*\])/g,formSerialize=serialize,candidateSelectors=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],candidateSelector=candidateSelectors.join(","),matches="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;tabbable.isTabbable=isTabbable,tabbable.isFocusable=isFocusable;var focusableCandidateSelector=candidateSelectors.concat("iframe").join(","),tabbable_1=tabbable,immutable=extend,hasOwnProperty=Object.prototype.hasOwnProperty,activeFocusDelay,activeFocusTraps=function(){var e=[];return{activateTrap:function(t){if(e.length>0){var r=e[e.length-1];r!==t&&r.pause()}var n=e.indexOf(t);-1===n?e.push(t):(e.splice(n,1),e.push(t))},deactivateTrap:function(t){var r=e.indexOf(t);-1!==r&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}}}(),focusTrap_1=focusTrap,toString=Object.prototype.toString,kindOf=function(e){if(void 0===e)return"undefined";if(null===e)return"null";var t=typeof e;if("boolean"===t)return"boolean";if("string"===t)return"string";if("number"===t)return"number";if("symbol"===t)return"symbol";if("function"===t)return isGeneratorFn(e)?"generatorfunction":"function";if(isArray(e))return"array";if(isBuffer(e))return"buffer";if(isArguments(e))return"arguments";if(isDate(e))return"date";if(isError(e))return"error";if(isRegexp(e))return"regexp";switch(ctorName(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(isGeneratorObj(e))return"generator";switch(t=toString.call(e)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")},Types={any:function(e){return void 0!==e},arguments:function(e){return"arguments"===kindOf(e)},array:function(e){return"array"===kindOf(e)},boolean:function(e){return"boolean"===kindOf(e)},buffer:function(e){return"buffer"===kindOf(e)},date:function(e){return"date"===kindOf(e)&&!isNaN(e)},error:function(e){return"error"===kindOf(e)},float32array:function(e){return"float32array"===kindOf(e)},float64array:function(e){return"float64array"===kindOf(e)},function:function(e){return"function"===kindOf(e)},generatorfunction:function(e){return"generatorfunction"===kindOf(e)},int16array:function(e){return"int16array"===kindOf(e)},int32array:function(e){return"int32array"===kindOf(e)},int8array:function(e){return"int8array"===kindOf(e)},map:function(e){return"map"===kindOf(e)},null:function(e){return"null"===kindOf(e)},number:function(e){return"number"===kindOf(e)},object:function(e){return"object"===kindOf(e)},promise:function(e){return"promise"===kindOf(e)},regexp:function(e){return"regexp"===kindOf(e)},set:function(e){return"set"===kindOf(e)},string:function(e){return"string"===kindOf(e)},symbol:function(e){return"symbol"===kindOf(e)},uint16array:function(e){return"uint16array"===kindOf(e)},uint32array:function(e){return"uint32array"===kindOf(e)},uint8array:function(e){return"uint8array"===kindOf(e)},uint8clampedarray:function(e){return"uint8clampedarray"===kindOf(e)},undefined:function(e){return"undefined"===kindOf(e)},weakmap:function(e){return"weakmap"===kindOf(e)},weakset:function(e){return"weakset"===kindOf(e)}},isProduction="production"===process.env.NODE_ENV,prefix="Invariant failed",StructError=function(e){function t(r){var n;invariant(r.length>0,"StructError requires being passed a failure, but received: "+r);var a=r[0],i=a.path,o=a.value,u=a.type,c=a.branch,s=_objectWithoutPropertiesLoose(a,["path","value","type","branch"]),f="Expected a value of type `"+u+"`"+(i.length?" for `"+i.join(".")+"`":"")+" but received `"+JSON.stringify(o)+"`.";return n=e.call(this,f)||this,n.type=u,n.value=o,Object.assign(_assertThisInitialized(n),s),n.path=i,n.branch=c,n.failures=r,n.stack=(new Error).stack,n.__proto__=t.prototype,n}return _inheritsLoose(t,e),t}(_wrapNativeSuper(TypeError)),STRUCT=Symbol("STRUCT"),isStruct=function(e){return"function"==typeof e&&e[STRUCT]},createStruct=function(e){var t=e.struct.Error,r=function e(t){return e.assert(t)};return Object.defineProperty(r,STRUCT,{value:!0}),r.kind=e.kind,r.type=e.type,r.default=function(){return"function"==typeof e.defaults?e.defaults():e.defaults},r.test=function(e){return!r.check(e,[e],[])[0]},r.assert=function(e){var n=r.check(e,[e],[]),a=n[0],i=n[1];if(a)throw new t(a);return i},r.validate=function(e){var n=r.check(e,[e],[]),a=n[0],i=n[1];return a?[new t(a)]:[void 0,i]},r.check=function(e,t,n){return void 0===e&&(e=r.default()),[[r.fail({value:e,branch:t,path:n})]]},r.fail=function(e){return _objectSpread2({},e,{type:"type"in e?e.type:r.type})},r},createArray=function(e,t,r){invariant(Array.isArray(e)&&1===e.length,"Array structs must be defined as an array with one element, but you passed: "+e);var n=r(e[0],void 0),a=createStruct({kind:"array",type:n.type+"[]",defaults:t,struct:r});return a.check=function(e,t,r){if(void 0===e&&(e=a.default()),!Array.isArray(e))return[[a.fail({value:e,branch:t,path:r})]];for(var i=[],o=[],u=0;u<e.length;u++){var c=e[u],s=n.check(c,t.concat(c),r.concat(u)),f=s[0],l=s[1];f?o.push.apply(o,f):i[u]=l}return o.length?[o]:[void 0,i]},a},createDynamic=function(e,t,r){invariant("function"==typeof e,"Dynamic structs must be defined as a function, but you passed: "+e);var n=createStruct({kind:"dynamic",type:"dynamic<…>",defaults:t,struct:r});return n.check=function(t,r,a){return void 0===t&&(t=n.default()),e(t,r,a).check(t,r,a)},n},createEnum=function(e,t,r){invariant(Array.isArray(e),"Enum structs must be defined as an array, but you passed: "+e);var n=r(function(t){return e.includes(t)},t);return n.kind="enum",n.type=e.map(function(e){return"string"==typeof e?'"'+e+'"':""+e}).join(" | "),n},createFunction=function(e,t,r){var n=createStruct({kind:"function",type:"function<…>",defaults:t,struct:r});return n.check=function(t,r,a){void 0===t&&(t=n.default());var i=e(t,r,a);if(!0===i)return[void 0,t];var o=[];if(!1===i)o.push(n.fail({value:t,branch:r,path:a}));else if(Array.isArray(i)&&i.length>0)for(var u=i,c=Array.isArray(u),s=0,u=c?u:u[Symbol.iterator]();;){var f;if(c){if(s>=u.length)break;f=u[s++]}else{if((s=u.next()).done)break;f=s.value}var l=f;o.push(n.fail(_objectSpread2({value:t,branch:r,path:a},l)))}else"object"==typeof i?o.push(n.fail(_objectSpread2({value:t,branch:r,path:a},i))):invariant(!1,"Validator functions must return a boolean, a failure object, or an array of failure objects, but you passed: "+i);return[o]},n},createInstance=function(e,t,r){invariant("function"==typeof e,"Instance structs must be defined as a function, but you passed: "+e);var n=r(function(t){return t instanceof e},t);return n.kind="instance",n.type="instance<"+e.name+">",n},createInterface=function(e,t,r){invariant("object"==typeof e,"Interface structs must be defined as an object, but you passed: "+e);var n={};for(var a in e)n[a]=r(e[a]);var i=createStruct({kind:"interface",type:"interface<{"+Object.keys(e).join()+"}>",defaults:t,struct:r});return i.check=function(e,t,r){if(void 0===e&&(e=i.default()),"object"!=typeof e&&"function"!=typeof e)return[[i.fail({value:e,branch:t,path:r})]];var a=[];for(var o in n){var u=n[o],c=e[o],s=u.check(c,t.concat(c),r.concat(o))[0];s&&a.push.apply(a,s)}return a.length?[a]:[void 0,e]},i},createIntersection=function(e,t,r){invariant(Array.isArray(e)&&0!==e.length,"Intersection structs must be defined as a non-empty array, but you passed: "+e);var n=e.map(function(e){return r(e)}),a=n.map(function(e){return e.type}).join(" & "),i=createStruct({kind:"intersection",type:a,defaults:t,struct:r});return i.check=function(e,t,r){void 0===e&&(e=i.default());for(var a=e,o=n,u=Array.isArray(o),c=0,o=u?o:o[Symbol.iterator]();;){var s;if(u){if(c>=o.length)break;s=o[c++]}else{if((c=o.next()).done)break;s=c.value}var f=s.check(e,t,r),l=f[0],d=f[1];if(l)return[[i.fail({value:e,branch:t,path:r})]];a=d}return[void 0,a]},i},createLazy=function(e,t,r){invariant("function"==typeof e,"Lazy structs must be defined as a function, but you passed: "+e);var n=createStruct({kind:"lazy",type:"lazy<…>",defaults:t,struct:r});return n.check=function(){return Object.assign(n,e()),n.check.apply(n,arguments)},n},createSize=function(e,t,r){invariant(Array.isArray(e)&&2===e.length&&e.every(function(e){return"number"==typeof e}),"Size structs must be defined as an array with two number elements, but you passed: "+e);var n=e[0],a=e[1],i=r(function(e){return null!=e&&"number"==typeof e.length&&e.length>=n&&e.length<=a},t);return i.kind="size",i.type="size<"+n+","+a+">",i},createLiteral=function(e,t,r){var n=r(function(t){return t===e},t);return n.kind="literal",n.type="string"==typeof e?'"'+e+'"':""+e,n},createObject=function(e,t,r){invariant("object"==typeof e,"Object structs must be defined as an object, but you passed: "+e);var n={};for(var a in e)n[a]=r(e[a]);var i=createStruct({kind:"object",type:"{"+Object.keys(e).join()+"}",defaults:t,struct:r});return i.check=function(e,t,r){void 0===e&&(e=i.default());var a=i.default();if(void 0===e&&(e=a),"object"!==kindOf(e))return[[i.fail({value:e,branch:t,path:r})]];for(var o={},u=[],c=new Set(Object.keys(n).concat(Object.keys(e))),s=Array.isArray(c),f=0,c=s?c:c[Symbol.iterator]();;){var l;if(s){if(f>=c.length)break;l=c[f++]}else{if((f=c.next()).done)break;l=f.value}var d=l,p=e[d],v=r.concat(d),y=t.concat(p),b=n[d];if(void 0===p&&null!=a&&d in a&&(p="function"==typeof a[d]?a[d](e,t,r):a[d]),d in n){var h=b.check(p,y,v),m=h[0],_=h[1];m?u.push.apply(u,m):void 0!==_&&d in n&&(o[d]=_)}else u.push(i.fail({type:void 0,value:p,path:v,branch:e}))}return u.length?[u]:[void 0,o]},i},createPartial=function(e,t,r){invariant("object"==typeof e,"Partial structs must be defined as an object, but you passed: "+e);var n={};for(var a in e)n[a]=r.union([e[a],"undefined"]);var i=createStruct({kind:"object",type:"{"+Object.keys(e).join()+"}",defaults:t,struct:r});return i.check=function(e,t,r){void 0===e&&(e=i.default());var a=i.default();if(void 0===e&&(e=a),"object"!==kindOf(e))return[[i.fail({value:e,branch:t,path:r})]];for(var o={},u=[],c=e,s=Array.isArray(c),f=0,c=s?c:c[Symbol.iterator]();;){var l;if(s){if(f>=c.length)break;l=c[f++]}else{if((f=c.next()).done)break;l=f.value}var d=l,p=e[d],v=r.concat(d),y=t.concat(p),b=n[d];if(void 0===p&&null!=a&&d in a&&(p="function"==typeof a[d]?a[d](e,t,r):a[d]),d in n){var h=b.check(p,y,v),m=h[0],_=h[1];m?u.push.apply(u,m):void 0!==_&&d in n&&(o[d]=_)}else u.push(i.fail({type:void 0,value:p,path:v,branch:e}))}return u.length?[u]:[void 0,o]},i},createPick=function(e,t,r){invariant("object"==typeof e,"Pick structs must be defined as an object, but you passed: "+e);var n={};for(var a in e)n[a]=r(e[a]);var i=createStruct({kind:"pick",type:"pick<{"+Object.keys(e).join()+"}>",defaults:t,struct:r});return i.check=function(e,t,r){void 0===e&&(e=i.default());var a=i.default();if(void 0===e&&(e=a),"object"!==kindOf(e))return[[i.fail({value:e,branch:t,path:r})]];var o={},u=[];for(var c in n){var s=e[c],f=r.concat(c),l=t.concat(s),d=n[c];void 0===s&&null!=a&&c in a&&(s="function"==typeof a[c]?a[c](e,t,r):a[c]);var p=d.check(s,l,f),v=p[0],y=p[1];v?u.push.apply(u,v):void 0!==y&&c in n&&(o[c]=y)}return u.length?[u]:[void 0,o]},i},createRecord=function(e,t,r){invariant(Array.isArray(e)&&2===e.length,"Record structs must be defined as an array with two elements, but you passed: "+e);var n=r(e[0]),a=r(e[1]),i=createStruct({kind:"record",type:"record<"+n.type+","+a.type+">",defaults:t,struct:r});return i.check=function(e,t,r){var o=i.default();if(e=o?_objectSpread2({},o,{},e):e,"object"!==kindOf(e))return[[i.fail({value:e,branch:t,path:r})]];var u={},c=[];for(var s in e){var f=e[s],l=r.concat(s),d=t.concat(f),p=n.check(s,d,l),v=p[0],y=p[1];if(v)c.push.apply(c,v);else{var b=a.check(f,d,l),h=b[0],m=b[1];h?c.push.apply(c,h):u[y]=m}}return c.length?[c]:[void 0,u]},i},createScalar=function(e,t,r){invariant("string"==typeof e,"Scalar structs must be defined as a string, but you passed: "+e);var n=r.Types;invariant(e in n,'No struct validator function found for type "'+e+'".');var a=r(n[e],t);return a.kind="scalar",a.type=e,a},createShorthand=function(e,t,r){if(isStruct(e))return e;if(Array.isArray(e)){if(1===e.length){var n=e[0];return r.array([n],t)}if(e.length>1)return r.tuple(e,t)}if("function"==typeof e)return r.function(e,t);if("object"==typeof e)return r.object(e,t);if("string"==typeof e){var a,i=!1;if(e.endsWith("?")&&(i=!0,e=e.slice(0,-1)),e.includes("|")){var o=e.split(/\s*\|\s*/g);a=r.union(o,t)}else if(e.includes("&")){var u=e.split(/\s*&\s*/g);a=r.intersection(u,t)}else a=r.scalar(e,t);return i&&(a=r.union([a,"undefined"],void 0)),a}throw new Error("A schema definition must be an object, array, string or function, but you passed: "+e)},createTuple=function(e,t,r){invariant(Array.isArray(e),"Tuple structs must be defined as an array, but you passed: "+e);var n=e.map(function(e){return r(e)}),a=createStruct({kind:"tuple",type:"["+n.map(function(e){return e.type}).join()+"]",defaults:t,struct:r});return a.check=function(e,t,r){if(void 0===e&&(e=a.default()),!Array.isArray(e))return[[a.fail({value:e,branch:t,path:r})]];for(var i=[],o=[],u=Math.max(e.length,n.length),c=0;c<u;c++){var s=n[c],f=e[c],l=r.concat(c),d=t.concat(f);if(s){var p=s.check(f,d,l),v=p[0],y=p[1];v?o.push.apply(o,v):i[c]=y}else o.push(a.fail({type:void 0,value:f,path:l,branch:d}))}return o.length?[o]:[void 0,i]},a},createUnion=function(e,t,r){invariant(Array.isArray(e)&&0!==e.length,"Union structs must be defined as a non-empty array, but you passed: "+e);var n=e.map(function(e){return r(e)}),a=n.map(function(e){return e.type}).join(" | "),i=createStruct({kind:"union",type:a,defaults:t,struct:r});return i.check=function(e,t,r){void 0===e&&(e=i.default());for(var a=n,o=Array.isArray(a),u=0,a=o?a:a[Symbol.iterator]();;){var c;if(o){if(u>=a.length)break;c=a[u++]}else{if((u=a.next()).done)break;c=u.value}var s=c.check(e,t,r),f=s[0],l=s[1];if(!f)return[void 0,l]}return[[i.fail({value:e,branch:t,path:r})]]},i},superstruct=function(e){void 0===e&&(e={});var t=function e(t,r){return createShorthand(t,r,e)};return t.array=function(e,r){return createArray(e,r,t)},t.dynamic=function(e,r){return createDynamic(e,r,t)},t.enum=function(e,r){return createEnum(e,r,t)},t.function=function(e,r){return createFunction(e,r,t)},t.instance=function(e,r){return createInstance(e,r,t)},t.interface=function(e,r){return createInterface(e,r,t)},t.intersection=function(e,r){return createIntersection(e,r,t)},t.lazy=function(e,r){return createLazy(e,r,t)},t.literal=function(e,r){return createLiteral(e,r,t)},t.object=function(e,r){return createObject(e,r,t)},t.optional=function(e,r){return createUnion([e,"undefined"],r,t)},t.partial=function(e,r){return createPartial(e,r,t)},t.pick=function(e,r){return createPick(e,r,t)},t.record=function(e,r){return createRecord(e,r,t)},t.scalar=function(e,r){return createScalar(e,r,t)},t.size=function(e,r){return createSize(e,r,t)},t.tuple=function(e,r){return createTuple(e,r,t)},t.union=function(e,r){return createUnion(e,r,t)},t.Error=e.error||StructError,t.Types=_objectSpread2({},Types,{},e.types),t},struct=superstruct(),script={name:"FormContainer",props:{structSchema:{type:Object,required:!0}},data:function(){return{structModel:null,yupSchema:null,trap:"",isActive:!1,domForm:null}},mounted:function(){this.domForm=this.$refs.form,this.initStruct(),this.initTextAreas(),this.initFocusTrap()},methods:{initStruct:function(){this.structModel=struct(this.structSchema)},initTextAreas:function(){var e=this;this.domForm.querySelectorAll("[data-autoresize]").forEach(function(t){t.style.boxSizing="border-box";var r=t.offsetHeight-t.clientHeight;e.domForm.addEventListener("input",function(e){e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+r+"px"}),t.removeAttribute("data-autoresize")})},initFocusTrap:function(){this.trap=focusTrap_1(this.$refs.form,{clickOutsideDeactivates:!0})},trapFocus:function(){this.isActive||this.trap.activate(),this.isActive=!0},unTrapFocus:function(){this.isActive&&this.trap.deactivate(),this.isActive=!1},validateForm:function(){var e=this;return new Promise(function(t){var r=formSerialize(e.$refs.form,{hash:!0}),n=e.structModel.validate(r),a=n[0],i=n[1];if(a){var o=a.path,u=a.value;t({success:!1,data:{path:o,value:u,message:"Form Container --\x3e Validation error in "+o[0]+": "+u}})}t({success:!0,data:i})})},displayValidationErrors:function(e,t){var r=this;if("input"===t){var n=e.path;this.domForm.querySelector("[data-validation-message="+n+"]").innerHTML=e.errors[0]}else e.errors.forEach(function(t,n){var a=e.inner[n].path;r.domForm.querySelector("[data-validation-message="+a+"]").innerHTML=t})},clearValidationErrors:function(e){this.domForm.querySelector("[data-validation-message="+e+"]").innerHTML=""},toggleSubmitButton:function(e){this.domForm.querySelector("button[type=submit]").disabled=!e},submitForm:function(e){var t=this;e&&e.preventDefault(),this.validateForm().then(function(e){return t.$emit(e.success?"validated":"errored",e.data)})}}},__vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.unTrapFocus,expression:"unTrapFocus"}],ref:"form",on:{submit:e.submitForm,click:e.trapFocus,focus:e.trapFocus}},[e._t("default")],2)},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;var __vue_inject_styles__=void 0,__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,!1,void 0,void 0,void 0),index={install:function(e,t){e.component("form-container",__vue_component__)}};export default index;
