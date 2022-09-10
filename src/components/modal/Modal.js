import './modal.scss';

const Modal = ({active, setActive}) => {

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h2 className='modal__content-title'>Заполните данные</h2>
                <form className='modal__content-form' action="#">
                    <input name='name' placeholder='Введите ваше Имя' type="text" />
                    <input name='phone' placeholder='Введите ваш номер телефона' />
                    <button className='modal__content-form-btn'>Оставить заявку</button>
                    <p className="modal__content-form-descr">Перезвоним в течение 10 минут</p>
                </form>
            </div>
        </div>
    )
}

export default Modal;