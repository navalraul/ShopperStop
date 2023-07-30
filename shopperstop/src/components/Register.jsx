
import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [userData, setUserData] = useState({ name: "", email: "", password:""});
    const router = useNavigate();

    const handleChange = (event) =>{
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password) {

            const array = JSON.parse(localStorage.getItem("Users")) || [];
            const Ls = { name: userData.name,
                 email: userData.email, password: userData.password, cart: []};
            
            array.push(Ls);

            localStorage.setItem("Users",JSON.stringify(array));
            alert("Registration Successful..")
            router('/login')
            
        } else {
            alert("Please fill all the fields")
        }
    }


  return (
    <div id='Rmain'>
      <div className='Center'>
        <div className='Rimg'>
            <img src='https://www.chittorgarh.com/images/ipo/shoppers-stop-rights-issue.jpg' />
        </div>
        <div className='Rtext'>
            <h3>Register</h3>
            <h4>for a tailored experience</h4>
        </div>
        <div className='Rinfo'>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' onChange={handleChange} name='name'/><br/>
                <label>Email</label><br />
                <input type='email' onChange={handleChange} name='email' /><br/>
                <label>Password</label><br />
                <input type='password' onChange={handleChange} name='password' /><br/>
                <input type='submit' value='Register'/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
