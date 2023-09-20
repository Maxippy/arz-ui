<template>
  <div class="pre-code-box">
    <span class="t-copy" v-if="showCode" @click="copyCode"
      ><i class="t-icon-copy"></i
    ></span>
    <transition name="slide-fade">
      <pre
        class="language-html"
        v-if="showCode"
        v-highlight
      ><code class="language-html">{{ code }}</code></pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
      <i class="t-icon-code"></i>
    </div>
    <textarea id="inputCopy" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, withDefaults } from 'vue'
interface iProps {
  compName: string
  demoName: string
}
const showCode = ref(false)
const code = ref('')
const border = ref("1px solid rgba(0, 0, 0, .06)")
const props = withDefaults(defineProps<iProps>(), {
  compName: '',
  demoName: ''
})
console.log(props.compName, props.demoName)

async function getCode() {
  code.value = (await import(/* @vite-ignore */ `../../packages/${props.compName}/doc/${props.demoName}.vue?raw`)).default
  // const isDev = import.meta.env.MODE === 'development'
  // if (isDev) {
  //   code.value = (await import(/* @vite-ignore */ `../../packages/${props.compName}/doc/${props.demoName}.vue?raw`)).default
  // } else {
  //   code.value = await fetch(`../../packages/${props.compName}/doc/${props.demoName}.vue`).then((res) => res.text())
  // }
}
// 就是获取code
const copyCode = () => {
  // console.log(code.value)
}

const showOrhideCode = () => {
  showCode.value = !showCode.value
  if (showCode.value) {
    border.value = "0"
  } else {
    border.value = "1px solid rgba(0, 0, 0, .06)"
  }
}
onMounted(() => {
  getCode()
})
</script>

<style lang="scss" scoped>
#inputCopy {
  opacity: 0;
  border: 0;
  outline: none;
  height: 0;
  position: fixed;
  z-index: -99999999;
}
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}
.pre-code-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  margin: 10px 0 15px 0;
  position: relative;
  transition: all 0.15s ease-out;
  border: 1px solid $border;
  .t-copy {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    i {
      font-size: 22px;
      color: #b7b3b3;
      &:hover {
        color: #000;
      }
    }
  }
  .showCode {
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    color: #505050;
    cursor: pointer;
    i {
      margin-left: 10px;
    }
    i.rotate {
      transform: rotate(180deg);
    }
    &:hover {
      background: #f9f9f9;
      color: #0e80eb;
    }
  }
  &:hover {
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
  }
}
</style>
