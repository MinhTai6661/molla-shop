import { createSelector } from '@reduxjs/toolkit';

export const deviceModeSlelector = (state) => state.devicemode;
export const sidebarShowSlector = (state) => state.showHeaderSidebar.isSidebarShow;
export const headerShowSlector = (state) => state.showHeaderSidebar.isHeaderShow;
export const productsSelector = (state) => state.products;

export const trendyProduct = createSelector(productsSelector);
