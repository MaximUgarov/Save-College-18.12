import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Context } from '../../../context'
const SubBooksComponent = () => {



    const [ResourcesArr, setResourcesArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url }= useContext(Context)
    
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/resources__book-page`)
            .then(res => {
                const arr = res.data
                setResourcesArr(arr)
                setIsLoadded(true)
                console.log(ResourcesArr)
            })
            .catch(err => console.log(err))
    }, [setResourcesArr])

    if (IsLoadded === true) {
        return (
            <Fragment>
                { ResourcesArr.map((ResourcesArr) => <div className="resources-block">{ResourcesArr.title.rendered}<span className="resources-block-linkText" dangerouslySetInnerHTML={{ __html: ResourcesArr.content.rendered }} /></div>)}
            </Fragment>
        )
    }
    return (
        <Loading />
    )
}
export default SubBooksComponent