<template>
<div class="listb">
  <img src="../../assets/list-bg-top.png" alt="">
  <p>流量包</p>
  <table>
    <thead>
      <tr>
        <td>地市</td><td>本月累计</td><td>月任务</td><td>完成度</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in leftlist" :key = "index">
        <td>{{item.dishi}}</td><td>{{item.leiji}}</td><td>{{item.renwu}}</td><td>{{item.wcd}}</td>
      </tr>
    </tbody>
  </table>
  <img src="../../assets/list-bg-bottom.png" alt="">
</div>
</template>

<script>
// import listBit from './ListBit'
export default {
  name: 'LeftBtmMin',
  // components:{
  //   'list-bit':listBit,
  // },
  data () {
    return {
      "leftlist":[]
      // "leftlist":[
      //   {"dishi":"贵阳","leiji":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"遵义","leiji":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"毕节","leiji":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"六盘水","leiji":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"黔西南","leiji":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"黔南","leiji":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"黔东南","leiji":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"铜仁","leiji":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"安阳","leiji":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"省政企","leiji":"4837","renwu":"294","wcd":"84.23%"}
      // ]
    }
  },
  mounted:function(){
    this.leftbagAjax()
  },
  methods:{
    leftbagAjax(){
      let _this = this;
      this.$axios({
        method: "get",
        url: "../../../static/liuliang.json",
      })
      .then(res => {
        _this.leftlist = res.data.leftlist;
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
.listb{
  width:100%;
  height:100%;
  position:relative;
}
.listb img{
  width:90%;
}
.listb p{
  position:absolute;
  top:-5px;
  left:70px;
  color:#fff;
}
.listb table{
  width:80%;
  margin-left:10%;
}
.listb table thead,
.listb table tbody{
  width:100%;
}
.listb table thead tr{
  color:#00aaff;
  font-size:12px;
}
.listb table thead tr td{
  padding:1% 0;
}
.listb table tbody tr{
  background:url("../../assets/list-li-bg.png") 0 0 no-repeat;
  background-size: 100% 100%;
  border:5px solid transparent;
}
.listb table tbody tr td{
  padding:2.5% 0;
}
.listb table tbody tr td:first-child{
  color:#fff;
}
</style>