import React from 'react';

import phone from '../img/phone.png'
import mail from '../img/email.png'
import git from '../img/github.png'
import linkenid from '../img/linkedin.png'

class Contacts extends React.Component{
    componentWillMount({...props}){
        this.props.aboutRender()
    }
    
    render(){
        return(
            <div className="contacts-page">
                <div className="contacts-header">
                    <span>CONTACTS</span>
                </div>
                <div className="contacts">
                    <div className="contact-list">
                        <div className="contact-item">
                            <a rel="noopener noreferrer" target='_blank' href="https://github.com/Damanage">
                                <img src={git} alt=""/>
                            </a>
                            <div className="contact-text">
                                Git
                            </div>
                        </div>
                        <div className="contact-item">
                            <a rel="noopener noreferrer" target='_blank' href="#">
                                <img src={linkenid} alt=""/>
                            </a>
                            <div className="contact-text">
                                LinkedIn
                            </div>
                        </div>
                        <div className="contact-item">
                            <a rel="noopener noreferrer" target='_blank'>
                                <img src={mail} alt=""/>
                            </a>
                            <div className="contact-text">
                                Email
                            </div>
                        </div>
                        <div className="contact-item">
                            <a rel="noopener noreferrer" target='_blank'>
                                <img src={phone} alt=""/>
                            </a>
                            <div className="contact-text">
                                Phone
                            </div>
                        </div>
                    </div>
                </div>    
            </div>  
        );
    }
}


export default Contacts;