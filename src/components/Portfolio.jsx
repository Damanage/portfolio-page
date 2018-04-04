import React from 'react';
import PortfolioItem from './PortfolioItem';


class Portfolio extends React.Component {
    componentWillMount({...props}){
        this.props.aboutRender()
    }
    
    render(){
        return(
            <div className="portfolio-page">
               <div className="portfolio-header">
                    <span>PROJECTS</span>
               </div> 
        
                <div className="portfolio-wrp">
                    <div className="portfolio-item-list">
                        {this.props.portfolioData.map(item => 
                            <PortfolioItem
                                key={item.id}
                                caption={item.caption}
                                subcaption={item.subcaption}
                                imgLink={process.env.PUBLIC_URL + item.url}
                                itemClass={ item.id % 2 === 0 ? "portfolio-item second" : "portfolio-item first" }
                                link={item.link}
                            />
                        )}
                        <div className="last-item">Костыль для старых телефонов :( </div>
                    </div>
                </div>
        
            </div>
        )
    }
}


export default Portfolio;