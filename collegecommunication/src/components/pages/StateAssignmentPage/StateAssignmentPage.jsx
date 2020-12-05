import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const StateAssignmentPage = () => {

    const [StateAssignmentPageArr, setStateAssignmentPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/aufgabe-page')
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