import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'


const MrPage = (props) => {

    const [MrPageArr, setMrPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/mr-page/${props.match.params.id}`)
            .then(res => {
                const arr = res.data
                setMrPageArr(arr)
                setIsLoadded(true)
                console.log(MrPageArr)
            })
            .catch(err => console.log(err))
    }, [setMrPageArr])
    console.log(MrPageArr)
    if (IsLoadded === true) {
        return (
            <Fragment>
                <h2 className="title-main">{MrPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages">
                    <div className="documents-wrapper">
                        <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: MrPageArr.content.rendered }} />
                    </div>
                </div>
            </Fragment>
        )
    }
    return (
        <Loading />
    )
}
export default MrPage