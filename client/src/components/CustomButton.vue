<template>
  <button
    :style="buttonStyle"
    class="btn"
    @click="onClick">
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'steelblue'
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      buttonStyle: ''
    }
  }
}
</script>
