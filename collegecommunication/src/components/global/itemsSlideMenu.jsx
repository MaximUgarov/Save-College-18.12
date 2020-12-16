import React, { useState } from 'react'
import './styles/leftmenu.css'
import TransitionListmenucomponent from './transitionListmenucomponent'


const ItemsSlideBar = () => {

    const menuArr = [{
        item_titel: 'Сведения об ОО',
        item_link: "#",
        subitems: [{
            subitem_title: "Основные сведения",
            subitem_link: "/info"
        }, {
            subitem_title: "Структура и органы управления",
            subitem_link: "/direction"
        }, {
            subitem_title: "Документы",
            subitem_link: "/documents"
        }, {
            subitem_title: "Образование",
            subitem_link: "/eduprogramm"
        },
        {
            subitem_title: "Образовательные стандарты",
            subitem_link: "/fgs"
        }
            , {
            subitem_title: "Руководство. Педагогический состав",
            subitem_link: "/RPS"
        }
            , {
            subitem_title: "Материально-техническое обеспечение",
            subitem_link: "/tehnical"
        }
            , {
            subitem_title: "Вакантные места для приема",
            subitem_link: "http://localhost:8000/wp-content/uploads/2020/11/vacantn.pdf"
        }
            , {
            subitem_title: "Стипендии и иные виды материальной поддержки",
            subitem_link: "/stip"
        }
            , {
            subitem_title: "Финансово-хозяйственная деятельность",
            subitem_link: "/fhd"
        }
            , {
            subitem_title: "Платные образовательные услуги",
            subitem_link: "/pay"
        }]
    },
    {
        item_titel: 'Учебная деятельность',
        item_link: "#",
        subitems: [{
            subitem_title: "Численность студентов",
            subitem_link: "/counts"
        }, {
            subitem_title: "График учебного процесса",
            subitem_link: "/grafiki"
        }, {
            subitem_title: "Учебно-исследовательская деятельность ",
            subitem_link: "/edumaterials"
        }, {
            subitem_title: "Государственная итоговая аттестация",
            subitem_link: "/gia"
        }
            , {
            subitem_title: "Расписание звонков",
            subitem_link: "/zvonki"
        }
            , {
            subitem_title: "Общее расписание",
            subitem_link: `http://localhost:8000/wp-content/uploads/2020/11/obshhee_raspisanie.xlsx`
        }
            , {
            subitem_title: "Сессия",
            subitem_link: "/zo"
        }
            , {
            subitem_title: "Олимпиады проф. мастерства",
            subitem_link: "/konkurs"
        }
            , {
            subitem_title: "Демонстрационный экзамен",
            subitem_link: "/demoekzamen"
        }
            , {
            subitem_title: "Дистанционное обучение",
            subitem_link: "/distance-learning"
        }
            , {
            subitem_title: "Независимая оценка качества",
            subitem_link: "/nsoko"
        }]
    },
    {
        item_titel: 'Приемная комиссия',
        item_link: "#",
        subitems: [{
            subitem_title: "Абитуриенту",
            subitem_link: "/abiturient"
        }, {
            subitem_title: "День открытых дверей",
            subitem_link: "/opendoor"
        }, {
            subitem_title: "Набор 2020",
            subitem_link: "/nabor"
        }, {
            subitem_title: "Документы",
            subitem_link: "/ndoc"
        }]
    },
    {
        item_titel: 'Финансовая деятельность',
        item_link: "#",
        subitems: [{
            subitem_title: "Госзадание",
            subitem_link: "/aufgabe"
        }, {
            subitem_title: "Закупки",
            subitem_link: "/purchase"
        }, {
            subitem_title: "Бухотчётность",
            subitem_link: "/bookkeeping"
        }, {
            subitem_title: "Пожертвования",
            subitem_link: "/donations"
        }]
    }, {
        item_titel: 'Внеучебная деятельность',
        item_link: "#",
        subitems: [
            {
            subitem_title: "Профилактика COVID-19",
            subitem_link: "/COVID-19"
        }, {
            subitem_title: "Кружки и секции",
            subitem_link: "/wp-content/uploads/2020/12/kruzhki.pdf"
        }, {
            subitem_title: "Конкурсы",
            subitem_link: "/konkyrsy"
        }, {
            subitem_title: "Конференция",
            subitem_link: "/it_forum"
        }, {
            subitem_title: "Великая Победа ",
            subitem_link: "/pobeda"
        }, {
            subitem_title: "О спорте ",
            subitem_link: "/sport"
        }, {
            subitem_title: "Волонтеры ",
            subitem_link: "/volonters"
        }, {
            subitem_title: "Территория возможностей",
            subitem_link: "#"
        }, {
            subitem_title: "Формула успеха ",
            subitem_link: "/formula_uspeha"
        }, {
            subitem_title: "Музей связи ",
            subitem_link: "/musey_svazy"
        }]
    },
    {
        item_titel: 'Информационные ресурсы',
        item_link: "#",
        subitems: [{
            subitem_title: "Трудоустройство ",
            subitem_link: "/trudoustroistvo"
        }, {
            subitem_title: "Директор ON-Line",
            subitem_link: "/reception"
        }, {
            subitem_title: "Ссылки",
            subitem_link: "/links"
        }, {
            subitem_title: "РУМО",
            subitem_link: "/mo"
        }
            , {
            subitem_title: "Выпускникам",
            subitem_link: "/vipusknik"
        }
            , {
            subitem_title: "Работодателям",
            subitem_link: "/rabotodatel"
        }
            , {
            subitem_title: "Город профессионалов",
            subitem_link: "/gorodprof"
        }
            , {
            subitem_title: "Противодействие коррупции",
            subitem_link: "/corrupt"
        }
            , {
            subitem_title: "Бесплатная юридическая помощь",
            subitem_link: "/justece"
        }
            , {
            subitem_title: "Телефон доверия",
            subitem_link: "/teldov"
        }
            , {
            subitem_title: "Детский телефон доверия",
            subitem_link: "/detski-teldov"
        }
            , {
            subitem_title: "Антитеррор и пожарная безопасность",
            subitem_link: "/antiterror"
        }
            , {
            subitem_title: "Информационная безопасность",
            subitem_link: "/information_security"
        }
            , {
            subitem_title: "Инклюзивное образование",
            subitem_link: "/invalid"
        }
        ]
    }


    ]
    return (

        menuArr.map((item) => <div className="menu-list__el">
            <TransitionListmenucomponent item={item}></TransitionListmenucomponent>
        </div>

        )

    )

}

export default ItemsSlideBar
