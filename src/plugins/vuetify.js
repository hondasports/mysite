import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ja from 'vuetify/es5/locale/ja'
import '@fortawesome/fontawesome-free/css/all.css'

export default new Vuetify({
    iconfont: 'fa',
    lang: {
        locales: { ja },
        current: 'ja'
    },
    theme: {
      themes: {
        primary: '#FEFEFA',
        secondary: '#DDD8D9',
        mainaccent: '#D55A2E',
        subaccent: '#E16565'
      },
    }
  });
  