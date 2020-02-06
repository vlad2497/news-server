import homeRoutes from './home';
import scienceRoutes from './science';
import businessRoutes from './business';
import authRoutes from './auth';
import notFound from './not-found';

export default [
    ...homeRoutes,
    ...scienceRoutes,
    ...businessRoutes,
    ...authRoutes,
    ...notFound
];