import React, { Component, Fragment, useState, useLocation, useEffect } from 'react'
import './styles/leftmenu.css'
import MobileItemsSlideBar from './itemsMobileNav'
import close from '../img/closeMobileNav.svg'
import { createBrowserHistory } from 'history'
import { useHistory } from 'react-router'
import '../global/styles/MobileNavBlock.css'

import mobileLogoNav from '../img/MobileLogoNav.svg'
import mobileNavBtn1 from '../img/MobileNavBtn1.svg'
import mobileNavBtn2 from '../img/MobileNavBtn2.svg'
import MobileTransitionListmenucomponent from './MobileTransitionListmenucomponent'
import ItemsMobileTransitionListmenucomponent from './ItemsMobileTransitionListmenucomponent'
import { Link } from 'react-router-dom'
import ScheduleWindow from './ScheduleWindow'




const MobileNavBlock = (props) => {

    const [OpenMobileNav, setOpenMobileNav] = useState(false)
    const [Schedule, setSchedule] = useState(false)
    const history = useHistory();

    history.listen((location, action) => {
        setOpenMobileNav(false)
    })


    return (
        <Fragment>
            <div className={OpenMobileNav ? "mobile-nav-block active" : "mobile-nav-block"}>
                <Link to="/"><img src={mobileLogoNav}  /></Link>
                <div className="mobile-nav-btns-wrapper">
                    <img src={mobileNavBtn1} className="mobile-nav-btn__rasp" />
                    {OpenMobileNav ? <img src={close} className="mobile-nav-btn__burger" onClick={() => setOpenMobileNav(!OpenMobileNav)}/> : <img src={mobileNavBtn2} className="mobile-nav-btn__burger" onClick={() => setOpenMobileNav(!OpenMobileNav)}/>}
                </div>
            </div>
            <div className={OpenMobileNav ? "mobile-nav-wrapper-list active" : "mobile-nav-wrapper-list"}><MobileTransitionListmenucomponent /><MobileItemsSlideBar OpenMobileNav={OpenMobileNav}/></div>
            {Schedule ? <ScheduleWindow></ScheduleWindow> : null}
        </Fragment >
    )
}

export default MobileNavBlock
