import { createSlice } from '@reduxjs/toolkit';

const trendyProductSlice = createSlice({
    name: 'trendyProduct',
    initialState: {
        currentCategory: 'all',
        currentProducts: [],
    },
    reducers: {
        changeCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
    },
});

const { reducer, actions } = trendyProductSlice;

export const { changeCategory } = actions;
export default reducer;
