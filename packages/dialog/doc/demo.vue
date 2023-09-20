<template>
  <a-button @click="openDialog">打开对话框</a-button>
  <a-dialog v-model="modelValue" title="对话框" align="center">
    <template #content>
      内容插槽
    </template>
    <template #footer>
      <a-button @click="modelValue = false">取消</a-button>
      <a-button @click="modelValue = false" type="success">确认</a-button>
    </template>
  </a-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const modelValue = ref(false)

const openDialog = () => {
  modelValue.value = true
}
</script>

<style lang="scss" scoped></style>
