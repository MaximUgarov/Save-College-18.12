import React, { Fragment, useState, useEffect } from 'react'
import './styles/leftmenu.css'

import arrowDown from '../img/mobileNavarrow.svg'
import arrowDownW from '../img/arrow_down.svg'
import { Context } from './context'
import MobileSubItemsSlideBar from './OpenedMeniItems'
import { Link } from 'react-router-dom'

const ItemsMobileTransitionListmenucomponent = ({ item }) => {

    const [OpenSubItemsMenu, setOpenSubItemsMenu] = useState(false)

console.log(item)

    return (
        <Fragment>
            <div className={OpenSubItemsMenu ? "mobile-menu-list__el active" : "mobile-menu-list__el"}>
           <li className={OpenSubItemsMenu ? "mobile-menu-list__elTitle active" : "mobile-menu-list__elTitle" } onClick={() => setOpenSubItemsMenu(!OpenSubItemsMenu)}>
           {OpenSubItemsMenu ? <img src={arrowDownW} className="arrowDonwBtn__mobileNav active" /> : null}{item.item_titel}{OpenSubItemsMenu ? null : <img src={arrowDown} className="arrowDonwBtn__mobileNav" />}</li>
            <div className={OpenSubItemsMenu ? "mobile-menu-sublist__el active" : "mobile-menu-sublist__el"}>
                <MobileSubItemsSlideBar open={OpenSubItemsMenu} arr={item.subitems}></MobileSubItemsSlideBar>
            </div>
            </div>
        </Fragment>
    )

}

export default ItemsMobileTransitionListmenucomponent
