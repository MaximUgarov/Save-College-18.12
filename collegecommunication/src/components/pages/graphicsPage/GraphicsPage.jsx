import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading'
import { Context } from '../../../context'

const GraphicsPage = () => {

    const [GraphicsPageArr, setGraphicsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/graphics-page`)
            .then(res => {
                const arr = res.data
                setGraphicsPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setGraphicsPageArr])


    if (IsLoadded === true) {

        return (
            GraphicsPageArr.map((GraphicsPageArr) =>
                <Fragment>
                    <h2 className="title-main">{GraphicsPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                        <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: GraphicsPageArr.content.rendered }} />
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


export default GraphicsPage

