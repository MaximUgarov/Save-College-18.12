import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'

const DonationsPage = () => {

    const [DonationsPageArr, setDonationsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/donat-page`)
            .then(res => {
                const arr = res.data
                setDonationsPageArr(arr)
                setIsLoadded(true)
                console.log(DonationsPageArr)
            })
            .catch(err => console.log(err))
    }, [setDonationsPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {

        return (
            DonationsPageArr.map((DonationsPageArr) =>
                <Fragment>
                    <h2 className="title-main">{DonationsPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                    {splitDescription(DonationsPageArr.content.rendered).map((span) =>
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
export default DonationsPage