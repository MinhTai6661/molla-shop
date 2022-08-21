import { configureStore } from '@reduxjs/toolkit';
import deviceModeReducer from './deviceModeSlice';
import sidebarShowReducer from './showSlice';
import productsReducer from './productsSlice';
import trendyProductReducer from '~/page/Home/components/TrendyProducts/trendyProdyctSlice';
const rootReducer = {
    devicemode: deviceModeReducer,
    showHeaderSidebar: sidebarShowReducer,
    products: productsReducer,
    trendyProduct: trendyProductReducer,
};
const store = configureStore({ reducer: rootReducer });

export default store;
