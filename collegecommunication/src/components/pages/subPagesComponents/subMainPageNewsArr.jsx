import React, { Fragment, useEffect, useState }from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const SubMainPageNewsArr = () => {

  

    const [NewsArr, setNewsArr] = useState([]);
    const [Isloadded, setIsloadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/main_page_news')
            .then(res => {
                const arr = res.data
                setNewsArr(arr)
                setIsloadded(true)
                console.log(NewsArr)
            })
            .catch(err => console.log(err))
    }, [setNewsArr])

console.log(Isloadded)
if(Isloadded === true) {
    return (
        NewsArr.map((NewsArr) => <div className={NewsArr.acf.important_news ? "card-main main" : "card-main"} >
            <div className={NewsArr.acf.important_news ? "card-main-wrapper main" : "card-main-wrapper"}>
                <div className={NewsArr.acf.important_news ? "card-main-text-wrapper main" : "card-main-text-wrapper"}>
                    <h3 className={NewsArr.acf.important_news ? "card-main__title main" : "card-main__title"}>{NewsArr.title.rendered}</h3>
                    <span className={NewsArr.acf.important_news ? "card-main__text main" : "card-main__text"} dangerouslySetInnerHTML={{ __html: NewsArr.content.rendered }}></span>
                </div>
                <Link to={`/news/${NewsArr.id}`} className={NewsArr.acf.important_news ? "card-main__btn main" : "card-main__btn"}>Подробнее...</Link>
            </div></div >)

    )
}
return(
    <p>fdgdfg</p>
)
}
export default SubMainPageNewsArr