import Science from './../../components/pages/science/Science';
import {isAuth} from './../helpers';

export default [
    {
        path: '/science',
        name: 'science-page',
        component: Science,
        beforeEnter: isAuth,
    }
];