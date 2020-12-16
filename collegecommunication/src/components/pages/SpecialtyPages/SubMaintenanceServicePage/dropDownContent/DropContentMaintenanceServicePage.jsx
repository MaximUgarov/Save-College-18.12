import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../../../global/Loading';
import { Context } from '../../../../../context'

const DropContentMaintenanceServicePage = () => {

    const [DropContentMaintenanceServicePage, setDropContentMaintenanceServicePage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/content-to-sub`)
            .then(res => {
                const arr = res.data
                setDropContentMaintenanceServicePage(arr)
                setIsLoadded(true)
                console.log(DropContentMaintenanceServicePage)
            })
            .catch(err => console.log(err))
    }, [setDropContentMaintenanceServicePage])
    if (IsLoadded === true) {
        return (
            DropContentMaintenanceServicePage.map((ControlPageArr) => <Fragment>
                <div dangerouslySetInnerHTML={{ __html: ControlPageArr.content.rendered }} className="dropcontent-span table">

                </div>
            </Fragment>)

        )
    }

    return (
      <Loading/>
    )
}
export default DropContentMaintenanceServicePage