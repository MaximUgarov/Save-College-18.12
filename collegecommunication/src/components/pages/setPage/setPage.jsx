import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import '../../../components/global/styles/Covid-19.css'
import Loading from '../../global/Loading';
import { renderToString } from 'react-dom';
import { Link } from 'react-router-dom';
const SetPage = () => {


    const [SetPageArr, setSetPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/set-page')
            .then(res => {
                const arr = res.data
                setSetPageArr(arr)
                setIsLoadded(true)
            })
            .catch(err => console.log(err))
    }, [setSetPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

//     const el = SetPageArr.content.rendered
// el.querySelectorAll('a').forEach(a => {
//   let to = a.getAttribute('href');
//   let text = a.innerText;
//   const link = renderToString(<Link to={to}>{text}</Link>);
//   a.replaceWith(link);
// });

    if (IsLoadded === true) {

        return (
            SetPageArr.map((SetPageArr) => <Fragment>
                <h2 className="title-main">{SetPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages center">
                    <div className="content-container-teamplatesPages-wrapp">
                    {splitDescription(SetPageArr.content.rendered).map((span) =>
                        <div className="text-block-wrapper set">
                            <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: span }} />
                        </div>
                    )}
                </div>
                </div>
            </Fragment>
            )

        )
    }
    return (
        <Loading/>
    )
}

export default SetPage
