import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'


const ContestsPage = () => {

    const [ContestsPageArr, setContestsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/contest-page')
            .then(res => {
                const arr = res.data
                setContestsPageArr(arr)
                setIsLoadded(true)
                console.log(ContestsPageArr)
            })
            .catch(err => console.log(err))
    }, [setContestsPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {

        return (
            ContestsPageArr.map((ContestsPageArr) =>
                <Fragment>
                    <h2 className="title-main">{ContestsPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                    {splitDescription(ContestsPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: span }}></span>
                        </div>
                    )}
                    </div>
                </Fragment>
            )
        )
    }
    return (
        <Loading/>
    )
}
export default ContestsPage