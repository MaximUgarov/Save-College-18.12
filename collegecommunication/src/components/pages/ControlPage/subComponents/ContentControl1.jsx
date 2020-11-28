import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../../global/Loading';
import { Link } from 'react-router-dom';
import arrow from '../../../img/dropDownContent.svg'
import '../../../global/styles/DropdownContent.css'

const DropdownContentBlock = () => {

    const [ControlPageArr, setControlPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/Control-content-sub')
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
            ControlPageArr.map((ControlPageArr) => <Fragment>
                <div dangerouslySetInnerHTML={{ __html: ControlPageArr.content.rendered }} className="dropcontent-span">

                </div>
            </Fragment>)

        )
    }

    return (
        <Loading />
    )
}
export default DropdownContentBlock