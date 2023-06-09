import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
}

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    () => {
        const {request} = useHttp();
        return request('https://admin-panel-tr9g.vercel.app/filters')
    }
)

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state => {
                state.filtersLoadingStatus = 'loading';
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = 'idle';
                state.filters = action.payload;
            })
            .addCase(fetchFilters.rejected, state => {
                state.filtersLoadingStatus = 'error';
            })
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