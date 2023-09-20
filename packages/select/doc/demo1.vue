<template>
  <div>
    <a-select :options="option" filedLabel="name" filedValue="value" @change="change" v-model="Val"></a-select>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const options = reactive({
  option: [
  {
    name: '美国',
    value: 'america',
    disabled: true
  },
  {
    name: '日本',
    value: 'japen'
  },
  {
    name: '俄罗斯',
    value: 'russia'
  },
  {
    name: '中国',
    value: 'china'
  }
]
})
const Val = ref('俄罗斯')
const { option } = options
const change = (option) => {
  console.log(Val.value)
}
</script>

<style lang="scss" scoped></style>
