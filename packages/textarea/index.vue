<template>
  <div :class="tClass">
    <textarea 
      name="" 
      id="" 
      :cols="cols" 
      :rows="rows" 
      @input="input" 
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @focus="focus"
      @blur="blur"
      :maxlength="maxlength"
      :style="tStyle"
    ></textarea>
    <div class="max-length-inline">{{ currentLength + '/' + maxlength }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'aTextarea'
}
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const props = defineProps({
  modelValue: String,
  cols: {
    type: Number,
    default: 20
  },
  rows: {
    type: Number,
    default: 4
  },
  disabled: Boolean,
  readonly: Boolean,
  placeholder: String,
  maxlength: {
    type: Number,
    default: 100
  },
  resize: {
    type: Boolean,
    default: true
  }
})
const currentLength = ref(0)
const emits = defineEmits<{
  (e: 'update:modelValue', ele: any): void,
  (e: 'focus', ele: any): void,
  (e: 'blur', ele: any): void
}>()
const input = (e: any) => {
  emits('update:modelValue', e.target.value)
  if (currentLength.value > props.maxlength) {
    currentLength.value = props.maxlength
  }
  currentLength.value = e.target.value.length
}

const tClass = computed(() => {
  return [
    'a-textarea',
    props.disabled ? 'a-textarea-disabled': ''
  ]
})

const tStyle = computed(() => {
  return `resize: ${props.resize ? 'auto':'none'}`
})
const focus = (e: any) => {
  emits('focus', e.target.value)
}

const blur = (e: any) => {
  emits('blur', e.target.value)
}
</script>

<style lang="scss" scoped>
.a-textarea {
  width: auto;
  height: auto;
  display: inline-block;
  overflow: hidden;
  position: relative;
  textarea {
    padding: 10px 8px;
    outline: none;
    border-style: $border;
    border-radius: 4px;
    font-size: 14px;
    color: $color;
    &:focus {
      border: 1px solid $primary;
    }
  }
  textarea::placeholder {
    color: #c6c8cc;
  }
  .max-length-inline {
    width: 100%;
    line-height: 20px;
    font-size: 12px;
    padding: 0 10px;
    color: #aeafb3;
    position: absolute;
    text-align: right;
    bottom: 10px;
    box-sizing: border-box;
  }
}
.a-textarea-disabled {
  textarea {
    cursor: no-drop;
  }
}
</style>
