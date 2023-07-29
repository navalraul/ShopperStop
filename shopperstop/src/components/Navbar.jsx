
import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const router = useNavigate();

  return (
    <div id='Nmain'>
        <div className="Navfi">
            <h5>First Citizen Club</h5>
            <h5>All Stores</h5>
            <h5>Help & Support</h5>
        </div>
        <div className='Navse'>
            <img src='https://prodstatic.shoppersstop.com/_ui/updated_path/images/shopperstopimgaes_web/newLogo.svg' />
        </div>
        <div className='Navth'>
            <div>
                <input type='text' placeholder='Search Products & Brands'/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            <i class="fa-regular fa-circle-user" onClick={ ()=> router('/register')}></i>
        </div>
        
      
    </div>
  )
}

export default Navbar;
