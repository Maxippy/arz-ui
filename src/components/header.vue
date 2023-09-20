<template>
  <div class="header">
    <div class="header-left" @click="goComponent">
      <div class="img">
        <img src="@/assets/img/logo.png" alt="a-ui">
      </div>
      <div class="context">
        <span class="context">A-UI</span>
      </div>
    </div>
    <div class="header-right">
      <div :class="['right-item', currentIndex === index ? 'active':'']" v-for="(item, index) in routeArr" :key="item.name" @click="checkRoute(item.path, index)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { headerStore } from '@/store/index'
import { storeToRefs } from 'pinia'
const routeArr = [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/home',
    name: '组件'
  },
  {
    path: '/log',
    name: '更新日志'
  },
  {
    path: '/question',
    name: '问题反馈'
  }
]
const router = useRouter()
const route = useRoute()
const store = headerStore()
const { currentIndex } = storeToRefs(store)
const checkRoute = (path: string, index: number) => {
  if (path === route.path) return
  currentIndex.value = index
  router.push(path)
}
const goComponent = () => {
  currentIndex.value = 0
  router.push('/')
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .header-left {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 100%;
      height: 45px;
    }
  }
  .header-right {
    display: flex;
    min-height: 45px;
    .right-item {
      margin-right: 25px;
      padding: 10px 3px;
      cursor: pointer;
      &:hover {
        color: $primary;
        border-bottom: 2px solid $primary;
      }
      &.active {
        color: $primary;
        border-bottom: 2px solid $primary;
      }
    }
  }
}

</style>