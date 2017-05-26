<template>
  <div>
    <div class="charts">
      <div class="first">
        <div>
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </div>
        <div>
          <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
        </div>
      </div>

      <div class="second">
        <div>
          <ve-column :data="chartData" :settings="chartSettings"></ve-column>
        </div>
        <div>
          <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
        </div>
      </div>

      <div class="third">
        <div>
          <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
        </div>
        <div>
          <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
        </div>
      </div>

      <div class="forth">
        <div>
          <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
        </div>
        <div>
          <ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>
        </div>
      </div>


      <div class="five">

      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VeLine from 'v-charts/lib/line'
  export default{
    data(){
      return {
        chartSettings: {}
      }
    },
    methods: {
      changeType: function () {
        this.index++
        if (this.index >= this.typeArr.length) {
          this.index = 0
        }
        this.chartSettings = {type: this.typeArr[this.index]}
      }
    },
    created: function () {
      this.chartData = {
        columns: ['日期', '销售额-1季度'],
        rows: [
          {'日期': '1月1日', '销售额-1季度': 1523},
          {'日期': '1月2日', '销售额-1季度': 1223},
          {'日期': '1月3日', '销售额-1季度': 2123},
          {'日期': '1月4日', '销售额-1季度': 4123},
          {'日期': '1月5日', '销售额-1季度': 3123},
          {'日期': '1月6日', '销售额-1季度': 7123}
        ]
      }
      this.typeArr = ['line', 'column', 'pie']
      this.index = 0
      this.chartSettings = {type: this.typeArr[this.index]}
    },
  }

</script>
<style lang="scss">
  .charts {
    .first, .second, .third, .forth, .five {
      width: 100%;
      display: flex;
      div {
        flex: 1;
      }
    }

  }

</style>
