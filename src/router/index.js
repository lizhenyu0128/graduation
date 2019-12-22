import Vue from 'vue'
import Router from 'vue-router'
import IndexLayout from '@/layout/index'
import FindDrugs from '@/page/FindDrugs'
import DrugsList from '@/page/DrugsList'
import DrugDetail from '@/page/DrugDetail'
import DrugBuy from '@/page/DrugBuy'
import MineOrder from '@/page/MineOrder'
import Login from '@/page/Login'
import SignUp from '@/page/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: IndexLayout
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: Login
    },
    {
      path: '/signup',
      name: 'HelloWorld',
      component: SignUp
    },
    {
      path: '/findDrugs',
      name: 'FindDrugs',
      component: FindDrugs
    },
    {
      path: '/drugsList/:type',
      name: 'DrugsList',
      component: DrugsList
    },
    {
      path: '/drugDetail/:id',
      name: 'DrugDetail',
      component: DrugDetail
    },
    {
      path: '/drugBuy/:id',
      name: 'DrugBuy',
      component: DrugBuy
    },
    {
      path: '/mineOrder',
      name: 'MineOrder',
      component: MineOrder
    },
    {
      path: '/askQuestion',
      name: 'AskQuestion',
      component: () => import('@/page/AskQuestion')
    },
    {
      path: '/answer',
      name: 'Answer',
      component: () => import('@/page/Answer')
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import('@/page/Setting')
    },
    {
      path: '/artical/:id',
      name: 'Artical',
      component: () => import('@/page/Artical')
    },
    {
      path: '/collections',
      name: 'Collections',
      component: () => import('@/page/Collections')
    },
    {
      path: '/disease',
      name: 'Disease',
      component: () => import('@/page/Disease')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/page/Register')
    }
  ]
})
