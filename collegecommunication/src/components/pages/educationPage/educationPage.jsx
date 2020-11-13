import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context'
import '../../global/styles/documentsPage.css'



const EducationPage = () => {



    const { educationPageArr } = useContext(Context)


    return (
        <Fragment>
            <h2 className="title-main">{educationPageArr[0].educationPage_title}</h2>
            <div className="content-container-teamplatesPages">
                <div className="documents-wrapper">
                    {educationPageArr.map((item, index) =>
                        <Link to={item.educationLink} key={item.index} className="teamplete-link">{item.educationLink_Title}</Link>)}
                </div>
            </div>
        </Fragment>

    )
}

export default EducationPage

