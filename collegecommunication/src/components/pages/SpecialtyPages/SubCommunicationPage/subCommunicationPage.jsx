import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import arrow from '../../../img/dropDownContent.svg'
import '../../../global/styles/DropdownContent.css'
import DropContentCommunicationPage from './dropDownContent/DropContentCommunicationPage';
import Loading from '../../../global/Loading';

const SubCommunicationPage = () => {

    const [SubCommunicationPageArr, setSubCommunicationPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const [IsDropContent1, setIsDropContent1] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/sub-content-ss_page')
            .then(res => {
                const arr = res.data
                setSubCommunicationPageArr(arr)
                setIsLoadded(true)
                console.log(SubCommunicationPageArr)
            })
            .catch(err => console.log(err))
    }, [setSubCommunicationPageArr])


    function splitDescription(content) {
        return content.split('<div class="wp-block-group">')
    }


    if (IsLoadded === true) {
        return (
            SubCommunicationPageArr.map((SubCommunicationPageArr) =>
                <Fragment>
                    <div className="dropdownContent-content">
                        <div className="dropDownContent-wrapper" style={{"min-height": "100px"}} onClick={() => setIsDropContent1(!IsDropContent1)}>
                            <span className="dropDownContent-title">Совет учреждения</span>
                            <img src={arrow} className={IsDropContent1 ? "dropDownContent-arrowBtn active" : "dropDownContent-arrowBtn"} />
                        </div>
                        {IsDropContent1 ? <DropContentCommunicationPage /> : null}
                        <Fragment>
                            <div className="content-container-teamplatesPages" style={{"flex-wrap": "wrap"}}>
                                {splitDescription(SubCommunicationPageArr.content.rendered).map((span) =>
                                    <div className="text-block-wrapper">
                                        <span className="text-block-contentText" style={{ "max-width": "444px" }} dangerouslySetInnerHTML={{ __html: span }}></span>
                                    </div>
                                )}
                            </div>
                        </Fragment>
                        <Link to="/inform_ob_isp" className="teamplete-link">Информация об использовании при реализации образовательных программ электронного обучения и дистанционных образовательных технологий</Link>
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
export default SubCommunicationPage