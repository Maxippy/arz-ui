<template>
  <div class="container">
    <a-scroll-tab :scrollTabs="options"></a-scroll-tab>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const data = reactive({
  options: [
    { id: 1, label: '长沙' },
    { id: 2, label: '岳阳' },
    { id: 3, label: '株洲' },
    { id: 4, label: '衡阳' },
    { id: 5, label: '常德' },
    { id: 6, label: '郴州' },
    { id: 7, label: '永州' },
    { id: 8, label: '益阳' },
    { id: 9, label: '耒阳' },
    { id: 10, label: '邵阳' }
  ]
})

const { options } = data
</script>

<style lang="scss" scoped>
.container {
  width: 550px;
}
</style>
