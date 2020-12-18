import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import mapImg from '../../../img/map__informationPage.svg'
import tbus_icon from '../../../img/tbus_icon.svg'
import bus_icon from '../../../img/bus_icon.svg'
import { Context } from '../../../../context'

const InformationPageContactInfo = () => {

    const [InformationPageArr, setInformationPageArr] = useState([]);
    const { url } = useContext(Context)

    useEffect(() => {
        axios.get(`${url}/wp-json/wp/v2/information-page-con`)
            .then(res => {
                const arr = res.data
                setInformationPageArr(arr)
                console.log(InformationPageArr)
            })
            .catch(err => console.log(err))
    }, [setInformationPageArr])

    function splitDescription(content) {
        return content.split('<div class="wp-block-group__inner-container">')
    }

    return (

        InformationPageArr.map((InformationPageArr) =>
            <Fragment>
                <h2 className="title-main">{InformationPageArr.title.rendered}</h2>
                <div className="content-container-teamplatesPages">
                    <div className="text-block-wrapper">
                        <span className="text-block-contentText" dangerouslySetInnerHTML={{ __html: InformationPageArr.content.rendered }} />
                        <a className="listofnumbers" href={InformationPageArr.acf.link} target="_blank">Список телефонов</a>
                    </div>
                    <div className="text-block-wrapper">
                        <a target="_blank" href="https://yandex.ru/maps/org/vologodskiy_kolledzh_svyazi_i_informatsionnykh_tekhnologiy/1769469695/?ll=39.892379%2C59.208341&source=wizbiz_new_text_single&z=18">
                            <img src={mapImg} alt="Сыллка на карту с местонахождением колледжа" className="map-informationpage" />
                        </a>
                        <div className="transport-block">
                            <div className="transport-block-content-wrap"><img src={bus_icon} alt="Картинка автобуса" className="transport-block__img" /><span className="transport-block-span">Автобусы: 6, 37, 40 (остановка улица Зосимовская)</span></div>
                            <div className="transport-block-content-wrap"><img src={bus_icon} alt="Картинка автобуса" className="transport-block__img" /><span className="transport-block-span">Автобусы: 9, 12, 15, 17, 18, 25, 27, 35, 36, 40, 43, 45, 48, 49 (остановка улица Герцена)</span></div>
                            <div className="transport-block-content-wrap"><img src={tbus_icon} alt="Картинка троллейбуса" className="transport-block__img" /><span className="transport-block-span">Троллейбус: 2 (остановка улица Герцена)</span></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

    )
}
export default InformationPageContactInfo