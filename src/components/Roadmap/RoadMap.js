import React from 'react'
import "./roadmap.css"

import Map from "./Map"

function RoadMap({title}){

    const map1Const = ["Project Conceptualization","Social Media Exploration","Website Creation","Smart Contract Development","Token Deployment to BSC Network",
    "DX Sale Presale Live","Pancakeswap Listing","Listing to other exchanges"];
    const map2Const = ["AMM and Dex Development","NFT Marketplace Development","Gamification and Lotteries Development","Certik Audit","Deployment of Part2"]

    return(
        <div className="roadmap-container">
            <h2>{title}</h2>
            <div className="map">
            {/* check &#10004; */}
            <Map title="Part1 - Q2 2021" active="&#x25a2;" content={map1Const}/>
            <Map title="Part2 - Q4 2021" active="&#x25a2;" content={map2Const}/>
            </div>
        </div>
    )
}
export default RoadMap