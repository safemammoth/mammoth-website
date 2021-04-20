import React from 'react'
import "./allocation.css"



function Allocation({title,content}){
    return(
        <div className="allocation-container">
            <h2>{title}</h2>
            <p>
            {content}
            </p>
        </div>
    )
}

export default Allocation
