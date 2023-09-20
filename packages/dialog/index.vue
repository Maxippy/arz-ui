<template>
  <Teleport to="body">
    <transition name="fade">
      <div :class="['a-dialog-default', customClass]" v-if="modelValue" @click="closeDialog($event)">
        <div class="a-dialog-contentBox" :style="{'width': width, 'top': top}">
          <div class="a-dialog-header">
            <p class="a-dialog-title" :style="`text-align: ${align}`">
              <slot name="header" v-if="$slot['header']"></slot>
              <span v-else>{{ title }}</span>
            </p>
            <i class="a-modal-close a-icon-close" @click="close" v-if="showClose"></i>
          </div>
          <div class="a-dialog-content">
            <slot name="content"></slot>
          </div>
          <div class="a-dialog-footer" :style="`text-align: ${align}`">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: 'aDialog'
}
</script>

<script lang="ts" setup>
import { withDefaults, useSlots, onMounted, watchEffect } from 'vue';
export interface iDialogProps {
  title?: string
  align?: string
  width?: string
  top?: string
  modelValue: boolean
  customClass?: string
  showClose?: boolean
  closeOnDialog?: boolean
  scrollLock?: boolean
}
const props = withDefaults(defineProps<iDialogProps>(), {
  title: '标题',
  align: '',
  width: '35%',
  top: '15%',
  modelValue: false,
  showClose: false,
  closeOnDialog: true,
  scrollLock: true
})

const emits = defineEmits<{
  (e: 'update:modelValue', el: boolean): void,
  (e: 'close'): void
}>()

const $slot = useSlots()

const close = () => {
  emits('close')
  emits('update:modelValue', false)
}

onMounted(() => {
  watchEffect(() => {
    if (props.modelValue) {
      if (props.scrollLock) {
        if (typeof document !== 'undefined') {
          document.body.style['overflow'] = 'hidden'
        }
      }
    } else {
      if (typeof document !== 'undefined') {
        document.body.style['overflow'] = 'initial'
      }
    }
  })
})

const closeDialog = (e: any) => {
  if (props.closeOnDialog) {
    if (e.target.className == 'a-dialog-default') {
      emits('update:modelValue', false)
      emits('close')
    }
  }
}
const aligns = props.align
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.a-dialog-default{
  width: 100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  background: rgba(0,0,0,.4);
  z-index: 8880;
  .a-dialog-contentBox{
    width: 35%;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    box-shadow: 0 2px 12px 0 rgba(7, 7, 7, 0.1);
    .a-dialog-header{
      width:100%;
      height: 50px;
      position: relative;
      padding: 0 20px;
      box-sizing: border-box;
      border-bottom:1px solid #f0f0f0;
      .a-dialog-title{
        margin:0;
        line-height: 50px;
        color:#505050;
        font-size:17px;
      }
      i.a-dialog-close{
        line-height: 50px;
        font-size:17px;
        position: absolute;
        right:20px;
        top:0;
        cursor: pointer;
      }
    }
    .a-dialog-content{
      padding:20px;
      box-sizing: border-box;
    }
    .a-dialog-footer{
      border-top:1px solid #f0f0f0;
      text-align: right;
      padding:10px 20px;
      box-sizing: border-box;
    }
  }
}
</style>
