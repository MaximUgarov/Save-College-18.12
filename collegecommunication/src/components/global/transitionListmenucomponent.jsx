import React, { Fragment, useState } from 'react'
import './styles/leftmenu.css'
import arrowDown from '../img/arrow_down.svg'
import SubMenuArr from './SubitemsSlideMenu'


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
