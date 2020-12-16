import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'

const GraduatesPage = () => {

    const [GraduatesPageArr, setGraduatesPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)
    
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/graduates-page`)
            .then(res => {
                const arr = res.data
                setGraduatesPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setGraduatesPageArr])
    if (IsLoadded === true) {
        return (
            GraduatesPageArr.map((GraduatesPageArr) =>
                <Fragment>
                    <h2 className="title-main">{GraduatesPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: GraduatesPageArr.content.rendered }} />
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
export default GraduatesPage