import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../../global/Loading';
import { Context } from '../../../../context'

const ReceptionPageArr = () => {

    const [CommentsPageArr, setCommentsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/comments`)
            .then(res => {
                const arr = res.data
                setCommentsPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setCommentsPageArr])


    if (IsLoadded === true) {

        return (
            CommentsPageArr.map((CommentsPageArr) =>
                <div className="question__wrapper-card" key={CommentsPageArr.id}>
                    <div className="question__text">
                        <div className="question__text-wrapper">
                            <span className="question__spanName">{CommentsPageArr.author_name}</span>
                            <span className="question__spanDate">{CommentsPageArr.date}</span>
                        </div>
                        <span className="question__textQuestion" dangerouslySetInnerHTML={{ __html: CommentsPageArr.content.rendered }} />
                    </div>
                </div>)
        )
    }
    return (
        <Loading />
    )
}



export default ReceptionPageArr

