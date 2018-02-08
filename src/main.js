// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './layout.vue'
import router from './router'
import resource from 'vue-resource'
import Vuex from 'vuex'


Vue.use(resource)
Vue.use(Vuex)
Vue.config.productionTip = false

let store = new Vuex.Store({
  state:{
    isShow:false,
    dialogContent:false
  },
  mutations:{ //设置值得方法
    dialogShow(state,componentName){
      state.isShow = true
      state.dialogContent = componentName;
    },
    dialogHide(state){
      state.isShow = false
    },
  },
  actions:{
    showDialog(context,componentName){
      context.commit('dialogShow',componentName)
    },
    hideDialog(context){
      context.commit('dialogHide')
    },
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
