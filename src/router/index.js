import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cite from '../views/Site.vue'
import Claim from "@/views/Claim";
import Settings from "@/views/Settings";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            breadcrumb: [
                {name: 'Главная'},
                {name: 'Сайт', link: 'site'},
                {name: 'Заявки', link: 'claim'},
                {name: 'Настройки', link: 'settings'}
            ]
        }
    },
    {
        path: '/site',
        name: 'Site',
        component: Cite,
        meta: {
            breadcrumb: [
                {name: 'Главная',link: '/'},
                {name: 'Сайт'},
                {name: 'Заявки', link: 'claim'},
                {name: 'Настройки', link: 'settings'}
            ]
        }
    },
    {
        path: '/claim',
        name: 'Claim',
        component: Claim,
        meta: {
            breadcrumb: [
                {name: 'Главная',link: '/'},
                {name: 'Сайт', link: 'site'},
                {name: 'Заявки'},
                {name: 'Настройки', link: 'settings'}
            ]
        }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: {
            breadcrumb: [
                {name: 'Главная',link: '/'},
                {name: 'Сайт', link: 'site'},
                {name: 'Заявки', link: 'claim'},
                {name: 'Настройки'}
            ]
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
