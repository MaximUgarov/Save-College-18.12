import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../../../global/Loading';
import { Context } from '../../../../../context'

const DropContentAdministrationPage = () => {

    const [DropContentAdministrationPage, setDropContentAdministrationPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/content-sis-sub`)
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