<template>
<div class="listb">
  <img src="../../assets/list-bg-top.png" alt="">
  <p>金融提值</p>
  <table>
    <thead>
      <tr>
        <td>地市</td><td>智慧本月累计</td><td>金融本月累计</td><td>月任务</td><td>完成度</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in ritlist" :key = "index">
        <td>{{item.AREA_NAME}}</td><td>{{item.WISDOM_MDEV}}</td><td>{{item.FINANCE_MDEV}}</td><td>{{item.FIN_WIS_MISSION}}</td><td>{{parseFloat(item.FIN_WIS_TASKCOMP*100).toFixed(2)+"%"}}</td>
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
      "ritlist":[]
      // "ritlist":[
      //   {"dishi":"贵阳","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"遵义","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"毕节","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"六盘水","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"黔西南","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"黔南","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"黔东南","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"铜仁","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"安阳","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"},
      //   {"dishi":"省政企","zhi":"4837","jinr":"4837","renwu":"294","wcd":"84.23%"}
      // ]
    }
  },
  mounted:function(){
    this.ritbagAjax()
  },
  methods:{
    ritbagAjax(){
      let _this = this;
      // 获取当前时间
      var d=new Date();
			var day=d.getFullYear()+("0"+(d.getMonth()+1)).slice(-2)+("0"+(d.getDate())).slice(-2);
      this.$axios({
        method: "get",
        url: "api/bass/flowFinancial/dataEveryCity",
        params: {
          acctDay: "20200927",
        },
        // url: "../../../static/liuliang.json",
      })
      .then(res => {
        var data=res.data.data;
        var data_list=new Array();
        for(var i=1;i<data.length;i++){
          data_list.push(data[i])
        }
        data_list.push(data[0]);
        _this.ritlist = data_list;
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