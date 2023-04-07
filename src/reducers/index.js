const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    filteredHeroes: [],
    activeFilter: 'all',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle',
                filteredHeroes: state.activeFilter === 'all' ?
                                action.payload :
                                action.payload.filter(item => item.element === state.activeFilter),
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error',
            }
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload,
                filteredHeroes: action.payload === 'all' ?
                                state.heroes :
                                state.heroes.filter(item => item.element === action.payload)
            }
        case 'DELETE_ITEM':
            const newHeroList = state.heroes.filter(item => item.id !== action.payload);
            return {
                ...state,
                heroes: newHeroList,
                filteredHeroes: state.activeFilter === 'all' ?
                                newHeroList : 
                                newHeroList.filter(item => item.element === state.activeFilter)
            }
        case 'ADD_ITEM':
            let newCreatedHeroesList = [...state.heroes, action.payload];
            return {
                ...state,
                heroes: newCreatedHeroesList,
                filteredHeroes: state.activeFilter === 'all' ?
                                newCreatedHeroesList : 
                                newCreatedHeroesList.filter(item => item.element === state.activeFilter)
            }
        case "FILTERS_FETCHED" :
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle',
            }
        case "FILTERS_FETCHING" :
            return {
                ...state,
                filtersLoadingStatus: 'loading',
            }
        case "FILTERS_FETCHING_ERROR":
            return {
                ...state,
                filtersLoadingStatus: 'error',
            }
        case "ACTIVE_FILTER_CHANGED":
            return {
                ...state,
                activeFilter: action.payload,
                filteredHeroes: action.payload === 'all' ?
                                state.heroes :
                                state.heroes.filter(item => item.element === action.payload),
            }
        default: return state
    }
}

export default reducer;