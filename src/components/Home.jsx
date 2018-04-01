import React from 'react';
import {NavLink} from 'react-router-dom';


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
                <div className="home">
                    {this.props.homeData.test}
                </div>
                <button onClick={this.props.language} >Russian</button>
                <NavLink to='/portfolio-page/about' className='next-btn-wrp'>
                    <i className="material-icons next-button">arrow_forward</i>
                </NavLink>
            </div>
        )
    }
}

export default Home;

