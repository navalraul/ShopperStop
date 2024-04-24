import React from 'react';
import './Profile.css'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const router = useNavigate();

    return (
        <div id='Pmain'>
            <div className='Hnav'>
                <div className='Hnav-fi'>
                    <h5 onClick={() => router('/multi-product')}>CATEGORIES</h5>
                    <h4>LUXE</h4>
                    <h5>BARGAINS</h5>
                    <h5>STYLE HUB</h5>
                </div>
                <div className='Hnav-se'>
                    <p>MEN</p>
                    <p>WOMEN</p>
                    <p>BEAUTY</p>
                    <p>WATCHES</p>
                    <p>KIDS</p>
                    <p>HOMESTOP</p>
                    <p>GIFTS</p>
                    <p>BRANDS</p>
                </div>
            </div>
            <div className='Pbot'>
                <div className='Edit-left'>
                    <div className='Edit-le-top'>
                        <div className='Edit-le-top-fi'>
                            <div className='Edit-img'>
                                <img src='https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/iconmyprofile.svg' />
                            </div>
                            <div className='Edit-info'>
                                <p>Name : Naval</p>
                                <p>Email: naval@gmail.com</p>
                            </div>
                        </div>
                        <div className='Edit-le-top-se'>
                            <button>Change Password</button>
                        </div>
                    </div>
                    <div className='Edit-le-bot'>
                        <div>
                            <p>My Offers</p>
                        </div>
                        <div>
                            <p>My First Citizen Points</p>
                        </div>
                        <div>
                            <p>My Wallet</p>
                        </div>
                        <div>
                            <p>My Transaction</p>
                        </div>
                        <div>
                            <p>My Wardrobe</p>
                        </div>
                        <div>
                            <p>My Address Book</p>
                        </div>
                        <div>
                            <p>Logout</p>
                        </div>
                        <div>
                            <p>DeleteProfile</p>
                        </div>
                    </div>
                </div>
                <div className='Edit-right'>
                    <div className='Edit-ri-fi'>
                        <h3>PERSONAL INFORMATION</h3>
                    </div>
                    <div className='Edit-ri-se'>
                        <div>
                            <p>First name</p>
                            <span>Naval</span>
                        </div>
                        <div>
                            <p>Last name</p>
                            <span>Raul</span>
                        </div>
                        <div>
                            <p>Email address</p>
                            <span>naval@g</span>
                        </div>
                        <div>
                            <p>Mobile Number</p>
                            <span>915154</span>
                        </div>
                        <div>
                            <p>Gender</p>
                            <span>Male</span>
                        </div>
                    </div>
                    <div className='Edit-ri-th'>
                        <button>Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
