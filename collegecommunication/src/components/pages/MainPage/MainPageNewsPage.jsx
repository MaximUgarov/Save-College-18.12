import React, { Fragment, useEffect, useState, useContext } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
const MainPageNewsPage = (props) => {


    const [NewsPageArr, setNewsPageArr] = useState([]);
    const [Isloadded, setIsloadded] = useState(false)
    const { url }= useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/main_page_news/${props.match.params.id}`)
            .then(res => {
                const arr = res.data
                setNewsPageArr(arr)
                setIsloadded(true)
            })
            .catch(err => console.log(err))
    }, [setNewsPageArr])

    if (Isloadded === true) {
        console.log(NewsPageArr)
        return (
            <Fragment>
                <h2 className="title-main">{NewsPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages">
                    <div className="text-block-wrapper">
                        <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: NewsPageArr.content.rendered }} />
                    </div>
                </div>
            </Fragment>
        )
    }
    return (
        <Loading/>
    )
}
export default withRouter(MainPageNewsPage)