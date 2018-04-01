import React from 'react';
import {NavLink} from 'react-router-dom';
import gbr from '../img/gbr.png';
import russia from '../img/russia.png';


class Home extends React.Component {  

    componentWillMount(){
        this.props.headerStatusChange();
    }

    componentWillUnmount(){
        this.props.headerStatusChange();
    }

    render(){
        return(
            <div className="home-wrapper">
                <div className="lang-set">
                    <span className="lang-descr">{this.props.homeData.lang}</span>
                    <div className="lang-logo">
                        <img onClick={this.props.language} src={this.props.currentLang === 'EN' ? gbr : russia} alt="img here"/>
                    </div>
                </div>
                <div className="home">
                    {this.props.homeData.test}
                </div>
                <NavLink to='/portfolio-page/about' className='next-btn-wrp'>
                    <i className="material-icons next-button">arrow_forward</i>
                </NavLink>
            </div>
        )
    }
}

export default Home;

