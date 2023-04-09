import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: state => {
            state.filtersLoadingStatus = 'loading';
        },
        filtersFetchingError: state => {
            state.filtersLoadingStatus = 'error';
        },
        filtersActiveChanged: (state, action) => {
            state.activeFilter = action.payload;
        },
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = 'idle';
            state.filters = action.payload;
        },
    }
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    filtersFetched,
    filtersFetchingError,
    filtersFetching,
    filtersActiveChanged,
} = actions;