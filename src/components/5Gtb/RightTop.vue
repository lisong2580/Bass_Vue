<template>
  <div class="">
    <right-tips>
      <span slot="ritname">5G迁转</span>
      <div slot="ritchart" id="topBar" :style="{width:'90%',height:'150px',margin:'0 auto'}" ></div>
    </right-tips>
  </div>
</template>

<script>
import rightTips from './RightTips'
export default {
  name: 'RightTop',
  components:{
    'right-tips':rightTips
  },
  data () {
    return {
      righttoplist:[]
      // "righttoplist":[
      //   {"name":"贵阳","leiji":"10","xianxia":"7"},
      //   {"name":"毕节","leiji":"15","xianxia":"10"},
      //   {"name":"遵义","leiji":"30","xianxia":"17"},
      //   {"name":"黔东南","leiji":"55","xianxia":"20"},
      //   {"name":"黔西南","leiji":"60","xianxia":"31"},
      //   {"name":"黔南","leiji":"62","xianxia":"18"},
      //   {"name":"六盘水","leiji":"80","xianxia":"28"},
      //   {"name":"铜仁","leiji":"60","xianxia":"16"},
      //   {"name":"安顺","leiji":"10","xianxia":"27"},
      //   {"name":"贵安","leiji":"62","xianxia":"45"},
      //   {"name":"省政企","leiji":"80","xianxia":"19"}
      // ]
    }
  },
  mounted:function(){
    this.BarChart()
    this.rttopAjax()
  },
  methods:{
    rttopAjax(){
      let _this = this;
      this.$axios({
        method: "get",
        url: "../../../static/qianzhuan.json",
      })
      .then(res => {
        _this.righttoplist = res.data.righttoplist;
        _this.BarChart()
      })
      .catch(res => {  
        _this.BarChart()
        console.log("请求失败：", res);
      });
    },
    BarChart(){
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('topBar'));

      let xAxis = [],datali = [],dataxi = []
      this.righttoplist.map((data) => {
        xAxis.push(data.name)
        datali.push(data.leiji)
        dataxi.push(data.xianxia)
        return xAxis, datali, dataxi
      })

      myChart.setOption({
        tooltip: { //提示框组件
          trigger: 'axis',
          formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
          axisPointer: {
            type: 'shadow',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
          }
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '1%',
          top:'15%',
          containLabel: true,
        },
        legend: {//图例组件，颜色和名字
          left:'40%',
          top:'0%',
          itemGap: 6,
          itemWidth: 8,
          itemHeight: 8,
          data:[{name:'月累计',},{name:'线下',}],
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,            
          }
        },
        xAxis: [
          {
            type: 'category',
            //	boundaryGap: true,//坐标轴两边留白
            // data:["贵阳","毕节","遵义","黔东南","黔西南","黔南","六盘水","铜仁","安顺","贵安","省政企"],
            data:xAxis,
            axisLabel: { //坐标轴刻度标签的相关设置。
              interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
              //	margin:15,
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
              },
              // rotate:50,
            },
            axisTick:{//坐标轴刻度相关设置。
              show: false,
            },
            axisLine:{//坐标轴轴线相关设置
              show: false
              // lineStyle:{
              //   color:'#fff',
              //   opacity:0.2
              // }
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
              show: true,
              lineStyle: {
                color: ['#052a46'],
                type:'dashed',
                // opacity:0.06
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
              }
            },
            axisLine:{
              show: false
            },
            axisTick:{
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#052a46'],
                type:'dashed',
                // opacity:0.06
              }
            }
          }
        ],
        series : [
          {
            name:'月累计',
            type:'bar',
            data:datali,
            barWidth: 5,
            barGap:0.5,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
            itemStyle: {
              normal: {
                  show: true,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#17c0ff'
                  }, {
                      offset: 1,
                      color: '#107fff'
                  }]),
                  // barBorderRadius: 50,
                  borderWidth: 0,
              }
            },
          },
          {
            name:'线下',
            type:'bar',
            data:dataxi,
            barWidth: 5,
            barGap:0.5,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
            itemStyle: {
              normal: {
                  show: true,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#e6a441'
                  }, {
                      offset: 1,
                      color: '#ff9645'
                  }]),
                  // barBorderRadius: 50,
                  borderWidth: 0,
              }
            },
          }
        ]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>