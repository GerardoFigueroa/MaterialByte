import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Portafolio from './Portafolio.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/portafolio', component: Portafolio },
  {path: '/home', component: Home },
  {path: '/', component: Home }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home', Home);
Vue.component('portafolio', Portafolio);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
