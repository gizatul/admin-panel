export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deleteItem = (idToRemove) => {
    return {
        type: 'DELETE_ITEM',
        payload: idToRemove,
    }
}

export const addHero = (newHero) => {
    return {
        type: 'ADD_ITEM',
        payload: newHero,
    }
}