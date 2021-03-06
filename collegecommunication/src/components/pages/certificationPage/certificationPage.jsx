import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading'
import { Context } from '../../../context'

const CertificationPage = () => {

    const [CertificationPage, setCertificationPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/certification-page`)
            .then(res => {
                const arr = res.data
                setCertificationPage(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setCertificationPage])


    if (IsLoadded === true) {

        return (
            CertificationPage.map((CertificationPage) =>
                <Fragment>
                    <h2 className="title-main">{CertificationPage.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                        <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: CertificationPage.content.rendered }} />
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


export default CertificationPage

