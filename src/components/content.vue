<template>
  <div class="content clearfix">
    <div class="content-left  fl">
      <div class="left-top bgf">
        <div class="item-title">全部产品</div>
        <dl class="first">
          <dt>{{productList.pc.title}}</dt>
          <dd v-for="item in productList.pc.list"><a :href="item.url">{{item.title}}</a><span v-if="item.hot" class="hot">HOT</span></dd>
        </dl>
        <dl>
          <dt>{{productList.app.title}}</dt>
          <dd v-for="item in productList.app.list"><a :href="item.url">{{item.title}}</a><span v-if="item.hot" class="hot">HOT</span></dd>
        </dl>
      </div>
      <div class="left-bottom bgf">
        <div class="item-title">最新消息</div>
        <ul>
          <li v-for="item in news" :title="item.title"><a :href="item.url">{{item.title}}</a></li>
        </ul>
      </div>
    </div>
    <div class="content-right fr">
      <div class="slide" v-if="slides.length">
        <slide :slides="slides" :time="2000" @onchange="slideChange"></slide>
      </div>
      <ul class="right-bot mt15 clearfix">
        <li v-for="(item,index) in board" class="bot-item clearfix" :class="item.class">
          <div class="item-left fl"><img :src="item.icon"/></div>
          <div class="item-right fr">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="item-button"><a :href="item.url">立即购买</a></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import slide from "@/components/page/slide.vue"
    export default {
        data: function () {
            return {
              productList:{
                    pc:{
                        title:"",
                        list:[]
                    },
                    app:{
                      title:"",
                      list:[]
                    }
                },
              news:[],
              board:[],
              slides:[]
            }
        },
      components:{
        slide
      },
      methods:{
        slideChange(index){
        }
      },
      created (){
          this.$http.get('/api/productList').then((res)=> {
            this.productList = res.data.data;
          },(err)=> {
            console.log(err)
          })
          this.$http.get('/api/news').then( (res)=> {
            this.news = res.data.data;
          }, (err) => {
            console.log(err)
          })
          this.$http.get('/api/board').then((res)=> {
            this.board = res.data.data;
          },(err)=> {
            console.log(err)
          })
          this.$http.get('/api/slides').then((res)=> {
            this.slides = res.data.data;
          },(err)=> {
            console.log(err)
          })
        },
    }
</script>
<style scoped lang="scss">
  .content{
    width: 1024px;
    margin:15px auto;
  }
  .content-left{
    width: 270px;
    margin-right: 15px;
  }

  .item-title{
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .left-top{
    margin-bottom: 15px;
    font-size: 14px;
    dl{
      border-bottom: 1px solid #e3e4e8;
      padding-bottom: 10px;
    }
    dt{
      font-size: 15px;
      font-weight: bold;
      margin:10px 0;
      padding-left: 10px;
    }
    dd{
      height: 25px;
      line-height: 25px;
      text-align: left;
      cursor: pointer;
      padding-left: 10px;
      .hot{
        display: inline-block;
        padding:1px;
        background-color: red;
        font-size: 12px;
        color:#fff;
        border-radius: 3px;
        line-height: 15px;
        margin-left: 5px;
      }
      &:hover{
        background: #e3e4e8;
        color: blue;
      }
    }
  }
  .left-bottom{
    font-size: 14px;
    ul{
      padding:10px;
      padding-top: 0;
      min-height: 324px;
      li{
        height: 30px;
        line-height: 30px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .content-right{
    width: 730px;
  }
  .bot-item{
    float: left;
    width: 317px;
    padding:20px;
    background-color: #fff;
  }
  .item-left{
    vertical-align: middle;
  }
  .item-right{
    line-height: 35px;
    h2{
      font-size: 16px;
    }
    p{
      font-size: 14px;
      width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-button a{
      background: #4fc08d;
      color: #fff;
      display: inline-block;
      padding: 0px 20px;
      cursor: pointer;
      text-align: center;
      border-radius: 5px;
      font-size: 14px;
    }
  }
</style>
