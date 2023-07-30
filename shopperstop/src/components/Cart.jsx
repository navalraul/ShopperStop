
import React, { useEffect, useState } from 'react';
import './Cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const [finalPrice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const router = useNavigate();

  useEffect(() => {
    if (userCart.length) {
      var totalPrice = 0;
      for (var i = 0; i < userCart.length; i++) {
        totalPrice += userCart[i].price
      }
      setFinalPrice(totalPrice)
    }
  }, [userCart])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
          setUserCart(allUsers[i].cart)
          break;
        }
      }
    } else {
      alert("Please login to see products")
      router('/login')
    }
  },[])

  function buyProducts() {
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
          allUsers[i].cart = [];
          break;
        }
      }
      localStorage.setItem("Users", JSON.stringify(allUsers))
    }
    setFinalPrice(0);
    setUserCart([]);
    alert("Product will deliver soon, Thanks for shopping with us....")
  }


  return (
    <div id='Cmain'>
      <div className='Cinfo'>
        <div className='Cright'>
          {userCart && userCart.map((pro) => (
            <div className='Cright-left'>
              <div className='Cimg'>
                <img src={pro.image} />
              </div>
              <div className='Call'>
                <p>{pro.title}</p>
                <h4>{pro.price}$</h4>
                <button>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className='Cleft'>
          <p>Total MRP : {finalPrice + finalPrice}$</p>
          <p>Total price after 50% dicount : {finalPrice}$ </p>
          <h5>Total Price</h5>

          <button onClick={buyProducts} style={{ width: "50%", backgroundColor: "black", height: "40px", color: "white" }}>Buy Products</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;
