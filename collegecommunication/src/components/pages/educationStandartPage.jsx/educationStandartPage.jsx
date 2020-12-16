import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
const EducationStandartPage = () => {

    const [EducationStandartPageArr, setEducationStandartPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/education_page_stand`)
            .then(res => {
                const arr = res.data
                setEducationStandartPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setEducationStandartPageArr])


    if (IsLoadded === true) {

        return (
            EducationStandartPageArr.map((EducationStandartPageArr) =>
                <Fragment>
                    <h2 className="title-main">{EducationStandartPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <h4 className="subTitleLink">{EducationStandartPageArr.acf.education_standart_subtitle}</h4>
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: EducationStandartPageArr.content.rendered }} />
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

export default EducationStandartPage