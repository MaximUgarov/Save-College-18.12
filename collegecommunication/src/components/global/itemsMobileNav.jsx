import React, { Component, Fragment, useState, useContext } from 'react'
import './styles/leftmenu.css'
import ItemsMobileTransitionListmenucomponent from './ItemsMobileTransitionListmenucomponent'
import { Context } from './context'
const MobileItemsSlideBar = ({OpenMobileNav}) => {

    const [OpenMenu, setOpenMenu] = useState(false)
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
                subitem_link: "#"
            }
                , {
                subitem_title: "Вакантные места для приема",
                subitem_link: "#"
            }
                , {
                subitem_title: "Стипендии и иные виды материальной поддержки",
                subitem_link: "#"
            }
                , {
                subitem_title: "Финансово-хозяйственная деятельность",
                subitem_link: "#"
            }
                , {
                subitem_title: "Платные образовательные услуги",
                subitem_link: "#"
            }]
        },
        {
            item_titel: 'Учебная деятельность',
            item_link: "#",
            subitems: [{
                subitem_title: "Численность студентов",
                subitem_link: "#"
            }, {
                subitem_title: "График учебного процесса",
                subitem_link: "#"
            }, {
                subitem_title: "Учебно-исследовательская деятельность ",
                subitem_link: "#"
            }, {
                subitem_title: "Государственная итоговая аттестация",
                subitem_link: "#"
            }
                , {
                subitem_title: "Расписание звонков",
                subitem_link: "#"
            }
                , {
                subitem_title: "Общее расписание",
                subitem_link: "#"
            }
                , {
                subitem_title: "Сессия",
                subitem_link: "#"
            }
                , {
                subitem_title: "Олимпиады проф. мастерства",
                subitem_link: "#"
            }
                , {
                subitem_title: "Демонстрационный экзамен",
                subitem_link: "#"
            }
                , {
                subitem_title: "Дистанционное обучение",
                subitem_link: "#"
            }
                , {
                subitem_title: "Независимая оценка качества",
                subitem_link: "#"
            }]
        },
        {
            item_titel: 'Приемная комиссия',
            item_link: "#",
            subitems: [{
                subitem_title: "Абитуриенту",
                subitem_link: "#"
            }, {
                subitem_title: "День открытых дверей",
                subitem_link: "#"
            }, {
                subitem_title: "Набор 2020",
                subitem_link: "#"
            }, {
                subitem_title: "Документы",
                subitem_link: "#"
            }]
        },
        {
            item_titel: 'Финансовая деятельность',
            item_link: "#",
            subitems: [{
                subitem_title: "Госзадание",
                subitem_link: "#"
            }, {
                subitem_title: "Закупки",
                subitem_link: "#"
            }, {
                subitem_title: "Бухотчётность",
                subitem_link: "#"
            }, {
                subitem_title: "Пожертвования",
                subitem_link: "#"
            }]
        }, {
            item_titel: 'Внеучебная деятельность',
            item_link: "#",
            subitems: [{
                subitem_title: "Новости",
                subitem_link: "#"
            }, {
                subitem_title: "Профилактика COVID-19",
                subitem_link: "#"
            }, {
                subitem_title: "Кружки и секции",
                subitem_link: "#"
            }, {
                subitem_title: "Конкурсы",
                subitem_link: "#"
            }, {
                subitem_title: "Конференция",
                subitem_link: "#"
            }, {
                subitem_title: "Великая Победа ",
                subitem_link: "#"
            }, {
                subitem_title: "О спорте ",
                subitem_link: "#"
            }, {
                subitem_title: "Волонтеры ",
                subitem_link: "#"
            }, {
                subitem_title: "Территория возможностей",
                subitem_link: "#"
            }, {
                subitem_title: "Формула успеха ",
                subitem_link: "#"
            }, {
                subitem_title: "Музей связи ",
                subitem_link: "#"
            }]
        },
        {
            item_titel: 'Информационные ресурсы',
            item_link: "#",
            subitems: [{
                subitem_title: "Трудоустройство ",
                subitem_link: "#"
            }, {
                subitem_title: "Директор ON-Line",
                subitem_link: "/reception"
            }, {
                subitem_title: "Ссылки",
                subitem_link: "#"
            }, {
                subitem_title: "РУМО",
                subitem_link: "#"
            }
                , {
                subitem_title: "Выпускникам",
                subitem_link: "#"
            }
                , {
                subitem_title: "Работодателям",
                subitem_link: "#"
            }
                , {
                subitem_title: "Город профессионалов",
                subitem_link: "#"
            }
                , {
                subitem_title: "Противодействие коррупции",
                subitem_link: "#"
            }
                , {
                subitem_title: "Бесплатная юридическая помощь",
                subitem_link: "#"
            }
                , {
                subitem_title: "Телефон доверия",
                subitem_link: "#"
            }
                , {
                subitem_title: "Детский телефон доверия",
                subitem_link: "#"
            }
                , {
                subitem_title: "Антитеррор и пожарная безопасность",
                subitem_link: "#"
            }
                , {
                subitem_title: "Информационная безопасность",
                subitem_link: "#"
            }
                , {
                subitem_title: "Инклюзивное образование",
                subitem_link: "#"
            }
            ]
        }


    ]
    return (

        menuArr.map((item) => 
            <ItemsMobileTransitionListmenucomponent item={item}></ItemsMobileTransitionListmenucomponent>
        

        )

    )

}

export default MobileItemsSlideBar
