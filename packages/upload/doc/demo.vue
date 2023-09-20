<template>
  <div>
    <a-upload multiple @change="change"></a-upload>
  </div>
</template>

<script lang="ts" setup>
const change = (e: any) => {
  console.log(e);
}
</script>

<style lang="scss" scoped></style>
