import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
const OpendayPage = () => {


    const [OpendayPageArr, setOpendayPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/openday-page`)
            .then(res => {
                const arr = res.data
                setOpendayPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setOpendayPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }


    if (IsLoadded === true) {

        return (
            OpendayPageArr.map((OpendayPageArr) => <Fragment>
                <h2 className="title-main">{OpendayPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                        {splitDescription(OpendayPageArr.content.rendered).map((span) =>
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

export default OpendayPage
