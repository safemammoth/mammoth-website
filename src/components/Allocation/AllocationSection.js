import React from 'react';
import Allocation from './Allocation';
import "./allocationSection.css"

function AllocationSection({title}){
    return(
        <div className="allocation-section">
            <h2>{title}</h2>
            <div className="allocations">
            <Allocation title="25% Pre Sale" content="500,000,000 1BNB = 1,500,000"/>
            <Allocation title="35% Pre Sale" content="350,000,000 1BNB = 1,000,000"/>
            </div>
            <div className="allocations">
            <Allocation title="5% Dev" content="50,000,000 - locked for 2months"/>
            <Allocation title="10% Marketing" content="100,000,000 - airdrops, contests and giveaways"/>
            </div>
        </div>
    )
}

export default AllocationSection