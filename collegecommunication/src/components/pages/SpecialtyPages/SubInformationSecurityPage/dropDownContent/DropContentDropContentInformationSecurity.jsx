import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../../../global/Loading';
import { Context } from '../../../../../context'

const DropContentInformationSecurity = () => {

    const [DropContentDocumentationpage, setDropContentDocumentationpage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}//wp-json/wp/v2/content-oid-sub`)
            .then(res => {
                const arr = res.data
                setDropContentDocumentationpage(arr)
                setIsLoadded(true)
                console.log(DropContentDocumentationpage)
            })
            .catch(err => console.log(err))
    }, [setDropContentDocumentationpage])
    if (IsLoadded === true) {
        return (
            DropContentDocumentationpage.map((ControlPageArr) => <Fragment>
                <div dangerouslySetInnerHTML={{ __html: ControlPageArr.content.rendered }} className="dropcontent-span table">

                </div>
            </Fragment>)

        )
    }

    return (
      <Loading/>
    )
}
export default DropContentInformationSecurity