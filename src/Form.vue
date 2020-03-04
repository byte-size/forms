<template>
  <form ref="form" v-click-outside="unTrapFocus" @submit="submitForm" @click="trapFocus" @focus="trapFocus">
    <slot />
  </form>
</template>

<script>
import Vue from 'vue'
import Notification from './Notification.vue'
import serialize from 'form-serialize'
import FocusTrap from 'focus-trap'
import { struct } from 'superstruct'
export default {
  name: 'FormContainer',
  props: {
    structSchema: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      structModel: null,
      yupSchema: null,
      trap: null,
      isActive: false,
      domForm: null
    }
  },
  mounted() {
    this.domForm = this.$refs.form
    this.initStruct()
    this.initValidatorElements()
    this.initTextAreas()
    this.initFocusTrap()
  },
  methods: {
    initStruct() {
      this.structModel = struct(this.structSchema)
    },
    initTextAreas() {
      this.domForm.querySelectorAll('[data-autoresize]').forEach((element) => {
        element.style.boxSizing = 'border-box'
        const offset = element.offsetHeight - element.clientHeight
        this.domForm.addEventListener('input', (event) => {
          event.target.style.height = 'auto'
          event.target.style.height = event.target.scrollHeight + offset + 'px'
        })
        element.removeAttribute('data-autoresize')
      })
    },
    initFocusTrap() {
      this.trap = FocusTrap(this.$refs.form, {
        clickOutsideDeactivates: true
      })
    },
    initValidatorElements() {
      Object.keys(this.structSchema).map((key) => {
        const ntfcElRaw = this.domForm.querySelector(`i[name=${key}]`)
        if (ntfcElRaw) {
          // Create Notification elements programatically and add the original classes
          // https://css-tricks.com/creating-vue-js-component-instances-programmatically/
          const rawClasses = ntfcElRaw.classList.value
          const NtfcElementClass = Vue.extend(Notification)
          const ntfcElInstance = new NtfcElementClass({ propsData: { name: key } })
          ntfcElInstance.$mount(ntfcElRaw).$el.className = rawClasses
        }
      })
    },
    trapFocus() {
      if (!this.isActive) this.trap.activate()
      this.isActive = true
    },
    unTrapFocus() {
      if (this.isActive) this.trap.deactivate()
      this.isActive = false
    },
    validateForm() {
      return new Promise((resolve) => {
        const formData = serialize(this.$refs.form, { hash: true })
        const [error, result] = this.structModel.validate(formData)
        if (error) {
          const { path, value } = error
          // console.log(`Form Container --> Validation error in ${path[0]}: ${value}`)
          resolve({
            success: false,
            data: {
              path,
              value,
              message: `Form Container --> Validation error in ${path[0]}: ${value}`
            }
          })
          this.displayValidationErrors(path[0], value)
        }
        resolve({ success: true, data: result })
      })
    },
    displayValidationErrors(ntfcName, message) {
      console.log(this.$refs)
      const ntfcEl = this.domForm.querySelector(`[data-ntfc=${ntfcName}]`)
      ntfcEl.innerHTML = message
      ntfcEl.style.display = 'block'
    },
    clearValidationErrors(inputName) {
      this.domForm.querySelector(`[data-validation-message=${inputName}]`).innerHTML = ''
    },
    toggleSubmitButton(to) {
      this.domForm.querySelector('button[type=submit]').disabled = !to
    },
    submitForm(e) {
      if (e) e.preventDefault()
      this.validateForm().then((result) => this.$emit(result.success ? 'validated' : 'errored', result.data))
    }
  }
}
</script>
