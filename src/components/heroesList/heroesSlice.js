import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";


const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes', //'heroes' название среза к которому относится функция (ниже в heroesSlice)
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/heroes")
    }
)

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: { //генерирум action-креаторы и действия, кот-е подвязываются под эти экшн-креаторы
        addHero: (state, action) => {
            state.heroes.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => { //Ф-я отвечающая за загрузку данных
        builder
            .addCase(fetchHeroes.pending, state => {
                state.heroesLoadingStatus = 'loading';
            })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                state.heroes = action.payload;
            })
            .addCase(fetchHeroes.rejected, state => {
                state.heroesLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = heroesSlice; //вытаскиваем 

export default reducer; //экспортируем reducer, для использования его

export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    addHero,
    deleteItem,
} = actions;