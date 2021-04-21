import React from 'react';
import "./map.css"

function Map({title,active,content}){
    const contents = content.map(item=>
        <li key={item}>{item}</li>);
        
    return(
        <div className="map-container">
            <div className="map-title">{title}</div>
            <div className="active">{active}</div>
            <div className="map-content-container">
                <ul className="map-content">{contents}</ul>
            </div>
        </div>
    )
}
export default Map