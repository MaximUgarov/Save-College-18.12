import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Context } from '../../../../context'


const InformationPageFounderInfo = () => {

    const [InformationPageArr, setInformationPageArr] = useState([]);
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/information-page-fou`)
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