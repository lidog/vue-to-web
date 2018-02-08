<template>
  <div class="page-wrap" id="app">
    <keep-alive>
    <router-view name="header"></router-view>
    </keep-alive>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <keep-alive>
    <router-view name="footer"></router-view>
    </keep-alive>
    <dialog-box :isShow="$store.state.isShow">
      <component :is="$store.state.dialogContent"></component>
    </dialog-box>
  </div>
</template>
<script>
  import dialog from '@/components/page/dialog'
  import login from '@/components/page/login'
  import zhuce from '@/components/page/zhuce'
  import about from '@/components/page/about'
    export default {
        data: function () {
            return {
            }
        },
        components:{
          dialogBox:dialog,
          login,
          zhuce,
          about
        }
    }
</script>
<style>
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
  body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
  h1, h2, h3, h4, h5, h6{ font-size:100%; }
  address, cite, dfn, em, var { font-style:normal; }
  code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
  small{ font-size:12px; }
  ul, ol { list-style:none; }
  a { text-decoration:none; color:#000;}
  a:hover { text-decoration:none; }
  sup { vertical-align:text-top; }
  sub{ vertical-align:text-bottom; }
  legend { color:#000; }
  fieldset, img { border:0; }
  button, input, select, textarea { font-size:100%; }
  table { border-collapse:collapse; border-spacing:0; }
  .clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
  .clearfix{*+height:1%;}
  .fl{  float: left;  }
  .fr{float:right;}
  body{background-color: #f0f2f5;}
  .bgf{
    background-color: #fff;
  }
  .mt15{margin-top: 15px;}
  .mb15{margin-bottom: 15px;}
  .mr15{margin-right: 15px;}
  .mll5{margin-left: 15px;}
</style>
