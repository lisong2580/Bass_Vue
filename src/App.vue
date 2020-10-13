<template>
  <div id="app" :style="conheight">
    <!-- <canvas id="bgCanvas"></canvas> -->
    <router-view/>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',
  components:{},
  data () {
    return {
　　　conheight:{
        height:''
      }
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    // getWindow()
  },
  methods:{
    getHeight(){
      this.conheight.height=window.innerHeight+'px';
    },
    // getWindow(){  
    //   function resizeCanvas() {
    //     var cw = $(window).width();
    //     var ch = $(window).height();
    //     $('#bgCanvas').css({'width':cw + 'px','height':ch + 'px'});
    //   }
    //   resizeCanvas();
    //   $(window).resize(resizeCanvas);
    // }
  },
  created(){
    window.addEventListener('resize', this.getHeight);
    this.getHeight()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00d5ff;
  /* background:#030d25; */
  /* margin-top: 60px; */
}
html,body{
  width:100%;
  height:100%;
  color: #00d5ff;
  /* background:#030d25; */
  background:url("assets/back2.png") no-repeat 0 0;
  background-size: 100% 100%;
  border:0;
  margin:0;
  padding:0;
  font-size:14px;
}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td { 
	margin:0;
	padding:0;
}
html,body {
	margin:0;
	padding:0;
}
table {
	border-collapse:collapse;
	border-spacing:0;
}
fieldset,img,button { 
	border:0;
}
address,caption,cite,code,dfn,th,var {
	font-style:normal;
	font-weight:normal;
}
ol,ul {
	list-style:none;
}
caption,th {
	text-align:left;
}
h1,h2,h3,h4,h5,h6 {
	font-size:100%;
	font-weight:normal;
}
q:before,q:after {
	content:'';
}
section, header{
	display: block;
}
.fl{
  float:left;
}
.fr{
  float:right;
}
.clear{
	clear: both;
}
button:hover, button:focus, button:active{
  border:none !important;
	outline: none !important;
}
i, span{
  display: inline-block;
}
</style>
