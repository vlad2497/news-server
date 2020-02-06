import Business from './../../components/pages/business/Business';
import {isAuth} from './../helpers';

export default [
    {
        path: '/business',
        name: 'business-page',
        component: Business,
        beforeEnter: isAuth,
    }
];