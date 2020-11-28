import React, { Component, Fragment } from 'react'
import '../global/styles/footer.css'
import footer_VkBtn from '../img/Footer_VkBtn.svg'
import footer_instaBtn from '../img/Footer_instaBtn.svg'
import footer_CodovstvoBtn from '../img/Footer_CodovstvoBtn.svg'


export class MobileFooter extends Component {
    render() {
        return (
            <Fragment>
                <div className="footer-wrapper">
                    <div className="mobile-footer-wrapper">
                        <h3 className="mobile-footer__title">вологодский колледж связи и информационных технологий</h3>
                        <div className="footer__btnsBlock">
                            <div>
                                <a href="https://www.instagram.com/kolledzhsviazi/"><img src={footer_instaBtn} className="footer_btn" /></a>
                                <a href="https://vk.com/vks_it"><img src={footer_VkBtn} className="footer_btn" /></a>
                            </div>
                            <a href="https://codovstvo.ru"><img src={footer_CodovstvoBtn} className="footer_btn" /></a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MobileFooter
