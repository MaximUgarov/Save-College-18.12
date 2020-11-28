import React, { Fragment, useEffect, useState } from 'react'
import { Context } from '../../../context'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../global/Loading'


const ScholarshipPage = () => {

    const [ScholarshipPageArr, setScholarshipPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/scholarship-page')
            .then(res => {
                const arr = res.data
                setScholarshipPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setScholarshipPageArr])


    if (IsLoadded === true) {

        return (
            ScholarshipPageArr.map((ScholarshipPageArr) =>
                <Fragment>
                    <h2 className="title-main">{ScholarshipPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                        <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: ScholarshipPageArr.content.rendered }} />
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


export default ScholarshipPage

