import React, { Fragment, useEffect, useState,useContext } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
import SubDocumentationpage from './SubDocumentationPage/subDocumentationpage';
import Viewer from 'react-viewer';

const Documentationpage = () => {


    const [DocumentationpageArr, setDocumentationpageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    const [Visible, setVisible] = useState(false);
    const [SrcForViewer, setSrcViewer] = useState('');

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/do-page`)
            .then(res => {
                const arr = res.data
                setDocumentationpageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setDocumentationpageArr])


    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    const handleOpenImg = ({ currentTarget: el }) => {
        const src = el.src;
        const alt = el.alt;
        setVisible(true);
        setSrcViewer(src);
    }


    if (IsLoadded === true) {

        return (
            DocumentationpageArr.map((DocumentationpageArr) => <Fragment>
                <h2 className="title-main">{DocumentationpageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                        <div className="text-block-wrapper covid" style={{"max-width":"1008px"}}>
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: DocumentationpageArr.content.rendered }} style={{"list-style-type":"decimal"}}></span>
                            <div className="photo-block">
                                <img src={DocumentationpageArr.acf.photo1.url} alt="" className="teamplete-photo pointer" onClick={(el) => handleOpenImg(el)}/>
                                <img src={DocumentationpageArr.acf.photo2.url} alt="" className="teamplete-photo pointer" onClick={(el) => handleOpenImg(el)}/>
                                </div>
                        </div>
                </div>
                </div>
                <SubDocumentationpage/>
                <Viewer
                    visible={Visible}
                    onClose={() => { setVisible(false); }}
                    images={[{ src: `${SrcForViewer}`, alt: 'Фото Специалистов' }]}
                    rotatable={false}
                    showTotal={false}
                    drag={false}
                    noImgDetails={true}
                    noNavbar={true}
                />
            </Fragment>
            )

        )
    }
    return (
        <Loading/>
    )
}

export default Documentationpage
