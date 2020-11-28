import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading'


const SchedulecallsPage = () => {

    const [SchedulecallsPage, setSchedulecallsPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/schedulecalls-page')
            .then(res => {
                const arr = res.data
                setSchedulecallsPage(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setSchedulecallsPage])


    if (IsLoadded === true) {

        return (
            SchedulecallsPage.map((SchedulecallsPage) =>
                <Fragment>
                    <h2 className="title-main">{SchedulecallsPage.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                        <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: SchedulecallsPage.content.rendered }} />
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


export default SchedulecallsPage

