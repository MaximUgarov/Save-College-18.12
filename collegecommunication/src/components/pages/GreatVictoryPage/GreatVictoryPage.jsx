import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const GreatVictoryPage = () => {

    const [GreatVictoryPageArr, setGreatVictoryPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/vov-page')
            .then(res => {
                const arr = res.data
                setGreatVictoryPageArr(arr)
                setIsLoadded(true)
                console.log(GreatVictoryPageArr)
            })
            .catch(err => console.log(err))
    }, [setGreatVictoryPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {

        return (
            GreatVictoryPageArr.map((GreatVictoryPageArr) =>
                <Fragment>
                    <h2 className="title-main">{GreatVictoryPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="text-block-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: GreatVictoryPageArr.content.rendered }} />
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
export default GreatVictoryPage