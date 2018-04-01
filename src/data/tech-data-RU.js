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
        test: `Лорем Ипсум Хуитцум Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nulla voluptates voluptatibus, expedita amet dolor libero quam laudantium facilis.
            Aperiam reprehenderit, saepe alias nemo maxime praesentium.
            Architecto maiores quod nisi facere?
            
            `
    },
    
    portfolioData : [
        {
            id: 1,
            url: '/img/duck.jpg',
            caption: 'Мишаня'
        },
        {
            id: 2,
            url: '/img/duck.jpg',
            caption: 'Большой джо майбах'
        },
        {
            id: 3,
            url: '/img/duck.jpg',
            caption: 'Project three'
        },
        {
            id: 4,
            url: '/img/duck.jpg',
            caption: 'Project four'
        }
    ]
};
export  default totalDataRU;