import { Link } from 'gatsby';
import React from 'react';
import "./announcement.css"

function Announcement({title,content,linkname,link}){
        
    return(
        <div className="announcement-container">
            <div className="announcement-title">{title}</div>
            <div className="announcement-content">
                    {content}
                    <br></br>
            <Link to={link}>{linkname}</Link>
            </div>
        </div>
    )
}
export default Announcement