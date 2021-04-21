import { Link } from 'gatsby';
import React from 'react'
import "./social.css"

function SocialSection({title}){
    return(
        <>
        <div className="social-container">
        <h2>{title}</h2>
        <div className="socials">
        <Link className="links" to="https://bscscan.com/address/0x07ea9c3d5fdcfd51004671d144ba6acb16817382">Smart Contracts</Link>
        <Link className="links" to="https://t.me/safemammoth">Telegram</Link>
        <Link className="links" to="https://twitter.com/SafeMammoth">Twitter</Link>
        <Link className="links" to="https://safemammoth.medium.com/beginning-of-safe-mammoth-16d0c45de6e8">Medium</Link>
        {/* <Link className="links" to="">Liquidity Lock</Link> */}
        <Link className="links" to="https://dxsale.app/app/pages/defipresale?saleID=1379&chain=BSC">DXSale</Link>
        </div>
        </div>
        </>
    )
}

export default SocialSection
