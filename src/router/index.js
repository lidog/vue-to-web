import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content.vue'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:"/index"
    },
    {
      path:'/index',
      components:{
        default:content,
        header:header,
        footer:footer
      }
    }
  ]
})
