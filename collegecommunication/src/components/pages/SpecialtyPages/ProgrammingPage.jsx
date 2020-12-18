
import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
import '../../global/styles/SpecialPages.css'
import SubProgrammingPage from './SubProgrammingPage/subProgrammingPage';
import Viewer from 'react-viewer';
const ProgrammingPage = () => {


    const [ProgrammingPageArr, setProgrammingPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)
    const [Visible, setVisible] = useState(false);
    const [SrcForViewer, setSrcViewer] = useState('');

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/isp_page`)
            .then(res => {
                const arr = res.data
                setProgrammingPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setProgrammingPageArr])


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
            ProgrammingPageArr.map((ProgrammingPageArr) => <Fragment>
                <h2 className="title-main">{ProgrammingPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                        <div className="text-block-wrapper covid" style={{ "max-width": "1008px" }}>
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: ProgrammingPageArr.content.rendered }} style={{ "list-style-type": "decimal" }}></span>
                            <div className="photo-block">
                                <img src={ProgrammingPageArr.acf.img1.url} alt="" className="teamplete-photo pointer" onClick={(el) => handleOpenImg(el)} />
                                <img src={ProgrammingPageArr.acf.img2.url} alt="" className="teamplete-photo pointer" onClick={(el) => handleOpenImg(el)} />
                            </div>
                        </div>
                    </div>
                </div>
                <SubProgrammingPage />
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
        <Loading />
    )
}

export default ProgrammingPage









