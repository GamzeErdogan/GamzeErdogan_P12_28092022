import React from 'react'
import navIcon1 from '../images/navIcon1.png'
import navIcon2 from '../images/navIcon2.png'
import navIcon3 from '../images/navIcon3.png'
import navIcon4 from '../images/navIcon4.png'
import logo from '../images/logo.png'
import '../layout/nav-left.css'
import '../layout/nav-top.css'

const MainLayout = () => {
  return (
    <div className='nav'>
        <div className='navHorizantale'>
            <img className='logo' src={logo} alt='logo of the sport see'/>
            <ul className='navHorizantale--ul'>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </div>
        <div className='navVertical'>
            <ul className='navVertical--ul'>
                <li className='navVertical--li'><img src={navIcon2} alt="icon"/></li>
                <li className='navVertical--li'><img src={navIcon1} alt="icon"/></li>
                <li className='navVertical--li'><img src={navIcon3} alt="icon"/></li>
                <li className='navVertical--li'><img src={navIcon4} alt="icon"/></li>
            </ul>
            <p className='navVertical--p'>Copyright, SportSee 2020</p>
        </div>
    </div>
  )
}

export default MainLayout