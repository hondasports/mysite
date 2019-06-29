import Vue from 'vue'
import Router from 'vue-router'
import index from './views/Index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/skill',
            name: 'skill',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Skill.vue')
        },
        {
            path: '/content',
            name: 'content',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Content.vue')
        }
    ]
})