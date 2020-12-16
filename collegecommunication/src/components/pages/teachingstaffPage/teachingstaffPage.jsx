import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading'
import { Context } from '../../../context'

const TeachingstaffPage = () => {

    const [TeachersStaffPageArr, setTeachersStaffPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/teachers_staff`)
            .then(res => {
                const arr = res.data
                setTeachersStaffPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setTeachersStaffPageArr])


    if (IsLoadded === true) {

        return (
            TeachersStaffPageArr.map((TeachersStaffPageArr) =>
                <Fragment>
                    <h2 className="title-main">{TeachersStaffPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: TeachersStaffPageArr.content.rendered }} />
                        </div>
                    </div>
                </Fragment>
            )
        )
    }
    return (
        <Loading />
    )
}


export default TeachingstaffPage

