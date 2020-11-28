import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
const ProvisionPage = () => {


    const [ProvisionPageArr, setProvisionPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/Provision-Page')
            .then(res => {
                const arr = res.data
                setProvisionPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setProvisionPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }


    if (IsLoadded === true) {

        return (
            ProvisionPageArr.map((ProvisionPageArr) => <Fragment>
                <h2 className="title-main">{ProvisionPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                    {splitDescription(ProvisionPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper covid">
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                        </div>
                    )}
                </div>
                </div>
            </Fragment>
            )

        )
    }
    return (
        <Loading/>
    )
}

export default ProvisionPage
