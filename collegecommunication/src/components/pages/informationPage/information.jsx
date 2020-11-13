import React, { Fragment, useContext } from 'react'
import { Context } from '../../../context'
import '../../../components/global/styles/informationPage.css'
import mapImg from '../../img/map__informationPage.svg'
import tbus_icon from '../../img/tbus_icon.svg'
import bus_icon from '../../img/bus_icon.svg'

const InformationPage = () => {


    const { informationPageArr } = useContext(Context)

    const splitDescription = (content) => {
        return content.split('/n')
    }


    return (

        informationPageArr.map((item) => <div>
            <h2 className="title-main">{item.Main_PageTitle}</h2>
            <div className="content-container-teamplatesPages">
                <div className="text-block-wrapper">
                    <span className="text-block-contentText">{item.Main_LeftBlockContent}</span>
                </div>
                <div className="text-block-wrapper">
                    <span className="text-block-contentText">{item.Main_RightBlockContent}</span>
                </div>
            </div>
            <h2 className="title-main">{item.ContInfo_PageTitle}</h2>
            <div className="content-container-teamplatesPages">
                <div className="text-block-wrapper">
                    {splitDescription(item.ContInfo_Content).map((span) => <span className="text-block-contentText">{span}</span>)}
                    <button className="listofnumbers">Список телефонов</button>
                </div>
                <div className="text-block-wrapper">
                    <a href="https://yandex.ru/maps/org/vologodskiy_kolledzh_svyazi_i_informatsionnykh_tekhnologiy/1769469695/?ll=39.892379%2C59.208341&source=wizbiz_new_text_single&z=18">
                        <img src={mapImg} alt="Сыллка на карту с местонахождением колледжа" />
                    </a>
                    <div className="transport-block">
                        <div className="transport-block-content-wrap"><img src={bus_icon} alt="Картинка автобуса" className="transport-block__img" /><span className="transport-block-span">Автобусы: 6, 37, 40 (остановка улица Зосимовская)</span></div>
                        <div className="transport-block-content-wrap"><img src={bus_icon} alt="Картинка автобуса" className="transport-block__img" /><span className="transport-block-span">Автобусы: 9, 12, 15, 17, 18, 25, 27, 35, 36, 40, 43, 45, 48, 49 (остановка улица Герцена)</span></div>
                        <div className="transport-block-content-wrap"><img src={tbus_icon} alt="Картинка троллейбуса" className="transport-block__img" /><span className="transport-block-span">Троллейбус: 2 (остановка улица Герцена)</span></div>
                    </div>
                </div>
            </div>
            <h2 className="title-main">{item.History_PageTitle}</h2>
            <div className="content-container-teamplatesPages">
                <div className="text-block-wrapper">
                    {splitDescription(item.History_LeftBlockContent).map((span) => <span className="text-block-contentText">{span}</span>)}
                </div>
                <div className="text-block-wrapper">
                    {splitDescription(item.History_RightBlockContent).map((span) => <span className="text-block-contentText">{span}</span>)}
                </div>
            </div>
            <div className="subTextHistory"><span className="subTextHistroySpan">{item.History_subText}</span></div>
            <h2 className="title-main">{item.Founder_PageTitle}</h2>
            <div className="content-container-teamplatesPages">
                <div className="text-block-wrapper">
                    {splitDescription(item.Founder_LeftBlockContent).map((span) => <span className="text-block-contentText">{span}</span>)}
                </div>
                <div className="text-block-wrapper">
                    {splitDescription(item.Founder_RightBlockContent).map((span) => <span className="text-block-contentText">{span}</span>)}
                </div>
            </div>
        </div>
        )


    )
}

export default InformationPage





