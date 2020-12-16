import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Context } from '../../../context'
import axios from 'axios'
import Loading from '../../global/Loading'


const PayPage = () => {

    const [PayPageArr, setPayPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/pay-page`)
            .then(res => {
                const arr = res.data
                setPayPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setPayPageArr])


    if (IsLoadded === true) {

        return (
            PayPageArr.map((PayPageArr) =>
                <Fragment>
                    <h2 className="title-main">{PayPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: PayPageArr.content.rendered }} />
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


export default PayPage

