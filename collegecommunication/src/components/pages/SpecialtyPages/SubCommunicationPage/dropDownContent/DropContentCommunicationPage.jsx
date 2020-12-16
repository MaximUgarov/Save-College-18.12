import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../../../global/Loading';
import { Context } from '../../../../../context'

const DropContentCommunicationPage = () => {

    const [DropContentCommunicationPage, setDropContentCommunicationPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/content-ss-sub`)
            .then(res => {
                const arr = res.data
                setDropContentCommunicationPage(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setDropContentCommunicationPage])
    if (IsLoadded === true) {
        return (
            DropContentCommunicationPage.map((ControlPageArr) => <Fragment>
                <div dangerouslySetInnerHTML={{ __html: ControlPageArr.content.rendered }} className="dropcontent-span table">

                </div>
            </Fragment>)

        )
    }

    return (
      <Loading/>
    )
}
export default DropContentCommunicationPage