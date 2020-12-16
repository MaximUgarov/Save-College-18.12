import React, { Fragment, useEffect, useState, useContext } from 'react'
import '../../global/styles/documentsPage.css'
import axios from 'axios'
import Loading from '../../global/Loading'
import { Context } from '../../../context'



const EducationPage = () => {




    const [EducationPageArr, setEducationPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/education_page`)
            .then(res => {
                const arr = res.data
                setEducationPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setEducationPageArr])


    if (IsLoadded === true) {


        return (
            EducationPageArr.map((EducationPageArr) =>
                <Fragment>
                    <h2 className="title-main">{EducationPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: EducationPageArr.content.rendered }} />
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

export default EducationPage

