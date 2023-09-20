<template>
  <div class="container">
    <div class="control left" @click="handleControlClick(false)" v-if="isShowLeft">
      <a-icon name="arrow-left-bold"></a-icon>
    </div>
    <div class="control right" @click="handleControlClick(true)" v-if="isShowRight">
      <a-icon name="arrow-right-bold"></a-icon>
    </div>
    <div class="scroll">
      <div class="scroll-content" ref="scrollContentRef">
        <div class="ite-Tabs" v-for="(item, index) in scrollTabs" :key="item.id ?? index">
          <div 
          :class="[currentIndex === index ? 'active' : '', 'tabItem']"
          @click="handleClick(index)"
          
          >{{ item.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'aScrollTab'
}
</script>

<script setup lang="ts">
import { withDefaults, ref, onMounted } from 'vue';
/**
 * props
 * 传入一个数组
 */
interface iScrollTabs {
  id?: number
  label: string
}
interface iProps {
  scrollTabs: iScrollTabs[]
  styleWidth?: string
}
const props = withDefaults(defineProps<iProps>(), {
  scrollTabs: () => [],
  styleWidth: ''
})
const currentIndex = ref(0)
const totalDistance = ref(0)
const isShowRight = ref(false)
const isShowLeft = ref(false)
const handleClick = (index: number) => {
  currentIndex.value = index
}
const handleControlClick = (isRight: boolean) => {
  const newIndex = isRight ? currentIndex.value + 1 : currentIndex.value - 1
  let scrollContent = scrollContentRef.value as HTMLDivElement
  const newEl = scrollContent.children[newIndex]
  let el = newEl as HTMLDivElement
  const newOffsetLeft = el.offsetLeft
  scrollContent.style.transform = `translate(-${newOffsetLeft}px)`
  currentIndex.value = newIndex
  // totalDistance.value = totalDistance.value - newOffsetLeft
  if (totalDistance.value > newOffsetLeft) {
    isShowRight.value = true
  } else {
    isShowRight.value = false
  }
  if (newOffsetLeft > 0) {
    isShowLeft.value = true
  } else {
    isShowLeft.value = false
  }
}
const scrollContentRef = ref<HTMLDivElement | null>(null)
onMounted(() => {
  let scrollContent = scrollContentRef.value as HTMLDivElement
  const scrollWidth = scrollContent.scrollWidth
  const clientWidth = scrollContent.clientWidth
  totalDistance.value = scrollWidth - clientWidth
  if (totalDistance.value > 0) {
    isShowRight.value = true
  }
  console.log(totalDistance.value);
  
})

</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
      .ite-Tabs {
        .tabItem {
          box-sizing: border-box;
          flex-shrink: 0;
          padding: 14px 16px;
          margin: 16px;
          border-radius: 3px;
          font-size: 17px;
          text-align: center;
          border: 0.5px solid #d8d8d8;
          white-space: nowrap;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }

          &.active {
            background-color: #00848A;
          }
        }
      }
    }
  }
  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, .14);
    cursor: pointer;
    
    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
}
/* .container {
  display: flex;
  position: relative;
  width: 500px;
  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
      .ite-Tabs {
        overflow: hidden;
      .tabItem {
        box-sizing: border-box;
        flex-shrink: 0;
        padding: 14px 16px;
        margin: 16px;
        border-radius: 3px;
        font-size: 17px;
        text-align: center;
        border: 0.5px solid #d8d8d8;
        white-space: nowrap;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }
        &.active {
          background-color: #00848A;
        }
      }
      }
    }
  }
} */
</style>
