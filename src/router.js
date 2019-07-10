import Vue from 'vue'
import Router from 'vue-router'
import index from './views/Index.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'index',
            component: index,
            meta: { title: "Tatsuya's portfolio" }
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue'),
            meta: { title: 'about' }
        },
        {
            path: '/skill',
            name: 'skill',
            component: () =>
                import ( /* webpackChunkName: "skill" */ './views/Skill.vue'),
            meta: { title: 'skill' }
        },
        {
            path: '/content',
            name: 'content',
            component: () =>
                import ( /* webpackChunkName: "content" */ './views/Content.vue'),
            meta: { title: 'content' }
        }
    ]
})
