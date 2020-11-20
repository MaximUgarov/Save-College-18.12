import React, { Component, Fragment, useState } from 'react'
import './styles/navbar.css'

import { Link } from "react-router-dom"

import logo from '../img/logoNavbar.svg'
import covidBtn from '../img/covid_btn.svg'
import PathersBtn from '../img/partner_btn.svg'
import booksBtn from '../img/book_btn.svg'
import accountBtn from '../img/account_btn.svg'
import invalidBtn from '../img/invalid_btn.svg'
import openArrowPopup from '../img/OpenArrowPopup.svg'

const Navbar = () => {

    const [SchedulePopUp, setSchedulePopUp] = useState(false)

    return (
        <Fragment>
            <div className="navbar-wrapper">
                <div className="navbar-info-block-wrapper">
                    <Link to="/">
                        <img src={logo} className="navbar-info-block__logoImg" alt="Колледж связи" />
                    </Link>
                    <div className="navbar-info-block__btns">
                        <Link to='/COVID-19'>
                            <img className="covidBtn" src={covidBtn} alt="Информация о covid" />
                        </Link>
                        <img className="pathersBtn" src={PathersBtn} alt="Наши партнеры" />
                        <Link to='/books'>
                            <img className="booksBtn" src={booksBtn} alt="Книги" />
                        </Link>
                        <img className="accountBtn" src={accountBtn} alt="Аккаунт" />
                        <Link to='/blind'>
                            <img className="invalidBtn" src={invalidBtn} alt="Версия дял слабовидящих" />
                        </Link>
                    </div>
                </div>
                <menu className="navbar-links-wrapper">

                    <li><Link to="/info" className="navbar__links">Сведения об ОО</Link></li>
                    <li className="navbar__links" onClick={() => setSchedulePopUp(!SchedulePopUp)}>Раписание <img src={openArrowPopup} alt="стрелка открытия всплывающего окна" /><div className={SchedulePopUp ? "schedule-block active" : "schedule-block"}><a className="schedule-link" href="http://rasp.kolledgsvyazi.ru/spo.pdf">1 корпус</a><a className="schedule-link" href="http://rasp.kolledgsvyazi.ru/npo.pdf">2 корпус</a></div></li>
                    <li><Link to="/students" className="navbar__links">Студенту</Link></li>
                    <li><Link to="/roditeli" className="navbar__links">Родителям</Link></li>
                    <li><Link to="/abiturient" className="navbar__links">Абитуриенту</Link></li>
                    <li><a href="http://moodle.kolledgsvyazi.ru:808/" className="navbar__links">Дистанционное обучение</a></li>
                </menu>
            </div>
        </Fragment>
    )

}

export default Navbar
