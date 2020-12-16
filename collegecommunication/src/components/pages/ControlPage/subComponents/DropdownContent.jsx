import React, { Fragment, useEffect, useState, useContext  } from 'react'
import axios from 'axios'
import Loading from '../../../global/Loading';
import { Link } from 'react-router-dom';
import arrow from '../../../img/dropDownContent.svg'
import '../../../global/styles/DropdownContent.css'
import DropdownContentBlock from './ContentControl1'
import DropdownContentBlock2 from './ContentControl2'
import DropdownContentBlock3 from './ContentControl3'
import DropdownContentBlock4 from './ContentControl4'
import { Context } from '../../../../context'

const DropdownContent = () => {

    const [ControlPageArr, setControlPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const [IsDropContent1, setIsDropContent1] = useState(false)
    const [IsDropContent2, setIsDropContent2] = useState(false)
    const [IsDropContent3, setIsDropContent3] = useState(false)
    const [IsDropContent4, setIsDropContent4] = useState(false)
    const { url } = useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/Control-page-sub`)
            .then(res => {
                const arr = res.data
                setControlPageArr(arr)
                setIsLoadded(true)
                console.log(ControlPageArr)
            })
            .catch(err => console.log(err))
    }, [setControlPageArr])
    if (IsLoadded === true) {
        return (
            <Fragment>
                <div className="dropdownContent-content">
                    <div className="dropDownContent-wrapper" onClick={() => setIsDropContent1(!IsDropContent1)}>
                        <span className="dropDownContent-title">Совет учреждения</span>
                        <img src={arrow} className="dropDownContent-arrowBtn" />
                    </div>
                    {IsDropContent1 ? <DropdownContentBlock /> : null}
                    <div className="dropDownContent-wrapper" onClick={() => setIsDropContent2(!IsDropContent2)}>
                        <span className="dropDownContent-title">Педагогический совет</span>
                        <img src={arrow} className="dropDownContent-arrowBtn" />
                    </div>
                    {IsDropContent2 ? <DropdownContentBlock2 /> : null}
                    <div className="dropDownContent-wrapper" onClick={() => setIsDropContent3(!IsDropContent3)}>
                        <span className="dropDownContent-title">Наблюдательный совет</span>
                        <img src={arrow} className="dropDownContent-arrowBtn" />
                    </div>
                    {IsDropContent3 ? <DropdownContentBlock3 /> : null}
                    <div className="dropDownContent-wrapper" onClick={() => setIsDropContent4(!IsDropContent4)}>
                        <span className="dropDownContent-title">Совет администрации</span>
                        <img src={arrow} className="dropDownContent-arrowBtn" />
                    </div>
                    {IsDropContent4 ? <DropdownContentBlock4 /> : null}
                </div>
            </Fragment>
        )
    }

    return (
        <Loading />
    )
}
export default DropdownContent