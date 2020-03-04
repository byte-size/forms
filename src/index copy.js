import FormContainer from './Form.Container.vue'

export default {
  install(Vue, options) {
    if (!options.noFocusTrap) {
      import('v-click-outside').then((o) => Vue.use(o))
    }
    console.log(options)
    Vue.component('form-container', FormContainer)
  }
}
