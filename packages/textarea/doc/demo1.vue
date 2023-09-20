<template>
  <div>
    <!-- <t-textarea rows="10" cols="20" v-model="Val"></t-textarea>
    <t-textarea rows="10" cols="20" v-model="Val" disabled></t-textarea>
    <t-textarea rows="10" cols="20" v-model="Val" readonly></t-textarea> -->
    <a-textarea :rows="10" :cols="20" v-model="Val" placeholder="请输入" :maxlength="100" :resize="true"></a-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const Val = ref('')
</script>

<style lang="scss" scoped></style>
