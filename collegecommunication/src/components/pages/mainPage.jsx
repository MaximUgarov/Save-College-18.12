import React, { Component, Fragment } from 'react'
import '../global/styles/mainPage.css'





//img
import slideImg1 from '../img/slider_img/slide1.png';

import Slider from 'infinite-react-carousel';
import MainPageNews from './subPagesComponents/mainPageNews';






export class MainPage extends Component {


    state = {
        items: [
            {
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
            },
        ]
    }

    render() {
        const { items } = this.state
        const settings = {
            centerMode: true,
            centerPadding: 400,
            duration: 500
        };


        return (
            <Fragment>
                <div className="slider-block">
                    <div className="slider-block-wrapper">
                        <Slider {...settings}>
                            {items.map(item => <div className="slide" key={item.title}>
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
                            </div>)}
                        </Slider>
                    </div>
                </div>
                <div className="news-block"><MainPageNews></MainPageNews></div>
            </Fragment>
        )
    }
}


export default MainPage


















// <div className="slide">
//                             <div className="slide-container">
//                                 <img src={slideImg1} alt="" className="slide_img" />
//                                 <div className="slide-text">
//                                     <div className="slide-text-wrapper">
//                                         <h2 className="slide-text__title">Как к нам попасть?</h2>
//                                         <span className="slide-text__text">Для поступления на обучение абитуриент подает заявление о приеме с приложением необходимых документов через электронную почту приемной комиссии intro@vksit.ru</span>
//                                         <button className="slide-text__btn">Подробнее...</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-container">
//                                 <img src={slideImg1} alt="" className="slide_img" />
//                                 <div className="slide-text">
//                                     <div className="slide-text-wrapper">
//                                         <h2 className="slide-text__title">Как к нам попасть?</h2>
//                                         <span className="slide-text__text">Для поступления на обучение абитуриент подает заявление о приеме с приложением необходимых документов через электронную почту приемной комиссии intro@vksit.ru</span>
//                                         <button className="slide-text__btn">Подробнее...</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-container">
//                                 <img src={slideImg1} alt="" className="slide_img" />
//                                 <div className="slide-text">
//                                     <div className="slide-text-wrapper">
//                                         <h2 className="slide-text__title">Как к нам попасть?</h2>
//                                         <span className="slide-text__text">Для поступления на обучение абитуриент подает заявление о приеме с приложением необходимых документов через электронную почту приемной комиссии intro@vksit.ru</span>
//                                         <button className="slide-text__btn">Подробнее...</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-container">
//                                 <img src={slideImg1} alt="" className="slide_img" />
//                                 <div className="slide-text">
//                                     <div className="slide-text-wrapper">
//                                         <h2 className="slide-text__title">Как к нам попасть?</h2>
//                                         <span className="slide-text__text">Для поступления на обучение абитуриент подает заявление о приеме с приложением необходимых документов через электронную почту приемной комиссии intro@vksit.ru</span>
//                                         <button className="slide-text__btn">Подробнее...</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>