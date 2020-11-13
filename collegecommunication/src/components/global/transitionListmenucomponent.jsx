import React, { Component, Fragment, useState, useEffect } from 'react'
import './styles/leftmenu.css'
import burgerBtn from '../img/burger_btn.svg'
import vkBtn from '../img/vk_btn.svg'
import instBtn from '../img/instagram_btn.svg'
import arrowDown from '../img/arrow_down.svg'
import { Context } from './context'
import SubMenuArr from './SubitemsSlideMenu'
import { Link } from 'react-router-dom'

const TransitionListmenucomponent = ({ item }) => {

    const [OpenSubItemsMenu, setOpenSubItemsMenu] = useState(false)



    return (
        <Fragment>
           <li className="menu-list__elTitle" onClick={() => setOpenSubItemsMenu(!OpenSubItemsMenu)}><img src={arrowDown} className={OpenSubItemsMenu ? "arrowDonwBtn active" : "arrowDonwBtn"} />{item.item_titel}</li>
            <div className={OpenSubItemsMenu ? "menu-sublist__el active" : "menu-sublist__el"}>
                <SubMenuArr open={OpenSubItemsMenu} arr={item.subitems}></SubMenuArr>
            </div>
        </Fragment>
    )

}

export default TransitionListmenucomponent
