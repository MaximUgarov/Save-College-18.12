import React, { Fragment, useEffect, useState, useContext  } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'

const Antiterrorpage = () => {

    const [AntiterrorpageArr, setAntiterrorpageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/antiterror-page`)
            .then(res => {
                const arr = res.data
                setAntiterrorpageArr(arr)
                setIsLoadded(true)
                console.log(AntiterrorpageArr)
            })
            .catch(err => console.log(err))
    }, [setAntiterrorpageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {
        return (
            AntiterrorpageArr.map((AntiterrorpageArr) =>
                <Fragment>
                    <h2 className="title-main">{AntiterrorpageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                    {splitDescription(AntiterrorpageArr.content.rendered).map((span) =>
                        <div className="documents-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: span }} />
                        </div>
                    )}
                    </div>
                </Fragment>
            )

        )
    }
    return (
        <Loading />
    )
}
export default Antiterrorpage