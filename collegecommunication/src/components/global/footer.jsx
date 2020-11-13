import React, { Component, Fragment } from 'react'
import '../global/styles/footer.css'
import logoCodovstvo from '../img/logo_codovstvo.svg'
import logoCollege from '../img/logo_vksiit.svg'


export class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footer-wrapper">
                    <div className="footer-info-grid">
                        <div className="footer-info-block">
                            <h3 className="footer-info__title">Контакты</h3>
                            <span className="footer-info__text">E-mail: contact@vksit.ru </span>
                            <span className="footer-info__text">Телефон: +7 (8172) 75-51-33</span>
                            <span className="footer-info__text">Адрес: 160011 г.Вологда, ул.Первомайская, д. 42</span>
                            <span className="footer-info__text">© 2014 «АПОУ Вологодский колледж связи»</span>
                        </div>
                        <div className="footer-info-block">
                            <h3 className="footer-info__title">Партнеры</h3>
                            <a href="https://vk.com/rctt35" className="footer-info__text">РЦТТ35</a>
                            <a href="https://ssuz.vip.edu35.ru/auth/login-page" className="footer-info__text">БАРС Web-образование</a>
                            <a href="https://bilet.worldskills.ru/" className="footer-info__text">Worldskills: Билет в будущее</a>
                        </div>
                    </div>
                    <div className="footer-links-block">
                        <a href="#">
                            <img src={logoCollege} className="College" alt="Колледж связи и информационных техногологий" />
                        </a>
                        <a href="https://codovstvo.ru">
                            <img src={logoCodovstvo} className="codovsto" alt="Веб студия Кодовство" />
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Footer
