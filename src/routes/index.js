import config from '~/config';
import DefaultLayout from '~/layouts/DefaultLayout';
import CartPage from '~/page/Cart';
import ContactPage from '~/page/Contact';
import HomePage from '~/page/Home';
import ProductDetail from '~/page/ProductDetail';
import Products from '~/page/Products';
import Checkout from '~/page/Checkout';
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
    {
        path: config.router.aboutUs,
        component: HomePage,
        layout: DefaultLayout,
    },
    {
        path: config.router.products,
        component: Products,
        layout: DefaultLayout,
    },
    {
        path: config.router.productDetail,
        component: ProductDetail,
        layout: DefaultLayout,
    },
    {
        path: config.router.wishList,
        component: HomePage,
        layout: DefaultLayout,
    },
    {
        path: config.router.cart,
        component: CartPage,
        layout: DefaultLayout,
    },
    {
        path: config.router.checkout,
        component: Checkout,
        layout: DefaultLayout,
    },
];

export default publicRoutes;
