import React from 'react'
import "./concept.css"



function Concept({title,content}){
    return(
        <div className="concept-container">
            <h2>{title}</h2>
            <p>
            {content}
            </p>
        </div>
    )
}

export default Concept
