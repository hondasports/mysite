import Vue from 'vue'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
    id: 'UA-46163064-4',
    router
});

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')

router.afterEach((to, from) => {
    if (to.meta && to.meta.title) {
      document.title = to.meta.title
    }
})