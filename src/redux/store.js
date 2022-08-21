import { configureStore } from '@reduxjs/toolkit';
import deviceModeReducer from './deviceModeSlice';
import sidebarShowReducer from './showSlice';
import productsReducer from './productsSlice';
import trendyProductReducer from '~/page/Home/components/TrendyProducts/trendyProdyctSlice';
import listProductsReducer from '~/page/Products/listProductsSlice';

const rootReducer = {
    devicemode: deviceModeReducer,
    showHeaderSidebar: sidebarShowReducer,
    products: productsReducer,
    trendyProduct: trendyProductReducer,
    listProducts: listProductsReducer,
};
const store = configureStore({ reducer: rootReducer });

export default store;
