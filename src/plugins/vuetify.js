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
    theme: {
        primary: '#9b0038',
        secondary: '#71031a',
        accent: '#630019',
        error: '#660115'
      }
})