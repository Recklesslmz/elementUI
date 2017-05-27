<template>
  <div class="basetable">
    <div class="selectMenu">
      <el-date-picker
        v-model="value3"
        type="datetimerange"
        placeholder="选择时间范围">
      </el-date-picker>
    </div>
    <div class="tableMain">
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
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>

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
        }],
        value3: [new Date(2017, 10, 10, 10, 10), new Date(2017, 10, 11, 10, 10)],
        currentPage3: 1,
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }

</script>
<style lang="scss">
  .basetable {
    .selectMenu {

    }
    .tableMain {
      margin: {
        top: 10px;
      }
    ;
    }
    .page {
      float: right;
      margin: {
        top: 10px;
      }
    ;
    }
  }

</style>
