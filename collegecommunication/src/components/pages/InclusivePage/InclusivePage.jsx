import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'

import Loading from '../../global/Loading';
import { Context } from '../../../context'
import { renderToString } from 'react-dom/server';
import { BrowserRouter, Link } from 'react-router-dom';
const InclusivePage = () => {


    const [InclusivePageArr, setInclusivePageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/inclusive-page`)
            .then(res => {
                const arr = res.data
                setInclusivePageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setInclusivePageArr])




    // function splitDescription(content) {
    //     const el = document.createElement('div');
    //     el.innerHTML = content;
    //     el.querySelectorAll('a').forEach(a => {
    //         a.addEventListener('click', (event) => {
    //             event.preventDefault()
    //             const href = a.getAttribute('href');})
    //     })
    // }
    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }





    if (IsLoadded === true) {

        return (

            InclusivePageArr.map((InclusivePageArr) =>
                <Fragment>
                    <h2 className="title-main">{InclusivePageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages center">
                        <div className="content-container-teamplatesPages-wrapp">
                            {splitDescription(InclusivePageArr.content.rendered).map((span) =>
                                <div className="text-block-wrapper covid" style={{ "max-width": "1008px" }}>
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
        <Loading />
    )
}

export default InclusivePage
