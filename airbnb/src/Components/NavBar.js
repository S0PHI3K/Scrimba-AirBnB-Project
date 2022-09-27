import React from "react"
import logo from '../Images/airbnb.png'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt='AirBnB logo' className='NavLogo'/>
        </nav>
    )
}