<template>
  <div class="tabs">
    <img src="../../assets/leftTop-mk-top.png" alt="">
    <div class="nameBox"><slot name="name"> 标题 </slot></div>
    <div class="inforBox">
      <span class="infordata"><slot name="infordata"> 数据 </slot></span>
      <span class="inforunit"><slot name="inforunit"> 单位 </slot></span>
    </div>
    <img src="../../assets/leftTop-mk-bottom.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted:function(){
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs{
  width:100%;
  height:100%;
  text-align: left;
}
.tabs img{
  width:90%;
}
.tabs .nameBox{
  color:#fff;
  margin:4% 0 3% 10px;
}
/* .tabs .nameBox span{
  text-shadow: 0 0 20px #00beff;
} */
.tabs .inforBox{
  /* color:#fff; */
  margin:0 0 4% 10px;
}
.tabs .inforBox .infordata span{
  font-size: 30px;
  /* text-shadow:0 0 20px #228DFF */
  font-family: digifacewide;
}
.tabs .inforBox .inforunit{
  font-size: 14px;
}
</style>