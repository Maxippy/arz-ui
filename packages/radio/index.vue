<template>
  <div class="a-radio">
    <div 
      class="a-item-radio" 
      v-for="(item, index) in options" 
      @click="change(item, index)" 
      :class="{'a-item-disabled-radio': item.disabled}"
    >
      <span :class="{'active': activeIndex === index}" ></span>
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'aRadio'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
interface iOptions {
  label: string,
  value: string,
  disabled?: boolean,
}
const props = defineProps({
  options: {
    type: Array<iOptions>,
    default: []
  },
  inline: {
    type: Boolean,
    default: true
  },
  filedLable: {
    type: String,
    default: 'label'
  },
  filedValue: {
    type: String,
    default: 'value'
  },
  customColor: {
    type: String,
    default: '#409EFF'
  }
})
const emits = defineEmits(['change'])
const activeIndex = ref(-1)

const change = (e: iOptions, index: number) => {
  if (!e.disabled) {
    activeIndex.value = index
    emits('change', e)
  }
}
const isInline = ref('inline-flex')
isInline.value = props.inline ? 'inline-flex':'flex'
</script>

<style lang="scss" scoped>
.a-radio {
  width: 100%;
  height: auto;
  overflow: hidden;
  .a-item-radio {
    width: auto;
    height: auto;
    overflow: hidden;
    display: v-bind(isInline);
    align-items: center;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 15px;
    user-select: none;
    span {
      width: 14px;
      height: 14px;
      display: inline-block;
      position: relative;
      border: 1px solid rgb(128, 125, 125);
      border-radius: 50%;
      margin: 3px 8px 0 0;
      background: #fff;
      transition: transform .15s ease-in;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -2px 0 0 -2px;
        transition: .15s ease-in;
      }
    }
    span.active {
      background: v-bind('props.customColor');
      border: 1px solid v-bind('props.customColor');
    }
  }
  .a-item-disabled-radio {
    cursor: no-drop;
    color: #808080;
    span {
      border: 1px solid #b9b9b9;
      background: #ebebeb;
      &::after {
        background-color: #999;
      }
    }
  }
}
</style>
