<template>
  <div>
    <a-input v-model="Val" placeholder="请输入"></a-input>
    <a-input v-model="Val" placeholder="请输入" clearable></a-input>

    <p>{{ Val }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const Val = ref('')
</script>

<style lang="scss" scoped></style>
