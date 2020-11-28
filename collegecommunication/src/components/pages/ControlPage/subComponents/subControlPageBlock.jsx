import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../../global/Loading';
import { Link } from 'react-router-dom';
import DropdownContent from './DropdownContent';

const SubControlPage = () => {

    const [ControlPageArr, setControlPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/Control-page-sub')
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
                    <div className="card-main main">
                        <div className="card-main-wrapper main">
                            <div className="card-main-text-wrapper main">
                                <h3 className="card-main__title main">{ControlPageArr.title.rendered}</h3>
                                <span className="card-main__text main" dangerouslySetInnerHTML={{ __html: ControlPageArr.content.rendered }} />
                            </div>
                            <Link to="/" className="card-main__btn main">Открыть</Link >
                        </div>
                    </div >
                </Fragment>
            )

        )
    }

    return (
        <Loading />
    )
}
export default SubControlPage