import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as request from '~/utils/axiosRequest';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        // productsOfCategories: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCaregories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
    },
});

export const fetchAllCaregories = createAsyncThunk('categories/fetchAllCategories', async () => {
    const res = await request.get('products/categories');
    return res;
});

const { actions, reducer } = categoriesSlice;

export default reducer;
