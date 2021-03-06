//html
import htmlLogo from '../img/html5.png';
import haml from '../img/haml.png';
//css
import css3 from '../img/css3.png';
import sass from '../img/sass.png';
import bootstrap from '../img/bootstrap.png';
import foundation from '../img/yeti.png';
import flexbox from '../img/flex-box.png';
//js
import jsLogo from '../img/js-logo.png';
import babel from '../img/babel.png';
import reactLogo from '../img/react-icon.png';
import jqLogo from '../img/jquerry.png';
import reactRouterIcon from '../img/react-router.png';
import webpackLogo from '../img/webpack.png';
//other
import psLogo from '../img/ps.png';
import illustrator from '../img/illustartor.png';
import gitLogo from '../img/git.png';
import bower from '../img/bower.png';

const totalDataRU = {
    headerData : {
        hdr0: 'Главная',
        hdr1: 'Навыки',
        hdr2: 'Проекты',
        hdr3: 'Контакты',
        hdr4: 'Резюме'
    },

    techData : [
        {
            id:1,
            caption: 'HTML',
            skills:[
                {
                    img: htmlLogo,
                    name: 'HTML5'
                },
                {
                    img: haml,
                    name: 'Haml'
                },
                {
                    img: reactLogo,
                    name: 'JSX'
                }
            ]
        },
        {   
            id: 2,
            caption: 'CSS',
            skills: [
                {
                    img: css3,
                    name: "CSS3"
                },
                {
                    img: flexbox,
                    name: 'Flex-box'
                },
                {
                    img: sass,
                    name: "SASS"
                },
                {
                    img: bootstrap,
                    name: 'Bootstrap'
                },
                {
                    img: foundation,
                    name: 'Foundation'
                }
            ]
        },
        {   
            id: 3,
            caption: 'JS',
            skills: [
                {
                    img: jsLogo,
                    name: "JS ES6"
                },
                {
                    img: babel,
                    name: "Babel"
                },
                {
                    img: jqLogo,
                    name: "JQuerry"
                },
                {
                    img: webpackLogo,
                    name: "Webpack"
                },
                {
                    img: reactLogo,
                    name: "React JS"
                },
                {
                    img: reactRouterIcon,
                    name: 'React-Router'
                }
            ]
        },
        {   
            id: 4,
            caption: 'Other soft',
            skills: [
                {
                    img: psLogo,
                    name: 'Photoshop'
                },
                {
                    img: illustrator,
                    name: 'Illustrator'
                },
                {
                    img: gitLogo,
                    name: 'Git'

                },
                {
                    img: bower,
                    name: 'Bower'
                }
            ]
        }
    ],

    homeData : {
        lang: 'RU',
        hi: 'Привет!',
        name: 'Меня зовут Дмитрий',
        test: `Я начинающий Front-end разработчик из Москвы`,
        tx1: 'Занимаюсь дизайном, версткой и реализацией JS логики ',
        tx2: `А Вы должно быть сейчас на моей страничке-портфолио, и читаете это вступление`,
        tx3: `Добро пожаловать!`
    },
    
    portfolioData : [
        {
            id: 1,
            url: '/img/PMalibuJPG.jpg',
            caption: 'PMalibu',
            subcaption: 'Статичный Landing page для бюро путешествий. Туроператор индвидуальных туров по Азии',
            link: 'https://damanage.github.io/PMalibou/',
            code_link: 'https://github.com/Damanage/PMalibou'
        },
        {
            id: 2,
            url: '/img/savannahLogoJPG.jpg',
            caption: 'Savannah Digest',
            subcaption: 'Страничка с разметкой новостей для колонки в еженедельнике',
            link: 'https://damanage.github.io/Savanah-Digest-Page/',
            code_link: 'https://github.com/Damanage/Savanah-Digest-Page'
        },
        {
            id: 3,
            url: '/img/SomeraLogoJPG.jpg',
            caption: 'Somera Road',
            subcaption: 'A commercial real estate investment firm',
            link: 'https://damanage.github.io/Somera-Road/sonora.html',
            code_link: 'https://github.com/Damanage/Somera-Road'
        },
        {
            id: 4,
            url: '/img/MyscorecardLogo.jpg',
            caption: 'MyScorecard',
            subcaption: 'MyScorecard app. Desktop демо-версия дизайна для конкурса на 99design.com',
            link: 'https://damanage.github.io/myscorecard/',
            code_link: 'https://github.com/Damanage/golf/tree/master/app'
        }
    ]
};

export  default totalDataRU;