<template>
  <div :class="[`a-table-${size}`, customClass]">
    <table>
      <thead v-if="showHeader">
        <tr>
          <th 
            v-for="(item, index) in options.fileds" 
            :key="index" :style="`${headStyle};text-align: ${item.align}`"
          >
            <slot 
              :name="'head-' + item.field" 
              :scope="item" 
              v-if="$slot['head-' + item.field]"
            ></slot>
            <div v-else>{{ item.title }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(item, index) in options.datas" 
          :key="index"
        >
          <td 
            v-for="(it, id) in options.fileds"
            :key="id" 
            :style="`${rowStyle};width: ${it.width?(it.width): ''};'text-align': ${it.align}`"
          >
            <slot
              :name="it.field"
              :scope="{rowIndex: index, cellIndex: id, row: item}"
              v-if="$slot[it.field]"
            ></slot>
            <div v-else>{{ item[it.field as keyof iDatas] }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'aTable'
}
</script>

<script lang="ts" setup>
import { withDefaults, useSlots } from 'vue';
interface iFields {
  align?: string
  field: string
  title?: string
  width?: string
}
interface iDatas {
  id: number
  title?: string
  name?: string
  address?: string
  from?: string
}
interface iOptions {
  fileds: Array<iFields>
  datas: Array<iDatas>
}
interface iTableProps {
  size?: string
  customClass?: string
  options: iOptions
  showHeader?: boolean
  headStyle?: object
  rowStyle?: object
}
const props = withDefaults(defineProps<iTableProps>(), {
  size: 'default',
  customClass: '',
  options: () => { return { fileds: [], datas: [] } },
  showHeader: true,
  headStyle: () => { return {} },
  rowStyle: () => { return {} }
})
const $slot = useSlots()
</script>

<style lang="scss" scoped>
.a-table-default {
  width: 100%;
  height: auto;
  overflow: hidden;
  table {
    width: 100%;
    border-radius: 2px;
    box-sizing: border-box;
    border-spacing: 0;
    thead {
      th {
        padding: 14px 12px;
        box-sizing: border-box;
        text-align: left;
        line-height: 20px;
        color: #646468;
        font-weight: 550;
        font-size: 14px;
        border: 1px solid #f0f0f0;
        border-right: 0;
        background-color: #fafafa;
      }
      th:last-child {
        border-right: 1px solid #f0f0f0;
      }
    }
    tbody {
      tr {
        td {
          padding: 13.5px 12px;
          box-sizing: border-box;
          text-align: left;
          line-height: 20px;
          color: #505050;
          font-weight: 500;
          font-size: 14px;
          border: 1px solid #f0f0f0;
          border-right: 0;
          border-top: 0;
        }
        td:last-child {
          border-bottom: 1px solid #f0f0f0;
          border-right: 1px solid #f0f0f0;
        }
        &:hover {
          background: rgba(240, 240, 240, .2);
        }
      }
      tr:last-child {
        td {}
      }
    }
  }
}
.a-table-small{
  width:100%;
  height:auto;
  overflow:hidden;
  table{
    width:100%;
    border-radius: 2px;
    // border:1px solid #f0f0f0;
    box-sizing: border-box;
    border-spacing:0;
    thead{
      th{
        padding:10px 10px;
        box-sizing: border-box;
        text-align: left;
        line-height: 20px;
        color: #646468;
        font-weight: 550;
        font-size:14px;
        border:1px solid #f0f0f0;
        border-right:0;
        background-color:#fafafa ;
      }
      th:last-child{
        border-right:1px solid #f0f0f0;
      }
    }
    tbody{
      tr{
        td{
          padding:9.5px 10px;
          box-sizing: border-box;
          text-align: left;
          line-height: 20px;
          color: #505050;
          font-weight: 500;
          font-size:14px;
          border:1px solid #f0f0f0;
          border-right:0;
          border-top:0;
        }
        td:last-child{
          border-bottom:1px solid #f0f0f0;
          border-right:1px solid #f0f0f0;
        }
        &:hover{
          background:rgba(240,240,240,.2)
        }
      }
      tr:last-child{
        td{
          // border:1px solid #f0f0f0;
        }
        
      }
    }
  }
}
.a-table-mini{
  width:100%;
  height:auto;
  overflow:hidden;
  table{
    width:100%;
    border-radius: 2px;
    // border:1px solid #f0f0f0;
    box-sizing: border-box;
    border-spacing:0;
    thead{
      th{
        padding:8px 10px;
        box-sizing: border-box;
        text-align: left;
        line-height: 18px;
        color: #646468;
        font-weight: 550;
        font-size:12px;
        border:1px solid #f0f0f0;
        border-right:0;
        background-color:#fafafa ;
      }
      th:last-child{
        border-right:1px solid #f0f0f0;
      }
    }
    tbody{
      tr{
        td{
          padding:7.5px 10px;
          box-sizing: border-box;
          text-align: left;
          line-height: 18px;
          color: #505050;
          font-weight: 500;
          font-size:12px;
          border:1px solid #f0f0f0;
          border-right:0;
          border-top:0;
        }
        td:last-child{
          border-bottom:1px solid #f0f0f0;
          border-right:1px solid #f0f0f0;
        }
        &:hover{
          background:rgba(240,240,240,.2)
        }
      }
      tr:last-child{
        td{
          // border-bottom:0;
        }
        
      }
    }
  }
}
table{
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
}
</style>
