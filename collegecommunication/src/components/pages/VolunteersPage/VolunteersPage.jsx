import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'

const VolunteersPage = () => {

    const [VolunteersPageArr, setVolunteersPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/volunteers-page`)
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