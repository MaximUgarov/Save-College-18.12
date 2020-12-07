import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
const MassSportsPage = () => {


    const [MassSportsPageArr, setMassSportsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/sport-page')
            .then(res => {
                const arr = res.data
                setMassSportsPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setMassSportsPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }


    if (IsLoadded === true) {

        return (
            MassSportsPageArr.map((MassSportsPageArr) => <Fragment>
                <h2 className="title-main">{MassSportsPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                    {splitDescription(MassSportsPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper covid" style={{"max-width": "1008px"}}>
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

export default MassSportsPage
