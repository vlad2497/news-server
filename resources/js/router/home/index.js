import Home from './../../components/pages/home/Home';
import {isAuth} from './../helpers';

export default [
    {
        path: '/home',
        name: 'home-page',
        component: Home,
        beforeEnter: isAuth,
    },
];