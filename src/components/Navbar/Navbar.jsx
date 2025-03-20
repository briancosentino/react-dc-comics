import React from 'react'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
    const [menu, setMenu] = useState('Comics')

    return (
        <div className='navbar'>
            <div className="container">

                <div className="left-nav">
                    <img src="../../public/dc-comics-1/img/dc-logo.png" alt="" />
                </div>
                <div className="right-nav">
                    <ul className='nav-links'>
                        <li onClick={() => setMenu('Characters')} className={`${menu === 'Characters' ? 'active' : ''}`} >Characters</li>
                        <li onClick={() => setMenu('Comics')} className={`${menu === 'Comics' ? 'active' : ''}`} >Comics</li>
                        <li onClick={() => setMenu('Movies')} className={`${menu === 'Movies' ? 'active' : ''}`} >Movies</li>
                        <li onClick={() => setMenu('Tv')} className={`${menu === 'Tv' ? 'active' : ''}`} >TV</li>
                        <li onClick={() => setMenu('Games')} className={`${menu === 'Games' ? 'active' : ''}`} >Games</li>
                        <li onClick={() => setMenu('Collectibles')} className={`${menu === 'Collectibles' ? 'active' : ''}`} >Collectibles</li>
                        <li onClick={() => setMenu('Videos')} className={`${menu === 'Videos' ? 'active' : ''}`} >Videos</li>
                        <li onClick={() => setMenu('Fans')} className={`${menu === 'Fans' ? 'active' : ''}`} >Fans</li>
                        <li onClick={() => setMenu('News')} className={`${menu === 'News' ? 'active' : ''}`} >News</li>
                        <li onClick={() => setMenu('Shop')} className={`${menu === 'Shop' ? 'active' : ''}`} >Shop</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
