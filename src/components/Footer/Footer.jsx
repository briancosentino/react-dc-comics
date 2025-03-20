import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="footer-logo">
                    <img src="/public/dc-comics-1/img/dc-logo-bg.png" alt="" />
                </div>
                <div className="footer-container">

                    <div className="col">
                        <h3>dc comics</h3>
                        <ul className="footer-col">
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                            <li>
                                <h3>shop</h3>
                            </li>
                            <li>Shop DC</li>
                            <li>Shop DC collectibles</li>
                        </ul>

                    </div>
                    <div className="col">
                        <h3>dc</h3>
                        <ul className="footer-col">
                            <li>Terms Of Use</li>
                            <li>Privacy Policy (New)</li>
                            <li>Ad Choice</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshop</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>

                        </ul>

                    </div>
                    <div className="col">
                        <h3>sites</h3>
                        <ul className="footer-col">
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>

                        </ul>

                    </div>

                </div>


            </div>
            <div className="footer-banner">
                <div className="container">
                    <div className="left-container">
                        <button className="signup">SIGN-UP NOW!</button>
                    </div>
                    <div className="right-container">
                        <div className="footer-icon">
                            FOLLOW US
                        </div>
                        <div className="footer-icon">
                            <img src="/public/dc-comics-1/img/footer-facebook.png" alt="" />
                        </div>
                        <div className="footer-icon">
                            <img src="/public/dc-comics-1/img/footer-twitter.png" alt="" />
                        </div>
                        <div className="footer-icon">
                            <img src="/public/dc-comics-1/img/footer-youtube.png" alt="" />
                        </div>
                        <div className="footer-icon">
                            <img src="/public/dc-comics-1/img/footer-pinterest.png" alt="" />
                        </div>
                        <div className="footer-icon">
                            <img src="/public/dc-comics-1/img/footer-periscope.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
