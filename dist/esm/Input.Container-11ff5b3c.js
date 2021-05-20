function t(t,e,n,s,l,i,a,o,r,u){"boolean"!=typeof a&&(r=o,o=a,a=!1);const d="function"==typeof n?n.options:n;let c;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,l&&(d.functional=!0)),s&&(d._scopeId=s),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,r(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=c):e&&(c=a?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,o(t))}),c)if(d.functional){const t=d.render;d.render=function(e,n){return c.call(n),t(e,n)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,c):[c]}return n}const e={name:"InputContainer",props:{name:{type:String,required:!0},label:{type:String,default:function(){return null}}},data:function(){return{labelVisible:!1}},computed:{finalName:function(){var t;return null!==(t=this.label)&&void 0!==t?t:this.$options.filters.titleCase(this.name)}},mounted:function(){this.setInputAttributesFromProps(),this.listenInputChangeForLabel()},methods:{setInputAttributesFromProps:function(){var t,e,n,s=null!==(t=null===(e=this.$parent)||void 0===e||null===(n=e.$attrs)||void 0===n?void 0:n.name)&&void 0!==t?t:null,l=this.getInput();l&&(l.name=this.name,l.placeholder=this.finalName,l.ariaLabel="".concat(this.$options.filters.titleCase(s)," -> ").concat(this.finalName))},listenInputChangeForLabel:function(){var t=this,e=this.getInput();e&&e.addEventListener("input",(function(n){console.log("IN EVENT"),console.log(e),console.log(e.value),t.labelVisible=""!==e.value}))},getInput:function(){var t,e,n,s,l,i,a,o,r;return null!==(t=this.$slots)&&void 0!==t&&null!==(e=t.default[0])&&void 0!==e&&e.elm&&((null===(n=this.$slots)||void 0===n||null===(s=n.default[0])||void 0===s?void 0:s.elm)instanceof HTMLInputElement||(null===(l=this.$slots)||void 0===l||null===(i=l.default[0])||void 0===i?void 0:i.elm)instanceof HTMLSelectElement||(null===(a=this.$slots)||void 0===a||null===(o=a.default[0])||void 0===o?void 0:o.elm)instanceof HTMLTextAreaElement)?this.$slots.default[0].elm:null!==(r=this.$slots.default[0].elm.querySelector("input")||this.$slots.default[0].elm.querySelector("select")||this.$slots.default[0].elm.querySelector("textarea"))&&void 0!==r?r:null}}};var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("i",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"text-micro text-red-400 absolute top-1.5 right-3 z-10",attrs:{name:t.name}}),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition ease-in duration-300","enter-class":"opacity-0 -translate-x-1 transform","enter-to-class":"opacity-100 scale-100 translate-x-0 transform","leave-active-class":"transition ease-out duration-300","leave-class":"opacity-100 scale-100 translate-x-0 transform","leave-to-class":"opacity-0 -translate-x-1 transform"}},[t.labelVisible?n("label",{staticClass:"text-micro text-gray-400 absolute left-3 top-1.5 border-l border-white z-10",attrs:{for:t.name}},[t._v("\n      "+t._s(t.finalName)+"\n    ")]):t._e()]),t._v(" "),t._t("default")],2)};n._withStripped=!0;const s=t({render:n,staticRenderFns:[]},undefined,e,undefined,false,undefined,!1,void 0,void 0,void 0);export{s as _,t as n};
