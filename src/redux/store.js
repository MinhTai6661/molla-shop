import { configureStore } from '@reduxjs/toolkit';
import deviceModeReducer from './deviceModeSlice';
import sidebarShowReducer from './showSlice';
import productsReducer from './productsSlice';
import listProductsReducer from '~/page/Products/listProductsSlice';
import cartReducer from '~/page/Cart/cartSlice';

const rootReducer = {
    devicemode: deviceModeReducer,
    showHeaderSidebar: sidebarShowReducer,
    products: productsReducer,
    listProducts: listProductsReducer,
    cart: cartReducer,
};
const store = configureStore({ reducer: rootReducer });

export default store;
