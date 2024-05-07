import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ErrorView from '@/views/ErrorView.vue'
import CoinDetail from '@/views/CoinDetail.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/coin/:id',
            name: 'coin-detail',
            component: CoinDetail
        }, 
        {
            path: '*',
            name: 'error',
            component: ErrorView
        }        
    ]
})