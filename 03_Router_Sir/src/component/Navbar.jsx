import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            {/* By the Navlink we can navigate to the different pages of the application without reloading the page. It is used to create navigation links in a React application that uses React Router for routing. The NavLink component is similar to the Link component, but it provides additional styling options for active links.
            Help of 'To' property we can navigate to the different pages of the application without reloading the page. It is used to create navigation links in a React application that uses React Router for routing. The NavLink component is similar to the Link component, but it provides additional styling options for active links. */}
            <li><NavLink to={"/"}>About</NavLink></li>
            <li><NavLink to={"/content"}>Content</NavLink></li>
            <li><NavLink to={"/service"}>Service</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar