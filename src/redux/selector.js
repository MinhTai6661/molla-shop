import { createSelector } from '@reduxjs/toolkit';

export const deviceModeSelector = (state) => state.devicemode;
export const sidebarShowSelector = (state) => state.showHeaderSidebar.isSidebarShow;
export const headerShowSelector = (state) => state.showHeaderSidebar.isHeaderShow;
export const allCategriesSelector = (state) => state.products.allCategries;
export const allProductsSelector = (state) => state.products.allProducts;

//cart

export const cartProductsSelector = (state) => state.cart.products;
export const cartShippingPriceSelector = (state) => state.cart.shippingPrice;
export const cartTotalProductsSelector = createSelector(cartProductsSelector, (products) =>
    products.reduce((acc, curr) => acc + curr.quantity, 0),
);
//listProductsSlice
export const currentCatSelector = (state) => state.listProducts.currentCategory;
export const currentPriceRangeSelector = (state) => state.listProducts.currentPriceRange;
export const defaultPriceRangeSelector = (state) => state.listProducts.defaultPriceRange;
export const sortTypeSelector = (state) => state.listProducts.sortType;
export const orderTypeSelector = (state) => state.listProducts.orderType;
export const currentListProductsSelector = (state) => state.listProducts.currentListProducts;
export const currentPageSelector = (state) => state.listProducts.currentPage;
export const searchTextSelector = (state) => state.listProducts.searchText;
export const filteredProductsSelector = createSelector(
    currentListProductsSelector,
    currentCatSelector,
    currentPriceRangeSelector,
    sortTypeSelector,
    orderTypeSelector,
    searchTextSelector,

    (currentListProducts, currentCat, currentPriceRange, sortType, orderType, searchText) => {
        const arrCopied = [...currentListProducts];
        // if (searchText) {
        //     return currentListProducts.filter((product) =>
        //         product.title.trim().toLowerCase().includes(searchText),
        //     );
        // }

        if (orderType !== 'default') {
            if (orderType === 'lowest') {
                arrCopied.sort((a, b) => a.price - b.price);
            } else {
                arrCopied.sort((a, b) => b.price - a.price);
            }
        } else {
            arrCopied.sort((a, b) => a.id - b.id);
        }
        return arrCopied.filter((product) => {
            return (
                product.price >= currentPriceRange[0] &&
                product.price <= currentPriceRange[1] &&
                (sortType !== 'default'
                    ? product.rating.rate >= 4 && product.rating.rate <= 5
                    : true)
            );
        });
    },
);

//to fix count products by category temprarily
export const filteredProductsNotCatSelector = createSelector(
    allProductsSelector,
    currentPriceRangeSelector,
    sortTypeSelector,
    orderTypeSelector,
    (currentListProducts, currentPriceRange, sortType, orderType) => {
        const arrCopied = [...currentListProducts];

        if (orderType !== 'default') {
            if (orderType === 'lowest') {
                arrCopied.sort((a, b) => a.price - b.price);
            } else {
                arrCopied.sort((a, b) => b.price - a.price);
            }
        } else {
            arrCopied.sort((a, b) => a.id - b.id);
        }
        return arrCopied.filter((product) => {
            return (
                product.price >= currentPriceRange[0] &&
                product.price <= currentPriceRange[1] &&
                (sortType !== 'default'
                    ? product.rating.rate >= 4 && product.rating.rate <= 5
                    : true)
            );
        });
    },
);
