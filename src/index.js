// Dependencies
import vClickOutside from 'v-click-outside'

// Components
import Form from './Form.vue'

export default {
  install(Vue, _) {
    Vue.use(vClickOutside)
    Vue.component('bs-form', Form)
  }
}
