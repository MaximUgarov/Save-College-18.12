import React, { Fragment, useState, useContext } from 'react'
import '../../global/styles/ReceptionPage.css'
import ReceptionPageArr from './subcomponents/ReceptionPageArr'
import axios from 'axios'
import { Context } from '../../../context'
const ReceptionPage = () => {
    const { url } = useContext(Context)
    const [Data, setData] = useState({
        post: 1,
        author_name: "",
        author_email: "",
        content: "",
    });

    const onChangeName = e => {
        var val = e.target.value;
        setData({ ...Data, author_name: val });
    }
    const onChangeemail = e => {
        var val = e.target.value;
        setData({ ...Data, author_email: val });
    }
    const onChangecontent = e => {
        var val = e.target.value;
        setData({ ...Data, content: val });
    }
    const [OpenSeccuful, setOpenSeccuful] = useState(false)


    const handleSubmit = e => {
        e.preventDefault();
        let queryData = Object.entries(Data).map(([key, value]) => (`${key}=${value}`)).join('&');
        axios.post(`${url}wp-json/wp/v2/comments`, { ...Data })
            .then(res => { setOpenSeccuful(true)
            })
    }

    return (
        <Fragment>
            <h2 className="title-main">Приемная директора</h2>
            <div className="reception-block">
                <div className="reception-block-wrapper">
                    <div className="reception-block-grid">
                        <div className="reception-block-form">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="form-reception-wrapper">
                                    <div className="form-reception-block-contant">
                                        <h4 className="form-reception-block__title">Задать вопрос</h4>
                                        <input type="text" className="form-reception-block__input" placeholder="Имя" name="author_name" onChange={onChangeName}  />
                                        <input type="text" className="form-reception-block__input" placeholder="E-mail" name="author_email" onChange={onChangeemail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                        <textarea name="" className="form-reception-block__teaxtArea" placeholder="Сообщение" name="content" onChange={onChangecontent} />
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
                <div className={OpenSeccuful ? "succesful-bg active": "succesful-bg"}></div>
                <div className={OpenSeccuful ? "successful-wrapper active": "successful-wrapper"}><span className="successful-span">Ваш комментарий<br /> успешно <br />отправлен!</span><button className="successful-btn" onClick={() => setOpenSeccuful(false)}>Закрыть</button></div>
            </div>
        </Fragment>
    )
}

export default ReceptionPage
