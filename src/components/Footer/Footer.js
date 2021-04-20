import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {NavbarContainer,NavLogo,NavMenu,NavItem,NavLinks} from "../NavBar/NavBarElements"
import "./footer.css"

function Footer(){
    return(
        <div className="footer-container">
                <NavbarContainer>
                        <NavLogo to="/">
                            <StaticImage src="../../images/website-logo.png"/>
                        </NavLogo>
                        <NavMenu >
                            <NavItem>
                            <NavLinks to="https://bscscan.com/address/0x07ea9c3d5fdcfd51004671d144ba6acb16817382">Smart Contract</NavLinks>
                            </NavItem>
                            <NavItem>
                            <NavLinks to="https://t.me/safemammoth">Telegram</NavLinks>
                            </NavItem>
                            <NavItem>
                            <NavLinks to="https://twitter.com/SafeMammoth">Twitter</NavLinks>
                            </NavItem>
                            <NavItem>
                            <NavLinks to="https://safemammoth.medium.com/beginning-of-safe-mammoth-16d0c45de6e8">Medium</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">Liquidity Lock</NavLinks>
                            </NavItem>
                            <NavItem>
                            <NavLinks to="/">DXSale</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
        </div>
    )
}

export default Footer