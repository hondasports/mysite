import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ja from 'vuetify/es5/locale/ja'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {
    iconfont: 'fa',
    lang: {
        locales: { ja },
        current: 'ja'
    },
})