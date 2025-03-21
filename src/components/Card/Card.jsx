import React from 'react'
import './Card.css'

const Card = ({ img, title }) => {
    return (
        <div className='card'>
            <div className="card-content">

                <img src={img}
                    alt={title} />
            </div>
            <p>{title}</p>

        </div>
    )
}

export default Card
