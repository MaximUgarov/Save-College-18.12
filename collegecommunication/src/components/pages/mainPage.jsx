import React, { Component, Fragment } from 'react'
import axios from 'axios'
import '../global/styles/mainPage.css'
import LoadingAnim from '../img/vxiit_zagruzchony_ekran.gif'





//img
import slideImg1 from '../img/slider_img/slide1.png';

import Slider from 'infinite-react-carousel';
import MainPageNews from './subPagesComponents/mainPageNews';
import Loading from '../global/Loading';






export class MainPage extends Component {
    state = {
        slideItems: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://localhost:8000/wp-json/wp/v2/main_page')
            .then(res => this.setState({
                slideItems: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }



    render() {
        const { slideItems, isLoaded }  = this.state
        console.log(slideItems)
        const settings = {
            centerMode: true,
            centerPadding: 400,
            duration: 500
        };


        return isLoaded ? (
            <Fragment>
                <div className="slider-block">
                    <div className="slider-block-wrapper">
                        <Slider {...settings}>
                            {slideItems.map((slideItems) => <div className="slide" >
                                <div className="slide-container">
                                    <img src={slideItems.acf.add_photo} alt="" lazyloading className="slide_img" />
                                    <div className="slide-text">
                                        <div className="slide-text-wrapper">
                                            <h2 className="slide-text__title">{slideItems.title.rendered}</h2>
                                            <span className="slide-text__text" dangerouslySetInnerHTML={{ __html: slideItems.content.rendered }} />
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
        ) : <Loading/>
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