import Vue from 'vue'
import Route from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Search from './pages/search'
import House from './pages/house'
import User from './pages/user'
import Login from './pages/login'
import Admin from './pages/admin'
import AdminLogin from './pages/adminLogin'
import Appoint from './pages/appoint'
import HouseResource from './pages/houseResource'

Vue.use(Route)
const routes = [
  {
    path: '/',
    name:'home', 
    component: Home,
    redirect:'/index',
    children:[
    {
      path:'/index',
      name:'index',
      component: Index
    },
    {
      path:'/search',
      name:'search',
      component: Search
    },
    {
      path:'/house/:id',
      name:'house',
      component: House
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path:'/user',
      name:'user',
      component: User
    }
    ]
  },{
    path: '/admin',
    name:'admin', 
    component: Admin,
    children:[
      {
        path:'/houseResource',
        name:'houseResource',
        component: HouseResource
      },
      {
        path:'/appoint',
        name:'appoint',
        component: Appoint
      },
      {
        path: '/adminLogin',
        name:'adminLogin', 
        component: AdminLogin
      }
    ]
  }
]
const router = new Route({
  routes
})

// router.beforeEach((to,from,next)=>{
//     if(this.$route.meta.title){
//         document.title=this.$route.meta.title
//     }else{
//         document.title='ihouse'
//     }
// })

export default router