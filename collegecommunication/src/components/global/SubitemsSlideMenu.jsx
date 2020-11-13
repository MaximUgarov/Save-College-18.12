import React, { Component, Fragment, useState, useEffect } from 'react'
import './styles/leftmenu.css'
import burgerBtn from '../img/burger_btn.svg'
import vkBtn from '../img/vk_btn.svg'
import instBtn from '../img/instagram_btn.svg'
import arrowDown from '../img/arrow_down.svg'
import { Link } from 'react-router-dom'

const SubItemsSlideBar = (props) => {



    const subMenuArr = props.arr;
    useEffect(() => {
        console.log(subMenuArr)
    })
    const opened = props.open
    if(!opened) return null
    return (
        subMenuArr.map((item) =>  <Link to={item.subitem_link}><li className="menu-sublist__elTitle" key={item.index}>{item.subitem_title}</li></Link>)
    )

}

export default SubItemsSlideBar
