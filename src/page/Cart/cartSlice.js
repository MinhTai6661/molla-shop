import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        shippingPrice: 0,
        products: [
            // {
            //     category: "men's clothing",
            //     countRate: 120,
            //     id: 1,
            //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            //     oldPrice: undefined,
            //     price: 109.95,
            //     quantity: 1,
            //     rate: 3.9,
            //     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            // },
            // {
            //     category: "men's clothing",
            //     countRate: 120,
            //     id: 2,
            //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            //     oldPrice: undefined,
            //     price: 109.95,
            //     quantity: 1,
            //     rate: 3.9,
            //     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            // },
        ],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload.quantity);
            const checkExist = (item) => item.id === action.payload.id;
            const isExist = state.products.some(checkExist);

            const index = state.products.findIndex(checkExist);
            if (isExist) {
                state.products[index].quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
            message.success({
                content: `Add ${action.payload.quantity} \"${action.payload.title}\" successfuly!`,
                className: 'custom-class',
                style: {
                    textTransform: 'capitalize',
                },
            });
            message.config({
                // top: 100,
                duration: 1,
                maxCount: 1,
            });
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
