import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';
import { Link } from 'react-router-dom';
import { Context } from '../../../context'

const FormulaSuccessPage = () => {

    const [FormulaSuccessPageArr, setFormulaSuccessPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)
    const { url } = useContext(Context)
    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/formula-page`)
            .then(res => {
                const arr = res.data
                setFormulaSuccessPageArr(arr)
                setIsLoadded(true)
                console.log(FormulaSuccessPageArr)
            })
            .catch(err => console.log(err))
    }, [setFormulaSuccessPageArr])
    if (IsLoadded === true) {
        return (
            <Fragment>
                <h2 className="title-main">Региональный проект ФОРМУЛА УСПЕХА</h2>
                <div className="content-container-teamplatesPages">
                    <div className="documents-wrapper">
                        {FormulaSuccessPageArr.map((FormulaSuccessPageArr) =>
                            <Link to={`/formula_uspehaMember/${FormulaSuccessPageArr.id}`} className="teamplete-link" dangerouslySetInnerHTML={{ __html: FormulaSuccessPageArr.title.rendered }} />
                        )}
                    </div>
                </div>
            </Fragment>



        )
    }
    return (
        <Loading />
    )
}
export default FormulaSuccessPage