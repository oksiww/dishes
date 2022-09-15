import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dishesFetching, dishesFetched, dishesFetchingError } from '../../actions';
import DishesListItem from "../dishesListItem/DishesListItem";

import './dishesList.scss';

const DishesList = () => {
    const {dishes, dishesLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(dishesFetching());
        request("http://localhost:3001/dishes")
            .then(data => dispatch(dishesFetched(data)))
            .catch(() => dispatch(dishesFetchingError()))

        // eslint-disable-next-line
    }, []);

    if (dishesLoadingStatus === "loading") {
        return <h5 className='dishes_loading'>Загрузка...</h5>;
    } else if (dishesLoadingStatus === "error") {
        return <h5 className="dishes_error">Ошибка загрузки</h5>
    }

    const renderDishesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="dishes_none">Товаров пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <DishesListItem key={id} {...props}/>
        })
    }

    const elements = renderDishesList(dishes);
    return (
        <div className='dishes_container'>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default DishesList;