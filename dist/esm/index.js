import e from"vue";import{n as t,_ as n}from"./Input.Container-c9fd846f.js";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var i,r=(function(e,t){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)}function r(e,t){var r=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||n,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(t.value),a=r.handler,o=r.middleware,s=r.detectIframe;if(r.isActive){if(e["__v-click-outside"]=r.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(e){var t=e.el,n=e.event,r=e.handler,a=e.middleware,o=n.path||n.composedPath&&n.composedPath();(o?o.indexOf(t)<0:!t.contains(n.target))&&i({event:n,handler:r,middleware:a})}({el:e,event:t,handler:a,middleware:o})}}})),s){var c={event:"blur",srcTarget:window,handler:function(t){return function(e){var t=e.el,n=e.event,r=e.handler,a=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:n,handler:r,middleware:a})}),0)}({el:e,event:t,handler:a,middleware:o})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[c])}e["__v-click-outside"].forEach((function(t){var n=t.event,i=t.srcTarget,r=t.handler;return setTimeout((function(){e["__v-click-outside"]&&i.addEventListener(n,r,!1)}),0)}))}}function a(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var o=e?{bind:r,update:function(e,t){var n=t.value,i=t.oldValue;JSON.stringify(n)!==JSON.stringify(i)&&(a(e),r(e,{value:n}))},unbind:a}:{};return{install:function(e){e.directive("click-outside",o)},directive:o}}()}(i={exports:{}},i.exports),i.exports);function a(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(i,r)}const o={name:"Notification",props:{name:{type:String,required:!0},message:{type:String,default:""}},data:function(){return{isVisible:!0}}};var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isVisible?n("div",{attrs:{"data-ntfc":e.name}},[e._v(e._s(e.message))]):e._e()};s._withStripped=!0;const c=t({render:s,staticRenderFns:[]},undefined,o,undefined,false,undefined,!1,void 0,void 0,void 0);var u={name:"Loading",data:function(){return{isAlive:!0}},props:{state:{type:String,default:"loading"}}};const l="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function d(e){return(e,t)=>function(e,t){const n=l?t.media||"default":e,i=p[n]||(p[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),void 0===f&&(f=document.head||document.getElementsByTagName("head")[0]),f.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(n),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{const e=i.ids.size-1,t=document.createTextNode(n),r=i.element.childNodes;r[e]&&i.element.removeChild(r[e]),r.length?i.element.insertBefore(t,r[e]):i.element.appendChild(t)}}}(e,t)}let f;const p={};const m=u;var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isAlive?n("div",{staticClass:"bs-form-loading"},["loading"===e.state?n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%",width:"100%"}},e._l(3,(function(e){return n("span",{key:e})})),0):"success"===e.state?n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%",width:"100%"}},[n("p",[e._v("✔")])]):n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%",width:"100%"}},[n("p",[e._v("⚠")])])]):n("i",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{name:"loading"}})};v._withStripped=!0;const h=t({render:v,staticRenderFns:[]},(function(e){e&&e("data-v-3df97754_0",{source:"\n@keyframes blink-data-v-3df97754 {\n0% {\n    opacity: 0.2;\n}\n20% {\n    opacity: 1;\n}\n100% {\n    opacity: 0.2;\n}\n}\nspan[data-v-3df97754] {\n  animation-name: blink-data-v-3df97754;\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  height: 8px;\n  width: 8px;\n  background: #ddd;\n  border-radius: 999px;\n}\nspan[data-v-3df97754]:nth-child(2) {\n  padding-left: 2px;\n  animation-delay: 0.2s;\n}\nspan[data-v-3df97754]:nth-child(3) {\n  padding-left: 2px;\n  animation-delay: 0.4s;\n}\n",map:{version:3,sources:["/Users/Kemal/Desktop/Kite/_Code/bs2/bs-forms/src/Loading.vue"],names:[],mappings:";AA6BA;AACA;IACA,YAAA;AACA;AACA;IACA,UAAA;AACA;AACA;IACA,YAAA;AACA;AACA;AACA;EACA,qCAAA;EACA,wBAAA;EACA,mCAAA;EACA,yBAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;EACA,oBAAA;AACA;AACA;EACA,iBAAA;EACA,qBAAA;AACA;AACA;EACA,iBAAA;EACA,qBAAA;AACA",file:"Loading.vue",sourcesContent:['<template>\n  <div v-if="isAlive" class="bs-form-loading">\n    <div v-if="state === \'loading\'" style="display: flex; justify-content:center; align-items:center; height:100%; width: 100%;">\n      <span v-for="i of 3" :key="i" />\n    </div>\n    <div v-else-if="state === \'success\'" style="display: flex; justify-content:center; align-items:center; height:100%; width: 100%;"><p>✔</p></div>\n    <div v-else style="display: flex; justify-content:center; align-items:center; height:100%; width: 100%;"><p>⚠</p></div>\n  </div>\n  <i v-else v-show="false" :name="\'loading\'" />\n</template>\n\n<script>\nexport default {\n  name: \'Loading\',\n  data() {\n    return {\n      isAlive: true\n    }\n  },\n  props: {\n    state: {\n      type: String,\n      default: \'loading\'\n    }\n  }\n}\n<\/script>\n\n<style lang="postcss" scoped>\n@keyframes blink {\n  0% {\n    opacity: 0.2;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\nspan {\n  animation-name: blink;\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  height: 8px;\n  width: 8px;\n  background: #ddd;\n  border-radius: 999px;\n}\nspan:nth-child(2) {\n  padding-left: 2px;\n  animation-delay: 0.2s;\n}\nspan:nth-child(3) {\n  padding-left: 2px;\n  animation-delay: 0.4s;\n}\n</style>\n']},media:void 0})}),m,"data-v-3df97754",false,undefined,!1,d,void 0,void 0);var b=/^(?:submit|button|image|reset|file)$/i,g=/^(?:input|select|textarea|keygen)/i,y=/(\[[^\[\]]*\])/g;function A(e,t,n){if(0===t.length)return e=n;var i=t.shift(),r=i.match(/^\[(.+?)\]$/);if("[]"===i)return e=e||[],Array.isArray(e)?e.push(A(null,t,n)):(e._values=e._values||[],e._values.push(A(null,t,n))),e;if(r){var a=r[1],o=+a;isNaN(o)?(e=e||{})[a]=A(e[a],t,n):(e=e||[])[o]=A(e[o],t,n)}else e[i]=A(e[i],t,n);return e}function w(e,t,n){if(t.match(y)){A(e,function(e){var t=[],n=new RegExp(y),i=/^([^\[\]]*)/.exec(e);for(i[1]&&t.push(i[1]);null!==(i=n.exec(e));)t.push(i[1]);return t}(t),n)}else{var i=e[t];i?(Array.isArray(i)||(e[t]=[i]),e[t].push(n)):e[t]=n}return e}function E(e,t,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=(n=encodeURIComponent(n)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+n}var S,k=function(e,t){"object"!=typeof t?t={hash:!!t}:void 0===t.hash&&(t.hash=!0);for(var n=t.hash?{}:"",i=t.serializer||(t.hash?w:E),r=e&&e.elements?e.elements:[],a=Object.create(null),o=0;o<r.length;++o){var s=r[o];if((t.disabled||!s.disabled)&&s.name&&(g.test(s.nodeName)&&!b.test(s.type))){var c=s.name,u=s.value;if("checkbox"!==s.type&&"radio"!==s.type||s.checked||(u=void 0),t.empty){if("checkbox"!==s.type||s.checked||(u=""),"radio"===s.type&&(a[s.name]||s.checked?s.checked&&(a[s.name]=!0):a[s.name]=!1),null==u&&"radio"==s.type)continue}else if(!u)continue;if("select-multiple"!==s.type)n=i(n,c,u);else{u=[];for(var l=s.options,d=!1,f=0;f<l.length;++f){var p=l[f],m=t.empty&&!p.value,v=p.value||m;p.selected&&v&&(d=!0,n=t.hash&&"[]"!==c.slice(c.length-2)?i(n,c+"[]",p.value):i(n,c,p.value))}!d&&t.empty&&(n=i(n,c,""))}}}if(t.empty)for(var c in a)a[c]||(n=i(n,c,""));return n},x=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],F=x.join(","),C="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,O=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},T=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},N=function(e){return"INPUT"===e.tagName},L=function(e){return function(e){return N(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,i=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=i(window.CSS.escape(e.name));else try{t=i(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},_=function(e,t){return!(t.disabled||function(e){return N(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=C.call(e,"details>summary:first-of-type")?e.parentElement:e;if(C.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var i=e.getBoundingClientRect(),r=i.width,a=i.height;return 0===r&&0===a}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t))},j=function(e,t){return!(!_(e,t)||L(t)||O(t)<0)},D=function(e,t){var n=[],i=[];return function(e,t,n){var i=Array.prototype.slice.apply(e.querySelectorAll(F));return t&&C.call(e,F)&&i.unshift(e),i.filter(n)}(e,(t=t||{}).includeContainer,j.bind(null,t)).forEach((function(e,t){var r=O(e);0===r?n.push(e):i.push({documentOrder:t,tabIndex:r,node:e})})),i.sort(T).map((function(e){return e.node})).concat(n)},I=x.concat("iframe").join(","),q=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==C.call(e,I)&&_(t,e)};
/*!
* tabbable 5.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
/*!
* focus-trap 6.4.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var R,P=(R=[],{activateTrap:function(e){if(R.length>0){var t=R[R.length-1];t!==e&&t.pause()}var n=R.indexOf(e);-1===n||R.splice(n,1),R.push(e)},deactivateTrap:function(e){var t=R.indexOf(e);-1!==t&&R.splice(t,1),R.length>0&&R[R.length-1].unpause()}}),G=function(e){return setTimeout(e,0)},U=function(e,t){var n=-1;return e.every((function(e,i){return!t(e)||(n=i,!1)})),n},M=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return"function"==typeof e?e.apply(void 0,n):e},V=function(e,t){var n,i=document,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),a={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},o=function(e){return a.containers.some((function(t){return t.contains(e)}))},s=function(e){var t=r[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=i.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},c=function(){var e;if(null!==s("initialFocus"))e=s("initialFocus");else if(o(i.activeElement))e=i.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||s("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},u=function(){if(a.tabbableGroups=a.containers.map((function(e){var t=D(e);if(t.length>0)return{container:e,firstTabbableNode:t[0],lastTabbableNode:t[t.length-1]}})).filter((function(e){return!!e})),a.tabbableGroups.length<=0&&!s("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},l=function e(t){t!==i.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!r.preventScroll}),a.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(c()))},d=function(e){o(e.target)||(M(r.clickOutsideDeactivates,e)?n.deactivate({returnFocus:r.returnFocusOnDeactivate&&!q(e.target)}):M(r.allowOutsideClick,e)||e.preventDefault())},f=function(e){var t=o(e.target);t||e.target instanceof Document?t&&(a.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),l(a.mostRecentlyFocusedNode||c()))},p=function(e){if(!1!==r.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){u();var t=null;if(a.tabbableGroups.length>0){var n=U(a.tabbableGroups,(function(t){return t.container.contains(e.target)}));if(n<0)t=e.shiftKey?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var i=U(a.tabbableGroups,(function(t){var n=t.firstTabbableNode;return e.target===n}));if(i<0&&a.tabbableGroups[n].container===e.target&&(i=n),i>=0){var r=0===i?a.tabbableGroups.length-1:i-1;t=a.tabbableGroups[r].lastTabbableNode}}else{var o=U(a.tabbableGroups,(function(t){var n=t.lastTabbableNode;return e.target===n}));if(o<0&&a.tabbableGroups[n].container===e.target&&(o=n),o>=0){var c=o===a.tabbableGroups.length-1?0:o+1;t=a.tabbableGroups[c].firstTabbableNode}}}else t=s("fallbackFocus");t&&(e.preventDefault(),l(t))}(e)},m=function(e){M(r.clickOutsideDeactivates,e)||o(e.target)||M(r.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},v=function(){if(a.active)return P.activateTrap(n),S=r.delayInitialFocus?G((function(){l(c())})):l(c()),i.addEventListener("focusin",f,!0),i.addEventListener("mousedown",d,{capture:!0,passive:!1}),i.addEventListener("touchstart",d,{capture:!0,passive:!1}),i.addEventListener("click",m,{capture:!0,passive:!1}),i.addEventListener("keydown",p,{capture:!0,passive:!1}),n},h=function(){if(a.active)return i.removeEventListener("focusin",f,!0),i.removeEventListener("mousedown",d,!0),i.removeEventListener("touchstart",d,!0),i.removeEventListener("click",m,!0),i.removeEventListener("keydown",p,!0),n};return(n={activate:function(e){if(a.active)return this;u(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=i.activeElement;var t=e&&e.onActivate?e.onActivate:r.onActivate;return t&&t(),v(),this},deactivate:function(e){if(!a.active)return this;clearTimeout(S),h(),a.active=!1,a.paused=!1,P.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:r.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:r.returnFocusOnDeactivate)&&G((function(){var e;l((e=a.nodeFocusedBeforeActivation,s("setReturnFocus")||e))})),this},pause:function(){return a.paused||!a.active||(a.paused=!0,h()),this},unpause:function(){return a.paused&&a.active?(a.paused=!1,u(),v(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map((function(e){return"string"==typeof e?i.querySelector(e):e})),a.active&&u(),this}}).updateContainerElements(e),n};const z={name:"FormContainer",props:{structSchema:{type:Object,required:!0},transportFunction:{type:Object,required:!0},options:{type:Object,default:function(){}}},data:function(){return{structModel:null,yupSchema:null,trap:null,isActive:!1,domForm:null,loadingElement:null}},mounted:function(){this.domForm=this.$refs.form,this.initValidatorElements(),this.initTextAreas(),this.initFocusTrap()},methods:{initTextAreas:function(){this.domForm.querySelectorAll("[data-autoresize]").forEach((function(e){e.style.boxSizing="border-box";var t=e.offsetHeight-e.clientHeight;e.addEventListener("input",(function(e){e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+t+"px"})),e.removeAttribute("data-autoresize")}))},initFocusTrap:function(){this.trap=V(this.$refs.form,{clickOutsideDeactivates:!0})},initValidatorElements:function(){var t=this;Object.keys(this.structSchema).map((function(n){var i=t.domForm.querySelector("i[name=".concat(n,"]"));if(i){var r=i.classList.value;new(e.extend(c))({propsData:{name:n}}).$mount(i).$el.className=r}}))},trapFocus:function(){this.isActive||this.trap.activate(),this.isActive=!0},unTrapFocus:function(){this.isActive&&this.trap.deactivate(),this.isActive=!1},validateForm:function(){var e=this;return new Promise((function(t){var n=k(e.$refs.form,{hash:!0}),i=[];Object.keys(e.structSchema).forEach((function(t){var r=(0,e.structSchema[t])(n[t],n);!0!==r&&i.push({prop:t,value:"function"==typeof r?r():r})})),i.length>0&&(i.forEach((function(t){e.displayValidationErrors(t.prop,t.value)})),t({success:!1,errors:i})),t({success:!0,data:n})}))},displayValidationErrors:function(e,t){var n=this.domForm.querySelector("[data-ntfc=".concat(e,"]"));n&&(n.innerHTML=t,n.style.display="block")},clearValidationErrors:function(e){this.domForm.querySelector("[data-validation-message=".concat(e,"]")).innerHTML=""},toggleSubmitButton:function(e){this.domForm.querySelector("button[type=submit]").disabled=!e},submitForm:function(e){var t=this;e&&e.preventDefault(),!this.loadingElement||"success"!==this.loadingElement.state&&"warning"!==this.loadingElement.state&&"error"!==this.loadingElement.state?this.validateForm().then(function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function s(e){a(o,i,r,s,c,"next",e)}function c(e){a(o,i,r,s,c,"throw",e)}s(void 0)}))}}(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.success){e.next=16;break}return t.triggerLoadingState("loading"),e.prev=2,e.next=5,t.transportFunction.func(n.data);case 5:i=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),t.triggerLoadingState("error"),e.abrupt("return",t.$emit("error",e.t0));case 12:t.$bsFormsDebug&&(console.log("BS Forms Transport Function Response:"),console.log(i)),t.transportFunction.success(i)?(t.triggerLoadingState("success"),t.$emit("success",i)):(t.triggerLoadingState("error"),t.$emit("error",i)),e.next=18;break;case 16:t.triggerLoadingState("warning"),t.$emit("warning",n.errors);case 18:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()):this.reset()},triggerLoadingState:function(t){if("loading"===t){this.domForm.querySelector("button[type=submit]").setAttribute("disabled",!0);var n=this.domForm.querySelector("i[name=loading]");if(n){var i=n.classList.value,r=new(e.extend(h));this.loadingElement=r.$mount(n),this.loadingElement.$el.className="".concat(i," bs-form-loading")}}else{this.domForm.querySelector("button[type=submit]").removeAttribute("disabled"),this.loadingElement&&(this.loadingElement.state=t)}},reset:function(){var e=this;this.domForm.reset();var t=this.domForm.querySelectorAll("input, select, textarea"),n=new Event("input",{bubbles:!0,cancelable:!0});t.forEach((function(e){return e.dispatchEvent(n)})),this.domForm.querySelector("button[type=submit]").removeAttribute("disabled");var i=this.domForm.querySelector(".bs-form-loading").classList.value;this.loadingElement.isAlive=!1,this.domForm.querySelector("i[name=loading]"),this.$nextTick((function(){e.loadingElement.$el.classList=i,e.loadingElement=null}))},refreshInputLabels:function(){var e=new Event("input");this.$refs.form&&this.$refs.form.querySelectorAll("input, select, textarea").forEach((function(t){return t.dispatchEvent(e)}))}}};var H=function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.unTrapFocus,expression:"unTrapFocus"}],ref:"form",on:{submit:e.submitForm,click:e.trapFocus,focus:e.trapFocus,change:function(t){return e.$emit("change")}}},[e._t("default")],2)};H._withStripped=!0;const Y=t({render:H,staticRenderFns:[]},undefined,z,undefined,false,undefined,!1,void 0,void 0,void 0);var K={install:function(e,t){e.use(r),e.component("bs-form",Y),e.component("bs-input-container",n),t.debug&&(e.prototype.$bsFormsDebug=!0)}};export default K;
