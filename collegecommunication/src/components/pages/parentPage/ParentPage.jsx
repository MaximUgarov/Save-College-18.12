import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'


const ParentPage = () => {

    const [ParentPageArr, setParentPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/Parent-page`)
            .then(res => {
                const arr = res.data
                setParentPageArr(arr)
                setIsLoadded(true)
                console.log(ParentPageArr)
            })
            .catch(err => console.log(err))
    }, [setParentPageArr])
    if (IsLoadded === true) {
        return (
            ParentPageArr.map((ParentPageArr) =>
                <Fragment>
                    <h2 className="title-main">{ParentPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: ParentPageArr.content.rendered }} />
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
export default ParentPage