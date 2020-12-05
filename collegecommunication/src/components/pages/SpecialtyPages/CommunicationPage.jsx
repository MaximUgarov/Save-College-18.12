
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
    const [visible, setVisible] = useState(false);
    const [srcForViewer, setSrcViewer] = useState('');
    const [visible2, setVisible2] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/ss-page')
            .then(res => {
                const arr = res.data
                setCommunicationPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setCommunicationPageArr])

    function openViewer({ currentTarget: el })  {
        console.log(el)
        const src = el.src;
        const alt = el.alt;
        setVisible(true);
        setSrcViewer({ src, alt });
    }

    function splitDescription(content) {
        const el = document.createElement('div');
        el.innerHTML = content;
        Array.from(el.querySelectorAll('.wp-block-image')).forEach(child => {
            const img = child.querySelector('img');
            img.setAttribute('onClick', `${() => openViewer(el)}`);
        })

        return el.innerHTML.split('<div class="wp-block-group__inner-container">')
    }


    if (IsLoadded === true) {
        

        return (
            CommunicationPageArr.map((CommunicationPageArr) => <Fragment>
                <h2 className="title-main">{CommunicationPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages">
                    {splitDescription(CommunicationPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper">
                            <span className="text-block-contentText" style={{"max-width":"444px"}} dangerouslySetInnerHTML={{ __html: span }}></span>
                        </div>
                    )}
                </div>
                <div className="content-container-teamplatesPages center"><SubCommunicationPage/></div>
                <Viewer
                    visible={visible}
                    onClose={() => { setVisible(false); }}
                    images={[srcForViewer]}
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

export default CommunicationPage









