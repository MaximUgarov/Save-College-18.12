import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
import Viewer from 'react-viewer';

const Covid19Page = () => {


    const [Covid19PageArr, setCovid19PageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/Covid19_page`)
            .then(res => {
                const arr = res.data
                setCovid19PageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setCovid19PageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }


    if (IsLoadded === true) {

        return (
            Covid19PageArr.map((Covid19PageArr) => <Fragment>
                <h2 className="title-main">{Covid19PageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                        {splitDescription(Covid19PageArr.content.rendered).map((span) =>
                            <div className="text-block-wrapper covid">
                                <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                            </div>
                        )}
                        <img src={Covid19PageArr.acf.photo.url} alt="" className="teapmleate-photo" onClick={() => setVisible(true)} />
                    </div>
                </div>
                <Viewer
                    visible={visible}
                    onClose={() => { setVisible(false); }}
                    images={[{ src: `${Covid19PageArr.acf.photo.url}`, alt: 'Информация о Covid' }]}
                />
            </Fragment>
            )

        )
    }
    return (
        <Loading />
    )
}

export default Covid19Page
