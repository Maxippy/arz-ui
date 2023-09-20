<template>
  <div class="container">
    <a-button>普通按钮</a-button>
    <a-button type="primary">平常按钮</a-button>
    <a-button type="info">信息按钮</a-button>
    <a-button type="warning">警告按钮</a-button>
    <a-button type="error">错误按钮</a-button>
    <a-button type="error" disabled>不可用按钮</a-button>
    <a-button type="primary" plain>圆角按钮</a-button>
    <a-button circle type="primary">1</a-button>
  </div>
</template>

<script lang="ts" setup>
const handleClick = () => {
  alert()
}
</script>

<style lang="scss" scoped></style>
