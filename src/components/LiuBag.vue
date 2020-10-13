<template>
  <div class="back">
    <div class="navli">
      <top-nav><span slot="title">流量包&金融提值</span></top-nav>
    </div>
    <div class="topDiv"><top-lie></top-lie></div>
    <div class="main">
      <div class="leftDiv">
        <left-list></left-list>
      </div>
      <div class="midDiv">
        <map-liu></map-liu>
      </div>
      <div class="rightDiv">
        <right-list></right-list>
      </div>
    </div>
      <div class="btmDiv"><btm-lie></btm-lie></div>
  </div>
</template>

<script>
import topNav from './TopNav'
import mapLiu from './liuBag/MapLiu'
import topLie from './liuBag/TopLie'
import leftList from './liuBag/LeftList'
import rightList from './liuBag/RightList'
import btmLie from './liuBag/BtmLie'
export default {
  name: 'Notification',
  components:{
    'top-nav':topNav,
    'map-liu':mapLiu,
    'top-lie':topLie,
    'left-list':leftList,
    'right-list':rightList,
    'btm-lie':btmLie,
  },
  data () {
    return {
// 　　　conheight:{
//         height:''
//       }
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){

  },
  methods:{
    // getHeight(){
    //   this.conheight.height=window.innerHeight+'px';
    // },
  },
  created(){
    // window.addEventListener('resize', this.getHeight);
    // this.getHeight()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back{
  width:100%;
  height:100%;
}
.navli{
  width:100%;
  height:10%;
}
.topDiv{
  width:100%;
  height:10%;
  margin-top: -1%;
}
.main{
  width:100%;
  height:70%;
  padding-top:1%;
  display: flex;
}
.main div{
  float:left;
}
.leftDiv{
  width:30%;
  height:100%;
}
.midDiv{
  width:40%;
  height:100%;
}
.rightDiv{
  width:30%;
  height:100%;
}
.btmDiv{
  width:100%;
  height:10%;
}
</style>
