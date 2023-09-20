<template>
  <a-table :options="options"></a-table>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const state = reactive({
  options: {
    fileds: [
      {field:'id',title:'ID',align:'left'},
      {field:'name',title:'姓名',align:'left'},
      {field:'job',title:'职业',align:'left'},
      {field:'address',title:'地址',align:'left'},
      {field:'from',title:'籍贯',align:'left'}
    ],
    datas:[
      {id:10,name:'王小二',job:'放羊娃',address:'在那遥远的小山村',from:"民间流传故事"},
      {id:13,name:'猪八戒',job:'徒弟',address:'高老庄',from:"西游记神话故事"},
      {id:2,name:'刘老四',job:'农民',address:'可能在中国',from:"想象出来的"},
      {id:11,name:'白骨精',job:'妖精',address:'西游记',from:"西游记神话故事"},
    ]
  }
})

const { options } = state
</script>

<style lang="scss" scoped></style>
