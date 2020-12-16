import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'





const CorruptionPage = () => {

    const [CorruptionPageArr, setCorruptionPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)


    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/corruption-page`)
            .then(res => {
                const arr = res.data
                setCorruptionPageArr(arr)
                setIsLoadded(true)
                console.log(CorruptionPageArr)
            })
            .catch(err => console.log(err))
    }, [setCorruptionPageArr])




    if (IsLoadded === true) {
        return (
            CorruptionPageArr.map((CorruptionPageArr) =>
                <Fragment>
                    <h2 className="title-main">{CorruptionPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: CorruptionPageArr.content.rendered }} />
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
export default CorruptionPage