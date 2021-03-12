<template>
  <div
    :class="className"
    :style="{height: height, width: width}"
  />
</template>

<script>
import echarts from 'echarts'
import ResizeMixin from '@/components/Charts/mixins/resize'


export default {
  name: 'LineChart',
  mixins: [ResizeMixin],

  props: {
    chartData: {
      default: true,
    },
    className: {
      default: 'chart',
    },
    width: {
      default: '100%',
    },
    height: {
      default: '350px'
    }
  },

  watch: {
    chartData: {
      handler(v) {
        this.setOptions(value)

      },
      deep: true
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },

  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {

    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },

    setOptions(chartData) {
      if (this.chart) {
        this.chart.setOption({
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 30,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: 8
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          legend: {
            data: ['expected', 'actual']
          },
          series: [{
            name: 'expected',
            itemStyle: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2
              }
            },
            smooth: true,
            type: 'line',
            data: chartData.expectedData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
            {
              name: 'actual',
              smooth: true,
              type: 'line',
              itemStyle: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              },
              data: chartData.actualData,
              animationDuration: 2800,
              animationEasing: 'quadraticOut'
            }]
        })
      }
    }
  }

}
</script>
