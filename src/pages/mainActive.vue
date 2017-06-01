<template>
<div>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content bg-purple bg-f">
        <div class="content-font">
          <div class="nums">55.0</div>
          <div class="desc">当前余额</div>
        </div>
        <div class="moreData">
          <div>查看更多</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple bg-s">
        <div class="content-font">
          <div class="nums">55.0</div>
          <div class="desc">昨日分润</div>
        </div>
        <div class="moreData">
          <div>查看更多</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple bg-t">
        <div class="content-font">
          <div class="nums">55.0</div>
          <div class="desc">新增商户</div>
        </div>
        <div class="moreData">
          <div>查看更多</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple bg-h">
        <div class="content-font">
          <div class="nums">55.0</div>
          <div class="desc">新增服务商</div>
        </div>
        <div class="moreData">
          <div>查看更多</div>
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>
<style lang="scss">
.el-row {

    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 136px;
    position: relative;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
.bg-f {
    background-color: #58B7FF;
}
.bg-s {
    background-color: #13CE66;
}
.bg-t {
    background-color: #F7BA2A;
}
.bg-h {
    background-color: #FF4949;
}
.content-font {
    padding-top: 15px;
    margin-left: 15px;
    .nums {
        font: {
            size: 40px;
        }
        color: #fff;
    }
    .desc {
        color: #fff;
        margin: {
            top: 10px;
        }
        font: {
            size: 15px;
            weight: 300;
        }
    }
}
.moreData {
    position: absolute;
    bottom: 1px;
    width: 100%;
    height: 25px;
    font: {
        size: 10px;
        weight: 300;
    }
    background: rgba(0, 0, 0, .1);
    text-align: center;
    color: #fff;
    div {
        line-height: 25px;
    }
}
</style>
