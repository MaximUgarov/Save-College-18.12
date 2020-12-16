import React, { Fragment, useEffect, useState , useContext } from 'react'
import '../../global/styles/documentsPage.css'
import axios from 'axios'
import Loading from '../../global/Loading'
import { Context } from '../../../context'


const DocumentsPage = () => {



    const [DocumentsPageArr, setDocumentsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/documents_page`)
            .then(res => {
                const arr = res.data
                setDocumentsPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setDocumentsPageArr])


if(IsLoadded === true) {
    return (
        DocumentsPageArr.map((DocumentsPageArr) =>
        <Fragment>
            <h2 className="title-main">{DocumentsPageArr.title.rendered}</h2>
            <div className="content-container-teamplatesPages">
                <div className="documents-wrapper">
                    
                        <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: DocumentsPageArr.content.rendered }}></span>
                </div>
            </div>
        </Fragment>
        )

    )
}
return(
  <Loading/>
)
}

export default DocumentsPage

