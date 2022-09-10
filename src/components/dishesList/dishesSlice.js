import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dishes: [],
    dishesLoadingStatus: 'idle'
}

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        dishesFetching: state => {state.dishesLoadingStatus = 'loading'},
        dishesFetched: (state, action) => {
            state.dishesLoadingStatus = 'idle';
            state.dishes = action.payload;
        },
        dishesFetchingError: state => {
            state.dishesLoadingStatus = 'error';
        }
    }
});

const {actions, reducer} = dishesSlice;

export default reducer;
export const {
    dishesFetching,
    dishesFetched,
    dishesFetchingError
} = actions;