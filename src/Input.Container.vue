<template>
  <div class="relative">
    <i v-show="false" :name="name" class="text-micro text-red-400 absolute top-1.5 right-3 z-10" />
    <transition
      enter-active-class="transition ease-in duration-300"
      enter-class="opacity-0 -translate-x-1 transform"
      enter-to-class="opacity-100 scale-100 translate-x-0 transform"
      leave-active-class="transition ease-out duration-300"
      leave-class="opacity-100 scale-100 translate-x-0 transform"
      leave-to-class="opacity-0 -translate-x-1 transform"
    >
      <label v-if="labelVisible" :for="name" class="text-micro text-gray-400 absolute left-3 top-1.5 border-l border-white z-10">
        {{ finalName }}
      </label>
    </transition>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'InputContainer',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: () => null
    }
  },
  data() {
    return {
      labelVisible: false
    }
  },
  computed: {
    finalName() {
      return this.label ?? this.$options.filters.titleCase(this.name)
    }
  },
  mounted() {
    this.setInputAttributesFromProps()
    this.listenInputChangeForLabel()
  },
  methods: {
    setInputAttributesFromProps() {
      const parentFormName = this.$parent?.$attrs?.name ?? null
      const input = this.getInput()
      if (input) {
        input.name = this.name
        input.placeholder = this.finalName
        input.ariaLabel = `${this.$options.filters.titleCase(parentFormName)} -> ${this.finalName}`
      }
    },
    listenInputChangeForLabel() {
      const input = this.getInput()
      if (input)
        input.addEventListener('input', (evt) => {
          console.log('I have an input change here!')
          console.log(input.value)
          this.labelVisible = input.value !== ''
        })
    },
    getInput() {
      return this.$slots?.default[0]?.elm &&
        (this.$slots?.default[0]?.elm instanceof HTMLInputElement ||
          this.$slots?.default[0]?.elm instanceof HTMLSelectElement ||
          this.$slots?.default[0]?.elm instanceof HTMLTextAreaElement)
        ? this.$slots.default[0].elm
        : (this.$slots.default[0].elm.querySelector('input') ||
            this.$slots.default[0].elm.querySelector('select') ||
            this.$slots.default[0].elm.querySelector('textarea')) ??
            null
    }
  }
}
</script>
