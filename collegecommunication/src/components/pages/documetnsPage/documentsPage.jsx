import React, { Fragment, useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'
import '../../global/styles/documentsPage.css'
import axios from 'axios'
import Loading from '../../global/Loading'



const DocumentsPage = () => {



    const [DocumentsPageArr, setDocumentsPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/documents_page')
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

