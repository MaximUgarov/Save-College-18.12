import React from 'react'

const SubMainPageNewsArr = () => {

    const newsArr = [{
        important: true,
        title: 'Набор 2020',
        descr: 'График работы приемной комисии: понедельник - пятница с 9:00 до 15:00 Контактные данные приемной комисии 75-89-02, 8(921)684-08-08, intro@vksit.ru',
    },{
        important: true,
        title: 'Набор 202022',
        descr: 'График работы приемной комисии: понедельник - пятница с 9:00 до 15:00 Контактные данные приемной комисии 75-89-02, 8(921)684-08-08, intro@vksit.ru',
    }, {
        important: false,
        title: 'Начало учёбы',
        descr: 'График работы приемной комисии: понедельник - пятница с 9:00 до 15:00 Контактные данные приемной комисии 75-89-02, 8(921)684-08-08, intro@vksit.ru',
    }, {
        important: false,
        title: 'Начало учёбы',
        descr: 'График работы приемной комисии: понедельник - пятница с 9:00 до 15:00 Контактные данные приемной комисии 75-89-02, 8(921)684-08-08, intro@vksit.ru',
    }, {
        important: false,
        title: 'Начало учёбы',
        descr: 'График работы приемной комисии: понедельник - пятница с 9:00 до 15:00 Контактные данные приемной комисии 75-89-02, 8(921)684-08-08, intro@vksit.ru',
    },]

    return (

        newsArr.map((item) => <div className={item.important ? "card-main main" : "card-main"} >
            <div className={item.important ? "card-main-wrapper main" : "card-main-wrapper"}>
                <div className={item.important ? "card-main-text-wrapper main" : "card-main-text-wrapper"}>
                    <h3 className={item.important ? "card-main__title main" : "card-main__title"}>{item.title}</h3>
                    <span className={item.important ? "card-main__text main" : "card-main__text"}>{item.descr}</span>
                </div>
                <button className={item.important ? "card-main__btn main" : "card-main__btn"}>Подробнее...</button>
            </div></div >)

    )
}
export default SubMainPageNewsArr