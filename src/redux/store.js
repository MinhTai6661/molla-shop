import { configureStore } from '@reduxjs/toolkit';
import deviceModeReducer from './deviceModeSlice';
import sidebarShowReducer from './showSlice';
import productsReducer from './productsSlice';
import categoriesReducer from './CategoriesSlice';

const rootReducer = {
    devicemode: deviceModeReducer,
    showHeaderSidebar: sidebarShowReducer,
    products: productsReducer,
    categories: categoriesReducer,
};
const store = configureStore({ reducer: rootReducer });

export default store;
