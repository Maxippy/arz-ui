<template>
  <div>
    <a-radio :options="options" customColor="#F56C6C"></a-radio>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  options: [
  {
    label: '中国',
    value: 'china',
    disabled: true
  },
  {
    label: '日本',
    value: 'japen'
  },
  {
    label: '韩国',
    value: 'korea'
  }
]
})
const { options } = state
const change = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped></style>
