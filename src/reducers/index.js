const initialState = {
    dishes: [],
    dishesLoadingStatus: 'idle'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISHES_FETCHING':
            return {
                ...state,
                dishesLoadingStatus: 'loading'
            }
        case 'DISHES_FETCHED':
            return {
                ...state,
                dishes: action.payload,
                dishesLoadingStatus: 'idle'
            }
        case 'DISHES_FETCHING_ERROR':
            return {
                ...state,
                dishesLoadingStatus: 'error'
            }
        default: return state
    }
}

export default reducer;