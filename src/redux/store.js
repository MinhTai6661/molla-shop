import { configureStore } from '@reduxjs/toolkit';
import resizeReducer from './resizeSlice';
import sidebarShowReducer from './sidebarShowSlice';
const rootReducer = {
    resize: resizeReducer,
    sidebarShow: sidebarShowReducer,
};
const store = configureStore({ reducer: rootReducer });

export default store;
