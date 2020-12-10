import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../../global/Loading';
import { Context } from '../../../../context'
import parse from 'html-react-parser';
import html from 'html'



const CorruptionActs = () => {

    const [CorruptionActsArr, setCorruptionActsArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)


    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/corruptionActs-page`)
            .then(res => {
                const arr = res.data
                setCorruptionActsArr(arr)
                setIsLoadded(true)
                console.log(CorruptionActsArr)
            })
            .catch(err => console.log(err))
    }, [setCorruptionActsArr])

    // let parser = new DOMParser();
    // let el = parser.parseFromString('<div>' + html + '</div>', 'text/html');

    // el.querySelectorAll('a').forEach((a) => {
    //     a.addEventListener('click', (event) => {
    //         event.preventDefault()
    //         const href = a.getAttribute('href');
    //     })
    // })


    if (IsLoadded === true) {
        return (
            CorruptionActsArr.map((CorruptionActsArr) =>
                <Fragment>
                    <h2 className="title-main">{CorruptionActsArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: CorruptionActsArr.content.rendered }} />
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
export default CorruptionActs