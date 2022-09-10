import {dishesFetching, dishesFetched, dishesFetchingError} from '../components/dishesList/dishesSlice';
export const fetchDishes= (request) => (dispatch) => {
    dispatch(dishesFetching());
    request("http://localhost:3001/dishes")
        .then(data => dispatch(dishesFetched(data)))
        .catch(() => dispatch(dishesFetchingError()))
}
