import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context'
import '../../global/styles/documentsPage.css'



const DocumentsPage = () => {



    const { documentsPageArr } = useContext(Context)


    return (
        <Fragment>
            <h2 className="title-main">{documentsPageArr[0].documentsPage_title}</h2>
            <div className="content-container-teamplatesPages">
                <div className="documents-wrapper">
                    {documentsPageArr.map((item, index) =>
                        <Link to={item.documentsLink} key={item.index} className="teamplete-link">{item.documentsLink_Title}</Link>)}
                </div>
            </div>
        </Fragment>

    )
}

export default DocumentsPage

