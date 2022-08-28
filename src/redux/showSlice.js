const { createSlice } = require('@reduxjs/toolkit');

const showSlice = createSlice({
    name: 'handleShow',
    initialState: {
        isSidebarShow: false,
        isHeaderShow: true,
    },
    reducers: {
        toggleShowSidebar: (state, action) => {
            state.isSidebarShow = !state.isSidebarShow;
        },
        handleShowHeader: (state, action) => {
            state.isHeaderShow = action.payload;
        },
        hindSidebar: (state) => {
            state.isSidebarShow = false;
        },
    },
});

const { reducer, actions } = showSlice;
export const { toggleShowSidebar, handleShowHeader, hindSidebar } = actions;
export default reducer;
