<template>
  <div class="container">
    <div class="header">
      <Header />
    </div>
    <div class="content">
      <div class="left-menu">
        <li
          v-for="(item, index) in menuList[1].children"
          :key="index"
          :class="{active: activeIndex === index}"
          @click="switchMenu(item.name, index)"
        >{{ item.name }}</li>
      </div>
      <div class="router-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import menuList from '@/router/routerPage/page'
import { useRouter } from 'vue-router'
import Header from '@/components/header.vue'
const router = useRouter()
const activeIndex = ref(0)
const switchMenu = (item: string, index: number) => {
  activeIndex.value = index
  router.push({
    name: item
  })
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    .left-menu {
    width: 360px;
    height: auto;
    overflow-y: auto;
    border-right: 1px solid #f0f0f0;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
    }
    li.active {
      border-left: 4px solid #0e80eb;
      color: #0e80eb;
      background: rgba(14, 128, 235, .1);
    }
  }
  .router-view {
    flex: 1;
    height: auto;
    overflow-y: auto;
    padding: 0 15px;
    box-sizing: border-box;
  }
  }
}
</style>
