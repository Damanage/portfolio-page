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

//portfolio
// import pmalibou from '../img/PMalibu.png';
// import sonora from '../img/SomeraLogo.png';
// import savannah from '../img/savannahLogo.png';

const totalDataEN = {
    headerData : {
        hdr0: 'Home',
        hdr1: 'Skills',
        hdr2: 'Projects',
        hdr3: 'Contacts',
        hdr4: 'Resume'
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
        lang: 'EN',
        test: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nulla voluptates voluptatibus, expedita amet dolor libero quam laudantium facilis.
            Aperiam reprehenderit, saepe alias nemo maxime praesentium.
            Architecto maiores quod nisi facere?
            
            `
    },
    
    portfolioData : [
        {
            id: 1,
            url: '/img/PMalibuJPG.jpg',
            caption: 'PMalibu',
            subcaption: 'Exclusive travel services',
            link: 'https://damanage.github.io/PMalibou/',
            code_link: 'https://github.com/Damanage/PMalibou'
        },
        {
            id: 2,
            url: '/img/savannahLogoJPG.jpg',
            caption: 'Savannah Digest',
            subcaption: 'Savannah digest demo-page',
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
            subcaption: 'MyScorecard app. Desktop demo page',
            link: 'https://damanage.github.io/myscorecard/',
            code_link: 'https://github.com/Damanage/golf/tree/master/app'
        }
    ]
};
export  default totalDataEN;
