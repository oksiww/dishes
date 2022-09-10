import { useState } from 'react';
import {Helmet} from "react-helmet";
import Modal from '../modal/Modal';

import './dishesMainPage.scss';

const DishesMainPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return(
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Dishes main page"
                />
                <title>Dishes main page</title>
            </Helmet> 
            <div className='dishes'>
                <div className="dishes_wrapper">
                    <h1 className='dishes_title'>Создайте уют в Ваших домах!</h1>
                    <h2 className='dishes_descr'>-------   Посуда и товары для кухни, сделанные с любовью...</h2>
                    <button className='dishes_btn' onClick={() => setModalActive(true)}>Сделать заказ</button>
                </div>
                <Modal active={modalActive} setActive={setModalActive} />
            </div>
        </>
    )
}

export default DishesMainPage;