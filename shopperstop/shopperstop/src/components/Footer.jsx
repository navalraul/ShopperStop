
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id='Fmain'>
            <div className='Ftop'>
                <div className='Ftop-fi'>
                    <div className='Ftop-fi-same'>
                        <i class="fa-solid fa-medal fa-lg" style={{ color: "gray" }}></i>
                        <p>Authentic Products</p>
                    </div>
                    <div className='Ftop-fi-same'>
                        <i class="fa-solid fa-store fa-l" style={{ color: "gray" }}></i>
                        <p>Express Store Pickup</p>
                    </div>
                    <div className='Ftop-fi-same'>
                        <i class="fa-regular fa-circle-check" style={{ color: "gray" }}></i>
                        <p>Secure Payment</p>
                    </div>
                    <div className='Ftop-fi-same'>
                        <i class="fa-solid fa-arrow-rotate-right fa-lg" style={{ color: "gray" }}></i>
                        <p>Easy return and Exchange</p>
                    </div>
                </div>
                <div className='Ftop-se'>
                    <input placeholder='Brands' />
                </div>
            </div>
            {/* <div className='Fbot'>
                <div className='Fbot-fi'>
                    <p>Pay Securely By</p>
                    <img src=''/>
                </div>
                <div className='Fbot-se'>2</div>
                <div className='Fbot-th'>3</div>
                <div className='Fbot-fo'>4</div>
                <div className='Fbot-ff'>5</div>
            </div> */}
        </div>
    )
}

export default Footer;
