<template>
<div class="basetable">
  <div class="selectMenu">
    <el-date-picker v-model="value3" type="datetimerange" placeholder="选择时间范围">
    </el-date-picker>
  </div>
  <div>
    <el-button @click='showTime'>显示时间</el-button>
  </div>
  <div class="tableMain">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
       <el-button
         size="small"
         @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
       <el-button
         size="small"
         type="danger"
         @click="handleDelete(scope.$index, scope.row)">删除</el-button>
     </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="page">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
    </el-pagination>
  </div>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tableData: [{
        date: '2017-05-01',
        name: '李木子',
        address: '南京市建邺区梦都大街50号上海非码网络科技有限公司'
      }, {
        date: '2017-05-02',
        name: '李木子',
        address: '南京市建邺区梦都大街50号上海非码网络科技有限公司'
      }, {
        date: '2017-05-03',
        name: '李木子',
        address: '南京市建邺区梦都大街50号上海非码网络科技有限公司'
      }, {
        date: '2017-05-04',
        name: '李木子',
        address: '南京市建邺区梦都大街50号上海非码网络科技有限公司'
      }],
      gridData: [{
         date: '2016-05-02',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1518 弄'
       }, {
         date: '2016-05-04',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1518 弄'
       }, {
         date: '2016-05-01',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1518 弄'
       }, {
         date: '2016-05-03',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1518 弄'
       }],
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
         name: '',
         region: '',
         date1: '',
         date2: '',
         delivery: false,
         type: [],
         resource: '',
         desc: ''
       },
      value3: [new Date(2017, 10, 10, 10, 10), new Date(2017, 10, 11, 10, 10)],
      currentPage3: 1,
    }
  },
  methods: {
    showTime() {
      this.$alert(this.value3, '起止时间', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: '已显示'
          });
        }
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
      console.log(this.tableData)
      this.dialogFormVisible=true
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script>
<style lang="scss">
.basetable {
    .selectMenu {}
    .tableMain {
        margin: {
            top: 10px;
        };
    }
    .page {
        float: right;
        margin: {
            top: 10px;
        };
    }
}
</style>
