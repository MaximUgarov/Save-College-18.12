import React, { Fragment, useEffect, useState }from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const SubMainPageNewsArr = () => {

  

    const [NewsArr, setNewsArr] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/main_page_news')
            .then(res => {
                const arr = res.data
                setNewsArr(arr)
                console.log(NewsArr)
            })
            .catch(err => console.log(err))
    }, [setNewsArr])

    return (

        NewsArr.map((NewsArr) => <div className={NewsArr.acf.important_news ? "card-main main" : "card-main"} >
            <div className={NewsArr.acf.important_news ? "card-main-wrapper main" : "card-main-wrapper"}>
                <div className={NewsArr.acf.important_news ? "card-main-text-wrapper main" : "card-main-text-wrapper"}>
                    <h3 className={NewsArr.acf.important_news ? "card-main__title main" : "card-main__title"}>{NewsArr.title.rendered}</h3>
                    <span className={NewsArr.acf.important_news ? "card-main__text main" : "card-main__text"} dangerouslySetInnerHTML={{ __html: NewsArr.content.rendered }}></span>
                </div>
                <Link to={NewsArr.id}><button className={NewsArr.acf.important_news ? "card-main__btn main" : "card-main__btn"}>Подробнее...</button></Link>
            </div></div >)

    )
}
export default SubMainPageNewsArr