<template>
  <div class="a-tree">
    <li v-for="(item, index) in options" :key="index" @click.stop="openLable(item)">
      {{ item.label }}
      <transition name="slide-fade">
        <ul v-show="item.isOpen" v-if="item.children && item.children.length">
          <a-tree :options="item.children"></a-tree>
        </ul>
      </transition>
    </li>
  </div>
</template>

<script lang="ts">
export default {
  name: "aTree"
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
interface iOptions {
  label: string,
  value: string
  children?: Array<iOptions>
  isOpen?: Boolean
}
const porps = defineProps({
  options: {
    type: Array<iOptions>,
    default: []
  }
})
const isShow = ref(false)
const openLable = (item: iOptions) => {
  item.isOpen = !item.isOpen
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease-out;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1, .5, .8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translate(20px);
  opacity: 0;
}
</style>
