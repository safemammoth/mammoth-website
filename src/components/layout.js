/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import "./layout.css"
import Navbar from "./NavBar/Navbar"
import AboutSection from "./About/About"
import ConceptSection from "./Concepts/ConceptSection"
import AllocationSection from "./Allocation/AllocationSection"
import Footer from "./Footer/Footer"
import RoadMap from "./Roadmap/RoadMap"
import SocialSection from "./Social/SocialSection"
import AnnouncementSection from "./Announcements/AnnouncementSection"

const Layout = ({ children }) => {

  return (
    <>
    <Navbar/>
    <AboutSection/>
    <ConceptSection title="Key Token Concepts"/>
    <AllocationSection title="Token Allocation"/>
    <RoadMap title="Project Roadmap"/>
    <AnnouncementSection title="Announcements"/>
    <SocialSection title="Links"/>
    <Footer/>
    </>
  )
}

export default Layout
