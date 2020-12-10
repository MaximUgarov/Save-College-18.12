import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import arrow from '../../../img/dropDownContent.svg'
import '../../../global/styles/DropdownContent.css'
import DropContentDocumentationpage from './dropDownContent/DropContentDocumentationpage';
import Loading from '../../../global/Loading';
import { BrowserRouter } from 'react-router-dom'


const SubDocumentationpage = () => {

    const [SubDocumentationpageArr, setSubDocumentationpageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const [IsDropContent1, setIsDropContent1] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/sub-content-do_page')
            .then(res => {
                const arr = res.data
                setSubDocumentationpageArr(arr)
                setIsLoadded(true)
                console.log(SubDocumentationpageArr)
            })
            .catch(err => console.log(err))
    }, [setSubDocumentationpageArr])


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
                        {IsDropContent1 ? <DropContentDocumentationpage /> : null}
                    </div>
                </div>
                {SubDocumentationpageArr.map((SubDocumentationpageArr) =>
                    <Fragment>
                        <h2 className="title-main">{SubDocumentationpageArr.title.rendered}</h2>
                        <div className="content-container-teamplatesPages">
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: SubDocumentationpageArr.content.rendered }} style={{ "text-align": "left" }} />
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
export default SubDocumentationpage