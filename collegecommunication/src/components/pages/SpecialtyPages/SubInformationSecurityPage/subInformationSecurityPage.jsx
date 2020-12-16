import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import arrow from '../../../img/dropDownContent.svg'
import '../../../global/styles/DropdownContent.css'
import DropContentInformationSecurity from './dropDownContent/DropContentDropContentInformationSecurity';
import Loading from '../../../global/Loading';
import { Context } from '../../../../context'


const SubInformationSecurityPage = () => {

    const [SubInformationSecurityPage, setSubInformationSecurityPage] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const [IsDropContent1, setIsDropContent1] = useState(false)
    const { url } = useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/sub-content-oib_page`)
            .then(res => {
                const arr = res.data
                setSubInformationSecurityPage(arr)
                setIsLoadded(true)
                console.log(SubInformationSecurityPage)
            })
            .catch(err => console.log(err))
    }, [setSubInformationSecurityPage])


    function splitDescription(content) {
        return content.split('<div class="wp-block-group">')
    }


    if (IsLoadded === true) {
        return (
            <Fragment>
                <div className="content-container-teamplatesPages center">
                    <div className="dropdownContent-content" style={{ "margin-top": "50px" }}>
                        <div className="dropDownContent-wrapper" style={{ "min-height": "100px" }} onClick={() => setIsDropContent1(!IsDropContent1)}>
                            <span className="dropDownContent-title">Совет учреждения</span>
                            <img src={arrow} className={IsDropContent1 ? "dropDownContent-arrowBtn active" : "dropDownContent-arrowBtn"} />
                        </div>
                        {IsDropContent1 ? <DropContentInformationSecurity /> : null}
                    </div>
                </div>
                {SubInformationSecurityPage.map((SubInformationSecurityPage) =>
                    <Fragment>
                        <h2 className="title-main">{SubInformationSecurityPage.title.rendered}</h2>
                        <div className="content-container-teamplatesPages">
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: SubInformationSecurityPage.content.rendered }} style={{ "text-align": "left" }} />
                        </div>
                    </Fragment>
                )}
                <div className="content-container-teamplatesPages">
                    <div className="links" style={{ "max-width": "444px", "text-align": "left" }}>
                        <Link to="/inform_ob_isp" className="teamplete-link">Информация об использовании при реализации образовательных программ электронного обучения и дистанционных образовательных технологий</Link><br /><br />
                        <Link to="/nabor" className="teamplete-link">Вернуться Назад</Link>
                    </div>
                </div>

            </Fragment>
        )
    }

    return (
        <Loading />
    )
}
export default SubInformationSecurityPage