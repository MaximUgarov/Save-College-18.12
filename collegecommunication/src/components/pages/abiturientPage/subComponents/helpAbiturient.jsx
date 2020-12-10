import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Context } from '../../../../context'


const HelpAbiturientPage = () => {

    const [AbiturientPageArr, setAbiturientPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/abiturient-page-help`)
            .then(res => {
                const arr = res.data
                setAbiturientPageArr(arr)
                setIsLoadded(true)
                console.log(AbiturientPageArr)
            })
            .catch(err => console.log(err))
    }, [setAbiturientPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }




        return (
            AbiturientPageArr.map((AbiturientPageArr) =>
                <Fragment>
                    <h2 className="title-main">{AbiturientPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                    {splitDescription(AbiturientPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper covid">
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                        </div>
                    )}
                    </div>
                </Fragment>
            )

        )
    

}
export default HelpAbiturientPage