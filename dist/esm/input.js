import{n as t}from"./normalize-component-308ca375.js";const e={name:"InputContainer",props:{name:{type:String,required:!0},label:{type:String,default:function(){return null}}},data:function(){return{labelVisible:!1}},computed:{finalName:function(){var t;return null!==(t=this.label)&&void 0!==t?t:this.$options.filters.titleCase(this.name)}},mounted:function(){this.setInputAttributesFromProps(),this.listenInputChangeForLabel()},methods:{setInputAttributesFromProps:function(){var t,e,n,l=null!==(t=null===(e=this.$parent)||void 0===e||null===(n=e.$attrs)||void 0===n?void 0:n.name)&&void 0!==t?t:null,a=this.getInput();a&&(a.name=this.name,a.placeholder=this.finalName,a.ariaLabel="".concat(this.$options.filters.titleCase(l)," -> ").concat(this.finalName))},listenInputChangeForLabel:function(){var t=this,e=this.getInput();e&&e.addEventListener("input",(function(n){t.labelVisible=""!==e.value}))},getInput:function(){var t,e,n,l,a,i,s,o,r;return(null===(t=this.$slots)||void 0===t||null===(e=t.default[0])||void 0===e?void 0:e.elm)&&((null===(n=this.$slots)||void 0===n||null===(l=n.default[0])||void 0===l?void 0:l.elm)instanceof HTMLInputElement||(null===(a=this.$slots)||void 0===a||null===(i=a.default[0])||void 0===i?void 0:i.elm)instanceof HTMLSelectElement||(null===(s=this.$slots)||void 0===s||null===(o=s.default[0])||void 0===o?void 0:o.elm)instanceof HTMLTextAreaElement)?this.$slots.default[0].elm:null!==(r=this.$slots.default[0].elm.querySelector("input")||this.$slots.default[0].elm.querySelector("select")||this.$slots.default[0].elm.querySelector("textarea"))&&void 0!==r?r:null}}};var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("i",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"text-micro text-red-400 absolute top-1.5 right-3 z-10",attrs:{name:t.name}}),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition ease-in duration-300","enter-class":"opacity-0 -translate-x-1 transform","enter-to-class":"opacity-100 scale-100 translate-x-0 transform","leave-active-class":"transition ease-out duration-300","leave-class":"opacity-100 scale-100 translate-x-0 transform","leave-to-class":"opacity-0 -translate-x-1 transform"}},[t.labelVisible?n("label",{staticClass:"text-micro text-gray-400 absolute left-3 top-1.5 border-l border-white z-10",attrs:{for:t.name}},[t._v("\n      "+t._s(t.finalName)+"\n    ")]):t._e()]),t._v(" "),t._t("default")],2)};n._withStripped=!0;const l=t({render:n,staticRenderFns:[]},undefined,e,undefined,false,undefined,!1,void 0,void 0,void 0);export default l;
