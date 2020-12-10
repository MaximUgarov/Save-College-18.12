import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import HelpAbiturientPage from './subComponents/helpAbiturient';
import { Context } from '../../../context'


const AbiturientPage = () => {

    const [AbiturientPageArr, setAbiturientPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/Abiturient-page`)
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



    if (IsLoadded === true) {
        return (
            <Fragment>
            {AbiturientPageArr.map((AbiturientPageArr) =>
                <Fragment>
                    <h2 className="title-main">{AbiturientPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                    {splitDescription(AbiturientPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper covid" style={{"max-width": "700px"}}>
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                        </div>
                    )}
                </div>
                    </div>
                    <div className="content-container-teamplatesPages grid"><img src={AbiturientPageArr.acf.photo.url} className="teapleate-photo"/>
                        <img src={AbiturientPageArr.acf.photo_two.url} className="teapleate-photo"/><div dangerouslySetInnerHTML={{__html: AbiturientPageArr.acf.video}}></div><div dangerouslySetInnerHTML={{__html: AbiturientPageArr.acf.video_two}}></div></div>
                </Fragment>
            )}
            <HelpAbiturientPage></HelpAbiturientPage>
            </Fragment>

        )
    }
    return (
        <Loading />
    )
}
export default AbiturientPage