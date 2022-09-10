import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/shop.svg';
import './dishesHeader.scss';

const DishesHeader = () => {
    return (
        <div className='dishes_header'>
          <div className="dishes_header-wrapper">
            <div className="dishes_header-logo">
                <Link to="/">
                    <span>DonHome</span>
                </Link>
            </div>
            <h3><NavLink style={({isActive}) => ({color: isActive ? '#9f0013' : 'inherit'})} to="/catalog"><span>Каталог</span></NavLink></h3>
            <h3><NavLink style={({isActive}) => ({color: isActive ? '#9f0013' : 'inherit'})} to="/contacts"><span>Контакты</span></NavLink></h3>
            <div>
              <img src={logo} alt="Корзина"></img>
            </div>
          </div>
        </div>
    )
}

export default DishesHeader;