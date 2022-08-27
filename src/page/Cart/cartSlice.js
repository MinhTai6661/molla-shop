import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        shippingPrice: 0,
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload.quantity);
            const checkExist = (item) => item.id === action.payload.id;
            const isExist = state.products.some(checkExist);

            if (isExist) {
                const index = state.products.findIndex(checkExist);
                state.products[index].quantity += action.payload.quantity;
            } else state.products.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const index = state.products.findIndex((item) => item.id === action.payload);
            state.products.splice(index, 1);
        },
        changeQuantity: (state, action) => {
            const index = state.products.findIndex((item) => item.id === action.payload.id);
            state.products[index].quantity = action.payload.quantity;
        },
        changeShippingPrice: (state, action) => {
            console.log('hello: ', action.payload);
            state.shippingPrice = action.payload;
        },
    },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart, changeQuantity, changeShippingPrice } = actions;
export default reducer;
