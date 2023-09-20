<template>
  <div class="container">
    <!--header组件-->
    <div class="header">
      <Header></Header>
    </div>
    <div class="content">
      <div class="img">
        <img src="@/assets/img/logo2.png" alt="A-UI">
      </div>
      <h3>一套支持开发者使用的轻量级UI组件库，支持vue3+typescript</h3>
      <p>支持vite+typescript+vue3，轻量体积，快响应，强拓展，让我们一起来体验下AUI吧！</p>
      <div class="buttonGroups">
        <button @click="goComponent">立即上手</button>
        <button>Github</button>
      </div>
      <div class="links">
        <p>链接</p>
        <span>Github</span>
        <span>NPM</span>
        <span>更新日志</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Header from '@/components/header.vue'
import { headerStore } from '@/store/index'
import  { storeToRefs } from 'pinia'

const router = useRouter()
const store = headerStore()
const { currentIndex } = storeToRefs(store)
const goComponent = () => {
  currentIndex.value = 1
  router.push('/home')
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 300px;
    }
    h3 {
      color: #4A5264;
      font-size: 18px;
      margin: 16px 0 0;
    }
    p {
      color: #636E86;
      font-size: 12px;
      margin: 8px 0;
    }
    .buttonGroups {
      margin: 38px 0 0;
      button {
        margin: 0 18px 0 0;
        padding: 15px 50px;
        border-radius: 32px;
        outline: none;
        font-size: 17px;
        cursor: pointer;
        &:nth-child(1) {
          background-color: $primary;
          color: #fff;
          border: 1px solid $primary;
          &:hover {
            background-color: #409Ef1;
          }
        }
        &:nth-child(2) {
          background-color: #fff;
          color: #000;
          border: 1px solid #ccc;
          &:hover {
            border-color: $primary;
            color: $primary;
          }
        }
      }
    }
    .links {
      margin: 7px 0 30px;
      p {
        font-size: 20px;
        margin: 20px 85px;
      }
      span {
        color: $primary;
        font-size: 16px;
        margin: 5px 10px;
      }
    }
  }
}
</style>
