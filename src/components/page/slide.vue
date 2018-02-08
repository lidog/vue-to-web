<template>
    <div @mouseover="stopEvnet" @mouseout="runEvent">
      <div class="slide-box">
         <div class="img-list clearfix">
            <a :href="slides[imgIndex].href">
              <transition name="slide-trans">
                <img v-if="isShow" :src="slides[imgIndex].src">
              </transition>
              <transition name="slide-trans-old">
                <img v-if="!isShow" :src="slides[imgIndex].src">
              </transition>
            </a>
         </div>
        <div class="tools">
          <div class="li-tools">
            <div class="left" @click="goto(toLeft)"> < </div>
            <ul>
              <li v-for="(item,index) in slides" :class="{'on':index==imgIndex}" @click="goto(index)">{{index+1}}</li>
            </ul>
            <div class="right" @click="goto(toRight)"> > </div>
          </div>
        </div>
        <p class="img-title">{{slides[imgIndex].title}}</p>
      </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
              imgIndex:2,
              timeEv:null,
              isShow:false
            }
        },
        props:{
          slides:{
            type:Array,
            default:[]
          },
          time:{
            type:Number,
            default:1000
          }
        },
        computed:{
          toRight(){
            let a = this.imgIndex+1;
            if(a>3){
              a = 0
            }
            return a
          },
          toLeft(){
            let b = this.imgIndex-1;
            if(b<0){
              b = 3
            }
            return b
          }
        },
        methods:{
          goto (index) {
            this.isShow = false
            setTimeout(() => {
              this.isShow = true
              this.imgIndex = index
              this.$emit('onchange',index)
            }, 10)
          },
          stopEvnet(){
              clearInterval(this.timeEv)
          },
          runEvent(){
            this.timeEv = setInterval(()=> {
              this.goto(this.toRight)
            },this.time);
          }
        },
        mounted(){
          this.runEvent();
        }
    }
</script>
<style scoped>

.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(730px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
}
.slide-trans-old-leave-to{
  transform: translateX(-730px);
}

  .slide-box{
    width: 730px;
    height: 436px;
    position: relative;
    overflow: hidden;
  }
  .img-list{
    min-height: 436px;
  }
  .img-list a{
    height: 100%;
  }
  .img-list img{
    width: 730px;
    height: 436px;
    position: absolute;
  }
  .tools{
    width: 100%;
    height: 50px;
    background-color: #000;
    opacity: 0.8;
    position: absolute;
    bottom:0px;
    left: 0;
  }
  .img-title{
    position: absolute;
    bottom:15px;
    left: 10px;
    color: #fff;
  }
  .li-tools{
    position: absolute;
    bottom:12px;
    right: 10px;
  }
  .left,.right,li,ul{
    display: inline-block;
    padding:2px 5px;
    color: #fff;
    cursor: pointer;
    margin:0 5px;
    border-radius: 5px;
  }
  li.on{
    background-color: #12b7f5;
  }
</style>
