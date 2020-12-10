import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../../global/Loading';
import { Context } from '../../../../context'

const CorruptFeedback = () => {

    const [CorruptFeedbackArr, setCorruptFeedbackArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/CorrFeed-page`)
            .then(res => {
                const arr = res.data
                setCorruptFeedbackArr(arr)
                setIsLoadded(true)
                console.log(CorruptFeedbackArr)
            })
            .catch(err => console.log(err))
    }, [setCorruptFeedbackArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {
        return (
            CorruptFeedbackArr.map((CorruptFeedbackArr) =>
                <Fragment>
                    <h2 className="title-main">{CorruptFeedbackArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages"> 
                        <div>
                            {splitDescription(CorruptFeedbackArr.content.rendered).map((span) =>
                                <div className="text-block-wrapper">
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
        <Loading/>
    )
}
export default CorruptFeedback