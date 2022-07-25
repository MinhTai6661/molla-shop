const { createSlice } = require('@reduxjs/toolkit');

const showSlice = createSlice({
    name: 'handleShow',
    initialState: {
        isSidebarShow: false,
        isHeaderShow: false,
    },
    reducers: {
        toggleShowSidebar: (state, action) => {
            state.isSidebarShow = !state.isSidebarShow;
        },
        handleShowHeader: (state, action) => {
            state.isHeaderShow = action.payload;
        },
    },
});

const { reducer, actions } = showSlice;
export const { toggleShowSidebar, handleShowHeader } = actions;
export default reducer;
