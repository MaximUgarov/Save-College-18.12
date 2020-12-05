import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../global/Loading';


const AccountingStatementPage = () => {

    const [AccountingStatementPageArr, setAccountingStatementPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/statement-page')
            .then(res => {
                const arr = res.data
                setAccountingStatementPageArr(arr)
                setIsLoadded(true)
                console.log(AccountingStatementPageArr)
            })
            .catch(err => console.log(err))
    }, [setAccountingStatementPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    if (IsLoadded === true) {

        return (
            AccountingStatementPageArr.map((AccountingStatementPageArr) =>
                <Fragment>
                    <h2 className="title-main">{AccountingStatementPageArr.title.rendered}</h2>
                    <div className="content-container-teamplatesPages">
                    {splitDescription(AccountingStatementPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper">
                            <span className="teamplete-link" dangerouslySetInnerHTML={{ __html: span }}></span>
                        </div>
                    )}
                    </div>
                </Fragment>
            )
        )
    }
    return (
        <Loading/>
    )
}
export default AccountingStatementPage