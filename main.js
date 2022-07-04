import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  created() {
    // Google Sign-in initial
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '617180006352-4s5jdjocgpp959q7dslugemacr9vhg3t.apps.googleusercontent.com',
      });
    });
  },
  router,
  render: h => h(App)
}).$mount('#app');