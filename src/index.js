// Dependencies
import vClickOutside from 'v-click-outside'

// Components
import Form from './Form.vue'
import InputContainer from './Input.Container.vue'

export default {
  install(Vue, options) {
    Vue.use(vClickOutside)
    Vue.component('bs-form', Form)
    Vue.component('bs-input-container', InputContainer)
    if (options.debug) Vue.prototype.$bsFormsDebug = true
  }
}
