import React, { Fragment, useEffect, useState } from 'react'
import playBtn from '../img/playBtn.svg'
import axios from 'axios'
import '../global/styles/invalidPage.css'
import Loading from '../global/Loading';
const InvalidPage = () => {


    const [InvalidPageArr, setInvalidPageArr] = useState([]);
    const [Isloadded, setIsloadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/invalid-page')
            .then(res => {
                const arr = res.data
                setInvalidPageArr(arr)
                setIsloadded(true)
                console.log(InvalidPageArr)
            })
            .catch(err => console.log(err))
    }, [setInvalidPageArr])

    console.log(Isloadded)



    if (Isloadded === true) {

        return (
            InvalidPageArr.map((InvalidPageArr) =>
                <Fragment>
                    <div className="title-main">{InvalidPageArr.title.rendered}</div>
                    <div className="visuallyimpaired-block">
                        <div className="visuallyimpaired-block-btn">ПРОСЛУШАТЬ
            <img src={playBtn} alt="Прослушать аудио информацию для слабовядящих" />
                        </div>
                            <span className="visuallyimpaired-block-subSpanText" dangerouslySetInnerHTML={{ __html: InvalidPageArr.content.rendered }} />
                    </div>
                </Fragment>)

        )
    }
    return (
        <Loading />
    )
}
export default InvalidPage