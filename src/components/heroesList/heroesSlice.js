import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: { //генерирум action-креаторы и действия, кот-е подвязываются под эти экшн-креаторы
        heroesFetching: state => { //первый аргумент-action-creater //
            state.heroesLoadingStatus = 'loading'; //при использовании createReducer такой синтаксис возможен (типо изменения стейта, по факту не так) //return НЕ используем!
        },
        heroesFetched: (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        },
        heroesFetchingError: state => {
            state.heroesLoadingStatus = 'idle';
        },
        addHero: (state, action) => {
            state.heroes.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        },
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