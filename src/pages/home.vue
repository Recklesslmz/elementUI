<template>
  <div class="home">
    <div class="main">
      <div>
        <v-header></v-header>
      </div>
      <div class="left">
        <v-menu></v-menu>
      </div>
      <div class="content">
        <transition name="el-zoom-in-top">
          <router-view v-show="show"></router-view>
        </transition>
      </div>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import header from  '../components/header.vue'
  import leftMenu from '../components/leftMenu.vue'
  export default{
    data(){
      return {
        show: true
      }
    },
    components: {
      'v-header': header,
      'v-menu': leftMenu
    }
  }

</script>
<style lang="scss">
  $commonColor: '#20a0ff';
  .home {
    .content {
      position: absolute;
      left: 200px;
      top: 70px;
      bottom: 0;
      overflow: scroll;
      width: calc(100% - 210px);
    }
    .content::-webkit-scrollbar {
      display: none;
    }
  }

</style>
