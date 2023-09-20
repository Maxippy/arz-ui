<template>
  <button :class="tClass" :disabled="disabled">
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'aButton'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  type?: string,
  disabled?: boolean,
  plain?: boolean,
  circle?: boolean
}>()
const tClass = computed(() => {
  return [
    'a-button', 
    props.type === undefined ? 'a-button-default' : `a-button-${props.type}`, 
    `a-button-${props.disabled ? 'disabled': ''}`,
    `a-button-${props.plain ? 'plain': ''}`,
    `a-button-${props.circle ? 'circle': ''}`
  ]
})
</script>

<style lang="scss" scoped>
.a-button {
  border: 0;
  padding: 12px 24px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  /* margin: 10px; */
  &:hover, &focus {
    opacity: .8;
  }
}
.a-button-default {
  color: #333;
  border: 1px solid #dcdfe4;
  &:hover {
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.a-button-primary {
  background: $primary;
  color: #fff;
  border-color: $primary;
}
.a-button-success {
  background: $success;
  color: #fff;
  border-color: $success;
}
.a-button-warning {
  background: $warning;
  color: #fff;
  border-color: $warning;
}
.a-button-error {
  background: $error;
  color: #fff;
  border-color: $error;
}
.a-button-info {
  background: $info;
  border-color: $info;
  color: #fff;
}
.a-button-disabled {
  opacity: .4;
  cursor: no-drop;
  &:hover, &:focus {
    opacity: .4;
  }
}
.a-button-plain {
  border-radius: 20px;
}
.a-button-circle {
  border-radius: 50%;
}
</style>
