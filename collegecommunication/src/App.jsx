import React, { Component } from 'react';
import './App.css';
import Navbar from './components/global/navbar'
import SlideBar from './components/global/leftMenu'
import Footer from './components/global/footer';
import TeamplateCard from './components/teampleats/teamplateCard'
import './index.css'
import MainPage from './components/pages/mainPage';
import BooksPage from './components/pages/booksPage'
import ReceptionPage from './components/pages/receptionPage/receptionPage'
import Teampleate from './components/teampleats/teampleate'
import InformationPage from './components/pages/informationPage/information'
import { Context } from './context';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import InvalidPage from './components/pages/invalidPage';
import DocumentsPage from './components/pages/documetnsPage/documentsPage';
import EducationPage from './components/pages/educationPage/educationPage';
import EducationStandartPage from './components/pages/educationStandartPage.jsx/educationStandartPage';
import TeachingstaffPage from './components/pages/teachingstaffPage/teachingstaffPage';
import test from '../src/components/test/akkredit.pdf'
import Test from './components/pages/testPage/test';
import MainPageNewsPage from './components/pages/MainPage/MainPageNewsPage';


class App extends Component {
  render() {
    const { history } = this.props
    // 
    return (
      <Context.Provider value={{
        informationPageArr: [{
          Main_PageTitle: "Основные сведения",
          Main_LeftBlockContent: <div className="text-block-subContainer"><span className="text-block-contentText">Полное наименование автономного учреждения: Автономное профессиональное образовательное учреждение Вологодской области "Вологодский колледж связи и информационных технологий".</span><span className="text-block-contentText">Официальное сокращенное наименование: "АПОУ ВО "ВКСиИТ".</span><span className="text-block-contentText">Организационно-правовая форма – учреждение.</span><span className="text-block-contentText">Тип учреждения – автономное учреждение.</span><span className="text-block-contentText">Учреждение в соответствии с реализуемыми образовательными программами по типу является профессиональной образовательной организацией.</span><span className="text-block-contentText">Место нахождения Учреждения: Россия, Вологодская область, г. Вологда.</span><span className="text-block-contentText">Почтовый адрес Учреждения: ул. Первомайская, дом 42, г. Вологда, Российская Федерация, 160011.</span><span className="text-block-title">Режим работы учреждения:</span><span className="text-block-contentText">Понедельник – пятница с 8.00 до 18.30<br />Суббота с 8.00 до 16.00<br />Воскресенье - выходной</span><span className="text-block-title">Режим работы администрации колледжа:</span><span className="text-block-contentText">Понедельник-пятница: с 08.00 до 16.30<br />Перерыв на обед: с 12.30 до 13.00<br />Суббота, воскресенье - выходной<br />Дежурный администратор с 8:00 до 18:30</span><span className="text-block-contentText">Организация образовательного процесса в АПОУ ВО «Вологодский колледж связи и информационных технологий» осуществляется на русском языке.</span></div>,
          Main_RightBlockContent: <div className="text-block-subContainer"><span className="text-block-contentText">Автономное учреждение создано на основании постановления Правительства области "О создании автономного образовательного учреждения Вологодской области среднего профессионального образования "Вологодский колледж связи и информационных технологий" путем изменения типа государственного образовательного учреждения среднего профессионального образования «Вологодский колледж связи и информационных технологий.</span><span className="text-block-contentText">Учреждение создано на основании распоряжения Совета Министров РСФСР от 04.02.1972 № 181-р, приказа Государственного комитета Совета Министров РСФСР по техническому образованию от 01.02.1972 № 30 и приказа Вологодского областного Управления технического образования от 14.02.1972 № 27 «О создании на базе треста «Связьстрой – 3» профессионального училища».</span><span className="text-block-contentText">Приказом Департамента образования Вологодской области от 27.05.2010 № 909 изменены тип, вид и наименование Учреждения на Государственное образовательное учреждение среднего профессионального образования «Вологодский колледж связи и информационных технологий».</span><span className="text-block-contentText">Приказом ДО ВО от 31.07.2015 № 2178 Учреждение переименовано в Автономное профессиональное образовательное учреждение Вологодской области "Вологодский колледж связи и информационных технологий"</span><span className="text-block-contentText">Учреждение не имеет филиалов, представительств.</span></div>,
          ContInfo_PageTitle: "Контактная информация",
          ContInfo_Content: "Найти нас можно в городе Вологда по адресу:/nул. Первомайская 42/nТелефонный код города Вологды 8 (8172)/nКонтактный телефон: +7 (8172) 75-51-33/nФакс: +7 (8172) 75-51-33/nЭлектронный адрес колледжа: contact@vksit.ru",
          History_PageTitle: "История",
          History_LeftBlockContent: `Государственное образовательное учреждение начального профессионального образования "Профессиональное училище №30" было создано на базе треста «Связьстрой-3» по исполнению распоряжения Совета Министров РСФСР от 4 февраля 1972 г. и приказа Государственного комитета Совета Министров РСФСР по профессионально-техническому образованию от 1 февраля 1972 г. № 38./nКомитетом комсомола в 1974/75 учебном году была создана группа «Поиск». Учащиеся вовлекались в движение «Сегодня - отличник учебы, завтра - передовик производства, ударник коммунистического труда». Все учащиеся в тот период участвовали в соцсоревнованиях, посвященных государственным праздникам и памятным датам, активно включались в акции по сбору металлолома, изготовляли наглядные пособия, участвовали в выставках технического творчества, в предметных кружках. Команда училища занимала призовые места в военно-патриотической игре «Орленок»./nНесколько десятков лет в образовательном учреждении работает своя радиостанция RK1QWX, известная своим участием в российских и международных соревнованиях, являющаяся неоднократным победителем областных соревнований по радиоспорту. Участники кружка «Люди науки и техники» занимались сбором материалов и экспонатов для будущего музея связи, который работает в образовательном учреждении с 1987 года./nВ течение 10 лет из стен училища выпускались молодые специалисты получившие следующие профессии: электромонтер линейных сооружений и абонентских устройств радиофикации и сельской телефонной сети; кабельщик-спайщик; монтажник связи по монтажу телефонного оборудования; электромонтер станционного оборудования сельской телефонной связи; электромонтер телефонного оборудования междугородной связи; Это были кадры для предприятий связи треста «Связьстрой-3», расположенных в Вологде, Вологодской, Ярославской, Костромской, Новгородской областях и др. Специальности «Операторы почтово-телеграфной связи», «Телеграфисты» и «Операторы связи» появились в училище позднее./nПри достаточно небольшом возрасте нашего образовательного учреждения учиться, получать профессию к нам приходят новые поколения - дети тех «ребят», что закончили ранее ГПТУ, затем СПТУ-30 (связи), дети наших мастеров и преподавателей./nНевольно убеждаемся в этом, и в памяти возникают строчки Вадима Шефнера:`,
          History_RightBlockContent: "Первым директором ГПТУ (связи) был назначен Иван Александрович Микеров./nПервый завуч - Жирнова Елизавета Александровна, зам. директора по УПР - Кротченко Игорь Ильич, отличники профтехобразования/nВ 1975 году под руководством В.С. Старковой начал свою работу литературный кружок «Яшинская рябинка», деятельность которого посвящена литературному краеведению, сохранению литературных традиций Вологодчины. Члены этого литературного объединения занимались сбором материала для создания музея им. А.Я. Яшина, с этой целью ездили на родину поэта в г. Никольск. Интересны были вечера встреч в форме литературной гостиной с поэтами и писателями вологодской земли./nГоды становления нашего образовательного учреждения были связаны с участием ребят в трудовых вахтах: осенью работали на полях колхозов, трудились на почтамте, принимали активное участие в Ленинских субботниках, занимались благоустройством общежития и построенных мастерских. Первые мастерские были оборудованы в подвалах и на 2 этаже здания училища (слесарные, кабельные, монтажа телефонной аппаратуры). Производственные практика первых учащихся проходила на предприятиях всей территории страны: от Калининграда до Нарьян-Мара и от Петрозаводска до Кавказа./nРуками наших ребят обслуживалась телефонизация «Игр доброй воли», Московская олимпиада - 80. С 1973 года наши выпускники оборудовали новые объекты связи на Вологодчине и сейчас успешно занимаются эксплуатацией этих объектов./nВыпускники, получив профессию в нашем образовательном учреждении, продолжают свое обучение, совершенствуют умения в технике связи, становятся победителями областных и республиканских конкурсов «Лучший по профессии». Многие из них занимают руководящие посты на предприятиях и подразделениях сетей связи. Руководителями большинства почтовых отделений связи ФГУП «Почта России» по Вологодской области в настоящее время являются наши выпускники./nСейчас среди руководителей образовательного учреждения, а также среди мастеров производственного обучения работают наши бывшие выпускники./nНовое время ставит новые задачи. Быстро развивается техника связи.",
          History_subText: `«Чем дальше в будущее входим,
        Тем больше прошлым дорожим,
        И в старом красоту находим, 
        Хоть новому принадлежим».`,
          Founder_PageTitle: "Учредитель",
          Founder_LeftBlockContent: "Учредителем АПОУ ВО «Вологодский колледж связи и информационных технологий» и собственником его имущества является Вологодская область.Функции и полномочия учредителя Учреждения осуществляет Департамент образования Вологодской области./n Адрес места нахождения и юридический адрес: 160012, г. Вологда, ул. Козленская, д. 114.",
          Founder_RightBlockContent: "Телефон: (8172) 23-01-00/nФакс: (8172) 23-01-00, доб. 2075/nАдрес сайта в сети Интернет: https://depobr.gov35.ru//nE-mail: edu@gov35.ru, edu@edu35.ru"
        }],
        documentsPageArr: [
          { documentsPage_title: "Документы" },
          {
            documentsLink: "",
            documentsLink_Title: "Учредительные документы"
          },
          {
            documentsLink: "/#",
            documentsLink_Title: "Госаккредитация"
          },
          {
            documentsLink: "/#",
            documentsLink_Title: "План Финансово-хозяйственной деятельности"
          },
          {
            documentsLink: "/#",
            documentsLink_Title: "Программа развития ВКСиИТ до 2020"
          },
          {
            documentsLink: "/#",
            documentsLink_Title: "Локальные нормативные акты, содержащие нормы, регулирующие образовательные отношения"
          },
          {
            documentsLink: "/#",
            documentsLink_Title: "Самообследование"
          },
          {
            documentsLink: "/#",
            documentsLink_Title: "Прочие документы"
          },
          {
            documentsLink: "/#",
            documentsLink_Title: "Предписания"
          },
          {
            documentsLink: "/#",
            documentsLink_Title: "Профессиональные стандарты"
          },
          {
            documentsLink: "/#",
            documentsLink_Title: "Правила внутреннего трудового распорядка работников"
          }],

        educationPageArr: [
          { educationPage_title: "ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ" },
          {
            educationLink: "/#",
            educationLink_Title: "СРЕДНЕЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ",

          },
          {
            educationLink: "/#",
            educationLink_Title: "ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ"
          },
          {
            educationLink: "/#",
            educationLink_Title: "ИНКЛЮЗИВНОЕ ОБРАЗОВАНИЕ"
          },
          {
            educationLink: "/#",
            educationLink_Title: "ИНФОРМАЦИЯ ОБ ИСПОЛЬЗОВАНИИ ПРИ РЕАЛИЗАЦИИ ОБРАЗОВАТЕЛЬНЫХ ПРОГРАММ ЭЛЕКТРОННОГО ОБУЧЕНИЯ И ДИСТАНЦИОННЫХ ОБРАЗОВАТЕЛЬНЫХ ТЕХНОЛОГИЙ"
          },
          {
            educationLink: "/#",
            educationLink_Title: "РАСПИСАНИЕ ЗВОНКОВ C 01.09.2017"
          },
          {
            educationLink: "/#",
            educationLink_Title: "ГРАФИК УЧЕБНОГО ПРОЦЕССА"
          },
          {
            educationLink: "/#",
            educationLink_Title: "УЧЕБНО-ИССЛЕДОВАТЕЛЬСКАЯ ДЕЯТЕЛЬНОСТЬ"
          },
          {
            educationLink: "/#",
            educationLink_Title: "ЧИСЛЕННОСТЬ ОБУЧАЮЩИХСЯ"
          },
          {
            educationLink: "/#",
            educationLink_Title: "О РЕАЛИЗУЕМЫХ ОСНОВНЫХ ПРОФЕССИОНАЛЬНЫХ ОБРАЗОВАТЕЛЬНЫХ ПРОГРАММАХ"
          }],
        educationStandartPageArr: [
          { educationStandartPage_title: "ФЕДЕРАЛЬНЫЙ ГОСУДАРСТВЕННЫЙ СТАНДАРТ" },
          { educationStandartPage_subTitle: "ПЕРЕЧЕНЬ ФЕДЕРАЛЬНЫХ ГОСУДАРСТВЕННЫХ ОБРАЗОВАТЕЛЬНЫХ СТАНДАРТОВ" },
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "46.02.01 ДОКУМЕНТАЦИОННОЕ ОБЕСПЕЧЕНИЕ УПРАВЛЕНИЯ И АРХИВОВЕДЕНИЕ"
          },
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "11.02.11 СЕТИ СВЯЗИ И СИСТЕМЫ КОММУТАЦИИ"
          },
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "11.02.02 ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ РАДИОЭЛЕКТРОННОЙ ТЕХНИКИ"
          },
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "09.02.02 КОМПЬЮТЕРНЫЕ СЕТИ"
          }
          ,
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "10.02.02 ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ ТЕЛЕКОММУНИКАЦИОННЫХ СИСТЕМ"
          }
          ,
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "11.02.12 ПОЧТОВАЯ СВЯЗЬ"
          }
          ,
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "09.02.03 ПРОГРАММИРОВАНИЕ В КОМПЬЮТЕРНЫХ СИСТЕМАХ"
          }
          ,
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "10.02.04 ОБЕСПЕЧЕНИЕ ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ ТЕЛЕКОММУНИКАЦИОННЫХ СИСТЕМ"
          }
          ,
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "09.02.07 ИНФОРМАЦИОННЫЕ СИСТЕМЫ И ПРОГРАММИРОВАНИЕ"
          }
          ,
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "09.02.06 СЕТЕВОЕ И СИСТЕМНОЕ АДМИНИСТРИРОВАНИЕ"
          }
          ,
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "11.01.05 МОНТАЖНИК СВЯЗИ"
          }
          ,
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "15.01.21 ЭЛЕКТРОМОНТЕР ОХРАННО-ПОЖАРНОЙ СИГНАЛИЗАЦИИ"
          }
          ,
          {
            educationStandartLink: "/#",
            educationStandartLink_Title: "09.01.01 НАЛАДЧИК АППАРАТНОГО И ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ"
          }


        ],

        teachersStaffPageArr: [
          { teachersStaffPage_title: "РУКОВОДСТВО. ПЕДАГОГИЧЕСКИЙ СОСТАВ" },
          {
            teachersStaffLink: test,
            teachersStaffLink_Title: "Администрация колледdsfжа.",

          },
          {
            teachersStaffLink: "/#",
            teachersStaffLink_Title: "Персональный состав пед. работников."
          },
        ]

      }}>

        <div className="App">
          <SlideBar></SlideBar>
          <Navbar></Navbar>
          <div className="content-container">
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/books' component={BooksPage} />
              <Route path='/blind' component={InvalidPage} />
              <Route path='/reception' component={ReceptionPage} />
              <Route path='/info' component={InformationPage} />
              <Route path='/documents' component={DocumentsPage} />
              <Route path='/eduprogramm' component={EducationPage} />
              <Route path='/fgs' component={EducationStandartPage} />
              <Route path='/RPS' component={TeachingstaffPage} />
              <Route path='/test' component={Test} />
              <Route path='/' component={MainPageNewsPage} />
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </Context.Provider>
    );
  }
}

export default withRouter(App);


