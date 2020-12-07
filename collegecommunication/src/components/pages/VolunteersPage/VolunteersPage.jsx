import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const VolunteersPage = () => {

    const [VolunteersPageArr, setVolunteersPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/volunteers-page')
            .then(res => {
                const arr = res.data
                setVolunteersPageArr(arr)
                setIsLoadded(true)
                console.log(VolunteersPageArr)
            })
            .catch(err => console.log(err))
    }, [setVolunteersPageArr])
    if (IsLoadded === true) {
        return (
            VolunteersPageArr.map((VolunteersPageArr) =>
                <Fragment>
                    <h2 className="title-main">{VolunteersPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: VolunteersPageArr.content.rendered }} />
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
export default VolunteersPage