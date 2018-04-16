import homeLogoOne from '../img/homo-logo.jpg';
import homeLogoTwo from '../img/home-logo2.jpg';

let styles = {
    bgOne : {
        backgroundImage: `url(${homeLogoOne})`
    },
    bgTwo : {
        backgroundImage: `url(${homeLogoTwo})`
    },
    gradientOne : {
        background: `linear-gradient(to bottom, 
            #fac1c4, 
            #fcc9c5,
            rgba(252, 210, 201, 0.43),
            rgba(252, 219, 206, 0.33),
            rgba(252, 227, 213, 0))`
    },
    gradientTwo : {
        background: `linear-gradient(to bottom,
            rgba(54, 101, 168, 1),
            rgba(144, 243, 103, 0.65),
            rgba(118, 236, 171, 0.68),
            rgb(106, 149, 202, 0.88),
            rgba(113, 137, 201, 0)` 
    }
};
export default styles;