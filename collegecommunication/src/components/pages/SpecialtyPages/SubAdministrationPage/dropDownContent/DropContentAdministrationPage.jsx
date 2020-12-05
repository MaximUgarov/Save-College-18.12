import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Loading from '../../../../global/Loading';
// import arrow from '../../../img/dropDownContent.svg'
// import '../../../../global/styles/DropdownContent.css'

const DropContentAdministrationPage = () => {

    const [DropContentAdministrationPage, setDropContentAdministrationPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/content-sis-sub')
            .then(res => {
                const arr = res.data
                setDropContentAdministrationPage(arr)
                setIsLoadded(true)
                console.log(DropContentAdministrationPage)
            })
            .catch(err => console.log(err))
    }, [setDropContentAdministrationPage])
    if (IsLoadded === true) {
        return (
            DropContentAdministrationPage.map((ControlPageArr) => <Fragment>
                <div dangerouslySetInnerHTML={{ __html: ControlPageArr.content.rendered }} className="dropcontent-span table">

                </div>
            </Fragment>)

        )
    }

    return (
      <Loading/>
    )
}
export default DropContentAdministrationPage