import React from 'react'
import './Navbar.css'
import { useState } from 'react'

const Navbar = ({ links }) => {
    const [menu, setMenu] = useState('Comics')
    /*     const links = ['Characters', 'Comics', 'Movies', 'Tv', 'Games', 'Collectibles', 'Videos', 'Fans', 'News', 'Shop']
     */
    return (
        <div className='navbar'>
            <div className="container">

                <div className="left-nav">
                    <img src="../../public/dc-comics-1/img/dc-logo.png" alt="" />
                </div>
                <div className="right-nav">
                    <ul className='nav-links'>
                        {links.map((link, index) => (

                            <li key={index} onClick={() => setMenu(link)} className={`${menu === link ? 'active' : ''}`} >{link}</li>

                        ))}

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
