const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
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
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                heroes: state.heroes.filter((elem) => elem.id !== action.payload),
            }
        case 'ADD_ITEM':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
            }
        default: return state
    }
}

export default reducer;