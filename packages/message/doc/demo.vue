<template>
  <div>
    <a-button @click="open">消息提示</a-button>
  </div>
</template>

<script lang="ts" setup>
import tMessage from '../index'

const open = () => {
  tMessage({
    type: 'success',
    message: '打开消息提示'
  })
}
</script>

<style lang="scss" scoped></style>
