import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
const SizePage = () => {

    const [SizePageArr, setSizePageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/size-page`)
            .then(res => {
                const arr = res.data
                setSizePageArr(arr)
                setIsLoadded(true)
                console.log(SizePageArr)
            })
            .catch(err => console.log(err))
    }, [setSizePageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {
        return (
            SizePageArr.map((SizePageArr) =>
                <Fragment>
                    <h2 className="title-main">{SizePageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages"> 
                        <div style={{"margin-top": "50px"}}>
                            {splitDescription(SizePageArr.content.rendered).map((span) =>
                                    <span className="text-block-contentText"dangerouslySetInnerHTML={{ __html: span }} />
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
export default SizePage