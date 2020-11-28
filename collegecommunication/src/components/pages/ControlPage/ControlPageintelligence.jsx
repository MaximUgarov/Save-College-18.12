import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import SubControlPage from './subComponents/subControlPageBlock'
import DropdownContent from './subComponents/DropdownContent';

const ControlPageintelligence = () => {

    const [ControlPageArr, setControlPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/Control-sub-page')
            .then(res => {
                const arr = res.data
                setControlPageArr(arr)
                setIsLoadded(true)
                console.log(ControlPageArr)
            })
            .catch(err => console.log(err))
    }, [setControlPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {
        return (
            ControlPageArr.map((ControlPageArr) =>
                <Fragment>
                    <h2 className="title-main">{ControlPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages"> 

                            {splitDescription(ControlPageArr.content.rendered).map((span) =>
                                <div className="text-block-wrapper">
                                    <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                                </div>
                            )}

                    </div>
                </Fragment>
            )

        )
    }
    return (
        <Loading />
    )
}
export default ControlPageintelligence