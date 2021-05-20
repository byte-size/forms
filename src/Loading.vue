<template>
  <div v-if="isAlive" class="bs-form-loading">
    <SVGLoader v-if="state === 'loading'" style="display: flex; justify-content:center; align-items:center; height:100%; width: 100%;" />
    <div v-else-if="state === 'success'" style="display: flex; justify-content:center; align-items:center; height:100%; width: 100%;"><p>✔</p></div>
    <div v-else style="display: flex; justify-content:center; align-items:center; height:100%; width: 100%;"><p>⚠</p></div>
  </div>
  <i v-else v-show="false" :name="'loading'" />
</template>

<script>
import SVGLoader from './SVGLoader.vue'
export default {
  name: 'Loading',
  components: {
    SVGLoader
  },
  data() {
    return {
      isAlive: true
    }
  },
  props: {
    state: {
      type: String,
      default: 'loading'
    }
  }
}
</script>
