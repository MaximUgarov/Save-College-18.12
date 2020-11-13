import React, { Fragment } from 'react'
import '../../global/styles/ReceptionPage.css'
import ReceptionPageArr from './subcomponents/ReceptionPageArr'

function ReceptionPage() {
    return (
        <Fragment>
            <h2 className="title-main">Приемная директора</h2>
            <div className="reception-block">
                <div className="reception-block-wrapper">
                    <div className="reception-block-grid">
                        <div className="reception-block-form">
                            <form action="">
                                <div className="form-reception-wrapper">
                                    <div className="form-reception-block-contant">
                                        <h4 className="form-reception-block__title">Задать вопрос</h4>
                                        <input type="text" className="form-reception-block__input" placeholder="Имя" />
                                        <input type="text" className="form-reception-block__input" placeholder="E-mail" />
                                        <textarea name="" className="form-reception-block__teaxtArea" placeholder="Сообщение"></textarea>
                                        <div className="form-reception-block__btnWrapper">
                                            <button type="submit" className="form-reception-block__btn">Отправить</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="reception-block-question">
                            <span className="reception-block-question__title">Здесь Вы можете задать вопрос администрации колледжа Модерирование включено, поэтому сообщения публикуются только при одобрении администратора</span>
                            <span className="reception-block-question__subtitle">Возможно ваш вопрос уже здесь есть:</span><div className="reception-block-question__wrapper"><ReceptionPageArr></ReceptionPageArr></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ReceptionPage
