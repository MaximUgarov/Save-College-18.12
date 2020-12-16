import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import arrow from '../../../img/dropDownContent.svg'
import '../../../global/styles/DropdownContent.css'
import DropContentElectricianPage from './dropDownContent/DropContentElectricianPage';
import Loading from '../../../global/Loading';
import { Context } from '../../../../context'


const SubElectricianPage = () => {

    const [SubElectricianPageArr, setSubElectricianPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const [IsDropContent1, setIsDropContent1] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/sub-content-ops_page`)
            .then(res => {
                const arr = res.data
                setSubElectricianPageArr(arr)
                setIsLoadded(true)
                console.log(SubElectricianPageArr)
            })
            .catch(err => console.log(err))
    }, [setSubElectricianPageArr])


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
                        {IsDropContent1 ? <DropContentElectricianPage /> : null}
                    </div>
                </div>
                {SubElectricianPageArr.map((SubElectricianPageArr) =>
                    <Fragment>
                        <h2 className="title-main">{SubElectricianPageArr.title.rendered}</h2>
                        <div className="content-container-teamplatesPages">
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: SubElectricianPageArr.content.rendered }} style={{ "text-align": "left" }} />
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
export default SubElectricianPage