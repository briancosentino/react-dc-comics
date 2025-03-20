import React from 'react'
import './Feature.css'

const Feature = ({ img, text }) => {
    return (
        <div className='feature'>
            <img src={img} alt="" />
            <h3>{text}</h3>

        </div>
    )
}

export default Feature
