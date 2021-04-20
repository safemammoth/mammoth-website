import { Link } from 'gatsby';
import React from 'react'
// import { FaFileContract,FaTelegramPlane,FaTwitterSquare } from "react-icons/all-files/"
import "./social.css"

class SocialSection extends React.Component{
    render({title}){
        <IconContext.Provider>
        <div className="social-container">
        <h2>{title}</h2>
        <div className="socials">
        <Link className="links" to="https://bscscan.com/address/0x07ea9c3d5fdcfd51004671d144ba6acb16817382">
            {/* <FaFileContract/> */}
            Smart Contracts</Link>
        <Link className="links" to="https://t.me/safemammoth"> 
        {/* <FaTelegramPlane/>  */}
        Telegram</Link>
        <Link className="links" to="https://twitter.com/SafeMammoth">
             {/* <FaTwitterSquare/> */}
             Twitter</Link>
        <Link className="links" to="https://safemammoth.medium.com/beginning-of-safe-mammoth-16d0c45de6e8">Medium</Link>
        <Link className="links" to="">Liquidity Lock</Link>
        <Link className="links" to="">DXSale</Link>
        </div>
        </div>
        </IconContext.Provider>
    
    }
}

export default SocialSection
