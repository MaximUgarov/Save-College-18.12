import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../../global/Loading';


const ReceptionPageArr = () => {

    const [CommentsPageArr, setCommentsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/comments')
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
return(
    <Loading/>
)
}



export default ReceptionPageArr

