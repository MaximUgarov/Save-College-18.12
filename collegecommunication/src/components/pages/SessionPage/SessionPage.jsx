import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading'


const SessionPage = () => {

    const [SessionPage, setSessionPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/session-page')
            .then(res => {
                const arr = res.data
                setSessionPage(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setSessionPage])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {

        return (
            SessionPage.map((SessionPage) =>
                <Fragment>
                    <h2 className="title-main">{SessionPage.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                    {splitDescription(SessionPage.content.rendered).map((span) =>
                        <div className="text-block-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: span }}></span>
                        </div>
                    )}
                    </div>
                </Fragment>
            )
        )
    }
    return (
        <Loading/>
    )
}


export default SessionPage

