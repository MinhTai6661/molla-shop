const { createSlice } = require('@reduxjs/toolkit');

const deviceModeSlice = createSlice({
    name: 'deviceMode',
    initialState: {
        size: 'lg',
        deviceMode: window.innerWidth >= 992 ? 'large' : 'small',
    },
    reducers: {
        changeSize: (state, action) => {
            let size = 'lg';
            if (action.payload < 576) {
                size = 'xs';
            }
            if (action.payload >= 576) {
                size = 'sm';
            }
            if (action.payload >= 768) {
                size = 'md';
            }
            if (action.payload >= 992) {
                size = 'lg';
            }
            if (action.payload >= 1200) {
                size = 'xl';
            }
            state.size = size;
        },
        changeDeviceMode: (state, action) => {
            state.deviceMode = action.payload;
        },
    },
});

const { reducer, actions } = deviceModeSlice;
export const { changeSize, changeDeviceMode } = actions;
export default reducer;
