<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tableData: [{
          date: '2017-05-05',
          name: '李木子',
          address: '南京市建邺区梦都大街50号上海非码网络科技有限公司'
        }, {
          date: '2017-05-05',
          name: '李木子',
          address: '南京市建邺区梦都大街50号上海非码网络科技有限公司'
        }, {
          date: '2017-05-05',
          name: '李木子',
          address: '南京市建邺区梦都大街50号上海非码网络科技有限公司'
        }, {
          date: '2017-05-05',
          name: '李木子',
          address: '南京市建邺区梦都大街50号上海非码网络科技有限公司'
        }]
      }
    }
  }

</script>
<style lang="scss">

</style>
