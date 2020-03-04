// Dependencies
import vClickOutside from 'v-click-outside'
import FormContainer from './Form.Container.vue'

export default {
  install(Vue, _) {
    Vue.component('form-container', FormContainer)
    Vue.use(vClickOutside)
  }
}
