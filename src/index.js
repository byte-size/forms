// Dependencies
import vClickOutside from 'v-click-outside'

// Components
import Form from './Form.vue'

export default {
  install(Vue, options) {
    Vue.use(vClickOutside)
    Vue.component('bs-form', Form)
    if (options.debug) Vue.prototype.$bsFormsDebug = true
  }
}
