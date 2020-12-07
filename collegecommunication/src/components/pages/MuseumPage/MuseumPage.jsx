import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const MuseumPage = () => {

    const [MuseumPageArr, setMuseumPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/museum-page')
            .then(res => {
                const arr = res.data
                setMuseumPageArr(arr)
                setIsLoadded(true)
                console.log(MuseumPageArr)
            })
            .catch(err => console.log(err))
    }, [setMuseumPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {
        return (
            MuseumPageArr.map((MuseumPageArr) =>
                <Fragment>
                    <h2 className="title-main">{MuseumPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        {splitDescription(MuseumPageArr.content.rendered).map((span) =>
                            <div className="text-block-wrapper">
                                <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }}></span>
                            </div>
                        )}
                    </div>
                </Fragment>
            )

        )
    }
    return (
        <Loading />
    )
}
export default MuseumPage