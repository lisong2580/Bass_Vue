<template>
  <div class="nav">
    <div class="leftTime">
      <i></i>
      <p class="nowTime">{{time.nowTime}}</p>
      <p>{{time.weekData}}</p>
      <p>{{time.nowTime}}</p>
    </div>
    <div class="titleBox"><slot name="title"> 标题 </slot></div>
    <div class="rightTime">
      <i></i><span>{{time.nowDate}}</span><span>{{time.nowTime}}</span><span>{{time.weekData}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      time:{
        nowTime:'',
        weekData:'',
        nowDate:'',
      },
    }
  },
  mounted:function(){
    this.getNowDate()
    this.getNowTime()
    this.getNowWeek()
  },
  methods:{
    getNowDate(){
      let myDate = new Date();
      let datestring = myDate.toLocaleDateString();   // 获取当前日期
      this.time.nowDate = datestring
    },
    getNowTime(){
      let myDate = new Date();
      let hours = myDate.getHours();    // 获取当前小时数(0-23)
      let minutes = myDate.getMinutes();   // 获取当前分钟数(0-59)
      let seconds = myDate.getSeconds();   // 获取当前秒数(0-59)
      this.time.nowTime = hours + '-' + minutes + '-' + seconds
    },
    getNowWeek(){
      let myDate = new Date();
      let week = myDate.getDay();     // 获取当前星期X(0-6,0代表星期天)
      let xingqi
      if(week == 0){xingqi = '星期日'}
      else if(week == 1){xingqi = '星期一'}
      else if(week == 2){xingqi = '星期二'}
      else if(week == 3){xingqi = '星期三'}
      else if(week == 4){xingqi = '星期四'}
      else if(week == 5){xingqi = '星期五'}
      else if(week == 6){xingqi = '星期六'}
      this.time.weekData = xingqi
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  width:100%;
  height:208%;
  background:url("../assets/logo2.png") no-repeat 0 0;
  background-size: 100% 100%;
  padding:1% 0;
  color:#fff;
  font-size: 14px;
  display: flex;
}
i,span,p{
  vertical-align: middle;
}
.leftTime{
  float:left;
  width:17%;
  margin-left:1%;
}
.leftTime i{
  width:2px;
  height:32px;
  background:#00beff;
  margin-right:5px;
  float:left;
}
.leftTime p{
  text-align: left;
  margin-right: 5px;
}
.leftTime .nowTime{
  font-size:32px;
  float:left;
}
.titleBox{
  font-size:32px;
  font-weight: 700;
  width:90%;
}
.rightTime{
  width:16%;
  display: flex;
  float:right;
  text-align: right;
}
.rightTime i{
  width:2px;
  height:14px;
  background:#00beff;
  margin-right:5px;
}
.rightTime span{
  margin-right:5px;
}
</style>