require('./bootstrap');

window.Vue = require('vue');

import App from './components/App.vue';
import routes from './router/routes';
import store from './store';
import 'vue-select/dist/vue-select.css';
import VueRouter from 'vue-router';
import 'vue-loaders/dist/vue-loaders.css';
import VueLoaders from 'vue-loaders';
import Toasted from 'vue-toasted';
import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

Vue.use(VueLoaders);
Vue.use(Toasted);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});
Vue.router=router;

const app = new Vue({
    el: '#app',
    store,
    router,
    render: app => app(App)
});
