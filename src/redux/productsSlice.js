import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as request from '~/utils/axiosRequest';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
        });
    },
});

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    const res = await request.get('products');
    return res;
});

const { actions, reducer } = productsSlice;

export default reducer;
