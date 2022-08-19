import { createSelector } from '@reduxjs/toolkit';

export const deviceModeSlelector = (state) => state.devicemode;
export const sidebarShowSlector = (state) => state.showHeaderSidebar.isSidebarShow;
export const headerShowSlector = (state) => state.showHeaderSidebar.isHeaderShow;
export const productsSelector = (state) => state.products;

export const currentCatSelector = (state) => state.listProducts.currentCategory;
export const currentPriceRangeSlector = (state) => state.listProducts.currentPriceRange;
export const defaultPriceRangeSlector = (state) => state.listProducts.defaultPriceRange;
export const listProductsSlice = createSelector(productsSelector);
