<template>
  <form
    ref="form"
    v-click-outside="unTrapFocus"
    @submit="submitForm"
    @click="trapFocus"
    @focus="trapFocus"
  >
    <slot />
  </form>
</template>

<script>
import serialize from "form-serialize";
import FocusTrap from "focus-trap";
import { struct } from "superstruct";
export default {
  name: "FormContainer",
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
      trap: "",
      isActive: false,
      domForm: null
    };
  },
  mounted() {
    this.domForm = this.$refs.form;
    this.initStruct();
    this.initTextAreas();
    this.initFocusTrap();
  },
  methods: {
    initStruct() {
      this.structModel = struct(this.structSchema);
    },
    initTextAreas() {
      this.domForm.querySelectorAll("[data-autoresize]").forEach(element => {
        element.style.boxSizing = "border-box";
        const offset = element.offsetHeight - element.clientHeight;
        this.domForm.addEventListener("input", event => {
          event.target.style.height = "auto";
          event.target.style.height = event.target.scrollHeight + offset + "px";
        });
        element.removeAttribute("data-autoresize");
      });
    },
    initFocusTrap() {
      this.trap = FocusTrap(this.$refs.form, {
        clickOutsideDeactivates: true
      });
    },
    trapFocus() {
      if (!this.isActive) this.trap.activate();
      this.isActive = true;
    },
    unTrapFocus() {
      if (this.isActive) this.trap.deactivate();
      this.isActive = false;
    },
    validateForm() {
      return new Promise(resolve => {
        const formData = serialize(this.$refs.form, { hash: true });
        const [error, result] = this.structModel.validate(formData);
        if (error) {
          const { path, value } = error;
          // console.log(`Form Container --> Validation error in ${path[0]}: ${value}`)
          resolve({
            success: false,
            data: {
              path,
              value,
              message: `Form Container --> Validation error in ${path[0]}: ${value}`
            }
          });
        }
        resolve({ success: true, data: result });
      });
    },
    displayValidationErrors(errorsObject, inputOrForm) {
      // Becareful, errorsObject can come in different structures depending on whether the caller
      // is an input or the whole form. The if/else check below is to get the correct input name based on that
      if (inputOrForm === "input") {
        const inputName = errorsObject.path;
        this.domForm.querySelector(
          `[data-validation-message=${inputName}]`
        ).innerHTML = errorsObject.errors[0];
      } else {
        errorsObject.errors.forEach((errorMessage, index) => {
          const inputName = errorsObject.inner[index].path;
          this.domForm.querySelector(
            `[data-validation-message=${inputName}]`
          ).innerHTML = errorMessage;
        });
      }
    },
    clearValidationErrors(inputName) {
      this.domForm.querySelector(
        `[data-validation-message=${inputName}]`
      ).innerHTML = "";
    },
    toggleSubmitButton(to) {
      this.domForm.querySelector("button[type=submit]").disabled = !to;
    },
    submitForm(e) {
      if (e) e.preventDefault();
      this.validateForm().then(result =>
        this.$emit(result.success ? "validated" : "errored", result.data)
      );
    }
  }
};
</script>
