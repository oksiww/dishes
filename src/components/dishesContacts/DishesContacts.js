import contacts from '../../assets/dish9.jpg';
import whats from '../../assets/whats.svg';
import insta from '../../assets/insta.svg';
import facebook from '../../assets/facebook.svg';

import './dishesContacts.scss';


const DishesContacts = () => {

    return(
        <div className="dishes__contacts">
            <img className='dishes__contacts-img' src={contacts} alt="" />
            <div className='dishes__contacts-descr'>
                <h2 className='dishes__contacts-descr-title'>DonHome</h2>
                <img src={whats} alt="" />
                <img src={insta} alt="" />
                <img src={facebook} alt="" />
                <p>Г. Ростов-на-Дону, ул.Пушкинская, д. 112</p>
            </div>
        </div>
    )
}

export default DishesContacts;