<template>
  <div class="">
    <right-tips>
      <span slot="ritname">5G副卡</span>
      <div slot="ritchart" id="btmBar" :style="{width:'90%',height:'150px',margin:'0 auto'}" ></div>
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
      rightbtmlist:[]
      // "rightbtmlist":[
      //   {"name":"贵阳","value":"10"},
      //   {"name":"毕节","value":"15"},
      //   {"name":"遵义","value":"30"},
      //   {"name":"黔东南","value":"55"},
      //   {"name":"黔西南","value":"60"},
      //   {"name":"黔南","value":"62"},
      //   {"name":"六盘水","value":"80"},
      //   {"name":"铜仁","value":"60"},
      //   {"name":"安顺","value":"10"},
      //   {"name":"贵安","value":"62"},
      //   {"name":"省政企","value":"80"},
      // ]
      // "rightbtmlist":[
      //   {"name":"","value":""},
      //   {"name":"","value":""},
      //   {"name":"","value":""},
      //   {"name":"","value":""},
      //   {"name":"","value":""},
      //   {"name":"","value":""},
      //   {"name":"","value":""},
      //   {"name":"","value":""},
      //   {"name":"","value":""},
      //   {"name":"","value":""},
      //   {"name":"","value":""}
      // ]
    }
  },
  mounted:function(){
    this.BarChart()
    this.rtbtmAjax()
  },
  methods:{
    rtbtmAjax(){
      let _this = this;
      this.$axios({
        method: "get",
        url: "../../../static/fuka.json",
      })
      .then(res => {
        _this.rightbtmlist = res.data.rightbtmlist;
        _this.BarChart()
      })
      .catch(res => {  
        _this.BarChart()
        console.log("请求失败：", res);
      });
    },
    BarChart(){
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('btmBar'));

      let xAxis = [],datas = []
      this.rightbtmlist.map((data) => {
        // console.log(data.name)
        xAxis.push(data.name)
        datas.push(data.value)
        return xAxis, datas
      })

      myChart.setOption({
        tooltip: { //提示框组件
          trigger: 'axis',
          formatter: '{b}<br />{a}: {c}',
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
          data:[{name:'月累计',}],
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
            data:datas,
            barWidth: 2,
            barGap:0.5,//柱间距离
             label: {
                 show: true,
                 formatter: "{a|}",
                 color: "#fff",
                 position: "top",
                 distance: -5,
                 backgroundColor: "#17c1ff",
                 padding: 2,
                 borderRadius: 15,
                 rich: {
                     a: {
                         width: 5,
                         height: 5,
                         borderRadius: 5,
                         lineHeight: 5,
                         backgroundColor: "#17c1ff"
                     }
                 }
             },
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
                      color: '#17c1ff'
                  },{
                    offset: 0.2,
                    color: '#17c1ff'
                  },{
                      offset: 1,
                      color: 'transparent'
                  }]),
                  // barBorderRadius: 50,
                  borderWidth: 0,
              }
            },
          },
        ]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>