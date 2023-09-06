import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterView from '../views/CounterView.vue'
import DetailView from '../views/DetailView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuth } from '@/store/useAuth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
        requireAuth: true
    }
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterView,
    meta: {
        requireAuth: false
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView,
    meta: {
        requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
        requireAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    const store = useAuth()
    if (!store.is_auth && to.meta.requireAuth) {
        next('login')
    }
    else {
        next()
    }
})
export default router
