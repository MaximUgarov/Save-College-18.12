import React  from 'react'

const SubBooksComponent = () => {

    const resourcesArr = [{
        link: '#',
        title: 'Образовательные интернет-ресурсы:',
        descr: [{ text: 'InternetUrok.ru', link: '#' }, { text: 'Российская электронная школа', link: '#' }, { text: 'Открытое образование', link: '#' }, { text: 'Единая коллекция цифровых образовательных ресурсов', link: '#' }, { text: 'Информационно-коммуникационные технологии в образовании', link: '#' }, { text: 'Портал информационной поддержки единого государственного экзамена', link: '#' }, { text: 'Российское образование', link: '#' }, { text: 'едеральный центр информационно-образовательных ресурсов', link: '#' }]
    }, {
        link: '#',
        title: 'Сайты библиотек:',
        descr: [{ text: 'Вологодская областная универсальная научная библиотека', link: '#' }, { text: 'Вологодская централизованная библиотечная система', link: '#' }, { text: 'Президентская библиотека им. Б.Н. Ельцина', link: '#' }, { text: 'Российская государственная библиотека', link: '#' }, { text: 'Российская национальная библиотека', link: '#' }]
    }, {
        link: '#',
        title: 'Архивы журналов:',
        descr: [{ text: 'Безопасность жизнедеятельности', link: '#' }, { text: 'Вестник связи / Почтовая связь. Техника и технологии', link: '#' }, { text: 'Иксмедиа', link: '#' }, { text: 'Информационная безопасность', link: '#' }, { text: 'Литература в школе', link: '#' }, { text: 'Радио', link: '#' }, { text: 'Секретарское дело', link: '#' }, { text: 'Сети и системы связи', link: '#' }, { text: 'Вестник образования', link: '#' }]
    }, {
        link: '#',
        title: 'Энциклопедические ресурсы:',
        descr: [{ text: 'Глоссарий', link: '#' }, { text: 'Кругосвет', link: '#' }, { text: ' Культура в Вологодской области', link: '#' }, { text: 'Megabook', link: '#' }, { text: 'Мир энциклопедий', link: '#' }, { text: 'Русский биографический словарь', link: '#' }, { text: 'Словари и энциклопедии на Академике', link: '#' }]
    }]

    return (
    resourcesArr.map((item) =><div className="resources-block">{item.title}{item.descr.map((subitems) => <span className="resources-block-linkText"><a className="resources-block-link" href={subitems.link}>{subitems.text}</a></span>)}</div>)
    )
}
export default SubBooksComponent