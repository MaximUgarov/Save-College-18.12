import React, { Component, Fragment, useState } from 'react'
import './styles/navbar.css'

import { Link } from "react-router-dom"
import { useHistory } from 'react-router'

import logo from '../img/logoNavbar.svg'
import covidBtn from '../img/covid_btn.svg'
import PathersBtn from '../img/partner_btn.svg'
import booksBtn from '../img/book_btn.svg'
import accountBtn from '../img/account_btn.svg'
import invalidBtn from '../img/invalid_btn.svg'
import openArrowPopup from '../img/OpenArrowPopup.svg'

const Navbar = () => {

    const [SchedulePopUp, setSchedulePopUp] = useState(false)
    const [PartnersPopUp, setPartnersPopUp] = useState(false)

    const history = useHistory();

    history.listen((location, action) => {
        setSchedulePopUp(false)
        setPartnersPopUp(false)
    })

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
                        <div className="navbar-partners-block-wrapper">
                            <img className="pathersBtn" src={PathersBtn} alt="Наши партнеры" onClick={() => setPartnersPopUp(!PartnersPopUp)}/>
                            <div className={PartnersPopUp ? "schedule-block active" : "schedule-block"}>
                                <a className="schedule-link" href="https://bilet.worldskills.ru">Билет в будущее</a>
                                <a className="schedule-link" href="https://vk.com/rctt35">РЦТТ35</a>
                                <a className="schedule-link" href="https://ssuz.vip.edu35.ru/auth/login-page">БАРС Web-образование</a>
                            </div>
                        </div>
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

                    <li style={{"list-style-type":"none"}}><Link to="/info" className="navbar__links">Сведения об ОО</Link></li>
                    <li className="navbar__links" onClick={() => setSchedulePopUp(!SchedulePopUp)} style={{"list-style-type":"none"}}>Раписание <img src={openArrowPopup} alt="стрелка открытия всплывающего окна" />
                        <div className={SchedulePopUp ? "schedule-block active" : "schedule-block"}>
                            <a className="schedule-link" href="http://rasp.kolledgsvyazi.ru/spo.pdf">1 корпус</a>
                            <a className="schedule-link" href="http://rasp.kolledgsvyazi.ru/npo.pdf">2 корпус</a>
                        </div>
                    </li>
                    <li style={{"list-style-type":"none"}}><Link to="/students" className="navbar__links">Студенту</Link></li>
                    <li style={{"list-style-type":"none"}}><Link to="/roditeli" className="navbar__links">Родителям</Link></li>
                    <li style={{"list-style-type":"none"}}><Link to="/abiturient" className="navbar__links">Абитуриенту</Link></li>
                    <li style={{"list-style-type":"none"}}><a href="http://moodle.kolledgsvyazi.ru:808/" className="navbar__links">Дистанционное обучение</a></li>
                </menu>
            </div>
        </Fragment>
    )

}

export default Navbar
