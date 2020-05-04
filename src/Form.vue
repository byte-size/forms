<template>
  <form ref="form" v-click-outside="unTrapFocus" @submit="submitForm" @click="trapFocus" @focus="trapFocus">
    <slot />
  </form>
</template>

<script>
import Vue from 'vue'
import Notification from './Notification.vue'
import Loading from './Loading.vue'
import serialize from 'form-serialize'
import FocusTrap from 'focus-trap'
import { struct } from 'superstruct'
export default {
  name: 'FormContainer',
  props: {
    structSchema: {
      type: Object,
      required: true
    },
    transportFunction: {
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
      domForm: null,
      loadingElement: null
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
        element.addEventListener('input', (event) => {
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
      if (this.loadingElement && this.loadingElement.state === 'success') {
        this.reset()
      } else {
        this.validateForm().then(async (validationResult) => {
          if (validationResult.success) {
            this.triggerLoadingState('loading')
            const transportResult = await this.transportFunction.func(validationResult.data)
            if (this.$bsFormsDebug) {
              console.log('BS Forms Transport Function Response:')
              console.log(transportResult)
            }
            if (this.transportFunction.success(transportResult)) {
              this.triggerLoadingState('success')
              this.$emit('success', validationResult.data)
            } else {
              this.$emit('error', 'Error response on transport function')
            }
          } else {
            this.$emit('warning', validationResult.data)
          }
        })
      }
    },
    triggerLoadingState(state) {
      if (state === 'loading') {
        const submitButton = this.domForm.querySelector('button[type=submit]')
        submitButton.setAttribute('disabled', true)

        const ldngElRaw = this.domForm.querySelector(`i[name=loading]`)
        if (ldngElRaw) {
          const rawClasses = ldngElRaw.classList.value
          const LdngElementClass = Vue.extend(Loading)
          const ldngElInstance = new LdngElementClass()
          this.loadingElement = ldngElInstance.$mount(ldngElRaw)
          this.loadingElement.$el.className = `${rawClasses} bs-form-loading`
        }
      } else if (state === 'success') {
        const submitButton = this.domForm.querySelector('button[type=submit]')
        submitButton.removeAttribute('disabled')
        this.loadingElement.state = 'success'
      }
    },
    reset() {
      // Reset form input fields
      this.domForm.reset()
      // Enable submit button
      const submitButton = this.domForm.querySelector('button[type=submit]')
      submitButton.removeAttribute('disabled')
      // Remove loading element by setting its isAlive false (don't forget to transfer classesd)
      const ldngElConsumed = this.domForm.querySelector(`.bs-form-loading`)
      const consumedClasses = ldngElConsumed.classList.value
      this.loadingElement.isAlive = false
      const ldngElNew = this.domForm.querySelector(`i[name=loading]`)
      this.$nextTick(() => {
        this.loadingElement.$el.classList = consumedClasses
        this.loadingElement = null
      })
    }
  }
}
</script>
