<template>
  <div :class="tClass">
    <input type="text" :value="props.modelValue" :placeholder="placeholder" @input="input" />
    <span class="clear-icon" :style="clearStyle"><i>x</i></span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'aInput'
}
</script>

<script lang="ts" setup>
// import { defineEmits, defineProps } from 'vue'
import { computed, withDefaults } from 'vue'
interface iInputProps {
  modelValue: string | number,
  placeholder?: string,
  disabled?: boolean,
  clearable?: boolean
}

const props = withDefaults(defineProps<iInputProps>(), {
  placeholder: '请输入',
  disabled: false,
  clearable: false
})

const emits = defineEmits<{
  (e:'update:modelValue', ele: any): void
}>()

const input = (e: any) => {
  emits('update:modelValue', e.target.value)
}

const tClass = computed(() => {
  return [
    'a-input',
    props.disabled === true ? 'a-input-disabled': '',
    props.clearable === true ? '': '1'
  ]
})
const clearStyle = computed(() => {
  return [
    {
      'display': props.clearable ?props.modelValue ? 'block':'none' : 'none'
    }
  ]
})
</script>

<style scope lang="scss">
.a-input {
  display: inline-block;
  min-width: 250px;
  position: relative;
  margin: 10px;
  input {
    outline: none;
    border: 1px solid $border;
    line-height: 1;
    padding: 10px 8px;
    width: 100%;
    font-size: 14px;
    color: $color;
    border-radius: 4px;
    transition: all .15s ease;
    &:focus {
      border-color: $primary;
    }
  }
  .clear-icon {
    position: absolute;
    top: 10px;
    right: 4px;
    cursor: pointer;
  }
}
.a-input-disabled {
  input {
    cursor: no-drop;
  }
}
</style>
