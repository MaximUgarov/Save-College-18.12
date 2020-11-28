import React, { Component, Fragment, useState, useEffect } from 'react'
import './styles/leftmenu.css'
import { Link } from 'react-router-dom'

const MobileSubItemsSlideBar = (props) => {



    const subMenuArr = props.arr;
    useEffect(() => {
    })
    const opened = props.open
    if(!opened) return null
    return (
        subMenuArr.map((item) =>  <li className="mobile-menu-sublist__elTitle" key={item.index}><Link to={item.subitem_link}>{item.subitem_title}</Link></li>)
    )

}

export default MobileSubItemsSlideBar
