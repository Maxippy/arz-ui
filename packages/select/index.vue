<template>
  <div class="a-select" v-clickOutside>
    <input 
      type="text" 
      readonly 
      :value="selectVal" 
      :disabled="disabled" 
      :placeholder="placeholder"
    >
    <transition name="fade">
      <div class="a-position-box" v-if="positionShow">
        <li 
          v-for="(item, index) in options" 
          @click="changeVal(item, index)" 
          :class="{'item-disabled-li':item.disabled, 'item-active-li': activeIndex === index}"
          class="item-li"
          >{{ item[filedLabel as keyof iOptoins] }}
        </li>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'aSelect'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
interface iOptoins {
  label: string
  value: string
  disabled?: boolean
}
const props = defineProps({
  options: {
    type: Array<iOptoins>,
    default: []
  },
  disabled: Boolean,
  filedLabel: {
    type: String,
    default: 'label'
  },
  filedValue: {
    type: String,
    default: 'value'
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  modelValue: String
})
const emits = defineEmits<{
  (e: 'change', option: any): void,
  (e: 'update:modelValue', option: any): void
}>()
const selectVal = ref(props.modelValue)
const positionShow = ref(false)
const activeIndex = ref(-1)
// 获取最初的索引值
props.options.forEach((item, index) => {
  if (item[props.filedLabel as keyof iOptoins] === props.modelValue) {
    activeIndex.value = index
  }
})
const vClickOutside = {
  beforeMount(el: HTMLDivElement) {
    let handler = (e: any) => {    
      if (!props.disabled) {
        if (el.contains(e.target) && e.target.className.indexOf('item-li') == -1) {
          positionShow.value = !positionShow.value
        } else {
          if (!(e.target.className.indexOf('item-disabled-li') == -1)) {
            positionShow.value = true
          } else {
            positionShow.value = false
          }
        }
      }
    }
    document.addEventListener('click', handler)
  }
}

const changeVal = (option: any, index: number) => {
  if (!option.disabled) {
    activeIndex.value = index
    selectVal.value = option[props.filedLabel]
    positionShow.value = false
    emits('change', option)
    emits('update:modelValue', option[props.filedLabel])
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5 ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.a-select {
  min-width: 250px;
  display: inline-block;
  height: 40px;
  position: relative;
  input {
    border: 1px solid $border;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
  }
  .a-position-box {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 42px;
    border: 1px solid $border;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    z-index: 99;
    background: #fff;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background: #f0f0f0;
      }
    }
    li.item-disabled-li {
      cursor: no-drop;
      color: #808080;
      background: #f0f0f0;
    }
    li.item-active-li {
      color: $primary;
    }
  }
}
</style>
