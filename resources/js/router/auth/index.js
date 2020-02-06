import TheLogin from './../../components/auth/TheLogin';
import {isNotAuth} from "../helpers";

export default [
    {
        path: '/login',
        name: 'login',
        component: TheLogin,
        beforeEnter: isNotAuth,
    },
];