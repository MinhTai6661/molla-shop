const { createSlice } = require('@reduxjs/toolkit');

const sideShowSlice = createSlice({
    name: 'sideShow',
    initialState: {
        isShow: true,
    },
    reducers: {
        toggleShow: (state, action) => {
            console.log('action', action.payload);
            state.isShow = false;
        },
    },
});

const { reducer, actions } = sideShowSlice;
export const { toggleShow } = actions;
export default reducer;
