import Vue from 'vue'
import Router from 'vue-router'
import { setToken, getToken } from '@/utils/token.js'

Vue.use(Router)

let hengxuerouter = new Router({
  routes: [
    { // 重定向
      path: '/',
      redirect: '/index',
      meta: {
        title: '首页'
      }

    },
    {
      path: '/index',
      name: 'index',
      component:resolve=>require(['@/views/Home'],resolve),
      meta: {
        title: '首页'
      }

    },
    {
      path: '/ranking',
      name: 'ranking',
      component:resolve=>require(['@/views/Ranking'],resolve),
      meta: {
        title: '大学排名'
      }

    },
    {
      path: '/studyplan',
      name: 'studyplan',
      component:resolve=>require(['@/views/StudyPlan'],resolve),
      meta: {
        title: '学业规划'
      }

    },
    {
      path: '/promote',
      name: 'promote',
      component:resolve=>require(['@/views/Promote'],resolve),
      meta: {
        title: '背景提升'
      }

    },
    {
      path: '/case',
      name: 'case',
      component:resolve=>require(['@/views/Case'],resolve),
      meta: {
        title: '国内名校冲刺'
      }

    },
    {
      path: '/about',
      name: 'about',
      component:resolve=>require(['@/views/About'],resolve),
      meta: {
        title: '关于我们'
      }

    },
    {
      path: '/login',
      name: 'login',
      component:resolve=>require(['@/views/Login'],resolve),
      meta: {
        title: '登录'
      }

    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        title: '我的'
      },
      component:resolve=>require(['@/views/Admin'],resolve),
      redirect: "/admin/home",
      children: [{
          path: '/admin/home',
          name: 'home',
          component:resolve=>require(['@/views/Admin/home'],resolve),
        },
  
      ]
    }


  ]
})

// 判断是否需要登录权限 以及是否登录
hengxuerouter.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const token=getToken()
  if (to.path === '/login') {
    next();
  } else {
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
 
})

hengxuerouter.afterEach((to,from) => {
  if(!sessionStorage.getItem('landing-page')){
    sessionStorage.setItem('landing-page',to.meta.title)
  }
  sessionStorage.setItem('session-page',to.meta.title)
})

export default hengxuerouter
