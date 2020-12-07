import React, { useEffect } from 'react'
import './styles/leftmenu.css'
import { Link } from 'react-router-dom'

const SubItemsSlideBar = (props) => {



    const subMenuArr = props.arr;
    useEffect(() => {
    })
    const opened = props.open
    if(!opened) return null
    return (
        subMenuArr.map((item) =>  <Link to={item.subitem_link}><li className="menu-sublist__elTitle" key={item.index}>{item.subitem_title}</li></Link>)
    )

}

export default SubItemsSlideBar
