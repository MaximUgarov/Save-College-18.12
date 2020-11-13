import React, { Fragment, useContext } from 'react'
import { Context } from '../../../context'
import { Link } from 'react-router-dom'

const EducationStandartPage = () => {

    const { educationStandartPageArr } = useContext(Context)
    return (
        <Fragment>
            <h2 className="title-main">{educationStandartPageArr[0].educationStandartPage_title}</h2>
            <div className="content-container-teamplatesPages">
                <div className="documents-wrapper">
                    <h4 className="subTitleLink">{educationStandartPageArr[1].educationStandartPage_subTitle}</h4>
                    {educationStandartPageArr.map((item, index) =>
                        <Link to={item.educationStandartLink} key={item.index} className="teamplete-link">{item.educationStandartLink_Title}</Link>)}
                </div>
            </div>
        </Fragment>
    )
} 
 
export default EducationStandartPage