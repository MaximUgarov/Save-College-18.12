import React, { Fragment, useEffect, useState } from 'react'
import { Context } from '../../../context'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../global/Loading'


const DemoexamPage = () => {

    const [DemoexamPageArr, setDemoexamPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/demoexam-page')
            .then(res => {
                const arr = res.data
                setDemoexamPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setDemoexamPageArr])


    if (IsLoadded === true) {

        return (
            DemoexamPageArr.map((DemoexamPageArr) =>
                <Fragment>
                    <h2 className="title-main">{DemoexamPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                        <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: DemoexamPageArr.content.rendered }} />
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


export default DemoexamPage

