import React, { Fragment, useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import Loading from '../../../global/Loading';

const FormulaSuccessPageMembers = (props) => {


    const [FormulaSuccessPageArr, setFormulaSuccessPageArr] = useState([]);
    const [Isloadded, setIsloadded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/wp-json/wp/v2/formula-page/${props.match.params.id}`)
            .then(res => {
                const arr = res.data
                setFormulaSuccessPageArr(arr)
                setIsloadded(true)
            })
            .catch(err => console.log(err))
    }, [setFormulaSuccessPageArr])

    if (Isloadded === true) {
        console.log(FormulaSuccessPageArr)
        return (
            <Fragment>
                <h2 className="title-main">{FormulaSuccessPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages">
                    <div className="text-block-wrapper">
                        <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: FormulaSuccessPageArr.content.rendered }} />
                    </div>
                    <div className="text-block-wrapper">
                    <img src={FormulaSuccessPageArr.acf.image_member1.url} alt="" style={{"width":"100%", "max-width":"444px", "margin-bottom":"20px"}}/>
                    <img src={FormulaSuccessPageArr.acf.image_member2.url} alt="" style={{"width":"100%", "max-width":"444px"}}/>
                    </div>
                </div>
            </Fragment>
        )
    }
    return (
        <Loading/>
    )
}
export default withRouter(FormulaSuccessPageMembers)