
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {


    const [userData, setUserData] = useState({email: "", password: ""});
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users"));

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true;
                    break;
                }
            }
            if (flag == false) {
                return alert("Please Check your email & password")
            } else {
                localStorage.setItem("Current-user", JSON.stringify(userData));
                alert("Login Successfull....");
                setUserData({ email: "", password: "" });
                router('/')
            }
        }
    }

  return (
    <div id='Rmain'>
      <div className='Center'>
        <div className='Rimg'>
            <img src='https://www.chittorgarh.com/images/ipo/shoppers-stop-rights-issue.jpg' />
        </div>
        <div className='Rtext'>
            <h3>Login</h3>
            <h4>for a tailored experience</h4>
        </div>
        <div className='Rinfo'>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input type='email' onChange={handleChange} name='email'/><br/>
                <label>Password</label><br />
                <input type='password' onChange={handleChange} name='password' /><br/>
                <input type='submit' value='Login'/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
