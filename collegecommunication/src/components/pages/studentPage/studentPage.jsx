import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
const StudentPage = () => {

    const [StudentPageArr, setStudentPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/Student-page`)
            .then(res => {
                const arr = res.data
                setStudentPageArr(arr)
                setIsLoadded(true)
                console.log(StudentPageArr)
            })
            .catch(err => console.log(err))
    }, [setStudentPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {
        return (
            StudentPageArr.map((StudentPageArr) =>
                <Fragment>
                    <h2 className="title-main">{StudentPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages"> 
                        <div>
                            {splitDescription(StudentPageArr.content.rendered).map((span) =>
                                <div className="text-block-wrapper">
                                    <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                                </div>
                            )}
                        </div>
                    </div>
                </Fragment>
            )

        )
    }
    return (
        <Loading/>
    )
}
export default StudentPage