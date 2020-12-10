
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
import Viewer from 'react-viewer';
import '../../global/styles/SpecialPages.css'
import SubCommunicationPage from './SubCommunicationPage/subCommunicationPage';
const CommunicationPage = () => {


    const [CommunicationPageArr, setCommunicationPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/ss-page')
            .then(res => {
                const arr = res.data
                setCommunicationPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setCommunicationPageArr])



    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }



    if (IsLoadded === true) {


        return (
            CommunicationPageArr.map((CommunicationPageArr) => <Fragment>
                <h2 className="title-main">{CommunicationPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                        <div className="text-block-wrapper covid" style={{ "max-width": "1008px" }}>
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: CommunicationPageArr.content.rendered }} style={{ "list-style-type": "decimal" }}></span>
                            <div className="photo-block"><img src={CommunicationPageArr.acf.img1.url} alt="" className="teamplete-photo" /><img src={CommunicationPageArr.acf.img2.url} alt="" className="teamplete-photo" /></div>
                        </div>
                    </div>
                </div>
                <SubCommunicationPage />
            </Fragment>
            )

        )
    }
    return (
        <Loading />
    )
}

export default CommunicationPage









