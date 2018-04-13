import React from 'react';
import {NavLink} from 'react-router-dom';
import gbr from '../img/gbr.png';
import russia from '../img/russia.png';
import homeLogoOne from '../img/homo-logo.jpg';
import homeLogoTwo from '../img/home-logo2.jpg';


class Home extends React.Component {  
    
    componentWillMount(){
        this.props.headerStatusChange();
    }

    componentWillUnmount(){
        this.props.headerStatusChange();
    }

    render(){
        let bgOne = {
                backgroundImage: `url(${homeLogoOne})`
            },
            bgTwo = {
                backgroundImage: `url(${homeLogoTwo})`
            }
        
        return(
            <div className="home-wrapper" style={this.props.currentLang === 'EN' ? bgOne : bgTwo}>
                <div className="lang-set">
                    <span className="lang-descr">{this.props.homeData.lang}</span>
                    <div className="lang-logo">
                        <img onClick={this.props.language} src={this.props.currentLang === 'EN' ? gbr : russia} alt="img here"/>
                    </div>
                </div>
                <div className="home">
                    <h3>{this.props.homeData.hi}</h3>
                    <p>{this.props.homeData.name}</p>
                    <p>{this.props.homeData.test}</p>
                    <p>{this.props.homeData.tx1}</p>
                    <p>{this.props.homeData.tx2}</p>
                    <p>{this.props.homeData.tx3}</p>
                </div>
                <NavLink to='/portfolio-page/about' className='next-btn-wrp'>
                    <i className="material-icons next-button">arrow_forward</i>
                </NavLink>
            </div>
        )
    }
}

export default Home;

