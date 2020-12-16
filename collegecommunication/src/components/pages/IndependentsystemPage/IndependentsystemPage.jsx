import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
import { Context } from '../../../context'

const IndependentsystemPage = () => {


    const [IndependentsystemPageArr, setIndependentsystemPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/independentsys-page`)
            .then(res => {
                const arr = res.data
                setIndependentsystemPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setIndependentsystemPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }


    if (IsLoadded === true) {

        return (
            IndependentsystemPageArr.map((IndependentsystemPageArr) => <Fragment>
                <h2 className="title-main">{IndependentsystemPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                    {splitDescription(IndependentsystemPageArr.content.rendered).map((span) =>
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

export default IndependentsystemPage
