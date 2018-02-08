<template>
    <div>
      <h1>注册</h1>
      <div class="form-box">
        <div class="form-content">
          <div class="form-item">
            <label>用户名: </label>
            <input v-model="name" type="text"/>
          </div>
          <div class="form-item">
            <label>密码: </label>
            <input v-model="password" type="text"/>
          </div>
          <div class="form-item">
            <label>确认密码: </label>
            <input v-model="checkPassword" type="text"/>
          </div>
          <div class="form-item">
            <label>手机: </label>
            <input v-model="phone" type="text"/>
          </div>
        </div>
        <div class="bottom-btn">
          <div class="btn" @click="register">注册</div>
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
        checkPassword:'',
        phone:''
      }
    },
    methods:{
      register(){
        alert("用户名："+ this.name)
        alert("密码："+ this.password)
      }
    }
  }
</script>
<style scoped>
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
