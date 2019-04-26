<template>
  <div class="el-main-inner">
    <el-card style="margin-bottom: 20px" shadow="never">
      <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
<!--       <el-button size="mini" @click="reDraw">重汇</el-button> -->
    </el-card>
  </div>
</template>
<script>
import Api from 'assets/js/api.js'

export default {
  name: 'Home',
  data() {
    return {
      myChart: null,
      routeName: this.$route.name,
      options: {
        title: {
          x: 'left', // 标题水平安放位置，默认为左对齐
          y: 'top',
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          showContent: true // 是否显示浮框
        },
        legend: {
          data: ['成功', '进行中', '失败']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
            name: '成功',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '进行中',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '失败',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    reDraw() {
      if (!this.myChart) return

      //更新数据
      let option = this.myChart.getOption();
      option.series[0].data = [500, 132, 101, 134, 90, 230, 400];
      this.myChart = this.myChart.setOption(option);
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      this.myChart.setOption(this.options)
    }
  }
}

</script>
<style lang="scss">
.el-pagination {
  float: right;
  margin: 25px 40px 0 0;
}

</style>
