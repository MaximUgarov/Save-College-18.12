import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../../global/Loading';
import { Context } from '../../../../context'
import parse from 'html-react-parser';
import html from 'html'



const MethodicalMaterial = () => {

    const [MethodicalMaterialArr, setMethodicalMaterialArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)


    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/methodicalmater-page`)
            .then(res => {
                const arr = res.data
                setMethodicalMaterialArr(arr)
                setIsLoadded(true)
                console.log(MethodicalMaterialArr)
            })
            .catch(err => console.log(err))
    }, [setMethodicalMaterialArr])

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
            MethodicalMaterialArr.map((MethodicalMaterialArr) =>
                <Fragment>
                    <h2 className="title-main">{MethodicalMaterialArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: MethodicalMaterialArr.content.rendered }} />
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
export default MethodicalMaterial