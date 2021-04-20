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

const Layout = ({ children }) => {

  return (
    <>
    <Navbar/>
    <AboutSection/>
    <ConceptSection title="Key Token Concepts"/>
    <AllocationSection title="Token Allocation"/>
    <RoadMap title="Project Roadmap"/>
    <Footer/>
    </>
  )
}

export default Layout
