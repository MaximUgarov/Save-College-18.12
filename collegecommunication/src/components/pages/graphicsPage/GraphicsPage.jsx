import React, { Fragment, useEffect, useState } from 'react'
import { Context } from '../../../context'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../global/Loading'


const GraphicsPage = () => {

    const [GraphicsPageArr, setGraphicsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/graphics-page')
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

