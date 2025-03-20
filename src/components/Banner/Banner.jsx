import React from 'react'
import './Banner.css'
import Feature from '../Feature/Feature'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <Feature
                    img='/public/dc-comics-1/img/buy-comics-digital-comics.png'
                    text='digital comics'
                />
                <Feature
                    img='/public/dc-comics-1/img/buy-comics-merchandise.png'
                    text='dc merchandise'
                />
                <Feature
                    img='/public/dc-comics-1/img/buy-comics-subscriptions.png'
                    text='subscriptions'
                />
                <Feature
                    img='/public/dc-comics-1/img/buy-comics-shop-locator.png'
                    text='comic shop locator'
                />
                <Feature
                    img='/public/dc-comics-1/img/buy-dc-power-visa.svg'
                    text='dc power visa'
                />
            </div>

        </div>
    )
}

export default Banner
