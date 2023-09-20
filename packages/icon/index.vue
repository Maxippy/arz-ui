<template>
   <svg
    class="icon"
    aria-hidden="true"
  >
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'aIcon'
}
</script>

<script setup lang="ts">
import { computed, withDefaults } from 'vue';
import '../assets/js/iconfont'
export interface iProps {
  name: string
}

const props = withDefaults(defineProps<iProps>(), {
  name: ''
})

const IconName = computed(() => {
  return `#icon-${props.name}`
})
</script>

<style type="text/css">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>