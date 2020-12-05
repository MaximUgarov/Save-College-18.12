import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import arrow from '../../../img/dropDownContent.svg'
import '../../../global/styles/DropdownContent.css'
import DropContentAdministrationPage from './dropDownContent/DropContentAdministrationPage';
import Loading from '../../../global/Loading';

const SubAdministrationPage = () => {

    const [SubAdministrationPageArr, setSubAdministrationPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const [IsDropContent1, setIsDropContent1] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/sub-content-sis_page')
            .then(res => {
                const arr = res.data
                setSubAdministrationPageArr(arr)
                setIsLoadded(true)
                console.log(SubAdministrationPageArr)
            })
            .catch(err => console.log(err))
    }, [setSubAdministrationPageArr])


    function splitDescription(content) {
        return content.split('<div class="wp-block-group">')
    }


    if (IsLoadded === true) {
        return (
            SubAdministrationPageArr.map((SubAdministrationPageArr) =>
                <Fragment>
                    <div className="dropdownContent-content">
                        <div className="dropDownContent-wrapper" style={{"min-height": "100px"}} onClick={() => setIsDropContent1(!IsDropContent1)}>
                            <span className="dropDownContent-title">Совет учреждения</span>
                            <img src={arrow} className={IsDropContent1 ? "dropDownContent-arrowBtn active" : "dropDownContent-arrowBtn"} />
                        </div>
                        {IsDropContent1 ? <DropContentAdministrationPage /> : null}
                        <Fragment>
                            <div className="content-container-teamplatesPages" style={{"flex-wrap": "wrap"}}>
                                {splitDescription(SubAdministrationPageArr.content.rendered).map((span) =>
                                    <div className="text-block-wrapper">
                                        <span className="text-block-contentText" style={{ "max-width": "444px" }} dangerouslySetInnerHTML={{ __html: span }}></span>
                                    </div>
                                )}
                            </div>
                        </Fragment>
                        <Link to={SubAdministrationPageArr.acf.link_to_federal} className="teamplete-link">Информация об использовании при реализации образовательных программ электронного обучения и дистанционных образовательных технологий</Link>
                        <Link to="/nabor" className="teamplete-link">Вернуться к списку общеобразовательных программ</Link>
                    </div>
                </Fragment>
            )
        )
    }

    return (
        <Loading />
    )
}
export default SubAdministrationPage