import React from 'react';

const PortfolioItem = ({ imgAlt, subcaption,code_link, caption, imgLink, link, itemClass, ...props}) => {
    return(
        <figure className={itemClass}>
            <div className="img-wrp">
                <img src={imgLink} alt={imgAlt}/>
            </div>
            <figcaption>
                <h3>{caption}</h3>
                <div className="caption-text">
                    {subcaption}
                </div>
                <div className="links">
                    <a href={link} rel="noopener noreferrer" target='_blank'>Live Demo</a>
                    <a href={code_link} rel="noopener noreferrer" target='_blank'>Code</a>
                </div>
            </figcaption>
        </figure>
    )
}

PortfolioItem.defaultProps = {
    imgAlt: 'alt text for img'
}

export default PortfolioItem;