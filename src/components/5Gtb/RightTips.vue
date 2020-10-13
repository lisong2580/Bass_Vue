<template>
  <div class="rightab">
    <img src="../../assets/list-bg-top.png" alt="">
    <!-- <p>5G迁转</p> -->
    <p><slot name="ritname"> 标题 </slot></p>
    <!-- <div><slot name="ritchart"> chart图形 </slot></div> -->
    <slot name="ritchart"> chart图形 </slot>
    <img src="../../assets/list-bg-bottom.png" alt="">
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
.rightab{
  width:100%;
  height:100%;
  position:relative;
}
.rightab img{
  width:90%;
}
.rightab p{
  color:#fff;
  position: absolute;
  top:-5px;
  left:70px;
}
/* .rightab div{
  width:100%;
  height:100%;
} */
</style>