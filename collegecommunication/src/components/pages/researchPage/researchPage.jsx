import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading'
import { Context } from '../../../context'

const ResearchPage = () => {

    const [ResearchPageArr, setResearchPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/research-page`)
            .then(res => {
                const arr = res.data
                setResearchPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setResearchPageArr])


    if (IsLoadded === true) {

        return (
            ResearchPageArr.map((ResearchPageArr) =>
                <Fragment>
                    <h2 className="title-main">{ResearchPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: ResearchPageArr.content.rendered }} />
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


export default ResearchPage

