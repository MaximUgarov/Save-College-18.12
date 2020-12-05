import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Loading from '../../../../global/Loading';
// import arrow from '../../../img/dropDownContent.svg'
// import '../../../../global/styles/DropdownContent.css'

const DropContentCommunicationPage = () => {

    const [DropContentCommunicationPage, setDropContentCommunicationPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/content-ss-sub')
            .then(res => {
                const arr = res.data
                setDropContentCommunicationPage(arr)
                setIsLoadded(true)
                console.log(DropContentCommunicationPage)
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