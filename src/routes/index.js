import config from '~/config';
import DefaultLayout from '~/layouts/DefaultLayout';
import ContactPage from '~/page/Contact';
import HomePage from '~/page/Home';
const publicRoutes = [
    {
        path: config.router.home,
        component: HomePage,
        layout: DefaultLayout,
    },
    {
        path: config.router.contact,
        component: ContactPage,
        layout: DefaultLayout,
    },
];

export default publicRoutes;
