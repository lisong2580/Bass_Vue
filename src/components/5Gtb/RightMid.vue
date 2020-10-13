<template>
  <div class="">
    <right-tips>
      <span slot="ritname">5G包</span>
      <!-- <div slot="ritchart" id="midBar" :style="{width:'400px',height:'150px',margin:'0 auto'}" ></div> -->
      <div slot="ritchart" class="charts">
        <div id="midBar" :style="{width:'50%',height:'150px',margin:'0 auto',float:'left'}" ></div>
        <div id="midBart" :style="{width:'50%',height:'150px',margin:'0 auto',float:'left'}" ></div>
      </div>
    </right-tips>
  </div>
</template>

<script>
import rightTips from './RightTips'
export default {
  name: 'RightMid',
  components:{
    'right-tips':rightTips
  },
  data () {
    return {
      rimdlist:[]
      // "rimdlist":[
      //   {"name":"贵阳","leiji":"10","xianxia":"7"},
      //   {"name":"毕节","leiji":"15","xianxia":"10"},
      //   {"name":"遵义","leiji":"30","xianxia":"17"},
      //   {"name":"黔东南","leiji":"55","xianxia":"20"},
      //   {"name":"黔西南","leiji":"60","xianxia":"31"}
      // ],
      // "rimdlistrt":[
      //   {"name":"黔南","leiji":"62","xianxia":"18"},
      //   {"name":"六盘水","leiji":"80","xianxia":"28"},
      //   {"name":"铜仁","leiji":"60","xianxia":"16"},
      //   {"name":"安顺","leiji":"10","xianxia":"27"},
      //   {"name":"贵安","leiji":"62","xianxia":"45"}
      // ]
    }
  },
  mounted:function(){
    this.BarChart()
    this.BarChartr()
    this.rtmidAjax()
  },
  methods:{
    rtmidAjax(){
      let _this = this;
      this.$axios({
        method: "get",
        url: "../../../static/bao.json",
      })
      .then(res => {
        _this.rimdlist = res.data.rimdlist;
        // console.log(res)
        _this.BarChart()
        _this.BarChartr()
        
      })
      .catch(res => {  
        _this.BarChart()
        _this.BarChartr()
        console.log("请求失败：", res);
      });
    },
    BarChart(){
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('midBar'));

      let leftname = [], leftdata1 = [], leftdata2 = [], leftpic = [];
      this.rimdlist.map((d,i) => {
        // console.log(i)
        if(i<5){
          leftname.push(d.name)
          leftdata1.push(d.leiji)
          leftdata2.push(d.xianxia)
          leftpic.push(d.leiji+" "+d.xianxia)
        }
        return leftname, leftdata1, leftdata2, leftpic
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
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              show:false,
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
              show: false,
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
            type: 'category',
            //	boundaryGap: true,//坐标轴两边留白
            // data: ['22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40','22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40'],
            data:leftname,
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
              show: false,
              lineStyle: {
                color: ['#052a46'],
                type:'dashed',
                // opacity:0.06
              }
            }
          },
          {
            triggerEvent: true,
            show: true,
            inverse: true,
            offset:25,
            // data: [[10,15, 30, 45, 55],[8,5, 25, 30, 35]],
            data:leftpic,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              // shadowOffsetX: '-200px',
              color: ['#fff'],
              align: 'right',
              verticalAlign: 'bottom',
              lineHeight: 0,
              fontSize: 13,
              //  inside:false,
              // formatter: function(value, index) {
              //     return (data[index].value / data[index].sum) * 100
              // },
            }
          }
        ],
        series : [
          {
            name:'月累计',
            type:'bar',
            showBackground: true,
            data:leftdata1,
            barWidth: 5,
            barGap:0,//柱间距离
            itemStyle: {
              normal: {
                  show: true,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#0f7fff' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#15afec' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  },
                  // barBorderRadius: 50,
                  borderWidth: 0,
              }
            },
          },
          {
            name:'线下',
            type:'bar',
            showBackground: true,
            data:leftdata2,
            barWidth: 5,
            barGap:0,//柱间距离
            itemStyle: {
              normal: {
                  show: true,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#00d5ff' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#01e6db' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  },
                  // barBorderRadius: 50,
                  borderWidth: 0,
              }
            },
          }
        ]
      })
    },
    BarChartr(){
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('midBart'));

      let ritname = [], ritdata1 = [], ritdata2 = [], ritpic = [];
      this.rimdlist.map((d,i) => {
        // console.log(i)
        if(i>=5&&i<10){
          ritname.push(d.name)
          ritdata1.push(d.leiji)
          ritdata2.push(d.xianxia)
          ritpic.push(d.leiji+" "+d.xianxia)
        }
        return ritname, ritdata1, ritdata2, ritpic
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
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              show:false,
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
              show: false,
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
            type: 'category',
            //	boundaryGap: true,//坐标轴两边留白
            // data: ['22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40','22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40'],
            data:ritname,
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
              show: false,
              lineStyle: {
                color: ['#052a46'],
                type:'dashed',
                // opacity:0.06
              }
            }
          },
          {
            triggerEvent: true,
            show: true,
            inverse: true,
            offset:25,
            data: ritpic,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              // shadowOffsetX: '-200px',
              color: ['#fff'],
              align: 'right',
              verticalAlign: 'bottom',
              lineHeight: 0,
              fontSize: 13,
              // formatter: function(value, index) {
              //     return (data[index].value / data[index].sum) * 100
              // },
            }
          }
        ],
        series : [
          {
            name:'月累计',
            type:'bar',
            showBackground: true,
            data:ritdata1,
            barWidth: 5,
            barGap:0,//柱间距离
            itemStyle: {
              normal: {
                  show: true,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#0f7fff' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#15afec' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  },
                  // barBorderRadius: 50,
                  borderWidth: 0,
              }
            },
          },
          {
            name:'线下',
            type:'bar',
            showBackground: true,
            data:ritdata2,
            barWidth: 5,
            barGap:0,//柱间距离
            itemStyle: {
              normal: {
                  show: true,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#00d5ff' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#01e6db' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  },
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
.charts{
  width:90%;
  height:150px;
  margin-left:5%;
}
</style>