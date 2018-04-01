import React from 'react';
import ToolBarLink from './ToolBarLink';
// import Logo from './Logo';

class HeaderMobile extends React.Component{
    constructor(props){
        super(props)

        this.menuShower = this.menuShower.bind(this); 
    }

    menuShower(){
        const sideNav = document.querySelectorAll('.nav-mobile');
        sideNav[0].classList.toggle('nav-mobile-active');
    }

    render({headerData, ...props}){
        return(
            <div className="header-sub-wrp">
                <div className="header-logo">
                    <div className="menu-icon">
                        <i onClick={this.menuShower} className="material-icons">menu</i> 
                    </div>

                    <div className="logo-text">
                        <span className='name' style={{color: this.props.textColor}}>Dmitry</span>
                        <span className='name' style={{color: this.props.textColor}}>Chekunov</span>
                        <span className='spec'>web-development</span>
                    </div>

                </div>

                <nav className='nav-mobile'> 
                    <div className="nav-wrapper">
                        <ToolBarLink exact to='/portfolio-page/home'  className='header-menu hdr-menu-1' icon='home'>{headerData.hdr0}</ToolBarLink>
                        <ToolBarLink to='/portfolio-page/about'  className='header-menu hdr-menu-2' icon='person'>{headerData.hdr1}</ToolBarLink>
                        <ToolBarLink to='/portfolio-page/Portfolio'  className='header-menu hdr-menu-3' icon='insert_photo'>{headerData.hdr2}</ToolBarLink>
                        <ToolBarLink to='/portfolio-page/contacts'  className='header-menu hdr-menu-4' icon='record_voice_over'>{headerData.hdr3}</ToolBarLink>
                        <ToolBarLink to='/portfolio-page/resume'  className='header-menu hdr-menu-5' icon='content_paste'>{headerData.hdr4}</ToolBarLink>                    
                    </div>
                    <div className="nav-overlay" onClick={this.menuShower}>
                    </div>  
                </nav>
            </div>

        )
    }
}

export default HeaderMobile;