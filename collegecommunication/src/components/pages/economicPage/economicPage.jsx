import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Context } from '../../../context'
import axios from 'axios'
import Loading from '../../global/Loading'



const EconomicPage = () => {

    const [EconomicPageArr, setEconomicPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/economic-page`)
            .then(res => {
                const arr = res.data
                setEconomicPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setEconomicPageArr])


    if (IsLoadded === true) {

        return (
            EconomicPageArr.map((EconomicPageArr) =>
                <Fragment>
                    <h2 className="title-main">{EconomicPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                        <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: EconomicPageArr.content.rendered }} />
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


export default EconomicPage

