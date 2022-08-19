import { createSlice } from '@reduxjs/toolkit';

const listProductsSlice = createSlice({
    initialState: {
        defaultPriceRange: [0, 200],
        currentCategory: 'all',
        currentPriceRange: [0, 200],
        sortType: '',
        currentListProducts: [],
    },
    name: 'listProducts',
    reducers: {
        changeCat: (state, action) => {
            state.currentCat = action.payload;
        },
        changePriceRange: (state, action) => {
            state.currentPriceRange = action.payload;
        },
        changeSortType: (state, action) => {
            state.sortType = action.payload;
        },
    },
});

const { actions, reducer } = listProductsSlice;
export const { changeCat, changePriceRange, changeSortType } = actions;
export default reducer;
