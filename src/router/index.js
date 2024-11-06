import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home,
      children:[
        {
          path:'/',
          name:'main',
          component:()=>import("@/components/Main.vue")
        },
         {
          path:'/life',
          name:'life',
          component:()=>import("@/views/Life.vue")
      },
      {
          path:'/messageBoard',
          name:'messageBoard',
          component:()=>import("@/views/MessageBoard.vue")
      },
     {
          path:"/friends",
          name:"friends",
          component:()=>import("@/views/FriendLinks.vue")
        },
        {
          path: "/content/:fileName",
          name: "Content",
          component: () => import("@/components/Content.vue"),
          props:true
     }
      ]
    }
   
  ]
})

export default router
