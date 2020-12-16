import React, { Fragment, useEffect, useState , useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'

const CustomPage = () => {

    const [CustomPageArr, setCustomPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/custom-page`)
            .then(res => {
                const arr = res.data
                setCustomPageArr(arr)
                setIsLoadded(true)
                console.log(CustomPageArr)
            })
            .catch(err => console.log(err))
    }, [setCustomPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {

        return (
            CustomPageArr.map((CustomPageArr) =>
                <Fragment>
                    <h2 className="title-main">{CustomPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                    {splitDescription(CustomPageArr.content.rendered).map((span) =>
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
export default CustomPage