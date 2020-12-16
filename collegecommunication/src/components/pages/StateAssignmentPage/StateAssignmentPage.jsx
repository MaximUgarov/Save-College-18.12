import React, { Fragment, useEffect, useState, useContext  } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'

const StateAssignmentPage = () => {

    const [StateAssignmentPageArr, setStateAssignmentPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/aufgabe-page`)
            .then(res => {
                const arr = res.data
                setStateAssignmentPageArr(arr)
                setIsLoadded(true)
                console.log(StateAssignmentPageArr)
            })
            .catch(err => console.log(err))
    }, [setStateAssignmentPageArr])
    if (IsLoadded === true) {
        return (
            StateAssignmentPageArr.map((StateAssignmentPageArr) =>
                <Fragment>
                    <h2 className="title-main">{StateAssignmentPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: StateAssignmentPageArr.content.rendered }} />
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
export default StateAssignmentPage