<template>
  <div class="header">
      <div class="box clearfix">
        <div class="logo">
          <router-link to="/index">
            <img src="../assets/logo.png"/>
          </router-link>
        </div>
        <ul class="right-li">
          <li @click="login">登录<span>|</span></li>
          <li @click="zhuce">注册<span>|</span></li>
          <li @click="about">关于</li>
        </ul>
      </div>
  </div>
</template>
<script>
    export default {
        data: function () {
            return {
            }
        },
        methods:{
          login(){
            this.$store.dispatch('showDialog','login');
          },
          zhuce(){
            this.$store.dispatch('showDialog','zhuce');
          },
          about(){
            this.$store.dispatch('showDialog','about');
          }
        }
    }
</script>
<style scoped lang="scss">
  .header {
    background: #363636;
    .box {
      width: 1024px;
      height: 80px;
      margin: 0 auto;
      .logo {
        float: left;
        height: 100%;
        line-height: 120px;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .right-li {
        float: right;
        height: 100%;
        line-height: 80px;
        li {
          float: left;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          span {
            margin: 0 10px;
          }
        }
      }
    }
  }
</style>
