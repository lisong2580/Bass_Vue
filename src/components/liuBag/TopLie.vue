<template>
  <ul class="libes">
    <li>
      <img src="../../assets/liuliang-rifazhan.png" alt="">
      <p>流量包日发展</p>
      <p><span>{{liuliangbao.GPRS_PACK_DEV}}</span><span>户</span></p>
    </li>
    <li>
      <img src="../../assets/liuliang-yueleiji.png" alt="">
      <p>流量包月累计</p>
      <p><span>{{liuliangbao.GPRS_PACK_MDEV}}</span><span>户</span></p>
    </li>
    <li>
      <img src="../../assets/liuliang-xianxiari.png" alt="">
      <p>流量包线下日发展</p>
      <p><span>{{liuliangbao.GPRS_PACK_ONLINEDEV}}</span><span>户</span></p>
    </li>
    <li>
      <img src="../../assets/liuliang-xianxiayue.png" alt="">
      <p>流量包线下月发展</p>
      <p><span>{{liuliangbao.GPRS_PACK_MOFFLINEDEV}}</span><span>户</span></p>
    </li>
    <li>
      <img src="../../assets/liuliang-renwu.png" alt="">
      <p>流量包任务数</p>
      <p><span>{{liuliangbao.GPRS_OFF_MISSION}}</span><span>户</span></p>
    </li>
    <li>
      <img src="../../assets/liuliang-wancheng.png" alt="">
      <p>流量包完成度</p>
      <p><span>{{liuliangbao.wancheng}}</span><span>%</span></p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LeftBtmMin',
  data () {
    return {
      "liuliangbao":{}
      // "liuliangbao":{"rifazhan":"109","leiji":"39020","xianxiari":"89","xianxiayue":"4957","renwushu":"10904","wancheng":"158.35"}
    }
  },
  mounted:function(){
    this.topbagAjax()
  },
  methods:{
    topbagAjax(){
      let _this = this;
      // 获取当前时间
      var d=new Date();
			var day=d.getFullYear()+("0"+(d.getMonth()+1)).slice(-2)+("0"+(d.getDate())).slice(-2);
      this.$axios({
        method: "get",
        url: "api/bass/flowFinancial/dataSum",
        params: {
          acctDay: "20200927",
        },
        // url: "../../../static/liuliang.json",
      })
      .then(res => {
        _this.liuliangbao = res.data.data;
        _this.liuliangbao.wancheng=parseFloat((parseInt(_this.liuliangbao.GPRS_PACK_MOFFLINEDEV)/parseInt(_this.liuliangbao.GPRS_OFF_MISSION))*100).toFixed(2)
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
.libes{
  width:95%;
  display: flex;
  padding:0 0 0 5%;
}
.libes li{
  width:16%;
  /* padding:0 2%; */
}
.libes li:nth-child(2),
.libes li:nth-child(5){
  padding-top:1%;
}
.libes li:nth-child(3),
.libes li:nth-child(4){
  padding-top:2%;
}
.libes li img{
  width:55px;
  height:55px;
  margin-right: 10px;
  float:left;
}
.libes li p{
  text-align: left;
}
.libes li p:first-of-type{
  color:#fff;
  text-shadow: 0px 0px 20px #00beff;
}
.libes li p:last-of-type span:first-child{
  font-size: 28px;
  font-family: digifacewide;
  text-shadow: 0px 0px 20px #00beff;
}
</style>