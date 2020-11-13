import React, { Fragment } from 'react'
import '../../global/styles/mainPageNews.css'
import SubMainPageNewsArr from './subMainPageNewsArr'


const MainPageNews = () => {

    return (
        <Fragment>
            <h2 className="title-main">Новости</h2>
            <div className="news-container">
                <div className="news-grid-wrapper">
                    <SubMainPageNewsArr></SubMainPageNewsArr>
                </div>
                <button className="news-archive__btn">Архив новостей</button>
            </div>
        </Fragment>
    )

}
export default MainPageNews