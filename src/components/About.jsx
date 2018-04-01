import React from 'react';
import TechItem from './TechItem';


class About extends React.Component {

    componentWillMount({...props}){
        this.props.aboutRender()
    }
    componentWillUnmount(){
        this.props.aboutRender()
    }

    render(){
        return(
            <div className="about-wrp">
                <div className="about-header">
                    <span>SKILLS</span>     
                </div>
                <div className="about">
                    {this.props.techData.map((item)=>{
                        return <TechItem
                            key={item.id} 
                            caption={item.caption}
                            data={item.skills}
                            />
                            }
                        )
                    }
         
                </div>
            </div>
        )

        
    } 
        

};



export default About;