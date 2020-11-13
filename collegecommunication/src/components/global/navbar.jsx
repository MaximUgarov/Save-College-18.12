import React, { Component, Fragment } from 'react'
import './styles/navbar.css'

import { Link } from "react-router-dom"

import logo from '../img/logoNavbar.svg'
import covidBtn from '../img/covid_btn.svg'
import PathersBtn from '../img/partner_btn.svg'
import booksBtn from '../img/book_btn.svg'
import accountBtn from '../img/account_btn.svg'
import invalidBtn from '../img/invalid_btn.svg'

export class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <div className="navbar-wrapper">
                    <div className="navbar-info-block-wrapper">
                        <Link to="/">
                        <img src={logo} className="navbar-info-block__logoImg" alt="Колледж связи" />
                        </Link>
                        <div className="navbar-info-block__btns">
                            <img className="covidBtn" src={covidBtn} alt="Информация о covid" />
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
                        
                    <Link to="/info"><li className="navbar__links">Сведения об ОО</li></Link>
                        <li className="navbar__links">Раписание</li>
                        <li className="navbar__links">Студенту</li>
                        <li className="navbar__links">Родителям</li>
                        <li className="navbar__links">Абитуриенту</li>
                        <li className="navbar__links">Дистанционное обучение</li>
                    </menu>
                </div>
            </Fragment>
        )
    }
}

export default Navbar
