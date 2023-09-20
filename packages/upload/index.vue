<template>
  <div class="a-upload">
    <input 
      type="file" 
      class="upload-file" 
      ref="inpRef" 
      @change="inpChange"
      :multiple="multiple"
    >
    <t-button @click="fileChange" :type="btnType">选择文件</t-button>
    <div class="area-box" @click="fileChange" ref="areaRef" :class="{'active': isActive}"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'aUpload'
}
</script>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
const props = defineProps({
  multiple: Boolean,
  btnType: {
    type: String,
    default: 'primary'
  }
})
const emits = defineEmits<{
  (e: 'change', el: any): void
  (e: 'update:files'): void
}>()
const inpRef = ref<HTMLElement | null>(null)
const areaRef = ref<HTMLElement | null>(null)
const fileList: Array<any> = reactive([])
const isActive = ref(false)
const fileChange = () => {
  (inpRef.value as HTMLElement).click()
}

const inpChange = (e: Event) => {
  if (e.target !== null) {
    fileList.unshift((e.target as HTMLInputElement).files)
    emits('change', fileList)
  }
}

onMounted(() => {
  let dropArea = areaRef.value as HTMLElement
  dropArea.addEventListener('drop', (e) => {
    e.stopPropagation()
    e.preventDefault()
    emits('change', e.dataTransfer!.files)
    isActive.value = false
  })
  dropArea.addEventListener('dragleave', (e) => {
    e.stopPropagation()
    e.preventDefault()
    isActive.value = false
  })
  dropArea.addEventListener('dragenter', (e) => {
    e.stopPropagation()
    e.preventDefault()
    isActive.value = true
  })
  dropArea.addEventListener('dragover', (e) => {
    e.stopPropagation()
    e.preventDefault()
    isActive.value = true
  })
})
</script>

<style lang="scss" scoped>
.upload-file {
  display: none;
}
.area-box {
  width: 200px;
  height: 200px;
  border: 1px dashed #000;
  margin-top: 20px;
  &:hover {
    border-color: $primary;
  }
}
.area-box.active {
  border-color: $primary;
}

</style>
