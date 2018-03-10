<template>
  <div class="fb-input">
    <input :type="type" :placeholder="placeholder" v-model="inputValue" @input="inputChange">
  </div>
</template>

<script>
export default {
  name: 'fb-input',
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value: function (newval, val) {
      this.inputValue = newval
    }
  },
  methods: {
    inputChange () {
      this.$emit('inputChange', this.inputValue)
    }
  },
  props: {
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    type: {
      type: String,
      default: 'text' // text、 password、 number、
    }
  }
}
</script>

<style lang="less" scoped>
.fb-input{
  display: inline-block;
  margin: 0.2rem;
  border:1px solid #dadada;
  border-radius: 2px;
  height: 0.6rem;
  input{
    width: 100%;
    height: 100%;
    padding: 0;
    margin:0;
    text-indent: 0.2rem;
    outline: none;
    border: none;
  }
  input::-webkit-input-placeholder{
    color: #dadada;
    font-size: 12px;
  }
}
</style>
