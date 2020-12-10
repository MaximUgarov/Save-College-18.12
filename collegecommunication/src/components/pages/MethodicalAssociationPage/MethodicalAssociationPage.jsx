import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const MethodicalAssociationPage = () => {

    const [MethodicalAssociationPageArr, setMethodicalAssociationPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/mo-page')
            .then(res => {
                const arr = res.data
                setMethodicalAssociationPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setMethodicalAssociationPageArr])
    if (IsLoadded === true) {
        return (
            MethodicalAssociationPageArr.map((MethodicalAssociationPageArr) =>
                <Fragment>
                    <h2 className="title-main">{MethodicalAssociationPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: MethodicalAssociationPageArr.content.rendered }} />
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
export default MethodicalAssociationPage