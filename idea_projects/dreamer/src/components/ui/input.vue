<template>
  <div class="fb-input">
    <input ref="input" :type="type" :placeholder="placeholder" v-model="inputValue" @input="inputChange" @focus="focus" @blur="blur">
    <i class="iconfont icon-qingchu" v-if="showClear" @click="clearInput($event)"></i>
  </div>
</template>

<script>
export default {
  name: 'fb-input',
  data () {
    return {
      inputValue: this.value,
      showClear: false
    }
  },
  watch: {
    value: function (newval, val) {
      this.inputValue = newval
    }
  },
  methods: {
    focus () {
      this.showClear = true
    },
    blur () {
      this.showClear = false
    },
    inputChange () {
      this.$emit('inputChange', this.inputValue)
    },
    clearInput (e) {
      this.inputValue = ''
      this.$refs.input.focus()
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
  position: relative;
  margin: 0.2rem;
  border:1px solid #dadada;
  height: 0.6rem;
  input{
    width: 100%;
    height: 100%;
    padding: 0;
    margin:0;
    text-indent: 0.2rem;
    outline: none;
    border: none;
    border-radius: 4px;
  }
  input::-webkit-input-placeholder{
    color: #dadada;
    font-size: 12px;
  }
  .icon-qingchu{
    font-size: 0.6rem;
    color:#851b25;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
