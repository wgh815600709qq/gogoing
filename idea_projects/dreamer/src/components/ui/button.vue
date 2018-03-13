<template>
  <div :class="['fb-button', type ? type : '']" @click="btnClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'fb-button',
  data () {
    return {
    }
  },
  methods: {
    btnClick (e) {
      this.$emit('click', e)
    }
  },
  props: {
    type: {
      type: String, // ''、 warning、 success、info、error
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.fb-button{
  display: inline-block;
  text-align: center;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
</style>
