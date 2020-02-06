require('./bootstrap');

window.Vue = require('vue');

import App from './components/App.vue';
import routes from './router/routes';
import store from './store';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import VueRouter from 'vue-router';

/*Vue Router*/
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});
Vue.router=router;
Vue.component('v-select', vSelect);


const app = new Vue({
    el: '#app',
    store,
    router,
    render: app => app(App)
});
