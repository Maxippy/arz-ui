<template>
  <div>
    <a-tree :options="options"></a-tree>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const state = reactive({
  options: [
    {
      label: '一级tree',
      value: 'one',
      children: [
        {
          label: '二级tree',
          value: 'two-one'
        },
        {
          label: '二级tree',
          value: 'two-two'
        },
        {
          label: '二级tree',
          value: 'two-three',
          children: [
            {
              label: '三级tree',
              value: 'three-one'
            },
            {
              label: '三级tree',
              value: 'three-two'
            },
            {
              label: '三级tree',
              value: 'three-three'
            }
          ]
        }
      ]
    }
  ]
})
const { options } = state 
</script>

<style lang="scss" scoped></style>
