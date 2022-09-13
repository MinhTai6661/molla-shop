import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsSelector } from '~/redux/selector';
import { get } from '~/utils/axiosRequest';

const listProductsSlice = createSlice({
    initialState: {
        defaultPriceRange: [0, 800], //not handle
        currentPriceRange: [0, 800],

        searchText: '',
        currentCategory: 'all',
        sortType: 'default',
        orderType: 'default',
        currentListProducts: [],
        currentPage: 1,
        isLoading: false,

        allProducts: [], // to referent, dont touch
    },
    name: 'listProducts',
    reducers: {
        changeCategory: (state, action) => {
            state.currentCategory = action.payload;
            state.searchText = '';
        },
        changePriceRange: (state, action) => {
            state.currentPriceRange = action.payload;
            state.searchText = '';
        },
        changeSortType: (state, action) => {
            state.sortType = action.payload;
            state.searchText = '';
        },
        changeOrderType: (state, action) => {
            state.orderType = action.payload;
            state.searchText = '';
        },

        clearAll: (state, action) => {
            state.currentCategory = state.defaultPriceRange;
            state.currentCategory = 'all';
            state.sortType = 'default';
            state.orderType = 'default';
            state.currentPriceRange = state.defaultPriceRange;
            state.currentListProducts = state.allProducts;
            state.searchText = '';
        },
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        changeCurrentList: (state, action) => {
            state.searchText = action.payload;
            const currentList = state.allProducts.filter((product) =>
                product.title.trim().toLowerCase().includes(action.payload.trim()),
            );

            state.currentListProducts = currentList;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentListProducts = action.payload;
            })
            .addCase(fetchAllProductsFix.pending, (state, action) => {
                state.isLoading = true;
                // phát sinh do chưa tối ưu code từ ban đầu
                state.allProducts = action.payload;
            })
            .addCase(fetchAllProductsFix.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allProducts = action.payload;
            });
    },
});

export const fetchAllProductsFix = createAsyncThunk('listProducts/fetchAllProducts', async () => {
    const res = await get(`products`);
    const newRes = res.filter((item) => item.category !== 'electronics');

    return newRes;
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
    changeCurrentList,
} = actions;
export default reducer;
