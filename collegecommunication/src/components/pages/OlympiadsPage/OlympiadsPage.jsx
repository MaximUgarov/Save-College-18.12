import React, { Fragment, useEffect, useState } from 'react'
import { Context } from '../../../context'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../global/Loading'


const OlympiadsPage = () => {

    const [OlympiadsPageArr, setOlympiadsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/olympiads-page')
            .then(res => {
                const arr = res.data
                setOlympiadsPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setOlympiadsPageArr])


    if (IsLoadded === true) {

        return (
            OlympiadsPageArr.map((OlympiadsPageArr) =>
                <Fragment>
                    <h2 className="title-main">{OlympiadsPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                        <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: OlympiadsPageArr.content.rendered }} />
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


export default OlympiadsPage

