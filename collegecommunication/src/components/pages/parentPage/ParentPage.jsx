import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const ParentPage = () => {

    const [ParentPageArr, setParentPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/Parent-page')
            .then(res => {
                const arr = res.data
                setParentPageArr(arr)
                setIsLoadded(true)
                console.log(ParentPageArr)
            })
            .catch(err => console.log(err))
    }, [setParentPageArr])
    if (IsLoadded === true) {
        return (
            ParentPageArr.map((ParentPageArr) =>
                <Fragment>
                    <h2 className="title-main">{ParentPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: ParentPageArr.content.rendered }} />
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
export default ParentPage