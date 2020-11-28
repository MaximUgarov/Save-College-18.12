
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
import Viewer from 'react-viewer';

const AdministrationPage = () => {


    const [AdministrationPageArr, setAdministrationPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/sis_page')
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
                        {splitDescription(AdministrationPageArr.content.rendered).map((span) =>
                            <div className="text-block-wrapper covid">
                                <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                                <img src={AdministrationPageArr.acf.img1.url} alt="" onClick={() => setVisible(true)} className="teamplate-img"/>
                                <img src={AdministrationPageArr.acf.img2.url} alt="" onClick={() => setVisible2(true)} className="teamplate-img"/>
                                <Viewer
                                    visible={visible}
                                    onClose={() => { setVisible(false); }}
                                    images={[{ src: `${AdministrationPageArr.acf.img1.url}`, alt: '' },{ src: `${AdministrationPageArr.acf.img2.url}`, alt: '' }]}
                                    rotatable={false}
                                    showTotal={false}
                                    drag={false}
                                    noImgDetails={true}
                                    noNavbar={true}
                                    
                                />
                                <Viewer
                                    visible={visible2}
                                    onClose={() => { setVisible2(false); }}
                                    images={[{ src: `${AdministrationPageArr.acf.img2.url}`, alt: '' }]}
                                    rotatable={false}
                                    showTotal={false}
                                    drag={false}
                                    noImgDetails={true}
                                    noNavbar={true}
                                    
                                />
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

export default AdministrationPage
