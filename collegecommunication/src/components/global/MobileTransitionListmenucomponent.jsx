import React, { Component, Fragment, useState, useEffect } from 'react'
import './styles/leftmenu.css'
import arrowDown from '../img/mobileNavarrow.svg'
import SubMenuArr from './SubitemsSlideMenu'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MobileTransitionListmenucomponent = ({ item }) => {

    const [OpenSubItemsMenu, setOpenSubItemsMenu] = useState(false)

    const [ParentPageArr, setParentPageArr] = useState([]);
    const [IsLoadded, setIsLoadded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/wp/v2/menu-mobile')
            .then(res => {
                const arr = res.data
                setParentPageArr(arr)
                setIsLoadded(true)
                console.log(ParentPageArr)
            })
            .catch(err => console.log(err))
    }, [setParentPageArr])

    return (
        ParentPageArr.map((ParentPageArr) =>
            <Fragment>
                <li onClick={() => setOpenSubItemsMenu(!OpenSubItemsMenu)} className="mobile-menu-list__el">
                    <Link to={ParentPageArr.acf.mobile_menu_link} className="mobile-menu-list__elTitle">{ParentPageArr.title.rendered}</Link>
                </li>
            </Fragment>)
    )

}

export default MobileTransitionListmenucomponent
