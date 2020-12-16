import React, { Fragment, useEffect, useState, useContext  } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Loading from '../../../../global/Loading';
import { Context } from '../../../../../context'

const DropContentElectricianPage = () => {

    const [DropContentElectricianPage, setDropContentElectricianPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/content-ops-sub`)
            .then(res => {
                const arr = res.data
                setDropContentElectricianPage(arr)
                setIsLoadded(true)
                console.log(DropContentElectricianPage)
            })
            .catch(err => console.log(err))
    }, [setDropContentElectricianPage])
    if (IsLoadded === true) {
        return (
            DropContentElectricianPage.map((ControlPageArr) => <Fragment>
                <div dangerouslySetInnerHTML={{ __html: ControlPageArr.content.rendered }} className="dropcontent-span table">

                </div>
            </Fragment>)

        )
    }

    return (
      <Loading/>
    )
}
export default DropContentElectricianPage