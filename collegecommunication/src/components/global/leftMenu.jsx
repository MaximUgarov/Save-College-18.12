import React, { Component, Fragment, useState } from 'react'
import './styles/leftmenu.css'
import burgerBtn from '../img/burger_btn.svg'
import vkBtn from '../img/vk_btn.svg'
import instBtn from '../img/instagram_btn.svg'
import arrowDown from '../img/arrow_down.svg'
import ItemsSlideBar from './itemsSlideMenu'
import close from '../img/closeburger.svg'

const SlideBar = () => {

    const [OpenMenu, setOpenMenu] = useState(false)


    return (
        <Fragment>
            <div className="slidebar-wrapper">
                <div className="slidebar-content">
                    <div className="burgerBtn-wrapper">
                        <img className="burgerBtn" src={OpenMenu ? close : burgerBtn} alt="слайд бар меню" onClick={() => setOpenMenu(!OpenMenu)} />
                    </div>
                    <div className="social-btns-wrapper">
                        <a href="https://vk.com/vks_it">
                            <img className="vkBtn" src={vkBtn} alt="группа Вконтакте" />
                        </a>
                        <a href="https://www.instagram.com/kolledzhsviazi/">
                            <img className="instBtn" src={instBtn} alt="профиль в инстаграмм" />
                        </a>
                    </div>
                </div>
                <div className={OpenMenu ? "menu-body-wrapper" : "menu-body-wrapper active"}>
                    <div className="menu-list-wrapper">
                           <ItemsSlideBar></ItemsSlideBar>
                    </div>
                </div>
            </div>
        </Fragment >
    )

}

export default SlideBar
