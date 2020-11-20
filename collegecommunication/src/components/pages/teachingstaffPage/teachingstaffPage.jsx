import React, { Fragment, useEffect, useState } from 'react'
import { Context } from '../../../context'
import { Link } from 'react-router-dom'
import axios from 'axios'


const TeachingstaffPage = () => {

    const [TeachersStaffPageArr, setTeachersStaffPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/teachers_staff')
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
        <p>
            gfgdgdf
        </p>
    )
}


export default TeachingstaffPage

