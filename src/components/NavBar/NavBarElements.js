import styled from "styled-components"
import {Link} from "gatsby"

export const Nav = styled.nav`
 height:90px;
 display:flex;
 justify-content:center;
 align-items:center;
 font-size: 1em;
 position:sticky;
 top:0;
 z-index:999;
 background-color: rgb(147, 206, 244);

 @media screen and (max-width:960px){
     background:${({click})=>(click?"#fff":"#fff")};
     transition: 0.8s all ease;
 }
`
export const NavbarContainer = styled.div`
 display:flex;
 justify-content: space-between;
 height:80px;
 z-index:1;
 width:100%;
 margin:20px;
 max-width:1620px;
`

export const NavLogo = styled(Link)`
justify-self: flex-start;
cursor:pointer;
text-decoration:none;
display:flex;
align-items:left;
 height:80px;
 width:450px;

 @media screen and (max-width:1060px){
    transition: all 0.2s ease;
    align-self:center;
    height:40px;
    width:225px;
 }
`

export const MobileIcon = styled.div`
display:none;

 @media screen and (max-width:960px){
     display:block;
     position:absolute;
     right:0;
     margin:5px;
     margin-top:15px;
     transform:translate(-100%,60%);
     font-size:1.8rem;
     cursor:pointer;
 }
`

export const NavMenu =  styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width:960px){
        display:flex;
        flex-direction: column;
        width:100%;
        height:90vh;
        position:absolute;
        top:${({click})=> (click?"100%":"-1000px")};
        opacity:1;
        transition: all 0.2s ease;
        background: #fff;
    }
`

export const NavItem = styled.li`
    height:80px;

    @media screen and (max-width:960px){
        width: 100%;
    }
`

export const NavLinks = styled(Link)`
    color:rgb(0,78,128);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: Sansita-Bold;
    font-size: 20pt;

    @media screen and (max-width:960px){
        text-align:center;
        padding: 2rem;
        width:100%;
        display:table;

        $:hover{
            color:#ff4040;
            transition: all 0.3s ease;
        }
    }
`