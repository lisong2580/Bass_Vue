<template>
  <div class="tabd">
    <img src="../../assets/leftBottom-mk-top.png" alt="">
    <div><p><span>{{leftbtlist.qianzhuan}}</span></p><span>5G迁转发展</span></div>
    <div><p><span>{{leftbtlist.bao}}</span></p><span>5G包发展</span></div>
    <div><p><span>{{leftbtlist.fuka}}</span></p><span>5G副卡发展</span></div>
    <img src="../../assets/leftBottom-mk-bottom.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'LeftBtmMin',
  data () {
    return {
      leftbtlist:{}
      // "leftbtlist":{"qianzhuan":"7745","bao":"1567","fuka":"1834"}
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
        _this.leftbtlist = res.data.leftbtlist;
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
.tabd{
  width:100%;
  height:60%;
  /* margin-top:2%; */
}
.tabd img{
  width:90%;
}
.tabd div{
  width:27%;
  height:100%;
  float: left;
  margin:3% 0 3% 3%;
}
.tabd div p{
  width:100%;
  /* height:30%; */
  padding: 30% 0;
  text-align: center;
  margin:0 0 4% 0;
  background:url("../../assets/leftBottom-mkbg.png") 10px 0px no-repeat;
  background-size: 92% 96%;
  
}
.tabd div p span{
  font-size: 30px;
  background-image: linear-gradient(0deg,#57a2ff,#73e2ff);
  -webkit-background-clip:text;
  color: transparent;
  font-family: digifacewide;
}
</style>