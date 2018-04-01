import React from 'react';
import ToolBarLink from './ToolBarLink';

const HeaderDesktop = ({textColor, headerData, ...props}) => {
    return(
        <div className='header-sub-wrp'>
            <div className="header-logo">
                <div className="logo"> </div>

                <div className="logo-text">
                    <span className='name' style={{color:textColor}} >Dmitry</span>
                    <span className='name' style={{color:textColor}} >Chekunov</span>
                    <span>web-development</span>
                </div>
            </div>

            <nav className='nav-mobile'>   
                <ToolBarLink exact to='/portfolio-page/home'  className='header-menu hdr-menu-1' icon='home'>{headerData.hdr0}</ToolBarLink>
                <ToolBarLink to='/portfolio-page/about'  className='header-menu hdr-menu-2' icon='person'>{headerData.hdr1}</ToolBarLink>
                <ToolBarLink to='/portfolio-page/Portfolio'  className='header-menu hdr-menu-3' icon='insert_photo'>{headerData.hdr2}</ToolBarLink>
                <ToolBarLink to='/portfolio-page/contacts'  className='header-menu hdr-menu-4' icon='record_voice_over'>{headerData.hdr3}</ToolBarLink>
                <ToolBarLink to='/portfolio-page/resume'  className='header-menu hdr-menu-5' icon='content_paste'>{headerData.hdr4}</ToolBarLink>                    
            </nav>
        </div>
    )
}

export default HeaderDesktop;