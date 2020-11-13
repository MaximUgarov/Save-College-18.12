import React, { Fragment } from 'react'
import playBtn from '../img/playBtn.svg'
import '../global/styles/invalidPage.css'
const InvalidPage = () => {
    return (
        <Fragment>
            <div className="title-main">ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</div>
            <div className="visuallyimpaired-block">
                <div className="visuallyimpaired-block-btn">ПРОСЛУШАТЬ
                <img src={playBtn} alt="Прослушать аудио информацию для слабовядящих" />
                </div>
                <span className="visuallyimpaired-block-spantitle">АПОУ ВО «Вологодский колледж связи и информационных технологий» осуществляет подготовку по следующим основным программам обучения:</span>
                <span className="visuallyimpaired-block-spanText">ПРОГРАММЫ ПОДГОТОВКИ СПЕЦИАЛИСТОВ СРЕДНЕГО ЗВЕНА<br />
                <span className="visuallyimpaired-block-subSpanText">1. Техническое обслуживание и ремонт радиоэлектронной техники</span>
                <span className="visuallyimpaired-block-subSpanText"> 2. Сети связи и системы коммутации</span>
                <span className="visuallyimpaired-block-subSpanText">3. Почтовая связь</span>
                <span className="visuallyimpaired-block-subSpanText">4. Документационное обеспечение управления и архивоведение</span>
                <span className="visuallyimpaired-block-subSpanText">5. Компьютерные сети</span>
                <span className="visuallyimpaired-block-subSpanText">6. Программирование в компьютерных системах</span>
                <span className="visuallyimpaired-block-subSpanText">7. Информационная безопасность телекоммуникационных систем</span>
                <span className="visuallyimpaired-block-spanText">ПРОГРАММЫ ПОДГОТОВКИ КВАЛИФИЦИРОВАННЫХ РАБОЧИХ</span>
                <span className="visuallyimpaired-block-subSpanText">1. Монтажник оборудования радио и телефонной связи</span>
                <span className="visuallyimpaired-block-subSpanText">2. Монтажник связи</span>
                <span className="visuallyimpaired-block-subSpanText">3. Электромонтер охранно-пожарной сигнализации</span>
                <span className="visuallyimpaired-block-subSpanText">4. Мастер по обработке цифровой информации</span>
                <span className="visuallyimpaired-block-subSpanText">5. Наладчик аппаратного и программного обеспечения</span>
                <span className="visuallyimpaired-block-subSpanText">6. Монтажник радиоэлектронной аппаратуры и приборов</span>
</span>
                <span className="visuallyimpaired-block-spanText">При поступлении необходимо заключение медицинской комиссии
</span>
            </div>
        </Fragment>
    )
}
export default InvalidPage