<template>
  <div class="basetable" v-loading="loading"
       element-loading-text="拼命加载中">
    <div class="selectMenu">
      <el-date-picker v-model="value6" type="daterange" placeholder="选择日期范围">
      </el-date-picker>
      <el-button type="primary" @click="add">新增</el-button>
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
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper"
                     :total="1000">
      </el-pagination>
    </div>
    <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reformat} from '../common/reformartDate'

  export default {
    data() {
      return {
        loading: true,
        tableData: [{
          date: '2017-05-01',
          name: '士兵76',
          region: '男',
          address: '国王大道'
        }, {
          date: '2017-05-02',
          name: '源氏',
          region: '男',
          address: '尼泊尔'
        }, {
          date: '2017-05-03',
          name: '黑百合',
          region: '女',
          address: '沃斯卡亚工业区'
        }, {
          date: '2017-05-04',
          name: '猎空',
          region: '女',
          address: '国王大道'
        }, {
          date: '2017-05-03',
          name: '查莉娅',
          region: '女',
          address: '沃斯卡亚工业区'
        }, {
          date: '2017-05-03',
          name: '禅雅塔',
          region: '男',
          address: '尼泊尔'
        }, {
          date: '2017-05-03',
          name: '半藏',
          region: '女',
          address: '花村'
        },],
        dialogFormVisible: false,
        formLabelWidth: '80px',
        form: {},
        value6: '',
        currentPage3: 1,
        currentIndex: '',
      }
    },
    created() {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    },
    methods: {
      showTime() {
        this.$alert(this.value6, '起止时间', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: '已显示'
            })
          }
        })
      },
      add() {
        this.form = {
          date: '',
          name: '',
          region: '',
          address: ''
        }
        this.dialogFormVisible = true
      },
      update() {
        this.form.date = reformat(this.form.date)
        this.tableData.push(this.form)
        this.dialogFormVisible = false
      },
      handleEdit(index, row) {
        this.form = this.tableData[index]
        this.currentIndex = index
        this.dialogFormVisible = true
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      cancel() {
        this.dialogFormVisible = false
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    },
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
    }
    .page {
      float: right;
      margin: {
        top: 10px;
      }
    }
  }
</style>
