const { createSlice } = require('@reduxjs/toolkit');

const resizeSlice = createSlice({
    name: 'resize',
    initialState: {
        x: window.innerWidth,
        y: 0,
    },
    reducers: {
        resizeX: (state, action) => {
            state.x = action.payload;
            if (action.payload <= 992) {
                state.smallDeviceMode = true;
            }
            state.smallDeviceMode = false;
        },
        resizeY: (state, action) => {
            state.y = action.payload;
        },
    },
});

const { reducer, actions } = resizeSlice;
export const { resizeX, resizeY } = actions;
export default reducer;
