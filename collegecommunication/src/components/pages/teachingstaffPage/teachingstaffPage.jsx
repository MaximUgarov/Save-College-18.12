import React, { Fragment, useContext } from 'react'
import { Context } from '../../../context'
import { Link } from 'react-router-dom'


const TeachingstaffPage = () => {

    const { teachersStaffPageArr } = useContext(Context)

    return (
       <Fragment>
            <h2 className="title-main">{teachersStaffPageArr[0].teachersStaffPage_title}</h2>
            <div className="content-container-teamplatesPages">
                <div className="documents-wrapper">
                    {teachersStaffPageArr.map((item, index) =>
                       <a href={item.teachersStaffLink} >{item.teachersStaffLink_Title}</a>)}
                </div>
            </div>
       </Fragment>
    )
}


export default TeachingstaffPage

