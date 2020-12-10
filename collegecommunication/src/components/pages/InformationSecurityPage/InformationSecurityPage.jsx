import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const InformationSecurityPage = () => {

    const [InformationSecurityPageArr, setInformationSecurityPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/informsecur-page')
            .then(res => {
                const arr = res.data
                setInformationSecurityPageArr(arr)
                setIsLoadded(true)
                console.log(InformationSecurityPageArr)
            })
            .catch(err => console.log(err))
    }, [setInformationSecurityPageArr])
    if (IsLoadded === true) {
        return (
            InformationSecurityPageArr.map((InformationSecurityPageArr) =>
                <Fragment>
                    <h2 className="title-main">{InformationSecurityPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: InformationSecurityPageArr.content.rendered }} />
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
export default InformationSecurityPage