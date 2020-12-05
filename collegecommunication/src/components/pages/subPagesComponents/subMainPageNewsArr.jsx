import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import Loading from '../../global/Loading'
import importanceNews from '../../img/importanceNews.svg'

const SubMainPageNewsArr = () => {



    const [NewsArr, setNewsArr] = useState([]);
    const [Isloadded, setIsloadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/main_page_news')
            .then(res => {
                const arr = res.data
                setNewsArr(sort(arr))
                setIsloadded(true)
                console.log(NewsArr)
            })
            .catch(err => console.log(err))
    }, [setNewsArr])

    console.log(Isloadded)

    const sort = (NewsArr) => {
        return Array.from(NewsArr).sort((news) => {
            if (news.acf.important_news) {
                return -1;
            }
            else return 1;
        });
    }


    if (Isloadded === true) {
        let WindowWidth = window.innerWidth
        if (WindowWidth > 1000) {
            return (
                NewsArr.map((NewsArr) => <div className={NewsArr.acf.important_news ? "card-main main" : "card-main"} >
                    {NewsArr.acf.important_news ? <img src={importanceNews} alt="Пометка Важной новости" className="card-main__importanceNews"/> : null}
                    <div className={NewsArr.acf.important_news ? "card-main-wrapper main" : "card-main-wrapper"}>
                        <div className={NewsArr.acf.important_news ? "card-main-text-wrapper main" : "card-main-text-wrapper"}>
                            <h3 className={NewsArr.acf.important_news ? "card-main__title main" : "card-main__title"}>{NewsArr.title.rendered}</h3>
                            <span className={NewsArr.acf.important_news ? "card-main__text main" : "card-main__text"} dangerouslySetInnerHTML={{ __html: NewsArr.acf.card_text }}></span>
                        </div>
                        {NewsArr.acf.important_news ? <Link to={`/news/${NewsArr.id}`} className={NewsArr.acf.important_news ? "card-main__btn main" : "card-main__btn"}>Подробнее...</Link> : null}
                    </div>
                    {NewsArr.acf.important_news ?   null : <Link to={`/news/${NewsArr.id}`} className={NewsArr.acf.important_news ? "card-main__btn main" : "card-main__btn"}>Подробнее...</Link>}
                    </div >)

            )
        }
        return (
            NewsArr.map((NewsArr) => <Link to={`/news/${NewsArr.id}`} className={NewsArr.acf.important_news ? "card-main main" : "card-main"}>
                {NewsArr.acf.important_news ? <img src={importanceNews} alt="Пометка Важной новости" className="card-main__importanceNews"/> : null}
                <div className={NewsArr.acf.important_news ? "card-main-wrapper main" : "card-main-wrapper"}>
                    <div className={NewsArr.acf.important_news ? "card-main-text-wrapper main" : "card-main-text-wrapper"}>
                        <h3 className={NewsArr.acf.important_news ? "card-main__title main" : "card-main__title"}>{NewsArr.title.rendered}</h3>
                        <span className={NewsArr.acf.important_news ? "card-main__text main" : "card-main__text"} dangerouslySetInnerHTML={{ __html: NewsArr.acf.card_text }}></span>
                    </div>

                </div></Link>)

        )
    }
    return (
        <Loading/>
    )
}
export default SubMainPageNewsArr