import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const LinksPage = () => {

    const [LinksPageArr, setLinksPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/links-page')
            .then(res => {
                const arr = res.data
                setLinksPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setLinksPageArr])
    if (IsLoadded === true) {
        return (
            LinksPageArr.map((LinksPageArr) =>
                <Fragment>
                    <h2 className="title-main">{LinksPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: LinksPageArr.content.rendered }} />
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
export default LinksPage