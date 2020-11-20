import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import mapImg from '../../../img/map__informationPage.svg'
import tbus_icon from '../../../img/tbus_icon.svg'
import bus_icon from '../../../img/bus_icon.svg'

const InformationPageFounderInfo = () => {

    const [InformationPageArr, setInformationPageArr] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/information-page-fou')
            .then(res => {
                const arr = res.data
                setInformationPageArr(arr)
                console.log(InformationPageArr)
            })
            .catch(err => console.log(err))
    }, [setInformationPageArr])

function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    return (
        
           InformationPageArr.map((InformationPageArr) =>
           <Fragment>
           <h2 className="title-main">{InformationPageArr.title.rendered}</h2>
            <div className="content-container-teamplatesPages">
            {splitDescription(InformationPageArr.content.rendered).map((span) =>
                    <div className="text-block-wrapper">
                        <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }}></span>
                    </div>
                )}
            </div>
            </Fragment>
            )

    )
}
export default InformationPageFounderInfo