import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import SubControlPage from './subComponents/subControlPageBlock'
import DropdownContent from './subComponents/DropdownContent';
import ControlPageintelligence from './ControlPageintelligence';
import { Context } from '../../../context'

const ControlPage = () => {

    const [ControlPageArr, setControlPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/Control-page`)
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
            ControlPageArr.map((ControlPageArr) =>
                <Fragment>
                    <h2 className="title-main">{ControlPageArr.title.rendered}</h2>
                    <div className="news-container">
                        <div className="news-grid-wrapper">
                            <SubControlPage></SubControlPage>
                            <DropdownContent></DropdownContent>
                        </div>
                    </div>
                    <ControlPageintelligence></ControlPageintelligence>

                </Fragment>
            )

        )
    }
    return (
        <Loading />
    )
}
export default ControlPage