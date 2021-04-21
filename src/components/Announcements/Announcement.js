import React from 'react';
import "./announcement.css"

function Announcement({title,content}){
        
    return(
        <div className="announcement-container">
            <div className="announcement-title">{title}</div>
            <div className="announcement-content">
                    {content}
            </div>
        </div>
    )
}
export default Announcement