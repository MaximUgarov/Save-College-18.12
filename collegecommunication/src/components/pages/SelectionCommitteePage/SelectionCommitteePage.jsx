import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const SelectionCommitteePage = () => {

    const [SelectionCommitteePageArr, setSelectionCommitteePageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/committee-page')
            .then(res => {
                const arr = res.data
                setSelectionCommitteePageArr(arr)
                setIsLoadded(true)
                console.log(SelectionCommitteePageArr)
            })
            .catch(err => console.log(err))
    }, [setSelectionCommitteePageArr])
    if (IsLoadded === true) {
        return (
            SelectionCommitteePageArr.map((SelectionCommitteePageArr) =>
                <Fragment>
                    <h2 className="title-main">{SelectionCommitteePageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: SelectionCommitteePageArr.content.rendered }} />
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
export default SelectionCommitteePage