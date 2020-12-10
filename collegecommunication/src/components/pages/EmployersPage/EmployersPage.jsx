import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const EmployersPage = () => {

    const [EmployersPageArr, setEmployersPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/employers-page')
            .then(res => {
                const arr = res.data
                setEmployersPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setEmployersPageArr])
    if (IsLoadded === true) {
        return (
            EmployersPageArr.map((EmployersPageArr) =>
                <Fragment>
                    <h2 className="title-main">{EmployersPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: EmployersPageArr.content.rendered }} />
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
export default EmployersPage