import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
const ConferencePage = () => {


    const [ConferencePageArr, setConferencePageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/conference-page`)
            .then(res => {
                const arr = res.data
                setConferencePageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setConferencePageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }


    if (IsLoadded === true) {

        return (
            ConferencePageArr.map((ConferencePageArr) => <Fragment>
                <h2 className="title-main">{ConferencePageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                        {splitDescription(ConferencePageArr.content.rendered).map((span) =>
                            <div className="text-block-wrapper covid">
                                <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                            </div>
                        )}
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

export default ConferencePage
