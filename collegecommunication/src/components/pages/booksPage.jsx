import React, { Fragment } from 'react'

import '../global/styles/booksPage.css'
import SubBooksComponent from './subPagesComponents/subBooksComponent'

const BooksPage = () => {

    const booksArr = [{
        important: true,
        title: 'Web-Ирбис',
        descr: <span>Электронный каталог печатных изданий, находящихся в фонде Информационно-библиотечного центра. Коды доступа к общеобразовательным учебникам в электронном виде можно получить в Информационно-библиотечном центре по адресу: ул. Первомайская, 40, Советский проспект, 137, к. 25.<br />Коды доступа к общеобразовательным учебникам в электронном виде можно получить в Информационно-библиотечном центре по адресу: ул. Первомайская, 40, Советский проспект, 137, к. 25.</span>,
    }, {
        important: true,
        title: 'IPR Books',
        descr: <span>Логин и пароль для авторизации на сайте можно получить в Информационно-библиотечном центре колледжа (ул. Первомайская, 40 / Советский проспект, 137, к. 211)<br /><a href="#">Инструкция для пользователей электронной библиотеки IPRBooks</a><a href="#"> Видео-инструкция для пользователей электронной библиотеки IPRBook.</a></span>,
    }, {
        important: false,
        title: 'Юрайт электронная библиотека',
        descr: <a>Инструкция по регистрации пользователей ЭБС Юрайт</a>,
    }, {
        important: false,
        title: 'ЭБС издательство “Лань”',
        descr: <span><a href="#">Памятка пользователя ЭБС “Лань”</a><br /><a href="#">Видеоинструкция</a></span>,
    }, {
        important: false,
        title: 'LECTA',
        descr: <span><a href="#">Доступные учебники</a><br /><a href="#">Порядок регистрации</a><br /><a href="#">Технические требования</a></span>,
    }, {
        important: false,
        title: 'Просвещение',
        descr: <span><a href="#">Инструкция пользователя</a><br /><a href="#">Доступные учебники</a><br /><a href="#">Порядок регистрации</a><br /><a href="#">Технические требования</a></span>,
    }, {
        important: false,
        title: 'Издательство “Русское слово”',
        descr: <span><a href="#">Инструкция пользователя</a><br /><a href="#">Доступные учебники</a><br /><a href="#">Порядок регистрации</a><br /><a href="#">Технические требования</a></span>,
    }, {
        important: false,
        title: 'НЭБ',
        descr: <span><a href="#">Инструкция о порядке регистрации пользователей НЭБ</a><br /><a href="#">Инструкция по поиску изданий НЭБ</a></span>,
    }, {
        important: false,
        title: 'E-Library',
        descr: <a href="#">Инструкция для пользователей электронной библиотеки E-Library</a>,
    }, {
        important: false,
        title: 'Русская история',
        descr: <a href="#">Инструкция для пользователей электронной библиотеки Русская история</a>,
    },]

    return (
        <Fragment>
            <h2 className="title-main">Электронные библиотеки</h2>
            <div className="news-container">
                <div className="news-grid-wrapper">
                    {booksArr.map((item) => <div className={item.important ? "card-main main" : "card-main"} >
                        <div className={item.important ? "card-main-wrapper main" : "card-main-wrapper"}>
                            <div className={item.important ? "card-main-text-wrapper main" : "card-main-text-wrapper"}>
                                <h3 className={item.important ? "card-main__title main" : "card-main__title"}>{item.title}</h3>
                                <span className={item.important ? "card-main__text main" : "card-main__text"}>{item.descr}</span>
                            </div>
                            <button className={item.important ? "card-main__btn main" : "card-main__btn"}>Перейти</button>
                        </div></div >)}
                    <div className="books-btns">
                        <button className="books-btn green">Единое окно</button>
                        <button className="books-btn red">CYBERLENINKA</button>
                        <button className="books-btn blue">Im Werden</button>
                        </div>
                </div>
            </div>
            <h2 className="title-main">Ресурсы</h2>
            <div className="resources-container">
                <div className="resources-grid-wrapper">
                    <SubBooksComponent></SubBooksComponent>
                </div>
            </div>
        </Fragment>
    )
}

export default BooksPage