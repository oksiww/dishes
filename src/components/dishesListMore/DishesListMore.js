import { useState } from "react";
import Modal from "../modal/Modal";

import line from '../../assets/Line.svg';
import dish7 from '../../assets/dish7.jpg';
import dish8 from '../../assets/dish8.jpg';

import './dishesListMore.scss';

const DishesListMore = () => {
    const [modalActive, setModalActive] = useState(false);

    return(
        <div className="dishes__more">
            <div className="dishes__more-descr">
                <h2 className="dishes__more-descr-title">Больше товаров</h2>
                <h4 className="dishes__more-descr-description">Больше любви...</h4>
                <button className="dishes__more-descr-btn" onClick={() => setModalActive(true)}>Оставить заявку</button>
            </div>
            <div className='dishes__more-set'>
                <img src={line} alt="Линия" />
                <div>
                    <img src={dish7} alt="Посуда" />
                    <h5 className='dishes__more-set-descr'>Набор “Розовый шоколад”</h5>
                </div>
                <img src={line} alt="Линия" />
            </div>
            <div className='dishes__more-set'>
                <img src={line} alt="Линия" />
                <div>
                    <img src={dish8} alt="Посуда" />
                    <h5 className='dishes__more-set-descr'>Набор “Голубая лагуна”</h5>
                </div>
                <img src={line} alt="Линия" />
            </div>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
}

export default DishesListMore;