import React from 'react'
import slideImg1 from '../../img/slider_img/slide1.png';

 const SliderArr = () => {

    const slideArr = [{
        img: slideImg1,
        title: 'Как к нам попасть?',
        descr: 'Для поступления на обучение абитуриент подает заявление о приеме с приложением необходимых документов через электронную почту приемной комиссии intro@vksit.ru'
    }, {
        img: slideImg1,
        title: 'Как к нам попасть?',
        descr: 'Для поступления на обучение абитуриент подает заявление о приеме с приложением необходимых документов через электронную почту приемной комиссии intro@vksit.ru'
    }, {
        img: slideImg1,
        title: 'Как к нам попасть?',
        descr: 'Для поступления на обучение абитуриент подает заявление о приеме с приложением необходимых документов через электронную почту приемной комиссии intro@vksit.ru'
    }, {
        img: slideImg1,
        title: 'Как к нам попасть?',
        descr: 'Для поступления на обучение абитуриент подает заявление о приеме с приложением необходимых документов через электронную почту приемной комиссии intro@vksit.ru'
    }, {
        img: slideImg1,
        title: 'Как к нам попасть?',
        descr: 'Для поступления на обучение абитуриент подает заявление о приеме с приложением необходимых документов через электронную почту приемной комиссии intro@vksit.ru'
    },]

    return (
        
        slideArr.map((item) => <div className="slide" key={item.title}>
            <div className="slide-container">
                <img src={item.img} alt="" className="slide_img" />
                <div className="slide-text">
                    <div className="slide-text-wrapper">
                        <h2 className="slide-text__title">{item.title}</h2>
                        <span className="slide-text__text">{item.descr}</span>
                        <button className="slide-text__btn">Подробнее...</button>
                    </div>
                </div>
            </div>
        </div>)


    )
}



export default SliderArr


