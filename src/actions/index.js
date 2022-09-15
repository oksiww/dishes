export const dishesFetching = () => {
    return {
        type: 'DISHES_FETCHING'
    }
}

export const dishesFetched = (dishes) => {
    return {
        type: 'DISHES_FETCHED',
        payload: dishes
    }
}

export const dishesFetchingError = () => {
    return {
        type: 'DISHES_FETCHING_ERROR'
    }
}