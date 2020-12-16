import React, {  useEffect, useState, useContext } from 'react'
import axios from 'axios'
import '../../../components/global/styles/informationPage.css'
import InformationPageContactInfo from './subComponents/informationPageContactInfo'
import InformationPageHistory from './subComponents/informationPageHistory'
import InformationPageFounderInfo from './subComponents/informationPageFounderInfo'
import Loading from '../../global/Loading'
import { Context } from '../../../context'

const InformationPage = () => {


    const [InformationPageArr, setInformationPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/information-page`)
            .then(res => {
                const arr = res.data
                setInformationPageArr(arr)
                setIsLoadded(true)
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
    return (
        <Loading />
    )
}

export default InformationPage





