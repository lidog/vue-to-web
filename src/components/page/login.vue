<template>
    <div>
      <h1>登录信息</h1>
      <div class="form-box">
        <div class="form-content">
          <div class="form-item">
            <label>用户名: </label>
            <input v-model="name" type="text"/>
            <transition name="trans-tips">
              <span v-if="username.state">{{username.err}}</span>
            </transition>
          </div>
          <div class="form-item">
            <label>密码: </label>
            <input v-model="password" type="text"/>
            <transition name="trans-tips">
             <span v-if="passwordTips.state">{{passwordTips.err}}</span>
            </transition>
          </div>
        </div>
        <div class="bottom-btn">
          <div class="btn" @click="login">登录</div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
              name:'',
              password:'',
              first:true,
              pass:{
                name:false,
                password:false
              }
            }
        },
      computed:{
        username(){
           let state=false,err='';
           if(this.name!==''&&!/^[\u4e00-\u9fa5]{1,8}$/g.test(this.name)){
             state = true;
             err = "必须是1到8个中文"
            }
            this.pass.name = !state;
            return{
              state,
              err
            }
          },
        passwordTips(){
          let state=false,err='';
          if(this.password!==''&&!/^\d{6,10}$/.test(this.password)){
            state = true;
            err = "必须6到10位数字"
          }
          this.pass.password = !state;
          return{
            state,
            err
          }
        }
      },
      methods:{
        login(){
          let data = true;
          for(let i in this.pass){
              if(!this.pass[i]){
                data = false;
                break
              }
          }
          if(!this.name||!this.password){
              data = false;
          }
          if(data){
            alert("用户名："+ this.name)
            alert("密码："+ this.password)
          }
        }
      },
      mounted(){

      }
    }
</script>
<style scoped>
  .trans-tips-enter-active,.trans-tips-leave-active{
    transition: all 1s;
  }
  .trans-tips-enter{
    transform: translateX(-20px);
    opacity: 0;
  }
  .trans-tips-leave-to{
    transform: translateX(100px);
    opacity: 0;
  }
  .trans-tips-enter-to,.trans-tips-leave{
    opacity: 1;
    transform: translateX(0px);
  }

  h1{
    font-weight: normal;
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .form-content{
    margin:10px;
    padding:20px;
  }
  .form-item{
    margin:10px;
  }
  .form-item label{
    text-align: right;
    min-width:80px;
    display: inline-block;
    padding-right: 20px;
  }
  .form-item input{
    width: 200px;
    padding: 5px 10px;
  }
  .form-item span{
    color: red;
    margin-left: 10px;
    display: inline-block;
  }
  .bottom-btn{
    width: 100%;
    border-top:1px solid #eee;
    padding:10px;
    text-align: center;
  }
  .bottom-btn .btn{
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
  }
  .bottom-btn .btn:hover{
    background-color: #12b7f5;
    color: #fff;
  }
</style>
