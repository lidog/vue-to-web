<template>
  <div>

      <div class="dialog-cover" v-if="isShow" @click="close"></div>
    <transition name="down">
      <div v-if="isShow" class="content">
        <div class="content-box" id="contentBox">
          <slot>默认没有内容</slot>
        </div>
        <span class="close" @click="close">×</span>
      </div>
    </transition>
  </div>
</template>
<script>
    export default {
        data: function () {
            return {
              maxHeight:0
            }
        },
        props:{
          isShow:{
            type: Boolean,
            default: false
          }
        },
        methods:{
            close(){
              this.$store.dispatch("hideDialog");
              this.$emit("closeEv")
            }
        },
        watch:{
          isShow(newVal){
            if(!newVal){
              return
            }
            setTimeout(function () {
              var scH = document.body.clientHeight;
              var obj = document.getElementById("contentBox")
              if(obj){
                obj.style.maxHeight=scH*0.7+"px";
              }
            },2000)
          }
        }
    }
</script>
<style scoped>
  .down-leave-active,.down-enter-active{
    transition: all .5s;
  }
  .down-leave-to{
    opacity: 0;
    transform: translateY(500px);
  }
  .down-enter{
    opacity: 0;
    transform: translateY(-500px);
  }
  .down-enter-to,.down-leave{
    opacity: 1;
    transform: translateY(0%);
  }
  .dialog-cover{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
    top:0;
    left: 0;
  }
  .content{
    width: 70%;
    height: auto;
    position: fixed;
    left: 0;right: 0;
    top:25%;
    margin: auto;
    background: #fff;
    z-index: 10;
    border: 2px solid #464068;
    padding: 10px 20px;
    line-height: 1.6;
  }
  .content .content-box{
    overflow-y: auto;
    overflow-x: hidden;
  }
  .close{
    cursor: pointer;
    position: absolute;
    top:-35px;
    right: -20px;
    font-size: 30px;
    color: #fff;
  }
</style>
