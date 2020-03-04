<template>
  <div :data-ntfc="name" v-if="isVisible">{{ message }}</div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    name: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isVisible: true
    }
  }
}
</script>
