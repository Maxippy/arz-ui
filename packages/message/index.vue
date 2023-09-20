<template>
  <Transition name="slide-fade">
    <div :class="['a-message', customClass]" :style="styleMessage" v-show="isShow">
      <template v-if="isMessage">
        <i></i>
        <span class="message">{{ message }}</span>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive, computed, withDefaults } from 'vue'
import type { VNode } from 'vue'
export interface IMessageProps {
  type?: string
  message: string | VNode
  icon?: string
  textColor?: string
  bgColor?: string
  customClass?: string
}

export interface IMessageType {
  icon?: string
  color?: string
  backgroundColor?: string
  borderColor?: string
}

export interface styleType {
  info?: IMessageType
  warn?: IMessageType
  error?: IMessageType
  success?: IMessageType
  custom?: IMessageType
}

const props = withDefaults(defineProps<IMessageProps>(), {
  type: 'info',
  message: '',
  icon: '',
  textColor: '',
  bgColor: '',
  customClass: ''
})

const state = reactive({
  style: {
    info: {
      icon: props.icon || 't-icon-info',
      color: '#505050',
      backgroundColor: 'rgb(229, 227, 224)',
      borderColor: 'rgb(229, 227, 224)'
    },
    warn: {
      icon: props.icon || 't-icon-warning',
      color: '#f57b29',
      backgroundColor: 'rgb(243 233 220)',
      borderColor: 'rgb(243 233 220)'
    },
    error: {
      icon: props.icon || 't-icon-delete-filling',
      color: '#ec3437',
      backgroundColor: 'rgb(251 228 228)',
      borderColor: 'rgb(251 228 228)'
    },
    success: {
      icon: props.icon || 't-icon-success',
      color: '#09b63d',
      backgroundColor: 'rgb(223 243 212)',
      borderColor: 'rgb(223 243 212)'
    },
    custom: {
      icon: props.icon,
      color: props.textColor,
      backgroundColor: props.bgColor,
      borderColor: props.bgColor
    }
  }
})

const isShow = ref(false)
const { style } = state
const isMessage = computed(() => {
  return typeof props.message === 'string'
})

const styleMessage = computed(() => {
  return style[props.type as keyof styleType]
})

onMounted(() => {
  if (props.message !== '') {
    isShow.value = true
  }
})
</script>

<script lang="ts">
export default {
  name: 'aMessage'
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
div.slide-fade-enter-from,
div.slide-fade-leave-to {
  transform: translate3d(-50%, -75px, 0);
}
.a-message {
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 25px;
  transform: translateX(-50%);
  height: auto;
  display: flex;
  align-items: center;
  min-height: 45px;
  padding: 5px 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  i {
    margin-right: 8px;
    vertical-align: middle;
    font-size: 16px;
    height: 100%;
    display: inline-block;
    /* float: left; */
  }
  .message {
    vertical-align: middle;
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
