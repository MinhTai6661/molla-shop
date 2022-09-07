import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsSelector } from '~/redux/selector';
import { get } from '~/utils/axiosRequest';

const listProductsSlice = createSlice({
    initialState: {
        defaultPriceRange: [0, 800], //not handle
        currentPriceRange: [0, 800],

        currentCategory: 'all',
        sortType: 'default',
        orderType: 'default',
        currentListProducts: [],
        currentPage: 1,
    },
    name: 'listProducts',
    reducers: {
        changeCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
        changePriceRange: (state, action) => {
            state.currentPriceRange = action.payload;
        },
        changeSortType: (state, action) => {
            state.sortType = action.payload;
        },
        changeOrderType: (state, action) => {
            state.orderType = action.payload;
        },

        clearAll: (state, action) => {
            state.currentCategory = state.defaultPriceRange;
            state.currentCategory = 'all';
            state.sortType = 'default';
            state.orderType = 'default';
            state.currentPriceRange = state.defaultPriceRange;
        },
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state, action) => {})
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.currentListProducts = action.payload;
            });
    },
});

export const fetchProductsByCategory = createAsyncThunk(
    'listProducts/fetchProductsByCategory',
    async (category) => {
        if (category === 'all') {
            const res = await get(`products`);
            const newRes = res.filter((item) => item.category !== 'electronics');

            return newRes;
        } else {
            const res = await get(`products/category/${category}`);
            return res;
        }
    },
);

const { actions, reducer } = listProductsSlice;
export const {
    changeCategory,
    changePriceRange,
    changeSortType,
    changeOrderType,
    clearAll,
    changeCurrentPage,
} = actions;
export default reducer;
