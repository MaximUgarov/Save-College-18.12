import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import '../../../components/global/styles/informationPage.css'
import mapImg from '../../img/map__informationPage.svg'
import tbus_icon from '../../img/tbus_icon.svg'
import bus_icon from '../../img/bus_icon.svg'
import InformationPageContactInfo from './subComponents/informationPageContactInfo'
import InformationPageHistory from './subComponents/informationPageHistory'
import InformationPageFounderInfo from './subComponents/informationPageFounderInfo'

const InformationPage = () => {


    const [InformationPageArr, setInformationPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/information-page')
            .then(res => {
                const arr = res.data
                setInformationPageArr(arr)
                setIsLoadded(true)
                console.log(InformationPageArr)
            })
            .catch(err => console.log(err))
    }, [setInformationPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }
    if (IsLoadded === true) {
        return (

            InformationPageArr.map((InformationPageArr) => <div>
                <h2 className="title-main">{InformationPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages">
                    {splitDescription(InformationPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper">
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }}></span>
                        </div>
                    )}
                </div>
                <InformationPageContactInfo></InformationPageContactInfo>
                <InformationPageHistory></InformationPageHistory>
                <InformationPageFounderInfo></InformationPageFounderInfo>
            </div>
            )


        )
    }
    return(
        <p>gfdhhhhhhhhhhhhhh</p>
    )
}

export default InformationPage





