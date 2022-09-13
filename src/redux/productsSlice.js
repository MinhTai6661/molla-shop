import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as request from '~/utils/axiosRequest';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allCategries: [],

        // productsByCategory: [],

        allProducts: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.allProducts = action.payload;
            })
            .addCase(fetchAllCaregories.fulfilled, (state, action) => {
                state.allCategries = action.payload;
            });
        // .addCase(fetchProductByCaregories.fulfilled, (state, action) => {
        //     if (!!action.payload.category) {
        //         const isExist = state.productsByCategory.some(
        //             (item) => item?.category === action.payload.category,
        //         );

        //         if (!isExist) {
        //             state.productsByCategory.push({
        //                 category: action.payload.category,
        //                 products: action.payload.res,
        //             });
        //         }
        //         return;
        //     }
        // });
    },
});

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    const res = await request.get('products');
    const newRes = res.filter((item) => item.category !== 'electronics');

    return newRes;
});
export const fetchAllCaregories = createAsyncThunk('categories/fetchAllCategories', async () => {
    const res = await request.get('products/categories');
    const newRes = res.filter((item) => item !== 'electronics');
    return newRes;
});
export const fetchProductByCaregories = createAsyncThunk(
    'categories/fetchProductByCaregories',
    async (category) => {
        const path = `products/category/${category}`;
        const res = await request.get(path);
        return { category, res };
    },
);

const { actions, reducer } = productsSlice;

export default reducer;
