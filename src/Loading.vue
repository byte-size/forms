<template>
  <div v-if="isAlive" class="bs-form-loading">
    <div v-if="state === 'loading'" style="display: flex; justify-content:center; align-items:center; height:100%; width: 100%;">
      <span v-for="i of 3" :key="i" />
    </div>
    <div v-else style="display: flex; justify-content:center; align-items:center; height:100%; width: 100%;"><p>✔</p></div>
  </div>
  <i v-else v-show="false" :name="'loading'" />
</template>

<script>
export default {
  name: 'Loading',
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

<style lang="postcss" scoped>
@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
span {
  animation-name: blink;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  height: 8px;
  width: 8px;
  background: #ddd;
  border-radius: 999px;
}
span:nth-child(2) {
  padding-left: 2px;
  animation-delay: 0.2s;
}
span:nth-child(3) {
  padding-left: 2px;
  animation-delay: 0.4s;
}
</style>