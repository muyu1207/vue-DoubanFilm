<template>
    <el-table
      :data="tableData"
      style="width: 1000px;margin:0px auto;">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            id: '1',
            name: '内置过度动画',
            desc: '链接'
          }, {
            id: '2',
            name: 'Layout布局',
            desc: '链接'
          }, {
            id: '3',
            name: 'Color色彩',
            desc: '链接'
          }, {
            id: '4',
            name: 'Typography 字体',
            desc: '链接'
          }]
        }
      }
    }
  </script>