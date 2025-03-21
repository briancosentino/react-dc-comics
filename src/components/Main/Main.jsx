import React from 'react'
import './Main.css'
import Jumbotron from '../Jumbotron/Jumbotron'

import ComicsList from '../ComicsList/ComicsList'
const Main = () => {
    return (
        <div className='main'>
            <Jumbotron />
            <div className="container">
                <ComicsList />
            </div>

        </div>
    )
}

export default Main
