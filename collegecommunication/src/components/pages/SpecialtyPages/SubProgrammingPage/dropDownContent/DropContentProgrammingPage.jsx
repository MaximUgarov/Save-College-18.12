import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../../../global/Loading';
import { Context } from '../../../../../context'

const DropContentProgrammingPage = () => {

    const [DropContentProgrammingPage, setDropContentProgrammingPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/content-isp-sub`)
            .then(res => {
                const arr = res.data
                setDropContentProgrammingPage(arr)
                setIsLoadded(true)
                console.log(DropContentProgrammingPage)
            })
            .catch(err => console.log(err))
    }, [setDropContentProgrammingPage])
    if (IsLoadded === true) {
        return (
            DropContentProgrammingPage.map((ControlPageArr) => <Fragment>
                <div dangerouslySetInnerHTML={{ __html: ControlPageArr.content.rendered }} className="dropcontent-span table">

                </div>
            </Fragment>)

        )
    }

    return (
      <Loading/>
    )
}
export default DropContentProgrammingPage