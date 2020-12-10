import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const CityProfessionalsPage = () => {

    const [CityProfessionalsPageArr, setCityProfessionalsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/cityprof-page')
            .then(res => {
                const arr = res.data
                setCityProfessionalsPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setCityProfessionalsPageArr])
    if (IsLoadded === true) {
        return (
            CityProfessionalsPageArr.map((CityProfessionalsPageArr) =>
                <Fragment>
                    <h2 className="title-main">{CityProfessionalsPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: CityProfessionalsPageArr.content.rendered }} />
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
export default CityProfessionalsPage