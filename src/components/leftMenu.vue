<template>
  <div class="leftMenu">
    <el-menu :default-active="onRoutes" theme="dark" class="el-menu-vertical-demo" @open="handleOpen"
             @close="handleClose" router>
      <el-menu-item index="/home/"><i class="el-icon-edit"></i>关于我</el-menu-item>
      <el-menu-item index="/home/basetable"><i class="el-icon-message"></i>基础表格</el-menu-item>
      <el-menu-item index="/home/charts"><i class="el-icon-date"></i>图表</el-menu-item>
      <el-menu-item index="/home/register"><i class="el-icon-menu"></i>注册</el-menu-item>
      <el-menu-item index="/home/mainActive"><i class="el-icon-minus"></i>主页</el-menu-item>
      <el-menu-item index="/home/markdown"><i class="el-icon-edit"></i>markdown</el-menu-item>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>
<style lang="scss">
  .leftMenu {
    display: block;
    position: fixed;
    bottom: 0;
    top: 60px;
    width: 190px;
    left: 0;
    z-index: 999;
    ul {
      height: 100%;
      border-radius: 0;
    }
  }
</style>
