import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
const HostelPage = () => {

    const [HostelPageArr, setHostelPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/Student-page`)
            .then(res => {
                const arr = res.data
                setHostelPageArr(arr)
                setIsLoadded(true)

            })
            .catch(err => console.log(err))
    }, [setHostelPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {
        return (
            HostelPageArr.map((HostelPageArr) =>
                <Fragment>
                    <h2 className="title-main">{HostelPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div>
                            {splitDescription(HostelPageArr.content.rendered).map((span) =>
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
        <Loading />
    )
}
export default HostelPage