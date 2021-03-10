import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/create',
        name: 'Create',
        component: () => import('../views/Create.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router