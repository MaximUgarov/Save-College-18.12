import React, { Component, Fragment } from 'react'
import axios from 'axios'
import '../global/styles/mainPage.css'

// import Slider from 'infinite-react-carousel';
import MainPageNews from './subPagesComponents/mainPageNews';
import Loading from '../global/Loading';
import { Context } from '../../context'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


export class MainPage extends Component {
    
    static contextType = Context;

    state = {
        slideItems: [],
        isLoaded: false,

    }

    componentDidMount() {

        axios.get(`${this.context.url}/wp-json/wp/v2/main_page`)
            .then(res => this.setState({
                slideItems: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }



    render() {
        const { slideItems, isLoaded } = this.state

        var settings = {
            centerMode: true,
            centerPadding: "20%",
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            speed: 2000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1776,
                    settings: {
                        centerMode: true,
                        centerPadding: "18%",

                    }
                },
                {
                    breakpoint: 1677,
                    settings: {
                        centerMode: true,
                        centerPadding: "16%",

                    }


                },
                {
                    breakpoint: 1568,
                    settings: {
                        centerMode: true,
                        centerPadding: "14%",

                    }


                },
                {
                    breakpoint: 1487,
                    settings: {
                        centerMode: true,
                        centerPadding: "13%",

                    }


                },
                {
                    breakpoint: 1446,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },


                },
                {
                    breakpoint: 1000,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: 0,
                        speed: 1000,
                    },


                }
            ]
        };


        return isLoaded ? (
            <Fragment>
                <div className="slider-block">
                    <div className="slider-block-wrapper">
                        <Slider {...settings}>
                            {slideItems.map((slideItems) =>
                                <div className="slide" >
                                    <div className="slide-container">
                                        <img src={slideItems.acf.add_photo} alt="" lazyloading className="slide_img" />
                                        <div className="slide-text">
                                            <div className="slide-text-wrapper">
                                                <h2 className="slide-text__title">{slideItems.title.rendered}</h2>
                                                <span className="slide-text__text" dangerouslySetInnerHTML={{ __html: slideItems.acf.textslide }} />
                                                <Link className="slide-text__btn" to={slideItems.acf.link}>Подробнее...</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                        </Slider>
                    </div>
                </div>
                <div className="news-block"><MainPageNews></MainPageNews></div>
            </Fragment>
        ) : <Loading />
    }
}


export default MainPage