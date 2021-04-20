
import React,{useState,useEffect} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {Nav,NavbarContainer,NavLogo,NavMenu,NavItem,NavLinks} from "./NavBarElements"

const Navbar = () => {
    const [click,setClick] = useState(false)
    const [scroll,setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () =>{
        if(window.scrollY>=80){
            setScroll(true)
        } else{
            setScroll(false)
        }
    }

    useEffect(()=>{
        changeNav()
        window.addEventListener("scroll",changeNav)
    },[])

    return(
        <>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <StaticImage src="../../images/website-logo.png"/>
                        </NavLogo>
                        {/* <MobileIcon onClick={handleClick}>
                            {click?<FaTimes/>:<FaBars/>}
                        </MobileIcon> */}
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">ABOUT</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">KEY CONCEPTS</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">ROADMAP</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">SOCIAL</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
         </>
    )
}

export default Navbar
