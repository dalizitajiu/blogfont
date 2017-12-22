import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/page/HelloWorld'
// import MyHead from '@/components/MyHead'
import Home from '../page/Home'
import RegisterPage from '../page/RegesterPage'
import MyEditArticle from '../components/MyEditArticle'
import MyInfo from '../page/MyInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: Home
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/newarticle',
      component: MyEditArticle
    }, {
      path: '/admin',
      component: MyInfo
    }, {
      path: '/update_article/:id ',
      component: MyEditArticle
    }
  ]
})
