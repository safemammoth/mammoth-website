import React from 'react';
import Concept from './Concept';
import "./conceptsection.css"

function ConceptSection({title}){
    return(
        <div className="concept-section">
            <h2>{title}</h2>
            <div className="concepts">
            <Concept title="Unraggable" content="Liquidity is locked in PancakeSwap and ownership of the contract has been transferred to the burn address."/>
            <Concept title="Safe Auto-farming" content="2% of all transactions are distributed to holders. Watch your wallet climb the minute you begin holding."/>
            <Concept title="Continuously Rising Price Floor" content="3% of every transaction is burned, creating an ever rising price floor."/>
            </div>
        </div>
    )
}

export default ConceptSection