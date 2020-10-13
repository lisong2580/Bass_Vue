<template>
  <div class="back">
    <div class="navli">
      <top-nav><span slot="title">5G通报</span></top-nav>
    </div>
    <div class="main">
      <div class="leftDiv">
        <div class="leftTop">
          <v-left></v-left>
        </div>
        <div class="leftBtm">
          <left-btm-min></left-btm-min>
        </div>
      </div>
      <div class="midDiv">
        <mid-map></mid-map>
      </div>
      <div class="rightDiv">
        <div><right-top></right-top></div>
        <div><right-mid></right-mid></div>
        <div><right-btm></right-btm></div>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from './TopNav'
import left from './5Gtb/Left'
import leftBtmMin from './5Gtb/LeftBtmMin'
import midMap from './5Gtb/MidMap'
import rightTop from './5Gtb/RightTop'
import rightMid from './5Gtb/RightMid'
import rightBtm from './5Gtb/RightBtm'
export default {
  name: 'Notification',
  components:{
    'top-nav':topNav,
    'v-left':left,
    'left-btm-min':leftBtmMin,
    'mid-map':midMap,
    'right-top':rightTop,
    'right-mid':rightMid,
    'right-btm':rightBtm
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
.main{
  width:100%;
  height:87%;
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
.leftDiv .leftTop{
  width:100%;
  height:56%;
  margin:0 auto;
}
.leftDiv .leftBtm{
  width:100%;
  height:35%;
  margin:0 auto;
  /* margin-top:5%; */
}
.midDiv{
  width:40%;
  height:100%;
}
.rightDiv{
  width:30%;
  height:100%;
}
.rightDiv div{
  width:100%;
  height:29%;
  margin:1% 0;
}
</style>
