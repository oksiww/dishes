import dish from '../../assets/dish2.jpg';
import './dishesListItem.scss';

const DishesListItem = ({name, description, price}) => {

    return (
        <li 
            className={`dishes__list`}>
            <img src={dish} 
                 className="dishes__list-img" 
                 alt="dishes" 
                 style={{'objectFit': 'cover'}}/>
            <div className="dishes__list-body">
                <h3 className="dishes__list-body-title">{name}</h3>
                <p className="dishes__list-body-text">{description}</p>
                <h2 className="dishes__list-body-price">{price}</h2>
            </div>
            <button className='dishes__list-btn'>Добавить в корзину</button>
        </li>
    )
}

export default DishesListItem;