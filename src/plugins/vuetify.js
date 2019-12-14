import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import de from 'vuetify/es5/locale/de';
import VueResource from 'vue-resource'

Vue.use(Vuetify);
Vue.use(VueResource);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    dark: false,
    themes: {
      dark: {
        primary: '#21CFF3',
        accent: '#FF4081',
        secondary: '#ffe18d',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      },
      light: {
        primary: '#1976D2',
        accent: '#E91E63',
        secondary: '#30b1dc',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      }
    }
  },
    lang: {
      locales: { de },
      current: 'de',
    },
});
