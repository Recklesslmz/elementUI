<template>
  <div class="register">
    <el-form :rules="rules" ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.region" placeholder="请选择性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="学历">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="博士" name="type"></el-checkbox>
          <el-checkbox label="硕士" name="type"></el-checkbox>
          <el-checkbox label="本科" name="type"></el-checkbox>
          <el-checkbox label="专科" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" placeholder="请简单的介绍一下你自己" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {
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
        rules: {
          name: [
            {required: true, message: '请输入您的姓名', trigger: 'blur'},
            {min: 1, max: 10, message: '长度在 1 到 5 个字符', trigger: 'blur'}
          ]
        },
        success: {
          title: "SUCCESS",
          message: '注册成功'
        },
        fail: {
          title: 'FAIL',
          message: '注册失败'
        }
      }
    },
    methods: {
      onSubmit(form) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.open(1)
          } else {
            this.open(2)
            return false
          }
        })
      },
      open(index) {
        console.log(index)
        const h = this.$createElement;
        switch (index){
          case 1:
            this.$notify({
              title: this.success.title,
              message: h('i', {style: 'color: teal'}, this.success.message),
              type:'success'
            });
            break
          case 2:
            this.$notify.error({
              title: this.fail.title,
              message: h('i', {style: 'color: teal'}, this.fail.message)
            });
            break
        }

      },
    }
  }
</script>
<style lang="scss">
  .register {
    width: 30%;
    min-width: 400px;
  }

</style>
