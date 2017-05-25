<template>
  <div class="header">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="menuSub">
        <el-menu-item index="1">基本布局</el-menu-item>
        <el-submenu index="2">
          <template slot="title">其他</template>
          <el-menu-item index="2-1">对话框</el-menu-item>
          <el-menu-item index="2-2">文字提示</el-menu-item>
          <el-menu-item index="2-3">弹出框</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">折叠面板</el-menu-item>
      </div>
    </el-menu>
    <div class="line"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
<style lang="scss">
  .header {
    .el-menu-demo {
      width: 100%;
      min-width: 500px;
      .menuSub{
        position: relative;
        left:10rem;
      }
    }
  }

</style>
