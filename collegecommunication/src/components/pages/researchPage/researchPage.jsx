import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading'


const ResearchPage = () => {

    const [ResearchPageArr, setResearchPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/research-page')
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
        <Loading/>
    )
}


export default ResearchPage

