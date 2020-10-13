<template>
  <ul class="btmlies">
    <li>
      <span>金融提值日发展</span>
      <p><span>{{jingrong.rifazhan}}</span><span>户</span></p>
    </li>
    <li>
      <span>金融提值月累计</span>
      <p><span>{{jingrong.yueleiji}}</span><span>户</span></p>
    </li>
    <li>
      <span>金融提值任务数</span>
      <p><span>{{jingrong.renwushu}}</span><span>户</span></p>
    </li>
    <li>
      <span>金融提值完成度</span>
      <p><span>{{jingrong.wancheng}}</span><span>%</span></p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LeftBtmMin',
  data () {
    return {
      "jingrong":{}
      // "jingrong":{"rifazhan":"278","yueleiji":"7896","renwushu":"192773","wancheng":"68"}
    }
  },
  mounted:function(){
    this.btmbagAjax()
  },
  methods:{
    btmbagAjax(){
      let _this = this;
      this.$axios({
        method: "get",
        url: "../../../static/liuliang.json",
      })
      .then(res => {
        _this.jingrong = res.data.jingrong;
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
.btmlies{
  width:80%;
  display: flex;
  margin-left:10%;
}
.btmlies li{
  width:20%;
  float: left;
  /* display: flex; */
  padding:1% 2%;
  margin:0 2%;
  background:url("../../assets/jinrong-bg.png") 0 0 no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
}
.btmlies li>span{
  float:left;
  color:#fff;
}
.btmlies li>p{
  float:right;
}
.btmlies li>p span:first-child{
  font-size: 18px;
  font-family: digifacewide;
  margin-right:5px;
}
.btmlies li>p span:last-child{
  font-size:12px;
}
</style>