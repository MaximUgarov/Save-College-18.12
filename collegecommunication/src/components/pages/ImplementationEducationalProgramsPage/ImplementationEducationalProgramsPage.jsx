import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
const ImplementationEducationalProgramsPage = () => {


    const [ImplementationEducationalProgramsPageArr, setImplementationEducationalProgramsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/Implementation-page')
            .then(res => {
                const arr = res.data
                setImplementationEducationalProgramsPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setImplementationEducationalProgramsPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }


    if (IsLoadded === true) {

        return (
            ImplementationEducationalProgramsPageArr.map((ImplementationEducationalProgramsPageArr) => <Fragment>
                <h2 className="title-main">{ImplementationEducationalProgramsPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                    {splitDescription(ImplementationEducationalProgramsPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper covid">
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                        </div>
                    )}
                </div>
                </div>
            </Fragment>
            )

        )
    }
    return (
        <Loading/>
    )
}

export default ImplementationEducationalProgramsPage
