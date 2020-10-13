<template>
  <ul>
    <li><left-top-min><span slot="name" class="name">日发展</span>
    <span slot="infordata">{{leftfzdata.rifazhan}}</span><span slot="inforunit">户</span></left-top-min></li>

    <li><left-top-min><span slot="name" class="name">本月累计发展量</span>
    <span slot="infordata">{{leftfzdata.yueleiji}}</span><span slot="inforunit">户</span></left-top-min></li>
    
    <li><left-top-min><span slot="name" class="name">线下发展</span>
    <span slot="infordata">{{leftfzdata.xianxia}}</span><span slot="inforunit">户</span></left-top-min></li>
    
    <li><left-top-min><span slot="name" class="name">线下累计发展</span>
    <span slot="infordata">{{leftfzdata.xianleiji}}</span><span slot="inforunit">户</span></left-top-min></li>
    
    <li><left-top-min><span slot="name" class="name">月任务</span>
    <span slot="infordata">{{leftfzdata.yurenwu}}</span><span slot="inforunit">户</span></left-top-min></li>
    
    <li><left-top-min><span slot="name" class="name">任务完成度</span>
    <span slot="infordata">{{leftfzdata.wanchengdu}}</span><span slot="inforunit">%</span></left-top-min></li>
  </ul>
</template>

<script>
import leftTopMin from './LeftTopMin'
export default {
  name: 'Left',
  components:{
    'left-top-min':leftTopMin,
  },
  data () {
    return {
      leftfzdata:{}
      // "leftfzdata":{
      //   "rifazhan":"1298","yueleiji":"12874","xianxia":"1284","xianleiji":"12745","yurenwu":"173","wanchengdu":"68.23"
      // }
    }
  },
  mounted:function(){
    this.leftAjax()
  },
  methods:{
    leftAjax(){
      let _this = this;
      this.$axios({
        method: "get",
        url: "../../../static/Left5G.json",
      })
      .then(res => {
        _this.leftfzdata = res.data.leftfzdata;
      })
      .catch(res => {  
        console.log("请求失败：", res);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  width:100%;
  height:100%;
  /* display: flex; */
}
ul li{
  width:45%;
  height:33%;
  padding:0 0 0 5%;
  float:left;
}
/* ul li .infordata, ul li .inforunit{
  color:#00beff;
} */
ul li span{
  text-shadow: 0px 0px 20px #00beff;
}
/* ul li .infordata span{
  font-family: digifacewide;
} */
ul li:nth-child(3) .infordata span, ul li:nth-child(3) .inforunit span,
ul li:nth-child(4) .infordata span, ul li:nth-child(4) .inforunit span{
  color:#00d5ff;
}
ul li:nth-child(3) span,
ul li:nth-child(4) span{
  text-shadow: 0px 0px 20px #00d5ff;
}
ul li:nth-child(5) .infordata span, ul li:nth-child(5) .inforunit span{
  color:#36b246;
}
ul li:nth-child(5) span{
  text-shadow: 0px 0px 20px #36b246;
}
ul li:nth-child(6) .infordata span, ul li:nth-child(6) .inforunit span{
  color:#ffa545;
}
ul li:nth-child(6) span{
  text-shadow: 0px 0px 20px #ffa545;
}
</style>