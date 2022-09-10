

import dish1 from '../../assets/dish1.jpg';
import dish2 from '../../assets/dish2.jpg';
import dish3 from '../../assets/dish3.jpg';

import './dishesList.scss';

const DishesList = () => {
    

    return (
        <div className="dishes_list">
            <div className="dishes_list-wrapper">
                <div className="dishes_list-item dishes_list-item-first">
                    <img src={dish1} alt="Посуда" />
                    <div className="dishes_list-item-descr dishes_list-item-descr-first">
                        <div>
                            <h3>Тарелка 'Банановый лист'</h3>
                            <p>40 см</p>
                        </div>
                        <div>
                            <span>1,600 RUB</span>
                            <button className='dishes_list-btn'>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dishes_list-wrapper">
                <div className="dishes_list-item dishes_list-item-second">
                    <img src={dish2} alt="Посуда" />
                    <div className="dishes_list-item-descr">
                        <div>
                            <h3>Блюдце</h3>
                            <p>14 см</p>
                        </div>
                        <div>
                            <span>599 RUB</span>
                            <button className='dishes_list-btn'>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dishes_list-wrapper">
                <div className="dishes_list-item dishes_list-item-third">
                    <img src={dish3} alt="Посуда" />
                    <div className="dishes_list-item-descr">
                        <div>
                            <h3>Тарелка плоская</h3>
                            <p>23 см</p>
                        </div>
                        <div>
                            <span> 990 RUB</span>
                            <button className='dishes_list-btn'>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default DishesList;