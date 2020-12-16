
import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
import '../../global/styles/SpecialPages.css'
import SubAdministrationPage from './SubAdministrationPage/subAdministrationPage';
const AdministrationPage = () => {


    const [AdministrationPageArr, setAdministrationPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/sis_page`)
            .then(res => {
                const arr = res.data
                setAdministrationPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setAdministrationPageArr])


    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }



    if (IsLoadded === true) {


        return (
            AdministrationPageArr.map((AdministrationPageArr) => <Fragment>
                <h2 className="title-main">{AdministrationPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                        <div className="text-block-wrapper covid" style={{ "max-width": "1008px" }}>
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: AdministrationPageArr.content.rendered }} style={{ "list-style-type": "decimal" }}></span>
                            <div className="photo-block"><img src={AdministrationPageArr.acf.img1.url} alt="" className="teamplete-photo" /><img src={AdministrationPageArr.acf.img2.url} alt="" className="teamplete-photo" /></div>
                        </div>
                    </div>
                </div>
                <SubAdministrationPage />
            </Fragment>
            )
        )
    }
    return (
        <Loading />
    )
}

export default AdministrationPage









